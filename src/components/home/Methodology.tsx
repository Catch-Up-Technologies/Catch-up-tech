"use client";

import { useEffect, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";

export const Methodology = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
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

  return (
    <section id="methodology" className="min-h-screen w-full bg-secondary text-white relative overflow-hidden flex items-center py-24 lg:py-0">
      <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-primary/10 blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-primary/5 blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 px-6 w-full">
        <div className="text-center mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="title-section !text-white !text-4xl lg:!text-6xl mb-4">{content.title}</h2>
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "8rem", opacity: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: "backOut" }}
              className="h-2 bg-primary mx-auto rounded-full"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium"
          >
            {content.desc}
          </motion.p>
        </div>

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
                className="text-[10rem] font-black text-white/[0.03] absolute -top-24 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 select-none pointer-events-none group-hover:text-primary/10 transition-colors duration-700"
              >
                {step.num}
              </motion.div>

              <div className="relative flex items-center justify-center w-full lg:justify-start mb-12">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-[calc(50%+2rem)] w-full h-[2px] z-0 overflow-hidden">
                    <motion.div
                      variants={{
                        hidden: { width: 0 },
                        visible: { 
                          width: "100%", 
                          transition: { delay: 1 + i * 0.2, duration: 1.5, ease: "easeInOut" } 
                        }
                      }}
                      className="h-full bg-gradient-to-r from-primary to-transparent opacity-30"
                    />
                  </div>
                )}

                <motion.div
                  variants={squareVariants}
                  whileHover={{ rotate: 6, scale: 1.05 }}
                  className="relative z-10 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center font-black text-xl shadow-xl shadow-primary/20"
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
                <h3 className="text-2xl font-black tracking-tight group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                <p className="text-zinc-300 leading-relaxed text-lg font-medium opacity-70 group-hover:opacity-100 transition-all duration-300">
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
