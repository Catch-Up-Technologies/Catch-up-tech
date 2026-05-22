"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const PARTNERS = [
  { name: "AEL" },
  { name: "Blutrafos" },
  { name: "CEMAR" },
  { name: "COM TRAFO" },
  { name: "ZAGO" },
  { name: "LIGHT" },
  { name: "ENERGISA" },
  { name: "WEG" },
  { name: "CPFL" },
  { name: "EMBRASTEC" },
  { name: "IIB" },
  { name: "TRAE" },
];

const PartnerLogo = ({ name }: { name: string }) => {
  // Simple fictitious logo generators
  const renderLogo = () => {
    switch (name) {
      case "AEL":
        return (
          <svg viewBox="0 0 100 40" className="h-8 w-auto fill-current">
            <path d="M10 30L25 10L40 30H10Z" opacity="0.8" />
            <rect x="45" y="10" width="10" height="20" rx="2" />
            <rect x="60" y="10" width="20" height="20" rx="2" />
          </svg>
        );
      case "Blutrafos":
        return (
          <svg viewBox="0 0 120 40" className="h-8 w-auto fill-current">
            <circle cx="20" cy="20" r="15" opacity="0.6" />
            <circle cx="35" cy="20" r="10" />
            <rect x="55" y="15" width="60" height="10" rx="5" />
          </svg>
        );
      case "CEMAR":
        return (
          <svg viewBox="0 0 100 40" className="h-8 w-auto fill-current">
            <rect x="10" y="10" width="20" height="20" rx="10" opacity="0.7" />
            <rect x="35" y="10" width="20" height="20" rx="2" />
            <rect x="60" y="10" width="30" height="20" rx="2" />
          </svg>
        );
      case "COM TRAFO":
        return (
          <svg viewBox="0 0 120 40" className="h-8 w-auto fill-current">
            <path d="M10 20C10 10 20 10 30 20C40 30 50 30 60 20" stroke="currentColor" strokeWidth="4" fill="none" />
            <rect x="70" y="10" width="40" height="20" rx="4" />
          </svg>
        );
      case "ZAGO":
        return (
          <svg viewBox="0 0 100 40" className="h-8 w-auto fill-current">
            <path d="M10 10H40L10 30H40" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
            <circle cx="70" cy="20" r="12" opacity="0.8" />
          </svg>
        );
      case "LIGHT":
        return (
          <svg viewBox="0 0 100 40" className="h-8 w-auto fill-current">
            <path d="M20 10L10 25H30L20 40" stroke="currentColor" strokeWidth="3" fill="none" />
            <rect x="40" y="15" width="50" height="10" rx="2" />
          </svg>
        );
      case "ENERGISA":
        return (
          <svg viewBox="0 0 120 40" className="h-8 w-auto fill-current">
            <path d="M10 10V30L30 20Z" />
            <path d="M40 10V30L60 20Z" opacity="0.6" />
            <rect x="70" y="15" width="40" height="10" rx="2" />
          </svg>
        );
      case "WEG":
        return (
          <svg viewBox="0 0 100 40" className="h-8 w-auto fill-current">
            <rect x="10" y="10" width="80" height="20" rx="4" />
            <path d="M25 15V25M50 15V25M75 15V25" stroke="white" strokeWidth="3" />
          </svg>
        );
      case "CPFL":
        return (
          <svg viewBox="0 0 100 40" className="h-8 w-auto fill-current">
            <path d="M10 20Q30 5 50 20T90 20" stroke="currentColor" strokeWidth="4" fill="none" />
            <circle cx="50" cy="20" r="5" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 100 40" className="h-8 w-auto fill-current">
            <rect x="10" y="10" width="30" height="20" rx="4" opacity="0.5" />
            <rect x="50" y="10" width="40" height="20" rx="4" />
          </svg>
        );
    }
  };

  return <div className="text-[#64748B] dark:text-slate-400 group-hover:text-[#2571B8] transition-colors duration-300">{renderLogo()}</div>;
};

export const Partners = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const doubledPartners = [...PARTNERS, ...PARTNERS];

  return (
    <section className="py-12 lg:py-16 bg-background transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[16px] md:text-[18px] font-medium mb-12 text-slate-500/80 dark:text-slate-400 max-w-[753px] mx-auto px-[2px] leading-[30px]"
        >
          Conheça algumas das empresas que utilizam nossas tecnologias
        </motion.h2>

        <div className="relative">
          {/* Gradients matching the application background exactly */}
          <div className={`absolute left-0 top-0 bottom-0 w-16 md:w-48 z-20 pointer-events-none bg-gradient-to-r ${isDark ? 'from-[#020617] to-transparent' : 'from-white to-transparent'}`} />
          <div className={`absolute right-0 top-0 bottom-0 w-16 md:w-48 z-20 pointer-events-none bg-gradient-to-l ${isDark ? 'from-[#020617] to-transparent' : 'from-white to-transparent'}`} />

          <div className="flex overflow-hidden">
            <motion.div
              className="flex items-center gap-16 lg:gap-24 whitespace-nowrap"
              animate={{ x: [0, -100 * PARTNERS.length] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {doubledPartners.map((partner, idx) => (
                <div
                  key={`${partner.name}-${idx}`}
                  className="flex items-center justify-center min-w-[120px] lg:min-w-[150px] h-[32px] opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 group cursor-pointer"
                >
                  <PartnerLogo name={partner.name} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

