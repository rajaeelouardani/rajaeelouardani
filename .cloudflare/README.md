# Cloudflare Pages Deployment

## Automatic Detection (Recommended)

Cloudflare Pages can automatically detect and build Next.js projects. No special configuration needed.

## Manual Configuration

For Next.js 16, Cloudflare Pages automatically detects and builds your Next.js application.

Simply configure in Cloudflare Pages dashboard:
- Build command: `npm run build`
- Build output directory: `.next`
- Node version: `22.x` (or your preferred version)

**Note**: `@cloudflare/next-on-pages` is not compatible with Next.js 16. Use automatic detection instead.

## Important Notes

- **Do NOT use `wrangler deploy`** for Next.js sites on Cloudflare Pages
- Cloudflare Pages will automatically detect Next.js and build accordingly
- The build command should be: `npm run build` (not `npx wrangler deploy`)

