# Pitch Studio Landing Page

A modern, fully-featured landing page for Pitch Studio - "Where Founders Meet Their Future". Built with React, Vite, Tailwind CSS, and React Router.

## Project Structure

```
src/
├── pages/
│   └── Home.jsx                    # Main landing page that combines all sections
│
├── components/
│   ├── common/
│   │   ├── Navbar.jsx             # Navigation bar with mobile responsiveness
│   │   └── Footer.jsx             # Footer with links, social, and founder credit
│   │
│   └── sections/
│       ├── Hero.jsx               # Hero section with live investor room visual
│       ├── About.jsx              # About section with founder origin story
│       ├── Problem.jsx            # 6-panel grid showing access gap
│       ├── HowItWorks.jsx         # 5-step timeline with golden connector
│       ├── Benefits.jsx           # Split-panel design for founders/investors
│       ├── Journey.jsx            # Bangalore + Kerala cards + expansion CTA
│       ├── Testimonials.jsx       # 6 voices from the ecosystem
│       ├── FAQ.jsx                # 8 honest answers
│       └── FinalCTA.jsx           # "Stop Waiting for Permission" movement CTA
│
├── App.jsx                        # Main app with routing setup
├── App.css                        # App-level styles
├── main.jsx                       # React entry point
├── index.css                      # Global styles
└── assets/                        # Images and static assets
```

## Features

### 1. **Hero Section**
- Eye-catching headline: "Where Founders Meet Their Future"
- Live investor room visual with dynamic cards
- Proof stats: 500+ founders, 150+ investors, $50M+ deployed
- Dual CTAs with contrasting styling

### 2. **About Section**
- Frames Pitch Studio as a movement, not a platform
- Founder origin story
- Prominent credit to **Delvin Danny** as founder
- Compelling copy about democratizing access

### 3. **Problem Section**
- Dark background 6-panel grid
- Showcases 6 barriers founders face:
  - Access Gap, Information Asymmetry, Geographic Isolation
  - Cold Start Problem, Quality Mentorship, Speed & Timing
- Hover effects for interactivity

### 4. **How It Works**
- Clean 5-step timeline
- Connected by golden gradient line (desktop)
- Steps: Join → Discover → Attend → Connect → Raise & Scale
- Numbered circles with detailed descriptions

### 5. **Benefits Section**
- Split-panel design
- **Left (Light)**: Founders' benefits
- **Right (Dark)**: Investors' benefits
- Speaks to both audiences simultaneously
- Individual call-to-action buttons

### 6. **Journey Section**
- Bangalore & Kerala city cards with rich details
- "Your City is Next" call-to-action
- Two-button CTA: Express Interest, Become Ambassador

### 7. **Testimonials**
- 6 voices from complete ecosystem:
  - 2 Founders, 2 Investors, 1 Mentor, 1 Student
- Color-coded by type
- Authentic, powerful quotes
- Role and image representations

### 8. **FAQ Section**
- 8 honest, direct answers
- Includes: "Does it guarantee investment?" (handled with integrity)
- Accordion interface with smooth animations
- Other topics: pricing, vetting, events, remote access, differentiation, equity, getting started

### 9. **Final CTA**
- "Stop Waiting for Permission" - movement-level language
- Three CTA buttons: Founder, Investor, Mentor paths
- Trust indicators with key metrics

### 10. **Navigation & Footer**
- **Navbar**: Fixed, responsive, smooth scroll to sections, mobile menu
- **Footer**: Navigation links, social links, legal pages, founder credit

## Getting Started

### Installation

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

### Available Scripts

- `npm run dev` - Start development server (http://localhost:5173)
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

## Technologies Used

- **React 19** - UI library
- **Vite** - Build tool
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router v7** - Client-side routing
- **@tailwindcss/vite** - Vite plugin for Tailwind

## Responsive Design

All sections are fully responsive:
- Mobile-first approach
- Tablet optimization
- Desktop layouts
- Mobile navigation drawer

## Navigation

The Navbar provides smooth scroll navigation to all sections:
- Home, About, Problem, How It Works
- Benefits, Journey, Testimonials
- FAQ, and more

All sections have anchor IDs for direct linking.

## Customization Guide

### Colors
The design uses a Slate 900/950 dark theme with Sky 400 accents. Modify Tailwind colors in your CSS or create a custom Tailwind config.

### Content
All sections are component-based. Update text, stats, and testimonials by editing the respective component files.

### Images/Assets
Place images in `src/assets/` and import them into sections as needed.

### Adding New Sections
1. Create a new component in `src/components/sections/`
2. Import it in `src/pages/Home.jsx`
3. Add it to the render order
4. Update Navbar links if needed

## Performance Considerations

- Lazy loading ready for sections
- Optimized Tailwind build
- No unused CSS in production
- Mobile-optimized images recommended

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Part of the Pitch Studio movement. Built with ❤️ by the community.

---

**Founded by Delvin Danny**

Building the future of founder networking.
