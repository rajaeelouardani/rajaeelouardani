# Guide de Déploiement - Cloudflare Pages

## ⚠️ Problème Actuel

Le déploiement échoue car Cloudflare Pages utilise `npx wrangler deploy` qui est pour Cloudflare Workers, pas pour Next.js.

## ✅ Solution : Configuration Cloudflare Pages

### Étape 1 : Supprimer la Commande de Déploiement Personnalisée

**C'EST LA CLÉ DU PROBLÈME !**

1. Allez dans votre [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Sélectionnez **Pages** dans le menu de gauche
3. Cliquez sur votre projet
4. Allez dans **Settings** (Paramètres)
5. Faites défiler jusqu'à **Builds & deployments**
6. **TROUVEZ la section "Deploy command" ou "Custom deploy command"**
7. **SUPPRIMEZ complètement** la commande `npx wrangler deploy`
8. **LAISSEZ VIDE** cette section
9. Cliquez sur **Save** (Enregistrer)

### Étape 2 : Configurer le Build

Dans la même section **Builds & deployments**, configurez :

- **Framework preset**: `Next.js` (ou laissez sur "None")
- **Build command**: `npm run build`
- **Build output directory**: `.next`
- **Root directory**: `/` (ou laissez vide)
- **Node version**: `22.x` (ou `22.16.0`)

### Étape 3 : Vérifier les Variables d'Environnement

1. Dans **Settings**, allez dans **Environment variables**
2. Ajoutez vos variables :
   - `GITHUB_TOKEN` (si vous utilisez GitHub Stats)
   - `GMAIL_USER` (pour le formulaire de contact)
   - `GMAIL_APP_PASSWORD` (pour le formulaire de contact)
   - `NEXT_PUBLIC_SITE_URL` (URL de votre site)

### Étape 4 : Redéployer

1. Allez dans **Deployments**
2. Cliquez sur **Retry deployment** sur le dernier déploiement
3. Ou faites un nouveau commit pour déclencher un nouveau déploiement

## 📸 Aide Visuelle

Si vous ne trouvez pas la section "Deploy command" :
- Elle peut être dans **Settings** > **Builds & deployments**
- Ou dans **Settings** > **Build configuration**
- Cherchez un champ qui contient `npx wrangler deploy` et supprimez-le

### Option 2 : Export Statique (Alternative)

Si vous voulez un export statique complet :

1. Modifiez `next.config.js` pour ajouter `output: 'export'`
2. Dans Cloudflare Pages dashboard :
   - **Build command**: `npm run build`
   - **Build output directory**: `out`

**Note**: L'export statique désactive certaines fonctionnalités Next.js comme les API routes.

## 📋 Variables d'Environnement

N'oubliez pas d'ajouter vos variables d'environnement dans Cloudflare Pages :

1. Allez dans **Settings** > **Environment variables**
2. Ajoutez :
   - `GITHUB_TOKEN` (si vous utilisez GitHub Stats)
   - `GMAIL_USER` (pour le formulaire de contact)
   - `GMAIL_APP_PASSWORD` (pour le formulaire de contact)
   - `NEXT_PUBLIC_SITE_URL` (URL de votre site)

## 🔧 Configuration Actuelle

- **Framework**: Next.js 16.0.8
- **Node version**: 22.x (recommandé)
- **Build command**: `npm run build`
- **Output directory**: `.next`

## 🚀 Alternative : Vercel (Recommandé pour Next.js)

Vercel est optimisé pour Next.js et offre une meilleure intégration :

1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Ajoutez vos variables d'environnement
4. Déployez !

Vercel offre :
- ✅ Déploiement automatique à chaque push
- ✅ Preview deployments pour chaque PR
- ✅ Optimisations Next.js intégrées
- ✅ CDN global
- ✅ SSL automatique

