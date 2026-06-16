// app/dashboard/page.tsx — v2.0 PREMIUM — 16/06/2026

import Link from "next/link";

const metrics = [
  { title: "Certified Companies", value: "4" },
  { title: "Certified Products", value: "5" },
  { title: "Certified Assets", value: "310" },
  { title: "Registered Owners", value: "8" },
  { title: "ERP Integrations", value: "1" },
  { title: "Certification Status", value: "ACTIVE", highlight: true },
];

const modules = [
  {
    title: "Certified Companies",
    description: "Verified producers, maisons, ateliers and technology companies.",
    href: "/companies",
    index: "01",
  },
  {
    title: "Certified Products",
    description: "Digital passports for spirits, whisky, food and luxury products.",
    href: "/products",
    index: "02",
  },
  {
    title: "Certified Assets",
    description: "Bottles, casks, collections and registered premium assets.",
    href: "/assets",
    index: "03",
  },
  {
    title: "Registered Owners",
    description: "Ownership registry, transfers, certificates and collector records.",
    href: "/owners",
    index: "04",
  },
];

const integrations = [
  { name: "Oracle NetSuite", status: "CONNECTED", live: true },
  { name: "SAP", status: "PLANNED", live: false },
  { name: "Microsoft Dynamics", status: "PLANNED", live: false },
  { name: "Shopify", status: "PLANNED", live: false },
  { name: "Zucchetti", status: "PLANNED", live: false },
];

const markets = ["United Kingdom", "Italy", "Germany", "Poland", "Netherlands", "Global"];

export default function DashboardPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#080808",
        color: "#F5F0E8",
        fontFamily: "'Georgia', 'Times New Roman', serif",
      }}
    >
      {/* ── TOP BAR ─────────────────────────────────────────── */}
      <div
        style={{
          borderBottom: "1px solid #2A2318",
          padding: "0 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 56,
        }}
      >
        <span style={topBarText}>Mc Fratm Ltd · Scotland</span>
        <span style={{ ...topBarText, color: "#C9A84C" }}>
          Digital Certification Authority
        </span>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>

        {/* ── HERO ────────────────────────────────────────────── */}
        <section style={{ padding: "80px 0 64px" }}>
          <p style={eyebrow}>I · Platform Overview</p>

          <h1
            style={{
              fontSize: "clamp(48px, 7vw, 88px)",
              fontWeight: 400,
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
              color: "#F5F0E8",
              margin: "24px 0 8px",
            }}
          >
            E.L.Y.A.S-A.I.
          </h1>
          <h1
            style={{
              fontSize: "clamp(48px, 7vw, 88px)",
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
              color: "#C9A84C",
              margin: "0 0 40px",
            }}
          >
            2.0
          </h1>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.65,
              color: "#BDB49A",
              maxWidth: 680,
              margin: 0,
            }}
          >
            The digital trust layer for premium food, beverage, spirits and
            luxury products. Certifying provenance, ownership, maturation,
            authenticity and product intelligence.
          </p>
        </section>

        <GoldRule />

        {/* ── MANIFESTO ───────────────────────────────────────── */}
        <section style={{ padding: "72px 0" }}>
          <div
            style={{
              border: "1px solid #2A2318",
              background: "#0F0F0F",
              padding: "48px 56px",
              position: "relative",
            }}
          >
            <span style={{ position: "absolute", top: -1, left: -1, width: 20, height: 20, borderTop: "2px solid #C9A84C", borderLeft: "2px solid #C9A84C" }} />
            <span style={{ position: "absolute", top: -1, right: -1, width: 20, height: 20, borderTop: "2px solid #C9A84C", borderRight: "2px solid #C9A84C" }} />
            <span style={{ position: "absolute", bottom: -1, left: -1, width: 20, height: 20, borderBottom: "2px solid #C9A84C", borderLeft: "2px solid #C9A84C" }} />
            <span style={{ position: "absolute", bottom: -1, right: -1, width: 20, height: 20, borderBottom: "2px solid #C9A84C", borderRight: "2px solid #C9A84C" }} />

            <p style={{ ...eyebrow, marginBottom: 20 }}>Core Manifesto</p>

            <h2
              style={{
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 400,
                color: "#F5F0E8",
                margin: "0 0 20px",
                lineHeight: 1.2,
              }}
            >
              Every certified product has a{" "}
              <span style={{ color: "#C9A84C", fontStyle: "italic" }}>story.</span>
            </h2>

            <div style={{ borderLeft: "2px solid #C9A84C", paddingLeft: 28, maxWidth: 680 }}>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "#A89878",
                  fontFamily: "system-ui, sans-serif",
                  margin: 0,
                }}
              >
                Every bottle, every cask, every ingredient and every journey
                leaves a trace. E.L.Y.A.S-A.I. preserves, verifies and shares
                that story.
              </p>
            </div>
          </div>
        </section>

        <GoldRule />

        {/* ── METRICS ─────────────────────────────────────────── */}
        <section style={{ padding: "64px 0" }}>
          <p style={{ ...eyebrow, marginBottom: 32 }}>II · Platform Metrics</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
              background: "#1C1810",
            }}
          >
            {metrics.map((m) => (
              <div key={m.title} style={{ background: "#080808", padding: "36px 32px" }}>
                <p
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.45em",
                    color: "#7A6840",
                    fontFamily: "system-ui, sans-serif",
                    textTransform: "uppercase",
                    margin: "0 0 16px",
                  }}
                >
                  {m.title}
                </p>
                <p
                  style={{
                    fontSize: 42,
                    fontWeight: 700,
                    color: m.highlight ? "#C9A84C" : "#F5F0E8",
                    margin: 0,
                    fontFamily: "Georgia, serif",
                  }}
                >
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <GoldRule />

        {/* ── PLATFORM MODULES ────────────────────────────────── */}
        <section style={{ padding: "80px 0" }}>
          <p style={{ ...eyebrow, marginBottom: 40 }}>III · Platform Modules</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 1,
              background: "#1C1810",
            }}
          >
            {modules.map((mod) => (
              <Link
                key={mod.href}
                href={mod.href}
                style={{
                  background: "#080808",
                  padding: "48px 40px",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <p
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.4em",
                    color: "#C9A84C",
                    fontFamily: "system-ui, sans-serif",
                    textTransform: "uppercase",
                    margin: "0 0 20px",
                  }}
                >
                  {mod.index}
                </p>

                <h2
                  style={{
                    fontSize: 26,
                    fontWeight: 700,
                    color: "#F5F0E8",
                    margin: "0 0 16px",
                    lineHeight: 1.15,
                  }}
                >
                  {mod.title}
                </h2>

                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: "#A89878",
                    fontFamily: "system-ui, sans-serif",
                    margin: "0 0 32px",
                  }}
                >
                  {mod.description}
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 20, height: 1, background: "#C9A84C" }} />
                  <span
                    style={{
                      fontSize: 12,
                      color: "#C9A84C",
                      fontFamily: "system-ui, sans-serif",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Open Module
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <GoldRule />

        {/* ── ERP + INTELLIGENCE ──────────────────────────────── */}
        <section style={{ padding: "80px 0" }}>
          <p style={{ ...eyebrow, marginBottom: 40 }}>IV · Integrations & Intelligence</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "#1C1810" }}>

            {/* ERP */}
            <div style={{ background: "#080808", padding: "48px 40px" }}>
              <p style={{ ...eyebrow, marginBottom: 32 }}>ERP Integrations</p>

              <div>
                {integrations.map((item, i) => (
                  <div
                    key={item.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px 0",
                      borderBottom: i < integrations.length - 1 ? "1px solid #1C1810" : "none",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 15,
                        color: "#BDB49A",
                        fontFamily: "system-ui, sans-serif",
                      }}
                    >
                      {item.name}
                    </span>
                    <span
                      style={{
                        fontSize: 9,
                        letterSpacing: "0.35em",
                        color: item.live ? "#6DBF8A" : "#3A3020",
                        fontFamily: "system-ui, sans-serif",
                        textTransform: "uppercase",
                        border: `1px solid ${item.live ? "#2A5A3A" : "#2A2318"}`,
                        padding: "4px 10px",
                      }}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Intelligence */}
            <div style={{ background: "#080808", padding: "48px 40px" }}>
              <p style={{ ...eyebrow, marginBottom: 32 }}>Global Intelligence</p>

              <h2
                style={{
                  fontSize: 24,
                  fontWeight: 400,
                  color: "#F5F0E8",
                  margin: "0 0 20px",
                  lineHeight: 1.25,
                }}
              >
                Scan, ownership and{" "}
                <span style={{ color: "#C9A84C", fontStyle: "italic" }}>
                  certification data.
                </span>
              </h2>

              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "#A89878",
                  fontFamily: "system-ui, sans-serif",
                  margin: "0 0 36px",
                }}
              >
                Future dashboard layer for global scans, country intelligence,
                owner activity, product lifecycle events and premium market
                insights.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 1,
                  background: "#1C1810",
                }}
              >
                {markets.map((m) => (
                  <div
                    key={m}
                    style={{
                      background: "#080808",
                      padding: "12px 16px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 12,
                        color: "#7A6840",
                        fontFamily: "system-ui, sans-serif",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {m}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <GoldRule />

        {/* ── CLOSING STATEMENT ───────────────────────────────── */}
        <section
          style={{
            padding: "80px 0 100px",
            border: "1px solid #2A2318",
            background: "#0F0F0F",
            margin: "64px 0",
            position: "relative",
          }}
        >
          <span style={{ position: "absolute", top: -1, left: -1, width: 20, height: 20, borderTop: "2px solid #C9A84C", borderLeft: "2px solid #C9A84C" }} />
          <span style={{ position: "absolute", top: -1, right: -1, width: 20, height: 20, borderTop: "2px solid #C9A84C", borderRight: "2px solid #C9A84C" }} />
          <span style={{ position: "absolute", bottom: -1, left: -1, width: 20, height: 20, borderBottom: "2px solid #C9A84C", borderLeft: "2px solid #C9A84C" }} />
          <span style={{ position: "absolute", bottom: -1, right: -1, width: 20, height: 20, borderBottom: "2px solid #C9A84C", borderRight: "2px solid #C9A84C" }} />

          <h2
            style={{
              fontSize: "clamp(22px, 2.5vw, 32px)",
              fontWeight: 400,
              color: "#F5F0E8",
              maxWidth: 760,
              lineHeight: 1.3,
              margin: "0 0 20px",
            }}
          >
            India and China can produce millions of litres.{" "}
            <span style={{ color: "#C9A84C", fontStyle: "italic" }}>
              We produce certified trust.
            </span>
          </h2>

          <p
            style={{
              fontSize: 15,
              lineHeight: 1.7,
              color: "#A89878",
              fontFamily: "system-ui, sans-serif",
              maxWidth: 640,
              margin: 0,
            }}
          >
            The future challenge for Scotland is not producing more whisky. It
            is proving why Scottish whisky remains worth more.
          </p>
        </section>

      </div>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: "1px solid #1C1810",
          padding: "32px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={footerText}>© 2026 Mc Fratm Ltd · All Rights Reserved</span>
        <span style={footerText}>E.L.Y.A.S-A.I.™</span>
      </footer>
    </main>
  );
}

/* ── SHARED STYLES ───────────────────────────────────────────────────────── */

function GoldRule() {
  return (
    <div
      style={{
        height: 1,
        background:
          "linear-gradient(90deg, transparent, #2A2318 20%, #C9A84C 50%, #2A2318 80%, transparent)",
      }}
    />
  );
}

const topBarText: React.CSSProperties = {
  fontSize: 11,
  letterSpacing: "0.45em",
  color: "#A89060",
  fontFamily: "system-ui, sans-serif",
  textTransform: "uppercase",
};

const eyebrow: React.CSSProperties = {
  fontSize: 10,
  letterSpacing: "0.6em",
  color: "#C9A84C",
  fontFamily: "system-ui, sans-serif",
  textTransform: "uppercase",
  margin: 0,
};

const footerText: React.CSSProperties = {
  fontSize: 11,
  color: "#7A6840",
  letterSpacing: "0.3em",
  fontFamily: "system-ui, sans-serif",
  textTransform: "uppercase",
};
