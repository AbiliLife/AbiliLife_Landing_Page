# Phase 3: Landing Page Structure & Execution Plan

**Document Purpose:** Define WHAT we will build (structure, not implementation)  
**Date:** January 24, 2026  
**Status:** Planning Phase (No Code Yet)  
**Depends On:** [PHASE_2_POSITIONING_DECISIONS.md](./PHASE_2_POSITIONING_DECISIONS.md)

---

## Confirmed Decisions (From Phase 2)

| Decision | Value |
|----------|-------|
| **Positioning** | Option C: "Honest Beta" |
| **Primary CTA** | "Try the Mobility Pilot" |
| **Geography** | Nairobi, Kenya |
| **Product Status** | Early-stage pilot |
| **Partnership Model** | Works with accessible transport providers (Ace Mobility) |

---

## Step 1: Section Order & Purpose

### Proposed Section Flow (Top to Bottom)

```
1. Accessibility Toolbar (fixed)
2. Header (sticky)
3. Hero
4. How It Works (Mobility)
5. Problem Context
6. Vision Teaser
7. Team
8. Footer
```

**Key Change from Current:** Ecosystem section is converted to a minimal "Vision Teaser" and moved AFTER the core Mobility content. Mobility-first, vision-second.

---

### Section Specifications

#### 1. Accessibility Toolbar

| Attribute | Value |
|-----------|-------|
| **Position** | Fixed, top-right |
| **Purpose** | Signal accessibility commitment immediately; provide functional controls |
| **Key Message** | "This product is built for you — we care about accessibility from the first pixel." |
| **Psychological Goal** | Trust + belonging |

---

#### 2. Header

| Attribute | Value |
|-----------|-------|
| **Position** | Sticky, top |
| **Purpose** | Brand identity + navigation + primary CTA access |
| **Key Message** | "AbiliLife — accessible mobility" (not "super app ecosystem") |
| **Psychological Goal** | Orientation + easy CTA access |

**Navigation Items (Revised):**
1. How It Works → `#how-it-works`
2. The Problem → `#problem`
3. Our Vision → `#vision`
4. Team → `#team`
5. Contact → `#contact`

**Header CTA:** "Try the Pilot" (compact version of primary CTA)

---

#### 3. Hero

| Attribute | Value |
|-----------|-------|
| **Position** | First content section |
| **Purpose** | Immediate clarity on what AbiliLife is and who it's for |
| **Key Message** | "We help wheelchair users in Nairobi request accessible rides. We're in pilot — join us." |
| **Psychological Goal** | Clarity + invitation (not pressure) |

**Required Elements:**
- Headline: Clear, specific, mobility-focused
- Subheadline: Pilot status acknowledged, community angle
- Primary CTA: "Try the Mobility Pilot"
- Secondary CTA: "See How It Works" (scrolls to section)
- Trust indicators: "Pilot Phase" + "Nairobi, Kenya" + "Community-Built"
- Hero image: Wheelchair user with accessible vehicle (keep current if appropriate)

**Removed Elements:**
- "Super app ecosystem" language
- "5 Essential Service Branches"
- Any reference to GPS tracking, instant booking

---

#### 4. How It Works (Mobility)

| Attribute | Value |
|-----------|-------|
| **Position** | Immediately after Hero |
| **Purpose** | Explain the actual user flow — what happens when you use AbiliLife |
| **Key Message** | "Set your needs, request a ride, connect with an accessible vehicle through our partner network." |
| **Psychological Goal** | Understanding + confidence in process |

**3-Step Structure (Revised):**

| Step | Title | Key Point | Removed Claims |
|------|-------|-----------|----------------|
| 1 | Set Your Preferences | Configure accessibility needs in your profile | (Keep as-is) |
| 2 | Request a Ride | Submit your request; we connect you with our partner network | "One-tap booking," "instant," "voice commands" |
| 3 | Travel with Support | Board an accessible vehicle; share updates with caregivers | "GPS tracking," "arrival notifications," "SOS button" |

**CTA at Section End:** "Try the Mobility Pilot"

**Removed Elements:**
- "App Coming soon to Google Play and Apple App Store" (unless verified)
- Demo modal trigger (pending GIF verification decision)

---

#### 5. Problem Context

| Attribute | Value |
|-----------|-------|
| **Position** | After How It Works |
| **Purpose** | Validate the problem; show AbiliLife understands the user's reality |
| **Key Message** | "Transport is a daily barrier for wheelchair users in Kenya. We're working to change that." |
| **Psychological Goal** | Empathy + validation ("they get it") |

**Structure (Simplified from current Problem-Solution):**
- Left side: Problem framing (transport barriers in Kenya)
- Right side: Our approach (not "Our Solution" — softer language for pilot)

**Statistics Handling:**
- IF sources can be cited → Keep with citation
- IF sources cannot be cited → Replace with qualitative framing ("Many wheelchair users face...")

**Removed Elements:**
- "One-tap booking" solution card
- "Trained drivers" claim (unless verified for partner)
- Any ecosystem-wide solution language

---

#### 6. Vision Teaser

| Attribute | Value |
|-----------|-------|
| **Position** | After Problem Context, before Team |
| **Purpose** | Acknowledge long-term ambition without overpromising |
| **Key Message** | "Mobility is our starting point. We're exploring what else is possible — healthcare access, employment, education — but we're focused on getting transport right first." |
| **Psychological Goal** | Aspiration without expectation-setting |

**Structure:**
- Brief paragraph (2-3 sentences)
- Optional: Simple text list of future exploration areas (NOT visual module cards)
- Explicit "future" / "exploring" / "long-term" language

**This replaces:** The current Ecosystem section (full tree visualization with 5 module cards)

**Removed Elements:**
- Tree/branch visualization
- Individual module cards with descriptions
- Status badges ("Ongoing Beta" / "Upcoming Beta")
- "How It Works" CTA that opens demo modal

---

#### 7. Team

| Attribute | Value |
|-----------|-------|
| **Position** | After Vision Teaser |
| **Purpose** | Build credibility through human connection |
| **Key Message** | "Real people building this. You can reach us." |
| **Psychological Goal** | Trust + accountability |

**Structure:** Keep current structure (4 co-founders with photos, roles, social links)

**Changes:**
- Review bios for any claims that conflict with pilot reality
- Ensure no bio says "we've built a super app" or similar

---

#### 8. Footer

| Attribute | Value |
|-----------|-------|
| **Position** | Bottom |
| **Purpose** | Contact access, quick links, legal/copyright |
| **Key Message** | "Here's how to reach us." |
| **Psychological Goal** | Closure + accessibility |

**Required Fixes:**
- "Bsck to Top" → "Back to Top"
- "© 2025" → "© 2026"
- Quick Links "How It Works" → `#how-it-works`

**Navigation Alignment:**
- Update Quick Links to match new section names/anchors

---

## Step 2: CTA Flow & User Journey

### Primary Journey: Landing → CTA → Next Step

```
┌─────────────────────────────────────────────────────────────┐
│  LANDING PAGE                                               │
│                                                             │
│  User lands → Reads Hero → Understands "mobility pilot"     │
│                    ↓                                        │
│  Scrolls → Sees How It Works → Understands process          │
│                    ↓                                        │
│  Scrolls → Sees Problem Context → Feels understood          │
│                    ↓                                        │
│  Scrolls → Sees Vision → Knows there's more coming          │
│                    ↓                                        │
│  Scrolls → Sees Team → Trusts the people                    │
│                    ↓                                        │
│  Returns to CTA (sticky header or section CTAs)             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                         ↓
                  CLICKS "Try the Mobility Pilot"
                         ↓
┌─────────────────────────────────────────────────────────────┐
│  CTA DESTINATION (Decision Required)                        │
│                                                             │
│  Option A: WhatsApp Chat                                    │
│  - Opens WhatsApp with pre-filled message                   │
│  - "Hi, I'd like to try the AbiliLife Mobility pilot"       │
│  - Immediate human connection                               │
│  - Low friction, familiar interface                         │
│                                                             │
│  Option B: Simple Contact Form                              │
│  - Collects: Name, Phone, Accessibility needs               │
│  - Team follows up within X hours                           │
│  - More data capture, but adds friction                     │
│                                                             │
│  Option C: Direct to App (if pilot track available)         │
│  - Links to Google Play internal/pilot track                │
│  - Highest friction, but shows real product                 │
│  - Only if app is actually available                        │
│                                                             │
│  RECOMMENDED: Option A (WhatsApp)                           │
│  - Matches "Honest Beta" positioning                        │
│  - Matches current technical reality (WhatsApp bridge)      │
│  - Lowest friction for target users                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│  POST-CTA EXPERIENCE                                        │
│                                                             │
│  User sends WhatsApp message                                │
│          ↓                                                  │
│  Team responds (ideally within hours)                       │
│          ↓                                                  │
│  User is onboarded to pilot                                 │
│  - Gets app access (if available)                           │
│  - OR continues via WhatsApp for ride requests              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Expectation Management at Each Step

| Step | User Expectation | What We Communicate |
|------|------------------|---------------------|
| Hero | "What is this?" | "Mobility pilot for wheelchair users in Nairobi" |
| How It Works | "How does it work?" | "Set preferences → Request → Connect with partner vehicle" |
| CTA Click | "What happens now?" | "You'll chat with our team on WhatsApp" |
| WhatsApp | "When do I get a ride?" | "We'll help you get set up for the pilot" |

### Friction Points (Intentional vs. Unintentional)

| Friction Point | Type | Rationale |
|----------------|------|-----------|
| No "Download Now" button | Intentional | App may not be publicly available |
| WhatsApp as CTA destination | Intentional | Matches actual workflow; human touch |
| No instant booking claim | Intentional | Sets accurate expectation |
| Scroll required to reach CTA | Unintentional | Mitigated by sticky header CTA |

---

## Step 3: Component Mapping

### Mapping Table

| Section | Current Component | Action | Notes |
|---------|-------------------|--------|-------|
| Accessibility Toolbar | `AccessibilityToolbar.tsx` | **REUSE** | No changes needed |
| Header | `Header.tsx` | **MODIFY** | Update nav items, CTA text, remove "See Demo" if modal removed |
| Hero | `Hero.tsx` | **MODIFY** | New headline/subheadline, uncomment CTA, update trust indicators |
| How It Works | `HowItWorks.tsx` | **MODIFY** | Rewrite step descriptions, remove feature claims, update CTA |
| Problem Context | `ProblemSolution.tsx` | **MODIFY** | Soften "Solution" to "Approach," audit statistics, remove feature claims |
| Vision Teaser | `Ecosystem.tsx` | **REPLACE** | Remove entirely; create new minimal `VisionTeaser.tsx` |
| Team | `Team.tsx` | **REUSE** | Review bios for conflicts, otherwise keep |
| Footer | `Footer.tsx` | **MODIFY** | Fix typo, copyright, broken link, update Quick Links |
| Demo Modal | `DemoModal.tsx` | **REMOVE or MODIFY** | Pending GIF verification; if GIFs outdated, remove entirely |

### Component Action Summary

| Action | Count | Components |
|--------|-------|------------|
| **REUSE** (no changes) | 2 | AccessibilityToolbar, Team |
| **MODIFY** (content changes) | 5 | Header, Hero, HowItWorks, ProblemSolution, Footer |
| **REPLACE** (new component) | 1 | Ecosystem → VisionTeaser |
| **REMOVE** (pending decision) | 1 | DemoModal (conditional) |

### New Component: VisionTeaser

**Purpose:** Replace the full Ecosystem section with a minimal future-focused note

**Complexity:** Low (stateless, no interactivity, just text + optional list)

**Structure:**
```
<section id="vision">
  <h2>Where We're Headed</h2>
  <p>Brief paragraph about long-term vision...</p>
  <ul>(Optional) Future exploration areas as text list</ul>
</section>
```

**Does NOT include:**
- Tree visualization
- Module cards
- Status badges
- CTAs
- Animations (optional: keep simple fade-in)

---

## Step 4: Risk Flags

### High-Risk Sections

| Section | Risk Level | Risk Description | Mitigation |
|---------|------------|------------------|------------|
| **Hero** | 🔴 HIGH | Sets first impression; if messaging is off, everything downstream suffers | Review copy carefully; test with 1-2 users before launch |
| **How It Works** | 🔴 HIGH | Most specific feature claims; easiest place to overpromise | Audit every detail against actual pilot capabilities |
| **Demo Modal** | 🔴 HIGH | GIFs may show non-existent features | Verify GIFs before deciding to keep; safer to remove |

### Founder-Dependent Decisions

| Decision | Blocking Section | Current Assumption | Needs Confirmation |
|----------|------------------|-------------------|-------------------|
| CTA destination | Hero, Header, HowItWorks | WhatsApp link | Where exactly should CTA point? |
| GIF validity | DemoModal | Unknown | Are GIFs current? |
| Statistics sources | ProblemContext | Unknown | Can we cite 80%, 30%, etc.? |
| 24/7 support claim | HowItWorks, Footer | Assume false | Is support line staffed? |
| Ace Mobility naming | HowItWorks, ProblemContext | Don't name explicitly | Should partner be named? |
| "App coming soon" | HowItWorks | Remove | Is there a real timeline? |

### Expectation Mismatch Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| User expects instant ride dispatch | Medium | High | Clear "partner network" language; WhatsApp flow makes it obvious |
| User expects GPS tracking | Medium | High | Remove all tracking language |
| User expects 5 services | Low (if Ecosystem removed) | Medium | Vision Teaser clearly labels as "future" |
| User expects app download | Medium | Medium | No "Download" CTA; WhatsApp is the path |

---

## Implementation Sequence (Recommended)

When Phase 4 begins, implement in this order to minimize risk:

### Wave 1: Low-Risk Fixes (Can ship immediately)

1. Footer fixes (typo, copyright, link)
2. Header nav item text updates (if not dependent on section renames)

### Wave 2: Content Rewrites (Requires copy review)

3. Hero rewrite (headline, subheadline, trust indicators, CTA)
4. How It Works rewrite (step descriptions, removed claims)
5. Problem-Solution → Problem Context rewrite

### Wave 3: Structural Changes

6. Remove/Replace Ecosystem → Create VisionTeaser
7. Update Header nav to match new section anchors
8. Demo Modal decision (remove or reframe)

### Wave 4: Final QA

9. Full page review for consistency
10. Accessibility audit (focus order, ARIA, contrast)
11. Mobile responsiveness check
12. CTA flow test (click through to WhatsApp)

---

## Pre-Implementation Checklist

Before any code is written, confirm:

| # | Item | Status | Owner |
|---|------|--------|-------|
| 1 | CTA destination URL (WhatsApp link format) | ⬜ Pending | Founder |
| 2 | Demo GIF verification | ⬜ Pending | Product |
| 3 | Statistics sources | ⬜ Pending | Founder |
| 4 | 24/7 support status | ⬜ Pending | Ops |
| 5 | Ace Mobility naming decision | ⬜ Pending | Founder |
| 6 | App store timeline (if any) | ⬜ Pending | Product |
| 7 | Copy review/approval process | ⬜ Pending | Founder |

---

## Document Summary

| Aspect | Decision |
|--------|----------|
| **Section Order** | Header → Hero → How It Works → Problem Context → Vision Teaser → Team → Footer |
| **Primary CTA** | "Try the Mobility Pilot" → WhatsApp (recommended) |
| **Ecosystem Fate** | Replace with minimal "Vision Teaser" |
| **Demo Modal Fate** | Remove (unless GIFs verified current) |
| **Components to Modify** | 5 (Header, Hero, HowItWorks, ProblemSolution, Footer) |
| **Components to Replace** | 1 (Ecosystem → VisionTeaser) |
| **Components to Remove** | 1 (DemoModal, conditional) |
| **Highest Risk** | Hero messaging, How It Works claims |

---

*End of Phase 3 Document*

**Next Phase:** Phase 4 — Copy Development & Implementation (pending founder decisions on blocking items)
