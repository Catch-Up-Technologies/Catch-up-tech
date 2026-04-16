"use client";

import React, { useRef, useEffect } from "react";
import { Search, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getCountryCallingCode, CountryCode } from "libphonenumber-js";

interface CountryData {
  code: string;
  name: string;
  ddi: string;
}

interface CountrySelectorProps {
  country: CountryCode;
  setCountry: (code: CountryCode) => void;
  isDropdownOpen: boolean;
  setIsDropdownOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredCountries: CountryData[];
  focusedIndex: number;
  setFocusedIndex: (index: number) => void;
  setLocalNumber: (val: string) => void;
}

export const CountrySelector = ({
  country,
  setCountry,
  isDropdownOpen,
  setIsDropdownOpen,
  searchQuery,
  setSearchQuery,
  filteredCountries,
  focusedIndex,
  setFocusedIndex,
  setLocalNumber,
}: CountrySelectorProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = () => {
    const nextState = !isDropdownOpen;
    setIsDropdownOpen(nextState);
    if (nextState) {
      setFocusedIndex(-1);
    } else {
      setSearchQuery("");
      if (triggerRef.current) triggerRef.current.focus();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsDropdownOpen]);

  useEffect(() => {
    if (isDropdownOpen && focusedIndex >= 0 && listRef.current) {
      const focusedItem = listRef.current.children[focusedIndex] as HTMLElement;
      if (focusedItem) {
        focusedItem.scrollIntoView({ block: "nearest" });
      }
    }
  }, [focusedIndex, isDropdownOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isDropdownOpen) return;

    switch (e.key) {
      case "Escape":
        setIsDropdownOpen(false);
        break;
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex(focusedIndex < filteredCountries.length - 1 ? focusedIndex + 1 : focusedIndex);
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex(focusedIndex > 0 ? focusedIndex - 1 : focusedIndex);
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
    <div className="relative h-full" ref={dropdownRef} onKeyDown={handleKeyDown}>
      <button
        ref={triggerRef}
        type="button"
        onClick={toggleDropdown}
        className="h-full min-w-[85px] sm:min-w-[100px] lg:min-w-[120px] flex items-center justify-center gap-2 px-2 sm:px-4 py-4 hover:bg-card-muted/50 transition-colors border-r border-border group cursor-pointer"
      >
        <span className="text-xs sm:text-sm font-black text-foreground/60 tracking-wider transition-colors group-hover:text-primary">
          {country}
        </span>
        <span className="text-xs sm:text-sm font-black text-foreground tracking-tighter">
          +{getCountryCallingCode(country)}
        </span>
        <ChevronDown
          className={`w-3 h-3 sm:w-3.5 sm:h-3.5 text-muted transition-opacity group-hover:opacity-100 ${
            isDropdownOpen ? "rotate-180 opacity-100" : "opacity-40"
          }`}
        />
      </button>

      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 mt-3 w-[calc(100vw-48px)] sm:w-80 max-h-96 overflow-hidden bg-card-pure/95 backdrop-blur-xl border border-border rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-50"
          >
            <div className="p-3 border-b border-border sticky top-0 bg-card-pure/10 backdrop-blur-md z-10">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Buscar país ou código..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-card-muted border-0 pl-10 pr-4 py-2.5 rounded-xl text-xs font-bold focus:ring-0 placeholder:text-muted/50 "
                />
              </div>
            </div>
            <div ref={listRef} className="overflow-y-auto max-h-[300px] overscroll-contain">
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
                    className={`w-full px-5 py-3.5 flex items-center gap-4 transition-colors text-left group border-b border-border/10 last:border-0 cursor-pointer ${
                      focusedIndex === index ? "bg-primary/10" : "hover:bg-primary/5"
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-[11px] font-black truncate uppercase tracking-tighter transition-colors ${
                          focusedIndex === index ? "text-primary" : "text-foreground group-hover:text-primary"
                        }`}
                      >
                        {c.name}
                      </p>
                      <p className="text-[10px] text-muted font-bold opacity-70">+{c.ddi}</p>
                    </div>
                  </button>
                ))
              ) : (
                <div className="p-8 text-center text-xs font-bold text-muted/50 italic">
                  Nenhum país encontrado
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
