# Doddamani & Brothers — Construction Website

Professional, responsive React website for Doddamani & Brothers. Built with Vite + React, Tailwind CSS, and Framer Motion — designed to showcase projects (photos & videos), services, team, and contact details with a clean, modern UI.

This README explains how to run, build, deploy, and keep the project SEO-friendly on GitHub + Vercel.

---

## Demo

Add a live demo link here once deployed (e.g. `https://dandco.in`).

---

## Features

- Home page with hero, services, stats, portfolio preview, testimonials and CTA
- Project gallery (images) with modal detail viewer
- Video showcase with modal playback
- About page (Mission, Timeline, Team)
- Contact page with contact form and Google Map
- SEO-friendly metadata, Open Graph, and LocalBusiness JSON-LD
- Client logos carousel and floating call button
- Mobile-friendly responsive design

---

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion (animations)
- Swiper (carousel)
- react-countup (numbers)
- @react-google-maps/api (Google Maps)
- Lucide icons

---

## Prerequisites

- Node.js (LTS recommended)
- npm (comes with Node.js)
- Git

Local development was tested on Windows PowerShell; commands below are PowerShell-ready.

---

## Setup (Local)

Open PowerShell and run:

```powershell
cd "C:\Desktop\construction-website"
npm install
```

Start dev server:

```powershell
npm run dev
```

The app should open at `http://localhost:5173` (or the port shown by Vite).

Build for production and preview:

```powershell
npm run build
npm run preview
```

`preview` serves the built app locally so you can test production behavior.

---

## Environment Variables

The project uses a Google Maps API key for the map. Create a `.env.local` file in the project root (do not commit this file):

```
VITE_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
```

Replace `YOUR_GOOGLE_MAPS_API_KEY` with the API key you create in Google Cloud Console. For local testing also allow `http://localhost:5173` as an HTTP referrer in the API key restrictions.

When you deploy on Vercel, add the same environment variable in the Project Settings → Environment Variables.

---

## Git & GitHub — common commands (PowerShell)

If you haven't already connected this project to a GitHub repo, follow these commands (replace values where noted):

```powershell
cd "C:\Desktop\construction-website"
# initialize (if needed)
git init

# set local identity (only if not set globally)
git config user.name "Your Name"
git config user.email "your.email@example.com"

# create .gitignore (if not present)
@"
node_modules
dist
.env*
.vscode
.DS_Store
npm-debug.log
"@ | Out-File -Encoding utf8 .gitignore

# stage and commit
git add .
git commit -m "Initial commit - Doddamani & Brothers website"

# add remote (use your repo HTTPS url)
git remote add origin https://github.com/YOUR_USERNAME/Doddamani_and_Brothers_Website.git

# ensure branch name
git branch -M main

# push (set upstream)
git push -u origin main
```

If the remote rejects the push because it has new commits, integrate remote changes first:

```powershell
# safe backup branch
git branch backup-before-push
# recommended: fetch + rebase
git fetch origin
git pull --rebase origin main
# resolve conflicts if any, then
git push origin main
```

Use `git push --force origin main` only if you intentionally want to overwrite the remote history.

---

## Deploy to Vercel (recommended)

1. Create a GitHub repository and push your project (see Git commands above).
2. Go to https://vercel.com and sign in with GitHub.
3. Import the repository and select `Vite` as the framework.
4. Set build command: `npm run build` and Output directory: `dist`.
5. Add environment variable (`VITE_GOOGLE_MAPS_API_KEY`) in Vercel Project Settings.
6. Add your custom domain in Vercel and update DNS records as instructed.

Vercel will automatically rebuild and redeploy on each push to `main`.

---

## SEO Checklist & Notes

This project includes initial SEO improvements (page meta tags, Open Graph, Twitter card and JSON-LD). To make your site visible and rank:

1. Replace placeholders: Update `https://dandco.in` and image paths in `src/pages/*` and `public/sitemap.xml` with your actual domain and production images.
2. Deploy to a live domain and verify the site is accessible (no `noindex` headers).
3. Submit sitemap to Google Search Console: `https://your-domain.com/sitemap.xml`.
4. Create and verify a Google Business Profile (for local search).
5. Keep NAP (Name, Address, Phone) consistent across site and GMB.
6. Publish at least one detailed project case study page with images and structured data (JSON-LD) for rich results.
7. Monitor Search Console for coverage, mobile usability, and performance issues.

See `README_SEO.md` for more detailed step-by-step guidance (already added to the repo).

---

## Optional improvements (I can implement them for you)

- Replace client name placeholders with real client logos (add images to `src/assets/images/clients/` and I will update `ClientLogos.jsx`).
- Add automatic sitemap generation via GitHub Action at build time.
- Add per-project JSON-LD schema for richer search results (Project schema).
- Improve accessibility and run Lighthouse audits; fix issues reported.

---

## Contributing

If you'd like to make changes locally then push to GitHub:

1. Create a feature branch:

```powershell
git checkout -b feat/some-change
```

2. Make changes, commit, and push:

```powershell
git add .
git commit -m "feat: describe change"
git push origin feat/some-change
```

3. Open a Pull Request on GitHub to merge into `main`.

---

## Project structure (high level)

```
src/
  components/
    common/       # Header, Footer, Layout, floating call
    Home/         # Hero, ServicesHighlight, Stats, Testimonials, CTA
    About/        # Mission, Timeline, Team
    Portfolio/    # ProjectGallery, VideoGallery
  pages/
    Home.jsx
    About.jsx
    Portfolio.jsx
    Contact.jsx
public/
  robots.txt
  sitemap.xml
```

---

## Contact

If you want me to continue helping (add logos, auto-sitemaps, run Lighthouse and apply fixes, set up GitHub Actions), tell me which task and I will update the repo accordingly.

---

*Made with care — Doddamani & Brothers website.*
