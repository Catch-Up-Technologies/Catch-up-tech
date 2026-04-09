"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { Mail, Phone, Send, Search, ChevronDown, Loader2 } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
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

  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) setIsDropdownOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);

  useEffect(() => {
    if (isDropdownOpen) {
      setHasOpenedOnce(true);
      setFocusedIndex(-1);
    } else if (hasOpenedOnce && triggerRef.current) {
      triggerRef.current.focus();
      setSearchQuery("");
    }
  }, [isDropdownOpen, hasOpenedOnce]);

  useEffect(() => {
    if (isDropdownOpen && focusedIndex >= 0 && listRef.current) {
      const focusedItem = listRef.current.children[focusedIndex] as HTMLElement;
      if (focusedItem) {
        focusedItem.scrollIntoView({ block: "nearest" });
      }
    }
  }, [focusedIndex, isDropdownOpen]);

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
    } catch (e) {
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
    
    // Resetting state after brief delay to allow the browser to process the link
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isDropdownOpen) return;

    switch (e.key) {
      case "Escape":
        setIsDropdownOpen(false);
        break;
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex(prev => (prev < filteredCountries.length - 1 ? prev + 1 : prev));
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex(prev => (prev > 0 ? prev - 1 : prev));
        break;
      case "Enter":
        if (focusedIndex >= 0) {
          e.preventDefault();
          const selected = filteredCountries[focusedIndex];
          setCountry(selected.code as CountryCode);
          setLocalNumber("");
          setIsDropdownOpen(false);
          setSearchQuery("");
        }
        break;
    }
  };

  return (
    <motion.div
      variants={formVariants}
      className="p-6 sm:p-10 lg:p-16 bg-white shadow-2xl rounded-3xl relative overflow-hidden border border-slate-100 h-full"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />

        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid grid-cols-1 gap-10">
            <div className="space-y-3">
              <label
                htmlFor="contact-fields-name"
                className="text-xs font-black text-secondary uppercase tracking-widest px-1 cursor-pointer"
              >
                {formContent.name} <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                id="contact-fields-name"
                type="text"
                name="name"
                required
                placeholder="Seu nome completo"
                className={`w-full bg-slate-50 border-0 border-b-2 px-4 py-4 rounded-xl focus:ring-0 transition-colors font-medium text-secondary ${errors.name ? "border-red-500 bg-red-50/10" : "border-slate-100 focus:border-primary"
                  }`}
              />
              {errors.name && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider px-1">{errors.name}</p>}
            </div>

            <div className="space-y-3">
              <label
                htmlFor="contact-fields-phone"
                className="text-xs font-black text-secondary uppercase tracking-widest px-1 cursor-pointer"
              >
                {formContent.phone} <span className="text-red-500 ml-1">*</span>
              </label>

              <div className={`w-full bg-slate-50 border-0 border-b-2 rounded-xl flex items-center px-4 py-0 transition-colors font-medium text-secondary relative ${errors.phone ? "border-red-500 bg-red-50/10" : "border-slate-100 focus-within:border-primary"
                }`}>

                <div className="relative h-full" ref={dropdownRef} onKeyDown={handleKeyDown}>
                  <button
                    ref={triggerRef}
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="h-full min-w-[85px] sm:min-w-[100px] lg:min-w-[120px] flex items-center justify-center gap-2 px-2 sm:px-4 py-4 hover:bg-slate-100/5 transition-colors border-r border-slate-200 group cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-black text-secondary/60 tracking-wider transition-colors group-hover:text-primary">
                      {country}
                    </span>
                    <span className="text-xs sm:text-sm font-black text-secondary tracking-tighter">
                      +{getCountryCallingCode(country)}
                    </span>
                    <ChevronDown className={`w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 transition-opacity group-hover:opacity-100 ${isDropdownOpen ? "rotate-180 opacity-100" : "opacity-40"}`} />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-3 w-[calc(100vw-48px)] sm:w-80 max-h-96 overflow-hidden bg-white/95 backdrop-blur-xl border border-slate-100 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-50"
                      >
                        <div className="p-3 border-b border-slate-50 sticky top-0 bg-white/10 backdrop-blur-md z-10">
                          <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                            <input
                              ref={searchInputRef}
                              type="text"
                              placeholder="Buscar país ou código..."
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="w-full bg-slate-50 border-0 pl-10 pr-4 py-2.5 rounded-xl text-xs font-bold focus:ring-0 placeholder:text-slate-300 "
                            />
                          </div>
                        </div>
                        <div
                          ref={listRef}
                          className="overflow-y-auto max-h-[300px] overscroll-contain"
                        >
                          {filteredCountries.length > 0 ? (
                            filteredCountries.map((c, index) => (
                              <button
                                key={c.code}
                                type="button"
                                onClick={() => {
                                  setCountry(c.code as CountryCode);
                                  setLocalNumber("");
                                  setIsDropdownOpen(false);
                                  setSearchQuery("");
                                }}
                                className={`w-full px-5 py-3.5 flex items-center gap-4 transition-colors text-left group border-b border-slate-50/50 last:border-0 cursor-pointer ${focusedIndex === index ? "bg-primary/10" : "hover:bg-primary/5"
                                  }`}
                              >
                                <div className="flex-1 min-w-0">
                                  <p className={`text-[11px] font-black truncate uppercase tracking-tighter transition-colors ${focusedIndex === index ? "text-primary" : "text-secondary group-hover:text-primary"
                                    }`}>
                                    {c.name}
                                  </p>
                                  <p className="text-[10px] text-slate-400 font-bold opacity-70">+{c.ddi}</p>
                                </div>
                              </button>
                            ))
                          ) : (
                            <div className="p-8 text-center text-xs font-bold text-slate-300 italic">
                              Nenhum país encontrado
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <input
                  id="contact-fields-phone"
                  type="tel"
                  value={localNumber}
                  onChange={handlePhoneChange}
                  placeholder={dynamicPlaceholder}
                  className="flex-1 min-w-0 bg-transparent border-0 focus:ring-0 px-3 sm:px-5 py-4 outline-none text-sm sm:text-base text-secondary placeholder:text-slate-300"
                />
              </div>
              {errors.phone && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider px-1">{errors.phone}</p>}
            </div>
          </div>

          <div className="space-y-3">
            <label
              htmlFor="contact-fields-message"
              className="text-xs font-black text-secondary uppercase tracking-widest px-1 cursor-pointer"
            >
              {formContent.message} <span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              id="contact-fields-message"
              rows={4}
              name="message"
              required
              placeholder="Conte-nos um pouco sobre seu projeto..."
              className={`w-full bg-slate-50 border-0 border-b-2 px-4 py-4 rounded-xl focus:ring-0 transition-colors font-medium text-secondary resize-none ${errors.message ? "border-red-500 bg-red-50/10" : "border-slate-100 focus:border-primary"
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
              <Link href="/privacy-policy" className="text-secondary font-bold hover:text-primary transition-colors hover:underline">
                Política de Privacidade
              </Link>.
            </p>
          </div>
        </form>
    </motion.div>
  );
};
