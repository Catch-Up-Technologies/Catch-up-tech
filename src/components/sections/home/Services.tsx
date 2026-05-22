"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const Services = () => {
  const items = [
    {
      title: "IA e Automação",
      desc: "Aplicamos inteligência artificial e automações para otimizar processos, reduzir tarefas manuais e gerar insights estratégicos para o seu negócio.",
      image: "/services/logo-automation.png",
      span: "md:col-span-1",
    },
    {
      title: "Desenvolvimento Web",
      desc: "Criamos sistemas web escaláveis e sob medida, focados em performance, segurança e evolução contínua do seu produto.",
      image: "/services/logo-web.png",
      span: "md:col-span-1",
    },
    {
      title: "Apps Mobile",
      desc: "Desenvolvemos aplicativos móveis com foco em experiência do usuário, performance e integração com seu ecossistema digital.",
      image: "/services/logo-mobile.png",
      span: "md:col-span-1",
    },
    {
      title: "APIs & Integração",
      desc: "Conectamos sistemas e serviços através de APIs, automatizando processos e aumentando a produtividade.",
      image: "/services/logo-api.png",
      span: "md:col-span-1",
    },
    {
      title: "Arquitetura de Software",
      desc: "Projetamos arquiteturas modernas e bem estruturadas, facilitando manutenção, escalabilidade e crescimento do sistema.",
      image: "/services/logo-software.png",
      span: "md:col-span-2",
    },
    {
      title: "UX/UI Design",
      desc: "Criamos interfaces intuitivas, atraentes e centradas no usuário, garantindo uma experiência fluida e de alto impacto.",
      image: "/services/logo-ux.png",
      span: "md:col-span-3",
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    },
  };

  return (
    <section id="services" className="pt-10 lg:pt-14 pb-20 lg:pb-32 overflow-hidden relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          badge="OBRAS SELECIONADAS"
          title="Projetando Produtos Que Moldam o Futuro"
          align="center"
          className="mb-24"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`${item.span} group flex flex-col h-full bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 rounded-[2.5rem] p-8 lg:p-12 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.02)] transition-all duration-500`}
            >
              <div className="relative w-full flex-1 min-h-[220px] md:min-h-[260px] lg:min-h-[300px] mb-10 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain object-center group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-2xl"
                />
              </div>
              <div className="flex flex-col justify-end mt-auto">
                <h3 className="text-2xl lg:text-[28px] font-bold text-foreground mb-4 tracking-tight">{item.title}</h3>
                <p className="text-[#6B7280] dark:text-slate-400 text-base lg:text-[17px] leading-relaxed max-w-3xl">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};


