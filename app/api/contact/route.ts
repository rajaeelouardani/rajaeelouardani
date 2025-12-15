import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

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
    let gmailPassword = process.env.GMAIL_APP_PASSWORD || 'ylmfntoyupcnhwfn'
    
    // Retirer les espaces de la clé d'application si présents
    gmailPassword = gmailPassword.replace(/\s/g, '')

    console.log('Configuration Gmail:', {
      user: gmailUser,
      passwordLength: gmailPassword.length,
      passwordSet: !!gmailPassword
    })

    if (!gmailUser || !gmailPassword) {
      console.error('Variables d\'environnement Gmail manquantes')
      return NextResponse.json(
        { error: 'Configuration email manquante' },
        { status: 500 }
      )
    }

    // Configuration du transporteur Gmail SMTP
    let transporter
    try {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: gmailUser,
          pass: gmailPassword,
        },
      })
      
      // Test de connexion simple (sans bloquer si ça échoue)
      transporter.verify((error: any, success: any) => {
        if (error) {
          console.warn('Avertissement de vérification SMTP (on continue quand même):', error.message)
        } else {
          console.log('✓ Serveur SMTP prêt à envoyer des emails')
        }
      })
    } catch (transportError: any) {
      console.error('Erreur lors de la création du transporteur:', transportError)
      return NextResponse.json(
        { error: 'Erreur de configuration email. Veuillez contacter l\'administrateur.' },
        { status: 500 }
      )
    }

    // Vérification de la connexion (optionnel, peut être commenté en production)
    // try {
    //   await transporter.verify()
    //   console.log('Connexion SMTP vérifiée avec succès')
    // } catch (verifyError: any) {
    //   console.error('Erreur de vérification SMTP:', verifyError)
    //   // On continue quand même, parfois la vérification échoue mais l'envoi fonctionne
    // }

    // Échappement des données pour prévenir les injections
    const safeFirstName = escapeHtml(firstName)
    const safeLastName = escapeHtml(lastName)
    const safeEmail = escapeHtml(email)
    const safePhone = escapeHtml(phone)
    const safeService = escapeHtml(service)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>')

    // Configuration de l'email
    const mailOptions = {
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: 'elouardanirajae@gmail.com',
      subject: `Nouveau message de contact - ${safeService}`,
      html: `
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
      `,
      replyTo: email,
    }

    // Vérifier que le transporteur est initialisé
    if (!transporter) {
      console.error('Transporteur email non initialisé')
      return NextResponse.json(
        { error: 'Erreur de configuration email. Le transporteur n\'a pas pu être initialisé.' },
        { status: 500 }
      )
    }

    // Envoi de l'email avec timeout
    const sendPromise = transporter.sendMail(mailOptions)
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Timeout: L\'envoi de l\'email a pris trop de temps')), 30000)
    )

    const info = await Promise.race([sendPromise, timeoutPromise]) as any
    console.log('Email envoyé avec succès:', info.messageId)

    return NextResponse.json(
      { message: 'Email envoyé avec succès' },
      { status: 200 }
    )
  } catch (error: any) {
    // Log complet de l'erreur
    const errorDetails = {
      message: error?.message || 'Erreur inconnue',
      code: error?.code,
      command: error?.command,
      response: error?.response,
      responseCode: error?.responseCode,
      errno: error?.errno,
      syscall: error?.syscall,
      hostname: error?.hostname,
      port: error?.port,
      stack: process.env.NODE_ENV === 'development' ? error?.stack : undefined
    }
    
    console.error('=== ERREUR DÉTAILLÉE LORS DE L\'ENVOI DE L\'EMAIL ===')
    console.error(JSON.stringify(errorDetails, null, 2))
    
    // Messages d'erreur plus spécifiques
    let errorMessage = 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer plus tard.'
    
    if (error.code === 'EAUTH' || error.responseCode === 535) {
      errorMessage = 'Erreur d\'authentification Gmail. Veuillez vérifier que la clé d\'application est correcte et que l\'authentification à deux facteurs est activée.'
    } else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      errorMessage = 'Erreur de connexion au serveur email. Veuillez vérifier votre connexion internet.'
    } else if (error.responseCode === 550) {
      errorMessage = 'Erreur: L\'adresse email de destination est invalide.'
    } else if (error.response) {
      errorMessage = `Erreur du serveur email (${error.responseCode}): ${error.response}`
    } else if (error.message) {
      errorMessage = `Erreur: ${error.message}`
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    )
  }
}

