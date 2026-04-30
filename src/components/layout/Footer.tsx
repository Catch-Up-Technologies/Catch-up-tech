"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const LinkedinIcon = ({ size = 20, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 20, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const WavyBackground = ({ isDark }: { isDark: boolean }) => (
  <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none transition-opacity duration-500 ${isDark ? 'opacity-[0.05]' : 'opacity-30'}`}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1440 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      className="scale-110"
    >
      <path d="M-100 100C200 50 400 250 800 150C1200 50 1400 250 1700 150" stroke={isDark ? "white" : "#EBEBEB"} strokeWidth="1.5" />
      <path d="M-100 200C200 150 400 350 800 250C1200 150 1400 350 1700 250" stroke={isDark ? "white" : "#EBEBEB"} strokeWidth="1.5" />
      <path d="M-100 300C200 250 400 450 800 350C1200 250 1400 450 1700 350" stroke={isDark ? "white" : "#EBEBEB"} strokeWidth="1.5" />
      <path d="M-100 400C200 350 400 550 800 450C1200 350 1400 550 1700 450" stroke={isDark ? "white" : "#EBEBEB"} strokeWidth="1.5" />
      <path d="M-100 500C200 450 400 650 800 550C1200 450 1400 650 1700 550" stroke={isDark ? "white" : "#EBEBEB"} strokeWidth="1.5" />
      <path d="M-100 50C200 0 400 200 800 100C1200 0 1400 200 1700 100" stroke={isDark ? "white" : "#EBEBEB"} strokeWidth="1.5" />
    </svg>
  </div>
);

export const Footer = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && (resolvedTheme === "dark" || theme === "dark");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={`relative transition-colors duration-500 overflow-hidden pt-24 pb-12 ${isDark ? 'bg-[#020617]' : 'bg-white'}`}>
      <WavyBackground isDark={isDark} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">

          {/* Logo & Info */}
          <div className="lg:col-span-5 flex flex-col items-start gap-8">
            <div className="relative w-48 h-12">
              <Image
                src={isDark ? "/Catchup-white.svg" : "/Catchup-black.svg"}
                alt="CatchUp Tech"
                fill
                className="object-contain object-left"
              />
            </div>

            <p className={`text-sm leading-relaxed max-w-sm font-medium transition-colors duration-500 ${isDark ? 'text-slate-400' : 'text-[#64748B]'}`}>
              Engenharia de software de alta precisão para empresas que buscam escala, robustez técnica e soberania digital em operações complexas.
            </p>

            <Link href="#contact" className="no-underline">
              <button className="w-full max-w-[379px] h-[56px] min-h-[40px] flex items-center justify-center bg-[#2571B8] text-white px-8 py-[15px] rounded-full font-medium text-lg hover:brightness-110 transition-all shadow-lg shadow-brand-blue/20 active:scale-95">
                Começar Agora
              </button>
            </Link>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 lg:pl-12">

            {/* Sections */}
            <div className="flex flex-col gap-6">
              <h4 className={`font-medium text-[22.1px] leading-[33.6px] tracking-[-0.48px] transition-colors duration-500 ${isDark ? 'text-white' : 'text-[#1F2937]'}`}>Sections</h4>
              <nav className="flex flex-col gap-4">
                {["Sobre", "Parceiros", "Cases", "FAQ", "Contato"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`font-medium text-[14.8px] leading-[24px] tracking-[-0.16px] transition-colors duration-500 ${isDark ? 'text-slate-400 hover:text-white' : 'text-[#6B7280] hover:text-[#1F2937]'}`}
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Pages */}
            <div className="flex flex-col gap-6">
              <h4 className={`font-medium text-[22.1px] leading-[33.6px] tracking-[-0.48px] transition-colors duration-500 ${isDark ? 'text-white' : 'text-[#1F2937]'}`}>Pages</h4>
              <nav className="flex flex-col gap-4">
                {["Home", "Contact", "Cases", "404"].map((item) => (
                  <Link
                    key={item}
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={`font-medium text-[14.8px] leading-[24px] tracking-[-0.16px] transition-colors duration-500 ${isDark ? 'text-slate-400 hover:text-white' : 'text-[#6B7280] hover:text-[#1F2937]'}`}
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-6">
              <h4 className={`font-medium text-[22.1px] leading-[33.6px] tracking-[-0.48px] transition-colors duration-500 ${isDark ? 'text-white' : 'text-[#1F2937]'}`}>Socials</h4>
              <nav className="flex flex-col gap-4">
                <span 
                  className={`font-medium text-[14.8px] leading-[24px] tracking-[-0.16px] cursor-not-allowed opacity-50 transition-colors duration-500 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}
                  title="Em breve"
                >
                  Instagram
                </span>
                <Link
                  href="https://www.linkedin.com/company/catchup-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-medium text-[14.8px] leading-[24px] tracking-[-0.16px] transition-colors duration-500 ${isDark ? 'text-slate-400 hover:text-white' : 'text-[#6B7280] hover:text-[#1F2937]'}`}
                >
                  Linkedin
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-8 transition-colors duration-500 ${isDark ? 'border-white/10' : 'border-[#E2E8F0]'}`}>
          <div className="flex items-center gap-6">
            <Link 
              href="https://www.linkedin.com/company/catchup-tech" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2571B8] hover:scale-110 transition-transform"
            >
              <LinkedinIcon />
            </Link>
            <div className="text-[#2571B8] opacity-50 cursor-not-allowed" title="Em breve">
              <InstagramIcon />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className={`relative w-28 h-7 opacity-50 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0`}>
              <Image
                src={isDark ? "/Catchup-white.svg" : "/Catchup-black.svg"}
                alt="CatchUp"
                fill
                className="object-contain"
              />
            </div>
            <p className={`text-[13px] font-medium transition-colors duration-500 ${isDark ? 'text-slate-500' : 'text-[#94A3B8]'}`}>
              &reg; Todos os direitos reservados
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className={`flex items-center gap-2 font-bold transition-colors duration-500 ${isDark ? 'text-white hover:text-brand-blue' : 'text-[#1E293B] hover:text-[#2571B8]'}`}
          >
            Voltar ao topo
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
