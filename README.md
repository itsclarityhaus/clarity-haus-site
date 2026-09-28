# Clarity Haus: itsclarityhaus.com

A static marketing site for Clarity Haus, built with [Astro](https://astro.build). It uses no UI framework, keeps JavaScript to a minimum, and deploys to Netlify.

## Run locally

Requires Node 22.12+.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to /dist
npm run preview   # serve the built site
```

## Deploy to Netlify

This folder replaces the contents of the `clarity-haus-site` GitHub repo, which is already connected to Netlify.

1. Upload everything **except** `node_modules/`, `dist/`, and `.astro/` to the repo, replacing the old files.
2. Netlify reads `netlify.toml`, runs `npm run build`, and publishes `dist/`. You don't need to change any dashboard settings.
3. In Netlify, go to **Forms** and make sure **form detection is enabled**. After the next deploy, two forms appear there: `contact` and `waitlist`. You can turn on email notifications under **Forms → Form notifications**.

The existing `ANTHROPIC_API_KEY` environment variable and the `netlify/functions/search.js` function are kept, so the creator email finder keeps working.

## What to edit and where

| To change… | Edit |
|---|---|
| Email, social links, **Calendly link** | `src/data/site.ts` → `site` |
| Navigation | `src/data/site.ts` → `nav` |
| FAQ questions and answers | `src/data/site.ts` → `faqs` |
| Process steps | `src/data/site.ts` → `processSteps` |
| Creator categories | `src/data/site.ts` → `creatorCategories` |
| **Testimonials** (the section switches from the waitlist card automatically) | `src/data/site.ts` → `testimonials` |
| **Founder photo, bio, credentials** | top of `src/pages/about.astro` → `founder` |
| Health Check questions and recommendations | top of `src/pages/health-check.astro` |
| Colors, fonts, spacing, radius, shadows, widths | `src/styles/tokens.css` |
| Photos in place of the line illustrations | put the image in `public/images/`, then `<WorkspaceImage src="/images/file.jpg" alt="…" />` |

## Placeholders still to fill

- **Calendly / scheduler URL**: `site.schedulingUrl`. Until it's set, the booking page shows a placeholder box.
- **Founder photo, bio, credentials**: About page.
- **TikTok / LinkedIn links**: `site.socials`. Set real URLs or delete the lines.
- **Testimonials**: add only real ones.

## Folder structure

```
├── netlify.toml               Build, headers, redirects (/book → /contact, /quiz → /health-check)
├── netlify/functions/         search.js (creator email finder, unchanged)
├── public/                    Static files copied as-is
│   ├── beta.html, tools.html, clarity-report.html, creator-email-finder.html   (legacy pages, URLs unchanged)
│   ├── favicon.svg, og-image.png, robots.txt, sitemap.xml
└── src/
    ├── data/site.ts           All site content settings (see table above)
    ├── styles/tokens.css      Design system variables
    ├── styles/global.css      Base styles, utilities, scroll-reveal
    ├── layouts/BaseLayout     <head>, SEO, Open Graph, JSON-LD schema
    ├── components/            Header, Footer, Logo, Button, SectionHeading, PageHero,
    │                          ServiceCard, FaqAccordion, ProcessSteps, CreatorCategories,
    │                          CtaSection, DashboardMock, QuizPreview, Testimonials,
    │                          WaitlistForm, WorkspaceImage, Icon
    └── pages/                 index, services, how-it-works, for-creators, about, faq,
                               contact, health-check, thanks, 404
```

## Notes

- Forms use Netlify Forms (with a honeypot for spam) and redirect to `/thanks/`.
- A Health Check score carries into the contact form (`?score=`) so it arrives with the inquiry.
- Fonts (Instrument Serif, Inter, Caveat) are self-hosted through Fontsource. The site makes no third-party font requests.
- Scroll animations turn off for visitors with reduced motion enabled, and all content stays visible without JavaScript.
