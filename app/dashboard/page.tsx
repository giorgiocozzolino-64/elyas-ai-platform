// app/dashboard/page.tsx — v2.0 PREMIUM — 16/06/2026

import Link from "next/link";

export const dynamic = "force-dynamic";

const integrations = [
  { name: "Oracle NetSuite", status: "CONNECTED", live: true },
  { name: "Supabase", status: "CONNECTED", live: true },
  { name: "Vercel", status: "LIVE", live: true },
  { name: "SAP", status: "PLANNED", live: false },
  { name: "Microsoft Dynamics", status: "PLANNED", live: false },
];

const companyModules = [
  {
    name: "Old Tom Gin Company Ltd",
    href: "/companies/old-tom-gin-company",
    description: "Premium spirits producer and live digital passport operator.",
    status: "ACTIVE",
    statusColor: "#6DBF8A",
    statusBorder: "#2A5A3A",
  },
  {
    name: "Arbroath A.D.1320 Ltd",
    href: "/companies/arbroath-ad1320",
    description: "Luxury whisky maison and certified maturation framework.",
    status: "IN DEVELOPMENT",
    statusColor: "#C9A84C",
    statusBorder: "#5A4A28",
  },
  {
    name: "OF Whisky Atelier Ltd",
    href: "/companies/of-whisky-atelier",
    description: "Luxury whisky atelier and bespoke collection development.",
    status: "REGISTERED",
    statusColor: "#7A8AB0",
    statusBorder: "#2A3050",
  },
  {
    name: "Mc Fratm Ltd",
    href: "/companies/mc-fratm",
    description: "Premium food, hospitality and lifestyle product producer.",
    status: "REGISTERED",
    statusColor: "#7A8AB0",
    statusBorder: "#2A3050",
  },
];

const productClasses = [
  {
    name: "Pinkglow Gin",
    href: "/portal/old-tom-gin-company/pinkglow-gin",
    producer: "Old Tom Gin Company Ltd",
    assets: "250",
    status: "LIVE",
    statusColor: "#6DBF8A",
    statusBorder: "#2A5A3A",
  },
  {
    name: "Fife Negroni 2026",
    href: "/companies/old-tom-gin-company/fife-negroni",
    producer: "Old Tom Gin Company Ltd",
    assets: "60",
    status: "ARCHIVE",
    statusColor: "#A89878",
    statusBorder: "#3A3020",
  },
  {
    name: "Sea Malt On Primeur",
    href: "/products",
    producer: "Arbroath A.D.1320 Ltd",
    assets: "250 planned",
    status: "IN DEVELOPMENT",
    statusColor: "#C9A84C",
    statusBorder: "#5A4A28",
  },
];

const quickLinks = [
  { href: "/assets", label: "Asset Registry" },
  { href: "/owners", label: "Owner Registry" },
  { href: "/products", label: "Product Registry" },
  { href: "/verify/PG-FC26-001", label: "Verify Demo Asset" },
  { href: "/certificate/PG-FC26-001", label: "Demo Certificate" },
];

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
          E.L.Y.A.S-A.I. Certification Authority
        </span>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>

        {/* ── HERO ────────────────────────────────────────────── */}
        <section style={{ padding: "80px 0 64px" }}>
          <p style={eyebrow}>I · Executive Control Layer</p>

          <h1
            style={{
              fontSize: "clamp(48px, 7vw, 80px)",
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "#F5F0E8",
              margin: "24px 0 8px",
            }}
          >
            Certification
          </h1>
          <h1
            style={{
              fontSize: "clamp(48px, 7vw, 80px)",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "#C9A84C",
              margin: "0 0 40px",
            }}
          >
            Dashboard
          </h1>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.65,
              color: "#BDB49A",
              maxWidth: 640,
              margin: 0,
            }}
          >
            Executive control layer for certified product identity, ownership,
            verification and producer ecosystems.
          </p>
        </section>

        <GoldRule />

        {/* ── METRICS ─────────────────────────────────────────── */}
        <section style={{ padding: "64px 0" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 1,
              background: "#1C1810",
            }}
          >
            <Metric title="Certified Projects" value="5" />
            <Metric title="Certified Assets" value="310+" />
            <Metric title="Registered Owners" value="LIVE" highlight />
            <Metric title="Certification Status" value="ACTIVE" highlight />
          </div>
        </section>

        <GoldRule />

        {/* ── INTEGRATIONS ────────────────────────────────────── */}
        <section style={{ padding: "80px 0" }}>
          <p style={{ ...eyebrow, marginBottom: 40 }}>II · Platform Integrations</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 1,
              background: "#1C1810",
            }}
          >
            {integrations.map((item) => (
              <div
                key={item.name}
                style={{ background: "#080808", padding: "28px 24px" }}
              >
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#F5F0E8",
                    fontFamily: "system-ui, sans-serif",
                    margin: "0 0 16px",
                    lineHeight: 1.3,
                  }}
                >
                  {item.name}
                </p>
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
        </section>

        <GoldRule />

        {/* ── CERTIFIED PRODUCERS ─────────────────────────────── */}
        <section style={{ padding: "80px 0" }}>
          <p style={{ ...eyebrow, marginBottom: 40 }}>III · Certified Producers</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 1,
              background: "#1C1810",
            }}
          >
            {companyModules.map((company) => (
              <Link
                key={company.name}
                href={company.href}
                style={{
                  background: "#080808",
                  padding: "48px 40px",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 24,
                    marginBottom: 24,
                  }}
                >
                  <h2
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#F5F0E8",
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {company.name}
                  </h2>
                  <span
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.35em",
                      color: company.statusColor,
                      fontFamily: "system-ui, sans-serif",
                      textTransform: "uppercase",
                      border: `1px solid ${company.statusBorder}`,
                      padding: "6px 12px",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {company.status}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: "#A89878",
                    fontFamily: "system-ui, sans-serif",
                    margin: "0 0 32px",
                  }}
                >
                  {company.description}
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
                    Open Profile
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <GoldRule />

        {/* ── PRODUCT CLASSES ─────────────────────────────────── */}
        <section style={{ padding: "80px 0" }}>
          <p style={{ ...eyebrow, marginBottom: 40 }}>IV · Product Classes</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
              background: "#1C1810",
            }}
          >
            {productClasses.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                style={{
                  background: "#080808",
                  padding: "40px 32px",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <p
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.4em",
                    color: "#7A6840",
                    fontFamily: "system-ui, sans-serif",
                    textTransform: "uppercase",
                    margin: "0 0 16px",
                  }}
                >
                  {product.producer}
                </p>

                <h2
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#F5F0E8",
                    margin: "0 0 24px",
                    lineHeight: 1.2,
                  }}
                >
                  {product.name}
                </h2>

                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 20, height: 1, background: "#C9A84C" }} />
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#C9A84C",
                      fontFamily: "system-ui, sans-serif",
                      letterSpacing: "0.06em",
                      margin: 0,
                    }}
                  >
                    {product.assets} Certified Assets
                  </p>
                </div>

                <span
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.35em",
                    color: product.statusColor,
                    fontFamily: "system-ui, sans-serif",
                    textTransform: "uppercase",
                    border: `1px solid ${product.statusBorder}`,
                    padding: "4px 10px",
                  }}
                >
                  {product.status}
                </span>
              </Link>
            ))}
          </div>
        </section>

        <GoldRule />

        {/* ── QUICK ACCESS ────────────────────────────────────── */}
        <section style={{ padding: "80px 0 100px" }}>
          <p style={{ ...eyebrow, marginBottom: 40 }}>V · Quick Access</p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "inline-block",
                  background: "#0F0F0F",
                  color: "#C9A84C",
                  padding: "16px 28px",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  border: "1px solid #2A2318",
                }}
              >
                {link.label} →
              </Link>
            ))}
          </div>
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

/* ── SUB-COMPONENTS ─────────────────────────────────────────────────────── */

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

function Metric({
  title,
  value,
  highlight,
}: {
  title: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div style={{ background: "#080808", padding: "36px 32px" }}>
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
        {title}
      </p>
      <p
        style={{
          fontSize: 38,
          fontWeight: 700,
          color: highlight ? "#C9A84C" : "#F5F0E8",
          margin: 0,
          fontFamily: "Georgia, serif",
        }}
      >
        {value}
      </p>
    </div>
  );
}

/* ── SHARED STYLES ───────────────────────────────────────────────────────── */

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
