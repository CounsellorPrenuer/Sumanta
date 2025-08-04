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
        id: "ai-proof-leadership-skills",
        title: "Building AI-Proof Leadership Skills for the Future Workforce",
        excerpt: "Discover the uniquely human leadership capabilities that will remain irreplaceable as AI transforms the workplace. Learn how Fortune 500 leaders are adapting their skillsets.",
        content: "As artificial intelligence continues to reshape industries, the question isn't whether AI will impact your career—it's how you can develop skills that remain uniquely human and irreplaceable. After 20+ years in Fortune 500 HR leadership, I've observed that successful executives focus on capabilities that machines cannot replicate: emotional intelligence, strategic thinking, and authentic relationship building. This comprehensive guide explores the leadership competencies that will define career success in an AI-driven economy, including practical frameworks for developing executive presence, managing change, and inspiring teams through uncertainty.",
        category: "LEADERSHIP DEVELOPMENT",
        imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        publishedAt: new Date("2025-01-15")
      },
      {
        id: "mid-career-transition-strategy",
        title: "The Executive's Guide to Strategic Mid-Career Transitions",
        excerpt: "Navigate career pivots with confidence using Fortune 500-proven strategies. From identifying opportunities to negotiating executive packages, master the art of strategic career advancement.",
        content: "Mid-career transitions represent some of the most significant opportunities for professional growth and financial advancement. Drawing from my experience guiding 3,725+ professionals and my tenure in senior HR roles at Reliance and Vodafone, this guide reveals the systematic approach successful executives use to identify, pursue, and secure leadership positions. Whether you're targeting a C-suite role, transitioning industries, or launching your own venture, learn the strategic frameworks that have enabled our clients to achieve 70-85% salary increases. This comprehensive resource covers executive positioning, network leverage, negotiation tactics, and the mindset shifts required for senior leadership success.",
        category: "CAREER ADVANCEMENT",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        publishedAt: new Date("2025-01-12")
      },
      {
        id: "corporate-parenting-wellbeing",
        title: "The Hidden Cost of Parenting Stress in Corporate India",
        excerpt: "How organizations can support working parents through comprehensive wellbeing programs. Explore the business case for parenting support and its impact on retention and productivity.",
        content: "Corporate India is experiencing a silent crisis: 1 in 2 working parents report chronic stress, with parenting pressure being the leading cause of mid-career female attrition. As organizations invest heavily in DEI initiatives, they often overlook one of the most significant barriers to professional advancement—the challenges of balancing career ambitions with parenting responsibilities. This in-depth analysis explores how forward-thinking companies are implementing comprehensive parenting wellbeing programs, including career mentorship for employees' children, stress management workshops, and diagnostic surveys. Learn how supporting employees as parents directly translates to improved retention, higher engagement, and stronger organizational performance.",
        category: "CORPORATE WELLNESS",
        imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        publishedAt: new Date("2025-01-10")
      },
      {
        id: "executive-presence-development",
        title: "Developing Executive Presence: From Manager to C-Suite Leader",
        excerpt: "Master the subtle art of executive presence with proven techniques from Fortune 500 boardrooms. Learn how to command respect, influence decisions, and accelerate your leadership trajectory.",
        content: "Executive presence is the indefinable quality that separates high-performing managers from transformational leaders. It's the reason why some professionals ascend to C-suite roles while equally qualified peers remain in middle management. Through my two decades of Fortune 500 experience and coaching 3,725+ professionals, I've identified the specific behavioral patterns, communication styles, and strategic thinking approaches that define executive presence. This comprehensive guide breaks down the components of authentic leadership influence: commanding rooms without demanding attention, making complex decisions under pressure, and inspiring teams through vision rather than authority. Discover the practical exercises, mindset shifts, and strategic positioning techniques that have enabled our clients to achieve rapid career acceleration and significant salary increases.",
        category: "EXECUTIVE COACHING",
        imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        publishedAt: new Date("2025-01-08")
      },
      {
        id: "negotiating-executive-compensation",
        title: "The Art of Executive Compensation Negotiation",
        excerpt: "Unlock significant salary increases with Fortune 500-proven negotiation strategies. Learn how to position yourself for premium compensation packages and benefits.",
        content: "The difference between good and great executive compensation often comes down to negotiation skills and strategic positioning. Having reviewed thousands of executive compensation packages during my tenure at Reliance and Vodafone, I've observed the specific strategies that consistently result in substantial salary increases. This detailed guide reveals the systematic approach our clients use to achieve 70-85% salary increases: from market research and competitive positioning to negotiation timing and package structuring. Learn how to leverage your unique value proposition, understand compensation benchmarks, and navigate complex negotiations with confidence. Whether you're seeking a promotion, changing companies, or repositioning within your current organization, master the art of executive-level compensation discussions.",
        category: "SALARY NEGOTIATION",
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        publishedAt: new Date("2025-01-05")
      },
      {
        id: "building-professional-networks",
        title: "Strategic Networking for Senior Professionals",
        excerpt: "Build powerful professional networks that accelerate career advancement. Learn relationship-building strategies used by Fortune 500 executives to create opportunities.",
        content: "Professional networking at the executive level operates differently from junior career relationship building. It requires strategic thinking, authentic value creation, and long-term relationship cultivation. Drawing from my extensive network built through 20+ years in Fortune 500 leadership and my experience guiding senior professionals, this comprehensive guide reveals the systematic approach to building meaningful professional relationships. Learn how to identify key influencers, create mutual value, and leverage relationships for career advancement without appearing transactional. Discover the networking strategies that have helped our clients secure board positions, executive roles, and strategic partnerships. This resource includes practical frameworks for relationship mapping, value proposition development, and authentic engagement techniques.",
        category: "PROFESSIONAL NETWORKING",
        imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        publishedAt: new Date("2025-01-03")
      }
    ];

    blogPostsData.forEach(post => {
      this.blogPosts.set(post.id, post);
    });

    // Initialize resources
    const resourcesData: (InsertResource & { id: string })[] = [
      {
        id: "executive-leadership-assessment",
        title: "Executive Leadership Assessment",
        description: "Comprehensive psychometric evaluation for senior professionals to identify leadership strengths and development areas.",
        type: "guide",
        downloadUrl: "#",
        iconName: "brain"
      },
      {
        id: "salary-negotiation-toolkit",
        title: "Salary Negotiation Toolkit",
        description: "Complete framework including market research templates, negotiation scripts, and compensation benchmarking tools.",
        type: "template",
        downloadUrl: "#",
        iconName: "trending-up"
      },
      {
        id: "ai-readiness-career-report",
        title: "AI-Readiness Career Report",
        description: "Detailed analysis of AI impact on leadership roles with future-proofing strategies for executive careers.",
        type: "guide",
        downloadUrl: "#",
        iconName: "robot"
      },
      {
        id: "corporate-parenting-diagnostic",
        title: "Corporate Parenting Wellbeing Diagnostic",
        description: "Proprietary survey to measure parenting-related stress and work-life conflict for organizational DEI strategies.",
        type: "template",
        downloadUrl: "#",
        iconName: "users"
      },
      {
        id: "executive-presence-playbook",
        title: "Executive Presence Development Playbook",
        description: "Step-by-step guide to developing commanding leadership presence with Fortune 500-proven techniques.",
        type: "guide",
        downloadUrl: "#",
        iconName: "award"
      },
      {
        id: "career-transition-roadmap",
        title: "Strategic Career Transition Roadmap",
        description: "Complete blueprint for mid-career pivots including opportunity mapping, positioning strategies, and timeline planning.",
        type: "template",
        downloadUrl: "#",
        iconName: "map"
      },
      {
        id: "leadership-network-builder",
        title: "Professional Network Building Framework",
        description: "Systematic approach to building strategic professional relationships for career advancement and opportunity creation.",
        type: "template",
        downloadUrl: "#",
        iconName: "network"
      },
      {
        id: "corporate-wellness-roi-calculator",
        title: "Corporate Wellness ROI Calculator",
        description: "Calculate the business impact of employee wellbeing programs including parenting support and career development initiatives.",
        type: "tool",
        downloadUrl: "#",
        iconName: "calculator"
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
