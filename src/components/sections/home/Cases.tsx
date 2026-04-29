"use client";

import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useTheme } from "next-themes";

const originalCases = [
  {
    title: "Carol Psicanálise",
    description: "Criamos um website portfólio para uma psicanalista, focando em elegância e conversão.",
    image: "/cases/carol.png",
  },
  {
    title: "Carol Psicanálise",
    description: "Criamos um website portfólio para uma psicanalista, focando em elegância e conversão.",
    image: "/cases/carol.png",
  },
  {
    title: "Carol Psicanálise",
    description: "Criamos um website portfólio para uma psicanalista, focando em elegância e conversão.",
    image: "/cases/carol.png",
  },
  {
    title: "Carol Psicanálise",
    description: "Criamos um website portfólio para uma psicanalista, focando em elegância e conversão.",
    image: "/cases/carol.png",
  },
  {
    title: "Carol Psicanálise",
    description: "Criamos um website portfólio para uma psicanalista, focando em elegância e conversão.",
    image: "/cases/carol.png",
  },
];

// Duplicate the cases to ensure Embla has enough slides to loop flawlessly
const loopCases = [...originalCases, ...originalCases];

export const Cases = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    dragFree: false,
  });

  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && (resolvedTheme === "dark" || theme === "dark");



  return (
    <section id="cases" className={`py-24 lg:py-32 w-full relative overflow-hidden ${isDark ? "bg-background" : "bg-white"} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <SectionHeader
          badge="CASES"
          title="Resultados que mudam a curva da operação."
          description="Projetos selecionados que mostram como tratamos sistemas como ativos estratégicos."
          align="split"
          titleClassName={`!font-bold !text-2xl lg:!text-3xl !leading-tight ${isDark ? "text-white" : "text-[#1F2937]"}`}
          descClassName={`!font-normal !text-sm lg:!text-base ${isDark ? "text-[#94A3B8]" : "text-[#6B7280]"}`}
          hideLine={true}
        />
      </div>

      <div className="relative mt-16 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Gradiente Lateral Esquerdo */}
        <div className={`absolute left-0 top-0 bottom-0 w-16 sm:w-32 lg:w-48 z-10 pointer-events-none bg-gradient-to-r ${isDark ? 'from-background' : 'from-white'} to-transparent`} />
        
        {/* Gradiente Lateral Direito */}
        <div className={`absolute right-0 top-0 bottom-0 w-16 sm:w-32 lg:w-48 z-10 pointer-events-none bg-gradient-to-l ${isDark ? 'from-background' : 'from-white'} to-transparent`} />

        <div className="overflow-hidden w-full cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex touch-pan-y" style={{ backfaceVisibility: "hidden" }}>
            {loopCases.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_auto] px-3 md:px-4"
              >
                <div className="flex flex-col gap-6 group w-[85vw] sm:w-[288px]">
                  <div
                    className={`bg-[#111827] rounded-lg overflow-hidden aspect-[343/415] relative border ${isDark ? 'border-white/10 shadow-none' : 'border-black/10 shadow-xl shadow-black/5'}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 85vw, (max-width: 1200px) 45vw, 33vw"
                      className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      draggable={false}
                      priority={index < 4}
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111827]/40 pointer-events-none" />
                  </div>

                  {/* Content below the card */}
                  <div className="space-y-3 px-2 flex flex-col items-center text-center">
                    <h3 className={`font-medium text-2xl leading-7 tracking-tight group-hover:text-brand-blue transition-colors ${isDark ? 'text-white' : 'text-[#262626]'}`}>
                      {item.title}
                    </h3>
                    <p className={`font-normal text-sm leading-6 tracking-normal ${isDark ? 'text-slate-400' : 'text-[#6B7280]'}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center mt-20 relative z-10"
      >
        <button className="w-full max-w-[374px] h-14 px-8 flex items-center justify-center gap-3 rounded-full border border-gray-50/15 bg-brand-blue hover:bg-brand-blue/90 text-gray-100 font-medium text-base transition-all duration-300 shadow-[0_0_40px_rgba(37,113,184,0.3)] hover:shadow-[0_0_60px_rgba(37,113,184,0.4)] hover:-translate-y-1 cursor-pointer">
          Discutir um case semelhante
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </motion.div>
    </section>
  );
};
