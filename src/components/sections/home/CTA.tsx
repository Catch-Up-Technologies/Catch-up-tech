"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

export const CTA = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && (resolvedTheme === "dark" || theme === "dark");

  return (
    <section className={`py-24 lg:py-32 w-full relative overflow-hidden ${isDark ? "bg-background" : "bg-white"}`}>
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] blur-[120px] rounded-full ${isDark ? "bg-brand-blue/10" : "bg-brand-blue/5"}`} />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E0F2FE] border border-transparent">
            <span className="text-[12px] font-bold tracking-[0.05em] uppercase text-[#0369A1]">
              Pronto para evoluir?
            </span>
          </div>

          {/* Title */}
          <h2 className={`text-4xl lg:text-[52px] font-black leading-[1.1] tracking-tight ${isDark ? "text-white" : "text-[#111827]"}`}>
            Sua operação merece <br className="hidden sm:block" /> engenharia de verdade
          </h2>

          {/* Description */}
          <p className={`text-lg lg:text-xl leading-relaxed max-w-2xl font-medium ${isDark ? "text-slate-400" : "text-[#4B5563]"}`}>
            Pare de remendar sistemas legados. Agende uma conversa direta com nossos engenheiros seniores.
          </p>

          {/* Button */}
          <Button
            variant="brand"
            size="lg"
            className="mt-4 rounded-full px-12"
          >
            Solicitar diagnóstico estratégico
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
