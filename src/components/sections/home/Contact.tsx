"use client";

import { motion, Variants } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { ContactFormFields } from "./ContactFormFields";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const buttonPopVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1] as const
    }
  }
};

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Contact = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && (resolvedTheme === "dark" || theme === "dark");

  const content = {
    title: "Vamos conversar",
    description: "Conte um pouco sobre o seu projeto e entraremos em contato para entender melhor suas necessidades e como podemos ajudar.",
    email: "contato@catchuptech.com.br",
    sede: "São Paulo, SP - Brasil",
    atendimento: "Global / Remoto"
  };

  const contactInfo = [
    { label: "EMAIL", value: content.email },
    { label: "SEDE", value: content.sede },
    { label: "ATENDIMENTO", value: content.atendimento },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 w-full relative overflow-hidden transition-colors duration-500">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/4 w-[800px] h-[500px] blur-[120px] rounded-full bg-brand-blue/5" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <div className="flex flex-col gap-6">
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <h2 className={`text-5xl lg:text-[64px] font-bold leading-[1.1] tracking-tight transition-colors ${isDark ? "text-white" : "text-[#0F172A]"}`}>
                {content.title}
              </h2>
              <p className={`text-xl lg:text-[22px] font-medium leading-relaxed max-w-xl transition-colors ${isDark ? "text-[#94A3B8]" : "text-[#475569]"}`}>
                {content.description}
              </p>
            </motion.div>

            <div className="flex flex-col gap-6">
              {contactInfo.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <p className={`text-[13px] font-medium uppercase tracking-[0.1em] w-[130px] flex-shrink-0 transition-colors ${isDark ? "text-[#64748B]" : "text-[#94A3B8]"}`}>
                    {item.label}:
                  </p>
                  <span className={`text-[13px] font-medium transition-colors ${isDark ? "text-[#94A3B8]" : "text-[#64748B]"}`}>
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <ContactFormFields />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
