"use client";
import { useEffect, useState } from "react";

export default function HeroAnimation() {
  const [accuracy, setAccuracy] = useState(32);
  const [dataPoints, setDataPoints] = useState(127);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let v = 32;
    const acc = setInterval(() => {
      v = v + (91 - v) * 0.014;
      setAccuracy(Math.round(v));
      if (Math.round(v) >= 90) clearInterval(acc);
    }, 50);

    let dp = 127;
    const dpi = setInterval(() => {
      dp = Math.min(2847, dp + Math.round(2 + Math.random() * 9));
      setDataPoints(dp);
      if (dp >= 2847) clearInterval(dpi);
    }, 25);

    const t1 = setTimeout(() => setPhase(1), 1600);
    const t2 = setTimeout(() => setPhase(2), 3200);

    return () => {
      clearInterval(acc); clearInterval(dpi);
      clearTimeout(t1); clearTimeout(t2);
    };
  }, []);

  const stages = [
    { label: "Day 1",   text: "Industry benchmarks.",      sub: "Solid, standard, useful." },
    { label: "Month 6", text: "Your data, blended in.",    sub: "More accurate than any competitor." },
    { label: "Year 2",  text: "Your portfolio's history.", sub: "No static system can touch it." },
  ];

  const cyan   = "#0ea5d4";
  const txt    = "#0d0d0d";
  const muted  = "rgba(13,13,13,0.42)";
  const rule   = "rgba(13,13,13,0.08)";
  const grid   = "rgba(13,13,13,0.06)";

  return (
    <div style={{
      background: "#f6f4f1",
      border: `1px solid ${rule}`,
      borderRadius: 14,
      padding: "28px 28px 24px",
      display: "flex", flexDirection: "column", gap: 0,
      minHeight: 460,
    }}>
      <style>{`
        @keyframes drawCurve { to { stroke-dashoffset: 0; } }
        @keyframes dotPop    { from { opacity:0; r:0; } to { opacity:1; r:3.5; } }
        @keyframes livePulse { 0%,100% { opacity:1; } 50% { opacity:0.25; } }
      `}</style>

      {/* Header */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:20 }}>
        <span style={{ fontFamily:"DM Mono,monospace", fontSize:9, letterSpacing:"0.16em", textTransform:"uppercase", color:cyan }}>
          Intelligence Engine
        </span>
        <div style={{ display:"flex", alignItems:"center", gap:6 }}>
          <div style={{ width:6, height:6, borderRadius:"50%", background:"#22c55e", animation:"livePulse 1.8s ease infinite" }}/>
          <span style={{ fontFamily:"DM Mono,monospace", fontSize:8, color:muted, letterSpacing:"0.1em" }}>LIVE</span>
        </div>
      </div>

      {/* Chart */}
      <div style={{ flex:1, minHeight:160 }}>
        <svg width="100%" viewBox="0 0 320 148" style={{ overflow:"visible", display:"block" }}>
          {[0,33,66,100].map(y => (
            <line key={y} x1="28" y1={130-y*1.22} x2="308" y2={130-y*1.22} stroke={grid} strokeWidth="1"/>
          ))}
          {[0,50,100].map(y => (
            <text key={y} x="22" y={133-y*1.22} textAnchor="end"
                  fill={muted} fontSize="7" fontFamily="DM Mono,monospace">{y}%</text>
          ))}
          <line x1="28" y1="4"   x2="28"  y2="132" stroke={rule} strokeWidth="1"/>
          <line x1="28" y1="132" x2="310" y2="132" stroke={rule} strokeWidth="1"/>
          {[{x:75,l:"Day 1"},{x:178,l:"Month 6"},{x:280,l:"Year 2"}].map(({x,l}) => (
            <text key={l} x={x} y="143" textAnchor="middle"
                  fill={muted} fontSize="7" fontFamily="DM Mono,monospace">{l}</text>
          ))}
          {[75,178,280].map(x => (
            <line key={x} x1={x} y1="132" x2={x} y2="4"
                  stroke={grid} strokeWidth="1" strokeDasharray="3,4"/>
          ))}
          {/* Competitor */}
          <line x1="75" y1="91" x2="280" y2="91"
                stroke="rgba(13,13,13,0.2)" strokeWidth="1.5" strokeDasharray="5,3"/>
          <text x="285" y="94" fill={muted} fontSize="7" fontFamily="DM Mono,monospace">~30%</text>
          {/* Fill */}
          <path d="M 75,91 C 118,91 148,74 178,57 C 208,41 244,12 280,4 L 280,91 Z"
                fill="rgba(14,165,212,0.1)"/>
          {/* Curve */}
          <path d="M 75,91 C 118,91 148,74 178,57 C 208,41 244,12 280,4"
                stroke={cyan} strokeWidth="2" fill="none" strokeLinecap="round"
                style={{ strokeDasharray:360, strokeDashoffset:360, animation:"drawCurve 2.2s ease forwards 0.4s" }}/>
          {/* Dots */}
          {[{x:75,y:91},{x:178,y:57},{x:280,y:4}].map(({x,y},i) => (
            <circle key={i} cx={x} cy={y} r="3.5" fill="#f6f4f1" stroke={cyan} strokeWidth="1.5"
                    style={{ opacity:0, animation:`dotPop 0.35s ease forwards ${1.0+i*0.75}s` }}/>
          ))}
        </svg>
      </div>

      {/* Stages */}
      <div style={{ borderTop:`1px solid ${rule}`, paddingTop:16, marginBottom:16 }}>
        {stages.map((s, i) => (
          <div key={s.label} style={{
            display:"grid", gridTemplateColumns:"68px 1fr",
            gap:"0 14px", padding:"9px 0",
            borderBottom: i < 2 ? `1px solid ${rule}` : "none",
            opacity: phase >= i ? 1 : 0.25,
            transition: "opacity 0.7s ease",
          }}>
            <span style={{
              fontFamily:"DM Mono,monospace", fontSize:8, fontWeight:500,
              color: phase >= i ? cyan : "rgba(14,165,212,0.4)",
              letterSpacing:"0.06em", textTransform:"uppercase", paddingTop:1
            }}>{s.label}</span>
            <div>
              <span style={{ fontSize:12, fontWeight:500, color: phase >= i ? txt : muted }}>
                {s.text}
              </span>
              {" "}
              <span style={{ fontSize:12, fontWeight:300, color: muted }}>
                {s.sub}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, borderTop:`1px solid ${rule}`, paddingTop:14 }}>
        <div>
          <p style={{ fontFamily:"DM Mono,monospace", fontSize:8, color:muted, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:5 }}>Forecast accuracy</p>
          <p style={{ fontFamily:"'Instrument Serif',Georgia,serif", fontSize:28, color:cyan, lineHeight:1, letterSpacing:"-0.01em" }}>{accuracy}%</p>
        </div>
        <div>
          <p style={{ fontFamily:"DM Mono,monospace", fontSize:8, color:muted, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:5 }}>Data points</p>
          <p style={{ fontFamily:"'Instrument Serif',Georgia,serif", fontSize:28, color:txt, lineHeight:1, letterSpacing:"-0.01em" }}>{dataPoints.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
