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
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json(submission);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input data", errors: error.errors });
      }
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
        name: "CCC Education Foundation",
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

  // Razorpay payment route for packages
  app.post("/api/create-razorpay-order", async (req, res) => {
    try {
      const { amount, packageId, customerName, customerEmail, packageName } = req.body;
      
      if (!amount || !packageId || !customerName || !customerEmail) {
        return res.status(400).json({ message: "Missing required payment data" });
      }

      // Store payment record
      const paymentData = {
        packageId,
        customerEmail,
        customerName, 
        amount,
        stripePaymentIntentId: `razorpay_${Date.now()}`, // Temporary ID for now
        status: 'pending'
      };

      const payment = await storage.createPayment(paymentData);

      // For now, return order details - Razorpay integration will be added later
      res.json({ 
        orderId: payment.id,
        amount: amount * 100, // Convert to paise
        currency: 'INR',
        name: packageName,
        description: `Payment for ${packageName} by ${customerName}`,
        prefill: {
          name: customerName,
          email: customerEmail
        }
      });
    } catch (error: any) {
      res.status(500).json({ message: "Error creating payment order: " + error.message });
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
        
        // Also update any related booking to completed
        const bookings = await storage.getAllBookings();
        const relatedBooking = bookings.find(b => b.razorpayOrderId === razorpay_order_id);
        if (relatedBooking) {
          await storage.updateBookingStatus(relatedBooking.id, 'completed');
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

  const httpServer = createServer(app);

  return httpServer;
}
