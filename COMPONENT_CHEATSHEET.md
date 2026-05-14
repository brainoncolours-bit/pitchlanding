# Component Cheat Sheet

Quick reference for all components and where to find them.

## Navigation Components

### Navbar
📁 `src/components/common/Navbar.jsx`
- Fixed position header
- Desktop menu + mobile drawer
- Smooth scroll to sections
- Logo and CTA button

**To customize:**
```javascript
const navLinks = [
  { name: 'Section', href: '/#section-id' },
  // Add more links here
]
```

### Footer
📁 `src/components/common/Footer.jsx`
- Grid layout with 4 columns
- Links, social, legal, founder credit
- Auto-generates current year

**To customize:**
```javascript
// Update links, social handles, footer content
```

---

## Section Components

### Hero.jsx
📁 `src/components/sections/Hero.jsx`

**Key Content:**
- Main headline: "Where Founders Meet Their Future"
- Sub-headline about the movement
- 3 proof stats (500+, 150+, $50M+)
- Investor room visual with 3 cards
- 2 CTAs (primary + secondary)

**Customization:**
- Update stats in the grid
- Change investor room card data
- Update CTA buttons text/styling

### About.jsx
📁 `src/components/sections/About.jsx`

**Key Content:**
- "A Movement, Not a Platform" headline
- 2 paragraphs of story
- Delvin Danny founder card with quote
- Founder credentials and tagline

**Customization:**
- Replace founder name
- Update story paragraphs
- Change founder quote
- Update credentials

### Problem.jsx
📁 `src/components/sections/Problem.jsx`

**Key Content:**
- 6 problems array with title, description, emoji icon
- Problems: Access Gap, Information Asymmetry, Geographic Isolation, Cold Start, Quality Mentorship, Speed & Timing

**Customization:**
```javascript
const problems = [
  {
    title: 'New Problem',
    description: 'Description here',
    icon: '🚀'  // Change emoji
  },
  // Add/remove problems
]
```

### HowItWorks.jsx
📁 `src/components/sections/HowItWorks.jsx`

**Key Content:**
- 5 steps array with number, title, description
- Golden line connector (desktop only)
- Numbered circles for each step

**Customization:**
```javascript
const steps = [
  {
    number: 1,
    title: 'Step Title',
    description: 'Description'
  },
  // Add/remove steps
]
```

### Benefits.jsx
📁 `src/components/sections/Benefits.jsx`

**Key Content:**
- Left panel (light): Founder benefits
- Right panel (dark): Investor benefits
- 5 benefits each with checkmarks
- Independent CTAs per side

**Customization:**
- Update benefit items in lists
- Change button text
- Update benefit descriptions
- Add/remove benefits

### Journey.jsx
📁 `src/components/sections/Journey.jsx`

**Key Content:**
- 2 city cards (Bangalore, Kerala)
- Each has programs list
- Expansion banner with "Your City is Next"
- 2 CTAs in banner

**Customization:**
```javascript
// Add new city cards:
<div className="bg-gradient-to-br from-city-color-primary...">
  {/* City card content */}
</div>

// Update programs list
// Change city colors
```

### Testimonials.jsx
📁 `src/components/sections/Testimonials.jsx`

**Key Content:**
- 6 testimonial cards
- Types: founder, investor, mentor, student
- Each has: name, role, image (emoji), quote
- Color-coded by type

**Customization:**
```javascript
const testimonials = [
  {
    type: 'founder',  // founder | investor | mentor | student
    name: 'Name',
    role: 'Role',
    image: '👩‍💻',  // Emoji or image
    quote: 'Quote text'
  },
  // Add/update testimonials
]
```

**Type Colors:**
- founder → Purple
- investor → Green
- mentor → Amber
- student → Pink

### FAQ.jsx
📁 `src/components/sections/FAQ.jsx`

**Key Content:**
- 8 FAQs array with question and answer
- Accordion interface
- Smooth expand/collapse animations
- "Still have questions?" CTA at bottom

**Customization:**
```javascript
const faqs = [
  {
    question: 'Your question?',
    answer: 'Your detailed answer here'
  },
  // Add/remove FAQs
]
```

**State:**
- `openIndex` - tracks which accordion is open

### FinalCTA.jsx
📁 `src/components/sections/FinalCTA.jsx`

**Key Content:**
- Main headline: "Stop Waiting for Permission"
- Sub-message
- 3 CTA buttons (Founder, Investor, Mentor)
- Trust indicators with 4 stats

**Customization:**
- Update main headline
- Change CTA button text
- Update trust indicator stats
- Change call-to-action messaging

---

## Page Component

### Home.jsx
📁 `src/pages/Home.jsx`

**Purpose:** Combines all sections into one page

**Imports:** All 9 section components

**Render Order:**
1. Hero
2. About
3. Problem
4. HowItWorks
5. Benefits
6. Journey
7. Testimonials
8. FAQ
9. FinalCTA

**To customize:**
```javascript
// Reorder sections by moving components up/down
// Add new sections by importing and adding to JSX
// Remove sections by deleting the component tag
```

---

## Main App Setup

### App.jsx
📁 `src/App.jsx`

**What it does:**
- Wraps app in React Router
- Renders Navbar and Footer
- Sets up main route to Home page
- Provides layout structure

**Current routing:**
- `/` → Home (all sections)

**To add new routes:**
```javascript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/new-page" element={<NewPage />} />
</Routes>
```

---

## Common Tailwind Classes Used

### Layout
- `flex`, `grid`, `max-w-7xl`, `mx-auto`
- `px-4 sm:px-6 lg:px-8` - container padding
- `py-20` - section vertical padding
- `gap-4`, `gap-6`, `gap-8` - spacing

### Colors
- **Background**: `bg-slate-900`, `bg-slate-950`
- **Text**: `text-white`, `text-slate-300`, `text-slate-400`
- **Accent**: `text-sky-400`, `bg-sky-400`
- **Borders**: `border-slate-800`, `border-slate-700`

### Typography
- `text-4xl md:text-5xl` - headings
- `font-bold` - emphasis
- `leading-tight`, `leading-relaxed` - line height

### Effects
- `hover:border-sky-400` - hover border
- `shadow-lg shadow-sky-400/30` - glow effect
- `rounded-xl`, `rounded-2xl` - border radius
- `transition-colors`, `transition-all` - animations

### Responsive
- `hidden md:block` - hide on mobile, show on desktop
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` - responsive grid
- `text-lg md:text-xl` - responsive text

---

## Quick Copy-Paste Templates

### Section Template
```javascript
export default function SectionName() {
  return (
    <section id="section-id" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Section <span className="text-sky-400">Title</span>
          </h2>
        </div>
        {/* Content here */}
      </div>
    </section>
  )
}
```

### Card Template
```javascript
<div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 hover:border-sky-400 transition-colors">
  <h3 className="text-xl font-bold text-white mb-3">Card Title</h3>
  <p className="text-slate-300">Card content here</p>
</div>
```

### CTA Button Template
```javascript
<button className="px-8 py-3 bg-sky-400 text-slate-900 rounded-lg font-bold hover:bg-sky-300 transition-colors">
  Button Text
</button>
```

---

## File Locations Quick Reference

```
src/
├── App.jsx                          ← React Router setup
├── pages/
│   └── Home.jsx                     ← All sections combined
└── components/
    ├── common/
    │   ├── Navbar.jsx              ← Navigation
    │   └── Footer.jsx              ← Footer
    └── sections/
        ├── Hero.jsx
        ├── About.jsx
        ├── Problem.jsx
        ├── HowItWorks.jsx
        ├── Benefits.jsx
        ├── Journey.jsx
        ├── Testimonials.jsx
        ├── FAQ.jsx
        └── FinalCTA.jsx
```

---

## Common Tasks

### Add a new testimonial
Edit `Testimonials.jsx`, add to `testimonials` array:
```javascript
{
  type: 'founder',
  name: 'New Name',
  role: 'New Role',
  image: '👤',
  quote: 'Their quote here'
}
```

### Change the primary color
Find `sky-400` in any component, replace with another color (e.g., `blue-400`, `cyan-400`)

### Add a new section
1. Create `src/components/sections/NewSection.jsx`
2. Import in `src/pages/Home.jsx`
3. Add to JSX render
4. (Optional) Add to navbar links

### Reorder sections
Edit `src/pages/Home.jsx`, move section components up/down

### Update section headline
Find the `<h2>` tag with the section title, update the text

### Change spacing
Replace `py-20` with `py-12`, `py-24`, etc.

---

## Need Help?

See these files for more details:
- **BUILD_SUMMARY.md** - What's been built
- **STRUCTURE.md** - Full project overview
- **DEVELOPER_GUIDE.md** - Detailed component reference

