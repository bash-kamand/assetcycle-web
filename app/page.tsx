export default function Home() {
  const features = [
    { icon: "🏗️", title: "Fixed Asset Register", desc: "Centralise plant, machinery, building services, and infrastructure in one searchable register with full depreciation history." },
    { icon: "📉", title: "Depreciation Engine", desc: "Straight-line and declining balance run automatically. Export ATO-compliant schedules directly for your accountant." },
    { icon: "🔧", title: "Work Orders", desc: "Log maintenance jobs against specific assets. Track labour hours, actual vs estimated cost, and build a full service history." },
    { icon: "🧠", title: "Intelligence Engine", desc: "Learns from every disposal. As you replace assets, it refines expected lifespan and replacement cost estimates by category." },
    { icon: "📊", title: "Lifecycle Forecasting", desc: "Model deterioration curves, set condition breakpoints, and project 10-year capital expenditure for budget planning." },
    { icon: "📱", title: "iPad Field View", desc: "Scan QR codes on assets, record condition and status in the field, and raise work orders without leaving the site." },
  ];

  const steps = [
    { n: "01", title: "Register your assets", body: "Import from Excel or add individually. Set purchase date, value, and depreciation method." },
    { n: "02", title: "Track maintenance", body: "Raise work orders, log costs, and build a complete service history against each asset." },
    { n: "03", title: "Plan with confidence", body: "Lifecycle forecasts and the intelligence engine tell you when to repair vs replace — before it becomes urgent." },
  ];

  return (
    <div style={{ fontFamily: "'Outfit', system-ui, sans-serif", background: "#07111E", color: "#EDE9DF", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Outfit:wght@300;400;500;600;700&display=swap');

        .btn-gold {
          display: inline-flex; align-items: center;
          padding: 14px 32px;
          background: #C9913A; color: #07111E;
          font-family: 'Outfit', sans-serif; font-size: 15px; font-weight: 700;
          border-radius: 8px; text-decoration: none; letter-spacing: 0.01em;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-gold:hover { background: #D9A14A; transform: translateY(-1px); }

        .btn-ghost {
          display: inline-flex; align-items: center;
          padding: 14px 32px;
          background: transparent; color: #EDE9DF;
          font-family: 'Outfit', sans-serif; font-size: 15px; font-weight: 500;
          border-radius: 8px; text-decoration: none;
          border: 1px solid rgba(237,233,223,0.18);
          transition: border-color 0.2s, background 0.2s;
        }
        .btn-ghost:hover { border-color: rgba(237,233,223,0.4); background: rgba(237,233,223,0.04); }

        .nav-link {
          font-size: 14px; font-weight: 500;
          color: rgba(237,233,223,0.55); text-decoration: none;
          transition: color 0.15s;
        }
        .nav-link:hover { color: #EDE9DF; }

        .feature-card {
          background: #0D1A2B;
          border: 1px solid rgba(237,233,223,0.07);
          border-radius: 14px; padding: 32px;
          transition: border-color 0.2s, transform 0.2s;
        }
        .feature-card:hover { border-color: rgba(201,145,58,0.3); transform: translateY(-2px); }

        .usecase-pill {
          display: flex; align-items: center; gap: 12px;
          padding: 14px 24px;
          background: #0D1A2B;
          border: 1px solid rgba(237,233,223,0.07);
          border-radius: 100px;
          font-size: 14px; font-weight: 500;
          color: rgba(237,233,223,0.75);
          transition: border-color 0.2s;
        }
        .usecase-pill:hover { border-color: rgba(201,145,58,0.3); }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.65s ease forwards; }
        .d1 { animation-delay: 0.05s; opacity: 0; }
        .d2 { animation-delay: 0.2s;  opacity: 0; }
        .d3 { animation-delay: 0.35s; opacity: 0; }
        .d4 { animation-delay: 0.5s;  opacity: 0; }
      `}</style>

      {/* Nav */}
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(7,17,30,0.88)",
        backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(237,233,223,0.06)"
      }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 28px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
              <rect width="13" height="13" rx="3" fill="#C9913A"/>
              <rect x="17" width="13" height="13" rx="3" fill="#C9913A" opacity="0.55"/>
              <rect y="17" width="13" height="13" rx="3" fill="#C9913A" opacity="0.55"/>
              <rect x="17" y="17" width="13" height="13" rx="3" fill="#C9913A" opacity="0.22"/>
            </svg>
            <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-0.02em", color: "#EDE9DF" }}>AssetCycle</span>
          </div>
          <nav style={{ display: "flex", alignItems: "center", gap: 28 }}>
            <a href="#features" className="nav-link">Features</a>
            <a href="#how-it-works" className="nav-link">How it works</a>
            <a href="https://assetcycle.com.au" className="nav-link">Sign in</a>
          </nav>
          <a href="https://assetcycle.com.au" className="btn-gold" style={{ padding: "9px 20px", fontSize: 14 }}>
            Get started →
          </a>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: "120px 24px 140px", position: "relative", overflow: "hidden" }}>
        {/* Grid texture */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(201,145,58,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,145,58,0.04) 1px, transparent 1px)",
          backgroundSize: "52px 52px"
        }}/>
        {/* Radial glow */}
        <div style={{
          position: "absolute", top: "5%", left: "50%", transform: "translateX(-50%)",
          width: 700, height: 420,
          background: "radial-gradient(ellipse, rgba(201,145,58,0.07) 0%, transparent 68%)",
          pointerEvents: "none"
        }}/>

        <div style={{ maxWidth: 840, margin: "0 auto", textAlign: "center", position: "relative" }}>
          {/* Badge */}
          <div className="fade-up d1" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(201,145,58,0.1)", border: "1px solid rgba(201,145,58,0.22)",
            color: "#C9913A", fontSize: 11, fontWeight: 700, letterSpacing: "0.09em",
            textTransform: "uppercase", padding: "6px 16px", borderRadius: 100, marginBottom: 36
          }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#C9913A", display: "inline-block" }}/>
            Fixed Asset Lifecycle Management
          </div>

          {/* Headline */}
          <h1 className="fade-up d2" style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(44px, 6vw, 74px)",
            fontWeight: 800, lineHeight: 1.06,
            letterSpacing: "-0.025em", color: "#EDE9DF", marginBottom: 28
          }}>
            Know every asset.<br/>
            <em style={{ color: "#C9913A", fontStyle: "italic" }}>Plan every cost.</em>
          </h1>

          {/* Sub */}
          <p className="fade-up d3" style={{
            fontSize: 18, lineHeight: 1.75, fontWeight: 300,
            color: "rgba(237,233,223,0.55)",
            maxWidth: 560, margin: "0 auto 48px"
          }}>
            AssetCycle tracks fixed assets through their full lifecycle — acquisition to disposal — so you know exactly what you own, what it&apos;s worth, and when to replace it.
          </p>

          {/* CTAs */}
          <div className="fade-up d4" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://assetcycle.com.au" className="btn-gold">Start free →</a>
            <a href="#features" className="btn-ghost">See features</a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{
        background: "#0B172A",
        borderTop: "1px solid rgba(237,233,223,0.06)",
        borderBottom: "1px solid rgba(237,233,223,0.06)",
        padding: "36px 24px"
      }}>
        <div style={{
          maxWidth: 1160, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 32, textAlign: "center"
        }}>
          {[
            { v: "Australian", l: "hosted infrastructure" },
            { v: "ATO", l: "compliant depreciation" },
            { v: "Real-time", l: "risk scoring" },
            { v: "QR scan", l: "field-ready" },
          ].map(({ v, l }) => (
            <div key={l}>
              <p style={{ fontSize: 20, fontWeight: 700, color: "#C9913A", marginBottom: 4, letterSpacing: "-0.01em" }}>{v}</p>
              <p style={{ fontSize: 12, color: "rgba(237,233,223,0.38)", fontWeight: 400, letterSpacing: "0.02em" }}>{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ padding: "112px 24px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C9913A", marginBottom: 18 }}>Features</p>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 800,
              color: "#EDE9DF", letterSpacing: "-0.02em", marginBottom: 16
            }}>Everything in one platform</h2>
            <p style={{ fontSize: 16, color: "rgba(237,233,223,0.45)", maxWidth: 460, margin: "0 auto" }}>
              Built for facilities managers, property owners, and finance teams across Australia.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 18 }}>
            {features.map((f) => (
              <div key={f.title} className="feature-card">
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: "rgba(201,145,58,0.09)", border: "1px solid rgba(201,145,58,0.18)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 20, marginBottom: 22
                }}>{f.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#EDE9DF", marginBottom: 10 }}>{f.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(237,233,223,0.48)", fontWeight: 300 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" style={{
        background: "#0B172A",
        borderTop: "1px solid rgba(237,233,223,0.06)",
        borderBottom: "1px solid rgba(237,233,223,0.06)",
        padding: "112px 24px"
      }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C9913A", marginBottom: 18 }}>Process</p>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 800,
              color: "#EDE9DF", letterSpacing: "-0.02em", marginBottom: 16
            }}>Up and running in minutes</h2>
            <p style={{ fontSize: 16, color: "rgba(237,233,223,0.45)" }}>No implementation project. No consultant. Just sign up and go.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48 }}>
            {steps.map((s) => (
              <div key={s.n}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", color: "#C9913A", textTransform: "uppercase", marginBottom: 14 }}>Step {s.n}</p>
                <div style={{ width: "100%", height: 1, background: "rgba(201,145,58,0.22)", marginBottom: 24 }}/>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#EDE9DF", marginBottom: 12 }}>{s.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "rgba(237,233,223,0.48)", fontWeight: 300 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section style={{ padding: "112px 24px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C9913A", marginBottom: 18 }}>Built for</p>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800,
              color: "#EDE9DF", letterSpacing: "-0.02em"
            }}>Fixed assets that stay put</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {[
              { icon: "🏢", label: "Commercial Buildings" },
              { icon: "🏭", label: "Industrial Plant" },
              { icon: "⚡", label: "Electrical & Power" },
              { icon: "❄️", label: "HVAC & Mechanical" },
              { icon: "🚰", label: "Infrastructure & Utilities" },
              { icon: "🔒", label: "Safety Systems" },
            ].map(({ icon, label }) => (
              <div key={label} className="usecase-pill">
                <span>{icon}</span><span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "0 24px 120px" }}>
        <div style={{
          maxWidth: 1160, margin: "0 auto",
          background: "linear-gradient(140deg, #0D1A2B 0%, #101F32 100%)",
          border: "1px solid rgba(201,145,58,0.18)",
          borderRadius: 24, padding: "88px 48px",
          textAlign: "center", position: "relative", overflow: "hidden"
        }}>
          <div style={{
            position: "absolute", top: -80, right: -80,
            width: 280, height: 280,
            background: "radial-gradient(circle, rgba(201,145,58,0.1) 0%, transparent 70%)",
            pointerEvents: "none"
          }}/>
          <div style={{
            position: "absolute", bottom: -60, left: -60,
            width: 220, height: 220,
            background: "radial-gradient(circle, rgba(201,145,58,0.06) 0%, transparent 70%)",
            pointerEvents: "none"
          }}/>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C9913A", marginBottom: 20 }}>Get started</p>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 800,
            color: "#EDE9DF", letterSpacing: "-0.025em", marginBottom: 20
          }}>Start tracking your assets today</h2>
          <p style={{ fontSize: 17, color: "rgba(237,233,223,0.5)", maxWidth: 460, margin: "0 auto 48px", lineHeight: 1.7, fontWeight: 300 }}>
            No credit card required. Import your first asset register in under 10 minutes.
          </p>
          <a href="https://assetcycle.com.au" className="btn-gold" style={{ fontSize: 16, padding: "16px 44px" }}>
            Create free account →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(237,233,223,0.06)", padding: "40px 28px" }}>
        <div style={{
          maxWidth: 1160, margin: "0 auto",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 16
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <svg width="24" height="24" viewBox="0 0 30 30" fill="none">
              <rect width="13" height="13" rx="3" fill="#C9913A"/>
              <rect x="17" width="13" height="13" rx="3" fill="#C9913A" opacity="0.55"/>
              <rect y="17" width="13" height="13" rx="3" fill="#C9913A" opacity="0.55"/>
              <rect x="17" y="17" width="13" height="13" rx="3" fill="#C9913A" opacity="0.22"/>
            </svg>
            <span style={{ fontWeight: 700, fontSize: 15, letterSpacing: "-0.02em", color: "#EDE9DF" }}>AssetCycle</span>
          </div>
          <p style={{ fontSize: 12, color: "rgba(237,233,223,0.28)" }}>© 2026 AssetCycle. Built in Australia.</p>
          <a href="https://assetcycle.com.au" style={{ fontSize: 13, color: "#C9913A", textDecoration: "none", fontWeight: 500 }}>
            Go to app →
          </a>
        </div>
      </footer>
    </div>
  );
}
