"use client";

import { Globe, Smartphone, Settings, Palette, Code, Sparkles } from "lucide-react";
import { motion, Variants } from "framer-motion";

export const Services = () => {
  const items = [
    {
      title: "IA e Automação",
      desc: "Aplicamos inteligência artificial e automações para otimizar processos, reduzir tarefas manuais e gerar insights estratégicos para o seu negócio.",
      icon: Sparkles,
    },
    {
      title: "Desenvolvimento Web",
      desc: "Criamos sistemas web escaláveis e sob medida, focados em performance, segurança e evolução contínua do seu produto.",
      icon: Globe,
    },
    {
      title: "Apps Mobile",
      desc: "Desenvolvemos aplicativos móveis com foco em experiência do usuário, performance e integração com seu ecossistema digital.",
      icon: Smartphone,
    },
    {
      title: "APIs & Integrações",
      desc: "Conectamos sistemas e serviços através de APIs robustas, automatizando processos e aumentando a produtividade.",
      icon: Settings,
    },
    {
      title: "Arquitetura de Software",
      desc: "Projetamos arquiteturas modernas e bem estruturadas, facilitando manutenção, escalabilidade e crescimento do sistema.",
      icon: Code,
    },
    {
      title: "UX/UI Design",
      desc: "Criamos interfaces intuitivas, atraentes e centradas no usuário, garantindo uma experiência fluida e de alto impacto.",
      icon: Palette,
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
      x: -40
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    },
  };

  return (
    <section id="services" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24 space-y-4"
        >
          <h2 className="title-section">Nossos Serviços</h2>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "5rem", opacity: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: "backOut" }}
            className="h-1.5 bg-primary mx-auto rounded-full"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="card-premium group hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-white mb-10 group-hover:scale-110 transition-transform duration-500">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4 tracking-tight leading-tight">{item.title}</h3>
              <p className="text-body !text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};


