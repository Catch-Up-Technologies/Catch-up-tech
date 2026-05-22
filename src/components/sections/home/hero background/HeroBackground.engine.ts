import { NODES, EDGES, TRACES } from "./HeroBackground.constants";
import {
  drawStaticLayer,
  drawPanel,
  drawConstellation,
  drawPulses,
  drawNodes,
  drawAtmosphere,
} from "./HeroBackground.utils";

export class HeroAnimationEngine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private staticCanvas: HTMLCanvasElement | null = null;
  private px: number[] = [];
  private py: number[] = [];
  private W: number = 0;
  private H: number = 0;
  private dpr: number = 1;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Could not get canvas context");
    this.ctx = context;
    this.resize();
  }

  public resize() {
    const p = this.canvas.parentElement;
    if (!p) return;
    const { width, height } = p.getBoundingClientRect();
    this.W = width;
    this.H = height;
    this.dpr = window.devicePixelRatio || 1;

    this.canvas.width = width * this.dpr;
    this.canvas.height = height * this.dpr;
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;

    this.px = NODES.map((n) => n.x * width);
    this.py = NODES.map((n) => n.y * height);
    this.staticCanvas = null; // Reset static cache
  }

  public render(t: number, isDark: boolean) {
    const { ctx, W, H, dpr } = this;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);

    // 1. Static Layer
    if (!this.staticCanvas) {
      this.staticCanvas = drawStaticLayer(ctx, W, H, dpr, isDark, TRACES);
    }
    if (this.staticCanvas) {
      ctx.drawImage(this.staticCanvas, 0, 0, W, H);
    }

    // 2. Dashboard Panels
    const pColors = {
      bg: isDark ? "rgba(4,20,50,0.65)" : "rgba(255,255,255,0.75)",
      accent: isDark ? "rgba(56,189,248,0.55)" : "rgba(37,99,235,0.40)",
      border: isDark ? "rgba(56,189,248,0.45)" : "rgba(37,99,235,0.20)",
      content: isDark ? "rgba(56,189,248,0.70)" : "rgba(37,99,235,0.60)",
      text: isDark ? "rgba(255,255,255,0.80)" : "rgba(15,23,42,0.80)",
    };

    drawPanel(ctx, t, W, H, isDark, pColors, 0.32, 0.24, 0.14, 0.16, 0.75, 0.0, "bar");
    drawPanel(ctx, t, W, H, isDark, pColors, 0.37, 0.43, 0.18, 0.18, 0.70, 1.5, "line");
    drawPanel(ctx, t, W, H, isDark, pColors, 0.21, 0.56, 0.12, 0.12, 0.65, 2.2, "sparkline");
    drawPanel(ctx, t, W, H, isDark, pColors, 0.20, 0.68, 0.10, 0.12, 0.55, 3.1, "bar");
    drawPanel(ctx, t, W, H, isDark, pColors, 0.22, 0.38, 0.10, 0.12, 0.45, 4.0, "kpi");

    // 3. Constellation & Pulses & Nodes
    drawConstellation(ctx, this.px, this.py, EDGES, NODES, isDark);
    drawPulses(ctx, t, this.px, this.py, EDGES, isDark);
    drawNodes(ctx, t, this.px, this.py, NODES, isDark);

    // 4. Fog & Flare
    drawAtmosphere(ctx, t, W, H, isDark);
  }

  public invalidateStatic() {
    this.staticCanvas = null;
  }
}
