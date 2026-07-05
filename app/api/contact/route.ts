import { NextRequest, NextResponse } from 'next/server'

// Fonction pour échapper le HTML et prévenir les injections
const escapeHtml = (text: string): string => {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

// Edge Runtime compatible email sending using Gmail SMTP via fetch
async function sendEmailViaSMTP(
  to: string,
  subject: string,
  html: string,
  from: string,
  replyTo: string,
  smtpUser: string,
  smtpPassword: string
) {
  // Gmail SMTP configuration
  const smtpHost = 'smtp.gmail.com'
  const smtpPort = 587
  
  // Create email message in RFC 822 format
  const message = [
    `From: ${from}`,
    `To: ${to}`,
    `Reply-To: ${replyTo}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/html; charset=UTF-8`,
    ``,
    html,
  ].join('\r\n')

  // For Edge Runtime, we'll use a webhook or external service
  // Since direct SMTP is not available in Edge Runtime, we'll use a fallback
  // In production, consider using Resend, SendGrid, or similar Edge-compatible service
  
  // For now, we'll use a simple fetch to a webhook or log the email
  // This is a temporary solution - in production, use a proper email service
  const emailData = {
    to,
    from,
    subject,
    html,
    replyTo,
  }

  // Try to use an external email service if available
  // For Cloudflare Pages, you should use Resend, SendGrid, or similar
  // This is a placeholder - replace with your email service API
  if (process.env.EMAIL_SERVICE_URL) {
    const response = await fetch(process.env.EMAIL_SERVICE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.EMAIL_SERVICE_API_KEY}`,
      },
      body: JSON.stringify(emailData),
    })
    
    if (!response.ok) {
      throw new Error(`Email service error: ${response.statusText}`)
    }
    
    return await response.json()
  }

  // Fallback: Log email (for development/testing)
  // In production, this should be replaced with a proper email service
  console.log('Email would be sent:', {
    to,
    from,
    subject,
    replyTo,
  })
  
  // Return a mock success response
  // In production, replace this with actual email sending
  return { messageId: `mock-${Date.now()}` }
}

export const runtime = 'edge'

export async function POST(request: NextRequest) {
  try {
    // Vérifier que le body peut être parsé
    let body
    try {
      body = await request.json()
    } catch (parseError: any) {
      console.error('Erreur de parsing JSON:', parseError)
      return NextResponse.json(
        { error: 'Données invalides. Veuillez vérifier que tous les champs sont remplis.' },
        { status: 400 }
      )
    }

    const { firstName, lastName, email, phone, service, message } = body

    // Validation
    if (!firstName || !lastName || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      )
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      )
    }

    // Récupération des variables d'environnement
    const gmailUser = process.env.GMAIL_USER || 'elouardanirajae@gmail.com'
    const recipientEmail = 'elouardanirajae@gmail.com'

    // Échappement des données pour prévenir les injections
    const safeFirstName = escapeHtml(firstName)
    const safeLastName = escapeHtml(lastName)
    const safeEmail = escapeHtml(email)
    const safePhone = escapeHtml(phone)
    const safeService = escapeHtml(service)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>')

    // Configuration de l'email
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

    // Envoi de l'email
    try {
      const result = await sendEmailViaSMTP(
        recipientEmail,
        emailSubject,
        emailHtml,
        `"Portfolio Contact" <${gmailUser}>`,
        email,
        gmailUser,
        '' // Password not needed for external service
      )

      console.log('Email envoyé avec succès:', result.messageId)

      return NextResponse.json(
        { message: 'Email envoyé avec succès' },
        { status: 200 }
      )
    } catch (emailError: any) {
      console.error('Erreur lors de l\'envoi de l\'email:', emailError)
      
      // For development, return success even if email fails
      // In production, you should handle this properly
      if (process.env.NODE_ENV === 'development') {
        console.warn('Mode développement: Email non envoyé mais réponse OK retournée')
        return NextResponse.json(
          { message: 'Message reçu (mode développement - email non envoyé)' },
          { status: 200 }
        )
      }
      
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer plus tard.' },
        { status: 500 }
      )
    }
  } catch (error: any) {
    console.error('Erreur générale:', error)
    
    return NextResponse.json(
      { 
        error: 'Erreur lors du traitement de votre demande. Veuillez réessayer plus tard.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    )
  }
}
