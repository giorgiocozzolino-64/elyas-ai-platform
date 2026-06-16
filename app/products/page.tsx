// app/products/page.tsx — v2.0 PREMIUM — 16/06/2026

import Link from "next/link";

const products = [
  {
    name: "Pinkglow Gin",
    href: "/portal/old-tom-gin-company/pinkglow-gin",
    producer: "Old Tom Gin Company Ltd",
    status: "LIVE",
    statusColor: "#6DBF8A",
    statusBorder: "#2A5A3A",
    assets: "250 Certified Assets",
    description:
      "Digital passport ecosystem with ownership, geolocation and certification intelligence.",
  },
  {
    name: "Fife Negroni 2026",
    href: "/companies/old-tom-gin-company/fife-negroni",
    producer: "Old Tom Gin Company Ltd",
    status: "ARCHIVE",
    statusColor: "#A89878",
    statusBorder: "#3A3020",
    assets: "60 Certified Assets",
    description:
      "Event archive collection and ownership registry connected to E.L.Y.A.S-A.I.",
  },
  {
    name: "Sea Malt On Primeur",
    href: "/products",
    producer: "Arbroath A.D.1320 Ltd",
    status: "IN DEVELOPMENT",
    statusColor: "#C9A84C",
    statusBorder: "#5A4A28",
    assets: "250 Planned Assets",
    description:
      "Future subsea maturation and certified digital ownership programme.",
  },
  {
    name: "Quadriga Cask",
    href: "/companies/of-whisky-atelier",
    producer: "OF Whisky Atelier Ltd",
    status: "CONCEPT",
    statusColor: "#7A8AB0",
    statusBorder: "#2A3050",
    assets: "Limited Release Planned",
    description:
      "Luxury whisky atelier cask concept prepared for future certification.",
  },
];

export default function ProductsPage() {
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
          E.L.Y.A.S-A.I. Product Registry
        </span>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>

        {/* ── PAGE HEADER ─────────────────────────────────────── */}
        <section style={{ padding: "80px 0 64px" }}>
          <p style={eyebrow}>I · Product Registry</p>

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
            Certified
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
            Products
          </h1>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "#BDB49A",
              maxWidth: 620,
              margin: 0,
            }}
          >
            Registry of certified product classes, digital passports and future
            product certification programmes managed through the E.L.Y.A.S-A.I.
            framework.
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
            <Metric title="Product Classes" value="4" />
            <Metric title="Live Products" value="1" highlight />
            <Metric title="Certified Assets" value="310" />
            <Metric title="Framework" value="ACTIVE" highlight />
          </div>
        </section>

        <GoldRule />

        {/* ── PRODUCT CARDS ───────────────────────────────────── */}
        <section style={{ padding: "80px 0" }}>
          <p style={{ ...eyebrow, marginBottom: 40 }}>II · Product Classes</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 1,
              background: "#1C1810",
            }}
          >
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </section>

        <GoldRule />

        {/* ── ACTIONS ─────────────────────────────────────────── */}
        <section style={{ padding: "64px 0 100px", display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/dashboard" style={btnPrimary}>
            ← Back to Dashboard
          </Link>
          <Link href="/assets" style={btnSecondary}>
            View Asset Registry
          </Link>
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

/* ── PRODUCT CARD ────────────────────────────────────────────────────────── */

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <Link
      href={product.href}
      style={{
        background: "#080808",
        padding: "48px 40px",
        textDecoration: "none",
        display: "block",
        borderBottom: "2px solid transparent",
        transition: "border-color 0.2s",
        position: "relative",
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 40,
          right: 40,
          height: 1,
          background: "linear-gradient(90deg, transparent, #2A2318 30%, #2A2318 70%, transparent)",
        }}
      />

      {/* Header row */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 24,
          marginBottom: 24,
        }}
      >
        <div>
          <h2
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#F5F0E8",
              margin: "0 0 10px",
              lineHeight: 1.1,
            }}
          >
            {product.name}
          </h2>
          <p
            style={{
              fontSize: 10,
              letterSpacing: "0.4em",
              color: "#7A6840",
              fontFamily: "system-ui, sans-serif",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            {product.producer}
          </p>
        </div>

        {/* Status badge */}
        <span
          style={{
            fontSize: 9,
            letterSpacing: "0.35em",
            color: product.statusColor,
            fontFamily: "system-ui, sans-serif",
            textTransform: "uppercase",
            border: `1px solid ${product.statusBorder}`,
            padding: "6px 12px",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {product.status}
        </span>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: 15,
          lineHeight: 1.65,
          color: "#A89878",
          fontFamily: "system-ui, sans-serif",
          margin: "0 0 28px",
        }}
      >
        {product.description}
      </p>

      {/* Assets line */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 20, height: 1, background: "#C9A84C" }} />
        <p
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "#C9A84C",
            fontFamily: "system-ui, sans-serif",
            letterSpacing: "0.08em",
            margin: 0,
          }}
        >
          {product.assets}
        </p>
      </div>
    </Link>
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
          fontSize: 42,
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

const btnPrimary: React.CSSProperties = {
  display: "inline-block",
  background: "#C9A84C",
  color: "#080808",
  padding: "14px 36px",
  fontFamily: "system-ui, sans-serif",
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  textDecoration: "none",
};

const btnSecondary: React.CSSProperties = {
  display: "inline-block",
  background: "transparent",
  color: "#C9A84C",
  padding: "14px 36px",
  fontFamily: "system-ui, sans-serif",
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  textDecoration: "none",
  border: "1px solid #5A4A28",
};
