
# PilotTools Architecture

## Vision

PilotTools is a modular SaaS platform offering multiple business and productivity tools through one account and subscription.

The platform supports:

- Direct customers using the PilotTools brand
- Businesses using PilotTools under their own brand (White Label)
- Partners reselling PilotTools products

## Core Platform

PilotTools Core manages:

- Authentication and user accounts
- Organizations and businesses
- Multi-tenant architecture
- Roles and permissions
- Dashboard
- Module activation
- Subscription and billing management
- Branding and customization
- Notifications
- Settings

## Multi-Tenant Architecture

Each organization has its own isolated workspace.

An organization may have:

- Its own name
- Logo
- Brand colors
- Users
- Permissions
- Activated modules
- Subscription
- Customer data
- Future custom domain

Data belonging to one organization must never be accessible to another organization without explicit authorization.

## White Label

White Label partners can customize:

- Platform name
- Logo
- Primary colors
- Secondary colors
- Login page
- Dashboard branding
- Custom domain (future feature)

PilotTools manages the underlying technology.

## Products

### StockPilot

Existing stock management product.

### ClientPilot

CRM for contacts, leads, customers and follow-ups.

### FreelancePilot

Project, income, expense and invoice management.

### ContentPilot

Content planning, ideas, posts and editorial calendar.

### JobPilot

Job search, applications, CVs and interview preparation.

## Platform Strategy

- Responsive Web Application
- Progressive Web App (PWA)
- Mobile-friendly interface
- Native mobile apps considered later

## Business Models

### Direct

Customers subscribe directly to PilotTools under the PilotTools brand.

### Partner / Reseller

Partners sell PilotTools products and receive a margin or commission.

### White Label

Companies use PilotTools technology under their own brand as an additional premium offer.

## Development Principles

- Start with a $0 budget
- Use free tools whenever possible
- Build modularly
- Avoid unnecessary complexity
- Security and data isolation are priorities
- Build the foundation before adding advanced features
- Never spend money without explicit approval

## Development Roadmap

1. PilotTools Core
2. Multi-tenant foundation
3. Dashboard and navigation
4. ClientPilot MVP
5. User testing
6. FreelancePilot
7. ContentPilot
8. JobPilot
9. White Label pilot
10. Commercial launch and scaling
