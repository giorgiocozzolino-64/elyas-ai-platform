import Link from "next/link";

export default function LoginPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#080808", color: "#F5F0E8", fontFamily: "Georgia, serif" }}>
      <div style={{ borderBottom: "1px solid #2A2318", padding: "0 48px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={top}>Mc Fratm Ltd · Scotland</span>
        <span style={{ ...top, color: "#C9A84C" }}>E.L.Y.A.S-A.I. Secure Access</span>
      </div>

      <section style={{ maxWidth: 900, margin: "0 auto", padding: "120px 48px" }}>
        <p style={eyebrow}>I · Producer Access</p>

        <h1 style={{ fontSize: 72, lineHeight: 0.95, margin: "24px 0 32px", fontWeight: 400 }}>
          Certified <span style={{ color: "#C9A84C", fontWeight: 700 }}>Portal</span>
        </h1>

        <p style={{ maxWidth: 560, color: "#BDB49A", fontSize: 18, lineHeight: 1.7 }}>
          Secure access area for certified producers, product registries, ownership records and digital passport operations.
        </p>

        <div style={{ marginTop: 56, border: "1px solid #2A2318", background: "#0F0F0F", padding: 40 }}>
          <p style={eyebrow}>Access Mode</p>

          <div style={{ display: "grid", gap: 16, marginTop: 32 }}>
            <Link href="/dashboard" style={btnPrimary}>Open Executive Dashboard</Link>
            <Link href="/portal/old-tom-gin-company" style={btnSecondary}>Old Tom Gin Company Portal</Link>
            <Link href="/products" style={btnSecondary}>Product Registry</Link>
            <Link href="/" style={btnSecondary}>Back to Home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const top: React.CSSProperties = {
  fontSize: 11,
  letterSpacing: "0.4em",
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

const btnPrimary: React.CSSProperties = {
  display: "inline-block",
  background: "#C9A84C",
  color: "#080808",
  padding: "16px 28px",
  fontFamily: "system-ui, sans-serif",
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  textDecoration: "none",
  textAlign: "center",
};

const btnSecondary: React.CSSProperties = {
  ...btnPrimary,
  background: "transparent",
  color: "#C9A84C",
  border: "1px solid #5A4A28",
};