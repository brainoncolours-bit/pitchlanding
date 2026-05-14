import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Users, Rocket, Coins } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="final-cta" className="relative py-32 bg-[#020408] overflow-hidden">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_0.5px,transparent_0.5px),linear-gradient(to_bottom,#1e293b_0.5px,transparent_0.5px)] bg-[size:40px_40px] opacity-20" />
        {/* Massive Bottom Glow */}
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[600px] bg-blue-600/10 blur-[140px] rounded-[100%]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8"
        >
          Limited Availability
        </motion.div>

        {/* Headline with Neo-Brutalist Italic Style */}
        <h2 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase italic">
          Stop Waiting <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700 drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">
            For Permission.
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-slate-400 mb-16 max-w-2xl mx-auto leading-tight font-medium">
          The future is built by those bold enough to take the first step. <br />
          <span className="text-white">Your spot is waiting in the room.</span>
        </p>

        {/* ACTION BUTTONS: High-Contrast Style */}
        <a href="https://forms.gle/ZHmQLbU9zpAiWVmS6" target="_blank" rel="noopener noreferrer">
        <div className="flex flex-wrap gap-6 justify-center mb-24">
          
          <button className="group relative px-10 py-5 bg-white rounded-2xl transition-all hover:scale-105 active:scale-95">
            <span className="relative z-10 text-black font-black uppercase tracking-tight flex items-center gap-2">
              Join as Founder <Rocket size={20} className="text-blue-600" />
            </span>
            <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <button className="group px-10 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-tight flex items-center gap-2 hover:bg-blue-500 transition-all shadow-[0_20px_40px_-10px_rgba(37,99,235,0.5)]">
            Join as Investor <ArrowUpRight size={20} />
          </button>
          
          <button className="px-10 py-5 border border-white/10 text-white/60 rounded-2xl font-black uppercase tracking-tight hover:text-white hover:border-white/40 transition-all">
            Become a Mentor
          </button>
        </div>
          </a>


        {/* TRUST INDICATORS: Glassmorphism Card */}
        <div className="relative group">
          {/* Decorative Glow behind card */}
          <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-[3rem] -z-10 transition-all group-hover:bg-blue-500/10" />
          
          <div className="bg-white/[0.03] backdrop-blur-2xl rounded-[3rem] p-12 border border-white/10 shadow-2xl">
            <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-10">Global Impact Stats</p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-white/5">
              {[
                { label: 'Founders', value: '500+', icon: <Users size={16} /> },
                { label: 'Investors', value: '150+', icon: <Coins size={16} /> },
                { label: 'Capital Deployed', value: '$50M+', icon: <Rocket size={16} /> },
                { label: 'Cities', value: '2', icon: <Globe size={16} /> },
              ].map((stat, i) => (
                <div key={i} className="px-4 text-center lg:text-left flex flex-col items-center lg:items-start">
                  <div className="flex items-center gap-2 text-blue-500 mb-2">
                    {stat.icon}
                    <span className="text-[10px] font-black uppercase tracking-widest">{stat.label}</span>
                  </div>
                  <p className="text-4xl font-black text-white tracking-tighter">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Ensure you have Globe from lucide-react in your imports
import { Globe } from 'lucide-react';