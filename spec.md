# NexaDesign Portfolio

## Current State
New project with a bare React + Tailwind + TypeScript scaffold. No App.tsx or page components exist yet. The index.css has default design tokens, and index.html is minimal.

## Requested Changes (Diff)

### Add
- Full single-page portfolio application for graphic designer "NexaDesign"
- Google Fonts (Inter + Space Grotesk) via index.html
- Navigation: sticky header with blur, logo, nav links, mobile hamburger menu
- Hero section: full viewport height, bold heading, subheading, two CTA buttons, decorative purple gradients
- Services section: 4 service cards in responsive grid with icons (Lucide React), dark card bg, hover glow
- Portfolio section: 3-col desktop / 2-col tablet / 1-col mobile grid, 9 picsum.photos items with hover overlay captions
- About section: split layout with stats (200+ Projects, 50+ Clients, 5 Years Experience) and decorative purple element
- Contact section: form (Name, Email, Project Details), contact info, WhatsApp button (https://wa.me/919707796407), social icons
- Footer: logo, tagline, contact info, copyright
- Scroll animations using Intersection Observer
- App.tsx as root component composing all sections

### Modify
- index.html: add Google Fonts import + meta title "NexaDesign - Graphic Designer"
- index.css: add custom CSS variables for purple palette, smooth scroll, font families, custom scrollbar

### Remove
- Nothing to remove (new project)

## Implementation Plan
1. Update index.html to import Google Fonts (Inter + Space Grotesk) and set page title
2. Update index.css to add smooth scroll, custom colors, font-family utilities
3. Create App.tsx as the root component
4. Create Navbar component with sticky blur header and hamburger menu
5. Create Hero component with gradient decorations and CTA buttons
6. Create Services component with 4 card grid
7. Create Portfolio component with grid gallery and hover overlays
8. Create About component with stats
9. Create Contact component with form and WhatsApp button
10. Create Footer component
11. Create useScrollAnimation hook for Intersection Observer fade-in

## UX Notes
- Color palette: background #0a0a0a / #111111, accent purples #7c3aed / #9333ea / #a855f7
- All sections use dark card backgrounds (#1a1a2e / #16213e) for depth
- WhatsApp CTA is prominent in green
- Mobile-first, fully responsive
- Smooth scroll behavior on nav link clicks
- Hover animations subtle (scale, glow, opacity transitions)
