// app/assets/page.tsx — v2.0 PREMIUM — 16/06/2026

import Link from "next/link";

export default function AssetsPage() {
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
          E.L.Y.A.S-A.I. Asset Registry
        </span>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>

        {/* ── PAGE HEADER ─────────────────────────────────────── */}
        <section style={{ padding: "80px 0 64px" }}>
          <p style={eyebrow}>I · Certified Asset Registry</p>

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
            Assets
          </h1>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "#BDB49A",
              maxWidth: 600,
              margin: 0,
            }}
          >
            Live asset registry for certified Pinkglow Gin bottles issued
            inside the E.L.Y.A.S-A.I. certification framework.
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
            <Metric title="Total Assets" value="250" />
            <Metric title="Product Class" value="Pinkglow Gin" />
            <Metric title="Verification" value="LIVE" highlight />
            <Metric title="Registry" value="ACTIVE" highlight />
          </div>
        </section>

        <GoldRule />

        {/* ── ASSET DETAIL ────────────────────────────────────── */}
        <section style={{ padding: "80px 0" }}>
          <p style={eyebrow}>II · Certified Asset</p>

          <div
            style={{
              marginTop: 40,
              border: "1px solid #2A2318",
              background: "#0F0F0F",
              position: "relative",
            }}
          >
            {/* Corner accents */}
            <span style={{ position: "absolute", top: -1, left: -1, width: 20, height: 20, borderTop: "2px solid #C9A84C", borderLeft: "2px solid #C9A84C" }} />
            <span style={{ position: "absolute", top: -1, right: -1, width: 20, height: 20, borderTop: "2px solid #C9A84C", borderRight: "2px solid #C9A84C" }} />
            <span style={{ position: "absolute", bottom: -1, left: -1, width: 20, height: 20, borderBottom: "2px solid #C9A84C", borderLeft: "2px solid #C9A84C" }} />
            <span style={{ position: "absolute", bottom: -1, right: -1, width: 20, height: 20, borderBottom: "2px solid #C9A84C", borderRight: "2px solid #C9A84C" }} />

            {/* Info grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 1,
                background: "#1C1810",
                margin: 32,
              }}
            >
              <Info label="Asset ID" value="PG-FC26-001" mono />
              <Info label="Product" value="Pinkglow Gin" />
              <Info label="Owner" value="Giorgio Cozzolino" />
              <Info label="Status" value="Certified" gold />
            </div>

            {/* Actions */}
            <div
              style={{
                padding: "0 32px 32px",
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
              }}
            >
              <Link href="/verify/PG-FC26-001" style={btnPrimary}>
                Verify Asset
              </Link>
              <Link href="/certificate/PG-FC26-001" style={btnSecondary}>
                View Certificate
              </Link>
            </div>
          </div>
        </section>

        <GoldRule />

        {/* ── BACK NAV ────────────────────────────────────────── */}
        <section style={{ padding: "64px 0 100px" }}>
          <Link href="/dashboard" style={btnSecondary}>
            ← Back to Dashboard
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
          fontSize: 32,
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

function Info({
  label,
  value,
  mono,
  gold,
}: {
  label: string;
  value: string;
  mono?: boolean;
  gold?: boolean;
}) {
  return (
    <div style={{ background: "#080808", padding: "28px 24px" }}>
      <p
        style={{
          fontSize: 10,
          letterSpacing: "0.45em",
          color: "#7A6840",
          fontFamily: "system-ui, sans-serif",
          textTransform: "uppercase",
          margin: "0 0 12px",
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontSize: 16,
          fontWeight: 600,
          color: gold ? "#C9A84C" : "#F5F0E8",
          margin: 0,
          fontFamily: mono ? "monospace" : "Georgia, serif",
          letterSpacing: mono ? "0.08em" : "normal",
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
