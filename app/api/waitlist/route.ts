import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

/**
 * Waitlist API Endpoint
 * Handles POST requests to join the waitlist
 * 
 * Features:
 * - Saves signups to Supabase database
 * - Sends welcome email via Resend
 * - Handles duplicate email detection
 * - Validates email format
 */

interface WaitlistRequest {
  name?: string;
  email: string;
  message?: string;
}

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Initialize Resend client (if API key is provided)
const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

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

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Save to Supabase database
    const { data, error } = await supabase
      .from("waitlist")
      .insert([
        {
          name: body.name || null,
          email: body.email.toLowerCase().trim(),
          message: body.message || null,
        },
      ])
      .select();

    if (error) {
      // Handle duplicate email
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "This email is already on the waitlist!" },
          { status: 400 }
        );
      }
      throw error;
    }

    // Get total count of users for personalized email
    const { count } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true });

    const userPosition = count || 0;
    const spotsLeft = Math.max(0, 100 - userPosition);
    const isEarlyBird = userPosition <= 100;

    // Send welcome email via Resend (if configured)
    if (resend) {
      try {
        await resend.emails.send({
          from: "TaxMate <hello@updates.dtrue.online>",
          to: body.email,
          subject: isEarlyBird 
            ? `🎉 You're #${userPosition} on the TaxMate Waitlist!`
            : "🎉 Welcome to TaxMate Waitlist!",
          html: `
            <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: linear-gradient(to bottom, #F9FAFB, #FFFFFF);">
              <!-- Header -->
              <div style="text-align: center; margin-bottom: 40px;">
                <h1 style="color: #3B82F6; font-size: 32px; font-weight: 800; margin: 0 0 10px 0;">
                  🎉 Welcome to TaxMate!
                </h1>
                <p style="color: #6B7280; font-size: 16px; margin: 0;">
                  ${isEarlyBird 
                    ? `You're #${userPosition} on the early access list` 
                    : `You're on the waitlist (${userPosition} total members)`}
                </p>
              </div>
              
              ${isEarlyBird ? `
              <!-- Early Bird Badge -->
              <div style="background: linear-gradient(135deg, #10B981 0%, #059669 100%); border-radius: 12px; padding: 16px; text-align: center; margin-bottom: 24px; box-shadow: 0 4px 6px rgba(16, 185, 129, 0.2);">
                <p style="color: white; font-size: 16px; font-weight: 700; margin: 0;">
                  🎊 EARLY BIRD SPECIAL
                </p>
                <p style="color: rgba(255,255,255,0.95); font-size: 14px; margin: 8px 0 0 0;">
                  Only ${spotsLeft} spots left for lifetime access at ₹999!
                </p>
              </div>
              ` : ''}
              
              <!-- Main Content -->
              <div style="background: white; border-radius: 16px; padding: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 24px;">
                <p style="color: #111827; font-size: 16px; line-height: 1.6; margin: 0 0 16px 0;">
                  Hey ${body.name || "there"} 👋
                </p>
                <p style="color: #4B5563; font-size: 16px; line-height: 1.6; margin: 0 0 16px 0;">
                  ${isEarlyBird 
                    ? `Thanks for joining! You're one of the <strong>first ${userPosition} users</strong> and you've locked in <strong style="color: #10B981;">lifetime access for just ₹999</strong>! 🎉` 
                    : `Thanks for joining! You're on the waitlist for <strong style="color: #3B82F6;">early access</strong> to TaxMate.`}
                </p>
                <p style="color: #4B5563; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
                  We're building TaxMate to help freelancers like you <strong>create professional invoices in seconds</strong>. No more complex tools, no more formatting headaches – just fast, effortless invoicing.
                </p>
                
                <!-- Features Box -->
                <div style="background: linear-gradient(135deg, #F0F9FF 0%, #F5F3FF 100%); border-radius: 12px; padding: 20px; margin-bottom: 24px; border: 1px solid #E0E7FF;">
                  <h3 style="color: #111827; font-size: 16px; font-weight: 700; margin: 0 0 12px 0;">
                    ⚡ What you'll get:
                  </h3>
                  <ul style="color: #4B5563; font-size: 15px; line-height: 1.8; margin: 0; padding-left: 20px;">
                    <li><strong>Lightning-fast invoicing</strong> – Create invoices in under 30 seconds</li>
                    <li><strong>Smart templates</strong> – Professional designs ready to go</li>
                    <li><strong>Client management</strong> – Track payments and clients effortlessly</li>
                    <li><strong>Instant sharing</strong> – Send via email or download PDF</li>
                  </ul>
                </div>
                
                <!-- CTA Box -->
                <div style="background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%); border-radius: 12px; padding: 24px; text-align: center; margin: 24px 0;">
                  <p style="color: white; font-size: 18px; font-weight: 600; margin: 0 0 8px 0;">
                    🚀 Launching Early 2025
                  </p>
                  <p style="color: rgba(255,255,255,0.9); font-size: 14px; margin: 0;">
                    Be the first to know when we go live!
                  </p>
                </div>
                
                <!-- What's Next -->
                <div style="margin-top: 24px; padding: 20px; background: #F9FAFB; border-radius: 8px;">
                  <h3 style="color: #111827; font-size: 16px; font-weight: 700; margin: 0 0 12px 0;">
                    📬 What happens next?
                  </h3>
                  <ul style="color: #4B5563; font-size: 14px; line-height: 1.8; margin: 0; padding-left: 20px;">
                    <li>We'll send you updates as we build</li>
                    <li>Get exclusive sneak peeks of features</li>
                    <li>Be first in line when we launch</li>
                    ${isEarlyBird 
                      ? '<li><strong style="color: #10B981;">Your lifetime pricing is locked in at ₹999 ✓</strong></li>' 
                      : '<li>Early access to new features</li>'}
                  </ul>
                </div>
              </div>
              
              <!-- Footer -->
              <div style="text-align: center; padding: 20px 0;">
                <p style="color: #6B7280; font-size: 14px; margin: 0 0 8px 0;">
                  Built with ❤️ for freelancers
                </p>
                <p style="color: #9CA3AF; font-size: 13px; margin: 0;">
                  — The TaxMate Team
                </p>
                <p style="color: #D1D5DB; font-size: 12px; margin: 8px 0 0 0;">
                  Questions? Just reply to this email
                </p>
              </div>
            </div>
          `,
        });
      } catch (emailError) {
        // Don't fail the request if email fails - silently continue
      }
    }

    // Success response
    return NextResponse.json(
      {
        success: true,
        message: "Successfully joined the waitlist!",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process request. Please try again." },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed. Use POST to join the waitlist." },
    { status: 405 }
  );
}

