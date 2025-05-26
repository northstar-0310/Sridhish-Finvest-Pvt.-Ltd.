import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import emailConfig from "@/lib/email-config"

// Type for the request body
type InquiryData = {
  name: string
  email: string
  message: string
  service?: string
}

export async function POST(request: Request) {
  try {
    const { name, email, message, service }: InquiryData = await request.json()

    // Input validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    // Email regex for basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address" },
        { status: 400 }
      )
    }

    // Create a Nodemailer transporter using the configuration
    const transporter = nodemailer.createTransport({
      service: emailConfig.service,
      host: emailConfig.host,
      port: emailConfig.port,
      secure: emailConfig.secure,
      auth: {
        user: emailConfig.auth.user,
        pass: emailConfig.auth.pass,
      },
    })

    // Email options
    const mailOptions = {
      from: emailConfig.from,
      to: emailConfig.to,
      subject: `New Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1a365d;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
          <p><strong>Message:</strong></p>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin-top: 10px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;">
          <p style="font-size: 12px; color: #718096;">
            This email was sent from the contact form on Sridhish Finvest website.
          </p>
        </div>
      `,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    // Send a confirmation email to the user
    const userMailOptions = {
      from: emailConfig.from,
      to: email,
      subject: "Thank you for contacting Sridhish Finvest",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1a365d;">Thank you for reaching out, ${name}!</h2>
          <p>We've received your inquiry and our team will get back to you shortly.</p>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin: 15px 0;">
            <p><strong>Your Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p>If you have any urgent questions, feel free to contact us directly at <a href="mailto:${emailConfig.to}">${emailConfig.to}</a> or call us at +91 612-3587939.</p>
          <p>Best regards,<br>The Sridhish Finvest Team</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;">
          <p style="font-size: 12px; color: #718096;">
            This is an automated message. Please do not reply to this email.
          </p>
        </div>
      `,
    }

    await transporter.sendMail(userMailOptions)

    return NextResponse.json({ message: "Inquiry submitted successfully" })
  } catch (error) {
    console.error("Error submitting inquiry:", error)
    return NextResponse.json(
      { 
        message: error instanceof Error ? error.message : "Failed to submit inquiry" 
      }, 
      { status: 500 }
    )
  }
}
