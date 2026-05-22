export interface Node {
  x: number;
  y: number;
  size: number;        // core dot size px
  glowR: number;       // glow halo radius px
  brightness: number;  // 0-1
  speed: number;
  phase: number;
}

export interface Edge {
  a: number;
  b: number;
}

export const NODES: Node[] = [
  // ── Upper cluster ──
  { x: 0.52, y: 0.09, size: 3, glowR: 22, brightness: 0.85, speed: 1.8, phase: 0.0 },
  { x: 0.61, y: 0.06, size: 4, glowR: 28, brightness: 1.00, speed: 1.4, phase: 1.2 },
  { x: 0.72, y: 0.10, size: 5, glowR: 32, brightness: 1.00, speed: 1.6, phase: 0.5 },
  { x: 0.67, y: 0.23, size: 6, glowR: 38, brightness: 1.00, speed: 1.9, phase: 2.1 },
  { x: 0.56, y: 0.26, size: 4, glowR: 26, brightness: 0.90, speed: 2.0, phase: 1.0 },
  { x: 0.46, y: 0.20, size: 3, glowR: 20, brightness: 0.70, speed: 1.7, phase: 0.3 },

  // ── Right-upper ──
  { x: 0.84, y: 0.15, size: 3, glowR: 22, brightness: 0.80, speed: 2.3, phase: 0.8 },
  { x: 0.92, y: 0.24, size: 3, glowR: 20, brightness: 0.75, speed: 1.9, phase: 2.5 },
  { x: 0.80, y: 0.34, size: 4, glowR: 28, brightness: 0.90, speed: 1.5, phase: 1.6 },

  // ── Center-right hub (bright area) ──
  { x: 0.74, y: 0.42, size: 4, glowR: 28, brightness: 0.90, speed: 1.6, phase: 1.8 },
  { x: 0.82, y: 0.51, size: 6, glowR: 40, brightness: 1.00, speed: 1.3, phase: 0.4 },
  { x: 0.90, y: 0.43, size: 3, glowR: 22, brightness: 0.80, speed: 2.1, phase: 0.9 },
  { x: 0.94, y: 0.58, size: 4, glowR: 28, brightness: 0.85, speed: 1.5, phase: 2.3 },

  // ── Lower-right cluster ──
  { x: 0.87, y: 0.70, size: 5, glowR: 34, brightness: 0.95, speed: 1.4, phase: 0.6 },  // bright
  { x: 0.80, y: 0.80, size: 4, glowR: 28, brightness: 0.85, speed: 1.7, phase: 1.4 },
  { x: 0.92, y: 0.82, size: 3, glowR: 22, brightness: 0.75, speed: 2.0, phase: 2.1 },
  { x: 0.72, y: 0.68, size: 3, glowR: 22, brightness: 0.80, speed: 1.8, phase: 0.2 },

  // ── Center ──
  { x: 0.60, y: 0.46, size: 2.5, glowR: 18, brightness: 0.65, speed: 2.3, phase: 1.1 },
  { x: 0.64, y: 0.58, size: 5, glowR: 36, brightness: 0.95, speed: 1.4, phase: 0.7 },  // bright
  { x: 0.54, y: 0.64, size: 2.5, glowR: 18, brightness: 0.60, speed: 1.9, phase: 2.6 },

  // ── Sparse left ──
  { x: 0.40, y: 0.37, size: 2, glowR: 14, brightness: 0.40, speed: 2.5, phase: 0.1 },
  { x: 0.44, y: 0.56, size: 2, glowR: 12, brightness: 0.35, speed: 2.2, phase: 1.9 },
  { x: 0.37, y: 0.72, size: 2, glowR: 14, brightness: 0.40, speed: 2.0, phase: 0.5 },

  // ── Bottom ──
  { x: 0.67, y: 0.88, size: 2.5, glowR: 18, brightness: 0.60, speed: 1.6, phase: 1.3 },
  { x: 0.57, y: 0.82, size: 2, glowR: 14, brightness: 0.50, speed: 2.1, phase: 2.8 },
];

export const EDGES: Edge[] = [
  // upper polygon
  { a: 0, b: 1 }, { a: 1, b: 2 }, { a: 2, b: 3 }, { a: 3, b: 4 }, { a: 4, b: 0 }, { a: 0, b: 3 }, { a: 1, b: 3 }, { a: 4, b: 5 }, { a: 5, b: 0 },
  // upper → right
  { a: 2, b: 6 }, { a: 6, b: 7 }, { a: 6, b: 8 }, { a: 2, b: 8 }, { a: 3, b: 8 },
  // right cluster
  { a: 8, b: 9 }, { a: 9, b: 10 }, { a: 10, b: 11 }, { a: 10, b: 12 }, { a: 11, b: 7 }, { a: 8, b: 10 }, { a: 11, b: 12 },
  // lower-right
  { a: 10, b: 13 }, { a: 12, b: 13 }, { a: 13, b: 14 }, { a: 13, b: 15 }, { a: 14, b: 15 }, { a: 10, b: 16 }, { a: 16, b: 13 },
  // center
  { a: 4, b: 17 }, { a: 17, b: 18 }, { a: 18, b: 16 }, { a: 9, b: 18 }, { a: 18, b: 19 }, { a: 17, b: 9 },
  // sparse left
  { a: 5, b: 20 }, { a: 20, b: 17 }, { a: 19, b: 21 }, { a: 21, b: 22 }, { a: 19, b: 22 },
  // bottom
  { a: 14, b: 23 }, { a: 24, b: 23 }, { a: 24, b: 19 }, { a: 16, b: 18 },
];

// Circuit-board right-angle traces
export const TRACES: { x: number; y: number }[][] = [
  // bottom-left
  [{ x: .02, y: .85 }, { x: .10, y: .85 }, { x: .14, y: .80 }, { x: .28, y: .80 }],
  [{ x: .05, y: .88 }, { x: .13, y: .88 }, { x: .17, y: .83 }, { x: .26, y: .83 }],
  [{ x: .00, y: .82 }, { x: .08, y: .82 }, { x: .12, y: .78 }, { x: .33, y: .78 }],
  [{ x: .10, y: .75 }, { x: .10, y: .69 }, { x: .15, y: .64 }, { x: .22, y: .64 }],
  [{ x: .18, y: .78 }, { x: .18, y: .72 }, { x: .22, y: .68 }],
  // top-right
  [{ x: .83, y: .00 }, { x: .83, y: .06 }, { x: .87, y: .10 }, { x: .96, y: .10 }],
  [{ x: .86, y: .00 }, { x: .86, y: .04 }, { x: .89, y: .07 }, { x: .99, y: .07 }],
  [{ x: .90, y: .16 }, { x: .94, y: .16 }, { x: .96, y: .19 }, { x: .99, y: .19 }],
  // right edge
  [{ x: .96, y: .34 }, { x: .96, y: .44 }, { x: .98, y: .47 }, { x: .98, y: .56 }],
  [{ x: .94, y: .60 }, { x: .97, y: .60 }, { x: .99, y: .63 }, { x: .99, y: .72 }],
];
