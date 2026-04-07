import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const Hero = () => (
  <section className="relative overflow-hidden mesh-gradient min-h-[95vh] flex items-center">
    <div className="section-padding pt-32 lg:pt-40 flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto w-full relative z-10">
      <div className="flex-1 text-center lg:text-left space-y-8 animate-in fade-in slide-in-from-left-20 duration-1000 ease-out">

        <h1 className="title-main text-gradient italic">
          Desenvolvemos software que escala seu negócio
        </h1>

        <p className="text-lg text-muted max-w-xl leading-relaxed mx-auto lg:mx-0 font-medium">
          Combinamos engenharia de excelência com design centrado no usuário para criar produtos digitais que dominam o mercado.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
          <a
            href="#contact"
            className="btn-primary group flex items-center gap-2 text-base no-underline"
          >
            Solicitar orçamento
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <div className="flex-1 relative w-full aspect-square lg:aspect-[3/2] animate-in fade-in slide-in-from-right-12 duration-1000 delay-200">
        <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] blur-3xl -z-10 translate-x-8 translate-y-8 opacity-50" />
        <div className="relative h-full w-full rounded-[1.5rem] overflow-hidden shadow-2xl animate-float">
          <Image
            src="/hero-main.png"
            alt="Dashboard de Software Moderno"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  </section>
);

