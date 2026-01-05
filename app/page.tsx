"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  // Animasi Stagger (Wajib ada di parent)
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
  };

  // Animasi masuk tiap kotak
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const certifications = [
    { id: 1, name: 'Data Science ↗', link: 'https://drive.google.com/file/d/1_AyUkAqgDCd_7712BhHitppTTp_esi0T/view' },
    { id: 2, name: 'Digital Innovation Challenge ↗', link: 'https://drive.google.com/drive/folders/1KH_WmIy7cWob25D17dCin2LA2kEs2pu-' },
    { id: 3, name: 'Python', link: null },
    { id: 4, name: 'Dart & Flutter', link: null },
    { id: 5, name: 'Swift Programming', link: null },
    { id: 6, name: 'UI/UX Design', link: null }
  ];

  const featuredProjects = [
    {
      title: "LYPS Ed-Tech",
      role: "Founder & Lead Developer",
      desc: "Empowering young girls in Indonesia's 3T areas through accessible digital education platforms.",
      fullDesc: "LYPS Ed-Tech bridges the digital divide for underprivileged young girls in Frontier, Outermost, and Remote (3T) regions.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      color: "bg-white"
    },
    {
      title: "Camaraderie Project",
      role: "Lead Tech Developer",
      desc: "An interactive and empathy-driven educational platform designed to empower children in orphanages.",
      fullDesc: "Developing a dedicated learning ecosystem to support children in orphanages, ensuring they have the tools needed to thrive academically.",
      tech: ["React Native", "Firebase", "Social Impact"],
      color: "bg-[#2d2a26]" 
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f0e8] text-[#1a1a1a] selection:bg-[#c8b9a3] font-sans">
      
      {/* NAVBAR TETAP SAMA */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center pointer-events-none">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          className="text-3xl font-black tracking-tighter pointer-events-auto cursor-default"
          style={{ background: "linear-gradient(to right, #ff4d94, #ff9966, #ffcc00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          dyr
        </motion.div>

        <nav className="hidden md:flex bg-white/70 backdrop-blur-md border border-white/20 px-8 py-3 rounded-full shadow-sm pointer-events-auto gap-8 text-sm font-semibold text-gray-400">
          <Link href="/" className="text-black">Home</Link>
          <Link href="/about" className="hover:text-black transition-colors">About</Link>
          <Link href="/projects" className="hover:text-black transition-colors">Projects</Link>
          <span className="opacity-20">|</span>
          <a href="#" className="hover:text-black transition-colors">Contact</a>
        </nav>
        <div className="hidden md:block text-sm font-bold pointer-events-auto hover:underline cursor-pointer">Contact</div>
      </header>

      {/* PARENT MOTION CONTAINER */}
      <motion.main variants={container} initial="hidden" animate="show" className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px] mb-32">
          
          <motion.div variants={item} whileHover={{ scale: 1.01 }} className="md:col-span-2 md:row-span-2 bg-[#efede7] rounded-[2.5rem] p-10 flex flex-col justify-end relative overflow-hidden border border-gray-200/50 shadow-sm">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl shadow-sm border-4 border-white">👩‍💻</div>
            <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Information Systems @ UI</p>
            <h1 className="text-3xl font-bold tracking-tight mb-4 leading-tight">I'm <span className="text-slate-900 border-b-4 border-[#c8b9a3]">Adyra Rachellyn</span>, building tech for social impact.</h1>
            <p className="text-slate-500 font-medium text-sm">Founder of LYPS Ed-Tech.</p>
            <div className="flex flex-wrap gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-6">
              <a href="https://linkedin.com/in/adyra-rachellyn/" target="_blank" className="hover:text-black transition-colors">LinkedIn</a>
              <a href="https://github.com/Adyrachellyn" target="_blank" className="hover:text-black transition-colors">GitHub</a>
              <a href="https://instagram.com/adyrachellynn/" target="_blank" className="hover:text-black transition-colors">Instagram</a>
            </div>
          </motion.div>

          {/* CARD 2: PETA BEKASI (URL DIPERBAIKI) */}
          <motion.div variants={item} whileHover={{ scale: 1.02 }} className="bg-[#c8b9a3] rounded-[2.5rem] relative overflow-hidden shadow-sm group">
            <div 
              className="absolute inset-0 opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
              style={{ 
                backgroundImage: "url('https://maps.wikimedia.org/osm-intl/12/106.98/-6.24/600x600.png')",
                backgroundSize: 'cover', backgroundPosition: 'center'
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full border-4 border-[#c8b9a3] shadow-lg flex items-center justify-center text-xl overflow-hidden relative z-10">👩‍💻</div>
            </div>
            <div className="absolute bottom-6 left-8 z-20">
              <p className="text-[10px] uppercase tracking-widest font-bold mb-1 text-[#5a4d3a]">Based in</p>
              <p className="font-bold text-lg italic text-[#5a4d3a]">Jakarta/Bekasi, ID 🇮🇩</p>
            </div>
          </motion.div>

          <motion.div variants={item} whileHover={{ scale: 1.01 }} className="bg-[#2d2a26] rounded-[2.5rem] p-8 text-white flex flex-col justify-between shadow-lg cursor-pointer group" onClick={() => window.open('https://drive.google.com/open?id=1hYvb7WlVthoA3fWrO32Xtxfb-jMArW3V', '_blank')}>
            <div className="flex justify-between items-center text-white/40">
              <span className="text-[10px] uppercase tracking-widest font-bold">Resumé</span>
              <span className="group-hover:translate-x-1 transition-transform text-white">→</span>
            </div>
            <p className="text-lg font-bold pr-4">Founder of LYPS & 255 Digital Media Platform.</p>
          </motion.div>

          <motion.div variants={item} className="bg-white rounded-[2.5rem] p-8 border border-gray-100 flex flex-col justify-center items-center text-center">
            <p className="text-4xl font-black text-slate-800">3000+</p>
            <p className="text-[9px] uppercase tracking-widest font-bold text-gray-400">Event Attendees Managed</p>
          </motion.div>

          <motion.div variants={item} className="md:col-span-2 md:row-span-1 bg-white rounded-[2.5rem] p-8 border border-gray-100 flex flex-col justify-between">
            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Certifications & Skills</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {certifications.map((cert) => (
                <button key={cert.id} onClick={() => cert.link ? window.open(cert.link, '_blank') : null} className={`px-4 py-2 rounded-xl text-[10px] font-bold border border-gray-100 transition-all ${cert.link ? "bg-[#c8b9a3] text-white" : "bg-[#f9f9f9] text-gray-500 hover:bg-[#2d2a26] hover:text-white"}`}>
                  {cert.name}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} whileHover={{ scale: 1.02 }} className="bg-[#efede7] rounded-[2.5rem] p-8 border border-gray-100 flex flex-col justify-between">
            <span className="text-2xl font-bold tracking-tight">🎓 Education</span>
            <div>
              <p className="text-lg font-extrabold text-slate-900 leading-tight">Universitas Indonesia</p>
              <p className="text-[10px] font-bold text-[#c8b9a3] uppercase tracking-wider">Information Systems</p>
            </div>
          </motion.div>
        </div>

        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-32">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-bold tracking-tighter text-slate-800">Featured Work<span className="text-[#c8b9a3]">.</span></h2>
            <Link href="/projects" className="text-sm font-bold text-[#c8b9a3] hover:underline">See more &gt;</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((proj, index) => (
              <motion.div key={index} variants={item} whileHover={{ y: -8 }} onClick={() => setSelectedProject(proj)}
                className={`p-10 rounded-[2.5rem] border border-gray-100 min-h-[380px] flex flex-col justify-between shadow-sm cursor-pointer ${proj.color} ${proj.color.includes('2d2a26') ? 'text-white' : ''}`}
              >
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-3 opacity-60">{proj.role}</p>
                  <h4 className="text-3xl font-bold mb-4">{proj.title}</h4>
                  <p className="text-sm leading-relaxed opacity-70 mb-8">{proj.desc}</p> 
                </div>
                <div className="flex gap-2"> {proj.tech.map((t, i) => ( <span key={i} className={`text-[9px] px-3 py-1 rounded-full font-bold border border-current opacity-40`}>{t}</span> ))} </div>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.main>
    </div>
  );
}