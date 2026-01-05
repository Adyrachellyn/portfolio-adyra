import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Adyra Rachellyn | Portfolio',
  description: 'Information Systems @ UI | Product Management Enthusiast',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`} suppressHydrationWarning>
        <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4">
          <div className="flex items-center gap-1 bg-white/40 backdrop-blur-xl p-1.5 rounded-full border border-border-custom shadow-sm">
            <Link href="/" className="px-5 py-2 text-[12px] font-medium rounded-full hover:bg-card-custom transition-all text-slate-600">
              Home
            </Link>
            <Link href="/about" className="px-5 py-2 text-[12px] font-medium rounded-full hover:bg-card-custom transition-all text-slate-600">
              About
            </Link>
            <Link href="/#projects" className="px-5 py-2 text-[12px] font-medium rounded-full hover:bg-card-custom transition-all text-slate-600">
              Projects
            </Link>
            <div className="w-px h-4 bg-border-custom mx-2" />
            <a href="mailto:adyra.rachelllyn@gmail.com" className="px-5 py-2 text-[12px] font-bold text-accent-custom">Contact</a>
          </div>
        </nav>
        <div className="pt-32 pb-20">{children}</div>
      </body>
    </html>
  );
}