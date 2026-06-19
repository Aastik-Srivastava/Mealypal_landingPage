# Mealypal — Landing Page PRD

## Problem Statement (original)
Build a modern, beautiful, conversion-focused landing page for "Mealypal" — a nutrition management platform for institutions (hostels, colleges, universities, PGs, sports academies, corporate cafeterias). Pre-launch marketing site. React, mobile-first, gradient green theme, Manrope font, portable components, no heavy animation libs.

## Architecture
- React 19 + react-scripts (CRA via craco)
- Tailwind utility classes + custom CSS keyframes (no animation libraries)
- Manrope (400, 600, 800) via Google Fonts
- lucide-react for icons
- No backend integration — email capture posts directly to Formspree (placeholder endpoint, swap-in instructions inlined as comment)

## User Personas
- Founder/Operator: shares link with investors, pilot colleges, students before launch
- Visitors (mobile 90%): students, mess managers, college admins evaluating the product
- Investors: judging clarity, design polish, vision

## Core Requirements (static)
- Mobile-first responsive, no horizontal overflow
- Pre-launch lead capture via EmailCaptureModal → Formspree
- Sections: Navbar, Hero, Problem, How It Works (4 steps), Who It's For (3 cards), Features (6), Vision, Final CTA, Footer
- All CTAs (Sign Up / Login) open the same email modal
- Modal closes via X button, backdrop click, Escape key
- Mobile sheet style on small screens, centered on desktop
- Graceful error + success states

## What's Been Implemented (2025-12)
- Full landing page in /app/frontend/src/components/landing/
- 11 components: Navbar, Hero, Problem, HowItWorks, WhoItsFor, Features, Vision, FinalCTA, Footer, EmailCaptureModal (+ App wiring)
- Manrope font loaded with 3 weights
- Custom CSS keyframes: float, blobPulse, fadeUp (scroll reveal via IntersectionObserver)
- Stylized meal card hero visual with 4 floating macro pills (Calories/Protein/Carbs/Fat)
- Gradient brand utilities (gradient-text, btn-primary, btn-outline)
- 100% testing-agent pass on iteration 1 (all 18 acceptance criteria)
- Formspree endpoint placeholder with clear comment for swap-in

## Backlog (P0/P1/P2)
- **P1** Swap `https://formspree.io/f/YOUR_FORM_ID` for the real Formspree endpoint (single line edit in EmailCaptureModal.jsx)
- **P2** Add basic SEO meta tags (og:image, description) once branding is final
- **P2** Add a simple favicon + apple-touch-icon
- **P2** Add lightweight analytics tag (PostHog/Plausible) once endpoint ready
- **P2** A/B test alternative headline variants once traffic flows
- **P3** Add a small "FAQ" / pricing teaser block once positioning is locked
- **P3** Localize to Hindi for Indian college audiences

## Next Tasks
- User to create Formspree account + swap endpoint
- Optional: add deployment (Vercel/Emergent) once content is final
