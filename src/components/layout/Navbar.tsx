"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, ChevronRight } from "lucide-react";
import { navigation } from "@/config/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = ["home", "services", "cases", "resources", "company", "contact"];

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      observer.disconnect();
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = (item: any) => {
    setIsMobileMenuOpen(false);

    if ((item.id === "home" || item.href === "/") && pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      return;
    }

    if (item.href.startsWith("/#") && pathname === "/") {
      const id = item.href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(item.id);
      }
    }
  };

  return (
    <>
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed left-6 top-6 z-[110] lg:hidden w-12 h-12 rounded-full bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl flex items-center justify-center text-secondary hover:scale-110 active:scale-95 transition-all"
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <nav
        ref={navRef}
        className={`fixed left-6 lg:left-8 top-1/2 -translate-y-1/2 z-[100] transition-all duration-500 ease-out 
          ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-[200%] lg:translate-x-0 opacity-0 lg:opacity-100"}
        `}
      >
        <div className="flex flex-col items-center bg-white/85 backdrop-blur-2xl border border-white/50 rounded-full py-8 px-4 gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)] ring-1 ring-black/5">
          {navigation.map((item) => {
            const isSubItemActive = item.subItems?.some(sub => {
              const subPath = sub.href.split('#')[0];
              return pathname === subPath || (subPath !== "/" && pathname.startsWith(subPath));
            });

            const isPathActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)) || isSubItemActive;
            const isSectionActive = activeSection === item.id;
            const isActive = pathname === "/" ? isSectionActive : isPathActive;

            const hasSubItems = item.subItems && item.subItems.length > 0;

            return (
              <div key={item.id} className="group relative flex items-center justify-center">
                <Link
                  href={item.href}
                  onClick={() => handleLinkClick(item)}
                  className="flex flex-col items-center gap-1.5 transition-all duration-300 relative"
                >
                  {isActive && (
                    <div className="absolute inset-0 -m-3 bg-primary/10 rounded-full animate-in fade-in zoom-in duration-300" />
                  )}

                  <div className="relative">
                    <item.icon
                      className={`w-5 h-5 transition-colors duration-300 ${isActive ? "text-primary" : "text-slate-600 group-hover:text-secondary"
                        }`}
                    />
                    {hasSubItems && (
                      <ChevronRight className="absolute -right-3 top-1/2 -translate-y-1/2 w-2.5 h-2.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>

                  {!hasSubItems && (
                    <div className="absolute left-full ml-4 px-3 py-1.5 bg-secondary text-white text-[10px] font-bold rounded-lg shadow-xl opacity-0 scale-90 translate-x-[-10px] group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap z-[110]">
                      {item.label}
                      <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-secondary rotate-45" />
                    </div>
                  )}
                </Link>

                {hasSubItems && (
                  <div className="absolute left-full ml-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-[120]">
                    <div className="flex flex-col gap-4 bg-white/95 backdrop-blur-3xl border border-white/60 rounded-[2rem] p-6 shadow-[0_30px_70px_rgba(0,0,0,0.15)] min-w-[200px]">
                      <p className="text-[10px] font-bold text-primary uppercase tracking-[0.1em] mb-2 opacity-60">
                        {item.label}
                      </p>
                      {item.subItems?.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          href={sub.href}
                          onClick={() => handleLinkClick(sub)}
                          className="text-xs font-bold text-secondary hover:text-primary transition-colors whitespace-nowrap flex items-center justify-between group/sub"
                        >
                          {sub.label}
                          <ChevronRight className="w-3 h-3 opacity-0 group-hover/sub:opacity-100 -translate-x-2 group-hover/sub:translate-x-0 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/5 backdrop-blur-sm z-[90] lg:hidden animate-in fade-in duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};
