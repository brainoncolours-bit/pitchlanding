import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#020202] pt-32 pb-10 relative overflow-hidden border-t border-white/5">
      {/* 1. THE MASSIVE CENTER BRANDING */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <h2 className="text-[clamp(4rem,15vw,14rem)] font-[1000] text-white/5 leading-none uppercase italic tracking-tighter select-none">
            PITCH<span className="text-blue-500/10">STUDIO</span>
          </h2>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-20">
          
          {/* Brand & Mission */}
          <div className="md:col-span-1">
            <div className="text-2xl font-black text-white italic tracking-tighter mb-6 uppercase">
              PITCH<span className="text-blue-600">.</span>
            </div>
            <p className="text-white/30 text-xs font-medium leading-relaxed uppercase tracking-[0.2em] max-w-[200px]">
              A movement, not a platform. Empowering India's founders since 2024.
            </p>
          </div>

          {/* Navigation Terminal */}
          <div>
            <h4 className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] mb-8 font-mono">// NAVIGATION</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Problem', 'How it Works'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/50 hover:text-white font-bold uppercase italic text-sm transition-all hover:pl-2">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem Resources */}
         

          {/* Social Command */}
          <div>
            <h4 className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] mb-8 font-mono">// CONNECT</h4>
            <div className="flex flex-col gap-4">
             {[ 'LinkedIn', 'Instagram'].map((social) => {
  const links = {
    // Twitter: "https://twitter.com/delvindanny",
    LinkedIn: "https://in.linkedin.com/in/delvindanny",
    Instagram: "https://www.instagram.com/pitchstudio_byique?igsh=bDl1Mm1rZmVrNWhz"
    
  };

  return (
    <a 
      key={social} 
      href={links[social]} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-white font-black uppercase italic tracking-tighter text-lg hover:text-blue-500 transition-colors"
    >
      {social}
    </a>
  );
})}
            </div>
          </div>
        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="border-t border-white/5 pt-10">
          <div className="flex flex-col md:grid md:grid-cols-3 gap-8 items-center">
            
            {/* System Specs (Legal) */}
            <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest text-white/20">
              <a href="#" className="hover:text-blue-500 transition-colors">Privacy</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Terms</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Cookies</a>
            </div>

            {/* Copyright */}
            <div className="text-center">
               <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">
                 © {currentYear} ALL_RIGHTS_RESERVED
               </p>
            </div>

            {/* Founder Credit Terminal */}
            <div className="text-center md:text-right">
              {/* <p className="text-[10px] text-white/40 font-black uppercase tracking-widest leading-none">
                Chief Architect: <span className="text-white">Delvin Danny</span>
              </p> */}
              {/* <p className="text-[9px] text-blue-500 font-mono mt-1 uppercase">Building the future of networking</p> */}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent shadow-[0_0_20px_#2563eb]" />
    </footer>
  )
}