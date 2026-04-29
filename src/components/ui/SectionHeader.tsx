"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "split";
  light?: boolean;
  inverted?: boolean;
  className?: string;
  badgeClassName?: string;
  titleClassName?: string;
  descClassName?: string;
  hideLine?: boolean;
}

export const SectionHeader = ({
  badge,
  title,
  description,
  align = "left",
  light = false,
  inverted = false,
  className = "",
  titleClassName = "",
  descClassName = "",
  hideLine = false,
}: SectionHeaderProps) => {
  const isCenter = align === "center";
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isGlobalDark = mounted && (resolvedTheme === "dark" || theme === "dark");

  const isSectionDark = light ? true : (inverted ? false : isGlobalDark);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className={`mb-12 ${isCenter ? "text-center flex flex-col items-center" : "text-left items-start"} ${className}`}
    >
      {badge && (
        <div className={`mb-8 inline-flex items-center justify-center min-w-[71px] h-[26px] px-[12px] py-[4px] rounded-xl border font-inter text-[12px] font-normal leading-[16px] tracking-[1.2px] uppercase transition-all duration-300 ${isSectionDark ? "border-[#0DCCF2]/20 bg-[#0DCCF2]/10 text-[#0DCCF2]" : "border-[#2571B8]/20 bg-[#2571B8]/10 text-[#2571B8]"}`}>
          {badge}
        </div>
      )}

      {align === "split" ? (
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 w-full">
          <div className="flex-1 max-w-3xl">
            <h2 className={`text-4xl lg:text-[3.5rem] font-medium tracking-tight leading-[1.15] ${titleClassName || (isSectionDark ? "text-white" : "text-slate-900")}`}>
              {title}
            </h2>
          </div>
          <div className="flex-1 lg:max-w-md lg:text-right">
            {description && (
              <p
                className={`text-lg font-medium leading-relaxed ${descClassName || (isSectionDark ? "text-white/60 opacity-70" : "text-slate-500")}`}
              >
                {description}
              </p>
            )}
          </div>
        </div>
      ) : (
        <>
          <h2 className={`text-4xl lg:text-[3.5rem] font-medium tracking-tight leading-[1.15] mb-8 max-w-4xl ${titleClassName || (isSectionDark ? "text-white" : "text-slate-900")}`}>
            {title}
          </h2>

          {description && (
            <p
              className={`text-lg font-medium leading-relaxed max-w-2xl mb-10 ${descClassName || (isSectionDark ? "text-white/60 opacity-70" : "text-slate-500")} ${isCenter ? "mx-auto" : "mr-auto"}`}
            >
              {description}
            </p>
          )}
        </>
      )}

      {!hideLine && (
        <div
          className={`h-1.5 w-14 bg-brand-blue rounded-full ${isCenter ? "mx-auto" : align === "split" ? "mr-auto" : "mr-auto"}`}
        />
      )}
    </motion.div>
  );
};
