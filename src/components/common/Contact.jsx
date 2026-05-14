import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Fingerprint, Activity, ShieldCheck } from 'lucide-react';

export default function TacticalContact() {
  // 1. Setup Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // 2. Handle Gmail Redirection
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const recipient = "support@thepitchstudio.co";
    const subject = encodeURIComponent(`MISSION DIRECTIVE: ${formData.name}`);
    const body = encodeURIComponent(
      `------------------------------------------\n` +
      `MISSION ORIGIN DETAILS\n` +
      `------------------------------------------\n` +
      `Label: ${formData.name}\n` +
      `Node: ${formData.email}\n\n` +
      `DIRECTIVE:\n${formData.message}\n` +
      `------------------------------------------`
    );
    
    // Gmail-specific compose URL for a new tab
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
    
    window.open(gmailUrl, '_blank');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-32 bg-[#010204] overflow-hidden selection:bg-blue-600">
      
      {/* --- KINETIC MESH BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute -bottom-24 -left-24 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          
          {/* 1. THE STATUS SIDEBAR */}
          <div className="hidden lg:flex w-16 flex-col justify-between border-l border-white/5 py-4 pl-4">
            <span className="text-[10px] font-black text-white/20 uppercase [writing-mode:vertical-lr] tracking-[1em] whitespace-nowrap">
              ST_CRYPTO_LINK // ESTABLISHED
            </span>
            <div className="flex flex-col gap-4 items-center">
              <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
              <div className="w-1 h-1 rounded-full bg-blue-500/30" />
              <div className="w-1 h-1 rounded-full bg-blue-500/30" />
            </div>
          </div>

          {/* 2. THE MAIN COMMAND MODULE */}
          <div className="flex-1 grid lg:grid-cols-12 gap-6">
            
            {/* LEFT: FORM INTERFACE */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-[#05070a] border border-white/5 rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-16">
                <div className="flex items-center gap-3">
                  <Fingerprint className="text-blue-500" size={20} />
                  <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em]">Initialize Handshake</span>
                </div>
                <div className="px-3 py-1 border border-white/10 rounded-lg bg-white/5">
                  <span className="text-[9px] font-mono text-white/40 uppercase">Session_ID: 2905-26</span>
                </div>
              </div>

              <h2 className="text-7xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-[0.8] mb-16">
                Direct <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-300 via-blue-500 to-blue-900">Uplink.</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="relative group/field">
                    <label className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-4 block italic">Origin Label</label>
                    <input 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      type="text" 
                      placeholder="NAME_REQUIRED" 
                      className="w-full bg-transparent border-b border-white/10 py-4 text-white font-bold tracking-[0.2em] focus:outline-none focus:border-blue-500 transition-all placeholder:text-white/5 uppercase text-xs" 
                    />
                  </div>
                  <div className="relative group/field">
                    <label className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-4 block italic">Digital Node</label>
                    <input 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      placeholder="EMAIL_REQUIRED" 
                      className="w-full bg-transparent border-b border-white/10 py-4 text-white font-bold tracking-[0.2em] focus:outline-none focus:border-blue-500 transition-all placeholder:text-white/5 uppercase text-xs" 
                    />
                  </div>
                </div>

                <div className="relative group/field pt-4">
                  <label className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-4 block italic">Mission Directive</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="4" 
                    placeholder="BRIEF YOUR VISION..." 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white font-bold focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-white/5 uppercase text-xs resize-none" 
                  />
                </div>

                <button 
                  type="submit"
                  className="group relative w-full h-20 bg-blue-600 rounded-2xl overflow-hidden shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] active:scale-95 transition-all"
                >
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 mix-blend-overlay" />
                  <span className="relative z-10 flex items-center justify-center gap-6 text-white font-black uppercase tracking-tighter text-2xl italic">
                    Execute Protocol <Send size={24} />
                  </span>
                </button>
              </form>
            </motion.div>

            {/* RIGHT: TACTICAL INFO */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative flex-1 bg-slate-900 rounded-[2.5rem] border border-white/5 overflow-hidden group shadow-2xl"
              >
                {/* Updated Map: Startup Park By Ique Ventures */}
                <div className="absolute inset-0 grayscale contrast-150 brightness-50 opacity-40 group-hover:opacity-60 transition-all duration-700">
                  <iframe 
                    title="Startup Park HQ"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7799881108012!2d77.6201801!3d12.9218575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150058b75f01%3A0xd3b7950ec31e6322!2sStartup%20Park%20By%20Ique%20Ventures!5e0!3m2!1sen!2sin!4v1778795016595!5m2!1sen!2sin" 
                    className="w-full h-full border-0"
                    allowFullScreen="" 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#010204] via-transparent to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                  <div>
                    <p className="text-[8px] font-black text-blue-500 uppercase tracking-widest mb-1">Base_Alpha</p>
                    <h4 className="text-white font-black text-2xl italic uppercase tracking-tighter">Startup Park, BNG</h4>
                  </div>
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                    <MapPin size={22} />
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/5 rounded-3xl p-6 hover:bg-white/10 transition-all cursor-pointer group">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Activity size={18} />
                  </div>
                  <p className="text-[8px] font-black text-white/30 uppercase tracking-widest mb-1">Heartbeat</p>
                  <p className="text-white font-black italic uppercase tracking-tighter text-sm">System_Online</p>
                </div>

                <div className="bg-white/5 border border-white/5 rounded-3xl p-6 hover:bg-white/10 transition-all cursor-pointer group">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ShieldCheck size={18} />
                  </div>
                  <p className="text-[8px] font-black text-white/30 uppercase tracking-widest mb-1">Security</p>
                  <p className="text-white font-black italic uppercase tracking-tighter text-sm">Peer_Verified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}