# AbiliLife Landing Page

Accessible transport for wheelchair users in Nairobi, Kenya.

## About

This is the landing page for AbiliLife Mobility — a pilot program helping wheelchair users find accessible rides in Nairobi.

**Branch:** `phoenix-landing-2026`  
**Status:** Foundation build (January 2026)

## Tech Stack

- **Framework:** Astro 5
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Deployment:** Static HTML (zero JavaScript by default)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Hero.astro         # Main hero section
│   ├── Problem.astro      # Problem statement
│   ├── Pilot.astro        # How it works + How to Join
│   ├── Vision.astro       # Future roadmap teaser
│   ├── Team.astro         # Team members
│   ├── FinalCTA.astro     # Bottom call-to-action
│   └── Footer.astro       # Site footer
├── layouts/
│   └── Layout.astro       # Base HTML layout
├── pages/
│   └── index.astro        # Homepage
├── styles/
│   └── global.css         # Global styles + Tailwind
└── assets/                # Source images
public/
└── images/                # Optimized images for web
    └── team/              # Team photos
docs/
├── REDESIGN_PLAN.md       # Section structure
├── CONTENT_STRATEGY.md    # Messaging & tone
└── TECH_STACK_DECISION.md # Stack rationale
```

## URLs

| Purpose | URL |
|---------|-----|
| APK Download | https://expo.dev/accounts/abililife-dev/projects/abililife/builds/d0dddb8a-94f7-42e1-93e3-4ccecb1b96ff |
| User Testing Form | https://forms.gle/4sk1xC5b3FspQGQr5 |
| Partner Form | https://forms.gle/HLMAG176dtbiz9ws9 |
| WhatsApp Support | https://wa.me/254742560540 |

## Accessibility

- Semantic HTML with proper heading hierarchy
- ARIA labels where needed
- Keyboard navigable
- Color contrast ≥ 4.5:1
- Touch targets ≥ 44px
- No auto-playing media

## Performance

- Zero JavaScript by default (Astro islands architecture)
- Static HTML output for fastest possible load times
- Optimized for low-bandwidth (3G) connections
- Target: Lighthouse 90+ on mobile

## License

© 2026 AbiliLife. All rights reserved.
