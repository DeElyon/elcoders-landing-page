import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { createClient } from '@supabase/supabase-js';

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'elcoderssofwares12@gmail.com',
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Supabase client initialization
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

interface BookingRequest {
  name: string;
  email: string;
  phone: string;
  countryCode?: string;
  date: string;
  time: string;
  service: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: BookingRequest = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.date || !body.time || !body.service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Save booking to Supabase
    const { data, error: dbError } = await supabase
      .from('bookings')
      .insert([
        {
          name: body.name,
          email: body.email,
          phone: body.phone,
          country_code: body.countryCode,
          date: body.date,
          time: body.time,
          service: body.service,
          message: body.message,
          status: 'pending',
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (dbError) {
      console.error('Supabase error:', dbError);
      return NextResponse.json(
        { error: 'Failed to save booking' },
        { status: 502 }
      );
    }

    // Format date and time for display
    const bookingDate = new Date(body.date);
    const formattedDate = bookingDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // Send confirmation email to client
    const clientEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%); color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
            .content { background: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
            .details { background: white; padding: 15px; border-left: 4px solid #0ea5e9; margin: 10px 0; }
            .footer { text-align: center; color: #666; font-size: 12px; }
            strong { color: #1e293b; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Booking Confirmed! 🎉</h1>
              <p>Your appointment with ELCODERS has been scheduled.</p>
            </div>
            
            <div class="content">
              <h2>Appointment Details</h2>
              
              <div class="details">
                <p><strong>Name:</strong> ${body.name}</p>
                <p><strong>Service:</strong> ${body.service}</p>
                <p><strong>Date:</strong> ${formattedDate}</p>
                <p><strong>Time:</strong> ${body.time}</p>
              </div>

              <div class="details">
                <p><strong>Phone:</strong> ${body.phone}</p>
                <p><strong>Email:</strong> ${body.email}</p>
              </div>

              ${body.message ? `
              <div class="details">
                <p><strong>Project Details:</strong></p>
                <p>${body.message.replace(/\n/g, '<br>')}</p>
              </div>
              ` : ''}

              <h2>Next Steps</h2>
              <p>Our team will reach out to you shortly at ${body.phone} or ${body.email} to confirm the appointment. We'll send you a meeting link 24 hours before your scheduled time.</p>
              
              <p><strong>Quick Links:</strong></p>
              <ul>
                <li><a href="https://wa.link/oktez7">Chat with us on WhatsApp</a></li>
                <li><a href="mailto:elcoderssofwares12@gmail.com">Send us an email</a></li>
                <li><a href="https://x.com/ElVerse27">Follow us on Twitter</a></li>
              </ul>
            </div>
            
            <div class="footer">
              <p>Thank you for choosing ELCODERS - Daily Velocity, Zero Fluff</p>
              <p>&copy; 2026 ELCODERS. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email to client
    await transporter.sendMail({
      from: process.env.EMAIL_USER || 'elcoderssofwares12@gmail.com',
      to: body.email,
      subject: `Booking Confirmed - ${body.service} on ${formattedDate}`,
      html: clientEmailHtml,
    });

    // Send notification email to admin
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1e293b; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
            .content { background: #f3f4f6; padding: 20px; border-radius: 8px; }
            .details { background: white; padding: 15px; border: 1px solid #e5e7eb; margin: 10px 0; }
            strong { color: #1e293b; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Booking Alert</h1>
            </div>
            
            <div class="content">
              <h2>Client Information</h2>
              <div class="details">
                <p><strong>Name:</strong> ${body.name}</p>
                <p><strong>Email:</strong> ${body.email}</p>
                <p><strong>Phone:</strong> ${body.phone}</p>
                <p><strong>Service:</strong> ${body.service}</p>
                <p><strong>Date:</strong> ${formattedDate}</p>
                <p><strong>Time:</strong> ${body.time}</p>
              </div>

              ${body.message ? `
              <h2>Project Details</h2>
              <div class="details">
                <p>${body.message.replace(/\n/g, '<br>')}</p>
              </div>
              ` : ''}

              <p><strong>Action Required:</strong> Reach out to the client to confirm the appointment.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send notification to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER || 'elcoderssofwares12@gmail.com',
      to: 'elcoderssofwares12@gmail.com',
      subject: `New Booking: ${body.name} - ${body.service}`,
      html: adminEmailHtml,
    });

    return NextResponse.json({
      success: true,
      message: 'Booking created successfully. Confirmation email sent.',
      booking: {
        id: data?.[0]?.id,
        name: body.name,
        email: body.email,
        date: body.date,
        time: body.time,
      },
    });
  } catch (error) {
    console.error('Booking error:', error);

    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Failed to create booking',
      },
      { status: 500 }
    );
  }
}
