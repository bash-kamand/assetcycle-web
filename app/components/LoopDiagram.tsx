"use client";

// ── Layout ────────────────────────────────────────────────────
const CX = 210, CY = 210;   // canvas centre
const NR = 62;               // node circle radius

// 4 nodes at compass positions (orbit r=130)
const NODES = [
  { cx: 210, cy:  80, lines: ["Asset","Events"],      hi: false, cls: "n0" },
  { cx: 340, cy: 210, lines: ["Data","Captured"],     hi: false, cls: "n1" },
  { cx: 210, cy: 340, lines: ["Model","Updates"],     hi: true,  cls: "n2" },
  { cx:  80, cy: 210, lines: ["Forecasts","Sharpen"], hi: false, cls: "n3" },
] as const;

// Quadratic bezier arcs (computed: src edge → Q outward ctrl → dst edge)
const ARCS = [
  { d:"M 254,124 Q 297,111 288,158", lx:320, ly:100, la:"start", lbl:"events logged",    ac:"a0", lc:"l0" },
  { d:"M 296,254 Q 309,297 262,288", lx:325, ly:312, la:"start", lbl:"data in",          ac:"a1", lc:"l1" },
  { d:"M 166,296 Q 123,309 132,262", lx:100, ly:326, la:"end",   lbl:"model retrained",  ac:"a2", lc:"l2" },
  { d:"M 124,166 Q 111,123 158,132", lx:100, ly:106, la:"end",   lbl:"forecasts updated",ac:"a3", lc:"l3" },
] as const;

const CSS = `
  /* ── Node scale-in ── */
  .ac-ng {
    opacity: 0;
    transform-box: fill-box;
    transform-origin: center;
    animation: ac-scale .55s cubic-bezier(.34,1.56,.64,1) forwards;
  }
  .ac-n0 { animation-delay: .12s; }
  .ac-n1 { animation-delay: .52s; }
  .ac-n2 { animation-delay: .92s; }
  .ac-n3 { animation-delay: 1.32s; }

  /* ── Arc draw-in ── */
  .ac-arc {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation: ac-draw .65s cubic-bezier(.4,0,.2,1) forwards;
  }
  .ac-a0 { animation-delay: .42s; }
  .ac-a1 { animation-delay: .82s; }
  .ac-a2 { animation-delay: 1.22s; }
  .ac-a3 { animation-delay: 1.62s; }

  /* ── Label fade ── */
  .ac-lbl { opacity: 0; animation: ac-fade .4s ease forwards; }
  .ac-l0  { animation-delay: .65s; }
  .ac-l1  { animation-delay: 1.05s; }
  .ac-l2  { animation-delay: 1.45s; }
  .ac-l3  { animation-delay: 1.85s; }

  /* ── Center fade ── */
  .ac-ctr { opacity: 0; animation: ac-fade .6s ease forwards .08s; }

  /* ── Highlight glow pulse ── */
  .ac-glow { animation: ac-glow-pulse 3s ease-in-out infinite 1.1s; }

  @keyframes ac-scale {
    from { opacity: 0; transform: scale(.2); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes ac-draw {
    from { stroke-dashoffset: 1; }
    to   { stroke-dashoffset: 0; }
  }
  @keyframes ac-fade {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes ac-glow-pulse {
    0%,100% { opacity: .07; }
    50%     { opacity: .2;  }
  }
`;

export default function LoopDiagram() {
  return (
    <div style={{
      background: "rgba(10,22,38,0.97)",
      border: "1px solid rgba(26,184,232,0.16)",
      borderRadius: 14,
      overflow: "hidden",
      position: "relative",
    }}>
      <style>{CSS}</style>

      {/* Header badge */}
      <div style={{ position:"absolute", top:16, left:20, right:20,
                    display:"flex", justifyContent:"space-between", alignItems:"center", zIndex:1 }}>
        <span style={{ fontFamily:"DM Mono,monospace", fontSize:9, letterSpacing:"0.16em",
                       textTransform:"uppercase", color:"#1ab8e8" }}>Feedback Loop</span>
        <span style={{ fontFamily:"DM Mono,monospace", fontSize:8, color:"rgba(26,184,232,0.4)" }}>● live</span>
      </div>

      {/* Square SVG — auto-sizes via viewBox aspect ratio */}
      <svg viewBox="0 0 420 420" style={{ width:"100%", display:"block" }}>
        <defs>
          <marker id="ac-ah" markerWidth="9" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 9 3.5, 0 7" fill="#1ab8e8"/>
          </marker>
          <filter id="ac-gblur" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="12"/>
          </filter>
          <filter id="ac-sblur" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="4"/>
          </filter>
        </defs>

        {/* Ghost arc tracks */}
        {ARCS.map((a, i) => (
          <path key={i} d={a.d} stroke="rgba(26,184,232,0.06)" strokeWidth="1.5" fill="none"/>
        ))}

        {/* Animated arc strokes */}
        {ARCS.map((a, i) => (
          <path key={i} className={`ac-arc ac-${a.ac}`}
                d={a.d} stroke="#1ab8e8" strokeWidth="1.5" fill="none"
                pathLength="1" markerEnd="url(#ac-ah)"/>
        ))}

        {/* Arc labels */}
        {ARCS.map((a, i) => (
          <text key={i} className={`ac-lbl ac-${a.lc}`}
                x={a.lx} y={a.ly} textAnchor={a.la}
                fill="rgba(26,184,232,0.55)" fontSize="9"
                fontFamily="DM Mono,monospace" letterSpacing="0.04em">
            {a.lbl}
          </text>
        ))}

        {/* Node circles */}
        {NODES.map((n, i) => (
          <g key={i} className={`ac-ng ac-${n.cls}`}>
            {n.hi && (
              <circle className="ac-glow" cx={n.cx} cy={n.cy} r={78}
                      fill="rgba(26,184,232,1)" filter="url(#ac-gblur)"/>
            )}
            <circle cx={n.cx} cy={n.cy} r={NR}
                    fill={n.hi ? "rgba(26,184,232,0.16)" : "rgba(12,26,44,0.96)"}
                    stroke="#1ab8e8"
                    strokeWidth={n.hi ? 2 : 1.2}
                    strokeOpacity={n.hi ? 1 : 0.38}/>
            <text x={n.cx} y={n.cy - 7} textAnchor="middle"
                  fill={n.hi ? "#8ae8ff" : "#f2eeea"}
                  fontSize="12" fontFamily="DM Sans,sans-serif" fontWeight="700">
              {n.lines[0]}
            </text>
            <text x={n.cx} y={n.cy + 10} textAnchor="middle"
                  fill={n.hi ? "#8ae8ff" : "#f2eeea"}
                  fontSize="12" fontFamily="DM Sans,sans-serif" fontWeight="700">
              {n.lines[1]}
            </text>
          </g>
        ))}

        {/* Centre emblem */}
        <g className="ac-ctr">
          <circle cx={CX} cy={CY} r={30} fill="rgba(10,22,38,0.98)" stroke="rgba(26,184,232,0.22)" strokeWidth="1"/>
          {/* Assetcycle logo at 27% scale */}
          <g transform="translate(195,195) scale(0.275)">
            <path d="M 92 50 A 42 42 0 1 0 72.7 79.7" stroke="rgba(242,238,234,0.45)"
                  strokeWidth="11" strokeLinecap="round" fill="none"/>
            <path d="M 72.7 79.7 A 42 42 0 0 0 92 50" stroke="#1ab8e8"
                  strokeWidth="11" strokeLinecap="round" fill="none"/>
            <path d="M 35 70 L 50 30 L 65 70 M 40.5 58 L 59.5 58" stroke="rgba(242,238,234,0.45)"
                  strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </g>
          <text x={CX} y={CY+22} textAnchor="middle"
                fill="rgba(26,184,232,0.3)" fontSize="6.5"
                fontFamily="DM Mono,monospace" letterSpacing="0.1em">LEARNING</text>
        </g>

        {/* Particles — animateMotion along arc paths, SMIL = SVG coordinate space */}
        {ARCS.flatMap((a, i) =>
          [0, 0.8].flatMap((off, j) => {
            const begin = `${2.1 + i * 0.22 + off}s`;
            return [
              // Glow halo
              <circle key={`g${i}${j}`} r={8} fill="#1ab8e8" filter="url(#ac-sblur)" opacity={0}>
                <animateMotion dur="1.4s" begin={begin} repeatCount="indefinite" calcMode="paced" path={a.d}/>
                <animate attributeName="opacity" values="0;0.18;0.12;0"
                         keyTimes="0;0.1;0.9;1" dur="1.4s" begin={begin} repeatCount="indefinite"/>
              </circle>,
              // Core dot
              <circle key={`c${i}${j}`} r={3.5} fill="#1ab8e8" opacity={0}>
                <animateMotion dur="1.4s" begin={begin} repeatCount="indefinite" calcMode="paced" path={a.d}/>
                <animate attributeName="opacity" values="0;0.95;0.8;0"
                         keyTimes="0;0.1;0.9;1" dur="1.4s" begin={begin} repeatCount="indefinite"/>
              </circle>,
            ];
          })
        )}
      </svg>
    </div>
  );
}
