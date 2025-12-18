# Cloudflare Pages Deployment

## Automatic Detection (Recommended)

Cloudflare Pages can automatically detect and build Next.js projects. No special configuration needed.

## Manual Configuration

If you need to use `@cloudflare/next-on-pages`:

1. Install the adapter:
```bash
npm install -D @cloudflare/next-on-pages
```

2. Update your build command in Cloudflare Pages dashboard:
- Build command: `npm run pages:build`
- Build output directory: `.vercel/output/static`

3. Or use the automatic Next.js detection in Cloudflare Pages settings.

## Important Notes

- **Do NOT use `wrangler deploy`** for Next.js sites on Cloudflare Pages
- Cloudflare Pages will automatically detect Next.js and build accordingly
- The build command should be: `npm run build` (not `npx wrangler deploy`)

