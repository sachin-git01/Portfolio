# Sachin Kumar 3D Developer Portfolio

A futuristic, recruiter-focused 3D developer portfolio built with React, Vite, React Three Fiber, Drei, GSAP, Framer Motion, Tailwind CSS, and React Icons.

The portfolio presents Sachin Kumar as a Full Stack Developer, React.js and Node.js learner, and AI enthusiast with animated 3D visuals, neon glassmorphism UI, project timelines, mini-project cards, a resume bot, and a contact form.

## Live Preview

Deploy this project on Vercel and add the live link here:

```text
https://your-vercel-url.vercel.app
```

## Features

- 3D cyber-galaxy hero section with animated avatar portal
- Custom anime-style developer avatars
- Responsive navbar with active section highlight
- Dark and light mode toggle
- Smooth section transitions and scroll-based color mood
- Floating skills cards and animated project cards
- Main projects timeline with flip-card tech stack details
- Mini projects section with animated card backs
- Experience, certificates, hackathons, education, and achievements timeline
- Smart resume bot with animated interaction and PDF preview
- Contact form with Formspree support and mailto fallback
- SEO-friendly meta tags in `index.html`
- Vercel-ready build setup

## Tech Stack

- React 18
- Vite
- Three.js
- React Three Fiber
- Drei
- GSAP
- Framer Motion
- Tailwind CSS
- React Icons
- Formspree

## Project Sections

- Hero
- About
- Skills
- Projects
- Mini Projects
- Experience
- Contact

## Main Projects

- LeetCode Progress Tracker
- Parking Space Counter using OpenCV
- Multi-Step Loan Application Platform
- GalleryFlow Photo Uploading Website

## Mini Projects

- Todo List
- Weather App
- Calculator
- Digital Clock
- Stopwatch
- Number Guessing Game

## Folder Structure

```text
portfolio/
  public/
    assets/
      Sachin-Kumar-Resume.pdf
      sachin-hero-avatar-v2.png
      sachin-about-avatar-v2.png
  src/
    components/
      About.jsx
      Contact.jsx
      Hero.jsx
      HeroScene.jsx
      LoadingScreen.jsx
      Navbar.jsx
      Projects.jsx
      SectionHeader.jsx
      Skills.jsx
      SmartBot.jsx
      Timeline.jsx
    data/
      portfolio.js
    App.jsx
    index.css
    main.jsx
  .env.example
  index.html
  package.json
  tailwind.config.js
  vite.config.js
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Contact Form Setup

The contact form supports Formspree. Create a `.env` file in the project root and add:

```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

If the variable is missing, the form falls back to email using:

```text
sachinofficial7310@gmail.com
```

## Update Portfolio Content

Most portfolio text, links, projects, skills, and timeline content are stored in:

```text
src/data/portfolio.js
```

Common edits:

- Change social links in `socials`
- Update project cards in `projects`
- Update mini projects in `miniProjects`
- Update experience and certificates in `timeline`
- Update skill icons and colors in `skills`

## Update Assets

Resume:

```text
public/assets/Sachin-Kumar-Resume.pdf
```

Hero avatar:

```text
public/assets/sachin-hero-avatar-v2.png
```

About avatar:

```text
public/assets/sachin-about-avatar-v2.png
```

After replacing assets, keep the same filenames or update the paths in the related components.

## Deploy On Vercel

Use these settings:

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `VITE_FORMSPREE_ENDPOINT`

## Future Updates

Future improvement ideas are tracked in [FUTURE_UPDATES.md](./FUTURE_UPDATES.md).
