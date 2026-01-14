"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen selection:bg-[#c8b9a3] font-sans">
      <motion.main 
        initial="hidden" animate="show"
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        className="max-w-3xl mx-auto px-6 pt-32 pb-20"
      >
        <motion.section variants={item} className="mb-16">
          {/* HEADING DENGAN AKSEN KHAKI */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 mb-8 leading-tight">
            Bridging <span className="text-[#c8b9a3]">Tech</span> and <span className="text-[#c8b9a3]">Impact.</span>
          </h1>
          
          <div className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
            <p className="mb-6">
              I am an Information Systems student at <span className="font-bold text-slate-900">Universitas Indonesia</span> who thrives at the intersection of technology, strategy, and human impact. My journey is defined by a passion for building digital solutions that solve real-world problems.
            </p>
            
            {/* BENTO CARDS INSIDE ABOUT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12 text-slate-900">
              <div className="bg-[#efede7] p-8 rounded-[2.5rem] border border-black/5 shadow-sm">
                <h3 className="font-extrabold text-slate-900 mb-2">Strategic Leadership</h3>
                <p className="text-[11px] leading-relaxed text-slate-500 font-bold">Experienced in leading cross-functional teams of 50+ members and managing large-scale operations for 3,000+ participants.</p>
              </div>
              <div className="bg-white p-8 rounded-[2.5rem] border border-black/5 shadow-sm">
                <h3 className="font-extrabold text-slate-900 mb-2">User-Centric Growth</h3>
                <p className="text-[11px] leading-relaxed text-slate-500 font-bold">Founder of <span className="text-[#c8b9a3]">LYPS Ed-Tech</span>, focusing on empowering young girls through accessible digital platforms and data-driven strategies.</p>
              </div>
            </div>

            <p className="mb-6">
              My approach is rooted in <span className="font-bold text-slate-900">Product Thinking</span>. Whether I’m developing a mobile community platform or coordinating national-level student advocacy, I focus on the "why" before the "how." I believe that the most successful products are built through empathy and a relentless focus on the end-user.
            </p>
            
            <p>
              I leverage my technical background in <span className="font-bold text-slate-900">Data Science, Dart, and Swift</span> to bridge the gap between complex engineering requirements and intuitive user experiences.
            </p>
          </div>
        </motion.section>

        {/* ACTION BUTTONS */}
        <motion.section variants={item} className="flex flex-col sm:flex-row gap-4 pt-10 border-t border-black/5">
          {/* LINK RESUME KE FILE LOKAL */}
          <a 
            href="/CV_Adyra_Rachellyn.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#5a4d3a] text-white rounded-full font-bold text-center hover:scale-[1.02] transition-all shadow-lg shadow-orange-900/10"
          >
            Download Resumé
          </a>
          
          <Link 
            href="/projects" 
            className="px-8 py-4 bg-white border border-black/5 text-slate-800 rounded-full font-bold text-center hover:bg-[#efede7] transition-all shadow-sm"
          >
            View My Work
          </Link>
        </motion.section>

        {/* FOOTER */}
        <footer className="mt-20 text-[10px] font-bold uppercase tracking-[0.3em] text-[#c8b9a3]">
          © 2026 Adyra Rachellyn.
        </footer>
      </motion.main>
    </div>
  );
}