# replit.md

## Overview

PartShield is a landing page application designed to promote an innovative insurance product for small to medium-sized machine shops. The application helps machine shops protect against financial losses from scrap and rework by offering insurance coverage, allowing them to quote more competitively and grow their business with predictable revenue streams.

The application is built as a modern full-stack web application with a React frontend and Express backend, designed to capture leads through "Request a Call" and "Ask for a Demo" functionality, primarily distributed through LinkedIn Ads.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

**Frontend Architecture**
- React 18 with TypeScript for type safety and modern component patterns
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing instead of React Router
- TanStack Query (React Query) for server state management and API caching
- Tailwind CSS with shadcn/ui component library for consistent, accessible UI components
- Custom color scheme with "growth" and "steel" color palettes matching the industrial theme

**Backend Architecture**
- Express.js server with TypeScript for API endpoints and static file serving
- RESTful API design with structured error handling and request logging
- In-memory storage implementation (MemStorage) for development with interface abstraction (IStorage) to support future database integration
- Comprehensive lead management system with validation using Zod schemas

**Data Storage Solutions**
- Drizzle ORM configured for PostgreSQL with schema-first approach
- Database schema defines users and leads tables with proper relationships
- Migration system using Drizzle Kit for database version control
- Environment variable configuration for database connections

**Form Management and Validation**
- React Hook Form with Zod resolvers for client-side form handling
- Server-side validation using Zod schemas shared between client and server
- Type-safe form submissions with comprehensive error handling

**Analytics and Tracking**
- Google Analytics 4 integration with custom event tracking
- Page view tracking for single-page application navigation
- Conversion tracking for lead capture events (call requests and demo requests)
- Custom hooks for analytics management throughout the application

**Styling and Design System**
- Tailwind CSS with custom theme extending default colors and typography
- shadcn/ui component library providing accessible, customizable components
- Responsive design patterns for mobile-first development
- CSS custom properties for consistent theming

**Development and Build Tools**
- TypeScript configuration with strict mode and modern ES modules
- ESBuild for production server bundling with external package handling
- PostCSS for CSS processing with Tailwind and Autoprefixer
- Hot module replacement in development with error overlay integration

## External Dependencies

**Database and ORM**
- PostgreSQL as the production database system
- Neon Database serverless driver (@neondatabase/serverless) for cloud database connectivity
- Drizzle ORM for type-safe database operations and schema management
- connect-pg-simple for PostgreSQL session storage

**UI Component Libraries**
- Radix UI primitives for accessible, unstyled component foundations
- shadcn/ui for pre-styled, customizable component implementations
- Lucide React for consistent icon system throughout the application

**Analytics and Tracking**
- Google Analytics 4 for user behavior tracking and conversion measurement
- Custom event tracking for lead generation funnel analysis

**Form Management**
- React Hook Form for efficient form state management
- @hookform/resolvers for integration with Zod validation schemas

**Development Tools**
- Replit-specific plugins for error handling and development environment integration
- TypeScript for static type checking and improved developer experience
- Various Radix UI components for complex interactive elements (dialogs, dropdowns, tooltips, etc.)

**Styling Dependencies**
- Tailwind CSS for utility-first styling approach
- class-variance-authority (CVA) for component variant management
- clsx and tailwind-merge for conditional class name handling