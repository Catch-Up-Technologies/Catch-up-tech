"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useTheme } from "next-themes";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    id: "01",
    question: "Vocês são uma agência de desenvolvimento?",
    answer: "Não somos uma agência tradicional. Somos parceiros estratégicos focados em construir ativos digitais que escalam. Enquanto agências entregam projetos pontuais, nós nos aprofundamos no seu negócio para garantir que a tecnologia resolva problemas reais e gere resultados tangíveis.",
  },
  {
    id: "02",
    question: "Quanto custa um projeto com a CatchUp Tech?",
    answer: "O investimento varia de acordo com o escopo e a complexidade do desafio. Trabalhamos com modelos flexíveis, desde projetos fechados até squads dedicados, sempre com transparência total sobre alocação e custos.",
  },
  {
    id: "03",
    question: "Como vocês evitam o vendor lock-in que prometem combater?",
    answer: "Utilizamos tecnologias open-source líderes de mercado, arquiteturas desacopladas e entregamos o código-fonte com documentação completa. Você é dono da sua tecnologia, e nossa retenção se baseia na entrega contínua de valor, não em dependências forçadas.",
  },
  {
    id: "04",
    question: "Em quanto tempo vejo resultado?",
    answer: "Nosso foco é o time-to-market. Utilizamos metodologias ágeis e entregas iterativas (MVPs) para que você tenha versões funcionais do produto testáveis em semanas, não meses, acelerando o ciclo de feedback e retorno.",
  },
  {
    id: "05",
    question: "Vocês atendem de qualquer tamanho?",
    answer: "Trabalhamos desde scale-ups e startups em fase de tração até corporações estabelecidas que buscam modernização digital. O que define nossa parceria é a ambição do projeto e o alinhamento de valores, independentemente do tamanho da equipe.",
  }
];

const FaqItem = ({ item, isOpen, onClick, isDark }: { item: typeof faqData[0], isOpen: boolean, onClick: () => void, isDark: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "end 15%"]
  });

  // Fade and slide effect based on scroll position
  // 0 -> start 95% (entering bottom)
  // 0.3 to 0.7 -> middle of screen (fully visible)
  // 1 -> end 15% (leaving top)
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.1, 1, 1, 0.1]);
  const x = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [40, 0, 0, 40]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x }}
      className={`border-b ${isDark ? 'border-white/10' : 'border-black/5'} py-8 last:border-0 transition-all duration-300`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-8 text-left group"
      >
        <span className={`text-xl lg:text-[22px] font-normal leading-snug transition-colors ${isDark ? 'text-white' : 'text-slate-800 group-hover:text-slate-600'}`}>
          {item.question}
        </span>
        <div className="shrink-0 text-brand-blue">
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-4">
              <p className={`text-[17px] leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQ = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && (resolvedTheme === "dark" || theme === "dark");

  return (
    <section id="faq" className={`py-24 lg:py-32 w-full relative ${isDark ? "bg-background" : "bg-white"} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row lg:justify-between gap-16 lg:gap-24 relative z-10">

        {/* Left Column - Sticky Header */}
        <div className="w-full lg:w-5/12 shrink-0">
          <div className="lg:sticky lg:top-40">
            <SectionHeader
              badge="FAQ"
              title="Perguntas que decidem a contratação."
              description="Cinco objeções reais que ouvimos antes de cada engajamento — respondidas direto."
              align="left"
              titleClassName={`!font-bold !text-4xl lg:!text-[2.75rem] !leading-[1.15] mb-6 ${isDark ? "text-white" : "text-[#1F2937]"}`}
              descClassName={`!text-[17px] !leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}
              hideLine={true}
            />
          </div>
        </div>

        {/* Right Column - Scrollable Questions */}
        <div className="w-full lg:w-5/12 flex flex-col">
          {/* Espaçamento extra apenas em telas grandes para permitir o scroll effect brilhar */}
          <div className="lg:py-[15vh]">
            {faqData.map((item) => (
              <FaqItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                isDark={!!isDark}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
