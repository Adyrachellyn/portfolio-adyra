"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectsPage() {
  const allProjects = [
    {
      title: "LYPS Ed-Tech",
      role: "Founder & Executive Director",
      desc: "An integrated learning ecosystem bridging educational gaps for young girls in Frontier (3T) regions.",
      tech: ["Next.js", "Cloud Architecture", "Social Impact"],
      impact: "100+ Students"
    },
    {
      title: "255 Digital Media Platform",
      role: "Founder & President",
      desc: "Student-run digital media platform producing 20+ podcast episodes and 50+ digital content pieces.",
      tech: ["Content Strategy", "Digital Branding", "Leadership"],
      impact: "200% Growth"
    },
    {
      title: "Camaraderie Project",
      role: "Lead Tech Developer",
      desc: "Social impact application designed specifically for interactive learning in orphanages.",
      tech: ["React Native", "Firebase", "Innovation"],
      impact: "Social Outreach"
    }
    // Kalau ada project ke-4, dia akan balik ke warna putih lagi
  ];

  const organizations = [
    { 
      org: "Rumah Belajar BEM UI", 
      role: "Community Empowerment Staff", 
      period: "2024 - Present",
      detail: "Providing education and outreach programs for underprivileged schools." 
    },
    { 
      org: "Open House Fasilkom UI", 
      role: "Event Division Staff", 
      period: "2024",
      detail: "Organizing logistics and event rundowns for major faculty initiatives." 
    },
    { 
      org: "Student Council of GPS SHS", 
      role: "President & Vice President", 
      period: "Aug 2022 - Sept 2024",
      detail: "Led 50+ members to execute 10+ annual school-wide events, reaching over 500 participants." 
    },
    { 
      org: "Fortals (Annual Event of GPS)", 
      role: "Head of Event Organizer", 
      period: "August 2024",
      detail: "Coordinated flagship annual event for 3000 students, handling logistics and volunteer teams." 
    },
    { 
      org: "Global Broadcasting", 
      role: "Vice President", 
      period: "June 2022 - 2023",
      detail: "Assisted in strategic planning of broadcast programs, increasing viewership engagement by 15%." 
    },
    { 
      org: "Pramuka (Scouting)", 
      role: "Operations & Event Organizer", 
      period: "July 2023 - 2024",
      detail: "Planned and executed scout activities for 150+ participants, boosting participation by 40%." 
    },
    { 
      org: "255 Digital Media Platform", 
      role: "Founder & President", 
      period: "June 2020 - 2021",
      detail: "Built and managed a team of 20, overseeing strategy and production schedules." 
    },
    { 
      org: "Student Council of SMPN 255", 
      role: "1st Chairman", 
      period: "Sept 2020 - 2021",
      detail: "Designed event rundowns and coordinated volunteer teams for school-wide activities." 
    }
  ];

  // Definisi 3 Palet Warna untuk Projects
  const projectColors = [
    { bg: "bg-white", text: "text-slate-900", role: "text-[#c8b9a3]", tagBg: "bg-slate-50", tagText: "text-slate-400", border: "border-gray-100" },
    { bg: "bg-[#efede7]", text: "text-slate-900", role: "text-[#c8b9a3]", tagBg: "bg-[#e5e2da]", tagText: "text-slate-500", border: "border-[#e5e2da]" },
    { bg: "bg-[#2d2a26]", text: "text-white", role: "text-white/60", tagBg: "bg-white/10", tagText: "text-white/60", border: "border-white/5" },
  ];

  return (
    <div className="min-h-screen bg-[#f5f0e8] p-6 md:p-12 font-sans selection:bg-[#c8b9a3]">
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-16">
        <Link href="/" className="text-3xl font-black tracking-tighter" style={{ background: "linear-gradient(to right, #ff4d94, #ff9966, #ffcc00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>dyr</Link>
        <Link href="/" className="px-6 py-2 bg-white rounded-full text-xs font-bold shadow-sm hover:shadow-md transition-all">← Back Home</Link>
      </header>

      <main className="max-w-5xl mx-auto">
        {/* Organizations tetap 2 warna selang-seling agar rapi */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold tracking-tighter mb-10 text-slate-900">Organizations<span className="text-[#c8b9a3]">.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {organizations.map((org, i) => (
              <div key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#efede7]'} p-6 rounded-[1.5rem] border border-gray-100 shadow-sm flex flex-col justify-between transition-all`}>
                <div>
                  <h4 className="font-bold text-base mb-1 text-slate-900 leading-tight">{org.org}</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-3 text-[#c8b9a3]">{org.role}</p>
                  <p className="text-[11px] leading-relaxed text-slate-500 font-medium">{org.detail}</p>
                </div>
                <span className="mt-4 text-[9px] font-bold text-gray-400 bg-gray-50/50 px-2 py-1 rounded-md self-start">{org.period}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects sekarang berotasi 3 warna */}
        <section className="pb-20">
          <h2 className="text-4xl font-bold tracking-tighter mb-10 text-slate-900">Selected Works<span className="text-[#c8b9a3]">.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allProjects.map((proj, i) => {
               // Pilih warna berdasarkan urutan (looping 3 warna)
               const colors = projectColors[i % projectColors.length];
               return (
              <div key={i} className={`p-8 rounded-[2rem] min-h-[300px] flex flex-col justify-between shadow-sm transition-all ${colors.bg} ${colors.text} border ${colors.border}`}>
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <p className={`text-[9px] font-bold uppercase tracking-widest ${colors.role}`}>{proj.role}</p>
                    <span className={`text-[9px] font-bold uppercase border border-current px-2 py-1 rounded-full opacity-60`}>{proj.impact}</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 tracking-tight">{proj.title}</h4>
                  <p className="text-xs leading-relaxed opacity-80 mb-6">{proj.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2"> 
                  {proj.tech.map((t, j) => ( 
                    <span key={j} className={`text-[9px] px-3 py-1 rounded-full font-bold ${colors.tagBg} ${colors.tagText}`}>{t}</span> 
                  ))} 
                </div>
              </div>
               )
            })}
          </div>
        </section>
      </main>

      <footer className="max-w-5xl mx-auto pt-16 pb-8 border-t border-gray-200 flex justify-between items-center text-[9px] font-bold uppercase tracking-[0.3em] text-gray-300">
        <p>© 2026 Adyra Rachellyn</p>
        <p>Information Systems @ UI</p>
      </footer>
    </div>
  );
}