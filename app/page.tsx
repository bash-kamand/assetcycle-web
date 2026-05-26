export default function Home() {
  const features = [
    {
      icon: "🏗️",
      title: "Fixed Asset Register",
      desc: "Centralise every asset — plant, machinery, building services, infrastructure — in one searchable register with full depreciation history.",
    },
    {
      icon: "📉",
      title: "Depreciation Engine",
      desc: "Straight-line and declining balance calculations run automatically. Export auditable schedules to Excel for your accountant.",
    },
    {
      icon: "🔧",
      title: "Work Orders",
      desc: "Log maintenance jobs against specific assets. Track labour hours, actual vs estimated cost, and build a full service history.",
    },
    {
      icon: "🧠",
      title: "Intelligence Engine",
      desc: "The algorithm learns from every disposal. As you replace assets, it refines expected lifespan and replacement cost estimates by category.",
    },
    {
      icon: "📊",
      title: "Lifecycle Forecasting",
      desc: "Model deterioration curves, set condition breakpoints, and project 10-year capital expenditure for budget planning.",
    },
    {
      icon: "📱",
      title: "iPad Field View",
      desc: "Scan QR codes on assets, record condition and status in the field, and raise work orders — without leaving the site.",
    },
  ];

  const steps = [
    { n: "1", title: "Register your assets", body: "Import from Excel or add individually. Set purchase date, value, and depreciation method." },
    { n: "2", title: "Track maintenance", body: "Raise work orders, log costs, and build a complete service history against each asset." },
    { n: "3", title: "Plan with confidence", body: "Lifecycle forecasts and the intelligence engine tell you when to repair vs replace — before it becomes urgent." },
  ];

  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", color: "#202124" }}>

      {/* Nav */}
      <header style={{ borderBottom: "1px solid #DADCE0", background: "#fff", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "#1A73E8", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "white", fontSize: 14 }}>⚙</span>
            </div>
            <span style={{ fontWeight: 700, fontSize: 16, color: "#202124" }}>AssetCycle</span>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <a href="https://app.assetcycle.com.au/login" style={{ padding: "8px 18px", fontSize: 14, fontWeight: 500, color: "#1A73E8", textDecoration: "none" }}>Sign in</a>
            <a href="https://app.assetcycle.com.au/register" style={{ padding: "8px 18px", fontSize: 14, fontWeight: 600, color: "#fff", background: "#1A73E8", borderRadius: 8, textDecoration: "none" }}>Get started</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: "#F8FBFF", borderBottom: "1px solid #DADCE0", padding: "80px 24px 96px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: "#E8F0FE", color: "#1A73E8", fontSize: 13, fontWeight: 600, padding: "5px 14px", borderRadius: 100, marginBottom: 24 }}>
            Fixed Asset Lifecycle Management
          </div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 24, color: "#202124" }}>
            Know every asset.<br />
            <span style={{ color: "#1A73E8" }}>Plan every cost.</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "#5F6368", maxWidth: 560, margin: "0 auto 40px" }}>
            AssetCycle tracks fixed assets through their full lifecycle — from acquisition to disposal — so you know exactly what you own, what it&apos;s worth, and when to replace it.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://app.assetcycle.com.au/register" style={{ padding: "14px 32px", fontSize: 16, fontWeight: 700, color: "#fff", background: "#1A73E8", borderRadius: 12, textDecoration: "none" }}>
              Start free →
            </a>
            <a href="#features" style={{ padding: "14px 32px", fontSize: 16, fontWeight: 600, color: "#1A73E8", background: "#E8F0FE", borderRadius: 12, textDecoration: "none" }}>
              See features
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: "#1A73E8", padding: "28px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 24, textAlign: "center" }}>
          {[
            { v: "100%", l: "Australian-hosted" },
            { v: "ATO", l: "compliant depreciation" },
            { v: "Real-time", l: "risk scoring" },
            { v: "QR", l: "field scan ready" },
          ].map(({ v, l }) => (
            <div key={l}>
              <p style={{ fontSize: 26, fontWeight: 800, color: "#fff", margin: 0 }}>{v}</p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", margin: "4px 0 0" }}>{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 12 }}>Everything in one platform</h2>
            <p style={{ fontSize: 17, color: "#5F6368" }}>Built for facilities managers, property owners, and finance teams.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {features.map((f) => (
              <div key={f.title} style={{ background: "#F8FBFF", border: "1px solid #DADCE0", borderRadius: 16, padding: 28 }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, color: "#202124" }}>{f.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "#5F6368", margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: "#F8FBFF", borderTop: "1px solid #DADCE0", borderBottom: "1px solid #DADCE0", padding: "96px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 12 }}>Up and running in minutes</h2>
            <p style={{ fontSize: 17, color: "#5F6368" }}>No implementation project. No consultant. Just sign up and go.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 32 }}>
            {steps.map((s) => (
              <div key={s.n} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#1A73E8", color: "white", fontWeight: 800, fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.n}</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6, color: "#202124" }}>{s.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: "#5F6368", margin: 0 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, textAlign: "center", marginBottom: 48 }}>Built for fixed assets that stay put</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {[
              { icon: "🏢", label: "Commercial Buildings" },
              { icon: "🏭", label: "Industrial Plant" },
              { icon: "⚡", label: "Electrical & Power" },
              { icon: "❄️", label: "HVAC & Mechanical" },
              { icon: "🚰", label: "Infrastructure & Utilities" },
              { icon: "🔒", label: "Safety Systems" },
            ].map(({ icon, label }) => (
              <div key={label} style={{ textAlign: "center", padding: "28px 16px", border: "1px solid #DADCE0", borderRadius: 12 }}>
                <div style={{ fontSize: 36, marginBottom: 10 }}>{icon}</div>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#3C4043", margin: 0 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#1A73E8", padding: "80px 24px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: "#fff", marginBottom: 16 }}>Start tracking your assets today</h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", marginBottom: 40, lineHeight: 1.6 }}>
            No credit card required. Sign up and import your first asset register in under 10 minutes.
          </p>
          <a href="https://app.assetcycle.com.au/register" style={{ display: "inline-block", padding: "16px 40px", fontSize: 17, fontWeight: 700, color: "#1A73E8", background: "#fff", borderRadius: 12, textDecoration: "none" }}>
            Create free account →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#202124", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: 6, background: "#1A73E8", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "white", fontSize: 12 }}>⚙</span>
            </div>
            <span style={{ fontWeight: 700, fontSize: 14, color: "#fff" }}>AssetCycle</span>
          </div>
          <p style={{ fontSize: 13, color: "#80868B", margin: 0 }}>© 2026 AssetCycle. Built in Australia.</p>
          <a href="https://app.assetcycle.com.au" style={{ fontSize: 13, color: "#8AB4F8", textDecoration: "none" }}>Go to app →</a>
        </div>
      </footer>

    </div>
  );
}
