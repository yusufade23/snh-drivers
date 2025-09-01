import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "your-email@gmail.com",
    pass: process.env.EMAIL_PASS || "your-app-password",
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      customerName,
      customerEmail,
      customerPhone,
      pickupAddress,
      dropoffAddress,
      pickupTime,
      passengers,
      vehicleType,
      specialRequests,
      estimatedPrice
    } = body;

    // Validate required fields
    if (!customerName || !customerEmail || !customerPhone || !pickupAddress || !dropoffAddress) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create booking email content
    const bookingEmail = {
      from: process.env.EMAIL_USER || "your-email@gmail.com",
      to: process.env.ADMIN_EMAIL || "admin@snhdrivers.nl",
      subject: `🚕 New Taxi Booking - ${customerName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f59e0b; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
            🚕 New Taxi Booking Request
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Customer Information</h3>
            <p><strong>Name:</strong> ${customerName}</p>
            <p><strong>Email:</strong> ${customerEmail}</p>
            <p><strong>Phone:</strong> ${customerPhone}</p>
          </div>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Trip Details</h3>
            <p><strong>Pickup Address:</strong> ${pickupAddress}</p>
            <p><strong>Dropoff Address:</strong> ${dropoffAddress}</p>
            <p><strong>Pickup Time:</strong> ${pickupTime}</p>
            <p><strong>Passengers:</strong> ${passengers}</p>
            <p><strong>Vehicle Type:</strong> ${vehicleType}</p>
            <p><strong>Estimated Price:</strong> €${estimatedPrice}</p>
            ${specialRequests ? `<p><strong>Special Requests:</strong> ${specialRequests}</p>` : ''}
          </div>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Booking Time</h3>
            <p><strong>Received:</strong> ${new Date().toLocaleString('nl-NL')}</p>
          </div>

          <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:${customerEmail}" style="background: #f59e0b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Reply to Customer
            </a>
          </div>
        </div>
      `
    };

    // Send confirmation email to customer
    const confirmationEmail = {
      from: process.env.EMAIL_USER || "your-email@gmail.com",
      to: customerEmail,
      subject: "🚕 Your Taxi Booking Confirmation - SNH Drivers",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f59e0b; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
            🚕 Booking Confirmation
          </h2>
          
          <p>Dear ${customerName},</p>
          
          <p>Thank you for choosing SNH Drivers! We have received your taxi booking request and will confirm it shortly.</p>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Your Booking Details</h3>
            <p><strong>Pickup:</strong> ${pickupAddress}</p>
            <p><strong>Destination:</strong> ${dropoffAddress}</p>
            <p><strong>Time:</strong> ${pickupTime}</p>
            <p><strong>Vehicle:</strong> ${vehicleType}</p>
            <p><strong>Estimated Price:</strong> €${estimatedPrice}</p>
          </div>

          <p>We will contact you shortly to confirm your booking and provide driver details.</p>

          <div style="background: #fef3c7; padding: 15px; border-radius: 6px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Need to make changes?</strong></p>
            <p style="margin: 5px 0 0 0;">Call us: +31 20 123 4567</p>
            <p style="margin: 5px 0 0 0;">WhatsApp: +31 6 12345678</p>
          </div>

          <p>Best regards,<br>SNH Drivers Team</p>
        </div>
      `
    };

    // Send emails
    await transporter.sendMail(bookingEmail);
    await transporter.sendMail(confirmationEmail);

    return NextResponse.json({
      success: true,
      message: "Booking request sent successfully! We'll contact you shortly to confirm."
    });

  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Failed to send booking request. Please try again or contact us directly." },
      { status: 500 }
    );
  }
} 