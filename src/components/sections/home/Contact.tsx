"use client";

import { motion, Variants } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { ContactFormFields } from "./ContactFormFields";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const buttonPopVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1] as const
    }
  }
};

export const Contact = () => {
  const content = {
    title: "Vamos tirar sua ideia do papel",
    description: "Conte um pouco sobre o seu projeto e entraremos em contato para entender melhor suas necessidades e como podemos ajudar.",
    email: "catchuptech@outlook.com",
    phone: "+55 (19) 98234-1110",
  };

  const contactOptions = [
    {
      icon: Mail,
      label: "Envie um email",
      value: content.email,
      link: `mailto:${content.email}`
    },
    {
      icon: Phone,
      label: "Entre em contato",
      value: content.phone,
      link: `https://wa.me/${content.phone.replace(/\D/g, "")}`
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--dot-pattern)_1px,transparent_1px)] [background-size:24px_24px]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <div className="space-y-12">
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="title-main text-gradient">
                {content.title}
              </h2>
              <p className="text-muted text-base sm:text-lg font-medium leading-relaxed max-w-xl">
                {content.description}
              </p>
            </motion.div>

            <div className="space-y-8 pt-8">
              {contactOptions.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={buttonPopVariants}
                  className="flex items-center gap-6 group relative"
                >
                  <motion.a
                    href={item.link}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="w-14 h-14 rounded-2xl bg-card-muted shadow-premium flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 cursor-pointer flex-shrink-0 border border-border"
                  >
                    <item.icon className="w-6 h-6" />
                  </motion.a>
                  <div>
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1 opacity-70">
                      {item.label}
                    </p>
                    <a
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : undefined}
                      className="text-lg sm:text-xl font-black text-foreground tracking-tight hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <ContactFormFields />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
