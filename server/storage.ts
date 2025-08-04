import { 
  type User, 
  type InsertUser, 
  type Package, 
  type InsertPackage,
  type BlogPost,
  type InsertBlogPost,
  type Resource,
  type InsertResource,
  type ContactSubmission,
  type InsertContactSubmission,
  type Payment,
  type InsertPayment,
  type Booking,
  type InsertBooking
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Packages
  getAllPackages(): Promise<Package[]>;
  getPackage(id: string): Promise<Package | undefined>;
  
  // Blog posts
  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: string): Promise<BlogPost | undefined>;
  
  // Resources
  getAllResources(): Promise<Resource[]>;
  
  // Contact submissions
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  
  // Payments
  createPayment(payment: InsertPayment): Promise<Payment>;
  updatePaymentStatus(id: string, status: string): Promise<Payment | undefined>;
  
  // Bookings
  createBooking(booking: InsertBooking): Promise<Booking>;
  getAllBookings(): Promise<Booking[]>;
  getBooking(id: string): Promise<Booking | undefined>;
  updateBookingStatus(id: string, status: string): Promise<Booking | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private packages: Map<string, Package>;
  private blogPosts: Map<string, BlogPost>;
  private resources: Map<string, Resource>;
  private contactSubmissions: Map<string, ContactSubmission>;
  private payments: Map<string, Payment>;
  private bookings: Map<string, Booking>;

  constructor() {
    this.users = new Map();
    this.packages = new Map();
    this.blogPosts = new Map();
    this.resources = new Map();
    this.contactSubmissions = new Map();
    this.payments = new Map();
    this.bookings = new Map();
    
    this.initializeData();
  }

  private initializeData() {
    // Initialize packages
    const packagesData: (InsertPackage & { id: string })[] = [
      {
        id: "discover",
        name: "Discover",
        price: 5500,
        targetAudience: "For Class 8-9 Students",
        description: "Perfect foundation for early career planning",
        features: [
          "Psychometric assessment to measure your interests",
          "1 career counselling session with Mentoria's expert career coaches",
          "Lifetime access to Knowledge Gateway",
          "Pre-recorded webinars by industry experts",
          "Focused on stream and subject selection"
        ],
        isPopular: false
      },
      {
        id: "discover-plus",
        name: "Discover Plus",
        price: 15000,
        targetAudience: "For Class 8-9 Students",
        description: "Comprehensive guidance with ongoing support",
        features: [
          "2 Psychometric assessments to measure your interests, personality and abilities",
          "8 career counselling sessions (1 every year) with Sumanta until graduation",
          "Lifetime access to Knowledge Gateway",
          "Attend live webinars by industry experts",
          "Customised reports after each session with education pathways",
          "Guidance on college admissions in India and abroad",
          "CV reviews during internships/graduation",
          "Guidance until you get into the job you love",
          "Career helpline access"
        ],
        isPopular: true
      },
      {
        id: "achieve",
        name: "Achieve",
        price: 5999,
        targetAudience: "For Class 10-12 Students",
        description: "Strategic planning for higher education",
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "1 career counselling session",
          "Lifetime access to Knowledge Gateway",
          "Pre-recorded webinars by industry experts"
        ],
        isPopular: false
      },
      {
        id: "achieve-plus",
        name: "Achieve Plus",
        price: 10599,
        targetAudience: "For Class 10-12 Students", 
        description: "Complete support for academic success",
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "4 career counselling sessions",
          "Lifetime access to Knowledge Gateway",
          "Attend live webinars by industry experts",
          "Customised reports after each session with education pathways",
          "Guidance on college admissions in India and abroad",
          "CV reviews during internships/graduation",
          "Guidance until you get into the job you love",
          "Career helpline access"
        ],
        isPopular: false
      },
      {
        id: "ascend-graduate",
        name: "Ascend",
        price: 6499,
        targetAudience: "For College Graduates",
        description: "Career transformation for graduates",
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "1 career coaching session for specialisation/job selection",
          "Lifetime access to Knowledge Gateway",
          "Pre-recorded webinars by industry experts"
        ],
        isPopular: false
      },
      {
        id: "ascend-plus-graduate",
        name: "Ascend Plus",
        price: 10599,
        targetAudience: "For College Graduates",
        description: "Premium career development program",
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "3 career coaching sessions",
          "Lifetime access to Knowledge Gateway",
          "Attend live webinars by industry experts",
          "Customised reports after each session with education pathways",
          "Guidance on Masters' admissions in India and abroad",
          "CV reviews during internships/graduation",
          "Guidance until you get into the job you love",
          "Career helpline access"
        ],
        isPopular: false
      },
      {
        id: "ascend-professional",
        name: "Ascend",
        price: 6499,
        targetAudience: "For Working Professionals",
        description: "Career transformation for professionals",
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "1 career coaching session focused on career transition, growth and upskilling",
          "Lifetime access to Knowledge Gateway",
          "Pre-recorded webinars by industry experts"
        ],
        isPopular: false
      },
      {
        id: "ascend-plus-professional",
        name: "Ascend Plus",
        price: 10599,
        targetAudience: "For Working Professionals",
        description: "Premium career development program",
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "3 career coaching sessions",
          "Lifetime access to Knowledge Gateway",
          "Attend live webinars by industry experts",
          "Customised reports after each session with upskilling pathways",
          "CV reviews and Interview Prep",
          "Guidance until you get into the job you love",
          "Career helpline access"
        ],
        isPopular: false
      }
    ];

    packagesData.forEach(pkg => {
      this.packages.set(pkg.id, {
        ...pkg,
        isPopular: pkg.isPopular ?? false
      });
    });

    // Initialize blog posts
    const blogPostsData: (InsertBlogPost & { id: string, publishedAt: Date })[] = [
      {
        id: "stream-selection-guide",
        title: "How to Choose the Right Stream After Class 10",
        excerpt: "A comprehensive guide to help students make informed decisions about their academic future...",
        content: "Choosing the right stream after Class 10 is one of the most crucial decisions in a student's life...",
        category: "EDUCATION PLANNING",
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        publishedAt: new Date("2025-01-15")
      },
      {
        id: "emerging-careers-2025",
        title: "Top 10 Emerging Careers in 2025",
        excerpt: "Explore the most promising career opportunities that are shaping the future job market...",
        content: "The job market is evolving rapidly, and new career opportunities are emerging across various sectors...",
        category: "CAREER GUIDANCE",
        imageUrl: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        publishedAt: new Date("2025-01-10")
      },
      {
        id: "study-abroad-guide",
        title: "Study Abroad: A Complete Guide for Indian Students",
        excerpt: "Everything you need to know about pursuing higher education abroad, from applications to scholarships...",
        content: "Studying abroad can be a life-changing experience that opens doors to global opportunities...",
        category: "INTERNATIONAL EDUCATION",
        imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        publishedAt: new Date("2025-01-05")
      }
    ];

    blogPostsData.forEach(post => {
      this.blogPosts.set(post.id, post);
    });

    // Initialize resources
    const resourcesData: (InsertResource & { id: string })[] = [
      {
        id: "career-assessment-guide",
        title: "Career Assessment Guide",
        description: "Self-assessment questionnaire to discover your career interests.",
        type: "pdf",
        downloadUrl: "#",
        iconName: "file-pdf"
      },
      {
        id: "college-comparison-tool",
        title: "College Comparison Tool",
        description: "Compare colleges based on courses, fees, and placement records.",
        type: "tool",
        downloadUrl: "#",
        iconName: "graduation-cap"
      },
      {
        id: "salary-trends-report",
        title: "Salary Trends Report",
        description: "Latest salary trends across different industries and roles.",
        type: "report",
        downloadUrl: "#",
        iconName: "chart-line"
      },
      {
        id: "interview-tips-checklist",
        title: "Interview Tips Checklist",
        description: "Essential tips and checklist for job interview success.",
        type: "checklist",
        downloadUrl: "#",
        iconName: "lightbulb"
      }
    ];

    resourcesData.forEach(resource => {
      this.resources.set(resource.id, {
        ...resource,
        downloadUrl: resource.downloadUrl ?? null
      });
    });
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Package methods
  async getAllPackages(): Promise<Package[]> {
    return Array.from(this.packages.values());
  }

  async getPackage(id: string): Promise<Package | undefined> {
    return this.packages.get(id);
  }

  // Blog post methods
  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort(
      (a, b) => new Date(b.publishedAt!).getTime() - new Date(a.publishedAt!).getTime()
    );
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  // Resource methods
  async getAllResources(): Promise<Resource[]> {
    return Array.from(this.resources.values());
  }

  // Contact submission methods
  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = { 
      ...insertSubmission, 
      id, 
      createdAt: new Date() 
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  // Payment methods
  async createPayment(insertPayment: InsertPayment): Promise<Payment> {
    const id = randomUUID();
    const payment: Payment = { 
      ...insertPayment, 
      id, 
      createdAt: new Date() 
    };
    this.payments.set(id, payment);
    return payment;
  }

  async updatePaymentStatus(id: string, status: string): Promise<Payment | undefined> {
    const payment = this.payments.get(id);
    if (payment) {
      payment.status = status;
      this.payments.set(id, payment);
    }
    return payment;
  }

  // Booking methods
  async createBooking(booking: InsertBooking): Promise<Booking> {
    const id = randomUUID();
    const newBooking: Booking = {
      ...booking,
      id,
      status: booking.status || "pending",
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.bookings.set(id, newBooking);
    return newBooking;
  }

  async getAllBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values());
  }

  async getBooking(id: string): Promise<Booking | undefined> {
    return this.bookings.get(id);
  }

  async updateBookingStatus(id: string, status: string): Promise<Booking | undefined> {
    const booking = this.bookings.get(id);
    if (booking) {
      const updatedBooking = { ...booking, status, updatedAt: new Date() };
      this.bookings.set(id, updatedBooking);
      return updatedBooking;
    }
    return undefined;
  }
}

export const storage = new MemStorage();
