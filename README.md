# Zen Outdoor AU — Website

Premium outdoor living solutions for Australian homes. This repository contains the full Next.js 14 website and admin portal for Zen Outdoor AU.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Database | Supabase (PostgreSQL) |
| ORM | Prisma |
| Auth | NextAuth.js v5 |
| Payments | Stripe + PayPal + Afterpay/Zip |
| Storage | Supabase Storage |
| Email | Resend |
| Hosting | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+
- A [Supabase](https://supabase.com) project
- A [Stripe](https://stripe.com) account
- A [Resend](https://resend.com) account

### Installation

```bash
# Clone the repository
git clone https://github.com/LeoLiuGitbox/zen_outdoor_website.git
cd zen_outdoor_website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/
│   ├── (public)/          # Public-facing pages
│   │   ├── page.tsx       # Homepage
│   │   ├── products/      # Product catalogue
│   │   ├── services/      # Services
│   │   ├── gallery/       # Project gallery
│   │   ├── blog/          # Blog
│   │   ├── about/         # About us
│   │   ├── contact/       # Contact
│   │   ├── quotation/     # Quote request form
│   │   ├── booking/       # Consultation booking
│   │   └── configurator/  # Product configurator
│   ├── (admin)/           # Admin portal (role-protected)
│   │   └── dashboard/     # Admin dashboard
│   └── api/               # API routes
├── components/
│   └── layout/            # Header, Footer
├── lib/
│   ├── auth.ts            # NextAuth config
│   ├── db.ts              # Prisma client
│   ├── email.ts           # Resend email helpers
│   ├── stripe.ts          # Stripe client
│   └── utils.ts           # Utility functions
└── prisma/
    └── schema.prisma      # Database schema
```

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:migrate   # Run migrations
npm run db:studio    # Open Prisma Studio
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```
DATABASE_URL          # Supabase PostgreSQL connection string
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
NEXTAUTH_URL
NEXTAUTH_SECRET
STRIPE_SECRET_KEY
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
STRIPE_WEBHOOK_SECRET
RESEND_API_KEY
NEXT_PUBLIC_APP_URL
```

## Design System

Brand colours (Modern Zen Minimalist theme):

| Token | Colour | Hex |
|---|---|---|
| Primary | Sage Green | `#9caf88` |
| Secondary | Charcoal | `#333333` |
| Accent | Cream | `#f6f1e9` |
| Highlight | Bamboo Beige | `#dcc7a3` |

## Products

- Composite Decking
- Wall Cladding
- Synthetic Turf
- Pergolas
- Outdoor Roller Blinds

## Deployment

Deploy to [Vercel](https://vercel.com) with zero configuration:

```bash
vercel --prod
```

Set all environment variables in your Vercel project settings before deploying.

## License

Private — © Zen Outdoor AU Pty Ltd. All rights reserved.
