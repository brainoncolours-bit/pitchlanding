import { motion } from 'framer-motion'

export default function Journey() {
  const hubs = [
    {
      city: 'Bangalore',
      initial: 'B',
      accent: 'blue',
      description: 'The Silicon Valley of India. Where it all began. 250+ founders, 100+ investors.',
      stats: [
        { label: 'Monthly Pitch Events', val: '50+ Attendees' },
        { label: 'Investor Dinners', val: 'Intimate' },
        { label: 'Founder Bootcamp', val: '12-Week' },
      ],
      glow: 'shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)]',
      border: 'border-blue-500/30'
    },
    {
      city: 'Kerala',
      initial: 'K',
      accent: 'emerald',
      description: 'The emerging talent hub. Undiscovered gems finding their voices. 150+ founders.',
      stats: [
        { label: 'Regional Pitch Nights', val: 'Bi-Weekly' },
        { label: 'Mentorship Circles', val: 'Hands-on' },
        { label: 'Guild Program', val: 'Exposure' },
      ],
      glow: 'shadow-[0_0_50px_-12px_rgba(16,185,129,0.4)]',
      border: 'border-emerald-500/30'
    }
  ]

  return (
    <section id="journey" className="py-32 bg-[#020202] relative overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4"
          >
            Expansion Protocol // IN_PROGRESS
          </motion.span>
          <h2 className="text-6xl md:text-8xl font-[1000] text-white uppercase italic tracking-tighter leading-none">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-600">JOURNEY</span>
          </h2>
        </div>

        {/* CITY NODES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {hubs.map((hub, i) => (
            <motion.div
              key={hub.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`relative group bg-[#050505] rounded-[2.5rem] p-10 border ${hub.border} ${hub.glow} overflow-hidden`}
            >
              {/* Massive Holographic Initial */}
              <div className="absolute -top-10 -right-4 text-[15rem] font-black text-white/[0.03] italic leading-none pointer-events-none group-hover:text-white/[0.07] transition-colors">
                {hub.initial}
              </div>

              <div className="relative z-10">
                <div className={`w-12 h-[2px] mb-6 ${hub.accent === 'blue' ? 'bg-blue-500' : 'bg-emerald-500'}`} />
                <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-4">
                  {hub.city}
                </h3>
                <p className="text-white/40 text-lg font-medium leading-snug mb-10 max-w-sm">
                  {hub.description}
                </p>

                <div className="space-y-4">
                  {hub.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b border-white/5 pb-2">
                      <span className="text-white/60 text-xs font-bold uppercase tracking-widest">{stat.label}</span>
                      <span className="text-white font-mono text-xs">{stat.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CALL TO ACTION: EXPANSION TERMINAL */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-[3rem] p-12 md:p-20 overflow-hidden shadow-[0_0_100px_-20px_rgba(37,99,235,0.4)]"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 p-8 opacity-20">
             <div className="w-32 h-32 border-2 border-white rounded-full animate-ping" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6">
              Your City is Next.
            </h3>
            <p className="text-blue-100 text-lg md:text-xl font-medium mb-12 italic opacity-80">
              Pitch Studio is expanding to Hyderabad, Mumbai, Delhi, and beyond. Help us build the ecosystem in your city.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-12 py-5 bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-blue-500 hover:text-white transition-all">
                Express Interest
              </button>
              <button className="px-12 py-5 border-2 border-white/30 text-white font-black uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all">
                Become an Ambassador
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}