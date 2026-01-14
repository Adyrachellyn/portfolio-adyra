"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), { 
  ssr: false,
  loading: () => <div className="h-full w-full bg-gray-200 animate-pulse rounded-[2rem]" />
});

export default function Home() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const certs = [
    { id: 1, name: "Data Science", detail: "Advanced Analytics & Python" },
    { id: 2, name: "Dart & Flutter", detail: "Mobile App Development" },
    { id: 3, name: "Swift Programming", detail: "iOS Development Specialist" },
    { id: 4, name: "UI/UX Design", detail: "Visual & User Research" }
  ];

  const featuredProjects = [
    {
      title: "LYPS Ed-Tech",
      role: "Founder & CEO",
      desc: "Empowering young girls in Indonesia's 3T areas through accessible digital education.",
      tech: ["Next.js", "Impact"],
      color: "bg-white"
    },
    {
      title: "255 Digital Media",
      role: "Founder & President",
      desc: "Student-run platform producing 20+ podcast episodes and digital content.",
      tech: ["Branding", "Strategy"],
      color: "bg-[#efede7]"
    }
  ];

  return (
    <motion.main 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto px-4 md:px-6 pt-32 pb-20"
    >
      {/* BENTO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto md:auto-rows-[180px] mb-24 text-slate-900">
        
        {/* 1. Profile Box (2x2) + SOCIALS */}
        <div className="md:col-span-2 md:row-span-2 bg-[#efede7] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden border border-black/5 shadow-sm">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center text-3xl md:text-4xl shadow-sm border-4 border-white mb-4">👩‍💻</div>
          
          <div>
            <p className="text-[#c8b9a3] font-bold text-[10px] uppercase tracking-[0.2em] mb-4 text-slate-800">Information Systems @ UI</p>
            <h1 className="text-2xl md:text-4xl font-bold tracking-tighter mb-2 leading-tight text-slate-900">
              I'm <span className="text-slate-900 border-b-4 border-[#c8b9a3]">Adyra Rachellyn</span>, building tech for social impact.
            </h1>
            <p className="text-slate-500 font-medium italic text-xs md:text-sm mb-6">Founder of LYPS Ed-Tech.</p>
            
            {/* CONTACT LINKS */}
            <div className="flex gap-4 md:gap-6 border-t border-black/10 pt-6">
              <a href="https://linkedin.com/in/adyrarachellyn" target="_blank" className="text-[10px] font-black uppercase tracking-widest hover:text-orange-600 transition-colors">LinkedIn</a>
              <a href="https://instagram.com/adyrarachellyn" target="_blank" className="text-[10px] font-black uppercase tracking-widest hover:text-orange-600 transition-colors">Instagram</a>
              <a href="https://github.com/Adyrachellyn" target="_blank" className="text-[10px] font-black uppercase tracking-widest hover:text-orange-600 transition-colors">GitHub</a>
            </div>
          </div>
        </div>

        {/* 2. Map Box (1x1) */}
        <div className="h-[250px] md:h-auto bg-white rounded-[2.5rem] relative overflow-hidden border border-black/5 shadow-sm group">
          <Map />
          <div className="absolute bottom-6 left-6 z-10 bg-white/90 backdrop-blur-md p-3 px-4 rounded-2xl border border-black/5 shadow-sm pointer-events-none">
            <p className="text-[9px] font-black text-[#c8b9a3] uppercase tracking-widest">Based in</p>
            <p className="font-bold text-sm text-slate-800">Bekasi, ID 🇮🇩</p>
          </div>
        </div>

        {/* 3. Interactive Certificates (1x2) - WARNA BARU */}
        <div className="md:col-span-1 md:row-span-2 bg-white rounded-[2.5rem] p-8 text-slate-900 flex flex-col shadow-sm border border-black/5">
          <p className="text-[10px] font-black uppercase tracking-widest text-[#c8b9a3] mb-6 text-center">Certifications</p>
          <div className="flex flex-col gap-2">
            {certs.map((cert, index) => (
              <motion.div
                key={cert.id}
                onClick={() => setSelectedCert(selectedCert === index ? null : index)}
                whileTap={{ scale: 0.97 }}
                // PERUBAHAN DISINI: Menggunakan warna coklat tua (#5a4d3a) saat aktif
                className={`cursor-pointer p-3 rounded-2xl border transition-all duration-300 ${
                  selectedCert === index ? "bg-[#5a4d3a] text-white border-[#5a4d3a]" : "bg-[#f5f0e8] border-transparent hover:border-[#c8b9a3]"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold tracking-tight">{cert.name}</span>
                </div>
                <AnimatePresence>
                  {selectedCert === index && (
                    <motion.p 
                      initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 0.8 }} exit={{ height: 0, opacity: 0 }}
                      className="text-[9px] mt-2 leading-relaxed font-medium"
                    >
                      {cert.detail}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4. Education Box (1x1) */}
        <div className="bg-[#efede7] rounded-[2.5rem] p-8 border border-black/5 flex flex-col justify-between shadow-sm">
          <span className="text-2xl">🎓</span>
          <div>
            <p className="text-base font-black text-slate-900 leading-tight">Univ. Indonesia</p>
            <p className="text-[10px] font-bold text-[#c8b9a3] uppercase tracking-wider">Information Systems</p>
          </div>
        </div>

        {/* 5. Resume Box (2x1) */}
        <a 
          href="/CV_Adyra_Rachellyn.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-2 bg-[#2d2a26] rounded-[2.5rem] p-8 text-white flex flex-col justify-between shadow-lg shadow-orange-500/10 cursor-pointer hover:scale-[1.01] transition-transform"
        >
          <div className="flex justify-between items-center text-white/30">
            <span className="text-[10px] font-black uppercase tracking-widest">Resumé</span>
            <span className="text-xs">↗</span>
          </div>
          <p className="text-xl font-bold leading-tight italic">Founder of LYPS & 255 Media. Click to view my professional journey.</p>
        </a>

        {/* 6. Stats Box (1x1) */}
        <div className="bg-white rounded-[2.5rem] p-8 border border-black/5 flex flex-col justify-center items-center text-center shadow-sm">
          <p className="text-4xl font-black text-slate-900 tracking-tighter">3000+</p>
          <p className="text-[9px] font-bold text-[#c8b9a3] uppercase tracking-widest mt-1">Attendees Managed</p>
        </div>

      </div>

      {/* FEATURED PROJECTS */}
      <section id="projects" className="scroll-mt-32">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-4xl font-bold tracking-tighter text-slate-900">Featured Work<span className="text-[#c8b9a3]">.</span></h2>
          <Link href="/projects" className="text-sm font-bold text-[#c8b9a3] hover:text-slate-900 transition-colors">See more projects →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((proj, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -10 }}
              className={`p-10 rounded-[3rem] border border-black/5 flex flex-col justify-between shadow-sm min-h-[350px] cursor-pointer ${proj.color}`}
            >
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8b9a3] mb-4">{proj.role}</p>
                <h4 className="text-3xl font-bold mb-4 tracking-tight">{proj.title}</h4>
                <p className="text-sm leading-relaxed text-slate-500 max-w-sm mb-8">{proj.desc}</p> 
              </div>
              <div className="flex gap-2"> 
                {proj.tech.map((t, i) => ( 
                  <span key={i} className="text-[9px] px-4 py-1.5 rounded-full font-bold border border-black/10 text-slate-400">{t}</span> 
                ))} 
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="mt-32 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#c8b9a3]">
        <p>© 2026 Adyra Rachellyn.</p>
        <div className="flex gap-6">
          <a href="mailto:adyra.rachellyn@gmail.com" className="hover:text-slate-900 transition-colors">Email</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Back to top ↑</a>
        </div>
      </footer>
    </motion.main>
  );
}