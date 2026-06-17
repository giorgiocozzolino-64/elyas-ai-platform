import Link from "next/link";

export default function HomePage() {
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
        <span
          style={{
            fontSize: 11,
            letterSpacing: "0.45em",
            color: "#A89060",
            fontFamily: "system-ui, sans-serif",
            textTransform: "uppercase",
          }}
        >
          Mc Fratm Ltd · Scotland
        </span>
        <span
          style={{
            fontSize: 11,
            letterSpacing: "0.35em",
            color: "#C9A84C",
            fontFamily: "system-ui, sans-serif",
            textTransform: "uppercase",
          }}
        >
          Digital Certification Authority
        </span>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>

        {/* ── HERO ────────────────────────────────────────────── */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 300px",
            gap: 64,
            alignItems: "center",
            padding: "100px 0 80px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: 10,
                letterSpacing: "0.6em",
                color: "#C9A84C",
                fontFamily: "system-ui, sans-serif",
                textTransform: "uppercase",
                marginBottom: 32,
              }}
            >
              I · Certified Product Intelligence
            </p>

            <h1
              style={{
                fontSize: "clamp(56px, 8vw, 96px)",
                fontWeight: 400,
                lineHeight: 0.92,
                letterSpacing: "-0.02em",
                color: "#F5F0E8",
                margin: "0 0 8px",
              }}
            >
              E.L.Y.A.S
            </h1>
            <h1
              style={{
                fontSize: "clamp(56px, 8vw, 96px)",
                fontWeight: 700,
                lineHeight: 0.92,
                letterSpacing: "-0.02em",
                color: "#C9A84C",
                margin: "0 0 48px",
              }}
            >
              A.I.
            </h1>

            <p
              style={{
                fontSize: 22,
                lineHeight: 1.5,
                color: "#BDB49A",
                maxWidth: 560,
                margin: "0 0 16px",
                fontWeight: 400,
              }}
            >
              Certified Product Intelligence for Luxury Food, Beverage,
              Spirits and Premium Craft Products.
            </p>

            <p
              style={{
                fontSize: 15,
                color: "#A89878",
                maxWidth: 480,
                lineHeight: 1.6,
                margin: "0 0 52px",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Preserving, verifying and sharing the story behind premium products.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link
                href="/verify/PG-FC26-001"
                style={{
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
                  border: "none",
                }}
              >
                Verify a Product
              </Link>

              <Link
                href="/products"
                style={{
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
                  border: "1px solid #3A3020",
                }}
              >
                Certified Products
              </Link>
            </div>
          </div>

          {/* Logo card */}
          <div
            style={{
              border: "1px solid #2A2318",
              background: "#0F0F0F",
              padding: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              aspectRatio: "1 / 1",
              position: "relative",
            }}
          >
            {/* Corner accents */}
            <span style={{ position: "absolute", top: -1, left: -1, width: 20, height: 20, borderTop: "2px solid #C9A84C", borderLeft: "2px solid #C9A84C" }} />
            <span style={{ position: "absolute", top: -1, right: -1, width: 20, height: 20, borderTop: "2px solid #C9A84C", borderRight: "2px solid #C9A84C" }} />
            <span style={{ position: "absolute", bottom: -1, left: -1, width: 20, height: 20, borderBottom: "2px solid #C9A84C", borderLeft: "2px solid #C9A84C" }} />
            <span style={{ position: "absolute", bottom: -1, right: -1, width: 20, height: 20, borderBottom: "2px solid #C9A84C", borderRight: "2px solid #C9A84C" }} />

            {/* Cream panel with wordmark */}
            <div
              style={{
                background: "#F5F0E8",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
                padding: "32px 24px",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(20px, 2.6vw, 30px)",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                  color: "#0F0F0F",
                  margin: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ color: "#C9A84C", fontSize: "0.6em" }}>•(((•</span>
                E.L.Y.A.S-A.I.
                <span style={{ color: "#C9A84C", fontSize: "0.6em" }}>•)))•</span>
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 10, width: "70%" }}>
                <span style={{ flex: 1, height: 1, background: "#C9A84C" }} />
                <span style={{ width: 5, height: 5, background: "#C9A84C", transform: "rotate(45deg)" }} />
                <span style={{ flex: 1, height: 1, background: "#C9A84C" }} />
              </div>

              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.6,
                  color: "#3A3020",
                  textAlign: "center",
                  fontFamily: "system-ui, sans-serif",
                  margin: 0,
                  maxWidth: 280,
                }}
              >
                Enhanced Living Systems through Acoustic Stimulation — Artisanal Intelligence
              </p>
            </div>
          </div>
        </section>

        {/* ── GOLD RULE ───────────────────────────────────────── */}
        <GoldRule />

        {/* ── METRICS ─────────────────────────────────────────── */}
        <section style={{ padding: "64px 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "#1C1810" }}>
            <Metric title="Certified Projects" value="5" />
            <Metric title="Certified Assets" value="310+" />
            <Metric title="Registered Owners" value="12" />
            <Metric title="Status" value="ACTIVE" highlight />
          </div>
        </section>

        <GoldRule />

        {/* ── MANIFESTO ───────────────────────────────────────── */}
        <section style={{ padding: "80px 0" }}>
          <p style={eyebrow}>II · Manifesto</p>

          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 400,
              lineHeight: 1.15,
              color: "#F5F0E8",
              maxWidth: 720,
              margin: "0 0 32px",
              letterSpacing: "-0.01em",
            }}
          >
            Every certified product{" "}
            <span style={{ color: "#C9A84C", fontStyle: "italic" }}>
              has a story.
            </span>
          </h2>

          <div
            style={{
              borderLeft: "2px solid #C9A84C",
              paddingLeft: 32,
              maxWidth: 600,
            }}
          >
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "#C8BFA8", margin: "0 0 12px", fontFamily: "system-ui, sans-serif" }}>
              Every bottle, every cask, every ingredient, every journey leaves a trace.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "#C8BFA8", margin: 0, fontFamily: "system-ui, sans-serif" }}>
              Our mission is to preserve, verify and share that story.
            </p>
          </div>
        </section>

        <GoldRule />

        {/* ── WHAT WE CERTIFY ─────────────────────────────────── */}
        <section style={{ padding: "80px 0" }}>
          <p style={eyebrow}>III · What We Certify</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "#1C1810", marginTop: 40 }}>
            <CertCard title="Spirits & Whisky" index="01" />
            <CertCard title="Wine" index="02" />
            <CertCard title="Premium Seafood" index="03" />
            <CertCard title="Artisan Food" index="04" />
            <CertCard title="Maturation Vessels" index="05" />
            <CertCard title="Luxury Collections" index="06" />
          </div>
        </section>

        <GoldRule />

        {/* ── FOR PRODUCERS ───────────────────────────────────── */}
        <section style={{ padding: "80px 0" }}>
          <p style={eyebrow}>IV · For Certified Producers</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start", marginTop: 40 }}>
            <div>
              <h2
                style={{
                  fontSize: "clamp(28px, 3vw, 42px)",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  color: "#F5F0E8",
                  margin: "0 0 24px",
                }}
              >
                Transform your product into a{" "}
                <span style={{ color: "#C9A84C", fontStyle: "italic" }}>certified digital asset.</span>
              </h2>

              <p style={{ fontSize: 16, lineHeight: 1.7, color: "#A89878", fontFamily: "system-ui, sans-serif", margin: "0 0 40px" }}>
                E.L.Y.A.S-A.I. supports producers, distilleries, food brands and
                premium craft companies by creating verified digital product
                passports, ownership records and traceable product histories.
              </p>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <Link href="/portal/old-tom-gin-company" style={btnPrimary}>
                  Company Portal
                </Link>
                <Link href="/dashboard" style={btnSecondary}>
                  Dashboard
                </Link>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "#1C1810" }}>
              {["Product Certification", "Ownership Registry", "Digital Passport", "Certificate Generation", "ERP Integration", "Producer Portal"].map((t, i) => (
                <div
                  key={t}
                  style={{
                    background: "#080808",
                    padding: "28px 24px",
                    borderBottom: i < 4 ? "1px solid #1C1810" : "none",
                  }}
                >
                  <p style={{ fontSize: 10, color: "#C9A84C", letterSpacing: "0.4em", fontFamily: "system-ui, sans-serif", textTransform: "uppercase", margin: "0 0 10px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p style={{ fontSize: 15, color: "#BDB49A", margin: 0, fontFamily: "system-ui, sans-serif" }}>{t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <GoldRule />

        {/* ── ECOSYSTEM ───────────────────────────────────────── */}
        <section style={{ padding: "80px 0" }}>
          <p style={eyebrow}>V · Certified Ecosystem</p>

          <h2
            style={{
              fontSize: "clamp(28px, 3vw, 42px)",
              fontWeight: 400,
              lineHeight: 1.2,
              color: "#F5F0E8",
              maxWidth: 640,
              margin: "24px 0 16px",
            }}
          >
            A growing network of certified producers, product classes and digital assets.
          </h2>

          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#A89878", maxWidth: 560, fontFamily: "system-ui, sans-serif", margin: "0 0 48px" }}>
            Designed to support multiple companies, multiple product categories
            and thousands of certified assets across premium food, beverage,
            spirits and craft sectors.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "#1C1810" }}>
            <EcoCard title="Certified Producers" desc="Verified companies with audit trails and certification status" />
            <EcoCard title="Certified Product Classes" desc="From single malt to premium seafood — every transformation certified" />
            <EcoCard title="Global Verification Network" desc="QR and NFC-enabled instant provenance verification worldwide" />
          </div>

          <div style={{ marginTop: 40 }}>
            <Link href="/products" style={btnPrimary}>
              Explore Certified Products
            </Link>
          </div>
        </section>

        <GoldRule />

        {/* ── CLOSING STATEMENT ───────────────────────────────── */}
        <section
          style={{
            padding: "80px 0 100px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(24px, 3vw, 38px)",
              fontWeight: 400,
              color: "#F5F0E8",
              letterSpacing: "0.02em",
              margin: "0 0 16px",
            }}
          >
            The QR code is only the key.
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "#C9A84C",
              letterSpacing: "0.25em",
              fontFamily: "system-ui, sans-serif",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            The story begins when the door opens.
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
        <span style={{ fontSize: 11, color: "#7A6840", letterSpacing: "0.3em", fontFamily: "system-ui, sans-serif", textTransform: "uppercase" }}>
          © 2026 Mc Fratm Ltd · All Rights Reserved
        </span>
        <span style={{ fontSize: 11, color: "#7A6840", letterSpacing: "0.3em", fontFamily: "system-ui, sans-serif", textTransform: "uppercase" }}>
          E.L.Y.A.S-A.I.™
        </span>
      </footer>
    </main>
  );
}

/* ── SUB-COMPONENTS ─────────────────────────────────────────────────────── */

function GoldRule() {
  return (
    <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #2A2318 20%, #C9A84C 50%, #2A2318 80%, transparent)" }} />
  );
}

function Metric({ title, value, highlight }: { title: string; value: string; highlight?: boolean }) {
  return (
    <div style={{ background: "#080808", padding: "36px 32px" }}>
      <p style={{ fontSize: 10, letterSpacing: "0.45em", color: "#7A6840", fontFamily: "system-ui, sans-serif", textTransform: "uppercase", margin: "0 0 16px" }}>
        {title}
      </p>
      <p style={{ fontSize: 42, fontWeight: 700, color: highlight ? "#C9A84C" : "#F5F0E8", margin: 0, fontFamily: "Georgia, serif" }}>
        {value}
      </p>
    </div>
  );
}

function CertCard({ title, index }: { title: string; index: string }) {
  return (
    <div
      style={{
        background: "#080808",
        padding: "36px 32px",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        minHeight: 120,
      }}
    >
      <h3 style={{ fontSize: 17, fontWeight: 400, color: "#BDB49A", margin: 0 }}>{title}</h3>
      <span style={{ fontSize: 10, color: "#2A2318", fontFamily: "system-ui, sans-serif", letterSpacing: "0.2em" }}>{index}</span>
    </div>
  );
}

function EcoCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div style={{ background: "#080808", padding: "40px 32px" }}>
      <div style={{ width: 24, height: 1, background: "#C9A84C", marginBottom: 24 }} />
      <h3 style={{ fontSize: 19, fontWeight: 400, color: "#F5F0E8", margin: "0 0 16px" }}>{title}</h3>
      <p style={{ fontSize: 14, lineHeight: 1.6, color: "#A89878", fontFamily: "system-ui, sans-serif", margin: 0 }}>{desc}</p>
    </div>
  );
}

/* ── SHARED STYLES ───────────────────────────────────────────────────────── */

const eyebrow: React.CSSProperties = {
  fontSize: 10,
  letterSpacing: "0.6em",
  color: "#C9A84C",
  fontFamily: "system-ui, sans-serif",
  textTransform: "uppercase",
  margin: 0,
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
