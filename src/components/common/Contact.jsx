import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Terminal, Lock, Cpu, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[#020408] overflow-hidden">
      
      {/* --- BACKGROUND HUD OVERLAY --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:80px_80px] opacity-10" />
        {/* Deep blue orb referencing watermarked_img_10023162011067032725.png */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: THE COMMAND MODULE (FORM) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 relative group"
          >
            {/* Multi-layered border effect */}
            <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative h-full bg-[#080808]/80 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 md:p-14 shadow-2xl">
              <div className="flex items-center gap-3 mb-10">
                <Terminal className="text-blue-500" size={18} />
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em]">Establishing Connection...</span>
              </div>

              <h2 className="text-6xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-[0.85] mb-12">
                Let's <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Sync Up.</span>
              </h2>

              <form className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="relative group/input">
                    <label className="absolute -top-6 left-0 text-[8px] font-black text-blue-500 uppercase tracking-widest">Operator Name</label>
                    <input type="text" placeholder="ENTER NAME" className="w-full bg-transparent border-b border-white/10 py-4 text-white font-bold tracking-widest focus:outline-none focus:border-blue-500 transition-all placeholder:text-white/5 uppercase text-xs" />
                  </div>
                  <div className="relative group/input">
                    <label className="absolute -top-6 left-0 text-[8px] font-black text-blue-500 uppercase tracking-widest">Digital Protocol (Email)</label>
                    <input type="email" placeholder="ENTER EMAIL" className="w-full bg-transparent border-b border-white/10 py-4 text-white font-bold tracking-widest focus:outline-none focus:border-blue-500 transition-all placeholder:text-white/5 uppercase text-xs" />
                  </div>
                </div>

                <div className="relative group/input">
                  <label className="absolute -top-6 left-0 text-[8px] font-black text-blue-500 uppercase tracking-widest">The Directive (Message)</label>
                  <textarea rows="4" placeholder="BRIEF YOUR VISION HERE..." className="w-full bg-white/5 border border-white/5 rounded-2xl p-6 text-white font-bold focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-white/5 uppercase text-xs resize-none" />
                </div>

                <button className="relative group w-full overflow-hidden rounded-2xl py-6 bg-white transition-all active:scale-95">
                  <div className="absolute inset-0 bg-blue-600 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
                  <span className="relative z-10 flex items-center justify-center gap-4 text-black group-hover:text-white font-black uppercase tracking-tighter text-xl italic transition-colors">
                    Execute Transmission <Send size={20} />
                  </span>
                </button>
              </form>
            </div>
          </motion.div>

          {/* RIGHT: TACTICAL ASSETS & MAP */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {/* Map Module */}
            <div className="relative flex-1 bg-slate-900 rounded-[3rem] border border-white/10 overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 grayscale invert contrast-125 brightness-50 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0267385806684!2d77.6412!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sIndiranagar%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1715700000000!5m2!1sen!2sin" 
                  className="w-full h-full border-0"
                  allowFullScreen="" 
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-3xl flex justify-between items-center">
                <div>
                  <p className="text-[8px] font-black text-blue-500 uppercase tracking-widest mb-1">Base HQ</p>
                  <p className="text-white font-bold text-sm italic uppercase tracking-tighter">Indiranagar, Bangalore</p>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                  <MapPin size={18} />
                </div>
              </div>
            </div>

            {/* Support Comms Module */}
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 flex flex-col gap-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[8px] font-black text-white/30 uppercase tracking-widest">General Comms</p>
                  <p className="text-white font-bold text-sm tracking-tight group-hover:text-blue-400 transition-colors">hello@pitchstudio.in</p>
                </div>
                <ArrowUpRight size={16} className="ml-auto text-white/20 group-hover:text-blue-500 transition-all" />
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                  <Cpu size={20} />
                </div>
                <div>
                  <p className="text-[8px] font-black text-white/30 uppercase tracking-widest">Founder Support</p>
                  <p className="text-white font-bold text-sm tracking-tight group-hover:text-blue-400 transition-colors">support.ps.hq</p>
                </div>
                <Lock size={16} className="ml-auto text-white/20" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}