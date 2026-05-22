"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useTheme } from "next-themes";

export const Methodology = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const content = {
    title: "Nossa Metodologia",
    desc: "Processos otimizados para garantir transparência, velocidade de entrega e qualidade técnica absoluta."
  }

  const steps = [
    {
      num: "01",
      title: "Imersão & Diagnóstico",
      desc: "Análise profunda das suas necessidades, dores do usuário e objetivos estratégicos de negócio."
    },
    {
      num: "02",
      title: "Desenvolvimento Ágil",
      desc: "Ciclos de entrega contínua com código limpo, testes automatizados e feedback constante."
    },
    {
      num: "03",
      title: "Escala & Evolução",
      desc: "Lançamento estratégico com monitoramento de performance e otimização para crescimento sustentável."
    },
  ];

  const stepVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: i * 0.1,
      },
    }),
  };

  const transition = {
    duration: 1,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  const squareVariants: Variants = {
    hidden: {
      scale: 0,
      rotate: -360,
      x: isMobile ? 0 : -100,
      y: isMobile ? -50 : 0,
      opacity: 0
    },
    visible: {
      scale: 1,
      rotate: 0,
      x: 0,
      y: 0,
      opacity: 1,
      transition,
    },
  };

  const numberVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition,
    },
  };
  const isDark = mounted && (resolvedTheme === "dark" || theme === "dark");

  return (
    <section id="methodology" className={`min-h-screen w-full relative overflow-hidden flex items-center py-24 lg:py-0 transition-colors duration-500 ${isDark ? 'bg-white text-slate-900' : 'bg-[#020617] text-white'}`}>
      <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-brand-blue/10 blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-brand-blue/5 blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 px-6 w-full">
        <SectionHeader
          badge="OBRAS SELECIONADAS"
          title={content.title}
          description={content.desc}
          align="center"
          light={!isDark}
          inverted={isDark}
          className="mb-24"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 relative">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={stepVariants}
              className="relative group flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    x: isMobile ? 0 : -50,
                    y: isMobile ? -30 : 0
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: { duration: 0.8 }
                  }
                }}
                animate={{
                  y: [0, -10, 0],
                  transition: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className={`text-[10rem] font-black absolute -top-12 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 select-none pointer-events-none group-hover:text-brand-blue/10 transition-colors duration-700 leading-none ${isDark ? 'text-[#e1dffd]/[0.6]' : 'text-white/[0.03]'}`}
              >
                {step.num}
              </motion.div>

              <div className="relative flex items-center justify-center w-full lg:justify-start mb-12">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-[4rem] w-[calc(100%-4rem)] h-[2px] z-0 overflow-hidden ml-6">
                    <motion.div
                      variants={{
                        hidden: { width: 0 },
                        visible: {
                          width: "100%",
                          transition: { delay: 1 + i * 0.2, duration: 1.5, ease: "easeInOut" }
                        }
                      }}
                      className="h-full bg-gradient-to-r from-brand-blue to-transparent opacity-30"
                    />
                  </div>
                )}

                <motion.div
                  variants={squareVariants}
                  whileHover={{ rotate: 6, scale: 1.05 }}
                  className="relative z-10 w-16 h-16 min-w-[4rem] bg-brand-blue rounded-2xl flex items-center justify-center font-black text-xl text-white shadow-xl shadow-brand-blue/20"
                >
                  <motion.span
                    variants={numberVariants}
                    className="inline-block"
                  >
                    {step.num}
                  </motion.span>
                </motion.div>
              </div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8 }
                  }
                }}
                className="relative z-10 space-y-4"
              >
                <h3 className="text-2xl font-black tracking-tight group-hover:text-brand-blue transition-colors duration-300">{step.title}</h3>
                <p className={`leading-relaxed text-lg font-medium opacity-70 group-hover:opacity-100 transition-all duration-300 ${isDark ? 'text-slate-500' : 'text-white/60'}`}>
                  {step.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
