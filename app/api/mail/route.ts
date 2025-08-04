import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  text: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { from, subject, otpText } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });
    console.log("GMAIL_USER:", process.env.GMAIL_USER);
    console.log("GMAIL_PASS:", process.env.GMAIL_PASS ? "Set" : "Not set");
    const mailOptions: MailOptions = {
      from: from,
      to: process.env.GMAIL_USER!,
      subject: subject,
      text: otpText,
    };

    await transporter.verify();
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
