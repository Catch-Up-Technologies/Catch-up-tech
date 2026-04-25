"use client";

import { useEffect, useRef } from "react";
import { HeroAnimationEngine } from "./HeroBackground.engine";

export const HeroBackground = ({ isDark = true }: { isDark?: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<HeroAnimationEngine | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (engineRef.current) {
      engineRef.current.invalidateStatic();
    }
  }, [isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize engine
    const engine = new HeroAnimationEngine(canvas);
    engineRef.current = engine;

    const handleResize = () => engine.resize();
    window.addEventListener("resize", handleResize);

    const t0 = performance.now();
    const tick = (now: number) => {
      const t = (now - t0) / 1000;
      engine.render(t, isDark);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isDark]); // Re-init on theme change or just update? Actually isDark is passed to render.

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: isDark
            ? "radial-gradient(ellipse at 70% 45%, #0a1e40 0%, #050e20 45%, #020914 100%)"
            : "radial-gradient(ellipse at 70% 45%, #f1f5f9 0%, #fafafa 100%)",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
