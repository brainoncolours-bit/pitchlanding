import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'

export default function HowItWorks() {
  const containerRef = useRef(null)
  const steps = [
    {
      number: '01',
      title: 'Join the Community',
      description: 'Sign up as a founder, investor, or mentor. Complete your profile in minutes.',
      tag: 'INITIATION'
    },
    {
      number: '02',
      title: 'Get Discovered',
      description: 'Our algorithm matches you with ideal connections based on goals and expertise.',
      tag: 'MATCHMAKING'
    },
    {
      number: '03',
      title: 'Attend Events',
      description: 'Participate in curated pitch events, workshops, and networking sessions.',
      tag: 'ENGAGEMENT'
    },
    {
      number: '04',
      title: 'Build Relationships',
      description: 'Connect meaningfully with investors, mentors, and fellow founders.',
      tag: 'SYNERGY'
    },
    {
      number: '05',
      title: 'Raise & Scale',
      description: 'Close funding rounds and scale with support from the entire ecosystem.',
      tag: 'EXPANSION'
    }
  ]

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section
      ref={containerRef}
      id="how-it-works"
      className="py-32 bg-[#020202] relative overflow-hidden"
    >
      {/* BACKGROUND DECOR */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white/5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="px-4 py-1 border border-blue-500/30 rounded-full bg-blue-500/5 text-blue-400 text-[10px] font-black tracking-[0.3em] uppercase mb-6"
          >
            Protocol Flow
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-[1000] text-white uppercase italic tracking-tighter leading-none">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700">ROADMAP</span>
          </h2>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Animated Line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-gradient-to-b from-blue-500 via-blue-400 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            />
          </div>

          <div className="space-y-24 md:space-y-40">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="relative group">
                    <span className="text-blue-500 font-mono text-xs font-black tracking-widest block mb-2 opacity-50 group-hover:opacity-100 transition-opacity">
                      // {step.tag}
                    </span>
                    <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-4 group-hover:text-blue-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-white/40 text-lg font-medium leading-tight group-hover:text-white/70 transition-colors">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Node (Number) */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center z-20">
                  <motion.div 
                    whileInView={{ scale: [0, 1.2, 1], rotate: [0, 90, 45] }}
                    className="w-14 h-14 bg-[#050505] border-2 border-blue-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)] backdrop-blur-xl"
                  >
                    <span className="text-white font-black italic -rotate-45">{step.number}</span>
                  </motion.div>
                </div>

                {/* Spacer for Mobile Layout */}
                <div className="md:w-[45%] h-1 md:h-auto" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}