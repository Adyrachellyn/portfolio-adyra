"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.main 
      initial="hidden" animate="show"
      variants={{ show: { transition: { staggerChildren: 0.1 } } }}
      className="max-w-3xl mx-auto px-6 pt-10"
    >
      <motion.section variants={item} className="mb-16">
        <h1 className="text-5xl font-bold tracking-tighter text-slate-900 mb-8">
          Bridging <span className="text-accent-custom">Tech</span> and <span className="text-accent-custom">Impact.</span>
        </h1>
        <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed font-light">
          <p className="mb-6">
            I am an Information Systems student at Universitas Indonesia who thrives at the intersection of technology, strategy, and human impact. My journey is defined by a passion for building digital solutions that solve real-world problems.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <div className="bg-card-custom p-6 rounded-[2rem] border border-border-custom">
              <h3 className="font-bold text-slate-900 mb-2">Strategic Leadership</h3>
              <p className="text-xs leading-relaxed">Experienced in leading cross-functional teams of 50+ members and managing large-scale operations for 3,000+ participants with 30% improved efficiency.</p>
            </div>
            <div className="bg-white p-6 rounded-[2rem] border border-border-custom">
              <h3 className="font-bold text-slate-900 mb-2">User-Centric Growth</h3>
              <p className="text-xs leading-relaxed">Founder of LYPS Ed-Tech, focusing on empowering young girls through accessible digital platforms and data-driven engagement strategies.</p>
            </div>
          </div>

          <p className="mb-6">
            My approach is rooted in <strong>Product Thinking</strong>. Whether I’m developing a mobile community platform or coordinating national-level student advocacy, I focus on the "why" before the "how." I believe that the most successful products are built through empathy, clear roadmaps, and a relentless focus on the end-user.
          </p>
          
          <p>
            I leverage my technical background in Dart, Swift, and Data Science to bridge the gap between complex engineering requirements and intuitive user experiences.
          </p>
        </div>
      </motion.section>

      <motion.section variants={item} className="flex flex-col sm:flex-row gap-4 pt-10 border-t border-border-custom">
        <a href="https://drive.google.com/open?id=1hYvb7WlVthoA3fWrO32Xtxfb-jMArW3V" target="_blank" className="px-8 py-4 bg-[#3a3530] text-white rounded-full font-bold text-center hover:bg-accent-custom transition-all">Download Resumé</a>
        <Link href="/#projects" className="px-8 py-4 bg-white border border-border-custom text-slate-800 rounded-full font-bold text-center hover:bg-card-custom transition-all">View My Work</Link>
      </motion.section>
    </motion.main>
  );
}