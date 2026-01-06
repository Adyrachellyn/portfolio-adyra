"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

// Memanggil komponen Map secara dinamis agar tidak error window (SSR)
const Map = dynamic(() => import("@/components/Map"), { 
  ssr: false,
  loading: () => <div className="h-full w-full bg-slate-200 animate-pulse rounded-[2rem] md:rounded-[2.5rem]" />
});

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const featuredProjects = [
    {
      title: "LYPS Ed-Tech",
      role: "Founder & CEO",
      desc: "Empowering young girls in Indonesia's 3T areas through accessible digital education.",
      tech: ["Next.js", "Social Impact"],
      color: "bg-white"
    },
    {
      title: "255 Digital Media",
      role: "Founder & President",
      desc: "Student-run platform producing 20+ podcast episodes and 50+ digital content pieces.",
      tech: ["Content Strategy", "Digital Branding"],
      color: "bg-[#efede7]"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f0e8] text-[#1a1a1a] selection:bg-[#c8b9a3] font-sans pb-20">
      
      {/* NAVIGATION - Responsif untuk Desktop & Mobile */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 py-6 md:px-12 flex justify-between items-center pointer-events-none">
        <div className="text-2xl md:text-3xl font-black tracking-tighter pointer-events-auto cursor-default bg-gradient-to-r from-[#ff4d94] via-[#ff9966] to-[#ffcc00] bg-clip-text text-transparent">
          dyr
        </div>
        <nav className="hidden md:flex bg-white/70 backdrop-blur-md border border-white/20 px-8 py-3 rounded-full shadow-sm pointer-events-auto gap-8 text-sm font-semibold text-gray-400">
          <Link href="/" className="text-black">Home</Link>
          <Link href="/about" className="hover:text-black transition-colors">About</Link>
          <Link href="/projects" className="hover:text-black transition-colors">Projects</Link>
        </nav>
        <div className="text-[10px] md:text-sm font-bold pointer-events-auto hover:underline cursor-pointer bg-white md:bg-transparent px-4 py-2 rounded-full md:p-0 shadow-sm md:shadow-none">
          Contact
        </div>
      </header>

      <motion.main variants={container} initial="hidden" animate="show" className="max-w-6xl mx-auto px-4 md:px-6 pt-24 md:pt-32">
        
        {/* BENTO GRID - Responsif: 1 Kolom di HP, 4 Kolom di Laptop */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto md:auto-rows-[180px] mb-20 md:mb-32">
          
          {/* CARD 1: BIO SINGKAT */}
          <motion.div variants={item} className="md:col-span-2 md:row-span-2 bg-[#efede7] rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-end relative overflow-hidden border border-gray-200/50 min-h-[320px] md:min-h-0">
            <div className="absolute top-8 left-8 md:top-10 md:left-10 w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center text-3xl md:text-4xl shadow-sm border-4 border-white">👩‍💻</div>
            <p className="text-gray-400 font-bold text-[8px] md:text-[10px] uppercase tracking-[0.2em] mb-2 md:mb-4">Information Systems @ UI</p>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 md:mb-4 leading-tight">
              I'm <span className="text-slate-900 border-b-4 border-[#c8b9a3]">Adyra Rachellyn</span>, building tech for social impact.
            </h1>
            <p className="text-slate-500 font-medium text-xs md:text-sm italic">Founder of LYPS Ed-Tech.</p>
          </motion.div>

          {/* CARD 2: INTERACTIVE MAP (BEKASI) */}
          <motion.div variants={item} className="h-[250px] md:h-auto bg-white rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden shadow-sm border border-gray-100 group">
            <div className="absolute inset-0 z-0">
              <Map />
            </div>
            <div className="absolute bottom-4 left-6 md:bottom-6 md:left-8 z-10 pointer-events-none">
              <p className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold mb-1 text-slate-800 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md w-fit">Based in</p>
              <p className="font-bold text-base md:text-lg italic text-slate-900 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md w-fit">Bekasi, ID 🇮🇩</p>
            </div>
          </motion.div>

          {/* CARD 3: RESUMÉ */}
          <motion.div variants={item} className="bg-[#2d2a26] rounded-[2rem] md:rounded-[2.5rem] p-8 text-white flex flex-col justify-between shadow-lg min-h-[160px] md:min-h-0 cursor-pointer" onClick={() => window.open('https://drive.google.com/open?id=1hYvb7WlVthoA3fWrO32Xtxfb-jMArW3V', '_blank')}>
            <div className="flex justify-between items-center text-white/40"><span className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold">Resumé</span><span className="text-xs">↗</span></div>
            <p className="text-base md:text-lg font-bold">Founder of LYPS & 255 Media Platform.</p>
          </motion.div>

          {/* CARD 4: STATS */}
          <motion.div variants={item} className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 border border-gray-100 flex flex-col justify-center items-center text-center">
            <p className="text-3xl md:text-4xl font-black text-slate-800">3000+</p>
            <p className="text-[8px] md:text-[9px] uppercase tracking-widest font-bold text-gray-400">Attendees Managed</p>
          </motion.div>

          {/* CARD 5: EDUCATION */}
          <motion.div variants={item} className="bg-[#efede7] rounded-[2rem] md:rounded-[2.5rem] p-8 border border-gray-100 flex flex-col justify-between min-h-[160px] md:min-h-0">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-slate-800">🎓 Education</span>
            <div>
              <p className="text-base md:text-lg font-extrabold text-slate-900 leading-tight">Universitas Indonesia</p>
              <p className="text-[8px] md:text-[10px] font-bold text-[#c8b9a3] uppercase tracking-wider">Information Systems</p>
            </div>
          </motion.div>
        </div>

        {/* FEATURED PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-32">
          <div className="flex justify-between items-end mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-800">Featured Work<span className="text-[#c8b9a3]">.</span></h2>
            <Link href="/projects" className="text-[10px] md:text-sm font-bold text-[#c8b9a3] hover:underline transition-all">See more &gt;</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((proj, index) => (
              <motion.div key={index} variants={item} whileHover={{ y: -8 }}
                className={`p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 min-h-[280px] md:min-h-[380px] flex flex-col justify-between shadow-sm cursor-pointer ${proj.color}`}
              >
                <div>
                  <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest mb-3 opacity-60">{proj.role}</p>
                  <h4 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">{proj.title}</h4>
                  <p className="text-xs md:text-sm leading-relaxed opacity-70 mb-8">{proj.desc}</p> 
                </div>
                <div className="flex gap-2"> 
                  {proj.tech.map((t, i) => ( 
                    <span key={i} className="text-[8px] md:text-[9px] px-3 py-1 rounded-full font-bold border border-current opacity-40">{t}</span> 
                  ))} 
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </motion.main>
      
      {/* FOOTER SEDERHANA */}
      <footer className="max-w-6xl mx-auto px-4 md:px-6 mt-20 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400">
        <p>© 2026 Adyra Rachellyn. All rights reserved.</p>
        <p>Built with Next.js & Framer Motion</p>
      </footer>
    </div>
  );
}