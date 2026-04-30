"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { navigation } from "@/config/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [navVisible, setNavVisible] = useState(true);

  useEffect(() => {
    setMounted(true);
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

    const handleScroll = () => {
      const scrolledPastTop = window.scrollY > 50;
      if (!scrolledPastTop) {
        setNavVisible(true);
      } else {
        setNavVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    
    // Check initial scroll position
    handleScroll();

    return () => {
      observer.disconnect();
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const handleLinkClick = (item: { id?: string; href: string }) => {
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
        if (item.id) setActiveSection(item.id);
      }
    }
  };

  const handleMouseEnter = () => {
    setNavVisible(true);
  };

  return (
    <>
      <button
        id="mobile-menu-toggle"
        aria-controls="mobile-menu-dialog"
        aria-expanded={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed left-6 top-6 z-[110] lg:hidden w-12 h-12 rounded-full bg-background/80 backdrop-blur-xl border border-border/40 shadow-xl flex items-center justify-center text-foreground hover:scale-110 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label="Toggle navigation menu"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Invisible Hover Zone for Desktop Navbar */}
      <div 
        className="fixed left-0 top-0 w-16 h-screen z-[99] hidden lg:block"
        onMouseEnter={handleMouseEnter}
      />

      <nav
        ref={navRef}
        onMouseEnter={handleMouseEnter}
        className={`fixed left-6 lg:left-8 top-1/2 -translate-y-1/2 z-[100] transition-all duration-500 ease-out 
          ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-[200%] opacity-0"}
          ${navVisible ? "lg:translate-x-0 lg:opacity-100" : "lg:-translate-x-[200%] lg:opacity-0"}
        `}
      >
        <div className={`flex flex-col items-center ${isDark ? "bg-nav-bg-dark/90 dark:border-white/10 shadow-[0_0_60px_rgba(37,113,184,0.2)]" : "bg-nav-bg-light/90 border-slate-200 shadow-[0_30px_100px_rgba(0,0,0,0.25)]"} backdrop-blur-3xl border rounded-full py-6 px-3 gap-6 transition-all duration-500`}>
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
                  className={`w-12 h-12 flex flex-col items-center justify-center rounded-full transition-all duration-300 relative ${isActive
                    ? "bg-nav-active text-white shadow-[0_8px_20px_rgba(37,113,184,0.35)]"
                    : isDark
                      ? "text-white/40 hover:bg-white/5 hover:text-white"
                      : "text-[#6B7280] hover:bg-slate-50 hover:text-slate-900"
                    }`}
                >
                  <div className="relative">
                    <item.icon
                      className="w-6 h-6 transition-colors duration-300"
                    />
                    {hasSubItems && (
                      <ChevronRight className={`absolute -right-3 top-1/2 -translate-y-1/2 w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity ${isActive ? "text-white" : "text-muted"}`} />
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
                    <div className="flex flex-col gap-4 bg-background/95 backdrop-blur-3xl border border-border/60 rounded-[2rem] p-6 shadow-[0_30px_70px_rgba(0,0,0,0.15)] min-w-[200px]">
                      <p className="text-[10px] font-bold text-primary uppercase tracking-[0.1em] mb-2 opacity-60">
                        {item.label}
                      </p>
                      {item.subItems?.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          href={sub.href}
                          onClick={() => handleLinkClick(sub)}
                          className="text-xs font-bold text-foreground hover:text-primary transition-colors whitespace-nowrap flex items-center justify-between group/sub"
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

          <div className={`pt-4 mt-2 border-t w-8 flex justify-center ${isDark ? "border-white/10" : "border-[#6B7280]/30"}`} />

          <div className="flex justify-center">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <dialog
          id="mobile-menu-dialog"
          open
          className="fixed inset-0 bg-black/5 backdrop-blur-sm z-[90] lg:hidden animate-in fade-in duration-300"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsMobileMenuOpen(false);
          }}
        >
          <div className="w-full h-full" />
        </dialog>
      )}
    </>
  );
};
