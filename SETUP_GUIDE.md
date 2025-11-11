# 🚀 TaxMate Setup Guide - Environment Variables

## Current Status

**Right now, your landing page works perfectly but:**
- ✅ Form submissions are logged to console (demo mode)
- ❌ Not saved to database
- ❌ No welcome email sent
- ❌ No analytics tracking

**To make it fully functional, you need 2 things:**

---

## 🗄️ Required: Database (Supabase)

**Why:** Save waitlist signups permanently

### **Step 1: Create Supabase Account**
1. Go to [supabase.com](https://supabase.com)
2. Sign up (free tier is perfect)
3. Create new project

### **Step 2: Create Waitlist Table**

Run this SQL in Supabase SQL Editor:

```sql
create table waitlist (
  id uuid default uuid_generate_v4() primary key,
  name text,
  email text not null unique,
  message text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table waitlist enable row level security;

-- Allow public inserts (for the form)
create policy "Allow public inserts" on waitlist
  for insert with check (true);

-- Only you can view (for admin)
create policy "Allow authenticated reads" on waitlist
  for select using (auth.role() = 'authenticated');
```

### **Step 3: Get Your API Keys**

1. Go to Project Settings → API
2. Copy these values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **Anon/Public Key** (starts with `eyJ...`)

### **Step 4: Add to Environment Variables**

Create `.env.local` file:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxx
```

### **Step 5: Install Supabase Client**

```bash
npm install @supabase/supabase-js
```

### **Step 6: Update API Route**

Update `app/api/waitlist/route.ts`:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const body: WaitlistRequest = await request.json();

    // Validate email
    if (!body.email || !body.email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Save to Supabase
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        {
          name: body.name || null,
          email: body.email,
          message: body.message || null,
        },
      ])
      .select();

    if (error) {
      // Handle duplicate email
      if (error.code === '23505') {
        return NextResponse.json(
          { error: "This email is already on the waitlist!" },
          { status: 400 }
        );
      }
      throw error;
    }

    console.log("✅ Saved to database:", data);

    return NextResponse.json(
      {
        success: true,
        message: "Successfully joined the waitlist!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Waitlist signup error:", error);
    return NextResponse.json(
      { error: "Failed to process request. Please try again." },
      { status: 500 }
    );
  }
}
```

---

## 📧 Optional: Email Service (Resend)

**Why:** Send welcome emails to waitlist members

### **Step 1: Create Resend Account**
1. Go to [resend.com](https://resend.com)
2. Sign up (free tier: 100 emails/day)
3. Add your domain (or use their testing domain)

### **Step 2: Get API Key**

1. Go to API Keys
2. Create new key
3. Copy it

### **Step 3: Add to Environment**

Add to `.env.local`:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

### **Step 4: Install Resend**

```bash
npm install resend
```

### **Step 5: Add Email to API Route**

Update `app/api/waitlist/route.ts`:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// After saving to database, add this:
if (process.env.RESEND_API_KEY) {
  await resend.emails.send({
    from: 'TaxMate <hello@taxmate.dtrue.online>',
    to: body.email,
    subject: '🎉 Welcome to TaxMate Waitlist!',
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="color: #3B82F6; font-size: 28px; margin-bottom: 20px;">
          You're on the TaxMate waitlist! 🚀
        </h1>
        <p style="color: #4B5563; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
          Hey ${body.name || 'there'},
        </p>
        <p style="color: #4B5563; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
          Thanks for joining the TaxMate waitlist! You're among the first 100 to get lifetime access for just ₹999.
        </p>
        <p style="color: #4B5563; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
          We're launching in early 2025. You'll be the first to know when we go live!
        </p>
        <p style="color: #6B7280; font-size: 14px;">
          — The Dtrue Team<br/>
          Building TaxMate with ❤️ for freelancers
        </p>
      </div>
    `,
  });
}
```

---

## 📊 Optional: Analytics (Plausible)

**Why:** Track visitors, conversions, and behavior

### **Option 1: Plausible (Recommended - Privacy-friendly)**

**Step 1:** Create account at [plausible.io](https://plausible.io)

**Step 2:** Add to `app/layout.tsx` (in the `<head>`):

```tsx
<script defer data-domain="taxmate.dtrue.online" src="https://plausible.io/js/script.js"></script>
```

**No env variables needed!** Just add the script tag.

### **Option 2: PostHog (Open Source)**

**Step 1:** Create account at [posthog.com](https://posthog.com)

**Step 2:** Add to `.env.local`:

```bash
NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxxxxxxxxxx
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

**Step 3:** Install and configure

```bash
npm install posthog-js
```

---

## 📋 Complete Environment Variables

### **Minimum (Just Database):**

Create `.env.local` with:

```bash
# Supabase - Required for saving signups
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxx
```

### **Recommended (Database + Email):**

```bash
# Supabase - Save signups
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxx

# Resend - Send welcome emails
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Your domain (for email "from" address and analytics)
NEXT_PUBLIC_SITE_URL=https://taxmate.dtrue.online
```

### **Full Setup (Everything):**

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxx

# Email Service (choose one)
RESEND_API_KEY=re_xxxxxxxxxxxxx
# OR
SENDGRID_API_KEY=SG.xxxxxxxxxxxxx

# Analytics (optional)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=taxmate.dtrue.online
# OR
NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxxxxxxxxxx
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Site URL
NEXT_PUBLIC_SITE_URL=https://taxmate.dtrue.online
```

---

## ⚡ Quick Start (10 Minutes)

### **Fastest Path to Fully Functional:**

1. **Create Supabase Project** (3 min)
   - Sign up at supabase.com
   - Create project
   - Run the SQL above

2. **Get Your Keys** (1 min)
   - Copy URL and Anon Key

3. **Create .env.local** (1 min)
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=your_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
   ```

4. **Install Supabase** (1 min)
   ```bash
   npm install @supabase/supabase-js
   ```

5. **Update API Route** (3 min)
   - Add Supabase code (provided above)

6. **Test** (1 min)
   ```bash
   npm run dev
   ```
   - Submit form
   - Check Supabase table

**Done! Signups now saved to database.** ✅

---

## 📧 Add Email (Optional, +5 Minutes)

1. **Create Resend Account** (2 min)
   - Sign up at resend.com
   - Get API key

2. **Add to .env.local** (1 min)
   ```bash
   RESEND_API_KEY=re_xxxxx
   ```

3. **Install Resend** (1 min)
   ```bash
   npm install resend
   ```

4. **Add Email Code** (1 min)
   - Add to API route (code above)

**Done! Welcome emails now sent.** ✅

---

## 🎯 What Each Variable Does

| Variable | Purpose | Required? |
|----------|---------|-----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Database connection | **YES** |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Database access | **YES** |
| `RESEND_API_KEY` | Send emails | No (recommended) |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Analytics | No (optional) |
| `NEXT_PUBLIC_SITE_URL` | Your domain | No (helpful) |

---

## ✅ Current Functionality

### **Without Any Env Variables:**
- ✅ Landing page works perfectly
- ✅ Form validates email
- ✅ Shows success message
- ✅ All animations work
- ❌ Signups logged to console only
- ❌ Not saved anywhere
- ❌ No emails sent

### **With Supabase Only:**
- ✅ Everything above +
- ✅ **Signups saved to database**
- ✅ Can view all signups in Supabase
- ✅ Export to CSV anytime
- ❌ No emails sent

### **With Supabase + Resend:**
- ✅ Everything above +
- ✅ **Welcome emails sent**
- ✅ Build relationship from day 1
- ✅ Confirm signup to users
- ✅ Collect feedback

---

## 🔧 Deploy to Vercel

### **Add Environment Variables in Vercel:**

1. Go to Vercel Dashboard
2. Select TaxMate project
3. Settings → Environment Variables
4. Add each variable:
   - Key: `NEXT_PUBLIC_SUPABASE_URL`
   - Value: `https://xxxxx.supabase.co`
   - Environment: Production, Preview, Development
5. Redeploy

---

## 📊 Recommended Setup Priority

### **Day 1 (Before Launch):**
1. ✅ Supabase (save signups)
2. ✅ Resend (welcome emails)

### **Week 1 (After Launch):**
3. ✅ Plausible (track traffic)
4. ✅ Monitor Supabase (view signups)

### **Month 1 (Optimization):**
5. ✅ A/B testing (based on analytics)
6. ✅ Email nurture sequence
7. ✅ Prepare beta invites

---

## 🎯 Summary

**Minimum to go live:**
- Just deploy as-is (signups logged to console)
- Collect emails manually from logs

**Recommended for launch:**
- Supabase (10 min setup)
- Signups saved automatically
- Can export anytime

**Full professional setup:**
- Supabase + Resend (15 min total)
- Database + welcome emails
- Complete user experience

---

## 🆘 Need Help?

**Supabase Issues:**
- Docs: [supabase.com/docs](https://supabase.com/docs)
- Check project URL is correct
- Verify anon key is public (not service key)

**Resend Issues:**
- Docs: [resend.com/docs](https://resend.com/docs)
- Verify domain or use test domain
- Check API key is valid

**Vercel Deployment:**
- Docs: [vercel.com/docs](https://vercel.com/docs)
- Add env vars in dashboard
- Redeploy after adding

---

## ✅ Quick Answer

**To make it fully functional, you need:**

**Required:**
- `NEXT_PUBLIC_SUPABASE_URL` (database)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` (database)

**Recommended:**
- `RESEND_API_KEY` (emails)

**Optional:**
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` (analytics)

**Time to set up:** 10-15 minutes

**Then you're ready to collect real signups!** 🚀

---

**Questions? Email hello@dtrue.online**

