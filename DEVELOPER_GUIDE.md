# Developer Quick Reference

## Component Overview & File Locations

### Common Components (`src/components/common/`)

#### Navbar.jsx
- **Purpose**: Fixed navigation header
- **Features**: Mobile menu, smooth scroll to sections, desktop/mobile responsive
- **Key Props**: None (uses internal state)
- **Customization**: Update `navLinks` array for navigation items

#### Footer.jsx
- **Purpose**: Site footer with links and credits
- **Features**: Social links, legal pages, founder credit, responsive grid
- **Key Props**: None (auto-generates current year)
- **Customization**: Update links, social handles, and legal pages

---

### Section Components (`src/components/sections/`)

#### Hero.jsx
- **Features**: Hero image visual, proof stats, dual CTAs
- **Key Content**:
  - Headline, subheadline, stats (500+, 150+, $50M+)
  - Investor room visual with live event cards
- **Customize**: Update stats, investor room data, CTA text
- **Colors**: Sky-400 accents, gradient background

#### About.jsx
- **Features**: Founder story, Delvin Danny credit card
- **Key Content**: Movement copy, founder bio, quote
- **Customize**: Founder name, story, credentials
- **Layout**: 2-column (story + founder card)

#### Problem.jsx
- **Features**: 6-panel grid of founder challenges
- **Content Array**: `problems` array with title, description, icon
- **Customize**: Add/remove problems, change emoji icons, update descriptions
- **Styling**: Hover effects with sky-400 border

#### HowItWorks.jsx
- **Features**: 5-step timeline with golden connector line
- **Content Array**: `steps` array with number, title, description
- **Key Visual**: Golden horizontal line (desktop), vertical dots (mobile)
- **Customize**: Add/remove steps, update descriptions
- **Layout**: 5 columns on desktop, responsive on mobile

#### Benefits.jsx
- **Features**: Split-panel design (founders/investors)
- **Layout**: 2 columns - light left, dark right
- **Content**: Benefits lists with checkmarks and CTAs
- **Customize**: Update benefit items, CTA buttons, colors
- **Interactive**: Button hover states change colors

#### Journey.jsx
- **Features**: City cards (Bangalore, Kerala) + expansion CTA
- **Content**: Each city has programs and details
- **Key Section**: "Your City is Next" call-to-action banner
- **Customize**: Add/remove cities, update program names, social links
- **Colors**: Blue gradient (Bangalore), Emerald gradient (Kerala)

#### Testimonials.jsx
- **Features**: 6 testimonials from ecosystem members
- **Content Array**: `testimonials` array with name, role, quote, type
- **Types**: 'founder', 'investor', 'mentor', 'student'
- **Color Mapping**: Each type has unique background color
- **Customize**: Update testimonials, add new members, change types
- **Icons**: Emoji-based avatar system

#### FAQ.jsx
- **Features**: Accordion interface with 8 questions
- **State**: `openIndex` tracks which accordion is expanded
- **Content Array**: `faqs` array with question and answer
- **Key Question**: "Does it guarantee investment?" (answered with integrity)
- **Customize**: Update questions/answers, add new FAQs
- **Interaction**: Click to expand/collapse, arrow rotation animation

#### FinalCTA.jsx
- **Features**: Movement-level call-to-action
- **Main Message**: "Stop Waiting for Permission"
- **Key Elements**: Main CTA buttons (3), trust indicators with stats
- **Customize**: Update main headline, descriptions, button text
- **Statistics**: 500+ Founders, 150+ Investors, $50M+ Capital, 2 Cities

---

## Pages (`src/pages/`)

### Home.jsx
- **Purpose**: Main landing page
- **Imports**: All 9 section components
- **Render Order**: Hero → About → Problem → HowItWorks → Benefits → Journey → Testimonials → FAQ → FinalCTA
- **Layout**: Single column, stacked sections
- **Customize**: Reorder sections, add/remove sections

---

## Routing Setup (App.jsx)

```javascript
// Current route structure
/                 → Home (all sections)

// To add new routes in future:
import NewPage from './pages/NewPage'
<Route path="/new-page" element={<NewPage />} />
```

---

## Navigation & Linking

### Navbar Links
Edit the `navLinks` array in Navbar.jsx:
```javascript
const navLinks = [
  { name: 'Section Name', href: '/#section-id' },
]
```

### Section IDs
Each section has an `id` attribute:
```javascript
<section id="hero">...</section>
<section id="about">...</section>
// etc.
```

### Smooth Scrolling
The Navbar's `scrollToSection` function handles smooth scrolling to any section.

---

## Styling Guidelines

### Color Palette
- **Background**: `bg-slate-900`, `bg-slate-950`
- **Accent**: `text-sky-400`, `bg-sky-400`
- **Text**: `text-white`, `text-slate-300`, `text-slate-400`
- **Borders**: `border-slate-800`, `border-slate-700`
- **Hover**: `hover:bg-sky-400`, `hover:border-sky-400`

### Common Patterns
- **Section spacing**: `py-20` (padding vertical)
- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Headings**: `text-4xl md:text-5xl font-bold`
- **Gradients**: `bg-gradient-to-br from-X to-Y`
- **Shadows**: `shadow-lg shadow-sky-400/30`

### Responsive Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## Content Customization Checklist

- [ ] Update hero stats (500+, 150+, $50M+)
- [ ] Change investor room cards content
- [ ] Update "Delvin Danny" name and bio
- [ ] Modify problem statements
- [ ] Add/remove how-it-works steps
- [ ] Update founder/investor benefits
- [ ] Add city cards for new locations
- [ ] Replace testimonials with real quotes
- [ ] Update FAQ questions/answers
- [ ] Customize footer links and social handles
- [ ] Update company stats in final CTA
- [ ] Add/customize logos or images in assets/

---

## Performance Tips

1. **Optimize Images**: Compress hero images and city cards before deployment
2. **Lazy Loading**: Consider adding React Suspense for sections
3. **Code Splitting**: Sections can be lazy-loaded for faster initial load
4. **CSS**: Tailwind purges unused styles in production build

---

## Deployment Checklist

- [ ] Run `npm run build`
- [ ] Test production build with `npm run preview`
- [ ] Update social links to real URLs
- [ ] Add analytics (Google Analytics, etc.)
- [ ] Set up form submission for CTAs
- [ ] Configure email service for inquiries
- [ ] Add SEO meta tags in index.html
- [ ] Update favicon and manifest
- [ ] Set up domain and DNS
- [ ] Add SSL certificate

---

## Common Customizations

### Change Primary Accent Color
Replace `sky-400` with another color throughout:
- Search: `sky-400` → Replace with: `blue-400`, `cyan-400`, etc.
- Same for `hover:border-sky-400`, `text-sky-400`, etc.

### Add New Section
1. Create `src/components/sections/NewSection.jsx`
2. Import in `src/pages/Home.jsx`
3. Add to JSX render in Home.jsx
4. Add section ID: `<section id="new-section">`
5. Update Navbar links if needed

### Modify Section Order
In `src/pages/Home.jsx`, rearrange the component order.

---

## Troubleshooting

**Issue**: Navbar links don't scroll to sections
- **Solution**: Ensure each section has correct `id` attribute matching the href

**Issue**: Mobile menu doesn't close after link click
- **Solution**: Check that `setIsOpen(false)` is called in `scrollToSection`

**Issue**: Tailwind styles not applying
- **Solution**: Run `npm run build` and check that tailwind.config.js is correct

**Issue**: Sections not responsive
- **Solution**: Check for `hidden md:block` or `grid-cols-1 md:grid-cols-2` classes

---

## Resources

- [React Docs](https://react.dev)
- [React Router Docs](https://reactrouter.com)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vite Docs](https://vitejs.dev)

