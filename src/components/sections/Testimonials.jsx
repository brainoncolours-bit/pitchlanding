import { motion } from 'framer-motion'

export default function Testimonials() {
  const testimonials = [
    {
      type: 'founder',
      name: 'Priya Sharma',
      role: 'Founder, TechFlow',
      image: '👩‍💻',
      quote: 'Pitch Studio connected me with an angel investor who not only funded my round but became my biggest advocate. The network effect is real.'
    },
    {
      type: 'investor',
      name: 'Rajesh Nair',
      role: 'Managing Partner, Venture Labs',
      image: '💼',
      quote: "I've found 3 portfolio companies through Pitch Studio. The quality of founders and the vetting process is exceptional."
    },
    {
      type: 'mentor',
      name: 'Anil Kumar',
      role: 'Founder, ePayments (Exit: $45M)',
      image: '🎓',
      quote: 'Mentoring the next generation through Pitch Studio is the most fulfilling part of my journey. These founders are the future.'
    },
    {
      type: 'founder',
      name: 'Zara Patel',
      role: 'Founder, HealthAI',
      image: '👨‍⚕️',
      quote: 'From zero connections to raising a seed round in 6 months. Pitch Studio gave me access, credibility, and community.'
    },
    {
      type: 'investor',
      name: 'Sarah Chen',
      role: 'Angel Investor & Advisor',
      image: '👩‍💼',
      quote: "The ecosystem thinking here is different. It's not just about funding companies, it's about building movements."
    },
    {
      type: 'student',
      name: 'Arjun Singh',
      role: 'Founder, BuildLab (Pre-seed)',
      image: '🚀',
      quote: 'Fresh out of college with an idea. Pitch Studio treated me like a serious founder from day one. That belief matters.'
    }
  ]

  const getTypeStyles = (type) => {
    const styles = {
      founder: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
      investor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      mentor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
      student: 'text-purple-400 border-purple-500/30 bg-purple-500/10'
    }
    return styles[type] || styles.founder
  }

  return (
    <section id="testimonials" className="py-32 bg-[#020202] relative overflow-hidden">
      {/* Background Signal Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-blue-500 to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-blue-500 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="px-4 py-1 border border-blue-500/30 rounded-full bg-blue-500/5 text-blue-500 text-[10px] font-black tracking-[0.4em] uppercase mb-6"
          >
            Verified Transmissions
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-[1000] text-white uppercase italic tracking-tighter leading-none">
            VOICES OF THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white">MOVEMENT</span>
          </h2>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              <div className="h-full bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] transition-all duration-500 flex flex-col">
                
                {/* ID Tag */}
                <div className="flex justify-between items-center mb-8">
                  <span className={`px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest border ${getTypeStyles(t.type)}`}>
                    {t.type}
                  </span>
                  <span className="text-[10px] font-mono text-white/20 tracking-tighter">COMMS_LINK // 0{i + 1}</span>
                </div>

                {/* Quote */}
                <div className="flex-grow mb-8">
                  <p className="text-white/80 text-lg font-medium leading-relaxed italic tracking-tight">
                    "{t.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl filter grayscale group-hover:grayscale-0 transition-all duration-500 shadow-inner">
                    {t.image}
                  </div>
                  <div>
                    <p className="text-white font-black uppercase italic tracking-tighter leading-none mb-1">
                      {t.name}
                    </p>
                    <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* Decorative Hover Glint */}
                <div className="absolute bottom-4 right-4 w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-[4] transition-all shadow-[0_0_10px_#3b82f6]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}