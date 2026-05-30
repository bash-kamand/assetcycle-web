"use client";
import { useState } from "react";

const YEARS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const REACTIVE = [88, 125, 210, 105, 148, 245, 118, 162, 218, 135];
const PLANNED  = [98,  92,  88,  97, 104,  91,  98,  93,  97, 102];

const TOTAL_REACTIVE = REACTIVE.reduce((a, b) => a + b, 0);
const TOTAL_PLANNED  = PLANNED.reduce((a, b) => a + b, 0);
const SAVING = TOTAL_REACTIVE - TOTAL_PLANNED;
const SAVING_PCT = Math.round((SAVING / TOTAL_REACTIVE) * 100);

const W = 720, H = 200;
const PAD = { t: 16, r: 16, b: 36, l: 52 };
const CW = W - PAD.l - PAD.r;
const CH = H - PAD.t - PAD.b;
const MAX_VAL = 280;

const yGrid = [0, 70, 140, 210, 280];
const BAR_SLOT = CW / YEARS.length;
const BAR_W = BAR_SLOT * 0.44;

function barX(i: number) { return PAD.l + i * BAR_SLOT + (BAR_SLOT - BAR_W) / 2; }
function barY(val: number) { return PAD.t + CH - (val / MAX_VAL) * CH; }
function barH(val: number) { return (val / MAX_VAL) * CH; }

function bandPath(vals: number[], upper: number[], lower: number[]) {
  const pts = vals.map((_, i) => barX(i) + BAR_W / 2);
  const top = upper.map((v, i) => `${pts[i]},${barY(v)}`).join(" L ");
  const bot = lower.map((v, i) => `${pts[i]},${barY(v)}`).reverse().join(" L ");
  return `M ${top} L ${bot} Z`;
}

const BAND_UPPER = PLANNED.map((v, i) => v + Math.max(4, 40 - i * 8));
const BAND_LOWER = PLANNED.map((v, i) => v - Math.max(2, 30 - i * 6));

const LEARNING_STAGES = [
  {
    label: "Month 1",
    source: "Industry benchmarks",
    desc: "Forecast built from sector-wide averages for your asset classes. Accurate enough to plan — but generic.",
    confidence: 35,
  },
  {
    label: "Month 6",
    source: "Your patterns emerging",
    desc: "Condition scores, first maintenance events, and disposal data start shaping a model specific to your portfolio.",
    confidence: 68,
  },
  {
    label: "Year 2+",
    source: "Your portfolio's history",
    desc: "The system runs entirely on your assets' real behaviour. No industry average comes close to this accuracy.",
    confidence: 94,
  },
];

export default function MaintenancePlanner() {
  const [mode, setMode] = useState<"reactive" | "planned">("planned");

  const active   = mode === "reactive" ? REACTIVE : PLANNED;
  const ghost    = mode === "reactive" ? PLANNED  : REACTIVE;
  const activeCy = mode === "reactive" ? "rgba(13,13,13,0.65)" : "#0ea5d4";
  const ghostCy  = mode === "reactive" ? "rgba(14,165,212,0.22)" : "rgba(13,13,13,0.1)";

  return (
    <div>
      {/* Toggle + legend */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:16, marginBottom:36 }}>
        <div style={{ display:"flex", gap:20, alignItems:"center", flexWrap:"wrap" }}>
          {[
            { color:"rgba(13,13,13,0.55)", label:"Reactive only" },
            { color:"#0ea5d4",             label:"Planned maintenance" },
          ].map(l => (
            <div key={l.label} style={{ display:"flex", alignItems:"center", gap:6 }}>
              <span style={{ width:10, height:10, borderRadius:2, background:l.color, display:"inline-block" }}/>
              <span style={{ fontSize:12, color:"rgba(13,13,13,0.5)", fontFamily:"DM Mono, monospace" }}>{l.label}</span>
            </div>
          ))}
        </div>
        <div style={{ display:"inline-flex", border:"1px solid rgba(13,13,13,0.12)", borderRadius:8, overflow:"hidden", flexShrink:0 }}>
          {(["reactive", "planned"] as const).map(m => (
            <button
              key={m}
              onClick={() => setMode(m)}
              style={{
                padding:"9px 20px", fontSize:13, fontWeight:600,
                fontFamily:"DM Sans, sans-serif", border:"none", cursor:"pointer",
                transition:"background 0.15s, color 0.15s",
                background: mode === m ? (m === "reactive" ? "#0d0d0d" : "#0ea5d4") : "transparent",
                color: mode === m ? "#fff" : "rgba(13,13,13,0.45)",
              }}
            >
              {m === "reactive" ? "Reactive only" : "Planned maintenance"}
            </button>
          ))}
        </div>
      </div>

      {/* Bar chart */}
      <div style={{ border:"1px solid rgba(13,13,13,0.09)", borderRadius:10, overflow:"hidden", marginBottom:24 }}>
        <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display:"block", overflow:"visible" }}>
          {yGrid.map(v => (
            <g key={v}>
              <line x1={PAD.l} y1={barY(v)} x2={W - PAD.r} y2={barY(v)} stroke="rgba(13,13,13,0.05)" strokeWidth="1"/>
              <text x={PAD.l - 8} y={barY(v) + 4} textAnchor="end" fill="rgba(13,13,13,0.28)" fontSize="9" fontFamily="DM Mono,monospace">
                {v === 0 ? "" : `$${v}k`}
              </text>
            </g>
          ))}
          <line x1={PAD.l} y1={PAD.t + CH} x2={W - PAD.r} y2={PAD.t + CH} stroke="rgba(13,13,13,0.1)" strokeWidth="1"/>

          {mode === "planned" && (
            <path d={bandPath(PLANNED, BAND_UPPER, BAND_LOWER)} fill="rgba(14,165,212,0.08)" stroke="none"/>
          )}

          {ghost.map((val, i) => (
            <rect key={`g${i}`} x={barX(i)} y={barY(val)} width={BAR_W} height={barH(val)} fill={ghostCy} rx={3}/>
          ))}
          {active.map((val, i) => (
            <rect key={`a${i}`} x={barX(i)} y={barY(val)} width={BAR_W} height={barH(val)} fill={activeCy} rx={3}/>
          ))}
          {YEARS.map((yr, i) => (
            <text key={yr} x={barX(i) + BAR_W / 2} y={H - 10} textAnchor="middle" fill="rgba(13,13,13,0.28)" fontSize="9" fontFamily="DM Mono,monospace">
              Yr {yr}
            </text>
          ))}

          {mode === "planned" && (
            <g>
              <line
                x1={barX(1) + BAR_W / 2} y1={PAD.t + 4}
                x2={barX(1) + BAR_W / 2} y2={PAD.t + CH}
                stroke="rgba(14,165,212,0.4)" strokeWidth="1" strokeDasharray="4,3"
              />
              <text x={barX(1) + BAR_W / 2 + 7} y={PAD.t + 16} fill="#0ea5d4" fontSize="8" fontFamily="DM Mono,monospace">
                Your data takes over →
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* Savings summary */}
      <div style={{
        display:"flex", gap:32, flexWrap:"wrap", alignItems:"center",
        padding:"20px 28px",
        background: mode === "reactive" ? "rgba(13,13,13,0.03)" : "rgba(14,165,212,0.06)",
        border:`1px solid ${mode === "reactive" ? "rgba(13,13,13,0.09)" : "rgba(14,165,212,0.2)"}`,
        borderRadius:10, marginBottom:56, transition:"background 0.2s, border-color 0.2s",
      }}>
        <div>
          <p style={{ fontSize:10, fontFamily:"DM Mono, monospace", letterSpacing:"0.1em", color:"rgba(13,13,13,0.35)", marginBottom:6, textTransform:"uppercase" }}>Reactive — 10yr total</p>
          <p style={{ fontSize:24, fontWeight:700, letterSpacing:"-0.03em", color:"rgba(13,13,13,0.5)" }}>${TOTAL_REACTIVE.toLocaleString()}k</p>
        </div>
        <div style={{ color:"rgba(13,13,13,0.2)", fontSize:20 }}>→</div>
        <div>
          <p style={{ fontSize:10, fontFamily:"DM Mono, monospace", letterSpacing:"0.1em", color:"#0ea5d4", marginBottom:6, textTransform:"uppercase" }}>Planned — 10yr total</p>
          <p style={{ fontSize:24, fontWeight:700, letterSpacing:"-0.03em", color:"#0d0d0d" }}>${TOTAL_PLANNED.toLocaleString()}k</p>
        </div>
        <div style={{ marginLeft:"auto" }}>
          <p style={{ fontSize:10, fontFamily:"DM Mono, monospace", letterSpacing:"0.1em", color:"rgba(13,13,13,0.35)", marginBottom:6, textTransform:"uppercase" }}>10-year saving</p>
          <p style={{ fontSize:24, fontWeight:700, letterSpacing:"-0.03em", color:"#0ea5d4" }}>
            ${SAVING.toLocaleString()}k <span style={{ fontSize:14, fontWeight:500 }}>({SAVING_PCT}% less)</span>
          </p>
        </div>
      </div>

      {/* Learning progression */}
      <p style={{ fontSize:10, fontFamily:"DM Mono, monospace", letterSpacing:"0.12em", textTransform:"uppercase", color:"rgba(13,13,13,0.3)", marginBottom:28 }}>
        How the forecast gets more accurate over time
      </p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:0, marginBottom:20 }}>
        {LEARNING_STAGES.map((stage, i) => (
          <div
            key={stage.label}
            style={{
              padding:"28px 24px",
              background: i === 2 ? "#0ea5d4" : i === 1 ? "rgba(14,165,212,0.07)" : "rgba(13,13,13,0.02)",
              borderRadius: i === 0 ? "8px 0 0 8px" : i === 2 ? "0 8px 8px 0" : 0,
              border:`1px solid ${i === 2 ? "#0ea5d4" : "rgba(13,13,13,0.09)"}`,
              borderLeft: i > 0 ? "none" : undefined,
            }}
          >
            <p style={{ fontSize:10, fontFamily:"DM Mono, monospace", letterSpacing:"0.12em", textTransform:"uppercase", color: i === 2 ? "rgba(255,255,255,0.55)" : "rgba(13,13,13,0.3)", marginBottom:10 }}>
              {stage.label}
            </p>
            <p style={{ fontSize:15, fontWeight:600, letterSpacing:"-0.01em", color: i === 2 ? "#fff" : "#0d0d0d", marginBottom:12, lineHeight:1.3 }}>
              {stage.source}
            </p>
            <p style={{ fontSize:13, lineHeight:1.75, fontWeight:300, color: i === 2 ? "rgba(255,255,255,0.72)" : "rgba(13,13,13,0.48)", marginBottom:20 }}>
              {stage.desc}
            </p>
            <div>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
                <span style={{ fontSize:9, fontFamily:"DM Mono, monospace", color: i === 2 ? "rgba(255,255,255,0.45)" : "rgba(13,13,13,0.28)", letterSpacing:"0.08em" }}>CONFIDENCE</span>
                <span style={{ fontSize:9, fontFamily:"DM Mono, monospace", fontWeight:500, color: i === 2 ? "rgba(255,255,255,0.85)" : "#0ea5d4" }}>{stage.confidence}%</span>
              </div>
              <div style={{ height:3, background: i === 2 ? "rgba(255,255,255,0.18)" : "rgba(13,13,13,0.07)", borderRadius:2 }}>
                <div style={{ height:"100%", width:`${stage.confidence}%`, background: i === 2 ? "rgba(255,255,255,0.85)" : "#0ea5d4", borderRadius:2 }}/>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p style={{ fontSize:13, color:"rgba(13,13,13,0.36)", fontWeight:300, lineHeight:1.75 }}>
        No static system gets more accurate over time. AssetCycle does — because it learns from every event in your portfolio, not a generic industry table.
      </p>
    </div>
  );
}
