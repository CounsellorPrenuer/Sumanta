import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
});

export const packages = pgTable("packages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  price: integer("price").notNull(), // in INR
  targetAudience: text("target_audience").notNull(),
  description: text("description").notNull(),
  features: text("features").array().notNull(),
  isPopular: boolean("is_popular").default(false),
});

export const blogPosts = pgTable("blog_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  imageUrl: text("image_url").notNull(),
  publishedAt: timestamp("published_at").defaultNow(),
});

export const resources = pgTable("resources", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  type: text("type").notNull(), // 'pdf', 'tool', 'checklist', etc.
  downloadUrl: text("download_url"),
  iconName: text("icon_name").notNull(),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  serviceInterest: text("service_interest").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const payments = pgTable("payments", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  packageId: varchar("package_id").references(() => packages.id).notNull(),
  customerEmail: text("customer_email").notNull(),
  customerName: text("customer_name").notNull(),
  amount: integer("amount").notNull(),
  stripePaymentIntentId: text("stripe_payment_intent_id").notNull(),
  status: text("status").notNull(), // 'pending', 'completed', 'failed'
  createdAt: timestamp("created_at").defaultNow(),
});

export const resourceDownloads = pgTable("resource_downloads", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  mobile: text("mobile").notNull(),
  currentStage: text("current_stage").notNull(),
  resourceId: varchar("resource_id").references(() => resources.id).notNull(),
  resourceTitle: text("resource_title").notNull(),
  downloadedAt: timestamp("downloaded_at").defaultNow(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const notifications = pgTable("notifications", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  type: text("type").notNull(), // 'contact', 'booking', 'payment', 'resource_download'
  recipient: text("recipient").notNull(), // 'admin' or user email
  subject: text("subject").notNull(),
  textContent: text("text_content").notNull(),
  htmlContent: text("html_content").notNull(),
  metadata: text("metadata"), // JSON string with additional data
  isRead: boolean("is_read").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const bookings = pgTable("bookings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  mobile: text("mobile").notNull(),
  currentStage: text("current_stage").notNull(), // 'class8-9', 'class10-12', 'graduates', 'professionals'
  packageId: varchar("package_id").notNull(),
  packageName: text("package_name").notNull(),
  bookingType: text("booking_type").notNull(), // 'discovery_call' or 'investment'
  status: text("status").default("pending"), // pending, contacted, completed, cancelled
  amount: integer("amount"),
  paymentStatus: text("payment_status"), // pending, completed, failed
  razorpayOrderId: text("razorpay_order_id"),
  razorpayPaymentId: text("razorpay_payment_id"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  email: true,
  password: true,
});

export const insertPackageSchema = createInsertSchema(packages).omit({
  id: true,
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  publishedAt: true,
});

export const insertResourceSchema = createInsertSchema(resources).omit({
  id: true,
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
});

export const insertPaymentSchema = createInsertSchema(payments).omit({
  id: true,
  createdAt: true,
});

export const insertResourceDownloadSchema = createInsertSchema(resourceDownloads).omit({
  id: true,
  downloadedAt: true,
  createdAt: true,
});

export const insertBookingSchema = createInsertSchema(bookings).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertNotificationSchema = createInsertSchema(notifications).omit({
  id: true,
  createdAt: true,
});

// Types
export type User = typeof users.$inferSelect;
export type Package = typeof packages.$inferSelect;
export type BlogPost = typeof blogPosts.$inferSelect;
export type Resource = typeof resources.$inferSelect;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type Payment = typeof payments.$inferSelect;
export type Booking = typeof bookings.$inferSelect;

export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertPackage = z.infer<typeof insertPackageSchema>;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type InsertResource = z.infer<typeof insertResourceSchema>;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type InsertPayment = z.infer<typeof insertPaymentSchema>;
export type ResourceDownload = typeof resourceDownloads.$inferSelect;
export type InsertResourceDownload = z.infer<typeof insertResourceDownloadSchema>;
export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Notification = typeof notifications.$inferSelect;
export type InsertNotification = z.infer<typeof insertNotificationSchema>;
