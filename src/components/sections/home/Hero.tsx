"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { HeroBackground } from "./hero background/HeroBackground";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Hero = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = !mounted || resolvedTheme === "dark";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-6 lg:px-32 transition-colors duration-500 bg-hero-bg"
    >
      <HeroBackground isDark={isDark} />

      {/* Overlay — left-side text contrast */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none transition-all duration-500"
        style={{
          background: isDark
            ? "linear-gradient(to right, var(--hero-bg) 28%, rgba(2,6,23,0.55) 55%, transparent)"
            : "linear-gradient(to right, var(--hero-bg) 28%, rgba(250,250,250,0.60) 55%, transparent)",
        }}
      />

      <div className="max-w-5xl w-full relative z-10 flex flex-col items-start gap-12 lg:ml-16">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              className="text-title-2 transition-colors duration-500 text-hero-text"
            >
              Transformamos Ideias
              <span
                className="block font-medium mt-1 transition-colors duration-500 text-hero-muted"
              >
                Em Soluções Digitais
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-[10px] lg:text-[11px] max-w-sm leading-[1.8] font-medium tracking-[0.05em] transition-colors duration-500"
            style={{ color: isDark ? "rgba(148,163,184,0.80)" : "rgba(30,64,175,0.70)" }}
          >
            DESENVOLVEMOS APLICAÇÕES SOB MEDIDA COM FOCO EM PERFORMANCE, ORGANIZAÇÃO E EVOLUÇÃO CONTÍNUA, AJUDANDO EMPRESAS A TIRAR PROJETOS DO PAPEL E CRESCER COM TECNOLOGIA.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="#contact" className="no-underline">
            <button className="btn-hero group">
              Agende uma conversa estratégica
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative glows */}
      <div
        className="absolute top-1/3 -right-20 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none transition-colors duration-500"
        style={{ backgroundColor: isDark ? "rgba(37,99,235,0.10)" : "rgba(37,99,235,0.06)" }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none transition-colors duration-500"
        style={{ backgroundColor: isDark ? "rgba(56,189,248,0.05)" : "rgba(56,189,248,0.04)" }}
      />
    </section>
  );
};




