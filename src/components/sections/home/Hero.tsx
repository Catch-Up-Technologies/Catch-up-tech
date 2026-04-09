"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const Hero = () => {
  const content = {
    title: "Transformamos ideias em soluções digitais",
    desc: "Desenvolvemos aplicações sob medida com foco em performance, organização e evolução contínua, ajudando empresas a tirar projetos do papel e crescer com tecnologia.",
    btn: "Solicitar orçamento",
  };
  return (
    <section id="home" className="relative overflow-hidden mesh-gradient min-h-[95vh] flex items-center">
      <div className="section-padding pt-32 lg:pt-40 flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto w-full relative z-10">
        <div className="flex-1 text-center lg:text-left space-y-8">

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="title-main text-gradient italic"
          >
            {content.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-muted max-w-xl leading-relaxed mx-auto lg:mx-0 font-medium"
          >
            {content.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6"
          >
            <Link href="#contact" className="no-underline">
              <Button className="group flex items-center gap-2 text-base">
                {content.btn}
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 relative w-full aspect-square lg:aspect-[3/2]"
        >
          <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] blur-3xl -z-10 translate-x-8 translate-y-8 opacity-50" />
          <div className="relative h-full w-full rounded-[1.5rem] overflow-hidden shadow-2xl animate-float">
            <Image
              src="/hero-main.png"
              alt="Dashboard de Software Moderno"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

