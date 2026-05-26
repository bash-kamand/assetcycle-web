"use client";
import { useState, useMemo } from "react";

export default function ROICalculator() {
  const [assets, setAssets] = useState(80);
  const [avgValue, setAvgValue] = useState(45);
  const [maintenance, setMaintenance] = useState(280);

  const r = useMemo(() => {
    const totalPortfolio = assets * avgValue * 1000;
    const maintenanceDollars = maintenance * 1000;
    const timeSaved = Math.round(assets * 7 * 0.65);
    const maintenanceSaving = Math.round(maintenanceDollars * 0.12);
    const failureSaving = Math.round(totalPortfolio * 0.008 * 0.45);
    const totalSaving = maintenanceSaving + failureSaving;
    const monthlyFee = Math.round(Math.min(1800, Math.max(299, assets * 7)));
    const annualFee = monthlyFee * 12;
    const net = totalSaving - annualFee;
    const roi = annualFee > 0 ? Math.round((net / annualFee) * 100) : 0;
    const payback = totalSaving > 0 ? Math.round((annualFee / totalSaving) * 12) : 12;
    return { timeSaved, maintenanceSaving, failureSaving, totalSaving, monthlyFee, annualFee, net, roi, payback };
  }, [assets, avgValue, maintenance]);

  const fmtK = (n: number) => n >= 1000000 ? `$${(n/1000000).toFixed(1)}M` : n >= 1000 ? `$${(n/1000).toFixed(0)}K` : `$${n}`;

  const sliderStyle: React.CSSProperties = {
    width: "100%", height: 3, appearance: "none" as const,
    background: "linear-gradient(to right, #1ab8e8 var(--pct, 50%), rgba(242,238,234,0.1) var(--pct, 50%))",
    borderRadius: 2, outline: "none", cursor: "pointer",
  };

  const setSliderPct = (val: number, min: number, max: number) =>
    `${((val - min) / (max - min)) * 100}%`;

  return (
    <div>
      <style>{`
        .roi-slider { width: 100%; height: 3px; -webkit-appearance: none; appearance: none; border-radius: 2px; outline: none; cursor: pointer; background: rgba(242,238,234,0.1); }
        .roi-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 14px; height: 14px; border-radius: 50%; background: #1ab8e8; cursor: pointer; }
        .roi-slider::-moz-range-thumb { width: 14px; height: 14px; border-radius: 50%; background: #1ab8e8; border: none; cursor: pointer; }
        .roi-track { position: relative; padding: 16px 0 8px; }
        .roi-track-fill { position: absolute; top: 50%; left: 0; height: 3px; background: #1ab8e8; border-radius: 2px; pointer-events: none; transform: translateY(-50%); }
      `}</style>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, borderRadius: 12, overflow: "hidden" }}>
        {/* Inputs */}
        <div style={{ background: "#0d1a27", border: "1px solid rgba(242,238,234,0.08)", padding: "40px", borderRadius: "12px 0 0 12px" }}>
          <p style={{ fontFamily: "DM Mono, monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1ab8e8", marginBottom: 36 }}>Your numbers</p>

          {/* Assets */}
          <div style={{ marginBottom: 36 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <label style={{ fontSize: 13, fontWeight: 500, color: "rgba(242,238,234,0.7)" }}>Assets under management</label>
              <span style={{ fontSize: 14, fontWeight: 700, color: "#f2eeea", fontFamily: "DM Mono, monospace" }}>{assets}</span>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: "50%", left: 0, height: 3, background: "#1ab8e8", borderRadius: 2, pointerEvents: "none", transform: "translateY(-50%)", width: setSliderPct(assets, 10, 500) }}/>
              <input type="range" min={10} max={500} step={10} value={assets} onChange={e => setAssets(+e.target.value)} className="roi-slider" style={{ position: "relative", zIndex: 1, background: "rgba(242,238,234,0.1)" }}/>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "rgba(242,238,234,0.25)", marginTop: 6, fontFamily: "DM Mono, monospace" }}>
              <span>10</span><span>500</span>
            </div>
          </div>

          {/* Avg value */}
          <div style={{ marginBottom: 36 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <label style={{ fontSize: 13, fontWeight: 500, color: "rgba(242,238,234,0.7)" }}>Average asset value</label>
              <span style={{ fontSize: 14, fontWeight: 700, color: "#f2eeea", fontFamily: "DM Mono, monospace" }}>${avgValue}K</span>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: "50%", left: 0, height: 3, background: "#1ab8e8", borderRadius: 2, pointerEvents: "none", transform: "translateY(-50%)", width: setSliderPct(avgValue, 5, 500) }}/>
              <input type="range" min={5} max={500} step={5} value={avgValue} onChange={e => setAvgValue(+e.target.value)} className="roi-slider" style={{ position: "relative", zIndex: 1, background: "rgba(242,238,234,0.1)" }}/>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "rgba(242,238,234,0.25)", marginTop: 6, fontFamily: "DM Mono, monospace" }}>
              <span>$5K</span><span>$500K</span>
            </div>
          </div>

          {/* Maintenance budget */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <label style={{ fontSize: 13, fontWeight: 500, color: "rgba(242,238,234,0.7)" }}>Annual maintenance budget</label>
              <span style={{ fontSize: 14, fontWeight: 700, color: "#f2eeea", fontFamily: "DM Mono, monospace" }}>${maintenance}K</span>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: "50%", left: 0, height: 3, background: "#1ab8e8", borderRadius: 2, pointerEvents: "none", transform: "translateY(-50%)", width: setSliderPct(maintenance, 50, 2000) }}/>
              <input type="range" min={50} max={2000} step={10} value={maintenance} onChange={e => setMaintenance(+e.target.value)} className="roi-slider" style={{ position: "relative", zIndex: 1, background: "rgba(242,238,234,0.1)" }}/>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "rgba(242,238,234,0.25)", marginTop: 6, fontFamily: "DM Mono, monospace" }}>
              <span>$50K</span><span>$2M</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div style={{ background: "rgba(26,184,232,0.05)", border: "1px solid rgba(26,184,232,0.15)", padding: "40px", borderRadius: "0 12px 12px 0", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <p style={{ fontFamily: "DM Mono, monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1ab8e8", marginBottom: 36 }}>Estimated annual impact</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 32 }}>
            <div>
              <p style={{ fontFamily: "DM Mono, monospace", fontSize: 10, color: "rgba(242,238,234,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>Maintenance savings</p>
              <p style={{ fontFamily: "Syne, sans-serif", fontSize: 28, fontWeight: 800, color: "#f2eeea", letterSpacing: "-0.03em" }}>{fmtK(r.maintenanceSaving)}</p>
            </div>
            <div>
              <p style={{ fontFamily: "DM Mono, monospace", fontSize: 10, color: "rgba(242,238,234,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>Failure prevention</p>
              <p style={{ fontFamily: "Syne, sans-serif", fontSize: 28, fontWeight: 800, color: "#f2eeea", letterSpacing: "-0.03em" }}>{fmtK(r.failureSaving)}</p>
            </div>
            <div>
              <p style={{ fontFamily: "DM Mono, monospace", fontSize: 10, color: "rgba(242,238,234,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>Time saved / year</p>
              <p style={{ fontFamily: "Syne, sans-serif", fontSize: 28, fontWeight: 800, color: "#f2eeea", letterSpacing: "-0.03em" }}>{r.timeSaved}h</p>
            </div>
            <div>
              <p style={{ fontFamily: "DM Mono, monospace", fontSize: 10, color: "rgba(242,238,234,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>Payback period</p>
              <p style={{ fontFamily: "Syne, sans-serif", fontSize: 28, fontWeight: 800, color: "#f2eeea", letterSpacing: "-0.03em" }}>{r.payback}mo</p>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(26,184,232,0.2)", paddingTop: 28 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div>
                <p style={{ fontFamily: "DM Mono, monospace", fontSize: 10, color: "rgba(242,238,234,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>Total annual savings</p>
                <p style={{ fontFamily: "Syne, sans-serif", fontSize: 40, fontWeight: 800, color: "#1ab8e8", letterSpacing: "-0.04em", lineHeight: 1 }}>{fmtK(r.totalSaving)}</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontFamily: "DM Mono, monospace", fontSize: 10, color: "rgba(242,238,234,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>vs. ~{fmtK(r.annualFee)}/yr</p>
                <p style={{ fontFamily: "Syne, sans-serif", fontSize: 28, fontWeight: 800, color: r.roi >= 0 ? "#4ade80" : "#f87171", letterSpacing: "-0.03em" }}>{r.roi > 0 ? "+" : ""}{r.roi}% ROI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p style={{ marginTop: 14, fontSize: 11, color: "rgba(242,238,234,0.2)", fontFamily: "DM Mono, monospace" }}>
        Estimates based on industry benchmarks. Actual results vary.
      </p>
    </div>
  );
}
