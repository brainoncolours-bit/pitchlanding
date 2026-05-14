import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Update background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Problem', href: '/#problem' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Benefits', href: '/#benefits' },
    { name: 'Journey', href: '/#journey' },
    { name: 'Contact', href: '/#contact' },
    { name: 'FAQ', href: '/#faq' },
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const id = href.split('#')[1]
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed w-full top-0 z-50 flex justify-center p-4">
      <div 
        className={`w-full max-w-7xl transition-all duration-500 ease-in-out px-6 py-3 rounded-2xl flex items-center justify-between
          ${scrolled 
            ? 'bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]' 
            : 'bg-transparent border border-transparent'
          }`}
      >
        {/* Logo with Glow Effect */}
        <Link to="/" className="relative group flex items-center gap-2">
          <div className="absolute -inset-2 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="text-xl font-black tracking-tighter text-white uppercase">
            Pitch<span className="text-blue-500">Studio</span>
          </span>
        </Link>

        {/* Desktop Navigation with Animated Pill */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="relative px-4 py-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300 rounded-full group"
            >
              <span className="relative z-10">{link.name}</span>
              <div className="absolute inset-0 bg-blue-500/10 scale-0 group-hover:scale-100 rounded-full transition-transform duration-200 ease-out" />
            </a>
          ))}
        </div>

        {/* Action Button - Matching "View Live Deck Feed" style */}
        <div className="hidden md:block">
          <button className="relative group px-6 py-2 overflow-hidden rounded-full bg-blue-600 font-bold text-white transition-all hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 hover:ring-offset-slate-900">
            <span className="relative z-10 text-xs tracking-widest uppercase">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
        >
          <div className="w-6 flex flex-col items-end gap-1.5">
            <span className={`h-0.5 bg-white transition-all ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
            <span className={`h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : 'w-4'}`} />
            <span className={`h-0.5 bg-white transition-all ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-lg font-semibold text-slate-300 hover:text-blue-400 border-b border-white/5 pb-2"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold uppercase tracking-widest">
              Join the Movement
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}