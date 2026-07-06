import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

const escapeHtml = (text: string): string => {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

async function sendContactEmail({
  to,
  from,
  replyTo,
  subject,
  html,
}: {
  to: string
  from: string
  replyTo: string
  subject: string
  html: string
}) {
  const gmailUser = process.env.GMAIL_USER
  const gmailPassword = process.env.GMAIL_APP_PASSWORD

  if (!gmailUser || !gmailPassword) {
    throw new Error(
      'Configuration SMTP manquante. Définissez GMAIL_USER et GMAIL_APP_PASSWORD dans .env.local'
    )
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: gmailUser,
      pass: gmailPassword,
    },
  })

  return transporter.sendMail({
    from,
    to,
    replyTo,
    subject,
    html,
  })
}

export async function POST(request: NextRequest) {
  try {
    let body: Record<string, string>
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { error: 'Données invalides. Veuillez vérifier que tous les champs sont remplis.' },
        { status: 400 }
      )
    }

    const { firstName, lastName, email, phone, service, message } = body

    if (!firstName || !lastName || !email || !phone || !service || !message) {
      return NextResponse.json({ error: 'Tous les champs sont requis' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Adresse email invalide' }, { status: 400 })
    }

    const gmailUser = process.env.GMAIL_USER || 'elouardaniraje@gmail.com'
    const recipientEmail =
      process.env.CONTACT_RECIPIENT || process.env.GMAIL_USER || 'elouardaniraje@gmail.com'

    const safeFirstName = escapeHtml(firstName)
    const safeLastName = escapeHtml(lastName)
    const safeEmail = escapeHtml(email)
    const safePhone = escapeHtml(phone)
    const safeService = escapeHtml(service)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>')

    const emailSubject = `Nouveau message de contact - ${safeService}`
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4F46E5;">Nouveau message de contact</h2>
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #111827; margin-top: 0;">Informations du contact</h3>
          <p><strong>Nom:</strong> ${safeFirstName} ${safeLastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          <p><strong>Téléphone:</strong> <a href="tel:${safePhone}">${safePhone}</a></p>
          <p><strong>Service demandé:</strong> ${safeService}</p>
        </div>
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #111827; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${safeMessage}</p>
        </div>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
        <p style="color: #6b7280; font-size: 12px;">
          Cet email a été envoyé depuis le formulaire de contact de votre portfolio.
        </p>
      </div>
    `

    const result = await sendContactEmail({
      to: recipientEmail,
      from: `"Portfolio Contact" <${gmailUser}>`,
      replyTo: email,
      subject: emailSubject,
      html: emailHtml,
    })

    return NextResponse.json(
      { message: 'Email envoyé avec succès', messageId: result.messageId },
      { status: 200 }
    )
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : 'Erreur inconnue'
    console.error('Erreur contact:', errMsg)

    return NextResponse.json(
      {
        error: 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer plus tard.',
        details: process.env.NODE_ENV === 'development' ? errMsg : undefined,
      },
      { status: 500 }
    )
  }
}
