"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Contact = () => {
  return (
    <section className="py-32 bg-background border-t border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="p-8 lg:p-16 bg-secondary rounded-[2.5rem] text-center text-white relative overflow-hidden shadow-2xl"
        >
          {/* Subtle Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] -ml-32 -mb-32" />

          <div className="relative z-10">
            <Mail className="mx-auto text-primary mb-6" size={48} />
            <h2 className="text-3xl lg:text-5xl font-black mb-6">Pronto para elevar sua operação?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg mb-10 opacity-90">
              Para consultas comerciais ou detalhes técnicos sobre nossas soluções, utilize nosso canal oficial:
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Button
                variant="outline"
                className="text-white border-white/20 hover:bg-white/10 px-10 py-6"
                onClick={() => window.location.href = '/#contact'}
              >
                Ir para contato
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
