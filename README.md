# TaxMate - Waitlist Landing Page

A high-converting SaaS waitlist landing page for TaxMate, a fintech product built for freelancers and creators in India.

## 🎯 About TaxMate

TaxMate simplifies the stressful parts of freelance money management:
- 🧾 **One-click Invoicing** - Generate GST-ready invoices in under a minute
- 📊 **Smart Dashboard** - Track earnings, taxes, and pending payments
- 🤖 **AI Monthly Summary** - Understand your income with clear summaries

Built by **Dtrue** - a small indie startup focused on modern, human-feeling productivity tools.

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- SEO optimized with OpenGraph tags

## 📁 Project Structure

```
taxmate/
├── app/
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts        # Waitlist API endpoint
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout with SEO
│   └── page.tsx                # Main landing page
├── components/
│   ├── Hero.tsx                # Hero section with CTA
│   ├── ProblemSection.tsx      # Pain points section
│   ├── Features.tsx            # Product features
│   ├── Testimonials.tsx        # Social proof
│   ├── WaitlistForm.tsx        # Email signup form
│   └── Footer.tsx              # Footer with links
├── public/
│   ├── logo.svg                # TaxMate logo
│   ├── og-image.svg            # Social media preview
│   └── manifest.json           # PWA manifest
└── docs/
    └── changes/                # Development changelog
```

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📧 Waitlist API

The `/api/waitlist` endpoint accepts POST requests:

```typescript
POST /api/waitlist
Content-Type: application/json

{
  "name": "Priya Sharma",        // optional
  "email": "priya@example.com",  // required
  "message": "I struggle with..."// optional
}
```

**Current Implementation:** Logs to console (for demo)

**TODO:** Integrate with:
- Supabase for database storage
- Email service (Resend, SendGrid, etc.) for welcome emails
- Analytics (Plausible, PostHog, etc.)

## 🎨 Design System

### Colors
- **Primary:** `#3B82F6` (Blue)
- **Secondary:** `#F8FAFC` (Light Grey)
- **Gradients:** Blue → Purple → Pink

### Typography
- **Font:** Inter
- **Sizes:** Responsive, mobile-first

### Components
All components use:
- Smooth animations (Framer Motion)
- Hover effects
- Rounded corners
- Soft shadows
- Mobile-responsive design

## 🌐 Deployment

Ready to deploy on **Vercel**:

```bash
# Deploy to production
vercel --prod
```

Configure custom domain: `taxmate.dtrue.online`

## 📝 Environment Variables (Optional)

Create `.env.local` for API integrations:

```bash
# Supabase (optional)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key

# Email service (optional)
RESEND_API_KEY=your_resend_key
```

## ✅ Features

- ✅ Fully responsive design
- ✅ Smooth scroll animations
- ✅ Form validation
- ✅ SEO optimized (meta tags, OG image)
- ✅ Accessible HTML semantics
- ✅ TypeScript type safety
- ✅ Clean, modular components
- ✅ Production-ready code

## 📖 Documentation

See `docs/changes/` for development changelog and major updates.

## 🤝 Contributing

Built with ❤️ for Indian freelancers.

For questions or support: [hello@dtrue.online](mailto:hello@dtrue.online)

## 📄 License

© 2025 TaxMate by Dtrue. All rights reserved.

