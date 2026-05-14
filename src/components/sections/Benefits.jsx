import { motion } from 'framer-motion'

export default function Benefits() {
  const founderBenefits = [
    { title: 'Direct Access', desc: 'Connect with 150+ active investors without intermediaries' },
    { title: 'Expert Mentorship', desc: "Learn from founders who've been there and succeeded" },
    { title: 'Safe Pitch Arena', desc: 'Practice and refine your pitch with supportive feedback' },
    { title: 'Community Support', desc: 'Share wins and growth with 500+ peers' },
    { title: 'Visibility', desc: 'Get discovered by the ecosystem on a level playing field' },
  ]

  const investorBenefits = [
    { title: 'Deal Flow', desc: 'Access 500+ pre-vetted founders actively raising capital' },
    { title: 'Quality Founders', desc: 'Curated cohorts of ambitious builders with traction' },
    { title: 'Network Effect', desc: 'Build your brand as a thought leader and mentor' },
    { title: 'Diversified Portfolio', desc: 'Find opportunities across sectors and geographies' },
    { title: 'Community Building', desc: 'Invest in ecosystems, not just companies' },
  ]

  return (
    <section id="benefits" className="py-32 bg-[#020202] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-24">
          <h2 className="text-6xl md:text-8xl font-[1000] text-white uppercase italic tracking-tighter leading-none text-center">
            BUILT FOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-200 to-white">
              EVERYONE.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
          
          {/* LEFT: FOUNDERS (Electric Blue) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative lg:pr-16 lg:border-r border-white/10 group"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                <span className="text-3xl">👨‍💼</span>
              </div>
              <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter">For Founders</h3>
            </div>

            <ul className="space-y-8">
              {founderBenefits.map((item, i) => (
                <li key={i} className="flex gap-6 group/item">
                  <span className="text-blue-500 font-mono text-xl font-black group-hover/item:translate-x-2 transition-transform">→</span>
                  <div>
                    <p className="text-xl font-bold text-white uppercase italic tracking-tight">{item.title}</p>
                    <p className="text-white/40 font-medium leading-snug">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
              <a href="https://forms.gle/ZHmQLbU9zpAiWVmS6" target="_blank" rel="noopener noreferrer">
                <button className="mt-12 w-full py-5 bg-blue-600 text-white font-black uppercase tracking-widest rounded-xl hover:bg-blue-500 transition-all shadow-[0_20px_40px_-10px_rgba(37,99,235,0.3)]">
                  Start as Founder
                </button>
              </a>
          </motion.div>

          {/* RIGHT: INVESTORS (White/Monochrome) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative lg:pl-16 mt-12 lg:mt-0"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter">For Investors</h3>
            </div>

            <ul className="space-y-8">
              {investorBenefits.map((item, i) => (
                <li key={i} className="flex gap-6 group/item">
                  <span className="text-white/60 font-mono text-xl font-black group-hover/item:translate-x-2 transition-transform">→</span>
                  <div>
                    <p className="text-xl font-bold text-white uppercase italic tracking-tight">{item.title}</p>
                    <p className="text-white/40 font-medium leading-snug">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
              <a href="
              https://forms.gle/ZHmQLbU9zpAiWVmS6" target="_blank" rel="noopener noreferrer">
                <button className="mt-12 w-full py-5 bg-white text-black font-black uppercase tracking-widest rounded-xl hover:bg-zinc-200 transition-all shadow-[0_20px_40px_-10px_rgba(255,255,255,0.1)]">
                  Join as Investor
                </button>
              </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}