import ROICalculator from "./components/ROICalculator";

const PHOTOS = {
  facility:   "https://images.unsplash.com/photo-1637296001570-718b84715a70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  equipment:  "https://images.unsplash.com/photo-1762343142170-13e4f4db0dc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  inspection: "https://images.unsplash.com/photo-1763478464037-419d72b545bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
};

const Logo = ({ size = 30, stroke = "#0d0d0d" }: { size?: number; stroke?: string }) => (
  <svg width={size} height={size} viewBox="-6 -6 112 112" fill="none">
    <path d="M 92 50 A 42 42 0 1 0 72.7 79.7" stroke={stroke} strokeWidth="11" strokeLinecap="round" fill="none"/>
    <path d="M 72.7 79.7 A 42 42 0 0 0 92 50" stroke="#0ea5d4" strokeWidth="11" strokeLinecap="round" fill="none"/>
    <path d="M 35 70 L 50 30 L 65 70 M 40.5 58 L 59.5 58" stroke={stroke} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const features = [
  { n: "01", title: "Fixed Asset Register",    desc: "Every asset — plant, machinery, building services, infrastructure — centralised in one searchable register with full depreciation history." },
  { n: "02", title: "Depreciation Engine",      desc: "Straight-line and declining balance calculated automatically. Export ATO-compliant schedules directly for your accountant." },
  { n: "03", title: "Work Orders",              desc: "Log maintenance jobs against specific assets. Track labour hours, actual vs estimated cost, and build a complete service history." },
  { n: "04", title: "Intelligence Engine",      desc: "The only asset management platform that actually learns. Every event refines the model — lifespan estimates, cost benchmarks, and failure patterns all improve automatically the longer you run it." },
  { n: "05", title: "Lifecycle Forecasting",    desc: "Model deterioration curves, set condition breakpoints, and project 10-year capital expenditure for confident budget planning." },
  { n: "06", title: "iPad Field View",          desc: "Scan QR codes on assets, record condition in the field, and raise work orders from the site without losing context." },
];

export default function Home() {
  return (
    <div style={{ background: "#ffffff", color: "#0d0d0d", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; }
        a, button { outline: none; }
        a:focus-visible { outline: 2px solid #0ea5d4; outline-offset: 3px; }

        :root {
          --bg:      #ffffff;
          --bg2:     #f6f4f1;
          --surface: #f0eeeb;
          --cyan:    #0ea5d4;
          --text:    #0d0d0d;
          --muted:   rgba(13,13,13,0.48);
          --rule:    rgba(13,13,13,0.09);
        }
        .mono { font-family: 'DM Mono', monospace; }

        .nav-link { font-size: 14px; font-weight: 400; color: var(--muted); text-decoration: none; transition: color 0.15s; }
        .nav-link:hover { color: var(--text); }

        .cta { display: inline-flex; align-items: center; gap: 6px; padding: 12px 26px; background: var(--text); color: #fff; font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 600; border-radius: 6px; text-decoration: none; letter-spacing: -0.01em; transition: background 0.15s, transform 0.1s; }
        .cta:hover { background: #1a1a1a; transform: translateY(-1px); }
        .cta-lg { padding: 15px 40px; font-size: 17px; }
        .cta-outline { background: transparent; color: var(--text); border: 1.5px solid rgba(13,13,13,0.2); }
        .cta-outline:hover { background: var(--bg2); }

        @keyframes up { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
        .u1 { animation: up 0.7s ease forwards 0.06s; opacity: 0; }
        .u2 { animation: up 0.7s ease forwards 0.18s; opacity: 0; }
        .u3 { animation: up 0.7s ease forwards 0.30s; opacity: 0; }
        .u4 { animation: up 0.7s ease forwards 0.44s; opacity: 0; }

        .feat { display:grid; grid-template-columns:40px 220px 1fr; gap:0 32px; align-items:start; padding:24px 0; border-bottom:1px solid var(--rule); transition:background 0.15s; }
        .feat:first-child { border-top:1px solid var(--rule); }

        .photo-card { position:relative; overflow:hidden; border-radius:8px; }
        .photo-card img { width:100%; height:100%; object-fit:cover; display:block; filter:brightness(0.52) saturate(0.65); transition:filter 0.4s, transform 0.5s; }
        .photo-card:hover img { filter:brightness(0.65) saturate(0.8); transform:scale(1.04); }
        .photo-overlay { position:absolute; bottom:0; left:0; right:0; padding:22px; background:linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%); }

        @media (max-width:860px) {
          .feat { grid-template-columns: 40px 1fr !important; }
        }
      `}</style>

      {/* ── Nav ── */}
      <header style={{ position:"sticky", top:0, zIndex:50, borderBottom:"1px solid var(--rule)", background:"rgba(255,255,255,0.94)", backdropFilter:"blur(16px)", WebkitBackdropFilter:"blur(16px)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 44px", height:62, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <Logo size={26}/>
            <span className="mono" style={{ fontSize:12, fontWeight:500, letterSpacing:"0.08em", color:"var(--text)" }}>ASSETCYCLE</span>
          </div>
          <nav style={{ display:"flex", gap:28 }}>
            <a href="#features" className="nav-link">Features</a>
            <a href="#roi" className="nav-link">ROI Calculator</a>
            <a href="https://app.assetcycle.com.au" className="nav-link">Sign in</a>
          </nav>
          <a href="https://assetcycle.com.au" className="cta" style={{ padding:"10px 22px", fontSize:14 }}>Get started</a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section style={{ padding:"110px 44px 96px", borderBottom:"1px solid var(--rule)" }}>
        <div style={{ maxWidth:760, margin:"0 auto", textAlign:"center" }}>
          <p className="u1 mono" style={{ fontSize:11, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--cyan)", marginBottom:28 }}>
            World's first self-learning asset management platform
          </p>
          <h1 className="u2" style={{ fontFamily:"'Instrument Serif', Georgia, serif", fontSize:"clamp(44px, 6vw, 78px)", fontWeight:400, lineHeight:1.06, letterSpacing:"-0.02em", marginBottom:28 }}>
            The platform that learns while you work.
          </h1>
          <p className="u3" style={{ fontSize:18, lineHeight:1.75, color:"var(--muted)", maxWidth:540, margin:"0 auto 48px", fontWeight:300 }}>
            Every work order, disposal, and maintenance event trains the model. Your forecasts get more accurate automatically — no analyst, no manual recalibration. Other platforms give you the same output in year two as day one.
          </p>
          <div className="u4" style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:14, flexWrap:"wrap" }}>
            <a href="https://assetcycle.com.au" className="cta cta-lg">Start free →</a>
            <a href="#features" className="cta cta-outline cta-lg">See how it works</a>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section style={{ background:"var(--bg2)", borderBottom:"1px solid var(--rule)", padding:"28px 44px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"flex", gap:0, flexWrap:"wrap" }}>
          {[
            { n:"$2.4M",  l:"avg. asset portfolio" },
            { n:"11 yrs", l:"avg. lifespan learned from data" },
            { n:"+23%",   l:"forecast accuracy gain over time" },
            { n:"847",    l:"events per portfolio" },
          ].map((s, i) => (
            <div key={s.n} style={{ flex:1, minWidth:160, padding:"8px 32px 8px", borderRight: i < 3 ? "1px solid var(--rule)" : "none", display:"flex", flexDirection:"column", gap:4 }}>
              <span style={{ fontFamily:"'DM Sans', sans-serif", fontSize:32, fontWeight:700, color:"var(--text)", letterSpacing:"-0.03em" }}>{s.n}</span>
              <span style={{ fontFamily:"'DM Sans', sans-serif", fontSize:12, color:"var(--muted)", fontWeight:300 }}>{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Photo strip ── */}
      <section style={{ padding:"64px 44px 0", maxWidth:1200, margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr", gap:6, height:320, borderRadius:10, overflow:"hidden" }}>
          <div className="photo-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={PHOTOS.facility} alt="Industrial facility" loading="lazy"/>
            <div className="photo-overlay">
              <p className="mono" style={{ fontSize:9, color:"#67e2f8", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:6 }}>Asset Portfolio</p>
              <p style={{ fontFamily:"Instrument Serif, serif", fontSize:26, color:"#fff", letterSpacing:"-0.01em" }}>$2.4M avg.</p>
              <p style={{ fontSize:12, color:"rgba(255,255,255,0.55)", fontWeight:300, marginTop:4 }}>assets under management per customer</p>
            </div>
          </div>
          <div className="photo-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={PHOTOS.equipment} alt="Mechanical equipment" loading="lazy"/>
            <div className="photo-overlay">
              <p className="mono" style={{ fontSize:9, color:"#67e2f8", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:6 }}>Lifecycle data</p>
              <p style={{ fontFamily:"Instrument Serif, serif", fontSize:26, color:"#fff", letterSpacing:"-0.01em" }}>11 yrs</p>
              <p style={{ fontSize:12, color:"rgba(255,255,255,0.55)", fontWeight:300, marginTop:4 }}>avg. life learned from your data</p>
            </div>
          </div>
          <div className="photo-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={PHOTOS.inspection} alt="Field inspection" loading="lazy"/>
            <div className="photo-overlay">
              <p className="mono" style={{ fontSize:9, color:"#67e2f8", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:6 }}>Field Ready</p>
              <p style={{ fontFamily:"Instrument Serif, serif", fontSize:26, color:"#fff", letterSpacing:"-0.01em" }}>QR scan</p>
              <p style={{ fontSize:12, color:"rgba(255,255,255,0.55)", fontWeight:300, marginTop:4 }}>site to register in seconds</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" style={{ padding:"72px 44px 88px", background:"var(--bg2)", borderTop:"1px solid var(--rule)", borderBottom:"1px solid var(--rule)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <p className="mono" style={{ fontSize:10, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--cyan)", marginBottom:14 }}>
            Platform — What makes it different
          </p>
          <h2 style={{ fontFamily:"'Instrument Serif', serif", fontSize:"clamp(26px, 3vw, 40px)", fontWeight:400, letterSpacing:"-0.01em", marginBottom:52 }}>
            Everything you need, nothing you don&apos;t.
          </h2>
          {features.map(f => (
            <div key={f.n} className="feat">
              <span className="mono" style={{ fontSize:11, color:"rgba(13,13,13,0.2)", paddingTop:2 }}>{f.n}</span>
              <h3 style={{ fontSize:14, fontWeight:600, color:"var(--text)", letterSpacing:"-0.01em", lineHeight:1.5 }}>{f.title}</h3>
              <p style={{ fontSize:14, color:"var(--muted)", lineHeight:1.7, fontWeight:300 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Lifecycle chart ── */}
      <section style={{ padding:"80px 44px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ border:"1px solid var(--rule)", borderRadius:12, padding:"44px 48px" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:36, flexWrap:"wrap", gap:16 }}>
              <div>
                <p className="mono" style={{ fontSize:10, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--cyan)", marginBottom:14 }}>
                  Forecast accuracy
                </p>
                <h2 style={{ fontFamily:"'Instrument Serif', serif", fontSize:"clamp(22px, 2.8vw, 36px)", fontWeight:400, letterSpacing:"-0.01em" }}>
                  Accuracy compounds with every event.
                </h2>
              </div>
              <div style={{ display:"flex", gap:24 }}>
                {[{ c:"rgba(13,13,13,0.2)", dash:true, label:"Traditional platform" }, { c:"var(--cyan)", dash:false, label:"Assetcycle" }].map(l => (
                  <div key={l.label} style={{ display:"flex", gap:8, alignItems:"center" }}>
                    <svg width="24" height="12"><line x1="0" y1="6" x2="24" y2="6" stroke={l.c} strokeWidth="2" strokeDasharray={l.dash ? "5,3" : "none"}/></svg>
                    <span style={{ fontSize:12, color:"var(--muted)", fontFamily:"DM Mono, monospace" }}>{l.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <svg width="100%" viewBox="0 0 760 200" style={{ overflow:"visible", display:"block" }}>
              {[0,25,50,75,100].map(y => (
                <g key={y}>
                  <line x1="52" y1={170-y*1.6} x2="740" y2={170-y*1.6} stroke="rgba(13,13,13,0.05)" strokeWidth="1"/>
                  <text x="44" y={174-y*1.6} textAnchor="end" fill="rgba(13,13,13,0.28)" fontSize="9" fontFamily="DM Mono,monospace">{y}%</text>
                </g>
              ))}
              <line x1="52" y1="10" x2="52" y2="172" stroke="rgba(13,13,13,0.1)" strokeWidth="1"/>
              <line x1="52" y1="172" x2="742" y2="172" stroke="rgba(13,13,13,0.1)" strokeWidth="1"/>
              {[{x:130,l:"Day 1"},{x:400,l:"Month 6"},{x:670,l:"Year 2"}].map(({x,l}) => (
                <text key={l} x={x} y="188" textAnchor="middle" fill="rgba(13,13,13,0.28)" fontSize="9" fontFamily="DM Mono,monospace">{l}</text>
              ))}
              {[130,400,670].map(x => (
                <line key={x} x1={x} y1="172" x2={x} y2="10" stroke="rgba(13,13,13,0.05)" strokeWidth="1" strokeDasharray="4,4"/>
              ))}
              <line x1="130" y1="122" x2="670" y2="122" stroke="rgba(13,13,13,0.18)" strokeWidth="1.5" strokeDasharray="6,4"/>
              <text x="676" y="126" fill="rgba(13,13,13,0.28)" fontSize="9" fontFamily="DM Mono,monospace">~30%</text>
              <path d="M 130,122 C 220,122 300,112 400,90 C 490,70 570,26 670,10 L 670,122 Z" fill="rgba(14,165,212,0.07)"/>
              <path d="M 130,122 C 220,122 300,112 400,90 C 490,70 570,26 670,10" stroke="#0ea5d4" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              {[{x:130,y:122,l:"Benchmarks"},{x:400,y:90,l:"Your data"},{x:670,y:10,l:"Your history"}].map(({x,y,l}) => (
                <g key={l}>
                  <circle cx={x} cy={y} r="4.5" fill="#0ea5d4"/>
                  <text x={x+(x<400?10:-10)} y={y-9} textAnchor={x<400?"start":"end"} fill="#0ea5d4" fontSize="9" fontFamily="DM Mono,monospace">{l}</text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </section>

      {/* ── ROI Calculator ── */}
      <section id="roi" style={{ padding:"72px 44px 88px", background:"var(--bg2)", borderTop:"1px solid var(--rule)", borderBottom:"1px solid var(--rule)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <p className="mono" style={{ fontSize:10, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--cyan)", marginBottom:16 }}>
            ROI Calculator
          </p>
          <h2 style={{ fontFamily:"'Instrument Serif', serif", fontSize:"clamp(28px, 3.2vw, 44px)", fontWeight:400, letterSpacing:"-0.01em", marginBottom:44 }}>
            What&apos;s the cost of not knowing?
          </h2>
          <ROICalculator/>
        </div>
      </section>

      {/* ── CTA — dark inversion ── */}
      <section style={{ background:"#0d0d0d", padding:"88px 44px 96px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"flex", justifyContent:"space-between", alignItems:"flex-end", flexWrap:"wrap", gap:40 }}>
          <div>
            <h2 style={{ fontFamily:"'Instrument Serif', serif", fontSize:"clamp(28px, 3.8vw, 52px)", fontWeight:400, letterSpacing:"-0.02em", color:"#f2eeea", maxWidth:540, lineHeight:1.06, marginBottom:16 }}>
              Start today.<br/>Get smarter over time.
            </h2>
            <p style={{ fontSize:15, color:"rgba(242,238,234,0.45)", fontWeight:300 }}>No credit card. Import your first register in under 10 minutes.</p>
          </div>
          <a href="https://assetcycle.com.au" style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"15px 40px", background:"#f2eeea", color:"#0d0d0d", fontFamily:"DM Sans,sans-serif", fontSize:17, fontWeight:600, borderRadius:6, textDecoration:"none", letterSpacing:"-0.01em" }}>
            Create free account →
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop:"1px solid var(--rule)", background:"var(--bg2)", padding:"28px 44px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:16 }}>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <Logo size={20}/>
            <span className="mono" style={{ fontSize:11, color:"var(--muted)", letterSpacing:"0.08em" }}>ASSETCYCLE</span>
          </div>
          <span style={{ fontSize:12, color:"rgba(13,13,13,0.22)" }}>© 2026 Assetcycle. Built in Australia.</span>
          <a href="https://assetcycle.com.au" style={{ fontSize:12, color:"var(--cyan)", textDecoration:"none" }}>Go to app →</a>
        </div>
      </footer>
    </div>
  );
}
