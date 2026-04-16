"use client";

import React, { useState, useMemo } from "react";
import { Send, Loader2 } from "lucide-react";
import { motion, Variants } from "framer-motion";
import {
  getCountryCallingCode,
  AsYouType,
  CountryCode,
  getExampleNumber,
} from "libphonenumber-js";
import examples from "libphonenumber-js/examples.mobile.json";
import countryNames from "react-phone-number-input/locale/pt.json";
import { getCountries } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { validatePhone } from "@/lib/validations";
import { CountrySelector } from "./CountrySelector";

interface ContactFormFieldsProps {
  subject?: string;
}

const formVariants: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
};

export const ContactFormFields = ({ subject = "Contato - Website" }: ContactFormFieldsProps) => {
  const [country, setCountry] = useState<CountryCode>("BR");
  const [localNumber, setLocalNumber] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const countries = useMemo(() =>
    getCountries().map((c) => ({
      code: c,
      name: countryNames[c] || c,
      ddi: getCountryCallingCode(c),
    })).filter(c => c.ddi),
    []);

  const filteredCountries = useMemo(() =>
    countries
      .filter(c =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.ddi.includes(searchQuery)
      )
      .sort((a, b) => {
        if (a.code === "BR") return -1;
        if (b.code === "BR") return 1;
        return a.name.localeCompare(b.name);
      }),
    [countries, searchQuery]
  );

  const formContent = {
    name: "Nome Completo",
    phone: "Número de Contato",
    message: "Mensagem",
    submit: "Enviar Solicitação",
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formatter = new AsYouType(country);
    const formatted = formatter.input(value);
    setLocalNumber(formatted);
  };

  const dynamicPlaceholder = useMemo(() => {
    try {
      const example = getExampleNumber(country, examples);
      return example ? example.formatNational() : "Digite seu número";
    } catch {
      return "Digite seu número";
    }
  }, [country]);

  const validate = (data: { name: string; fullPhone: string; message: string }) => {
    const newErrors: Record<string, string> = {};
    if (!data.name.trim()) newErrors.name = "O nome é obrigatório";
    if (!data.message.trim()) {
      newErrors.message = "A mensagem é obrigatória";
    }

    if (!localNumber.trim()) {
      newErrors.phone = "O telefone é obrigatório";
    } else if (!validatePhone(data.fullPhone, country)) {
      newErrors.phone = `Número inválido para este país`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setErrors({});

    const formData = new FormData(e.currentTarget);
    const ddi = getCountryCallingCode(country);
    const fullPhone = `+${ddi}${localNumber.replace(/\D/g, "")}`;
    const name = formData.get("name") as string;
    const message = formData.get("message") as string;

    const data = {
      name,
      fullPhone,
      message,
    };

    if (!validate(data)) return;

    setIsSubmitting(true);

    const emailBody = `Nome: ${name}\nTelefone: ${fullPhone}\n\nMensagem:\n${message}`;
    const mailtoLink = `mailto:catchuptech@outlook.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <motion.div
      variants={formVariants}
      className="p-6 sm:p-10 lg:p-16 bg-card-pure shadow-2xl rounded-3xl relative overflow-hidden border border-border h-full"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />

        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid grid-cols-1 gap-10">
            <div className="space-y-3">
              <label
                htmlFor="contact-fields-name"
                className="text-xs font-black text-foreground uppercase tracking-widest px-1 cursor-pointer"
              >
                {formContent.name} <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                id="contact-fields-name"
                type="text"
                name="name"
                required
                placeholder="Seu nome completo"
                className={`w-full bg-card-muted border-0 border-b-2 px-4 py-4 rounded-xl focus:ring-0 transition-colors font-medium text-foreground ${errors.name ? "border-red-500 bg-red-50/10" : "border-border focus:border-primary"
                  }`}
              />
              {errors.name && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider px-1">{errors.name}</p>}
            </div>

            <div className="space-y-3">
              <label
                htmlFor="contact-fields-phone"
                className="text-xs font-black text-foreground uppercase tracking-widest px-1 cursor-pointer"
              >
                {formContent.phone} <span className="text-red-500 ml-1">*</span>
              </label>

              <div className={`w-full bg-card-muted border-0 border-b-2 rounded-xl flex items-center px-4 py-0 transition-colors font-medium text-foreground relative ${errors.phone ? "border-red-500 bg-red-50/10" : "border-border focus-within:border-primary"
                }`}>
                
                <CountrySelector 
                  country={country}
                  setCountry={setCountry}
                  isDropdownOpen={isDropdownOpen}
                  setIsDropdownOpen={setIsDropdownOpen}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  filteredCountries={filteredCountries}
                  focusedIndex={focusedIndex}
                  setFocusedIndex={setFocusedIndex}
                  setLocalNumber={setLocalNumber}
                />

                <input
                  id="contact-fields-phone"
                  type="tel"
                  value={localNumber}
                  onChange={handlePhoneChange}
                  placeholder={dynamicPlaceholder}
                  className="flex-1 min-w-0 bg-transparent border-0 focus:ring-0 px-3 sm:px-5 py-4 outline-none text-sm sm:text-base text-foreground placeholder:text-muted/50"
                />
              </div>
              {errors.phone && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider px-1">{errors.phone}</p>}
            </div>
          </div>

          <div className="space-y-3">
            <label
              htmlFor="contact-fields-message"
              className="text-xs font-black text-foreground uppercase tracking-widest px-1 cursor-pointer"
            >
              {formContent.message} <span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              id="contact-fields-message"
              rows={4}
              name="message"
              required
              placeholder="Conte-nos um pouco sobre seu projeto..."
              className={`w-full bg-card-muted border-0 border-b-2 px-4 py-4 rounded-xl focus:ring-0 transition-colors font-medium text-foreground resize-none ${errors.message ? "border-red-500 bg-red-50/10" : "border-border focus:border-primary"
                }`}
            />
            {errors.message && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider px-1">{errors.message}</p>}
          </div>

          <div className="space-y-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-6 text-base shadow-xl shadow-primary/20 mt-4 overflow-hidden relative"
            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <span>{formContent.submit}</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </>
              )}
            </Button>
            <p className="text-[11px] text-muted text-center leading-relaxed">
              Ao enviar este formulário, você concorda com nossa{" "}
              <Link href="/privacy-policy" className="text-foreground font-bold hover:text-primary transition-colors underline decoration-primary/30 hover:decoration-primary">
                Política de Privacidade
              </Link>.
            </p>
          </div>
        </form>
    </motion.div>
  );
};
