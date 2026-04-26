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

export const Partners = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const doubledPartners = [...PARTNERS, ...PARTNERS];

  return (
    <section className="pt-20 lg:pt-28 pb-10 lg:pb-14 transition-colors duration-500 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-h5 mb-20 text-hero-text opacity-80"
        >
          Conheça algumas das empresas que utilizam nossas tecnologias
        </motion.h2>

        <div className="relative">
          <div
            className="absolute left-0 top-0 bottom-0 w-24 lg:w-48 z-20 pointer-events-none"
            style={{ background: `linear-gradient(to right, var(--hero-bg) 0%, transparent 100%)` }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 lg:w-48 z-20 pointer-events-none"
            style={{ background: `linear-gradient(to left, var(--hero-bg) 0%, transparent 100%)` }}
          />

          <div className="flex overflow-hidden">
            <motion.div
              className="flex items-center gap-16 lg:gap-28 whitespace-nowrap py-6"
              animate={{ x: [0, -100 * PARTNERS.length] }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {doubledPartners.map((partner, idx) => (
                <div
                  key={`${partner.name}-${idx}`}
                  className="flex items-center justify-center min-w-[140px] lg:min-w-[180px] h-[31px] opacity-50 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0"
                >
                  <span className="text-xl lg:text-3xl font-bold tracking-tighter text-hero-text">
                    {partner.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

