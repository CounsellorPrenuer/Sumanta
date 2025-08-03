# Overview

This is a career counseling and education guidance website for CCC Education Foundation, founded by Manpreet Kaur. The application serves as a professional platform offering comprehensive career services including psychometric assessments, counseling sessions, foreign admissions assistance, and mentorship programs. Built as a full-stack web application, it features a modern React frontend with a clean, professional design and an Express.js backend with PostgreSQL database integration.

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
- **Models**: Users, packages, blog posts, resources, contact submissions, and payments

## Authentication & Security
- **Session-based Authentication**: Express sessions with PostgreSQL storage
- **Password Security**: Secure password hashing (implementation details in storage layer)
- **CORS**: Configured for cross-origin requests with credentials support
- **Input Validation**: Zod schemas for runtime type checking and validation

## Payment Integration
- **Payment Processor**: Stripe integration for secure payment processing
- **Frontend**: Stripe React components for payment forms and checkout flow
- **Backend**: Stripe server-side API for payment intent creation and webhook handling
- **Security**: Environment-based API key management for different environments

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