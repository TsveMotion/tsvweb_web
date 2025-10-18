# TsvWeb.com - Placeholder Site

This is a clean placeholder site for **tsvweb.com** that redirects visitors to the main site at **tsvweb.co.uk**.

## Purpose

- Keep tsvweb.com domain alive without exposing old spam content
- Provide a clean landing page directing users to tsvweb.co.uk
- Prevent search engines from indexing spam pages (noindex headers)
- Allow for selective redirects of legitimate pages in the future

## Deployment on Vercel

### Initial Setup

1. Push this repository to GitHub
2. Import the project in Vercel
3. Set the domain to **tsvweb.com**
4. Deploy

### Adding Selective Redirects

When you identify legitimate URLs you want to preserve, edit `vercel.json`:

```json
{
  "redirects": [
    {
      "source": "/contact",
      "destination": "https://tsvweb.co.uk/contact",
      "permanent": true
    },
    {
      "source": "/about",
      "destination": "https://tsvweb.co.uk/about",
      "permanent": true
    }
  ]
}
```

**Important:** Only add real, good pages. Do NOT do blanket redirects.

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## SEO Strategy

- ✅ tsvweb.co.uk is your primary, clean domain
- ✅ tsvweb.com shows placeholder only
- ✅ No mass redirects (protects SEO)
- ✅ X-Robots-Tag: noindex on .com (prevents spam indexing)
- ✅ Add selective redirects only for verified good content

## Tech Stack

- Next.js 14 (App Router)
- React 18
- Static export for optimal Vercel performance
