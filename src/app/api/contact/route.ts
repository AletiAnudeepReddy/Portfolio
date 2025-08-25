import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, message } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your Gmail
        pass: process.env.GMAIL_PASS, // app password, not regular password
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.GMAIL_USER}>`,
      to: "aletianudeepreddy8@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message || "No message provided"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
