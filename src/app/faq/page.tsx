"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { ContactFormFields } from "@/components/sections/home/ContactFormFields";

export default function FAQPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "1. O que a CatchUp Tech faz?",
      a: "Somos uma empresa de engenharia de software focada em transformar desafios operacionais em vantagem competitiva. Desenvolvemos soluções sob medida de IA e automação a arquiteturas complexas e UX/UI  garantindo que a tecnologia seja o motor da sua eficiência.",
    },
    {
      q: "2. Para quais tipos de empresas a CatchUp Tech é ideal?",
      a: "Atuamos com organizações que buscam escala, otimização de processos e soberania digital. Nossas soluções atendem desde plataformas de e-commerce modernas até sistemas complexos de gestão (ERP) e automações industriais ou de serviços.",
    },
    {
      q: "3. A CatchUp Tech substitui minha tecnologia atual?",
      a: "Não necessariamente. Atuamos tanto na criação de ecossistemas do zero quanto na modernização de sistemas legados e integração de APIs, garantindo que sua infraestrutura atual evolua sem interrupções críticas.",
    },
    {
      q: "4. Como vocês medem o sucesso de um projeto?",
      a: "O sucesso é medido através do resultado operacional. Focamos em métricas como redução de custos, otimização de fluxos de trabalho, performance do sistema (velocidade e estabilidade) e o retorno sobre o investimento (ROI) da automação implementada.",
    },
    {
      q: "5. Quanto tempo leva para implementar uma solução?",
      a: "Trabalhamos com Agilidade Estratégica. O tempo varia conforme a complexidade, mas estruturamos entregas incrementais para que você veja valor em poucas semanas, permitindo ajustes rápidos e impacto imediato na operação.",
    },
    {
      q: "6. Preciso desenvolver todo o sistema de uma vez?",
      a: "Não. Nossa abordagem de Arquitetura Sólida permite o desenvolvimento modular. Podemos começar automatizando um fluxo crítico ou desenvolvendo um MVP (Mínimo Produto Viável) e escalar a solução conforme o negócio cresce.",
    },
    {
      q: "7. Com quais plataformas e tecnologias vocês integram?",
      a: "Nossa engenharia de APIs & Integrações é agnóstica. Integramos com os principais ERPs, gateways de pagamento, CRMs e serviços de nuvem do mercado, garantindo um fluxo de dados contínuo em todo o seu ecossistema digital.",
    },
    {
      q: "8. Quais dados a CatchUp Tech precisa para iniciar?",
      a: "Iniciamos com um Diagnóstico Estratégico para entender seus fluxos operacionais e gargalos técnicos. A partir daí, definimos os requisitos de dados necessários para alimentar os motores de IA ou as rotinas de automação.",
    },
    {
      q: "9. A CatchUp Tech está em conformidade com a LGPD?",
      a: "Sim. Implementamos o princípio de Privacy by Design. Toda a arquitetura de software e governança de dados é construída seguindo as normas da LGPD, garantindo segurança jurídica e ética no tratamento das informações.",
    },
    {
      q: "10. A Inteligência Artificial \"aprende\" com o tempo?",
      a: "Sim. Nossos motores de IA e Automação são desenhados para identificar padrões e otimizar processos continuamente. Quanto mais a solução é utilizada, mais refinados se tornam os insights e a eficiência operacional.",
    },
    {
      q: "11. O usuário final percebe que o sistema é automatizado?",
      a: "Nosso foco em UX/UI Design garante que as automações sejam fluidas e invisíveis. O objetivo é que a experiência seja tão natural que o usuário perceba apenas a eficiência e a agilidade, e não a complexidade técnica por trás dela.",
    },
    {
      q: "12. Quem cuida da operação depois que o sistema vai ao ar?",
      a: "Oferecemos planos de suporte e evolução contínua. Além disso, entregamos documentação técnica completa para garantir sua Soberania Digital, permitindo que sua equipe interna ou nossos especialistas mantenham a alta performance.",
    },
    {
      q: "13. Como funciona o modelo de contratação?",
      a: "Trabalhamos com modelos consultivos baseados em escopo fechado para projetos específicos ou modelos de parceria contínua (squads) para evolução constante de produtos e arquiteturas.",
    },
    {
      q: "14. Posso fazer um piloto antes?",
      a: "Sim! Oferecemos períodos de teste e provas de conceito (PoC) para que você possa avaliar o impacto real e os resultados técnicos antes de comprometer-se com uma implementação em larga escala.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="bg-secondary border-b border-white/5 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight uppercase italic mb-6"
          >
            FAQ: <br />
            <span className="text-primary">Como podemos ajudar?</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted leading-relaxed font-medium max-w-2xl"
          >
            Construa uma arquitetura digital sob medida para seu negócio, com engenharia de precisão e foco em resultados.
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={index}
                className={cn(
                  "group transition-all duration-300 rounded-2xl border border-transparent cursor-pointer",
                  isExpanded ? "bg-card-muted/50 border-border" : "hover:bg-card-muted/30"
                )}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-6 lg:p-8 flex items-start justify-between gap-6 cursor-pointer"
                >
                  <h2 className={cn(
                    "text-xl lg:text-2xl font-bold tracking-tight uppercase px-0 border-none transition-all",
                    isExpanded ? "text-primary" : "text-foreground group-hover:text-primary"
                  )}>
                    {faq.q}
                  </h2>
                  <div className={cn(
                    "mt-1 lg:mt-2 shrink-0 transition-transform duration-500",
                    isExpanded ? "rotate-180 text-primary" : "text-muted/50 group-hover:text-primary"
                  )}>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 lg:px-8 lg:pb-10 pt-0">
                        <div className="prose prose-slate max-w-none">
                          <p className="text-foreground/80 text-lg leading-relaxed font-medium">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {index < faqs.length - 1 && !isExpanded && (
                  <div className="mx-6 lg:mx-8 h-px bg-border/50" />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-24 pt-16 border-t border-border">
          <div className="max-w-2xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-black text-foreground uppercase tracking-tight">
                Ainda tem <span className="text-primary">Dúvidas?</span>
              </h2>
              <p className="text-lg text-foreground/80 font-medium">
                Caso não tenha encontrado o que procurava, envie sua pergunta diretamente para nosso time de engenharia.
              </p>
            </div>

            <div className="relative">
              <ContactFormFields subject="FAQ - duvidas" />
            </div>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-border text-center">
          <p className="text-sm text-foreground/60 font-medium italic">
            CatchUp Tech  Todos os direitos reservados. Vigência 2026.
          </p>
        </div>
      </div>
    </main>
  );
}
