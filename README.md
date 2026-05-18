# Guric — Pure Jaggery Website

Production-ready marketing website for **Guric** ([guric.in](https://guric.in)) — organic jaggery powder, cubes, chocolate jaggery, and flavoured cubes.

## Stack

- Next.js 16 (App Router)
- TypeScript + Tailwind CSS v4
- SEO: metadata, Open Graph, JSON-LD, sitemap, robots.txt

## Contact form (email)

Enquiries are sent to **guricbusiness@gmail.com** via Gmail SMTP.

1. Copy `.env.example` to `.env.local`
2. Enable 2-Step Verification on `guricbusiness@gmail.com`
3. Create an [App Password](https://myaccount.google.com/apppasswords) (Google Account → Security)
4. Set `SMTP_USER` and `SMTP_PASS` in `.env.local`
5. On Vercel/hosting, add the same variables under Environment Variables

## Development

```bash
npm install
cp .env.example .env.local   # then add your App Password
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deploy to guric.in

### Vercel (recommended)

1. Push this repo to GitHub.
2. Import project at [vercel.com](https://vercel.com).
3. Set domain **guric.in** in Project → Settings → Domains.
4. Point DNS: `A` / `CNAME` as Vercel instructs.

### Other hosts

Run `npm run build` and serve the `.next` output with `npm start`, or use `output: 'export'` for static hosting if you do not need server features.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, highlights, featured products |
| `/products` | Full product catalogue |
| `/products/[slug]` | Individual product detail |
| `/why-jaggery` | Health benefits |
| `/about` | Brand story |
| `/contact` | Retail / bulk enquiry |

## Products

- Organic Jaggery Powder
- Handmade Jaggery Cubes
- Desi Ghee Jaggery Cubes
- Chocolate Jaggery Cubes (signature)
- Adhark (Ginger) Jaggery Cubes
- Ilaychi (Cardamom) Jaggery Cubes
