"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";

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
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: isDark
              ? "radial-gradient(circle at 50% 50%, rgba(37,113,184,0.12) 0%, rgba(2,6,23,0) 70%)"
              : "radial-gradient(circle at 50% 50%, rgba(37,113,184,0.06) 0%, rgba(255,255,255,0) 70%)",
          }}
        />
        <div className={`absolute inset-0 opacity-[0.15] ${isDark ? "mesh-gradient" : "mesh-gradient"}`} />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <SectionHeader
            badge="Pronto para evoluir?"
            title="Sua operação merece engenharia de verdade"
            description="Pare de remendar sistemas legados. Agende uma conversa direta com nossos engenheiros seniores."
            align="center"
            hideLine={true}
            titleClassName={`!text-4xl lg:!text-[60px] !font-bold !leading-[60px] !tracking-[-1.5px] ${isDark ? "!text-white" : "!text-[#111827]"}`}
            descClassName={`!mb-8 !text-[20px] !leading-[28px] !font-normal tracking-normal ${isDark ? "!text-slate-400" : "!text-[#4B5563]"}`}
            className="!mb-0"
          />

          {/* Button */}
          <Button
            variant="brand"
            size="lg"
            className="rounded-full px-12"
          >
            Solicitar diagnóstico estratégico
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
