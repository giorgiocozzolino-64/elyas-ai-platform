// app/owners/page.tsx — v2.0 PREMIUM — 16/06/2026

import Link from "next/link";
import { supabaseAdmin } from "@/lib/supabase/admin";
export const dynamic = "force-dynamic";

export default async function OwnersPage() {
  const { data: claims, error } = await supabaseAdmin
    .from("pinkglow_claims")
    .select("*");

  const ownerMap = new Map();

  claims?.forEach((claim: any) => {
    const key = claim.owner_email || claim.email || "unknown";
    if (!ownerMap.has(key)) {
      ownerMap.set(key, {
        name: claim.owner_name || claim.full_name || "Unknown Owner",
        email: claim.owner_email || claim.email || "-",
        assets: 0,
      });
    }
    ownerMap.get(key).assets += 1;
  });

  const owners = Array.from(ownerMap.values());

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
          E.L.Y.A.S-A.I. Owner Registry
        </span>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>

        {/* ── PAGE HEADER ─────────────────────────────────────── */}
        <section style={{ padding: "80px 0 64px" }}>
          <p style={eyebrow}>I · Registered Owners</p>

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
            Owner
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
            Registry
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
            Registry of verified owners linked to certified assets within the
            E.L.Y.A.S-A.I. certification framework.
          </p>
        </section>

        <GoldRule />

        {/* ── METRICS ─────────────────────────────────────────── */}
        <section style={{ padding: "64px 0" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
              background: "#1C1810",
            }}
          >
            <Metric title="Registered Owners" value={String(owners.length)} />
            <Metric title="Assets Claimed" value={String(claims?.length ?? 0)} />
            <Metric title="Registry Status" value="LIVE" highlight />
          </div>
        </section>

        <GoldRule />

        {/* ── REGISTRY STATUS BAR ─────────────────────────────── */}
        <section style={{ padding: "64px 0 0" }}>
          <p style={eyebrow}>II · Registry Status</p>

          <div
            style={{
              marginTop: 32,
              border: "1px solid #2A2318",
              background: "#0F0F0F",
              padding: "32px 40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <span style={{ position: "absolute", top: -1, left: -1, width: 20, height: 20, borderTop: "2px solid #C9A84C", borderLeft: "2px solid #C9A84C" }} />
            <span style={{ position: "absolute", top: -1, right: -1, width: 20, height: 20, borderTop: "2px solid #C9A84C", borderRight: "2px solid #C9A84C" }} />
            <span style={{ position: "absolute", bottom: -1, left: -1, width: 20, height: 20, borderBottom: "2px solid #C9A84C", borderLeft: "2px solid #C9A84C" }} />
            <span style={{ position: "absolute", bottom: -1, right: -1, width: 20, height: 20, borderBottom: "2px solid #C9A84C", borderRight: "2px solid #C9A84C" }} />

            <div>
              <p style={{ ...eyebrow, marginBottom: 12 }}>Registry Status</p>
              <h2
                style={{
                  fontSize: 36,
                  fontWeight: 400,
                  color: "#F5F0E8",
                  margin: 0,
                }}
              >
                {owners.length}{" "}
                <span style={{ color: "#C9A84C" }}>Registered Owners</span>
              </h2>
            </div>

            <Link href="/dashboard" style={btnSecondary}>
              ← Back to Dashboard
            </Link>
          </div>
        </section>

        {/* ── ERROR ───────────────────────────────────────────── */}
        {error && (
          <div
            style={{
              marginTop: 24,
              border: "1px solid #7A2020",
              background: "#1A0808",
              padding: "20px 28px",
            }}
          >
            <p style={{ color: "#E88080", fontFamily: "monospace", fontSize: 14, margin: 0 }}>
              {error.message}
            </p>
          </div>
        )}

        {/* ── OWNERS TABLE ────────────────────────────────────── */}
        <section style={{ padding: "48px 0 80px" }}>
          <p style={{ ...eyebrow, marginBottom: 32 }}>III · Owner Records</p>

          <div style={{ border: "1px solid #2A2318", overflow: "hidden" }}>
            {/* Table header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 2.5fr 1fr 1fr 80px",
                gap: 1,
                background: "#1C1810",
                borderBottom: "1px solid #2A2318",
              }}
            >
              {["Owner", "Email", "Assets", "Status", "Profile"].map((h) => (
                <div
                  key={h}
                  style={{
                    background: "#0F0F0F",
                    padding: "16px 24px",
                  }}
                >
                  <p
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.45em",
                      color: "#7A6840",
                      fontFamily: "system-ui, sans-serif",
                      textTransform: "uppercase",
                      margin: 0,
                    }}
                  >
                    {h}
                  </p>
                </div>
              ))}
            </div>

            {/* Table rows */}
            {owners.map((owner: any, i: number) => (
              <div
                key={owner.email}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 2.5fr 1fr 1fr 80px",
                  gap: 1,
                  background: "#1C1810",
                  borderBottom:
                    i < owners.length - 1 ? "1px solid #1C1810" : "none",
                }}
              >
                {/* Owner name */}
                <div style={{ background: "#080808", padding: "20px 24px" }}>
                  <Link
                    href={`/owners/${encodeURIComponent(owner.email)}`}
                    style={{
                      color: "#F5F0E8",
                      textDecoration: "none",
                      fontSize: 15,
                      fontWeight: 600,
                    }}
                  >
                    {owner.name}
                  </Link>
                </div>

                {/* Email */}
                <div style={{ background: "#080808", padding: "20px 24px" }}>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#A89878",
                      margin: 0,
                      fontFamily: "monospace",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {owner.email}
                  </p>
                </div>

                {/* Assets */}
                <div style={{ background: "#080808", padding: "20px 24px" }}>
                  <p
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#C9A84C",
                      margin: 0,
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    {owner.assets}
                  </p>
                </div>

                {/* Status */}
                <div
                  style={{
                    background: "#080808",
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.3em",
                      color: "#6DBF8A",
                      fontFamily: "system-ui, sans-serif",
                      textTransform: "uppercase",
                      border: "1px solid #2A5A3A",
                      padding: "4px 10px",
                    }}
                  >
                    VERIFIED
                  </span>
                </div>

                {/* Profile link */}
                <div
                  style={{
                    background: "#080808",
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Link
                    href={`/owners/${encodeURIComponent(owner.email)}`}
                    style={{
                      color: "#C9A84C",
                      textDecoration: "none",
                      fontSize: 14,
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    Open →
                  </Link>
                </div>
              </div>
            ))}
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
