"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface Case {
  company: string;
  title: string;
  metric: string;
  metricDesc: string;
  description: string;
  tags: string[];
}

const CaseItem = ({ item }: { item: Case }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <div
      ref={containerRef}
      className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden border-t border-white/5 px-6"
    >
      <motion.div
        style={{ scale }}
        className="max-w-5xl w-full bg-card-pure rounded-[2rem] lg:rounded-[3rem] shadow-2xl p-8 lg:p-12 relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center overflow-hidden"
      >
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-700 to-transparent opacity-20 blur-2xl -translate-y-1/2 translate-x-1/2`} />

        <div className="space-y-6 lg:space-y-8 relative z-10">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-8 bg-slate-100" />
          </div>

          <div className="space-y-2">
            <h3 className="text-foreground text-3xl lg:text-5xl font-black tracking-tight leading-tight uppercase italic">
              {item.company}
            </h3>
            <p className="text-primary text-lg lg:text-2xl font-bold italic">
              {item.title}
            </p>
          </div>

          <p className="text-muted text-base lg:text-lg leading-relaxed max-w-lg font-medium">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag: string, i: number) => (
              <span key={i} className="flex items-center gap-2 text-[9px] font-bold text-muted uppercase tracking-widest bg-card-muted px-3 py-1.5 rounded-lg border border-border">
                <CheckCircle2 size={10} className="text-primary" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative lg:ml-auto w-full">
          <div className="relative p-0.5 bg-gradient-to-br from-border to-transparent rounded-[2rem] lg:rounded-[2.5rem] shadow-lg overflow-hidden group">
            <div className="bg-card-muted p-8 lg:p-12 rounded-[1.8rem] lg:rounded-[2.3rem] border border-border">
              <div className="absolute top-0 right-0 p-6">
                <ArrowUpRight size={24} className="text-muted/40 group-hover:text-primary transition-all duration-500" />
              </div>

              <div className="text-center space-y-1">
                <span className="text-foreground text-6xl lg:text-8xl font-black tracking-tighter block leading-none">
                  {item.metric}
                </span>
                <p className="text-muted font-bold uppercase tracking-[0.3em] text-[9px] lg:text-xs">
                  {item.metricDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const Cases = () => {
  const cases: Case[] = [
    {
      company: "CalibraFlow",
      title: "Auditoria ISO para Petrobras",
      metric: "100%",
      metricDesc: "Compliance & Automação",
      description: "Desenvolvemos uma arquitetura distribuída para gerenciar processos críticos de auditoria, garantindo soberania digital em ambientes de alta complexidade normativa.",
      tags: ["Distributed Systems", "Compliance", "Architecture"],
    },
    {
      company: "Unilab",
      title: "Gestão Laboratorial Veterinária",
      metric: "+85%",
      metricDesc: "Eficiência Logística",
      description: "Integração completa de fluxos laboratoriais, desde o rastreio de amostras até o controle de hemocentros, com precisão absoluta de dados.",
      tags: ["Laboratory Management", "Real-time Tracking", "Data Integrity"],
    },
    {
      company: "DuAutomações",
      title: "Business Intelligence comercial",
      metric: "+50%",
      metricDesc: "Conversão de Vendas",
      description: "Transformamos tabelas complexas em dashboards preditivos que aceleraram o ciclo de vendas e a precisão técnica de projetos de automação.",
      tags: ["Business Intelligence", "Decision Support", "Workflow Automation"],
    },
    {
      company: "DrPet",
      title: "Transformação Digital de Varejo",
      metric: "+45%",
      metricDesc: "ROI Operacional",
      description: "Revolucionamos a gestão de serviços com uma plataforma SaaS que otimiza agendamentos e fideliza clientes através de uma UX excepcional.",
      tags: ["SaaS Architecture", "Product Design", "UX Engineering"],
    }
  ];

  return (
    <section id="cases" className="bg-secondary w-full relative">
      <div className="h-screen w-full flex items-center justify-center bg-secondary relative z-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeader
            title="Cases de Sucesso"
            description="A engenharia por trás de marcos operacionais. Descubra como transformamos desafios técnicos em vantagens competitivas de escala."
            align="center"
            light={true}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col">
        {cases.map((projeto, index) => (
          <CaseItem
            key={index}
            item={projeto}
          />
        ))}
      </div>

      <div className="h-[20vh] bg-secondary" />
    </section>
  );
};
