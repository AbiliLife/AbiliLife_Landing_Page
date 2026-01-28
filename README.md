# AbiliLife Landing Page

The official landing page for **AbiliLife** — a digital ecosystem building accessible services for persons with disabilities in Kenya, starting with a mobility pilot for wheelchair users in Nairobi.

🌐 **Live Site:** [abililife.co.ke](https://abililife.co.ke)

---

## About AbiliLife

AbiliLife is an early-stage project creating accessible digital services for persons with disabilities. Our first product, **AbiliLife Mobility**, helps wheelchair users in Nairobi request accessible rides, track trips in real-time, and share updates with caregivers.

### The Ecosystem Vision

| Module | Status | Description |
|--------|--------|-------------|
| **Mobility** | 🟢 Pilot | Accessible transport booking |
| **Access** | 🔵 Coming Soon | Assistive devices marketplace |
| **Care** | 🔵 Coming Soon | Health & wellness tools |
| **Work** | ⚪ Future | Inclusive job opportunities |
| **Learn** | ⚪ Future | Accessible education resources |

---

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **UI Components:** shadcn/ui (Radix primitives)
- **Icons:** Lucide React

---

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/AbiliLife/AbiliLife_Landing_Page.git
cd AbiliLife_Landing_Page

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at `localhost:5173` |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
src/
├── assets/          # Images, icons, GIFs
├── components/      # React components
│   ├── ui/          # shadcn/ui primitives
│   ├── Hero.tsx
│   ├── ProblemSolution.tsx
│   ├── HowItWorks.tsx
│   ├── VisionTeaser.tsx
│   ├── EcosystemRoadmap.tsx
│   ├── Team.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ...
├── lib/             # Utilities
├── pages/           # Page components
│   └── index.tsx    # Main landing page
├── App.tsx
├── main.tsx
└── index.css        # Global styles + Tailwind
```

---

## Page Sections

1. **Hero** — Value proposition + CTAs (WhatsApp, APK download)
2. **The Challenge / Our Approach** — Problem framing + solution overview
3. **How It Works** — 3-step Mobility pilot flow
4. **Vision Teaser** — "Where We're Headed" text block
5. **Ecosystem Roadmap** — NOW → NEXT → FUTURE timeline
6. **Team** — Founding team with photos + LinkedIn

---

## Accessibility Features

- **Font size controls** — Adjustable via accessibility toolbar
- **High contrast mode** — Toggle for improved visibility
- **Read aloud** — Screen reader support via Web Speech API
- **Keyboard navigation** — Full keyboard accessibility
- **ARIA labels** — Semantic markup throughout

---

## Contributing

This is currently maintained by the AbiliLife founding team. If you'd like to contribute or report issues, please reach out via:

- **WhatsApp:** [+254 742 560 540](https://wa.me/254742560540)
- **Email:** team@abililife.com

---

## Team

| Name | Role | LinkedIn |
|------|------|----------|
| Kevin Isom | Co-Founder & Team Lead | [LinkedIn](https://www.linkedin.com/in/kevin-isom-a58bb3201/) |
| Eli Keli | Co-Founder & Product Lead | [LinkedIn](https://www.linkedin.com/in/eli-keli/) |
| Philip Machar | Co-Founder & Technical Support | [LinkedIn](https://www.linkedin.com/in/philip-machar/) |
| Liban Hassan | Co-Founder & Relations Manager | [LinkedIn](https://www.linkedin.com/in/liban-hassan-noor/) |

---

## License

This project is proprietary. All rights reserved by AbiliLife © 2026.

---

<p align="center">
  <strong>Building inclusive technology, one step at a time.</strong><br>
  🚀 Pilot Phase — Nairobi, Kenya
</p>
