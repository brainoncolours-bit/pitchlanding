import { motion } from 'framer-motion'

export default function Problem() {
  const problems = [
    {
      title: 'Access Gap',
      description: 'Founders lack direct access to serious investors and mentors',
      icon: '🚪',
      color: 'from-blue-500/20'
    },
    {
      title: 'Information Asymmetry',
      description: 'Unclear processes and hidden expectations in funding',
      icon: '🔍',
      color: 'from-blue-500/10'
    },
    {
      title: 'Geographic Isolation',
      description: 'Talent scattered across cities with no unified ecosystem',
      icon: '🌍',
      color: 'from-blue-500/20'
    },
    {
      title: 'Cold Start Problem',
      description: 'First-time founders have no track record or network to leverage',
      icon: '❄️',
      color: 'from-blue-500/10'
    },
    {
      title: 'Quality Mentorship',
      description: 'Hard to find mentors who understand your specific challenges',
      icon: '🎓',
      color: 'from-blue-500/20'
    },
    {
      title: 'Speed & Timing',
      description: 'Too slow to connect founders with opportunities at the right moment',
      icon: '⚡',
      color: 'from-blue-500/10'
    }
  ]

  return (
    <section
      id="problem"
      className="py-32 bg-[#020202] relative overflow-hidden"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full" />
        {/* Subtle Scanlines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] pointer-events-none opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-blue-500" />
            <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px]">System Diagnostics</span>
            <div className="h-px w-8 bg-blue-500" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-[1000] text-white uppercase italic leading-none tracking-tighter"
          >
            THE <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-600">ACCESS GAP</span> <br />
            IS REAL
          </motion.h2>
          
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-white/40 text-lg md:text-xl max-w-2xl mt-8 font-medium italic"
          >
            Founders face unprecedented obstacles in accessing capital and guidance. These are the barriers we're breaking down.
          </motion.p>
        </div>

        {/* PROBLEM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-[2rem]">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#050505] p-10 hover:bg-zinc-950 transition-all duration-500 overflow-hidden"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 bg-blue-500 rotate-45 shadow-[0_0_10px_#3b82f6]" />
              </div>

              {/* Gradient Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${problem.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                   <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-500">
                     {problem.icon}
                   </span>
                   <span className="text-[10px] font-black text-white/20 group-hover:text-blue-500/50 font-mono tracking-tighter">
                     0{index + 1} // ERR_CODE
                   </span>
                </div>

                <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4 group-hover:text-blue-400 transition-colors">
                  {problem.title}
                </h3>
                
                <p className="text-white/40 text-sm font-medium leading-relaxed group-hover:text-white/70 transition-colors">
                  {problem.description}
                </p>

                {/* Tactical Line Decor */}
                <div className="mt-8 w-8 h-[2px] bg-white/10 group-hover:w-full group-hover:bg-blue-500 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}