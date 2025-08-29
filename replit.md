# Overview

This is a career counseling and education guidance website for Leadcrest Consulting, founded by Sumanta Chaudhuri. The application serves as a professional platform offering comprehensive career services including psychometric assessments, counseling sessions, foreign admissions assistance, and mentorship programs. Built as a full-stack web application, it features a modern React frontend with a clean, professional design and an Express.js backend with PostgreSQL database integration.

## Recent Updates (January 2025)
- **Comprehensive SEO & Accessibility Overhaul**: Added meta tags, Open Graph tags, schema.org markup, proper heading hierarchy (H1, H2, H3), enhanced alt text for all images, and created SEO component for dynamic meta updates
- **Legal Compliance Implementation**: Added Privacy Policy page, Terms of Service page, cookie consent banner with preference management, and footer legal links
- **Visual Differentiators Section**: Created animated, interactive pillars of excellence with infographics replacing text-heavy cards for AI-Proofing, Fortune 500 Insights, Data-Driven Approach, and Holistic Life Integration
- **Contact Page Scheduling Integration**: Added Calendly and Google Calendar scheduling tools that appear after form submission, improving user flow and conversion with instant booking options
- **Logo Enhancement**: Increased logo size to h-20 w-20 (main nav) and h-16 w-16 (premium nav) for better brand visibility
- **Tagline Update**: Changed from "Redefining Career Trajectory with Clarity" to "From Confusion to Clarity. From Interest to Impact."
## Previous Updates
- **Complete "How It Works" Page Rebuild**: Transformed into career coaching methodology using actual established packages and process
- **Authentic Process Design**: Built from Initial Consultation → Psychometric Assessment → Career Coaching Sessions → Ongoing Support using real features
- **Established Pricing Structure**: Used actual package pricing (Ascend ₹6,499, Ascend Plus ₹10,599) with authentic features and benefits
- **Real Success Metrics Integration**: Added legitimate success statistics (95% success rate, 3,725+ professionals guided, 20+ years experience)
- **Complete Blogs & Resources Overhaul**: Rebuilt entire content section with 6 executive-focused blog posts (2000+ words each) and 8 professional development resources
- **Individual Blog Pages**: Implemented full blog post routing system with rich content display, social sharing, and professional consultation CTAs
- **Working Download System**: Added functional resource downloads with professional coming-soon messages for actual implementation
- **Enhanced Newsletter Signup**: Executive Leadership Insights signup with 3,725+ professionals statistic and professional email validation
- **Professional Visual Design**: Added real images to blog posts with fallback handling and improved icon system for resources
- **Comprehensive Booking System**: Implemented popup-based booking forms with database storage for both discovery calls and direct program investments
- **Age-Group Segmented Packages**: Created targeted package filtering (Class 8-9, 10-12, College Graduates, Working Professionals) with specific content for each demographic  
- **Admin Panel**: Built complete booking management dashboard at `/admin/bookings` for tracking customer inquiries and payments
- **One-Click Razorpay Integration**: Live payment processing with signature verification, automatic order creation, and seamless UPI/card/wallet payments
- **Smart Thank You Pages**: Dynamic confirmation pages for both discovery calls and successful investments with payment amounts
- **Complete Payment Flow**: Real-time payment verification, booking status updates, and automated redirect handling

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Framework**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **Routing**: Wouter for client-side routing (lightweight React Router alternative)
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring a golden/navy color scheme
- **Forms**: React Hook Form with Zod validation for type-safe form handling

## Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database serverless PostgreSQL
- **API Design**: RESTful API endpoints following conventional HTTP methods
- **Session Management**: Express sessions with PostgreSQL store using connect-pg-simple
- **Development**: Hot module replacement and development tooling via Vite integration

## Data Layer
- **ORM**: Drizzle ORM with type-safe schema definitions
- **Schema**: Centralized schema definitions in `/shared/schema.ts` for type consistency across frontend and backend
- **Migrations**: Database migrations managed through Drizzle Kit
- **Models**: Users, packages, blog posts, resources, contact submissions, payments, and bookings
- **Booking System**: Complete customer booking tracking with status management (pending, contacted, completed, cancelled)

## Authentication & Security
- **Session-based Authentication**: Express sessions with PostgreSQL storage
- **Password Security**: Secure password hashing (implementation details in storage layer)
- **CORS**: Configured for cross-origin requests with credentials support
- **Input Validation**: Zod schemas for runtime type checking and validation

## Payment Integration
- **Payment Processor**: Live Razorpay integration with real API keys for secure payment processing
- **Frontend**: One-click payment with dynamic Razorpay script loading and comprehensive error handling
- **Backend**: Real Razorpay order creation, cryptographic signature verification, and payment status tracking
- **Security**: Server-side signature verification using HMAC-SHA256 with secret key validation
- **Payment Methods**: Support for UPI, cards, net banking, wallets, and EMI options through Razorpay
- **Booking Flow**: Seamless popup → payment → verification → success page with payment confirmation

## Development & Deployment
- **Build System**: Vite for fast development and optimized production builds
- **Type Safety**: Comprehensive TypeScript configuration with strict mode enabled
- **Code Quality**: ESLint and TypeScript compiler checks
- **Development Tools**: Runtime error overlay and cartographer for debugging in Replit environment

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form with resolvers
- **Build Tools**: Vite with React plugin, TypeScript compiler, ESBuild for server bundling
- **Routing**: Wouter for lightweight client-side routing

## UI & Styling
- **Component Library**: Radix UI primitives for accessible, unstyled components
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Icons**: Lucide React for consistent iconography
- **Utilities**: Class Variance Authority (CVA) for component variants, clsx for conditional classes

## Backend Infrastructure
- **Database**: Neon Database (serverless PostgreSQL), Drizzle ORM, Drizzle Kit for migrations
- **Server**: Express.js with TypeScript execution via TSX
- **Session Storage**: connect-pg-simple for PostgreSQL-backed sessions

## Data & State Management
- **API Client**: TanStack Query for server state management and caching
- **Validation**: Zod for runtime type validation and schema definition
- **Date Handling**: date-fns for date manipulation and formatting

## Payment Processing
- **Stripe Integration**: Stripe JS SDK and React Stripe.js components
- **Payment Security**: Server-side Stripe API integration with webhook support

## Development Tools
- **Type Safety**: TypeScript with strict configuration
- **Development Experience**: Replit-specific plugins for runtime error handling and debugging
- **Command Interface**: cmdk for command palette functionality

## External Services
- **Database Hosting**: Neon Database for serverless PostgreSQL
- **Payment Processing**: Stripe for secure payment handling
- **Image Assets**: Unsplash for placeholder images and stock photography
- **Email Integration**: Configured for contact form submissions and notifications