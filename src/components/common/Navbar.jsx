import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  // Hide on scroll down, show on scroll up for better UX
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setHidden(true)
      setIsOpen(false) // Close mobile menu if scrolling
    } else {
      setHidden(false)
    }
  })

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Problem', href: '#problem' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Journey', href: '#journey' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
    { name: 'Gallery', href: '#gallery' },
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed w-full top-4 z-50 px-4 md:px-8 flex justify-center"
    >
      <div className="w-full max-w-7xl bg-slate-950/60 backdrop-blur-xl border border-white/10 p-2 pl-6 rounded-full flex items-center justify-between shadow-2xl">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center shrink-0">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            src="public/logo.png" 
            alt="Logos" 
            className="w-24 md:w-28 h-auto" 
          />
        </Link>

        {/* Desktop Links - Using flex-wrap if screen gets slightly smaller */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <DesktopNavLink key={link.name} link={link} onClick={scrollToSection} />
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(37, 99, 235, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-blue-600 text-white rounded-full font-bold text-[10px] tracking-[0.2em] uppercase transition-colors hover:bg-blue-500 mx-3"
          >
            Get Started
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 mr-2"
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white rounded-full" 
          />
          <motion.span 
            animate={isOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
            className="w-6 h-0.5 bg-white rounded-full" 
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white rounded-full" 
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-20 left-4 right-4 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 lg:hidden shadow-3xl flex flex-col gap-2"
          >
            {navLinks.map((link, i) => (
              <motion.a
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-xl font-medium text-slate-400 hover:text-white py-3 border-b border-white/5 last:border-none"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold uppercase tracking-widest mt-4"
            >
              Join the Movement
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function DesktopNavLink({ link, onClick }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={link.href}
      onClick={(e) => onClick(e, link.href)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative px-4 py-2 text-[18px] font-medium text-slate-400 transition-colors hover:text-white"
    >
      <span className="relative z-10">{link.name}</span>
      {hovered && (
        <motion.div
          layoutId="nav-hover-bg"
          className="absolute inset-0 bg-white/5 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
        />
      )}
    </a>
  )
}