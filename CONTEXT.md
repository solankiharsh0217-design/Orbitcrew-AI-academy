# OrbitCrew AI Academy — Project Context

## Project Overview
OrbitCrew AI Academy is a React 19 website for a premium, practical AI education academy based in Gohana, Haryana. The platform follows a **counseling-first conversion architecture** — no pricing displayed, no buy buttons, primary CTA is "Book Free Counseling."

---

## Tech Stack
- **Framework:** React 19 + TypeScript + Vite
- **Routing:** React Router v7
- **Styling:** Pure CSS in `App.css` + Tailwind CSS v4 (via `@tailwindcss/vite` plugin, `@import "tailwindcss"` syntax)
- **CSS Structure:** `App.css` (component classes) + `index.css` (Tailwind + `:root` vars). Both imported in `main.tsx`.
- **3D:** Three.js + `@react-three/fiber` + `@react-three/drei` (3D globe hero)
- **Animation:** Framer Motion (hero animations)
- **Icons:** Lucide React
- **Class utility:** `clsx` + `tailwind-merge` → `cn()` helper in `src/lib/utils.ts`
- **CSS approach:** Hardcoded hex values in `App.css` (e.g., `#6b45f0`) to avoid conflicts with Tailwind's `@theme` block. CSS custom properties in `:root` of `index.css` for Three.js `hsl()` usage.

---

## File Structure
```
src/
├── main.tsx              # Entry point: StrictMode + RouterProvider + App
├── App.tsx               # 6 routes + Navbar/Footer/MobileCTA
├── App.css               # ~340 lines: all component styles (nav, sections, cards, footer, responsive)
├── index.css             # Tailwind v4 import + @theme block + :root CSS vars
├── lib/
│   └── utils.ts          # cn() helper
├── components/
│   ├── Navbar.tsx        # Sticky, active links, mobile hamburger
│   ├── Footer.tsx        # 4-col footer + bottom bar
│   ├── MobileCTA.tsx     # Sticky bottom bar (mobile only)
│   ├── PageHero.tsx      # Inner page hero
│   ├── FAQ.tsx           # Controlled accordion
│   ├── ProgramsStack.tsx # Expandable 4-program cards
│   ├── Showcase.tsx      # Horizontal scroll gallery (8 real images)
│   ├── Timeline.tsx      # Vertical timeline (7 steps)
│   ├── FinalCTA.tsx      # Dark section CTA
│   ├── ImagePlaceholder.tsx  # Real Unsplash images + fallback
│   └── ui/
│       ├── globe-hero.tsx    # Three.js wireframe globe
│       └── hero-demo.tsx     # Full animated hero section
├── data/
│   └── programs.ts       # 4 programs + 11 FAQ items
└── pages/
    ├── Home.tsx          # 11 sections + 3D globe
    ├── Programs.tsx     # Comparison table + tools + careers + FAQ
    ├── StudentJourney.tsx # Timeline + 8 step details + FAQ
    ├── Placements.tsx    # Split cards + portfolio cards + expectations + gallery + FAQ
    ├── About.tsx         # Vision + values (6) + mentors (3) + gallery + CTA
    └── Contact.tsx      # 4-step process + 10-field form + info cards + FAQ
```

---

## Pages & Content

### Home (`/`)
Hero (3D globe) → Pain Points (5) → Why OrbitCrew (6 cards) → Programs Overview → Showcase → Student Journey → Placements → Environment Gallery (7) → Admissions (center-block) → FAQ → Final CTA

### Programs (`/programs`)
PageHero → Comparison Table (4 programs) → Detailed Programs (stack) → Tools Grid (6) → Showcase → Career Directions (5) → FAQ → Final CTA

### Student Journey (`/student-journey`)
PageHero → Timeline (7) → 8 Step Details (numbered cards) → FAQ → Final CTA

### Placements (`/placements`)
PageHero → Split Grid (2 cards) → Portfolio Cards (3) → Expectations (4) → Environment Gallery (6) → FAQ → Final CTA

### About (`/about`)
PageHero → Vision → Values Grid (6) → Local Trust → Mentors (3) → Classroom Gallery (7) → Final CTA

### Contact (`/contact`)
PageHero → 4-Step Process → Form Card (10 fields) + Info Cards (4) + Admission Process → FAQ → Final CTA

---

## Key Design Decisions

| Decision | Rationale |
|---|---|
| Hardcoded hex values in `App.css` | Avoid conflicts between Tailwind's `@theme` block and `:root` CSS custom properties |
| `:root` vars in `index.css` | Three.js `hsl(var(--foreground))` needs `--foreground` defined there |
| Pure CSS classes in `App.css` co-existing with Tailwind | Avoids rewriting all existing components; new globe hero uses Tailwind |
| Counseling-first UX | No pricing, no buy buttons — all CTAs route to `/contact` for free counseling |
| 3D globe hero on homepage | Premium, tech-forward visual impression |
| Sticky navbar + sticky mobile CTA bar | Always-visible navigation and primary CTA on mobile |

---

## CSS Variables (defined in `index.css` `:root`)
```css
--background, --foreground, --primary, --primary-foreground,
--muted, --muted-foreground, --border, --accent, --accent-foreground,
--destructive, --destructive-foreground, --ring, --radius,
--white (#ffffff), --gray-900, --gray-700, --gray-500, --gray-400,
--gray-300, --gray-100, --dark (#0f0f1a)
```

---

## Image Strategy
`ImagePlaceholder.tsx` maps label strings to real Unsplash URLs (400–1200px wide, q=80). Fallback shows styled text. Showcase has inline real URLs.

### Image Labels → Unsplash URLs
- `Classroom Environment` → classroom photo
- `AI & Tech Learning` → AI/tech photo
- `Project Review Session` → meeting photo
- `Mentorship Session` → team collaboration photo
- `Internship Environment` → office photo
- `Collaboration` → team meeting photo
- `Premium Classroom Overview` → wide classroom (1200px)
- `Modern Workstations` → laptop coding
- `Mentorship Moment`, `Practical Session`, `Project Discussion`, `Collaborative Learning`, `Students Working` → various
- `Workplace Environment`, `Interview Session`, `Portfolio Review`, `Team Collaboration`, `Professional Workspace`, `Career Counseling` → workplace photos
- `Senior Mentor`, `Web Development Mentor`, `Marketing Mentor` → headshots
- `ChatGPT Dashboard`, `WordPress Dashboard`, `Meta Ads Dashboard`, `Make Automation`, `Shopify Store`, `Analytics Dashboard` → relevant tool UI
- `Portfolio Website`, `LinkedIn Profile`, `Resume Building` → career/portfolio

---

## Components Behavior

- **Navbar:** Fixed, 68px tall, `padding: 0 40px`. Links centered with `flex: 1`. Mobile: hamburger toggles `.nav.open` class, links + actions stack vertically.
- **MobileCTA:** `display: none` by default, `display: block` at 768px. Shows "Book Free Counseling" button.
- **ProgramsStack:** Controlled `openId` state. `max-height` transition (0.4s ease) for expand/collapse.
- **FAQ:** Controlled `openIndex`. `max-height` transition (0.3s ease). Plus icon (×) rotates 45° when open.
- **Showcase:** Horizontal scroll, `min-width: max-content`, thin custom scrollbar.
- **Timeline:** Left-aligned vertical line, gradient `#8b6fff` → `#00c9a7`, dots with white center.
- **ImagePlaceholder:** Shows `<img>` if URL exists, text fallback otherwise.

---

## Constants
- Primary color: `#6b45f0` (purple)
- Accent color: `#00c9a7` (teal)
- Dark bg: `#0f0f1a`
- Font: `'Inter', system-ui, ...` (defined as `--font-family-sans` in `@theme`)
- Batch size: 10–15 students max
- 4 programs: AI Automation (5mo), Web Development (6mo), Digital Marketing (4mo), Custom Path (flexible)

---

## Build & Lint
- `npm run build` → clean
- `npm run lint` → clean (0 errors)
- JS bundle: ~1.33MB (Three.js heavy — could code-split with `lazy()`)
- CSS bundle: ~47KB

---

## Future Considerations
- Code-split Three.js for faster initial load
- Replace phone/WhatsApp placeholder numbers (`+91 XXXXXXXXXX`, `91XXXXXXXXXX`)
- Add form backend submission
- Add real mentor photos (currently Unsplash placeholders)
- Review all `.map` callbacks for missing `key` props (none currently, but verify on changes)