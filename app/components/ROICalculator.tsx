"use client";
import { useState, useMemo } from "react";

export default function ROICalculator() {
  const [assets,      setAssets]      = useState(80);
  const [avgValue,    setAvgValue]    = useState(45);
  const [maintenance, setMaintenance] = useState(280);

  const r = useMemo(() => {
    const totalPortfolio    = assets * avgValue * 1000;
    const maintenanceDollars = maintenance * 1000;
    const timeSaved         = Math.round(assets * 7 * 0.65);
    const maintenanceSaving = Math.round(maintenanceDollars * 0.12);
    const failureSaving     = Math.round(totalPortfolio * 0.008 * 0.45);
    const totalSaving       = maintenanceSaving + failureSaving;
    const monthlyFee        = Math.round(Math.min(1800, Math.max(299, assets * 7)));
    const annualFee         = monthlyFee * 12;
    const net               = totalSaving - annualFee;
    const roi               = annualFee > 0 ? Math.round((net / annualFee) * 100) : 0;
    const payback           = totalSaving > 0 ? Math.round((annualFee / totalSaving) * 12) : 12;
    return { timeSaved, maintenanceSaving, failureSaving, totalSaving, monthlyFee, annualFee, net, roi, payback };
  }, [assets, avgValue, maintenance]);

  const fmt = (n: number) =>
    n >= 1000000 ? `$${(n/1000000).toFixed(1)}M` : n >= 1000 ? `$${(n/1000).toFixed(0)}K` : `$${n}`;

  const pct = (val: number, min: number, max: number) =>
    `${((val - min) / (max - min)) * 100}%`;

  const cyan  = "#0ea5d4";
  const txt   = "#0d0d0d";
  const muted = "rgba(13,13,13,0.42)";
  const rule  = "rgba(13,13,13,0.09)";

  const Slider = ({ value, min, max, step, onChange, label, display }: {
    value: number; min: number; max: number; step: number;
    onChange: (v: number) => void; label: string; display: string;
  }) => (
    <div style={{ marginBottom: 28 }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:10 }}>
        <label style={{ fontSize:13, color:txt, fontWeight:500 }}>{label}</label>
        <span style={{ fontFamily:"DM Mono,monospace", fontSize:13, fontWeight:600, color:txt }}>{display}</span>
      </div>
      <div style={{ position:"relative", height:20, display:"flex", alignItems:"center" }}>
        {/* filled track */}
        <div style={{ position:"absolute", left:0, height:3, width:pct(value,min,max),
                      background:cyan, borderRadius:2, pointerEvents:"none", zIndex:1 }}/>
        {/* empty track */}
        <div style={{ position:"absolute", left:0, right:0, height:3,
                      background:"rgba(13,13,13,0.12)", borderRadius:2 }}/>
        <input type="range" min={min} max={max} step={step} value={value}
               onChange={e => onChange(+e.target.value)}
               className="roi-range"
               style={{ position:"relative", zIndex:2, width:"100%", margin:0 }}/>
      </div>
      <div style={{ display:"flex", justifyContent:"space-between", fontSize:10,
                    color:muted, marginTop:5, fontFamily:"DM Mono,monospace" }}>
        <span>{min >= 1000 ? `$${min/1000}K` : min}</span>
        <span>{max >= 1000 ? `$${max/1000}K` : max >= 1000000 ? `$${max/1000000}M` : max}</span>
      </div>
    </div>
  );

  const StatRow = ({ label, value, accent }: { label: string; value: string; accent?: boolean }) => (
    <div style={{ padding:"14px 0", borderBottom:`1px solid ${rule}`, display:"flex", justifyContent:"space-between", alignItems:"baseline" }}>
      <span style={{ fontFamily:"DM Mono,monospace", fontSize:10, letterSpacing:"0.06em",
                     textTransform:"uppercase", color:muted }}>{label}</span>
      <span style={{ fontFamily:"Instrument Serif,Georgia,serif", fontSize:22,
                     color: accent ? cyan : txt, letterSpacing:"-0.02em" }}>{value}</span>
    </div>
  );

  return (
    <div>
      <style>{`
        .roi-range {
          -webkit-appearance: none; appearance: none;
          height: 3px; background: transparent;
          outline: none; cursor: pointer; border-radius: 2px;
        }
        .roi-range::-webkit-slider-thumb {
          -webkit-appearance: none; appearance: none;
          width: 16px; height: 16px; border-radius: 50%;
          background: #fff; border: 2px solid ${cyan};
          cursor: pointer; box-shadow: 0 1px 4px rgba(14,165,212,0.25);
        }
        .roi-range::-moz-range-thumb {
          width: 16px; height: 16px; border-radius: 50%;
          background: #fff; border: 2px solid ${cyan};
          cursor: pointer; box-shadow: 0 1px 4px rgba(14,165,212,0.25);
        }
      `}</style>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:2,
                    border:`1px solid ${rule}`, borderRadius:12, overflow:"hidden" }}>

        {/* ── Inputs ── */}
        <div style={{ background:"#f6f4f1", padding:"36px 36px 32px" }}>
          <p style={{ fontFamily:"DM Mono,monospace", fontSize:9, letterSpacing:"0.14em",
                      textTransform:"uppercase", color:cyan, marginBottom:32 }}>Your numbers</p>
          <Slider value={assets}      min={10}  max={500}  step={10}
                  onChange={setAssets}      label="Assets under management"  display={`${assets}`}/>
          <Slider value={avgValue}    min={5}   max={500}  step={5}
                  onChange={setAvgValue}    label="Average asset value"       display={`$${avgValue}K`}/>
          <Slider value={maintenance} min={50}  max={2000} step={10}
                  onChange={setMaintenance} label="Annual maintenance budget"  display={`$${maintenance}K`}/>
          <p style={{ fontSize:11, color:muted, fontFamily:"DM Mono,monospace", marginTop:4 }}>
            Estimates based on industry benchmarks. Actual results vary.
          </p>
        </div>

        {/* ── Results ── */}
        <div style={{ background:"#fff", padding:"36px 36px 32px",
                      borderLeft:`1px solid ${rule}` }}>
          <p style={{ fontFamily:"DM Mono,monospace", fontSize:9, letterSpacing:"0.14em",
                      textTransform:"uppercase", color:cyan, marginBottom:32 }}>Estimated annual impact</p>

          <StatRow label="Maintenance savings"  value={fmt(r.maintenanceSaving)}/>
          <StatRow label="Failure prevention"   value={fmt(r.failureSaving)}/>
          <StatRow label="Time saved / year"    value={`${r.timeSaved} hrs`}/>
          <StatRow label="Payback period"       value={`${r.payback} months`}/>

          {/* Total */}
          <div style={{ marginTop:24, padding:"20px 0 0" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", flexWrap:"wrap", gap:12 }}>
              <div>
                <p style={{ fontFamily:"DM Mono,monospace", fontSize:9, letterSpacing:"0.1em",
                            textTransform:"uppercase", color:muted, marginBottom:6 }}>Total savings / yr</p>
                <p style={{ fontFamily:"Instrument Serif,Georgia,serif", fontSize:42,
                            color:cyan, letterSpacing:"-0.03em", lineHeight:1 }}>{fmt(r.totalSaving)}</p>
              </div>
              <div style={{ textAlign:"right" }}>
                <p style={{ fontFamily:"DM Mono,monospace", fontSize:9, letterSpacing:"0.1em",
                            textTransform:"uppercase", color:muted, marginBottom:6 }}>vs {fmt(r.annualFee)}/yr plan</p>
                <p style={{ fontFamily:"Instrument Serif,Georgia,serif", fontSize:28,
                            color: r.roi >= 0 ? "#16a34a" : "#dc2626",
                            letterSpacing:"-0.02em", lineHeight:1 }}>
                  {r.roi > 0 ? "+" : ""}{r.roi}% ROI
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
