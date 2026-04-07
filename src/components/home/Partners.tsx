"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const Partners = () => {
  const content = {
    title: "Nossos Parceiros",
    desc: "Trabalhamos com empresas que confiaram em nosso trabalho para construir soluções digitais eficientes e preparadas para crescer. \n Conheça mais sobre quem somos e como podemos ajudar no seu próximo projeto.",
  };

  const partners = [
    { name: "VTEX", desc: "Digital commerce enterprise", prominent: true },
    { name: "Shopify", desc: "E-commerce global", prominent: true },
    { name: "WooCommerce", desc: "Customização open-source", prominent: true },
    { name: "Tray", desc: "Vendas multi-canal", prominent: true },
    { name: "Vendizap", desc: "Automação via WhatsApp", prominent: true },
    { name: "Nuvemshop", desc: "Líder na América Latina", prominent: true },
    { name: "Linx", desc: "Sistemas para varejo", prominent: true },
    { name: "Tray Corp", desc: "E-commerce larga escala", prominent: true },
    { name: "AWS", desc: "Infraestrutura escalável", prominent: true },
    { name: "Keitri", desc: "Consultoria de TI", prominent: true },
    { name: "Loja Integrada", desc: "Vendas online ágeis", prominent: true },
    { name: "Google Cloud", desc: "Poder de computação", prominent: true },
  ];

  const duplicatedPartners = [...partners, ...partners];

  const MarqueeRow = ({ items, direction = "left", speed = 40, className = "", pauseOnHover = false }: any) => {
    const [isPaused, setIsPaused] = useState(false);

    return (
      <div
        className="flex overflow-hidden select-none py-4"
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <motion.div
          className={`flex gap-12 lg:gap-20 whitespace-nowrap items-center w-max ${className}`}
          animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
          transition={{
            duration: isPaused ? 1000000 : speed,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((item: any, i: number) => (
            <div
              key={i}
              className={`
                group flex flex-col items-center justify-center transition-all duration-500
                ${item.prominent ? "scale-110 opacity-100" : "scale-90 opacity-40"}
                hover:!scale-125 hover:!opacity-100 cursor-default
              `}
            >
              <span className={`
                font-black tracking-tighter uppercase transition-colors duration-300
                ${item.prominent ? "text-slate-500" : "text-slate-400"}
                group-hover:text-primary
                text-2xl lg:text-4xl
              `}>
                {item.name}
              </span>

              {pauseOnHover && (
                <motion.span
                  className="text-[10px] lg:text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-4 whitespace-nowrap"
                >
                  {item.desc}
                </motion.span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <section id="partners" className="bg-slate-50/50 w-full py-24 lg:py-32 overflow-hidden border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-6 mb-24 text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="title-section">{content.title}</h2>
          <div className="h-1.5 w-16 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-500 max-w-xl mx-auto text-base lg:text-lg font-medium leading-relaxed opacity-80 whitespace-pre-line"
        >
          {content.desc}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center"
        >
          <Link href="/about" className="btn-primary">Sobre nós</Link>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-8 lg:mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
          className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-center text-slate-500"
        >
          Empresas que já confiaram no nosso trabalho
        </motion.p>
      </div>

      <div className="relative space-y-4 lg:space-y-12">
        <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <MarqueeRow
          items={duplicatedPartners}
          direction="right"
          speed={60}
          className="text-slate-300 font-black text-sm lg:text-xl opacity-10"
        />

        <MarqueeRow
          items={duplicatedPartners}
          direction="left"
          speed={40}
          pauseOnHover={true}
          className="py-6"
        />

        <MarqueeRow
          items={duplicatedPartners}
          direction="right"
          speed={60}
          className="text-slate-300 font-black text-sm lg:text-xl opacity-10"
        />
      </div>
    </section>
  );
};
