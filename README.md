# Ultra-Luxury Developer Portfolio - Ajad Kumar

An Awwwards-level, hyper-interactive, luxury portfolio website built for **Ajad Kumar** (Full Stack .NET Developer & React Architect).

![Ajad Kumar Portfolio Preview](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80)

## 🚀 Key Features & Highlights

- **Dark Luxury Aesthetic**: Designed with Deep Void background (`#050816`), Electric Blue (`#3B82F6`), Cyan Glow (`#06B6D4`), and Royal Violet (`#8B5CF6`).
- **WebGL / Canvas Background**: Dual-layered animated Aurora waves and interactive mouse-responsive star particles.
- **Custom Magnetic Cursor**: Fluid dual-ring cursor tracking interactive elements with smooth spring physics.
- **12 Dedicated Sections**:
  1. **Hero**: Big bold typography, dynamic role typing animation, resume download CTA, social links, live statistics counter.
  2. **About**: Engineering story, career summary pillars, soft skills badges, career objective.
  3. **Skills Dashboard**: Categorized (.NET Backend, React Frontend, SQL & Database, Cloud & DevOps, Tools) with animated progress bars & glow effects.
  4. **Experience Timeline**: 4+ years of Full Stack .NET career trajectory with expandable tech tags & key metrics.
  5. **Education**: B.Tech CSE timeline card with achievements & honors.
  6. **Projects Showcase**: Multi-category filter tabs (.NET, React, Web API, Admin, AI/Face Rec, Desktop) + live search bar + deep-dive Project Detail Modal (Architecture, Challenges, Solutions, GitHub & Live Links).
  7. **Certifications & Credentials**: Verified badges from Microsoft, Meta, and SQL Server Central.
  8. **Services Offered**: 6 luxury cards outlining REST APIs, React UI, SQL Query Tuning, Bug Fixing, Azure Cloud, Architecture.
  9. **Achievements & Milestones**: Hackathon victories, performance benchmarks (45% query latency reduction), employee awards.
  10. **Testimonials**: Auto-sliding glass card carousel with rating stars and CTO/Founder endorsements.
  11. **Contact Suite**: Direct contact cards, interactive Google Maps location card, and EmailJS notification form with validation toasts.
  12. **Footer**: Navigation quick links, social media links, copyright, and smooth Back-To-Top button.

---

## 🛠️ Tech Stack & Architecture

- **Core Framework**: React 19 + Vite
- **Styling**: Tailwind CSS + Custom Glassmorphism System
- **Animations**: Framer Motion + HTML5 Canvas API
- **Icons**: Lucide React + SVG Icons
- **Email Pipeline**: EmailJS (`@emailjs/browser`)

---

## ⚙️ Quick Start & Setup Instructions

### 1. Clone & Install Dependencies
```bash
cd ajad-kumar-portfolio
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to preview.

### 3. Production Build
```bash
npm run build
```
Generates optimized static assets inside the `dist/` directory.

---

## 🌐 Deployment Guide

### Deploying to Vercel (Recommended)
1. Install Vercel CLI or push to GitHub:
```bash
npx vercel
```
2. Build Command: `npm run build`
3. Output Directory: `dist`

### Deploying to Netlify
1. Connect GitHub repository on Netlify dashboard.
2. Set Build Command to `npm run build` and Publish Directory to `dist`.

### Deploying to GitHub Pages
1. In `vite.config.js`, set `base: '/repo-name/'`.
2. Run `npm run build` and deploy the contents of `dist/` using `gh-pages`.

---

## 📄 License & Credits
Designed & Developed for **Ajad Kumar** - Full Stack .NET Developer.
