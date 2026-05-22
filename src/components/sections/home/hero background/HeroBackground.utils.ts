import { Node, Edge } from "./HeroBackground.constants";

export const drawStaticLayer = (
  ctx: CanvasRenderingContext2D,
  W: number,
  H: number,
  dpr: number,
  isDark: boolean,
  TRACES: { x: number; y: number }[][]
) => {
  const sCanvas = document.createElement("canvas");
  sCanvas.width = W * dpr;
  sCanvas.height = H * dpr;
  const sCtx = sCanvas.getContext("2d");
  if (!sCtx) return null;

  sCtx.scale(dpr, dpr);
  const traceColor = isDark ? "rgba(56,189,248,0.25)" : "rgba(30,58,138,0.12)";
  const traceDotColor = isDark ? "rgba(56,189,248,0.35)" : "rgba(30,58,138,0.18)";

  // Circuit traces
  sCtx.strokeStyle = traceColor;
  sCtx.lineWidth = 0.8;
  TRACES.forEach((trace) => {
    sCtx.beginPath();
    trace.forEach(({ x, y }, i) => {
      const [tx, ty] = [x * W, y * H];
      i === 0 ? sCtx.moveTo(tx, ty) : sCtx.lineTo(tx, ty);
    });
    sCtx.stroke();
    // dots
    trace.forEach(({ x, y }) => {
      sCtx.beginPath();
      sCtx.arc(x * W, y * H, 1.8, 0, Math.PI * 2);
      sCtx.fillStyle = traceDotColor;
      sCtx.fill();
    });
  });

  // Icons
  const iconColor = isDark ? "rgba(100,180,240,0.55)" : "rgba(37,99,235,0.30)";
  const drawIcon = (cx: number, cy: number, r: number, a: number) => {
    const [ix, iy] = [cx * W, cy * H];
    sCtx.globalAlpha = a;
    sCtx.beginPath();
    sCtx.arc(ix, iy, r, 0, Math.PI * 2);
    sCtx.strokeStyle = iconColor;
    sCtx.lineWidth = 1;
    sCtx.stroke();
    sCtx.globalAlpha = 1;
  };
  drawIcon(0.92, 0.48, 16, 0.6);
  drawIcon(0.95, 0.78, 13, 0.5);
  drawIcon(0.89, 0.91, 14, 0.45);

  return sCanvas;
};

export const drawPanel = (
  ctx: CanvasRenderingContext2D,
  t: number,
  W: number,
  H: number,
  dark: boolean,
  pColors: { bg: string; accent: string; border: string; content: string; text: string },
  cx: number, cy: number, pw: number, ph: number,
  alpha: number, phase: number, type: string
) => {
  const oy = Math.sin(t * 0.35 + phase) * 8;
  const [x, y, w, h] = [cx * W, cy * H + oy, pw * W, ph * H];

  ctx.globalAlpha = alpha;
  ctx.fillStyle = pColors.bg;
  ctx.fillRect(x, y, w, h);
  ctx.fillStyle = pColors.accent;
  ctx.fillRect(x, y, w, 2);
  ctx.strokeStyle = pColors.border;
  ctx.lineWidth = 0.8;
  ctx.strokeRect(x, y, w, h);

  if (type === "bar") {
    ctx.fillStyle = dark ? "rgba(150,210,255,0.5)" : "rgba(37,99,235,0.4)";
    ctx.fillRect(x + 4, y + 6, 20, 2);
    const n = 7, gap = w * 0.055, bw = (w - gap * (n + 1)) / n;
    for (let i = 0; i < n; i++) {
      const bh = h * (0.12 + 0.58 * Math.abs(Math.sin(i * 1.3 + t * 0.25)));
      const bx = x + gap + i * (bw + gap), by = y + h - bh - 4;
      const bg = ctx.createLinearGradient(bx, by, bx, by + bh);
      bg.addColorStop(0, pColors.content);
      bg.addColorStop(1, dark ? "rgba(56,189,248,0.20)" : "rgba(37,99,235,0.10)");
      ctx.fillStyle = bg;
      ctx.fillRect(bx, by, bw, bh);
    }
  } else if (type === "line") {
    ctx.fillStyle = dark ? "rgba(150,210,255,0.5)" : "rgba(37,99,235,0.4)";
    ctx.fillRect(x + 4, y + 6, 24, 2);
    ctx.beginPath();
    for (let i = 0; i <= 14; i++) {
      const lx = x + 4 + (i / 14) * (w - 8);
      const ly = y + h * 0.72 - h * 0.42 * Math.sin(i * 0.6 + t * 0.22);
      i === 0 ? ctx.moveTo(lx, ly) : ctx.lineTo(lx, ly);
    }
    ctx.strokeStyle = pColors.content;
    ctx.lineWidth = 1.8;
    ctx.stroke();
    ctx.lineTo(x + w - 4, y + h - 4); ctx.lineTo(x + 4, y + h - 4); ctx.closePath();
    ctx.fillStyle = dark ? "rgba(34,211,238,0.08)" : "rgba(37,99,235,0.05)";
    ctx.fill();
  } else if (type === "sparkline") {
    const val = 72 + Math.round(8 * Math.sin(t * 0.4));
    ctx.fillStyle = pColors.content;
    ctx.font = `bold ${h * 0.38}px monospace`;
    ctx.fillText(`${val}%`, x + 6, y + h * 0.55);
  } else if (type === "kpi") {
    const v1 = (1240 + Math.round(60 * Math.sin(t * 0.2))).toLocaleString();
    ctx.fillStyle = pColors.text;
    ctx.font = `bold ${h * 0.32}px monospace`;
    ctx.fillText(v1, x + 5, y + h * 0.50);
  }
  ctx.globalAlpha = 1;
};

export const drawConstellation = (
  ctx: CanvasRenderingContext2D,
  px: number[],
  py: number[],
  EDGES: Edge[],
  NODES: Node[],
  dark: boolean
) => {
  const edgeBase = dark ? "rgba(150,210,255," : "rgba(56,189,248,";
  EDGES.forEach(({ a, b }) => {
    const bA = NODES[a].brightness, bB = NODES[b].brightness;
    const g = ctx.createLinearGradient(px[a], py[a], px[b], py[b]);
    g.addColorStop(0, `${edgeBase}${0.35 * bA})`);
    g.addColorStop(1, `${edgeBase}${0.35 * bB})`);
    ctx.beginPath();
    ctx.moveTo(px[a], py[a]); ctx.lineTo(px[b], py[b]);
    ctx.strokeStyle = g;
    ctx.lineWidth = 1.2;
    ctx.stroke();
  });
};

export const drawPulses = (
  ctx: CanvasRenderingContext2D,
  t: number,
  px: number[],
  py: number[],
  EDGES: Edge[],
  dark: boolean
) => {
  const pulseBase = dark ? "rgba(200,245,255," : "rgba(56,189,248,";
  EDGES.forEach(({ a, b }, i) => {
    const speed = 0.10 + (i % 7) * 0.025, frac = ((t * speed + i * 0.9) % 6) / 6;
    if (frac < 0.03 || frac > 0.97) return;
    const ex = px[a] + (px[b] - px[a]) * frac, ey = py[a] + (py[b] - py[a]) * frac;
    const g = ctx.createRadialGradient(ex, ey, 0, ex, ey, 6);
    g.addColorStop(0, `${pulseBase}0.90)`);
    g.addColorStop(1, `${pulseBase}0.00)`);
    ctx.beginPath(); ctx.arc(ex, ey, 6, 0, Math.PI * 2);
    ctx.fillStyle = g; ctx.fill();
  });
};

export const drawNodes = (
  ctx: CanvasRenderingContext2D,
  t: number,
  px: number[],
  py: number[],
  NODES: Node[],
  dark: boolean
) => {
  const nodeCoreBase = dark ? "rgba(210,248,255," : "rgba(255,255,255,";
  const nodeGlowBase = dark ? "rgba(0,220,255," : "rgba(56,189,248,";
  NODES.forEach((n, i) => {
    const pulse = 0.5 + 0.5 * Math.sin(t * n.speed + n.phase), glowR = n.glowR * (0.85 + 0.25 * pulse);
    const g = ctx.createRadialGradient(px[i], py[i], 0, px[i], py[i], glowR);
    g.addColorStop(0, `${nodeGlowBase}${0.55 * pulse * n.brightness})`);
    g.addColorStop(0.20, `${nodeGlowBase}${0.22 * pulse * n.brightness})`);
    g.addColorStop(0.55, `${nodeGlowBase}${0.07 * pulse * n.brightness})`);
    g.addColorStop(1, "rgba(0,150,255,0)");
    ctx.beginPath(); ctx.arc(px[i], py[i], glowR, 0, Math.PI * 2);
    ctx.fillStyle = g; ctx.fill();
    ctx.beginPath(); ctx.arc(px[i], py[i], n.size * (0.9 + 0.12 * pulse), 0, Math.PI * 2);
    ctx.fillStyle = `${nodeCoreBase}${0.80 * n.brightness + 0.20 * pulse})`;
    ctx.fill();
  });
};

export const drawAtmosphere = (
  ctx: CanvasRenderingContext2D,
  t: number,
  W: number,
  H: number,
  dark: boolean
) => {
  const fogBase = dark ? "rgba(0,80,160," : "rgba(37,99,235,";
  const fog = ctx.createRadialGradient(W * 0.72, H * 0.45, 0, W * 0.72, H * 0.45, W * 0.42);
  fog.addColorStop(0, `${fogBase}${dark ? "0.14" : "0.08"})`);
  fog.addColorStop(0.5, `${fogBase}${dark ? "0.06" : "0.03"})`);
  fog.addColorStop(1, "rgba(0,30, 80,0.00)");
  ctx.fillStyle = fog;
  ctx.fillRect(0, 0, W, H);

  const lfBase = dark ? "rgba(160,210,255," : "rgba(37,99,235,";
  const lf = ctx.createRadialGradient(W * 0.37, H * 0.16, 0, W * 0.37, H * 0.16, 55);
  lf.addColorStop(0, `${lfBase}${0.12 + 0.06 * Math.sin(t * 0.5)})`);
  lf.addColorStop(1, "rgba(160,210,255,0)");
  ctx.beginPath(); ctx.arc(W * 0.37, H * 0.16, 55, 0, Math.PI * 2);
  ctx.fillStyle = lf; ctx.fill();
};
