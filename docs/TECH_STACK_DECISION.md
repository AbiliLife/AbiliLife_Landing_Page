# AbiliLife Landing Page — Tech Stack Decision

**Document Type:** Stack Evaluation & Recommendation  
**Branch:** `phoenix-landing-2026`  
**Date:** January 25, 2026  
**Last Updated:** January 25, 2026 (v1.1 — Added changelog, no stack changes)  
**Status:** Awaiting Approval

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| v1.1 | Jan 25, 2026 | Added changelog. No stack changes. CTA strategy updated in sibling docs does not affect tech choice. |
| v1.0 | Jan 25, 2026 | Initial tech stack evaluation and Astro recommendation |

---

## Evaluation Criteria

Each stack will be evaluated on:

| Criterion | Weight | Description |
|-----------|--------|-------------|
| **Simplicity** | High | Easy to understand, modify, and maintain |
| **SEO** | High | Server-rendered or static for search visibility |
| **Performance** | High | Fast load times, especially on slow networks |
| **Iteration Speed** | Medium | Quick to make changes and deploy |
| **Long-term Maintainability** | Medium | Sustainable for a small team |
| **Low-Bandwidth Optimization** | High | Critical for Kenya (3G, unstable connections) |

---

## Option A: Keep Current Stack (Vite + React 19)

**Stack:**
- React 19
- Vite 7
- TypeScript
- Tailwind CSS 4
- Framer Motion
- shadcn/ui

**Pros:**
- Already set up, team familiar with it
- Rich component library (shadcn/ui)
- Fast development iteration
- Good TypeScript support

**Cons:**
- Client-side rendered (CSR) → Poor SEO out of the box
- Large JavaScript bundle for a simple landing page
- Framer Motion adds unnecessary weight
- shadcn/ui is overkill for 7 sections
- React 19 is relatively new, less stable ecosystem

**SEO Score:** ⭐⭐ (2/5) — Requires additional SSR/SSG setup  
**Performance Score:** ⭐⭐⭐ (3/5) — Heavy for a landing page  
**Simplicity Score:** ⭐⭐ (2/5) — Over-engineered for the scope  
**Low-Bandwidth Score:** ⭐⭐ (2/5) — JS-heavy, slow on 3G

**Verdict:** Not recommended for a clean-slate redesign.

---

## Option B: Next.js (App Router)

**Stack:**
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 4
- No component library (hand-coded)

**Pros:**
- Server-Side Rendering (SSR) and Static Generation (SSG) built-in
- Excellent SEO by default
- Image optimization (next/image)
- File-based routing (simple for landing pages)
- Large ecosystem, well-documented
- Vercel deployment is seamless

**Cons:**
- Slightly heavier than pure static (server components add complexity)
- App Router has a learning curve
- May be overkill for a single-page site
- Requires Node.js runtime (unless fully static)

**SEO Score:** ⭐⭐⭐⭐⭐ (5/5) — Best-in-class  
**Performance Score:** ⭐⭐⭐⭐ (4/5) — Excellent with static export  
**Simplicity Score:** ⭐⭐⭐ (3/5) — More complex than Astro  
**Low-Bandwidth Score:** ⭐⭐⭐⭐ (4/5) — Good with optimization

**Verdict:** Strong contender. Best if we anticipate future dynamic features.

---

## Option C: Astro

**Stack:**
- Astro 5
- TypeScript
- Tailwind CSS 4
- No framework components (just Astro components)

**Pros:**
- Zero JavaScript by default (ships HTML + CSS only)
- Exceptional performance (smallest bundle possible)
- Built for content-focused sites (landing pages, blogs)
- Excellent SEO (static HTML output)
- Simple mental model (no hydration complexity)
- Can add React/Vue components later if needed
- Perfect for low-bandwidth environments

**Cons:**
- Smaller ecosystem than React/Next.js
- Less familiar to team (learning curve)
- Limited interactivity without adding JS islands
- Fewer component libraries available

**SEO Score:** ⭐⭐⭐⭐⭐ (5/5) — Pure static HTML  
**Performance Score:** ⭐⭐⭐⭐⭐ (5/5) — Lightest possible output  
**Simplicity Score:** ⭐⭐⭐⭐⭐ (5/5) — Built exactly for this use case  
**Low-Bandwidth Score:** ⭐⭐⭐⭐⭐ (5/5) — Minimal JS, fast on 3G

**Verdict:** Best fit for a simple, fast, SEO-optimized landing page.

---

## Comparison Matrix

| Criterion | Vite + React | Next.js | Astro |
|-----------|--------------|---------|-------|
| **Simplicity** | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **SEO** | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Performance** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Iteration Speed** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Maintainability** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Low-Bandwidth** | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Team Familiarity** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Total** | 21/35 | 28/35 | **32/35** |

---

## Final Recommendation: **Astro**

### Why Astro?

1. **Perfect for the Job**  
   A landing page with 7 static sections doesn't need React's complexity. Astro is built specifically for content-focused, static sites.

2. **Performance is Critical**  
   Many AbiliLife users are in Kenya on 3G connections. Astro ships zero JavaScript by default, meaning near-instant load times.

3. **SEO Out of the Box**  
   Pure static HTML is the gold standard for search engines. No hydration, no client-side rendering delays.

4. **Simplicity**  
   - No state management
   - No client-side routing
   - No hydration complexity
   - Just HTML, CSS, and content

5. **Future-Proof**  
   If we need interactivity later (e.g., a booking form), Astro supports "islands" — isolated interactive components using React, Vue, or Svelte.

6. **Easy Deployment**  
   Astro outputs static HTML. Can deploy anywhere: Vercel, Netlify, Cloudflare Pages, GitHub Pages, or even a basic hosting server.

---

## Proposed Tech Stack (Final)

| Layer | Technology | Version |
|-------|------------|---------|
| **Framework** | Astro | 5.x |
| **Language** | TypeScript | 5.x |
| **Styling** | Tailwind CSS | 4.x |
| **Icons** | Lucide (static SVG import) | — |
| **Fonts** | Inter (self-hosted for speed) | — |
| **Deployment** | Vercel or Cloudflare Pages | — |
| **Analytics** | Plausible or none | — |

---

## What We're NOT Using

| Technology | Reason |
|------------|--------|
| React | Overkill for static content |
| Framer Motion | Animations add JS bloat |
| shadcn/ui | Unnecessary for simple sections |
| Component libraries | Hand-coded is simpler and lighter |
| CMS | Content is hardcoded (no dynamic needs) |

---

## Migration Notes

Since this is a **clean slate redesign**, we will:

1. Initialize a fresh Astro project in the same repo (or replace `/src`)
2. Manually recreate each section with new markup
3. Copy approved assets (images, logos) from the existing codebase
4. Delete old React components after migration

**The existing React codebase will remain on `master` branch.  
The Astro redesign will live on `phoenix-landing-2026` branch until approved.**

---

## Learning Resources (for team)

If the team needs to learn Astro quickly:

- [Astro Docs — Getting Started](https://docs.astro.build/en/getting-started/)
- [Astro Crash Course (YouTube)](https://www.youtube.com/results?search_query=astro+crash+course)
- [Tailwind with Astro](https://docs.astro.build/en/guides/integrations-guide/tailwind/)

Estimated ramp-up time: **1-2 hours** for someone familiar with React.

---

## Approval Checkpoint

Before proceeding to implementation:

**Confirm the following decisions:**

- [ ] Astro is the approved framework
- [ ] Tailwind CSS 4 for styling
- [ ] No component libraries (hand-coded)
- [ ] Self-hosted Inter font
- [ ] Deployment target (Vercel recommended)
- [ ] Analytics preference (Plausible / none)

---

*End of Tech Stack Decision*

---

## Summary of All Planning Documents

| Document | Purpose | Status |
|----------|---------|--------|
| [REDESIGN_PLAN.md](./REDESIGN_PLAN.md) | Section structure & narrative flow | ✅ Complete |
| [CONTENT_STRATEGY.md](./CONTENT_STRATEGY.md) | Messaging, tone, copy per section | ✅ Complete |
| **TECH_STACK_DECISION.md** | Stack evaluation & recommendation | ✅ Complete |

---

## 🛑 HARD STOP

As instructed:
- No scaffolding
- No dependencies installed
- No UI implemented

**Awaiting explicit approval and next instructions.**
