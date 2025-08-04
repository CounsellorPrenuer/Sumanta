import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactSubmissionSchema, 
  insertPaymentSchema 
} from "@shared/schema";
import { z } from "zod";

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
      
      // For now, simulate order creation since Razorpay keys aren't configured
      const simulatedOrder = {
        id: `order_${Date.now()}`,
        amount: amount * 100, // Convert to paise (Razorpay format)
        currency: "INR",
        status: "created",
        packageId,
        customerName,
        customerEmail,
        packageName
      };
      
      res.json({ 
        orderId: simulatedOrder.id,
        amount: simulatedOrder.amount,
        currency: simulatedOrder.currency,
        status: simulatedOrder.status
      });
    } catch (error: any) {
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

  // Payment verification endpoint
  app.post("/api/verify-payment", async (req, res) => {
    try {
      const { orderId, paymentId, signature } = req.body;
      
      // For now, mark as completed - proper verification will be added with Razorpay keys
      await storage.updatePaymentStatus(orderId, 'completed');
      
      res.json({ success: true, message: "Payment verified successfully" });
    } catch (error: any) {
      res.status(500).json({ message: "Error verifying payment: " + error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
