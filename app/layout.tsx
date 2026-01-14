"use client";

import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion'; // Memastikan import sudah benar

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f5f0e8] text-[#1a1a1a] min-h-screen`}>
        
        <nav className="fixed top-0 left-0 right-0 z-[100] p-6 md:p-10 flex justify-between items-center pointer-events-none">
          
          {/* NAMA DI POJOK KIRI (BRANDING) - SUDAH DIPERBAIKI MENJADI motion.div */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="pointer-events-auto"
          >
            <Link href="/" className="text-xl font-black tracking-tighter hover:opacity-70 transition-opacity">
              adyra<span className="text-[#c8b9a3]">.</span>
            </Link>
          </motion.div>

          {/* MENU TENGAH */}
          <div className="flex items-center gap-1 bg-white/70 backdrop-blur-xl p-1.5 rounded-full border border-white/20 shadow-lg pointer-events-auto">
            <Link 
              href="/" 
              className={`px-5 py-2 text-[11px] font-bold rounded-full transition-all ${pathname === '/' ? 'bg-[#f5f0e8] text-slate-900 shadow-sm' : 'hover:bg-[#f5f0e8]/50 text-slate-500'}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`px-5 py-2 text-[11px] font-bold rounded-full transition-all ${pathname === '/about' ? 'bg-[#f5f0e8] text-slate-900 shadow-sm' : 'hover:bg-[#f5f0e8]/50 text-slate-500'}`}
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className={`px-5 py-2 text-[11px] font-bold rounded-full transition-all ${pathname === '/projects' ? 'bg-[#f5f0e8] text-slate-900 shadow-sm' : 'hover:bg-[#f5f0e8]/50 text-slate-500'}`}
            >
              Projects
            </Link>
            <div className="w-px h-4 bg-gray-200 mx-1" />
            <a 
              href="mailto:adyra.rachelllyn@gmail.com" 
              className="px-5 py-2 text-[11px] font-black text-orange-600"
            >
              Contact
            </a>
          </div>

          <div className="hidden md:block w-24"></div>
        </nav>

        {children}
      </body>
    </html>
  );
}