import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import type SMTPTransport from 'nodemailer/lib/smtp-transport'
import type Transporter from 'nodemailer/lib/mailer'

export const runtime = 'nodejs'
export const maxDuration = 30

const DEFAULT_GMAIL = 'elouardanirajae@gmail.com'

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

/** Nettoie les variables Vercel (espaces, guillemets, retours ligne). */
function cleanEnv(value: string | undefined): string {
  if (!value) return ''
  return value.trim().replace(/^["']|["']$/g, '').trim()
}

function getSmtpConfig() {
  const user = cleanEnv(process.env.GMAIL_USER) || DEFAULT_GMAIL
  const pass = cleanEnv(process.env.GMAIL_APP_PASSWORD).replace(/\s/g, '')

  if (!pass) {
    return null
  }

  return { user, pass }
}

function createTransporters(user: string, pass: string): Transporter[] {
  const auth = { user, pass }

  const configs: SMTPTransport.Options[] = [
    { service: 'gmail', auth },
    { host: 'smtp.gmail.com', port: 465, secure: true, auth },
    { host: 'smtp.gmail.com', port: 587, secure: false, auth, requireTLS: true },
  ]

  return configs.map((options) =>
    nodemailer.createTransport({
      ...options,
      connectionTimeout: 15_000,
      greetingTimeout: 15_000,
      socketTimeout: 20_000,
    })
  )
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
  const smtp = getSmtpConfig()
  if (!smtp) {
    throw new Error('SMTP_NOT_CONFIGURED')
  }

  const transporters = createTransporters(smtp.user, smtp.pass)
  let lastError: unknown

  for (const transporter of transporters) {
    try {
      await transporter.verify()
      return await transporter.sendMail({ from, to, replyTo, subject, html })
    } catch (error) {
      lastError = error
      console.warn('[contact] Tentative SMTP échouée, essai suivant…')
    }
  }

  throw lastError ?? new Error('SMTP_SEND_FAILED')
}

function mapSmtpError(error: unknown): { status: number; message: string; code: string } {
  const errMsg = error instanceof Error ? error.message : String(error)

  if (errMsg === 'SMTP_NOT_CONFIGURED') {
    return {
      status: 503,
      code: 'SMTP_NOT_CONFIGURED',
      message:
        'Le service email n\'est pas configuré. Ajoutez GMAIL_APP_PASSWORD sur Vercel puis redéployez.',
    }
  }

  if (
    errMsg.includes('Invalid login') ||
    errMsg.includes('Username and Password not accepted') ||
    errMsg.includes('535') ||
    errMsg.includes('534')
  ) {
    return {
      status: 503,
      code: 'SMTP_AUTH_FAILED',
      message:
        'Authentification Gmail échouée. Vérifiez que GMAIL_USER = elouardanirajae@gmail.com et que GMAIL_APP_PASSWORD est un mot de passe d\'application (16 caractères), pas votre mot de passe Gmail.',
    }
  }

  if (errMsg.includes('ETIMEDOUT') || errMsg.includes('ECONNECTION') || errMsg.includes('timeout')) {
    return {
      status: 503,
      code: 'SMTP_TIMEOUT',
      message: 'Connexion SMTP expirée. Réessayez dans quelques instants.',
    }
  }

  return {
    status: 500,
    code: 'SMTP_SEND_FAILED',
    message: 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer plus tard.',
  }
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

    const smtp = getSmtpConfig()
    if (!smtp) {
      console.error('[contact] GMAIL_APP_PASSWORD manquant sur le serveur')
      return NextResponse.json(
        { error: 'Service email non configuré.', code: 'SMTP_NOT_CONFIGURED' },
        { status: 503 }
      )
    }

    const recipientEmail = cleanEnv(process.env.CONTACT_RECIPIENT) || smtp.user

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
      from: `"Portfolio Contact" <${smtp.user}>`,
      replyTo: email,
      subject: emailSubject,
      html: emailHtml,
    })

    console.log('[contact] Email envoyé:', result.messageId)

    return NextResponse.json(
      { message: 'Email envoyé avec succès', messageId: result.messageId },
      { status: 200 }
    )
  } catch (error: unknown) {
    const mapped = mapSmtpError(error)
    console.error('[contact] Erreur SMTP:', error)

    return NextResponse.json(
      { error: mapped.message, code: mapped.code },
      { status: mapped.status }
    )
  }
}
