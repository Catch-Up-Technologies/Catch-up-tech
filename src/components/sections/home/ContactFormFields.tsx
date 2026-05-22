"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useTheme } from "next-themes";

const formVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

interface ContactFormFieldsProps {
  subject?: string;
}

export const ContactFormFields = ({ subject = "Contato - Website" }: ContactFormFieldsProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && (resolvedTheme === "dark" || theme === "dark");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Solicitação enviada com sucesso!");
    }, 1500);
  };

  const labelStyles = `text-sm font-medium mb-2 block transition-colors ${
    isDark ? "text-[#F8FAFC]" : "text-[#1F2937]"
  }`;
  
  const inputStyles = `w-full border rounded-md px-6 py-3 backdrop-blur-xl placeholder:font-normal focus:border-[#2571B8] focus:ring-1 focus:ring-[#2571B8] transition-all outline-none ${
    isDark 
      ? "bg-black/10 border-white/10 text-white placeholder:text-[#94A3B8]" 
      : "bg-[#F3F4F6] border-black/10 text-[#1F2937] placeholder:text-[#94A3B8]"
  }`;

  return (
    <motion.div
      variants={formVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`w-full max-w-[526px] mx-auto border px-8 py-6 rounded-2xl backdrop-blur-xl transition-colors ${
        isDark ? "bg-[#111822]/30 border-white/10" : "bg-white/30 border-black/10"
      }`}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <input type="hidden" name="subject" value={subject} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className={labelStyles}>Nome</label>
            <input 
              type="text" 
              placeholder="seu nome" 
              className={inputStyles}
              required
            />
          </div>
          <div>
            <label className={labelStyles}>Empresa</label>
            <input 
              type="text" 
              placeholder="nome da empresa" 
              className={inputStyles}
              required
            />
          </div>
        </div>

        <div>
          <label className={labelStyles}>Email</label>
          <input 
            type="email" 
            placeholder="voce@empresa.com" 
            className={inputStyles}
            required
          />
        </div>

        <div>
          <label className={labelStyles}>Descrição do projeto</label>
          <textarea 
            rows={6}
            placeholder="Qual o maior desafio tecnológico da operação hoje?" 
            className={`${inputStyles} resize-none`}
            required
          />
        </div>

        <Button
          variant="brand"
          size="lg"
          className="w-full rounded-[30px] py-[14px] h-auto font-medium text-[17px] mt-2 shadow-none"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
        </Button>
      </form>
    </motion.div>
  );
};
