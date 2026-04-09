import { motion } from "framer-motion";
import { Rocket, Shield, Activity, Gavel, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const Guidelines = () => {
  return (
    <section className="py-32 bg-slate-50/50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Diretrizes Institucionais"
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.6
            }}
            className="lg:col-span-1"
          >
            <Card className="h-full border-primary/20 bg-primary/[0.02]">
              <div className="p-8">
                <div className="p-4 bg-primary/10 rounded-2xl w-fit mb-6 text-primary">
                  <Rocket size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">Missão</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  Catalisar a evolução digital de organizações através de engenharia de software inteligente, consolidando a tecnologia como o principal motor de inovação e eficiência contínua.
                </p>
              </div>
            </Card>
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            {[
              { icon: Shield, title: "Excelência Técnica", desc: "Rigor no desenvolvimento de arquiteturas sólidas e manutenção de código de longo prazo." },
              { icon: Activity, title: "Agilidade Estratégica", desc: "Capacidade de resposta rápida às demandas de mercado com foco em entregas de valor." },
              { icon: Gavel, title: "Governança e Ética", desc: "Transparência em todos os processos de gestão de dados e ciclos de desenvolvimento." },
              { icon: TrendingUp, title: "Orientação a Resultados", desc: "Compromisso com métricas de sucesso que impactem diretamente a operação do cliente." },
            ].map((valor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  duration: 0.6,
                  delay: 0.1 + (i * 0.1)
                }}
              >
                <Card className="bg-white hover:shadow-xl transition-shadow duration-500 h-full">
                  <div className="p-6">
                    <div className="flex gap-4 items-start">
                      <div className="p-2 bg-slate-50 rounded-lg text-primary">
                        <valor.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{valor.title}</h4>
                        <p className="text-sm text-slate-500">{valor.desc}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
