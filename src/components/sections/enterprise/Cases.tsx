"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const Cases = () => {
  const cases = [
    {
      company: "CalibraFlow",
      title: "Sistema de Auditoria ISO - Petrobras",
      metric: "100%",
      metricDesc: "Compliance e Auditoria Normativa Digital",
      description: "Desenvolvimento de plataforma robusta para gestão de auditorias ISO, garantindo conformidade normativa e automação de fluxos críticos para a Petrobras.",
      tags: ["ISO 9001", "Compliance", "Petrobras"],
      color: "from-yellow-500/10 to-transparent"
    },
    {
      company: "Unilab",
      title: "Gestão Laboratorial e Hemocentro Veterinário",
      metric: "Precisão Absoluta",
      metricDesc: "no controle de bolsas de sangue e exames",
      description: "Plataforma completa para gestão laboratorial veterinária, incluindo módulos de cadastro de clientes, exames e controle rigoroso de estoque para hemocentros.",
      tags: ["Saúde Animal", "Gestão", "Hemocentro"],
      color: "from-red-500/10 to-transparent"
    },
    {
      company: "DuAutomações",
      title: "Automação e Proteção Residencial Inteligente",
      metric: "+50%",
      metricDesc: "eficiência na conversão de orçamentos",
      description: "Sistema integrado para controle de vendas e orçamentos complexos, conectando processos comerciais à execução de projetos de automação e segurança residencial.",
      tags: ["Automação", "Vendas", "Orçamentos"],
      color: "from-blue-600/10 to-transparent"
    },
    {
      company: "DrPet",
      title: "Gestão Inteligente para Centros Estéticos Pets",
      metric: "+45%",
      metricDesc: "aumento na produtividade operacional",
      description: "Sistema completo de controle de agendas e otimização de fluxo de clientes para serviços de banho e tosa, integrando gestão financeira e fidelização.",
      tags: ["Gestão", "SaaS", "Agendamento"],
      color: "from-rose-500/10 to-transparent"
    }
  ];

  return (
    <section id="cases" className="py-24 bg-deep-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Cases de Sucesso"
          description="Projetos reais que transformaram desafios técnicos em marcos de crescimento para nossos parceiros enterprise."
          align="center"
          light={true}
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((projeto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-white border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-0 overflow-hidden group">
                <div className={`h-2 bg-gradient-to-r ${index === 0 ? 'from-yellow-500' :
                  index === 1 ? 'from-red-500' :
                    index === 2 ? 'from-blue-600' :
                      'from-rose-500'
                  } to-transparent opacity-50 group-hover:opacity-100 transition-opacity`} />
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{projeto.company}</span>
                    <ArrowUpRight className="text-slate-300 group-hover:text-primary transition-colors" size={20} />
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-4 leading-tight">
                    {projeto.title}
                  </h3>

                  <div className="mb-6 p-6 bg-slate-50/50 rounded-2xl border border-slate-100 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${projeto.color} opacity-40`} />
                    <div className="relative z-10">
                      <span className={`${projeto.metric.length > 5 ? 'text-2xl' : 'text-4xl'} font-black text-slate-900 block mb-1`}>{projeto.metric}</span>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-tight">{projeto.metricDesc}</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-500 mb-8 leading-relaxed font-medium">
                    {projeto.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {projeto.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-bold px-3 py-1 bg-slate-100 text-slate-500 rounded-full uppercase tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
