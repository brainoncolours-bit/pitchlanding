import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Shield, Zap, Globe, ArrowRight } from 'lucide-react';

export default function UltimateHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax layers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 25]);

  return (
    <section ref={containerRef} className="relative min-h-[110vh] bg-[#020408] overflow-hidden selection:bg-blue-500/30">
      
      {/* --- LAYER 1: CINEMATIC BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        {/* Deep Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        
        {/* Code Stream Effect (Left Side) */}
        <div className="absolute left-0 top-0 bottom-0 w-[30%] bg-gradient-to-r from-blue-500/5 to-transparent pointer-events-none overflow-hidden">
          <div className="text-[10px] font-mono text-blue-500/20 whitespace-nowrap leading-none p-4 select-none">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="mb-1">
                {`function initMatrix() { return 0x${Math.random().toString(16).slice(2, 8)}; }`.repeat(3)}
              </div>
            ))}
          </div>
        </div>

        {/* Floating Orbs & Rings (Referencing watermarked_img_10023162011067032725.png) */}
        <motion.div style={{ y: y1, rotate }} className="absolute -top-20 -right-20 w-[600px] h-[600px] border-[1px] border-blue-500/20 rounded-full" />
        <motion.div style={{ y: y2 }} className="absolute top-[20%] left-[10%] w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_30px_#60a5fa]" />
      </div>

      {/* --- LAYER 2: CONTENT --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Typography & CTA */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.4em]">The Next Evolution</span>
            </motion.div>

            <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase italic mb-10">
              Where Founders <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-200 via-blue-500 to-blue-800 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                Meet Future.
              </span>
            </h1>

            <p className="text-slate-400 text-xl max-w-xl mb-12 leading-relaxed">
              Experience the premier venture ecosystem where high-stakes networking meets cutting-edge capital deployment.
            </p>

            <div className="flex flex-wrap gap-6">
              <button className="group relative px-8 py-4 bg-white rounded-xl overflow-hidden transition-all active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 text-black group-hover:text-white font-black uppercase tracking-tight flex items-center gap-2">
                  Join the Movement <ArrowRight size={20} />
                </span>
              </button>
              
              <button className="px-8 py-4 border border-white/10 rounded-xl text-white font-bold hover:bg-white/5 transition-all">
                Learn More
              </button>
            </div>
          </div>

          {/* Right: 3D Interactive Card (Referencing watermarked_img_10023162011067032725.png) */}
          <div className="lg:col-span-5 relative">
            <TiltCard>
              <div className="relative bg-slate-900/40 backdrop-blur-3xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden">
                {/* Internal Glows */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/30 blur-[60px] rounded-full" />
                
                {/* Header Section */}
                <div className="bg-black/40 rounded-2xl p-6 border border-white/5 mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-blue-500 text-[10px] font-black uppercase tracking-widest">Live Summit</span>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                    </div>
                  </div>
                  <h3 className="text-2xl text-white font-bold">Bangalore Pitch Summit</h3>
                </div>

                {/* Statistics Row */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
                    <p className="text-white/40 text-[10px] font-black uppercase mb-1">Active Pool</p>
                    <p className="text-xl text-white font-bold">42 Investors</p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-5 border border-white/5 flex items-center justify-center">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-gradient-to-tr from-slate-700 to-slate-500" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Primary Button Styling from watermarked_img_10023162011067032725.png */}
                <button className="w-full py-5 bg-gradient-to-b from-blue-500 to-blue-700 text-white font-black uppercase tracking-tighter rounded-2xl shadow-[0_15px_30px_-5px_rgba(37,99,235,0.4)] hover:brightness-110 transition-all">
                  View Live Deck Feed
                </button>
              </div>
            </TiltCard>

            {/* Floating Mini-Card Decals */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-12 bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-xl"
            >
              <Zap className="text-blue-400 mb-2" size={24} />
              <p className="text-white font-bold text-sm">$50M+</p>
              <p className="text-white/40 text-[8px] uppercase font-black">Deployed</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper Component for 3D Tilt Effect
function TiltCard({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative perspective-1000"
    >
      {children}
    </motion.div>
  );
}