import MaintenancePlanner from "./components/MaintenancePlanner";

const Logo = ({ size = 30, stroke = "#0d0d0d" }: { size?: number; stroke?: string }) => (
  <svg width={size} height={size} viewBox="-6 -6 112 112" fill="none">
    <path d="M 92 50 A 42 42 0 1 0 72.7 79.7" stroke={stroke} strokeWidth="11" strokeLinecap="round" fill="none"/>
    <path d="M 72.7 79.7 A 42 42 0 0 0 92 50" stroke="#0ea5d4" strokeWidth="11" strokeLinecap="round" fill="none"/>
    <path d="M 35 70 L 50 30 L 65 70 M 40.5 58 L 59.5 58" stroke={stroke} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const diffRows = [
  ["Static formula-based forecasting",  "Self-learning AI that improves over time"],
  ["Same output month 1 as month 12",    "Gets smarter with every data point"],
  ["Manual updates required",            "Improves automatically in the background"],
  ["Data lives in a PDF report",         "Data lives in a live system"],
  ["Point-in-time assessment",           "Ongoing intelligence"],
];

export default function Home() {
  return (
    <div style={{ background: "#ffffff", color: "#0d0d0d", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        :root {
          --bg:   #ffffff;
          --bg2:  #f6f4f1;
          --cyan: #0ea5d4;
          --text: #0d0d0d;
          --muted: rgba(13,13,13,0.48);
          --rule: rgba(13,13,13,0.09);
        }
        .mono { font-family: 'DM Mono', monospace; }

        .nav-link { font-size:14px; font-weight:400; color:var(--muted); text-decoration:none; transition:color 0.15s; }
        .nav-link:hover { color:var(--text); }

        .cta { display:inline-flex; align-items:center; gap:6px; padding:12px 26px; background:var(--text); color:#fff; font-family:'DM Sans',sans-serif; font-size:15px; font-weight:600; border-radius:6px; text-decoration:none; letter-spacing:-0.01em; transition:background 0.15s,transform 0.1s; cursor:pointer; border:none; }
        .cta:hover { background:#1a1a1a; transform:translateY(-1px); }
        .cta-lg { padding:15px 40px; font-size:17px; }
        .cta-outline { background:transparent; color:var(--text); border:1.5px solid rgba(13,13,13,0.2); }
        .cta-outline:hover { background:var(--bg2); transform:none; }

        @keyframes up { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
        .u1 { animation:up 0.7s ease forwards 0.06s; opacity:0; }
        .u2 { animation:up 0.7s ease forwards 0.18s; opacity:0; }
        .u3 { animation:up 0.7s ease forwards 0.30s; opacity:0; }
        .u4 { animation:up 0.7s ease forwards 0.44s; opacity:0; }

        .three-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; }
        .two-grid   { display:grid; grid-template-columns:repeat(2,1fr); gap:32px; }

        .diff-table { width:100%; border-collapse:collapse; }
        .diff-table th { text-align:left; padding:14px 20px; font-size:12px; font-weight:600; letter-spacing:0.06em; text-transform:uppercase; color:var(--muted); background:var(--bg2); }
        .diff-table th:last-child { color:var(--cyan); }
        .diff-table td { padding:16px 20px; font-size:14px; line-height:1.6; border-top:1px solid var(--rule); vertical-align:top; }
        .diff-table tr:nth-child(odd) td { background:var(--bg2); }
        .diff-table td:first-child { color:var(--muted); }
        .diff-table td:last-child { color:var(--text); font-weight:500; }

        @media (max-width:860px) {
          .three-grid { grid-template-columns:1fr !important; gap:0; }
          .two-grid   { grid-template-columns:1fr !important; }
          .diff-table th, .diff-table td { padding:12px 14px; }
        }
        @media (max-width:600px) {
          header > div { padding:0 20px !important; }
          section, footer > div { padding-left:20px !important; padding-right:20px !important; }
        }
      `}</style>

      {/* Nav */}
      <header style={{ position:"sticky", top:0, zIndex:50, borderBottom:"1px solid var(--rule)", background:"rgba(255,255,255,0.94)", backdropFilter:"blur(16px)", WebkitBackdropFilter:"blur(16px)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 44px", height:62, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <Logo size={26}/>
            <span className="mono" style={{ fontSize:12, fontWeight:500, letterSpacing:"0.08em", color:"var(--text)" }}>ASSETCYCLE</span>
          </div>
          <nav style={{ display:"flex", gap:28 }}>
            <a href="#how-it-works" className="nav-link">How it works</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="https://app.assetcycle.com.au" className="nav-link">Sign in</a>
          </nav>
          <a href="#founding" className="cta" style={{ padding:"10px 22px", fontSize:14 }}>Apply for founding spot</a>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding:"110px 44px 96px", borderBottom:"1px solid var(--rule)" }}>
        <div style={{ maxWidth:760, margin:"0 auto", textAlign:"center" }}>
          <p className="u1 mono" style={{ fontSize:11, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--cyan)", marginBottom:28 }}>
            World&apos;s first self-learning asset management platform
          </p>
          <h1 className="u2" style={{ fontFamily:"'Instrument Serif', Georgia, serif", fontSize:"clamp(44px, 6vw, 78px)", fontWeight:400, lineHeight:1.06, letterSpacing:"-0.02em", marginBottom:28 }}>
            The platform that learns while you work.
          </h1>
          <p className="u3" style={{ fontSize:18, lineHeight:1.75, color:"var(--muted)", maxWidth:540, margin:"0 auto 48px", fontWeight:300 }}>
            Every work order, disposal, and maintenance event trains the model. Your forecasts get more accurate automatically — no analyst, no manual recalibration.
          </p>
          <div className="u4" style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:14, flexWrap:"wrap" }}>
            <a href="#founding" className="cta cta-lg">Apply for a founding spot →</a>
            <a href="#how-it-works" className="cta cta-outline cta-lg">See how it works</a>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section style={{ padding:"80px 44px", borderBottom:"1px solid var(--rule)", background:"var(--bg2)" }}>
        <div style={{ maxWidth:680, margin:"0 auto" }}>
          <p className="mono" style={{ fontSize:10, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--cyan)", marginBottom:40 }}>The problem</p>
          {[
            "Most asset management software was built before AI was a real option.",
            "It runs the same formula on day 365 as it did on day 1.",
            "Your forecasts get less accurate over time, not more.",
          ].map((s, i) => (
            <p key={i} style={{
              fontFamily:"'Instrument Serif', serif",
              fontSize:"clamp(20px, 2.4vw, 28px)",
              fontWeight:400,
              lineHeight:1.45,
              letterSpacing:"-0.01em",
              color: i === 0 ? "var(--text)" : i === 1 ? "rgba(13,13,13,0.65)" : "rgba(13,13,13,0.4)",
              paddingBottom:28,
              marginBottom: i < 2 ? 28 : 0,
              borderBottom: i < 2 ? "1px solid var(--rule)" : "none",
            }}>{s}</p>
          ))}
        </div>
      </section>

      {/* Solution */}
      <section id="how-it-works" style={{ padding:"88px 44px", borderBottom:"1px solid var(--rule)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <p className="mono" style={{ fontSize:10, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--cyan)", marginBottom:14 }}>How AssetCycle works</p>
          <h2 style={{ fontFamily:"'Instrument Serif', serif", fontSize:"clamp(26px, 3vw, 40px)", fontWeight:400, letterSpacing:"-0.01em", marginBottom:56 }}>Three steps. One system that improves itself.</h2>

          <div className="three-grid" style={{ border:"1px solid var(--rule)", borderRadius:10, overflow:"hidden", marginBottom:40 }}>
            {[
              {
                n: "01",
                title: "Condition Assessment",
                desc: "Qualified surveyors assess your portfolio and capture data on site — defects, condition scores, remaining useful life. Nothing gets lost in a PDF.",
              },
              {
                n: "02",
                title: "Live Asset Register",
                desc: "Data goes into AssetCycle immediately. Your register is live from day one — searchable, auditable, and ready for depreciation and maintenance planning.",
              },
              {
                n: "03",
                title: "Self-Learning Platform",
                desc: "The system learns from every inspection, every maintenance event, every real outcome. Forecasts improve automatically the longer you run it.",
              },
            ].map((step, i) => (
              <div key={step.n} style={{
                padding:"36px 32px",
                background: i % 2 === 1 ? "var(--bg2)" : "var(--bg)",
                borderLeft: i > 0 ? "1px solid var(--rule)" : "none",
              }}>
                <span className="mono" style={{ fontSize:10, color:"var(--muted)", letterSpacing:"0.1em", display:"block", marginBottom:20 }}>{step.n}</span>
                <h3 style={{ fontSize:17, fontWeight:600, letterSpacing:"-0.01em", marginBottom:14, color:"var(--text)" }}>{step.title}</h3>
                <p style={{ fontSize:14, color:"var(--muted)", lineHeight:1.75, fontWeight:300 }}>{step.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize:15, color:"var(--muted)", lineHeight:1.7, fontWeight:300, maxWidth:680, borderLeft:"2px solid var(--cyan)", paddingLeft:20 }}>
            Day 1 it uses industry benchmarks. Year 2 it runs on your portfolio&apos;s real history. No static system can do that.
          </p>
        </div>
      </section>


      {/* Maintenance Planning */}
      <section style={{ padding:"88px 44px", borderBottom:"1px solid var(--rule)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <p className="mono" style={{ fontSize:10, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--cyan)", marginBottom:14 }}>Maintenance planning</p>
          <h2 style={{ fontFamily:"'Instrument Serif', serif", fontSize:"clamp(26px, 3vw, 40px)", fontWeight:400, letterSpacing:"-0.01em", marginBottom:16 }}>
            See your next 10 years. Before they happen.
          </h2>
          <p style={{ fontSize:16, color:"var(--muted)", fontWeight:300, lineHeight:1.75, maxWidth:580, marginBottom:56 }}>
            Toggle between reactive and planned maintenance to see the 10-year cost difference. Then see how the forecast accuracy compounds as AssetCycle learns your portfolio.
          </p>
          <MaintenancePlanner/>
        </div>
      </section>

      {/* Who It's For */}
      <section style={{ padding:"88px 44px", borderBottom:"1px solid var(--rule)", background:"var(--bg2)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <p className="mono" style={{ fontSize:10, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--cyan)", marginBottom:14 }}>Who it&apos;s for</p>
          <h2 style={{ fontFamily:"'Instrument Serif', serif", fontSize:"clamp(26px, 3vw, 40px)", fontWeight:400, letterSpacing:"-0.01em", marginBottom:56 }}>Built for the sectors where asset management is a compliance obligation.</h2>

          <div className="three-grid" style={{ gap:24 }}>
            {[
              {
                vertical: "Community Housing Providers",
                hook: "NRSCH Compliance",
                desc: "NRSCH compliance requires condition assessments, asset registers and lifecycle forecasting. AssetCycle delivers all three in a single system — audit-ready, always current.",
              },
              {
                vertical: "Aged Care Operators",
                hook: "Aged Care Act",
                desc: "Aged Care Act obligations demand evidence of systematic asset management. AssetCycle gives you defensible records, lifecycle plans, and maintenance histories — built for regulators, not just operators.",
              },
              {
                vertical: "Facilities Managers",
                hook: "Portfolio efficiency",
                desc: "Running lean teams managing large portfolios. AssetCycle replaces manual spreadsheets and static reports with a system that improves itself — less admin, better decisions.",
              },
            ].map(v => (
              <div key={v.vertical} style={{ background:"var(--bg)", border:"1px solid var(--rule)", borderRadius:10, padding:"36px 32px" }}>
                <span className="mono" style={{ fontSize:9, letterSpacing:"0.12em", textTransform:"uppercase", color:"var(--cyan)", display:"block", marginBottom:16 }}>{v.hook}</span>
                <h3 style={{ fontSize:18, fontWeight:600, letterSpacing:"-0.01em", marginBottom:16, lineHeight:1.3, color:"var(--text)" }}>{v.vertical}</h3>
                <p style={{ fontSize:14, color:"var(--muted)", lineHeight:1.75, fontWeight:300 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section style={{ padding:"88px 44px", borderBottom:"1px solid var(--rule)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <p className="mono" style={{ fontSize:10, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--cyan)", marginBottom:14 }}>Why AssetCycle</p>
          <h2 style={{ fontFamily:"'Instrument Serif', serif", fontSize:"clamp(26px, 3vw, 40px)", fontWeight:400, letterSpacing:"-0.01em", marginBottom:48 }}>Not another static platform.</h2>

          <div style={{ border:"1px solid var(--rule)", borderRadius:10, overflow:"hidden" }}>
            <table className="diff-table">
              <thead>
                <tr>
                  <th>What you have now</th>
                  <th>AssetCycle</th>
                </tr>
              </thead>
              <tbody>
                {diffRows.map(([before, after]) => (
                  <tr key={before}>
                    <td>{before}</td>
                    <td>{after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding:"88px 44px", borderBottom:"1px solid var(--rule)", background:"var(--bg2)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <p className="mono" style={{ fontSize:10, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--cyan)", marginBottom:14 }}>Services</p>
          <h2 style={{ fontFamily:"'Instrument Serif', serif", fontSize:"clamp(26px, 3vw, 40px)", fontWeight:400, letterSpacing:"-0.01em", marginBottom:56 }}>Two offerings. One complete system.</h2>

          <div className="two-grid" style={{ marginBottom:32 }}>
            {[
              {
                title: "Condition Assessments & Surveys",
                desc: "Qualified surveyors, boots on the ground. We capture defect reports, condition scores, and remaining useful life data directly into AssetCycle — no PDFs sitting in inboxes.",
                tags: ["NRSCH compliant output", "Aged Care Act compliant", "Defect reporting", "Boots on ground"],
              },
              {
                title: "AssetCycle Platform",
                desc: "Self-learning asset management system with lifecycle forecasting, compliance reporting, maintenance planning, and risk scoring. Gets smarter the longer you use it.",
                tags: ["Self-learning AI", "Lifecycle forecasting", "Compliance reporting", "Maintenance planning"],
              },
            ].map(s => (
              <div key={s.title} style={{ background:"var(--bg)", border:"1px solid var(--rule)", borderRadius:10, padding:"40px 36px" }}>
                <h3 style={{ fontSize:20, fontWeight:600, letterSpacing:"-0.02em", marginBottom:18, lineHeight:1.25, color:"var(--text)" }}>{s.title}</h3>
                <p style={{ fontSize:14, color:"var(--muted)", lineHeight:1.8, fontWeight:300, marginBottom:28 }}>{s.desc}</p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                  {s.tags.map(t => (
                    <span key={t} className="mono" style={{ fontSize:10, letterSpacing:"0.08em", padding:"5px 10px", border:"1px solid var(--rule)", borderRadius:4, color:"var(--muted)" }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize:14, color:"var(--muted)", fontWeight:300, textAlign:"center" }}>
            Take both together — the survey feeds directly into the platform on day one.
          </p>
        </div>
      </section>

      {/* Social proof placeholder */}
      <section style={{ padding:"64px 44px", borderBottom:"1px solid var(--rule)" }}>
        <div style={{ maxWidth:680, margin:"0 auto", textAlign:"center" }}>
          <p className="mono" style={{ fontSize:10, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--muted)", marginBottom:20 }}>Customer outcomes</p>
          <p style={{ fontFamily:"'Instrument Serif', serif", fontSize:"clamp(20px, 2.4vw, 28px)", fontWeight:400, lineHeight:1.5, color:"rgba(13,13,13,0.55)" }}>
            Currently onboarding founding customers.<br/>Ask us about our pilot program.
          </p>
        </div>
      </section>

      {/* Founding CTA */}
      <section id="founding" style={{ padding:"100px 44px 112px", background:"var(--bg2)", borderBottom:"1px solid var(--rule)" }}>
        <div style={{ maxWidth:720, margin:"0 auto", textAlign:"center" }}>
          <p className="mono" style={{ fontSize:10, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--cyan)", marginBottom:28 }}>Founding customers</p>
          <h2 style={{ fontFamily:"'Instrument Serif', serif", fontSize:"clamp(30px, 4vw, 54px)", fontWeight:400, lineHeight:1.1, letterSpacing:"-0.02em", marginBottom:28, color:"var(--text)" }}>
            We&apos;re onboarding three founding customers before we open to the market.
          </h2>
          <p style={{ fontSize:17, lineHeight:1.7, color:"var(--muted)", fontWeight:300, marginBottom:12 }}>
            Free migration. Locked-in pricing. Direct input on the roadmap.
          </p>
          <p style={{ fontSize:17, lineHeight:1.7, color:"var(--muted)", fontWeight:300, marginBottom:48 }}>
            Spots are limited — if you&apos;re interested, let&apos;s talk this week.
          </p>
          <a href="mailto:hello@assetcycle.com.au?subject=Founding customer enquiry" className="cta cta-lg">
            Apply for a founding spot →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop:"1px solid var(--rule)", background:"var(--bg)", padding:"28px 44px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:16 }}>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <Logo size={20}/>
            <span className="mono" style={{ fontSize:11, color:"var(--muted)", letterSpacing:"0.08em" }}>ASSETCYCLE</span>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:24, flexWrap:"wrap" }}>
            <span style={{ fontSize:12, color:"rgba(13,13,13,0.3)" }}>ABN: [Your ABN]</span>
            <a href="mailto:hello@assetcycle.com.au" style={{ fontSize:12, color:"var(--muted)", textDecoration:"none" }}>hello@assetcycle.com.au</a>
            <a href="https://linkedin.com/company/assetcycle" target="_blank" rel="noopener noreferrer" style={{ fontSize:12, color:"var(--cyan)", textDecoration:"none" }}>LinkedIn →</a>
          </div>
          <span style={{ fontSize:12, color:"rgba(13,13,13,0.22)" }}>© 2026 Assetcycle. Built in Australia.</span>
        </div>
      </footer>
    </div>
  );
}
