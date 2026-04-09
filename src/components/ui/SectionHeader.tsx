"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export const SectionHeader = ({
  title,
  description,
  align = "left",
  light = false,
  className = "",
}: SectionHeaderProps) => {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, x: isCenter ? 0 : -20 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className={`mb-12 ${isCenter ? "text-center" : "text-left"} ${className}`}
    >
      <h2 className={`title-section mb-6 ${light ? "!text-white" : ""}`}>
        {title}
      </h2>
      <div
        className={`h-1.5 w-16 bg-primary rounded-full mb-8 ${isCenter ? "mx-auto" : "mr-auto"
          }`}
      />
      {description && (
        <p
          className={`text-lg font-medium leading-relaxed max-w-2xl ${light ? "text-slate-400" : "text-slate-500"
            } ${isCenter ? "mx-auto" : "mr-auto"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};
