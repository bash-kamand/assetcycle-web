export default function Home() {
  const features = [
    { icon: "🏗️", title: "Fixed Asset Register", desc: "Every asset — plant, machinery, building services, infrastructure — in one searchable register with full depreciation history." },
    { icon: "📉", title: "Depreciation Engine", desc: "Straight-line and declining balance run automatically. Export ATO-compliant schedules for your accountant." },
    { icon: "🔧", title: "Work Orders", desc: "Log maintenance jobs against specific assets. Track labour hours, actual vs estimated cost, and full service history." },
    { icon: "🧠", title: "Intelligence Engine", desc: "Learns from every disposal and maintenance event. Refines expected lifespan and cost estimates using your real portfolio data." },
    { icon: "📊", title: "Lifecycle Forecasting", desc: "Model deterioration curves, set condition breakpoints, and project 10-year capital expenditure for budget planning." },
    { icon: "📱", title: "iPad Field View", desc: "Scan QR codes on assets, record condition in the field, and raise work orders without leaving the site." },
  ];

  const LogoMark = ({ size = 36, light = false }: { size?: number; light?: boolean }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 92 50 A 42 42 0 1 0 72.7 79.7"
            stroke={light ? "#ffffff" : "#1a2a3a"} strokeWidth="11" strokeLinecap="round" fill="none"/>
      <path d="M 72.7 79.7 A 42 42 0 0 0 92 50"
            stroke="#1ab8e8" strokeWidth="11" strokeLinecap="round" fill="none"/>
      <path d="M 35 70 L 50 30 L 65 70 M 40.5 58 L 59.5 58"
            stroke={light ? "#ffffff" : "#1a2a3a"} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: "#07111a", color: "#f0ede8", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .btn-primary {
          display: inline-flex; align-items: center;
          padding: 14px 36px;
          background: #1ab8e8; color: #07111a;
          font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 700;
          border-radius: 8px; text-decoration: none; letter-spacing: -0.01em;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-primary:hover { background: #2ec8f8; transform: translateY(-1px); }

        .nav-link {
          font-size: 14px; font-weight: 500;
          color: rgba(240,237,232,0.55); text-decoration: none;
          transition: color 0.15s;
        }
        .nav-link:hover { color: #f0ede8; }

        .feature-card {
          background: #0d1a27;
          border: 1px solid rgba(240,237,232,0.07);
          border-radius: 12px; padding: 28px;
          transition: border-color 0.2s, transform 0.2s;
        }
        .feature-card:hover { border-color: rgba(26,184,232,0.3); transform: translateY(-2px); }

        /* ── Self-learning timeline animation ── */
        .learning-track {
          display: flex;
          flex-direction: column;
          gap: 0;
          text-align: left;
          max-width: 520px;
          margin: 0 auto;
        }
        .learning-row {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 16px;
          align-items: center;
          padding: 14px 0;
          border-bottom: 1px solid rgba(240,237,232,0.08);
          opacity: 0;
          transform: translateX(-8px);
        }
        .learning-row:last-child { border-bottom: none; }
        .learning-row.anim-1 { animation: rowIn 0.5s ease forwards 0.8s; }
        .learning-row.anim-2 { animation: rowIn 0.5s ease forwards 1.3s; }
        .learning-row.anim-3 { animation: rowIn 0.5s ease forwards 1.8s; }

        .learning-label {
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: #1ab8e8;
          white-space: nowrap;
        }
        .learning-text {
          font-size: 15px; font-weight: 400;
          color: rgba(240,237,232,0.7); line-height: 1.4;
        }
        .learning-text strong { color: #f0ede8; font-weight: 600; }

        /* progress bar that fills on each row */
        .learning-bar {
          height: 2px;
          background: rgba(26,184,232,0.15);
          border-radius: 2px;
          margin-top: 4px;
          overflow: hidden;
        }
        .learning-bar-fill {
          height: 100%;
          background: #1ab8e8;
          border-radius: 2px;
          width: 0;
        }
        .anim-1 .learning-bar-fill { animation: barFill 1.2s ease forwards 1.0s; }
        .anim-2 .learning-bar-fill { animation: barFill 1.2s ease forwards 1.5s; }
        .anim-3 .learning-bar-fill { animation: barFill100 1.2s ease forwards 2.0s; }

        @keyframes rowIn {
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes barFill {
          to { width: 55%; }
        }
        @keyframes barFill100 {
          to { width: 100%; }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.6s ease forwards; }
        .d1 { animation-delay: 0.05s; opacity: 0; }
        .d2 { animation-delay: 0.2s;  opacity: 0; }
        .d3 { animation-delay: 0.35s; opacity: 0; }
        .d4 { animation-delay: 0.5s;  opacity: 0; }

        /* Pulsing dot on the active state */
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }
        .pulse-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #1ab8e8; display: inline-block;
          animation: pulse 2s ease infinite 2.8s;
        }
      `}</style>

      {/* Nav */}
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(7,17,26,0.9)",
        backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(240,237,232,0.06)"
      }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 28px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <LogoMark size={32} light />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 16, letterSpacing: "0.02em", color: "#f0ede8" }}>Assetcycle</span>
          </div>
          <nav style={{ display: "flex", alignItems: "center", gap: 28 }}>
            <a href="#features" className="nav-link">Features</a>
            <a href="#how-it-works" className="nav-link">How it works</a>
            <a href="https://assetcycle.com.au" className="nav-link">Sign in</a>
          </nav>
          <a href="https://assetcycle.com.au" className="btn-primary" style={{ padding: "9px 20px", fontSize: 14 }}>
            Get started
          </a>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: "100px 24px 120px", position: "relative", overflow: "hidden" }}>
        {/* Subtle grid */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(26,184,232,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26,184,232,0.03) 1px, transparent 1px)",
          backgroundSize: "56px 56px"
        }}/>
        {/* Glow */}
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: 800, height: 500,
          background: "radial-gradient(ellipse, rgba(26,184,232,0.06) 0%, transparent 65%)",
          pointerEvents: "none"
        }}/>

        <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center", position: "relative" }}>

          {/* Badge */}
          <div className="fade-up d1" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(26,184,232,0.1)", border: "1px solid rgba(26,184,232,0.2)",
            color: "#1ab8e8", fontSize: 11, fontWeight: 700, letterSpacing: "0.09em",
            textTransform: "uppercase", padding: "6px 16px", borderRadius: 100, marginBottom: 32
          }}>
            <span className="pulse-dot" style={{ animationDelay: "0s" }}/>
            Self-learning asset intelligence
          </div>

          {/* Headline */}
          <h1 className="fade-up d2" style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(40px, 5.5vw, 68px)",
            fontWeight: 800, lineHeight: 1.08,
            letterSpacing: "-0.03em", color: "#f0ede8", marginBottom: 24
          }}>
            The asset management system<br/>
            <span style={{ color: "#1ab8e8" }}>that gets smarter every day.</span>
          </h1>

          {/* Sub */}
          <p className="fade-up d3" style={{
            fontSize: 17, lineHeight: 1.7, fontWeight: 300,
            color: "rgba(240,237,232,0.55)",
            maxWidth: 520, margin: "0 auto 56px"
          }}>
            Every other platform gives you the same output in month 12 as month 1.<br/>Assetcycle doesn&apos;t.
          </p>

          {/* Learning animation */}
          <div className="fade-up d4" style={{
            background: "#0d1a27",
            border: "1px solid rgba(26,184,232,0.15)",
            borderRadius: 16, padding: "28px 32px",
            marginBottom: 48
          }}>
            <div className="learning-track">
              <div className="learning-row anim-1">
                <span className="learning-label">Day 1</span>
                <div>
                  <span className="learning-text"><strong>Industry benchmarks.</strong> Solid, standard, useful.</span>
                  <div className="learning-bar"><div className="learning-bar-fill"/></div>
                </div>
              </div>
              <div className="learning-row anim-2">
                <span className="learning-label">Month 6</span>
                <div>
                  <span className="learning-text">Blending benchmarks with <strong>your actual data.</strong> More accurate than any competitor.</span>
                  <div className="learning-bar"><div className="learning-bar-fill"/></div>
                </div>
              </div>
              <div className="learning-row anim-3">
                <span className="learning-label">Year 2</span>
                <div>
                  <span className="learning-text">Running on <strong>your portfolio&apos;s real history.</strong> No static system can touch it.</span>
                  <div className="learning-bar"><div className="learning-bar-fill"/></div>
                </div>
              </div>
            </div>
          </div>

          {/* Single CTA */}
          <a href="https://assetcycle.com.au" className="btn-primary">
            Start free →
          </a>
        </div>
      </section>

      {/* Stats */}
      <section style={{
        background: "#0a1520",
        borderTop: "1px solid rgba(240,237,232,0.06)",
        borderBottom: "1px solid rgba(240,237,232,0.06)",
        padding: "32px 24px"
      }}>
        <div style={{
          maxWidth: 1140, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 24, textAlign: "center"
        }}>
          {[
            { v: "Australian", l: "hosted" },
            { v: "ATO", l: "compliant" },
            { v: "Real-time", l: "risk scoring" },
            { v: "QR scan", l: "field-ready" },
          ].map(({ v, l }) => (
            <div key={l}>
              <p style={{ fontSize: 18, fontWeight: 700, color: "#1ab8e8", marginBottom: 3, letterSpacing: "-0.01em" }}>{v}</p>
              <p style={{ fontSize: 12, color: "rgba(240,237,232,0.35)", fontWeight: 400 }}>{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1ab8e8", marginBottom: 16 }}>What it is</p>
            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800,
              color: "#f0ede8", letterSpacing: "-0.025em", marginBottom: 14
            }}>Everything in one platform</h2>
            <p style={{ fontSize: 16, color: "rgba(240,237,232,0.45)", maxWidth: 440, margin: "0 auto" }}>
              Built for facilities managers, property owners, and finance teams across Australia.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
            {features.map((f) => (
              <div key={f.title} className="feature-card">
                <div style={{
                  width: 42, height: 42, borderRadius: 10,
                  background: "rgba(26,184,232,0.08)", border: "1px solid rgba(26,184,232,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 18, marginBottom: 18
                }}>{f.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#f0ede8", marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(240,237,232,0.45)", fontWeight: 300 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why different */}
      <section id="how-it-works" style={{
        background: "#0a1520",
        borderTop: "1px solid rgba(240,237,232,0.06)",
        borderBottom: "1px solid rgba(240,237,232,0.06)",
        padding: "100px 24px"
      }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1ab8e8", marginBottom: 16 }}>Why it&apos;s different</p>
            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800,
              color: "#f0ede8", letterSpacing: "-0.025em", marginBottom: 14
            }}>Static systems can&apos;t learn.</h2>
            <p style={{ fontSize: 16, color: "rgba(240,237,232,0.45)", maxWidth: 500, margin: "0 auto" }}>
              Traditional platforms apply the same rules on day 365 as day 1. Assetcycle observes what actually happens in your portfolio and adjusts.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 40 }}>
            {[
              { label: "Lifecycle forecasting", body: "Starts with industry averages. Shifts toward your actual replacement history. After 12 months it knows your portfolio, not the textbook." },
              { label: "Cost predictions", body: "Early estimates are wide. As actual spend accumulates, the confidence interval narrows — surfacing the value of every data point." },
              { label: "Risk scoring", body: "Rules-based on day one. Adapts based on which patterns actually predicted failures in your asset classes over time." },
            ].map((item, i) => (
              <div key={item.label}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#1ab8e8", textTransform: "uppercase", marginBottom: 14 }}>0{i + 1}</p>
                <div style={{ width: "100%", height: 1, background: "rgba(26,184,232,0.2)", marginBottom: 22 }}/>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#f0ede8", marginBottom: 10 }}>{item.label}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "rgba(240,237,232,0.45)", fontWeight: 300 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "0 24px 100px", paddingTop: "80px" }}>
        <div style={{
          maxWidth: 1140, margin: "0 auto",
          background: "#0d1a27",
          border: "1px solid rgba(26,184,232,0.15)",
          borderRadius: 20, padding: "80px 48px",
          textAlign: "center", position: "relative", overflow: "hidden"
        }}>
          <div style={{
            position: "absolute", top: -60, right: -60, width: 260, height: 260,
            background: "radial-gradient(circle, rgba(26,184,232,0.08) 0%, transparent 70%)",
            pointerEvents: "none"
          }}/>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1ab8e8", marginBottom: 18 }}>What happens next</p>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 800,
            color: "#f0ede8", letterSpacing: "-0.025em", marginBottom: 16
          }}>Start today. Get smarter over time.</h2>
          <p style={{ fontSize: 16, color: "rgba(240,237,232,0.45)", maxWidth: 420, margin: "0 auto 44px", lineHeight: 1.7, fontWeight: 300 }}>
            No credit card required. Import your first asset register in under 10 minutes.
          </p>
          <a href="https://assetcycle.com.au" className="btn-primary" style={{ fontSize: 16, padding: "15px 44px" }}>
            Create free account →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(240,237,232,0.06)", padding: "36px 28px" }}>
        <div style={{
          maxWidth: 1140, margin: "0 auto",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 16
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <LogoMark size={24} light />
            <span style={{ fontWeight: 600, fontSize: 14, letterSpacing: "0.02em", color: "#f0ede8" }}>Assetcycle</span>
          </div>
          <p style={{ fontSize: 12, color: "rgba(240,237,232,0.25)" }}>© 2026 Assetcycle. Built in Australia.</p>
          <a href="https://assetcycle.com.au" style={{ fontSize: 13, color: "#1ab8e8", textDecoration: "none", fontWeight: 500 }}>
            Go to app →
          </a>
        </div>
      </footer>
    </div>
  );
}
