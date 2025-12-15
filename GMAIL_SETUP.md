# Configuration Gmail pour le formulaire de contact

## Étapes pour configurer Gmail SMTP

### 1. Activer l'authentification à deux facteurs (2FA)
- Allez sur [Google Account Security](https://myaccount.google.com/security)
- Activez la "Validation en deux étapes" si ce n'est pas déjà fait

### 2. Créer une clé d'application (App Password)
1. Allez sur [Google Account App Passwords](https://myaccount.google.com/apppasswords)
2. Sélectionnez "Mail" comme application
3. Sélectionnez "Other (Custom name)" comme appareil
4. Entrez "Portfolio Contact" comme nom
5. Cliquez sur "Generate"
6. **Copiez la clé générée** (16 caractères, sans espaces)

### 3. Configurer les variables d'environnement
Dans le fichier `.env.local` à la racine du projet :

```env
GMAIL_USER=votre-email@gmail.com
GMAIL_APP_PASSWORD=votre-clé-d-application-16-caractères
```

**Important :**
- Ne mettez **PAS** d'espaces dans la clé d'application
- Ne partagez **JAMAIS** ce fichier `.env.local` publiquement
- Le fichier `.env.local` est déjà dans `.gitignore`

### 4. Redémarrer le serveur de développement
Après avoir modifié `.env.local`, redémarrez le serveur :
```bash
npm run dev
```

## Dépannage

### Erreur 500 - Erreur d'authentification
- Vérifiez que la clé d'application est correcte (16 caractères, sans espaces)
- Vérifiez que l'authentification à deux facteurs est activée
- Vérifiez que vous utilisez une "App Password" et non votre mot de passe Gmail normal

### Erreur de connexion
- Vérifiez votre connexion internet
- Vérifiez que le port 587 n'est pas bloqué par votre pare-feu

### Les emails ne sont pas reçus
- Vérifiez le dossier spam/courrier indésirable
- Vérifiez que l'adresse email de destination est correcte dans `app/api/contact/route.ts`

## Test de l'API

Vous pouvez tester l'API avec curl :
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "phone": "123456789",
    "service": "Web Development",
    "message": "Test message"
  }'
```

