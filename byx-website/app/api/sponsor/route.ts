import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, organization, email, phone, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Send email using Resend
    await resend.emails.send({
      from: 'BYX Website <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'contact@example.com',
      replyTo: email,
      subject: `Sponsorship Inquiry from ${name}`,
      text: `
New Sponsorship Inquiry

Name: ${name}
${organization ? `Organization: ${organization}` : ''}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}

Message:
${message}
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Sponsor form error:', error)
    return NextResponse.json(
      { error: 'Failed to send inquiry' },
      { status: 500 }
    )
  }
}
