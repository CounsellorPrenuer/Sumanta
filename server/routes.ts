import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema } from "@shared/schema";
import { 
  insertContactSubmissionSchema, 
  insertPaymentSchema 
} from "@shared/schema";
import { z } from "zod";
import Razorpay from "razorpay";
import crypto from "crypto";
import { sendContactNotificationEmail, sendBookingConfirmationEmail } from "./emailService";
import { 
  sendContactNotificationSMS, 
  sendBookingConfirmationSMS, 
  sendPaymentStatusSMS,
  sendCustomSMS,
  sendBulkSMS
} from "./smsService";
import { 
  sendResourceDownloadEmail,
  sendPaymentConfirmationEmail 
} from "./emailService";

// Initialize Razorpay with your live API keys
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all packages
  app.get("/api/packages", async (req, res) => {
    try {
      const packages = await storage.getAllPackages();
      res.json(packages);
    } catch (error: any) {
      res.status(500).json({ message: "Error fetching packages: " + error.message });
    }
  });

  // Get single package
  app.get("/api/packages/:id", async (req, res) => {
    try {
      const pkg = await storage.getPackage(req.params.id);
      if (!pkg) {
        return res.status(404).json({ message: "Package not found" });
      }
      res.json(pkg);
    } catch (error: any) {
      res.status(500).json({ message: "Error fetching package: " + error.message });
    }
  });

  // Get all blog posts
  app.get("/api/blog-posts", async (req, res) => {
    try {
      const blogPosts = await storage.getAllBlogPosts();
      res.json(blogPosts);
    } catch (error: any) {
      res.status(500).json({ message: "Error fetching blog posts: " + error.message });
    }
  });

  // Get single blog post
  app.get("/api/blog-posts/:id", async (req, res) => {
    try {
      const blogPost = await storage.getBlogPost(req.params.id);
      if (!blogPost) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.json(blogPost);
    } catch (error: any) {
      res.status(500).json({ message: "Error fetching blog post: " + error.message });
    }
  });

  // Get all resources
  app.get("/api/resources", async (req, res) => {
    try {
      const resources = await storage.getAllResources();
      res.json(resources);
    } catch (error: any) {
      res.status(500).json({ message: "Error fetching resources: " + error.message });
    }
  });

  // Submit contact form
  app.post("/api/contact", async (req, res) => {
    try {
      // Transform the incoming data to match the schema
      const { name, email, phone, whoIsThisFor } = req.body;
      
      // Split name into first and last name
      const nameParts = name ? name.trim().split(' ') : ['', ''];
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || nameParts[0] || '';
      
      const transformedData = {
        firstName,
        lastName,
        email: email || '',
        phone: phone || '',
        serviceInterest: whoIsThisFor || 'General Inquiry',
        message: `Name: ${name}\nFor: ${whoIsThisFor}\nPhone: ${phone}\nEmail: ${email}`
      };
      
      const validatedData = insertContactSubmissionSchema.parse(transformedData);
      const submission = await storage.createContactSubmission(validatedData);
      
      // Send email notification
      await sendContactNotificationEmail({
        name,
        email,
        phone, 
        whoIsThisFor
      });
      
      // Send SMS notification to admin
      await sendContactNotificationSMS({
        name,
        email,
        phone,
        whoIsThisFor
      });
      
      res.json(submission);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        console.error("Validation errors:", error.errors);
        return res.status(400).json({ message: "Invalid input data", errors: error.errors });
      }
      console.error("Contact form error:", error);
      res.status(500).json({ message: "Error submitting contact form: " + error.message });
    }
  });

  // Book call route
  app.post("/api/book-call", async (req, res) => {
    try {
      const { name, phone, background } = req.body;
      
      if (!name || !phone || !background) {
        return res.status(400).json({ error: "All fields are required" });
      }

      // Store the call booking data
      const callBooking = {
        id: Date.now().toString(),
        name,
        phone,
        background,
        createdAt: new Date(),
        status: 'pending'
      };

      // In a real app, you'd save this to your database
      // For now, we'll just return success
      res.json({ 
        success: true, 
        message: "Call booked successfully",
        booking: callBooking 
      });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Razorpay order creation route
  app.post("/api/create-razorpay-order", async (req, res) => {
    try {
      const { amount, packageId, customerName, customerEmail, packageName } = req.body;
      
      if (!amount || !packageId || !customerName || !customerEmail) {
        return res.status(400).json({ message: "Missing required payment data" });
      }

      // Create real Razorpay order
      const razorpayOrder = await razorpay.orders.create({
        amount: Math.round(amount * 100), // Convert to paise
        currency: "INR",
        receipt: `receipt_${packageId}_${Date.now()}`,
        notes: {
          packageId,
          customerName,
          customerEmail,
          packageName
        }
      });

      // Store payment record in database
      const paymentData = {
        packageId,
        customerEmail,
        customerName, 
        amount,
        stripePaymentIntentId: razorpayOrder.id, // Store Razorpay order ID
        status: 'pending'
      };

      await storage.createPayment(paymentData);
      
      res.json({ 
        orderId: razorpayOrder.id,
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
        key: process.env.RAZORPAY_KEY_ID!, // Send the key to frontend
        name: "Leadcrest Consulting",
        description: `Payment for ${packageName}`,
        prefill: {
          name: customerName,
          email: customerEmail
        },
        theme: {
          color: "#D4AF37"
        }
      });
    } catch (error: any) {
      console.error("Razorpay order creation error:", error);
      res
        .status(500)
        .json({ message: "Error creating Razorpay order: " + error.message });
    }
  });


  // Payment verification endpoint - Real Razorpay webhook verification
  app.post("/api/verify-payment", async (req, res) => {
    try {
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
      
      if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
        return res.status(400).json({ success: false, message: "Missing payment verification data" });
      }

      // Verify signature using Razorpay's method
      const body = razorpay_order_id + "|" + razorpay_payment_id;
      const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
        .update(body.toString())
        .digest("hex");

      if (expectedSignature === razorpay_signature) {
        // Payment is verified - update status in database
        await storage.updatePaymentStatus(razorpay_order_id, 'completed');
        
        // Get the payment record to access real customer email
        const payments = await storage.getAllPayments();
        const paymentRecord = payments.find(p => p.stripePaymentIntentId === razorpay_order_id);
        
        // Also update any related booking to completed
        const bookings = await storage.getAllBookings();
        const relatedBooking = bookings.find(b => b.razorpayOrderId === razorpay_order_id);
        
        if (relatedBooking) {
          await storage.updateBookingStatus(relatedBooking.id, 'completed');
          
          // Send confirmation email for successful payment (using actual customer email if available)
          const actualCustomerEmail = paymentRecord?.customerEmail || null;
          const emailData = {
            fullName: relatedBooking.fullName,
            email: actualCustomerEmail && actualCustomerEmail.includes('@') 
              ? actualCustomerEmail 
              : `${relatedBooking.mobile}@leadcrest-booking.com`,
            mobile: relatedBooking.mobile,
            packageName: relatedBooking.packageName,
            bookingType: 'investment' as const,
            amount: relatedBooking.amount || undefined,
            currentStage: relatedBooking.currentStage
          };
          
          await sendBookingConfirmationEmail(emailData);
          
          // Send payment confirmation email to customer (if we have a real email)
          if (actualCustomerEmail && actualCustomerEmail.includes('@')) {
            await sendPaymentConfirmationEmail(
              actualCustomerEmail,
              relatedBooking.fullName,
              relatedBooking.packageName,
              relatedBooking.amount || 0
            );
          }
          
          // Send payment success SMS
          await sendPaymentStatusSMS({
            customerName: relatedBooking.fullName,
            packageName: relatedBooking.packageName,
            amount: relatedBooking.amount || 0,
            status: 'completed'
          });
        }
        
        // Send admin payment confirmation email regardless of booking status
        if (paymentRecord) {
          // Get package name from booking or use packageId as fallback
          const packageName = relatedBooking?.packageName || `Package ID: ${paymentRecord.packageId}`;
          await sendPaymentConfirmationEmail(
            'leadcrestconsulting@gmail.com',
            paymentRecord.customerName,
            packageName,
            paymentRecord.amount
          );
        }
        
        res.json({ success: true, message: "Payment verified and processed successfully" });
      } else {
        res.status(400).json({ success: false, message: "Payment verification failed" });
      }
    } catch (error: any) {
      console.error("Payment verification error:", error);
      res.status(500).json({ success: false, message: "Error verifying payment: " + error.message });
    }
  });

  // Booking routes
  app.post('/api/bookings', async (req, res) => {
    try {
      const bookingData = insertBookingSchema.parse(req.body);
      
      // Create booking record
      const booking = await storage.createBooking(bookingData);
      
      // For investment bookings, simulate Razorpay order creation
      if (bookingData.bookingType === 'investment') {
        // In real implementation, create Razorpay order here
        const mockRazorpayOrderId = `order_${Date.now()}`;
        
        // Update booking with Razorpay order ID (in real app, update the booking)
        booking.razorpayOrderId = mockRazorpayOrderId;
      }
      
      // Send confirmation email to the user
      const emailData = {
        fullName: booking.fullName,
        email: req.body.email || `${booking.mobile}@leadcrest-booking.com`, // Use email if provided, otherwise create from mobile
        mobile: booking.mobile,
        packageName: booking.packageName,
        bookingType: booking.bookingType as 'discovery_call' | 'investment',
        amount: booking.amount || undefined,
        currentStage: booking.currentStage
      };
      
      await sendBookingConfirmationEmail(emailData);
      
      // Send SMS notifications
      await sendBookingConfirmationSMS({
        fullName: booking.fullName,
        mobile: booking.mobile,
        packageName: booking.packageName,
        bookingType: booking.bookingType as 'discovery_call' | 'investment',
        amount: booking.amount || undefined,
        currentStage: booking.currentStage
      });
      
      res.json({ booking, bookingType: bookingData.bookingType });
    } catch (error: any) {
      console.error('Error creating booking:', error);
      res.status(500).json({ error: 'Failed to create booking' });
    }
  });

  app.get('/api/bookings', async (req, res) => {
    try {
      const bookings = await storage.getAllBookings();
      res.json(bookings);
    } catch (error: any) {
      console.error('Error fetching bookings:', error);
      res.status(500).json({ error: 'Failed to fetch bookings' });
    }
  });

  app.patch('/api/bookings/:id/status', async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const booking = await storage.updateBookingStatus(id, status);
      
      if (!booking) {
        return res.status(404).json({ error: 'Booking not found' });
      }
      
      res.json(booking);
    } catch (error: any) {
      console.error('Error updating booking status:', error);
      res.status(500).json({ error: 'Failed to update booking status' });
    }
  });

  // Contact submissions route
  app.get('/api/contact', async (req, res) => {
    try {
      const contacts = await storage.getAllContactSubmissions();
      res.json(contacts);
    } catch (error: any) {
      console.error('Error fetching contact submissions:', error);
      res.status(500).json({ error: 'Failed to fetch contact submissions' });
    }
  });

  // Payments route
  app.get('/api/payments', async (req, res) => {
    try {
      const payments = await storage.getAllPayments();
      res.json(payments);
    } catch (error: any) {
      console.error('Error fetching payments:', error);
      res.status(500).json({ error: 'Failed to fetch payments' });
    }
  });

  // Resource downloads route
  app.get('/api/resource-downloads', async (req, res) => {
    try {
      const downloads = await storage.getAllResourceDownloads();
      res.json(downloads);
    } catch (error: any) {
      console.error('Error fetching resource downloads:', error);
      res.status(500).json({ error: 'Failed to fetch resource downloads' });
    }
  });

  // Send custom SMS endpoint
  app.post('/api/send-sms', async (req, res) => {
    try {
      const { to, message } = req.body;
      
      if (!to || !message) {
        return res.status(400).json({ error: 'Phone number and message are required' });
      }
      
      const success = await sendCustomSMS(to, message);
      
      if (success) {
        res.json({ success: true, message: 'SMS sent successfully' });
      } else {
        res.status(500).json({ success: false, message: 'Failed to send SMS. Check Twilio configuration.' });
      }
    } catch (error: any) {
      console.error('Error in SMS endpoint:', error);
      res.status(500).json({ error: error.message });
    }
  });

  // Send bulk SMS endpoint
  app.post('/api/send-bulk-sms', async (req, res) => {
    try {
      const { numbers, message } = req.body;
      
      if (!numbers || !Array.isArray(numbers) || numbers.length === 0) {
        return res.status(400).json({ error: 'Phone numbers array is required' });
      }
      
      if (!message) {
        return res.status(400).json({ error: 'Message is required' });
      }
      
      const result = await sendBulkSMS(numbers, message);
      res.json(result);
    } catch (error: any) {
      console.error('Error in bulk SMS endpoint:', error);
      res.status(500).json({ error: error.message });
    }
  });

  // Create resource download
  app.post('/api/resource-downloads', async (req, res) => {
    try {
      const download = await storage.createResourceDownload(req.body);
      
      // Send email notification to both user and admin
      await sendResourceDownloadEmail({
        fullName: download.fullName,
        email: download.email,
        mobile: download.mobile,
        resourceTitle: download.resourceTitle,
        currentStage: download.currentStage
      });
      
      res.status(201).json(download);
    } catch (error) {
      console.error('Error creating resource download:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Get all resource downloads
  app.get('/api/resource-downloads', async (req, res) => {
    try {
      const downloads = await storage.getAllResourceDownloads();
      res.json(downloads);
    } catch (error) {
      console.error('Error fetching resource downloads:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Test email endpoint for debugging SendGrid functionality
  app.post('/api/test-email', async (req, res) => {
    try {
      const { email } = req.body;
      const testEmail = email || 'leadcrestconsulting@gmail.com';
      
      console.log('🧪 Testing email functionality...');
      
      // Test the contact notification email function
      const emailSent = await sendContactNotificationEmail({
        name: 'Test User',
        email: testEmail,
        phone: '+91 9147424608',
        whoIsThisFor: 'Email Test'
      });
      
      if (emailSent) {
        console.log('✅ Test email sent successfully!');
        res.json({ 
          success: true, 
          message: 'Test email sent successfully!',
          testEmail: testEmail,
          sendgridConfigured: !!process.env.SENDGRID_API_KEY
        });
      } else {
        console.log('❌ Test email failed to send');
        res.status(500).json({ 
          success: false, 
          message: 'Test email failed to send',
          sendgridConfigured: !!process.env.SENDGRID_API_KEY
        });
      }
    } catch (error: any) {
      console.error('❌ Email test error:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Email test failed: ' + error.message,
        sendgridConfigured: !!process.env.SENDGRID_API_KEY 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
