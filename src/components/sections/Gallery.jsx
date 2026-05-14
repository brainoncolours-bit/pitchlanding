import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, Cpu, BarChart3, Box, Shield, Zap } from 'lucide-react';

// Sample assets based on your professional portfolio
const assets = [
  {
    id: 'ATC-001',
    title: 'StartUp City Dubai',
    category: 'Infra-Development',
    tags: ['Architecture', 'Urban Tech'],
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1000',
    span: 'md:col-span-2 md:row-span-2',
    status: 'In-Development'
  },
  {
    id: 'PRD-042',
    title: 'Moonbliss Wellness',
    category: 'Product Ecosystem',
    tags: ['Branding', 'Design'],
    img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=600',
    span: 'md:col-span-1 md:row-span-1',
    status: 'Live'
  },
  {
    id: 'WEB-089',
    title: 'Global BFSI Platform',
    category: 'Digital Deployment',
    tags: ['Framer', 'React'],
    img: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=600',
    span: 'md:col-span-1 md:row-span-1',
    status: 'Deployed'
  },
  {
    id: 'FRN-012',
    title: 'Y Not Cafe',
    category: 'Franchise Identity',
    tags: ['Signage', 'NPD'],
    img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000',
    span: 'md:col-span-2 md:row-span-1',
    status: 'Scaling'
  }
];

export default function TacticalGallery() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = ['ALL', 'Infra-Development', 'Product Ecosystem', 'Digital Deployment'];

  return (
    <section className="min-h-screen bg-[#020408] py-24 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* --- HEADER BLOCK --- */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-12">
          <div className="relative">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100px' }}
              className="h-[2px] bg-blue-600 mb-6"
            />
            <h2 className="text-7xl md:text-9xl font-black text-white italic uppercase tracking-tighter leading-[0.8]">
              Tactical <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-200 to-white">
                Archives.
              </span>
            </h2>
          </div>

          {/* --- FILTER INTERFACE --- */}
          <div className="flex flex-wrap gap-2 bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-3xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                  activeFilter === cat 
                  ? 'bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.5)]' 
                  : 'text-white/40 hover:text-white'
                }`}
              >
                {cat.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* --- ASSET GRID --- */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {assets
              .filter(a => activeFilter === 'ALL' || a.category === activeFilter)
              .map((asset, i) => (
                <AssetNode key={asset.id} asset={asset} index={i} />
              ))}
          </AnimatePresence>
        </motion.div>

        {/* --- SYSTEM TELEMETRY --- */}
        <div className="mt-20 pt-12 border-t border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <TelemetryItem icon={<Layers size={16}/>} label="Assets Deployed" val="148+" />
          <TelemetryItem icon={<Zap size={16}/>} label="Operational Speed" val="0.2ms" />
          <TelemetryItem icon={<Shield size={16}/>} label="System Security" val="Verified" />
          <TelemetryItem icon={<Box size={16}/>} label="Current Projects" val="12 Active" />
        </div>
      </div>
    </section>
  );
}

function AssetNode({ asset, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`${asset.span} group relative bg-[#0a0c10] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-blue-500/40 transition-all duration-700`}
    >
      {/* GLOW OVERLAY */}
      <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* ASSET ID TAG */}
      <div className="absolute top-8 left-8 z-30">
        <div className="bg-black/60 backdrop-blur-xl border border-white/10 px-3 py-1 rounded-lg">
          <span className="text-[9px] font-mono text-blue-400 uppercase tracking-widest">{asset.id}</span>
        </div>
      </div>

      {/* STATUS INDICATOR */}
      <div className="absolute top-8 right-8 z-30">
        <div className="flex items-center gap-2 bg-blue-500/10 backdrop-blur-xl border border-blue-500/20 px-3 py-1 rounded-lg">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest">{asset.status}</span>
        </div>
      </div>

      {/* IMAGE LAYER */}
      <div className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110">
        <img src={asset.img} alt={asset.title} className="w-full h-full object-cover" />
      </div>

      {/* CONTENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <h4 className="text-4xl font-black text-white italic uppercase tracking-tighter mb-4 leading-none">{asset.title}</h4>
        <div className="flex flex-wrap gap-2 mb-8">
          {asset.tags.map(tag => (
            <span key={tag} className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em] border border-white/10 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <button className="flex items-center gap-4 text-blue-400 font-black uppercase text-[10px] tracking-widest group/btn">
          View Intel <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}

function TelemetryItem({ icon, label, val }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="text-blue-500">{icon}</div>
        <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em]">{label}</span>
      </div>
      <p className="text-3xl font-black text-white italic uppercase tracking-tighter">{val}</p>
    </div>
  );
}