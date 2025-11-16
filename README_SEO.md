SEO & Deployment Guide

What I added for SEO (automated changes):

- Page-level metadata using `react-helmet-async` for `Home`, `About`, `Portfolio`, and `Contact`.
- Open Graph and Twitter card meta tags on the Home page.
- JSON-LD `LocalBusiness` structured data embedded on the Home page (update `url`, `image` fields with your real domain/paths).
- `public/robots.txt` and a basic `public/sitemap.xml` (static template) pointing to `https://your-domain.com`.

Next steps you must complete (required for search engines):

1) Replace `your-domain.com` placeholder
- In the files under `src/pages` and `public/sitemap.xml`, replace `https://your-domain.com` and image paths with your actual domain and production image URLs.

2) Sitemap generation (recommended)
- For dynamic sites, generate sitemap automatically (via a build script or GitHub Action). For small sites, the static `public/sitemap.xml` is fine — update it when new pages are added.

3) Add site to Google Search Console
- Go to: https://search.google.com/search-console
- Add your property (Domain or URL-prefix), verify ownership (recommended: DNS verification if using a domain), and submit your sitemap (https://your-domain.com/sitemap.xml).

4) Set up Google Business Profile (highly recommended for local search)
- Create a Google Business Profile for your company and keep NAP (Name, Address, Phone) consistent.

5) Add structured/frequency content
- Publish at least one quality page of content (e.g., Project case study) — search engines favor fresh, relevant pages.

6) Deploy and wait
- Once you deploy to Vercel (or similar) and add the correct domain, verify in Search Console and request indexing for key pages.

7) Robots & CDN
- Keep `robots.txt` permissive for now. If you use Cloudflare or another CDN, ensure it serves `robots.txt` and `sitemap.xml` correctly.

8) Monitor & Improve
- Watch Search Console for coverage, mobile usability, and performance issues. Add structured data for each Project page for richer results.

Quick commands for local testing and build

```powershell
cd "c:\Users\shekh\Desktop\Construction Project\construction-website"
npm install
npm run build
npm run preview
# preview serves built site on a local port for testing
```

If you'd like, I can:
- Replace the `your-domain.com` placeholders with your actual domain once you provide it.
- Add a GitHub Action to auto-generate a sitemap at build time.
- Add per-project structured data templates.

