import ROICalculator from "./components/ROICalculator";

const PHOTOS = {
  facility:   "https://images.unsplash.com/photo-1637296001570-718b84715a70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  equipment:  "https://images.unsplash.com/photo-1762343142170-13e4f4db0dc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  inspection: "https://images.unsplash.com/photo-1763478464037-419d72b545bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
};

const Logo = ({ size = 30, stroke = "#ffffff" }: { size?: number; stroke?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M 92 50 A 42 42 0 1 0 72.7 79.7" stroke={stroke} strokeWidth="11" strokeLinecap="round" fill="none"/>
    <path d="M 72.7 79.7 A 42 42 0 0 0 92 50" stroke="#1ab8e8" strokeWidth="11" strokeLinecap="round" fill="none"/>
    <path d="M 35 70 L 50 30 L 65 70 M 40.5 58 L 59.5 58" stroke={stroke} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const features = [
  { n: "01", title: "Fixed Asset Register",    desc: "Every asset — plant, machinery, building services, infrastructure — centralised in one searchable register with full depreciation history." },
  { n: "02", title: "Depreciation Engine",      desc: "Straight-line and declining balance calculated automatically. Export ATO-compliant schedules directly for your accountant." },
  { n: "03", title: "Work Orders",              desc: "Log maintenance jobs against specific assets. Track labour hours, actual vs estimated cost, and build a complete service history." },
  { n: "04", title: "Intelligence Engine",      desc: "Learns from every disposal and maintenance event — refining lifespan and cost estimates using your real portfolio data over time." },
  { n: "05", title: "Lifecycle Forecasting",    desc: "Model deterioration curves, set condition breakpoints, and project 10-year capital expenditure for confident budget planning." },
  { n: "06", title: "iPad Field View",          desc: "Scan QR codes on assets, record condition in the field, and raise work orders from the site without losing context." },
];

export default function Home() {
  return (
    <div style={{ background: "#07111a", color: "#f2eeea", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300..800&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }

        :root {
          --bg: #07111a; --surface: #0d1a27;
          --cyan: #1ab8e8; --text: #f2eeea;
          --muted: rgba(242,238,234,0.45);
          --rule: rgba(242,238,234,0.08);
        }

        .mono { font-family: 'DM Mono', monospace; }

        .nav-link { font-size: 14px; font-weight: 400; color: var(--muted); text-decoration: none; transition: color 0.15s; }
        .nav-link:hover { color: var(--text); }

        .cta { display: inline-flex; align-items: center; gap: 6px; padding: 12px 26px; background: var(--cyan); color: var(--bg); font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 700; border-radius: 6px; text-decoration: none; letter-spacing: -0.01em; transition: background 0.15s, transform 0.1s; }
        .cta:hover { background: #2ec8f8; transform: translateY(-1px); }
        .cta-lg { padding: 15px 40px; font-size: 17px; }

        /* Hero reveal */
        @keyframes up { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
        .u1 { animation: up 0.65s ease forwards 0.08s; opacity: 0; }
        .u2 { animation: up 0.65s ease forwards 0.2s;  opacity: 0; }
        .u3 { animation: up 0.65s ease forwards 0.34s; opacity: 0; }
        .u4 { animation: up 0.65s ease forwards 0.48s; opacity: 0; }
        .u5 { animation: up 0.65s ease forwards 0.62s; opacity: 0; }

        /* Stage rows */
        @keyframes stageIn { to { opacity:1; transform:translateX(0); } }
        .stage { display:grid; grid-template-columns:88px 1px 1fr; gap:0 24px; align-items:start; padding:20px 0; border-bottom:1px solid var(--rule); opacity:0; transform:translateX(-8px); }
        .stage:last-child { border-bottom:none; }
        .s1 { animation: stageIn 0.45s ease forwards 0.75s; }
        .s2 { animation: stageIn 0.45s ease forwards 1.15s; }
        .s3 { animation: stageIn 0.45s ease forwards 1.55s; }
        .stage-line { width:1px; background:var(--rule); align-self:stretch; }

        /* Features */
        .feat { display:grid; grid-template-columns:40px 220px 1fr; gap:0 32px; align-items:start; padding:26px 0; border-bottom:1px solid var(--rule); transition:background 0.15s; }
        .feat:first-child { border-top:1px solid var(--rule); }
        .feat:hover { background:rgba(26,184,232,0.025); }

        /* Photos */
        .photo-card { position:relative; overflow:hidden; border-radius:8px; }
        .photo-card img { width:100%; height:100%; object-fit:cover; display:block; filter:brightness(0.45) saturate(0.6); transition:filter 0.35s, transform 0.4s; }
        .photo-card:hover img { filter:brightness(0.58) saturate(0.8); transform:scale(1.03); }
        .photo-overlay { position:absolute; bottom:0; left:0; right:0; padding:22px; background:linear-gradient(to top, rgba(7,17,26,0.96) 0%, transparent 100%); }
      `}</style>

      {/* ── Nav ── */}
      <header style={{ position:"sticky", top:0, zIndex:50, borderBottom:"1px solid var(--rule)", background:"rgba(7,17,26,0.93)", backdropFilter:"blur(16px)", WebkitBackdropFilter:"blur(16px)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 40px", height:60, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <Logo size={26} />
            <span className="mono" style={{ fontSize:12, fontWeight:500, letterSpacing:"0.08em", color:"var(--text)" }}>ASSETCYCLE</span>
          </div>
          <nav style={{ display:"flex", gap:28 }}>
            <a href="#features" className="nav-link">Features</a>
            <a href="#roi" className="nav-link">ROI Calculator</a>
            <a href="https://assetcycle.com.au" className="nav-link">Sign in</a>
          </nav>
          <a href="https://assetcycle.com.au" className="cta">Get started</a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section style={{ padding:"100px 40px 72px", maxWidth:1200, margin:"0 auto" }}>
        <p className="u1 mono" style={{ fontSize:11, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--cyan)", marginBottom:28 }}>
          Fixed Asset Intelligence
        </p>
        <h1 className="u2" style={{ fontFamily:"'Bricolage Grotesque', sans-serif", fontSize:"clamp(48px, 5.8vw, 84px)", fontWeight:800, lineHeight:1.0, letterSpacing:"-0.03em", maxWidth:820, marginBottom:28 }}>
          The asset management system that gets smarter every day.
        </h1>
        <p className="u3" style={{ fontSize:18, lineHeight:1.72, color:"var(--muted)", maxWidth:500, marginBottom:44, fontWeight:300 }}>
          Every other platform gives you the same output in month&nbsp;12 as month&nbsp;1.<br/>Assetcycle doesn&apos;t.
        </p>
        <a href="https://assetcycle.com.au" className="cta cta-lg u4">Start free →</a>

        {/* Learning stages */}
        <div className="u5" style={{ marginTop:72, maxWidth:640 }}>
          <p className="mono" style={{ fontSize:10, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--muted)", marginBottom:4 }}>How it learns</p>
          {[
            { label:"Day 1",   bold:"Industry benchmarks.",      rest:"Solid, standard, useful." },
            { label:"Month 6", bold:"Your data, blended in.",    rest:"More accurate than any competitor." },
            { label:"Year 2",  bold:"Your portfolio's history.", rest:"No static system can touch it." },
          ].map((s, i) => (
            <div key={s.label} className={`stage s${i+1}`}>
              <span className="mono" style={{ fontSize:11, fontWeight:500, color:"var(--cyan)", letterSpacing:"0.04em", paddingTop:2 }}>{s.label}</span>
              <div className="stage-line"/>
              <p style={{ fontSize:15 }}>
                <strong style={{ color:"var(--text)", fontWeight:600 }}>{s.bold}</strong>
                {" "}<span style={{ color:"var(--muted)", fontWeight:300 }}>{s.rest}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Photo strip ── */}
      <section style={{ padding:"0 40px 80px", maxWidth:1200, margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr", gap:6, height:300 }}>
          <div className="photo-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={PHOTOS.facility} alt="Industrial facility" loading="lazy"/>
            <div className="photo-overlay">
              <p className="mono" style={{ fontSize:9, color:"var(--cyan)", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:4 }}>Asset Portfolio</p>
              <p style={{ fontFamily:"Bricolage Grotesque, sans-serif", fontSize:24, fontWeight:800, letterSpacing:"-0.03em" }}>$2.4M avg.</p>
              <p style={{ fontSize:12, color:"var(--muted)", fontWeight:300 }}>assets under management per customer</p>
            </div>
          </div>
          <div className="photo-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={PHOTOS.equipment} alt="Mechanical equipment" loading="lazy"/>
            <div className="photo-overlay">
              <p className="mono" style={{ fontSize:9, color:"var(--cyan)", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:4 }}>Lifecycle data</p>
              <p style={{ fontFamily:"Bricolage Grotesque, sans-serif", fontSize:24, fontWeight:800, letterSpacing:"-0.03em" }}>11 yrs</p>
              <p style={{ fontSize:12, color:"var(--muted)", fontWeight:300 }}>avg. life learned from your data</p>
            </div>
          </div>
          <div className="photo-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={PHOTOS.inspection} alt="Field inspection" loading="lazy"/>
            <div className="photo-overlay">
              <p className="mono" style={{ fontSize:9, color:"var(--cyan)", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:4 }}>Field Ready</p>
              <p style={{ fontFamily:"Bricolage Grotesque, sans-serif", fontSize:24, fontWeight:800, letterSpacing:"-0.03em" }}>QR scan</p>
              <p style={{ fontSize:12, color:"var(--muted)", fontWeight:300 }}>site to register in seconds</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" style={{ padding:"60px 40px", maxWidth:1200, margin:"0 auto" }}>
        <p className="mono" style={{ fontSize:10, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--cyan)", marginBottom:36 }}>
          Platform — What&apos;s included
        </p>
        {features.map(f => (
          <div key={f.n} className="feat">
            <span className="mono" style={{ fontSize:11, color:"rgba(242,238,234,0.25)", paddingTop:2 }}>{f.n}</span>
            <h3 style={{ fontSize:14, fontWeight:600, color:"var(--text)", letterSpacing:"-0.01em", lineHeight:1.4 }}>{f.title}</h3>
            <p style={{ fontSize:14, color:"var(--muted)", lineHeight:1.65, fontWeight:300 }}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* ── Lifecycle diagram ── */}
      <section style={{ padding:"60px 40px", maxWidth:1200, margin:"0 auto" }}>
        <div style={{ background:"var(--surface)", border:"1px solid var(--rule)", borderRadius:12, padding:"40px 44px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:36, flexWrap:"wrap", gap:16 }}>
            <div>
              <p className="mono" style={{ fontSize:10, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--cyan)", marginBottom:12 }}>
                Intelligence — forecast accuracy over time
              </p>
              <h2 style={{ fontFamily:"'Bricolage Grotesque', sans-serif", fontSize:"clamp(22px, 2.8vw, 34px)", fontWeight:800, letterSpacing:"-0.03em" }}>
                Static systems can&apos;t learn.
              </h2>
            </div>
            <div style={{ display:"flex", gap:24 }}>
              {[{ c:"rgba(242,238,234,0.25)", dash:true, label:"Traditional platform" }, { c:"#1ab8e8", dash:false, label:"Assetcycle" }].map(l => (
                <div key={l.label} style={{ display:"flex", gap:8, alignItems:"center" }}>
                  <svg width="24" height="12"><line x1="0" y1="6" x2="24" y2="6" stroke={l.c} strokeWidth="2" strokeDasharray={l.dash ? "5,3" : "none"}/></svg>
                  <span style={{ fontSize:12, color:"var(--muted)", fontFamily:"DM Mono, monospace" }}>{l.label}</span>
                </div>
              ))}
            </div>
          </div>

          <svg width="100%" viewBox="0 0 760 200" style={{ overflow:"visible", display:"block" }}>
            {/* Grid */}
            {[0,25,50,75,100].map(y => (
              <g key={y}>
                <line x1="52" y1={170 - y*1.6} x2="740" y2={170 - y*1.6} stroke="rgba(242,238,234,0.05)" strokeWidth="1"/>
                <text x="44" y={174 - y*1.6} textAnchor="end" fill="rgba(242,238,234,0.25)" fontSize="9" fontFamily="DM Mono, monospace">{y}%</text>
              </g>
            ))}
            {/* Axes */}
            <line x1="52" y1="10" x2="52" y2="172" stroke="rgba(242,238,234,0.1)" strokeWidth="1"/>
            <line x1="52" y1="172" x2="742" y2="172" stroke="rgba(242,238,234,0.1)" strokeWidth="1"/>
            {/* X labels */}
            {[{x:130,l:"Day 1"},{x:400,l:"Month 6"},{x:670,l:"Year 2"}].map(({x,l}) => (
              <text key={l} x={x} y="188" textAnchor="middle" fill="rgba(242,238,234,0.3)" fontSize="9" fontFamily="DM Mono, monospace">{l}</text>
            ))}
            {/* Milestone verticals */}
            {[130,400,670].map(x => (
              <line key={x} x1={x} y1="172" x2={x} y2="10" stroke="rgba(242,238,234,0.04)" strokeWidth="1" strokeDasharray="4,4"/>
            ))}
            {/* Competitor line ~30% flat */}
            <line x1="130" y1="122" x2="670" y2="122" stroke="rgba(242,238,234,0.22)" strokeWidth="1.5" strokeDasharray="6,4"/>
            <text x="676" y="126" fill="rgba(242,238,234,0.3)" fontSize="9" fontFamily="DM Mono, monospace">~30%</text>
            {/* Assetcycle fill area */}
            <path d="M 130,122 C 220,122 300,112 400,90 C 490,70 570,26 670,10 L 670,122 Z" fill="rgba(26,184,232,0.07)"/>
            {/* Assetcycle curve */}
            <path d="M 130,122 C 220,122 300,112 400,90 C 490,70 570,26 670,10" stroke="#1ab8e8" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            {/* Dots */}
            {[{x:130,y:122,l:"Benchmarks"},{x:400,y:90,l:"Your data"},{x:670,y:10,l:"Your history"}].map(({x,y,l}) => (
              <g key={l}>
                <circle cx={x} cy={y} r="4" fill="#1ab8e8"/>
                <text x={x+(x<400?8:-8)} y={y-8} textAnchor={x<400?"start":"end"} fill="#1ab8e8" fontSize="9" fontFamily="DM Mono, monospace">{l}</text>
              </g>
            ))}
          </svg>
        </div>
      </section>

      {/* ── ROI Calculator ── */}
      <section id="roi" style={{ padding:"60px 40px", maxWidth:1200, margin:"0 auto" }}>
        <p className="mono" style={{ fontSize:10, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--cyan)", marginBottom:16 }}>
          ROI Calculator
        </p>
        <h2 style={{ fontFamily:"'Bricolage Grotesque', sans-serif", fontSize:"clamp(28px, 3.2vw, 42px)", fontWeight:800, letterSpacing:"-0.035em", marginBottom:40 }}>
          What&apos;s the cost of not knowing?
        </h2>
        <ROICalculator />
      </section>

      {/* ── CTA ── */}
      <section style={{ padding:"60px 40px 100px", maxWidth:1200, margin:"0 auto" }}>
        <div style={{ borderTop:"1px solid var(--rule)", paddingTop:80, display:"flex", justifyContent:"space-between", alignItems:"flex-end", flexWrap:"wrap", gap:40 }}>
          <div>
            <h2 style={{ fontFamily:"'Bricolage Grotesque', sans-serif", fontSize:"clamp(28px, 3.5vw, 48px)", fontWeight:800, letterSpacing:"-0.035em", maxWidth:520, lineHeight:1.05, marginBottom:14 }}>
              Start today.<br/>Get smarter over time.
            </h2>
            <p style={{ fontSize:15, color:"var(--muted)", fontWeight:300 }}>No credit card. Import your first register in under 10 minutes.</p>
          </div>
          <a href="https://assetcycle.com.au" className="cta cta-lg">Create free account →</a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop:"1px solid var(--rule)", padding:"28px 40px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:16 }}>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <Logo size={20}/>
            <span className="mono" style={{ fontSize:11, color:"var(--muted)", letterSpacing:"0.08em" }}>ASSETCYCLE</span>
          </div>
          <span style={{ fontSize:12, color:"rgba(242,238,234,0.2)" }}>© 2026 Assetcycle. Built in Australia.</span>
          <a href="https://assetcycle.com.au" style={{ fontSize:12, color:"var(--cyan)", textDecoration:"none" }}>Go to app →</a>
        </div>
      </footer>
    </div>
  );
}
