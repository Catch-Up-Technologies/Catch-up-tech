"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  inverted?: boolean;
  className?: string;
}

export const SectionHeader = ({
  badge,
  title,
  description,
  align = "left",
  light = false,
  inverted = false,
  className = "",
}: SectionHeaderProps) => {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className={`mb-12 ${isCenter ? "text-center flex flex-col items-center" : "text-left items-start"} ${className}`}
    >
      {badge && (
        <div className={`mb-8 inline-block px-4 py-1.5 rounded-full border text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-300 ${inverted ? "border-brand-blue/20 bg-brand-blue/10 text-brand-blue" : (light ? "border-white/10 bg-[#1d2432] text-white/70" : "border-border bg-card-muted/50 text-hero-muted")}`}>
          {badge}
        </div>
      )}

      <h2 className={`text-4xl lg:text-[3.5rem] font-medium tracking-tight leading-[1.15] mb-8 max-w-4xl ${inverted ? "text-slate-900" : (light ? "!text-white" : "text-hero-text")}`}>
        {title}
      </h2>

      {description && (
        <p
          className={`text-lg font-medium leading-relaxed max-w-2xl mb-10 ${inverted ? "text-slate-500" : (light ? "text-white/60 opacity-70" : "text-muted")} ${isCenter ? "mx-auto" : "mr-auto"}`}
        >
          {description}
        </p>
      )}

      <div
        className={`h-1.5 w-14 bg-brand-blue rounded-full ${isCenter ? "mx-auto" : "mr-auto"}`}
      />
    </motion.div>
  );
};
