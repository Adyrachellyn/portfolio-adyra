"use client";

import { motion } from "framer-motion";

export default function ProjectsPage() {
  const allProjects = [
    {
      title: "LYPS Ed-Tech",
      role: "Founder & Executive Director",
      desc: "An integrated learning ecosystem bridging educational gaps for young girls in Frontier (3T) regions.",
      tech: ["Next.js", "Social Impact"],
      impact: "100+ Students",
      link: "https://youtu.be/FUUSZrS8l2Q?si=04g1gPuYPH7qyEMt", // LINK YOUTUBE LYPS
      hasPhoto: true 
    },
    {
      title: "255 Digital Media Platform",
      role: "Founder & President",
      desc: "Student-run digital media platform producing 20+ podcast episodes and 50+ digital content pieces.",
      tech: ["Digital Branding", "Leadership"],
      impact: "200% Growth",
      link: "https://linktr.ee/255digital"
    },
    {
      title: "Camaraderie Project",
      role: "Lead Tech Developer",
      desc: "Social impact application designed specifically for interactive learning in orphanages.",
      tech: ["React Native", "Firebase"],
      impact: "Social Outreach",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7017502955016773632/"
    }
  ];

  const organizations = [
    { org: "Rumah Belajar BEM UI", role: "Community Empowerment Staff", period: "2025 - Present", detail: "Providing education and outreach programs for underprivileged schools." },
    { org: "Open House Fasilkom UI", role: "Event Division Staff", period: "Aug - Nov 2025", detail: "Organizing logistics and event rundowns for major faculty initiatives." },
    { org: "Student Council of GPS SHS", role: "President & Vice President", period: "Aug 2022 - Sept 2024", detail: "Led 50+ members to execute 10+ annual school-wide events." },
    { org: "Fortals (Annual Event of GPS)", role: "Head of Event Organizer", period: "August 2024", detail: "Coordinated flagship annual event for 3000 students." },
    { org: "Global Broadcasting", role: "Vice President", period: "June 2022 - 2023", detail: "Assisted in strategic planning of broadcast programs." },
    { org: "Pramuka (Scouting)", role: "Operations & Event Organizer", period: "July 2023 - 2024", detail: "Planned and executed scout activities for 150+ participants." },
    { org: "255 Digital Media Platform", role: "Founder & President", period: "June 2020 - 2021", detail: "Built and managed a team of 20, overseeing strategy." },
    { org: "Student Council of SMPN 255", role: "1st Chairman", period: "Sept 2020 - 2021", detail: "Designed event rundowns and coordinated volunteer teams." }
  ];

  const projectColors = [
    { bg: "bg-white", text: "text-slate-900", role: "text-[#c8b9a3]", border: "border-black/5" },
    { bg: "bg-[#efede7]", text: "text-slate-900", role: "text-[#c8b9a3]", border: "border-black/5" },
    { bg: "bg-[#5a4d3a]", text: "text-white", role: "text-white/40", border: "border-white/5" },
  ];

  return (
    <div className="min-h-screen bg-[#f5f0e8] p-6 md:p-12 font-sans selection:bg-[#c8b9a3] pt-60 pb-20">
      <main className="max-w-6xl mx-auto">
        
        {/* ORGANIZATIONS (8 Items Intact) */}
        <section className="mb-32">
          <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 text-slate-900">Organizations<span className="text-[#c8b9a3]">.</span></motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {organizations.map((org, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#efede7]'} p-8 rounded-[2.5rem] border border-black/5 shadow-sm flex flex-col justify-between hover:scale-[1.02] transition-transform`}>
                <div>
                  <h4 className="font-bold text-sm mb-1 text-slate-900 leading-tight">{org.org}</h4>
                  <p className="text-[9px] font-black uppercase tracking-widest mb-3 text-[#c8b9a3]">{org.role}</p>
                  <p className="text-[10px] leading-relaxed text-slate-500 font-medium">{org.detail}</p>
                </div>
                <span className="mt-8 text-[8px] font-black text-[#c8b9a3] uppercase tracking-widest">{org.period}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SELECTED WORKS */}
        <section className="pb-20">
          <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 text-slate-900">Selected Works<span className="text-[#c8b9a3]">.</span></motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {allProjects.map((proj, i) => {
               const colors = projectColors[i % projectColors.length];
               return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + (i * 0.1) }}
                  className={`p-10 rounded-[3rem] flex flex-col shadow-sm transition-all border ${colors.bg} ${colors.text} ${colors.border} hover:shadow-xl hover:-translate-y-1`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${colors.role}`}>{proj.role}</p>
                    <span className="text-[9px] font-bold uppercase border border-current px-3 py-1 rounded-full opacity-40">{proj.impact}</span>
                  </div>
                  
                  <h4 className="text-3xl font-bold mb-4 tracking-tight">{proj.title}</h4>
                  <p className="text-sm leading-relaxed opacity-70 mb-6">{proj.desc}</p>
                  
                  {proj.hasPhoto && (
                    <div className="mb-6 w-full h-48 bg-[#efede7] rounded-2xl overflow-hidden border border-black/5">
                      <img src="/lyps-photo.jpg" alt="LYPS Doc" className="w-full h-full object-cover" 
                           onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                      <div className="flex items-center justify-center h-full text-[10px] font-bold text-[#c8b9a3] italic">Image: public/lyps-photo.jpg</div>
                    </div>
                  )}

                  <a 
                    href={proj.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex self-start items-center gap-2 text-[10px] font-black uppercase tracking-widest pb-1 border-b-2 transition-all mb-8 ${
                      i === 2 ? "border-white/40 hover:border-white text-white" : "border-[#c8b9a3] hover:border-slate-900 text-slate-900"
                    }`}
                  >
                    View Documentation ↗
                  </a>

                  <div className="flex flex-wrap gap-2 mt-auto"> 
                    {proj.tech.map((t, j) => ( 
                      <span key={j} className="text-[9px] px-4 py-1.5 rounded-full font-bold border border-current opacity-40">{t}</span> 
                    ))} 
                  </div>
                </motion.div>
               )
            })}
          </div>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto pt-16 pb-8 border-t border-black/5 flex justify-between items-center text-[9px] font-bold uppercase tracking-[0.3em] text-[#c8b9a3]">
        <p>© 2026 Adyra Rachellyn.</p>
        <p>Information Systems @ UI</p>
      </footer>
    </div>
  );
}