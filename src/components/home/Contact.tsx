"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { Mail, Phone, Send, Search, ChevronDown } from "lucide-react";
import {
  getCountryCallingCode,
  AsYouType,
  isValidPhoneNumber,
  CountryCode,
  getExampleNumber,
} from "libphonenumber-js";
import examples from "libphonenumber-js/examples.mobile.json";
import countryNames from "react-phone-number-input/locale/pt.json";
import { getCountries } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Link from "next/link";


export const Contact = () => {
  const [country, setCountry] = useState<CountryCode>("BR");
  const [localNumber, setLocalNumber] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(-1);
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

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!isDropdownOpen && triggerRef.current) {
      triggerRef.current.focus();
      setSearchQuery("");
    }
    if (isDropdownOpen) setFocusedIndex(-1);
  }, [isDropdownOpen]);

  // Scroll automático para manter o item focado visível
  useEffect(() => {
    if (isDropdownOpen && focusedIndex >= 0 && listRef.current) {
      const focusedItem = listRef.current.children[focusedIndex] as HTMLElement;
      if (focusedItem) {
        focusedItem.scrollIntoView({ block: "nearest" });
      }
    }
  }, [focusedIndex, isDropdownOpen]);

  const content = {
    title: "Vamos tirar sua ideia do papel",
    description: "Conte um pouco sobre o seu projeto e entraremos em contato para entender melhor suas necessidades e como podemos ajudar.",
    email: "catchuptech@outlook.com",
    phone: "+55 (53) 99999-9999",
    form: {
      name: "Nome Completo",
      phone: "Número de Contato",
      message: "Mensagem",
      submit: "Enviar Solicitação",
    },
  };

  const contact = [
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

  const validateForm = (data: { name: string; fullPhone: string; message: string }) => {
    const newErrors: Record<string, string> = {};
    if (!data.name.trim()) newErrors.name = "O nome é obrigatório";
    if (!data.message.trim()) {
      newErrors.message = "A mensagem é obrigatória";
    } else if (data.message.length > 2000) {
      newErrors.message = "Mensagem muito longa (máx 2000 caracteres)";
    }

    if (!localNumber.trim()) {
      newErrors.phone = "O telefone é obrigatório";
    } else if (!isValidPhoneNumber(data.fullPhone, country)) {
      newErrors.phone = `Número inválido para este país`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const ddi = getCountryCallingCode(country);
    const fullPhone = `+${ddi}${localNumber.replace(/\D/g, "")}`;

    const data = {
      name: formData.get("name") as string,
      fullPhone,
      message: formData.get("message") as string,
    };

    if (!validateForm(data)) {
      return;
    }


    let body = `Nome: ${data.name}\r\n`;
    body += `Telefone: ${fullPhone}\r\n`;
    body += `\r\n${data.message}`;

    const mailtoLink = `mailto:${content.email}?subject=${encodeURIComponent(
      "Solicitação de Orçamento - Catch-up Tech"
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Catch-up Tech",
    "url": "https://catchuptech.com",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+5553999999999",
        "contactType": "sales",
        "email": "catchuptech@outlook.com",
        "areaServed": "Global",
        "availableLanguage": ["Portuguese", "English"]
      }
    ]
  };

  return (
    <section id="contact" className="section-padding bg-zinc-50 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="title-main text-gradient">
                {content.title}
              </h2>
              <p className="text-muted text-base sm:text-lg font-medium leading-relaxed max-w-xl">
                {content.description}
              </p>
            </div>

            <div className="space-y-8 pt-8">
              {contact.map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 group relative">
                  <a
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="w-14 h-14 rounded-2xl bg-white shadow-premium flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 cursor-pointer flex-shrink-0"
                  >
                    <item.icon className="w-6 h-6" />
                  </a>
                  <div>
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1 opacity-70">
                      {item.label}
                    </p>
                    <a
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : undefined}
                      rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-lg sm:text-xl font-black text-secondary tracking-tight hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6 sm:p-10 lg:p-16 bg-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 gap-10">
                <div className="space-y-3">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-black text-secondary uppercase tracking-widest px-1 cursor-pointer"
                  >
                    {content.form.name} <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Seu nome completo"
                    className={`w-full bg-slate-50 border-0 border-b-2 px-4 py-4 rounded-xl focus:ring-0 transition-colors font-medium text-secondary ${errors.name ? "border-red-500 bg-red-50/10" : "border-slate-100 focus:border-primary"
                      }`}
                  />
                  {errors.name && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider px-1">{errors.name}</p>}
                </div>

                <div className="space-y-3">
                  <label
                    htmlFor="contact-phone"
                    className="text-xs font-black text-secondary uppercase tracking-widest px-1 cursor-pointer"
                  >
                    {content.form.phone} <span className="text-red-500 ml-1">*</span>
                  </label>

                  <div className={`w-full bg-slate-50 border-0 border-b-2 rounded-xl flex items-center px-4 py-0 transition-colors font-medium text-secondary relative ${errors.phone ? "border-red-500 bg-red-50/10" : "border-slate-100 focus-within:border-primary"
                    }`}>

                    <div className="relative h-full" ref={dropdownRef} onKeyDown={handleKeyDown}>
                      <button
                        ref={triggerRef}
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        aria-haspopup="listbox"
                        aria-expanded={isDropdownOpen}
                        aria-label="Selecionar país de origem"
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

                      {isDropdownOpen && (
                        <div
                          role="listbox"
                          className="absolute top-full left-0 mt-3 w-[calc(100vw-48px)] sm:w-80 max-h-96 overflow-hidden bg-white/95 backdrop-blur-xl border border-slate-100 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-50 animate-in fade-in zoom-in duration-200"
                        >
                          <div className="p-3 border-b border-slate-50 sticky top-0 bg-white/10 backdrop-blur-md z-10">
                            <div className="relative">
                              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                              <input
                                ref={searchInputRef}
                                type="text"
                                placeholder="Buscar país ou código..."
                                autoFocus
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-slate-50 border-0 pl-10 pr-4 py-2.5 rounded-xl text-xs font-bold focus:ring-0 placeholder:text-slate-300 "
                              />
                            </div>
                          </div>
                          <div
                            ref={listRef}
                            className="overflow-y-auto max-h-[300px] overscroll-contain"
                            aria-label="Lista de países"
                          >
                            {filteredCountries.length > 0 ? (
                              filteredCountries.map((c, index) => (
                                <button
                                  key={c.code}
                                  type="button"
                                  role="option"
                                  aria-selected={country === c.code}
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
                        </div>
                      )}
                    </div>

                    <input
                      id="contact-phone"
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
                  htmlFor="contact-message"
                  className="text-xs font-black text-secondary uppercase tracking-widest px-1 cursor-pointer"
                >
                  {content.form.message} <span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  name="message"
                  placeholder="Conte-nos um pouco sobre seu projeto..."
                  className={`w-full bg-slate-50 border-0 border-b-2 px-4 py-4 rounded-xl focus:ring-0 transition-colors font-medium text-secondary resize-none ${errors.message ? "border-red-500 bg-red-50/10" : "border-slate-100 focus:border-primary"
                    }`}
                />
                {errors.message && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider px-1">{errors.message}</p>}
              </div>

              <div className="space-y-4">
                <button
                  type="submit"
                  className="group btn-primary w-full flex items-center justify-center gap-3 py-6 text-base shadow-xl shadow-primary/20 cursor-pointer mt-4 transition-all duration-300"
                >
                  <span>{content.form.submit}</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
                <p className="text-[11px] text-muted text-center font-medium opacity-70">
                  Ao enviar este formulário, você concorda com nossa <Link href="/privacy-policy" className="text-primary hover:underline">Política de Privacidade</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
