"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-card-muted/50 border border-blue-500/50" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 overflow-hidden group active:scale-90 border cursor-pointer ${isDark
        ? 'bg-[#182144] border-[#7f8397]/50 text-white hover:border-[#7f8397] shadow-[0_0_15px_rgba(30,58,138,0.3)]'
        : 'bg-[#e5e7eb] border-[#b2b2b6]/50 text-[#6b7280] hover:border-[#b2b2b6] hover:bg-white shadow-[0_4px_10px_rgba(0,0,0,0.05)]'
        }`}
      aria-label="Toggle theme"
    >
      <div className={`absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${isDark ? 'bg-gradient-to-tr from-blue-600/20 to-purple-600/20' : 'bg-gradient-to-tr from-orange-200/20 to-yellow-200/20'
        }`} />

      <AnimatePresence mode="popLayout" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ y: 15, opacity: 0, rotate: 45, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
            exit={{ y: -15, opacity: 0, rotate: -45, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative z-10"
          >
            <Moon className="w-5 h-5 fill-current" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ y: 15, opacity: 0, rotate: -45, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
            exit={{ y: -15, opacity: 0, rotate: 45, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative z-10"
          >
            <Sun className="w-5 h-5 fill-current" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
