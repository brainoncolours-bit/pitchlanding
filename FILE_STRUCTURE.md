# Project File Structure

## Complete Directory Tree

```
pitchlanding/
├── 📄 package.json                    ← Dependencies (React, Vite, Tailwind, React Router)
├── 📄 vite.config.js                  ← Vite configuration
├── 📄 eslint.config.js                ← ESLint rules
├── 📄 index.html                      ← HTML entry point
│
├── 📚 Documentation (5 files)
│   ├── 📄 README.md                   ← Quick start guide
│   ├── 📄 BUILD_SUMMARY.md            ← Build overview & features
│   ├── 📄 STRUCTURE.md                ← Complete structure & customization
│   ├── 📄 DEVELOPER_GUIDE.md          ← Component reference & tips
│   ├── 📄 COMPONENT_CHEATSHEET.md     ← Quick reference for edits
│   └── 📄 COMPLETION_REPORT.md        ← This project's completion status
│
├── 📁 public/                         ← Static assets (copy as-is to build)
│
└── 📁 src/
    ├── 📄 main.jsx                    ← React entry point
    ├── 📄 App.jsx                     ← Main app with React Router ⭐
    ├── 📄 App.css                     ← App-level styles
    ├── 📄 index.css                   ← Global Tailwind styles
    │
    ├── 📁 assets/                     ← Images and static files
    │   ├── react.svg
    │   ├── vite.svg
    │   └── hero.png
    │
    ├── 📁 pages/                      ← Page components (1 file) ⭐
    │   └── 📄 Home.jsx                ← Main landing page combining all sections
    │
    └── 📁 components/                 ← All React components
        │
        ├── 📁 common/                 ← Reusable components (2 files) ⭐
        │   ├── 📄 Navbar.jsx          ← Fixed navigation header
        │   │   • Mobile drawer menu
        │   │   • Smooth scroll to sections
        │   │   • Logo and CTA button
        │   │
        │   └── 📄 Footer.jsx          ← Footer component
        │       • Navigation links
        │       • Social media links
        │       • Legal links
        │       • Founder credit (Delvin Danny)
        │
        └── 📁 sections/               ← All landing page sections (9 files) ⭐
            │
            ├── 📄 Hero.jsx
            │   • "Where Founders Meet Their Future"
            │   • Proof stats: 500+, 150+, $50M+
            │   • Investor room visual (3 cards)
            │   • Dual CTAs
            │
            ├── 📄 About.jsx
            │   • "A Movement, Not a Platform"
            │   • Founder story
            │   • Delvin Danny credit card
            │   • Compelling copy
            │
            ├── 📄 Problem.jsx
            │   • 6-panel grid
            │   • Access gaps: Gap, Asymmetry, Geographic, Cold Start, Mentorship, Speed
            │   • Dark background with hover effects
            │
            ├── 📄 HowItWorks.jsx
            │   • 5-step timeline
            │   • Golden line connector (desktop)
            │   • Steps: Join, Discover, Attend, Connect, Scale
            │
            ├── 📄 Benefits.jsx
            │   • Split-panel design
            │   • Left: Light theme for Founders
            │   • Right: Dark theme for Investors
            │   • 5 benefits each with CTAs
            │
            ├── 📄 Journey.jsx
            │   • Bangalore card (blue gradient)
            │   • Kerala card (emerald gradient)
            │   • City programs and details
            │   • "Your City is Next" banner
            │   • 2 CTAs: Express Interest, Become Ambassador
            │
            ├── 📄 Testimonials.jsx
            │   • 6 testimonial cards
            │   • Types: Founder (2), Investor (2), Mentor (1), Student (1)
            │   • Color-coded by type
            │   • Names, roles, quotes
            │
            ├── 📄 FAQ.jsx
            │   • 8 FAQ questions
            │   • Accordion interface
            │   • Smooth animations
            │   • Investment guarantee answered with integrity
            │
            └── 📄 FinalCTA.jsx
                • "Stop Waiting for Permission"
                • 3 CTA buttons (Founder, Investor, Mentor)
                • Trust indicators with stats
                • Movement-level messaging
```

## Component Hierarchy

```
App.jsx (Router)
├── Navbar.jsx
├── Routes
│   └── Home.jsx (Main Page)
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Problem.jsx
│       ├── HowItWorks.jsx
│       ├── Benefits.jsx
│       ├── Journey.jsx
│       ├── Testimonials.jsx
│       ├── FAQ.jsx
│       └── FinalCTA.jsx
└── Footer.jsx
```

## Key File Sizes & Stats

```
Components (src/components/sections/):
├── Hero.jsx              ~3.5 KB  (Hero with stats & visual)
├── About.jsx             ~2.7 KB  (Story + founder card)
├── Problem.jsx           ~2.3 KB  (6-panel grid)
├── HowItWorks.jsx        ~3.5 KB  (5-step timeline)
├── Benefits.jsx          ~5.2 KB  (Split panel design)
├── Journey.jsx           ~3.6 KB  (City cards + expansion)
├── Testimonials.jsx      ~4.0 KB  (6 testimonials)
├── FAQ.jsx               ~5.1 KB  (8 FAQs with accordion)
└── FinalCTA.jsx          ~2.7 KB  (Movement CTA)

Common (src/components/common/):
├── Navbar.jsx            ~3.3 KB  (Navigation)
└── Footer.jsx            ~3.5 KB  (Footer)

Pages (src/pages/):
└── Home.jsx              ~0.6 KB  (All sections)

Main (src/):
├── App.jsx               ~0.5 KB  (Router setup)
├── main.jsx              ~0.3 KB  (Entry point)
├── App.css               ~1 KB    (App styles)
└── index.css             ~1 KB    (Global styles)

Documentation:
├── README.md             ~2 KB    (Quick start)
├── BUILD_SUMMARY.md      ~4 KB    (Build overview)
├── STRUCTURE.md          ~6 KB    (Structure guide)
├── DEVELOPER_GUIDE.md    ~8 KB    (Component reference)
├── COMPONENT_CHEATSHEET  ~7 KB    (Quick reference)
└── COMPLETION_REPORT.md  ~4 KB    (Completion status)

Total Component Code: ~3,500+ lines
Total Documentation: ~30 KB
```

## Navigation Flow

```
Navbar (Fixed)
│
├─→ Hero (#hero)
│   └─→ "Join the Movement" CTA
│
├─→ About (#about)
│   └─→ Founder story
│
├─→ Problem (#problem)
│   └─→ 6 access gaps
│
├─→ How It Works (#how-it-works)
│   └─→ 5-step process
│
├─→ Benefits (#benefits)
│   ├─→ Founder benefits
│   └─→ Investor benefits
│
├─→ Journey (#journey)
│   ├─→ Bangalore
│   ├─→ Kerala
│   └─→ City expansion CTA
│
├─→ Testimonials (#testimonials)
│   └─→ 6 voices
│
├─→ FAQ (#faq)
│   └─→ 8 questions
│
└─→ Final CTA (#final-cta)
    ├─→ "Stop Waiting for Permission"
    └─→ 3 role-based CTAs

Footer
├─→ Navigation links
├─→ Social links
├─→ Legal links
└─→ Founder credit
```

## Styling Architecture

```
Tailwind CSS 4
│
├─→ Global (index.css)
│   └─→ Base styles & utilities
│
├─→ Component Level (inline Tailwind classes)
│   ├─→ Layouts (flex, grid, max-w-7xl)
│   ├─→ Colors (slate, sky, emerald, etc.)
│   ├─→ Typography (text sizes, weights)
│   ├─→ Spacing (py-20, px-4, gap-6)
│   ├─→ Effects (shadows, gradients, glows)
│   └─→ Responsive (md:, lg:, xl:)
│
└─→ App Level (App.css)
    └─→ Specific app styling
```

## File Dependencies

```
App.jsx
├── imports: React Router
├── imports: Navbar.jsx
├── imports: Home.jsx
└── imports: Footer.jsx

Home.jsx
├── imports: Hero.jsx
├── imports: About.jsx
├── imports: Problem.jsx
├── imports: HowItWorks.jsx
├── imports: Benefits.jsx
├── imports: Journey.jsx
├── imports: Testimonials.jsx
├── imports: FAQ.jsx
└── imports: FinalCTA.jsx

Navbar.jsx
└── imports: React Router Link

Footer.jsx
└── imports: React Router Link

All Sections
└── Only imports: React (useState where needed)
```

## Build Output

```
npm run build
│
└─→ dist/
    ├── index.html      (Optimized)
    ├── js/
    │   └── main-[hash].js  (Minified React + components)
    └── assets/
        ├── react-[hash].svg
        ├── vite-[hash].svg
        └── hero-[hash].png
```

## Configuration Files

```
vite.config.js
├── React plugin
├── @tailwindcss/vite
└── Optimizations

eslint.config.js
├── ESLint rules
├── React hooks linter
└── React refresh

package.json
├── Dependencies:
│   ├── react@19.2.6
│   ├── react-dom@19.2.6
│   ├── react-router-dom@7
│   ├── tailwindcss@4.3.0
│   └── @tailwindcss/vite@4.3.0
│
└── Dev Dependencies:
    ├── @vitejs/plugin-react@6.0.1
    ├── vite@8.0.12
    ├── tailwindcss@4.3.0
    └── ESLint packages
```

## Scripts Available

```
npm run dev          → Start dev server (http://localhost:5173)
npm run build        → Create production build (dist/)
npm run preview      → Preview production build locally
npm run lint         → Run ESLint on all files
```

## Deployment Structure

```
For Hosting (after npm run build):
│
└─→ dist/            (Copy this folder to your server)
    ├── index.html
    ├── js/
    │   └── main-[hash].js
    └── assets/
        ├── images
        └── other assets
```

---

## Quick Lookup

**Need to...** | **Go to**
---|---
Find a component | `src/components/sections/` or `src/components/common/`
Edit a section | Open the specific `.jsx` file in `src/components/sections/`
Add a new section | Create file in `src/components/sections/`, import in `Home.jsx`
Change colors | Replace Tailwind color classes (find `sky-400` etc.)
Add images | Place in `src/assets/`, import in component
Customize content | Edit arrays in component files (problems, steps, testimonials, etc.)
Understand routing | Check `App.jsx` and navbar scroll functions
View all sections | Open `src/pages/Home.jsx`
Check styling | Look for Tailwind classes in component JSX
Deploy | Run `npm run build`, push `dist/` folder

