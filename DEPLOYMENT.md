# Guide de Déploiement - Cloudflare Pages

## ⚠️ Problème Actuel

Le déploiement échoue car Cloudflare Pages utilise `npx wrangler deploy` qui est pour Cloudflare Workers, pas pour Next.js.

## ✅ Solution : Configuration Cloudflare Pages

### Option 1 : Détection Automatique (Recommandé)

1. Allez dans votre dashboard Cloudflare Pages
2. Ouvrez les **Settings** de votre projet
3. Allez dans **Builds & deployments**
4. Configurez comme suit :
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
   - **Root directory**: `/` (ou laissez vide)
   - **Node version**: `22.x` (ou la version que vous utilisez)

5. **IMPORTANT** : Supprimez ou modifiez la commande de déploiement personnalisée si elle existe
   - Ne pas utiliser `npx wrangler deploy`
   - Laisser Cloudflare Pages gérer automatiquement le déploiement

### Option 2 : Utiliser @cloudflare/next-on-pages

Si vous voulez utiliser les fonctionnalités Cloudflare Workers :

1. Installez l'adaptateur :
```bash
npm install -D @cloudflare/next-on-pages
```

2. Dans Cloudflare Pages dashboard :
   - **Build command**: `npm run pages:build`
   - **Build output directory**: `.vercel/output/static`

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

