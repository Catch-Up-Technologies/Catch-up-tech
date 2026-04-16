"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const About = () => {
  return (
    <section id="about" className="py-32 bg-background overflow-hidden relative">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--dot-pattern)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:pr-10"
          >
            <SectionHeader
              title="Sobre a CatchUp Tech"
              className="mb-8"
            />
            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                A CatchUp Tech é uma organização de desenvolvimento de software dedicada a converter complexidades operacionais em vantagem competitiva sustentável. Especializada na criação de arquiteturas sob medida e na automação de processos críticos, entregamos soluções escaláveis projetadas para suportar o crescimento e a eficiência de nossos parceiros de negócios.
              </p>
              <p>
                Em um ambiente de constante transformação digital, nossa metodologia integra rigor técnico a uma visão consultiva de alto nível. Mais do que o fornecimento de código, estabelecemos ferramentas estratégicas desenvolvidas para otimizar fluxos de trabalho, mitigar custos operacionais e assegurar a soberania digital de cada projeto.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: Cpu,
                title: "Desenvolvimento de Sistemas Críticos",
                desc: "Engenharia de software focada em alta disponibilidade e performance."
              },
              {
                icon: Zap,
                title: "Automação Inteligente",
                desc: "Otimização de processos para redução de falhas e ganho de escala operacional."
              },
              {
                icon: Users,
                title: "Consultoria em Transformação Digital",
                desc: "Planejamento e execução de estratégias tecnológicas alinhadas aos objetivos de negócio."
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group p-[2px] bg-border rounded-2xl shadow-sm transition-all duration-300 hover:bg-primary hover:shadow-md hover:-translate-y-1"
              >
                <div className="p-6 bg-card-pure rounded-[14px] h-full">
                  <div className="flex gap-5 items-start">
                    <div className="p-3 bg-card-muted rounded-xl text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white shrink-0">
                      <item.icon size={26} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1 text-lg">{item.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
