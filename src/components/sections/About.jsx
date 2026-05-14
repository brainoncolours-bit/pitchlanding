import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const containerRef = useRef(null);
  
  // Subtle parallax for the background decorative elements
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yPos = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-32 bg-[#020202] relative overflow-hidden selection:bg-blue-500 selection:text-white"
    >
      {/* 1. BACKGROUND ACCENTS */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <motion.div 
          style={{ y: yPos }}
          className="absolute top-1/4 -right-20 w-96 h-96 border border-blue-500/20 rounded-full"
        />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT: CONTENT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
               <div className="h-[1px] w-12 bg-blue-500" />
               <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs">The Mission</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-[1000] text-white mb-10 uppercase italic leading-[0.9] tracking-tighter">
              A <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">Movement</span>, <br />
              Not a Platform.
            </h2>

            <div className="space-y-6 text-white/50 text-lg md:text-xl font-medium leading-tight max-w-xl">
              <p>
                Pitch Studio was born from a simple observation: talented founders struggle not because their ideas aren't good, but because they lack access to the right people at the right time.
              </p>
              <p>
                We created a community where the barriers dissolve. Where a first-time founder in Kerala can pitch to seasoned investors. Where every voice matters equally.
              </p>
              <p className="text-white italic">
                "This isn't just networking. This is a movement to democratize access, celebrate ambition, and build India's next generation of category-defining companies."
              </p>
            </div>

            <div className="mt-12 flex gap-8">
               <div>
                  <p className="text-3xl font-black text-white">2024</p>
                  <p className="text-[10px] text-blue-500 uppercase font-bold tracking-widest">Est. Year</p>
               </div>
               <div className="w-px h-12 bg-white/10" />
               <div>
                  <p className="text-3xl font-black text-white">HQ</p>
                  <p className="text-[10px] text-blue-500 uppercase font-bold tracking-widest">Bangalore / Kerala</p>
               </div>
            </div>
          </motion.div>

     {/* RIGHT: FOUNDER "TACTICAL" CARD */}
      {/* RIGHT: FOUNDER "TACTICAL" CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Outer Glow */}
            <div className="absolute inset-0 bg-blue-600/10 blur-[80px] rounded-full group-hover:bg-blue-600/20 transition-colors duration-700" />

            <div className="relative z-10 bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-1 rounded-[2.5rem] overflow-hidden">
               {/* Inner Card Frame */}
               <div className="bg-[#080808] rounded-[2.3rem] p-10 border border-white/5">
                  
                  {/* Profile Header with Larger Image */}
                  <div className="relative mb-10 inline-block">
                    <div className="relative w-48 h-56 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(37,99,235,0.25)]">
                       {/* The Founder Image */}
                       <img 
                        src="src/assets/founder.jpeg" 
                        alt="Delvin Danny"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                       />
                       {/* Tactical Overlay Gradient */}
                       <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-50" />
                    </div>

                    {/* Floating Status Tag */}
                    <div className="absolute -bottom-3 -right-10 bg-blue-600 text-white text-[10px] font-black px-5 py-2 uppercase tracking-tighter skew-x-12 shadow-xl">
                       Founder / Visionary
                    </div>
                  </div>

                  <div className="relative">
                    <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-2">
                      Delvin Danny
                    </h3>
                    <div className="flex items-center gap-2 mb-8">
                      <div className="w-12 h-1 bg-blue-500" />
                      <div className="w-2 h-1 bg-blue-500/30" />
                      <div className="w-1 h-1 bg-blue-500/10" />
                    </div>
                  </div>

                  <p className="text-white/60 text-lg font-medium leading-snug mb-10 italic">
                    "Pitch Studio is my life's work. Every founder who finds their investor, every mentor who discovers a unicorn – that's the movement we're building together."
                  </p>

                  <div className="grid grid-cols-1 gap-4">
                    <a href="https://www.linkedin.com/in/delvindanny/" target="_blank" rel="noopener noreferrer">
                     <button className="py-4 bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 w-full ">
                        LinkedIn
                      </button>
                    </a>
                  </div>
               </div>
            </div>

            {/* Corner Decorative Brackets */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-blue-500/50" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-blue-500/50" />
            
            {/* "Data" decorative text */}
            <div className="absolute top-1/2 -right-12 origin-left rotate-90 text-[8px] font-mono uppercase tracking-[0.5em] text-white/20 whitespace-nowrap">
              System Entry: Founder_D.Danny // 2024
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}