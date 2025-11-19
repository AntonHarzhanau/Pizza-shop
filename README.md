# Pizza Shop (Next.js)

An e-commerce demo for ordering pizzas built with the Next.js App Router.  
It showcases a modern full-stack stack: Prisma + PostgreSQL for data, dynamic product modals, a client/server shopping cart, Stripe payments, and transactional email via Resend.

You can see an example: (https://pizza-shop-ten-virid.vercel.app/)

## Key Features
- Product catalogue with category filtering, modal-based product configuration, and ingredient selection.
- Persistent shopping cart backed by PostgreSQL; totals include optional toppings and delivery/tax adjustments.
- Secure checkout flow that creates Stripe Checkout sessions and records orders in the database.
- Email notifications (via Resend) and social login support through NextAuth (GitHub/Google).
- Type-safe APIs powered by Prisma and first-class TypeScript support throughout the app.

## Tech Stack
- **Framework:** Next.js 15 (App Router) + React 19
- **Database & ORM:** PostgreSQL with Prisma ORM
- **Styling:** Tailwind CSS + Radix UI primitives
- **State & Utils:** Zustand, react-use, zod
- **Auth & Emails:** NextAuth, Resend
- **Payments:** Stripe Checkout

## Getting Started
### 1. Prerequisites
- Node.js 18.18+ (or any version supported by Next.js 15)
- npm, pnpm, or yarn (examples below use npm)
- A PostgreSQL database (local or hosted)
- Stripe account for checkout and webhook testing

### 2. Install dependencies
```bash
npm install
```

### 3. Environment variables
Create a `.env` file in the project root using the template below:
```env
NEXT_PUBLIC_API_URL=/api
NEXT_PUBLIC_APP_URL=http://localhost:3000

NEXTAUTH_SECRET=your-generated-secret

DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public

RESEND_API_KEY=your-resend-api-key

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

GITHUB_ID=github-oauth-client-id
GITHUB_SECRET=github-oauth-client-secret

GOOGLE_CLIENT_ID=google-oauth-client-id
GOOGLE_CLIENT_SECRET=google-oauth-client-secret
```

### 4. Database setup
Push the Prisma schema to your database and seed sample data:
```bash
npm run prisma:push      # or `npm run prisma:migrate`
npm run prisma:seed
```
The schema lives in `src/prisma/schemas`, and the seed data is defined in `src/prisma/constants.ts`.

### 5. Run the dev server
```bash
npm run dev
```
Open <http://localhost:3000> to view the storefront.

## Available Scripts
| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js in development mode (Turbopack). |
| `npm run build` | Create an optimized production build. |
| `npm run start` | Serve the production build. |
| `npm run lint` | Run ESLint. |
| `npm run prisma:push` | Push the Prisma schema to the database. |
| `npm run prisma:migrate` | Create & apply migrations interactively. |
| `npm run prisma:studio` | Open Prisma Studio. |
| `npm run prisma:seed` | Seed the database with sample data (`tsx src/prisma/seed.ts`). |

## Stripe & Webhooks
Stripe Checkout sessions are created in `src/app/actions.ts` via `createCheckoutSession`.  
To receive local webhook events during development:
```bash
stripe listen --forward-to localhost:3000/api/checkout/callback
```
Make sure `STRIPE_WEBHOOK_SECRET` matches the value from the Stripe CLI output.

## Emails
Transactional emails (order confirmation, verification) are sent with Resend.  
Ensure `RESEND_API_KEY` is configured and update sender domains according to your Resend account.

## Authentication
NextAuth handles user sessions with support for GitHub and Google providers.  
Configure OAuth credentials in the `.env` file, and make sure the callback URLs match your development and production domains.
