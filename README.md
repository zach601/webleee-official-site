# Webleee Official Site

The real official business website for Webleee.

Webleee builds, deploys, hosts, and manages modern websites for businesses. The site explains the service, shows fictional sample websites, outlines plan options, explains the process, answers FAQs, and encourages businesses to request a website quote.

## Live Website

- Main domain: https://www.webleee.com
- Root domain: https://webleee.com
- Cloudflare Pages URL: https://webleee-official-site.pages.dev

## Tech Stack

- Framework: Astro
- Styling: Tailwind CSS
- Output: Static site
- Hosting target: Cloudflare Pages

## Pages

- Home
- Our Work
- Pricing
- Process
- FAQ
- Contact
- Privacy Policy
- Terms of Service
- 404

## Local Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Production output directory:

```bash
dist
```

## Preview

```bash
npm run preview
```

## Cloudflare Pages Settings

- Project name: `webleee-official-site`
- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`

## SEO Features

- Unique page titles and meta descriptions
- Canonical URLs using `https://www.webleee.com`
- Open Graph metadata
- Twitter/X card metadata
- Webleee-branded social preview image: `/og-image.jpg`
- Organization / ProfessionalService JSON-LD
- FAQPage JSON-LD on the FAQ page
- SVG favicon and web app manifest

## Sitemap and Robots

- `public/robots.txt` is included and points to `https://www.webleee.com/sitemap-index.xml`
- Astro sitemap generation uses `@astrojs/sitemap`
- Generated sitemap index: `/sitemap-index.xml`
- Generated sitemap file: `/sitemap-0.xml`
- Sitemap includes the public pages and excludes the 404 page

## 404 Handling

- A custom 404 page exists at `src/pages/404.astro`
- `public/_worker.js` redirects `webleee.com` to `www.webleee.com`
- `public/_worker.js` also returns the 404 page with status 404 for unknown clean URLs instead of serving the homepage

## Legal Pages Status

Starter legal pages were added:

- `/privacy-policy/`
- `/terms-of-service/`

These starter legal pages should be reviewed before public launch. They are not legal advice.

## Contact Form Status

Contact form status: UI-only. Needs backend before public launch.

Recommended backend options:

- Formspree
- Basin
- Web3Forms
- Formspark
- Cloudflare Pages Function + Turnstile + Resend

Do not treat the contact form as functional until a real destination, spam protection, notifications, and end-to-end testing are completed.

## Demo Website Links Used

These are fictional demo websites created by Webleee to show different styles and industries. They are not real client projects.

- Sentinel Shield Cybersecurity: https://webleee-cybersecurity-demo.pages.dev/
- ApexBuild Construction: https://webleee-construction-demo.pages.dev/
- Lumina Dental Studio: https://webleee-dental-demo.pages.dev/
- Ember & Oak: https://webleee-restaurant-demo.pages.dev/
- Meridian & Co Advisors: https://webleee-advisors-demo.pages.dev/
- NovaMart Home: https://webleee-retail-demo.pages.dev/

## Remaining Placeholders

Needs real information from Zach:

- Real business email
- Real phone / WhatsApp number
- Real location or service area
- Real contact form destination
- Real pricing and package terms
- Real business registration details, if they should be public
- Real social media links, if available
- Real logo and brand assets, if replacing the current text/icon mark
- Final legal review for Privacy Policy and Terms of Service

## Recommended Next Steps Before Public Launch

- Connect the contact form to a real backend or form service
- Add spam protection, preferably Turnstile or the selected form provider's anti-spam option
- Add the real enquiry notification email
- Confirm final pricing and package terms
- Review starter legal pages
- Add real business contact details
- Run a final live check after deployment for `/robots.txt`, `/sitemap-index.xml`, `/privacy-policy/`, `/terms-of-service/`, and a random unknown URL
