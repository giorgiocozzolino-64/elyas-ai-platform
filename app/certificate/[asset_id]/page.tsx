// app/certificate/[asset_id]/page.tsx — v1.5 — ELYAS dark/gold theme

import QRCode from "qrcode";
import { supabaseAdmin } from "@/lib/supabase/admin";
import PrintCertificateButton from "@/app/components/PrintCertificateButton";
export const dynamic = "force-dynamic";
type CertificatePageProps = {
  params: Promise<{ asset_id: string }>;
};

export default async function CertificatePage({ params }: CertificatePageProps) {
  const { asset_id } = await params;
  const serial = decodeURIComponent(asset_id);

  const [{ data: asset }, { data: claim }] = await Promise.all([
    supabaseAdmin
      .from("pinkglow_bottles")
      .select("*")
      .eq("serial", serial)
      .maybeSingle(),

    supabaseAdmin
      .from("pinkglow_claims")
      .select("*")
      .eq("serial", serial)
      .maybeSingle(),
  ]);

  if (!asset) {
    return (
      <main className="min-h-screen bg-[#080808] px-6 py-12 text-[#F5F0E8]">
        <h1 className="text-5xl font-bold">Certificate not found</h1>
      </main>
    );
  }

  const ownerName = claim?.owner_name ?? "Awaiting Registration";
  const certificateId = `ELYAS-2026-${asset.serial}`;
  const verifyUrl = `https://pinkglow-gin-experience.vercel.app/verify/${asset.serial}`;

  const qrDataUrl = await QRCode.toDataURL(verifyUrl, {
    margin: 1,
    width: 260,
    color: {
      dark: "#0F0F0F",
      light: "#E8DEC8",
    },
  });

  return (
    <main className="min-h-screen bg-[#080808] px-4 py-6 text-[#F5F0E8] print:bg-[#080808] print:p-0">
      <style>{`
        @page {
          size: A4 portrait;
          margin: 6mm;
        }

        @media print {
          .no-print { display: none !important; }
          body { background: #080808 !important; }
          .certificate {
            width: 198mm !important;
            height: 285mm !important;
            margin: 0 auto !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            overflow: hidden !important;
          }
        }
      `}</style>

      <div className="certificate relative mx-auto max-w-[880px] overflow-hidden rounded-2xl border-[3px] border-[#C9A84C] bg-[#0B0B0B] p-4 shadow-2xl">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <img
            src="/elyas-logo.png"
            alt="E.L.Y.A.S-A.I. Watermark"
            className="w-[640px] rotate-[-12deg]"
          />
        </div>

        <div className="relative z-10">
          <header className="grid grid-cols-[180px_1fr_115px] items-start gap-3 border-b border-[#2A2318] pb-3">
            <div className="text-center">
              <div className="flex h-32 w-full flex-col items-center justify-center gap-1 rounded-lg border border-[#2A2318] bg-[#E8DEC8] p-2">
                <p className="flex items-center gap-1 whitespace-nowrap font-serif text-base font-bold leading-none text-[#0F0F0F]">
                  <span className="text-[0.55em] text-[#A8842E]">•(((•</span>
                  E.L.Y.A.S-A.I.
                  <span className="text-[0.55em] text-[#A8842E]">•)))•</span>
                </p>
                <div className="flex w-[78%] items-center gap-1">
                  <span className="h-px flex-1 bg-[#A8842E]" />
                  <span className="h-1 w-1 rotate-45 bg-[#A8842E]" />
                  <span className="h-px flex-1 bg-[#A8842E]" />
                </div>
                <p className="px-1 text-center text-[7px] leading-[1.4] text-[#3A3020]">
                  Enhanced Living Systems through Acoustic Stimulation — Artisanal Intelligence
                </p>
              </div>

              <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.2em] text-[#C9A84C]">
                Certification Authority
              </p>
            </div>

            <div className="text-center">
              <p className="font-serif text-3xl font-bold tracking-[0.12em] text-[#F5F0E8]">
                PINKGLOW GIN
              </p>

              <p className="mt-1 text-xs font-bold uppercase tracking-[0.24em] text-[#C9A84C]">
                Digital Product Passport
              </p>

              <p className="mt-1 text-[10px] text-[#A89878]">
                Certified by E.L.Y.A.S-A.I. | Digital Certification Framework
              </p>

              <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#C9A84C]">
                Certificate No.
              </p>

              <p className="text-base font-extrabold tracking-[0.04em] text-[#E8DEC8]">{certificateId}</p>
            </div>

            <div className="text-center">
              <div className="rounded-lg border border-[#2A2318] bg-[#E8DEC8] p-2">
                <img
                  src={qrDataUrl}
                  alt={`Verification QR for ${asset.serial}`}
                  className="mx-auto h-18 w-18"
                />
              </div>

              <p className="mt-1 text-[7px] font-bold uppercase tracking-[0.22em] text-[#C9A84C]">
                Scan To Verify
              </p>

              <p className="mt-1 text-[7px] font-bold uppercase tracking-[0.2em] text-[#7A6840]">
                Asset ID
              </p>

              <p className="text-[9px] font-bold text-[#E8DEC8]">{asset.serial}</p>
            </div>
          </header>

          <section className="mt-3 grid grid-cols-2 gap-3 rounded-xl border border-[#2A2318] bg-[#0F0F0F] p-3">
            <div>
              <h1 className="font-serif text-lg font-bold leading-tight text-[#F5F0E8]">
                Certificate of Authenticity & Ownership
              </h1>

              <p className="mt-2 text-[11px] leading-relaxed text-[#A89878]">
                This document certifies that this asset is an original{" "}
                <strong className="text-[#E8DEC8]">{asset.product_name}</strong>, produced by{" "}
                <strong className="text-[#E8DEC8]">Old Tom Gin Company Ltd</strong> and verified inside the{" "}
                <strong className="text-[#E8DEC8]">E.L.Y.A.S-A.I. Digital Certification Framework</strong>.
              </p>

              <div className="mt-2 rounded-lg border border-[#2A2318] bg-[#080808] p-2">
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#C9A84C]">
                  Authenticity Confirmed
                </p>

                <p className="mt-1 text-sm font-bold text-[#6FAE7A]">
                  100% Original
                </p>
              </div>
            </div>

            <div className="border-l border-[#2A2318] pl-4">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C9A84C]">
                Certified Owner
              </p>

              <h2 className="mt-3 font-serif text-3xl uppercase leading-tight text-[#C9A84C]">
                {ownerName}
              </h2>

              <p className="mt-3 text-[11px] leading-relaxed text-[#A89878]">
                {claim
                  ? "Ownership verified and recorded inside the E.L.Y.A.S-A.I. certification registry."
                  : "This certified asset is awaiting ownership registration."}
              </p>
            </div>
          </section>

          <section className="mt-2 grid grid-cols-2 gap-3">
            <Card title="Asset Identity">
              <Row label="Asset ID" value={asset.serial} />
              <Row label="Product Class" value={asset.product_name} />
              <Row label="Edition" value={asset.edition_name} />
              <Row label="Cask" value={asset.cask_code ?? "-"} />
              <Row
                label="Bottle"
                value={`${asset.bottle_number} of ${asset.total_in_series}`}
              />
              <Row label="Type" value={asset.bottle_type} />
              <Row label="Size" value={`${asset.size_ml} ml`} />
              <Row label="Event" value={asset.event_name ?? "-"} />
            </Card>

            <Card title="Certification">
              <Row label="Producer" value="Old Tom Gin Company Ltd" />
              <Row label="Status" value="ACTIVE" accent />
              <Row label="Verified By" value="E.L.Y.A.S-A.I." />
              <Row label="Certificate ID" value={certificateId} />
              <Row label="Integrity" value="PASSED" accent />
              <Row label="Passport" value="LIVE" accent />
            </Card>
          </section>

          <section className="mt-2 rounded-xl border border-[#2A2318] bg-[#0F0F0F] p-3">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C9A84C]">
              Certified Supply Chain
            </p>

            <div className="mt-2 grid grid-cols-6 overflow-hidden rounded-lg border border-[#2A2318] text-center text-[9px]">
              <ChainStep title="Producer" value="Old Tom Gin Company Ltd" />
              <ChainStep title="Product" value={asset.product_name} />
              <ChainStep title="Cask" value={asset.cask_code ?? "-"} />
              <ChainStep
                title="Asset"
                value={`${asset.serial} ${asset.bottle_number}/${asset.total_in_series}`}
              />
              <ChainStep title="Owner" value={ownerName} />
              <ChainStep title="Certification" value="Active" />
            </div>
          </section>

          <section className="mt-2 rounded-xl border border-[#2A2318] bg-[#0F0F0F] p-3 text-center">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C9A84C]">
              E.L.Y.A.S-A.I. Verification Seal
            </p>

            <div className="mt-2 grid grid-cols-[1fr_90px_1fr] items-end gap-4">
              <div className="text-left">
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#C9A84C]">
                  Certified Producer
                </p>

                <div className="mt-5 border-t border-[#5A4A28] pt-1">
                  <p className="font-serif text-sm text-[#F5F0E8]">Old Tom Gin Company Ltd</p>
                  <p className="text-[8px] text-[#7A6840]">Producer Signature</p>
                </div>
              </div>

              <div className="text-center">
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-[#C9A84C] text-center text-[#C9A84C]">
                  <div className="absolute inset-[3px] rounded-full border border-[#5A4A28]" />
                  <div className="relative">
                    <div className="text-[8px] font-bold">E.L.Y.A.S-A.I.</div>
                    <div className="mt-1 text-[6px] uppercase tracking-[0.16em]">
                      Verified
                    </div>
                  </div>
                </div>

                <p className="mt-2 text-xl font-bold text-[#6FAE7A]">
                  AUTHENTIC
                </p>

                <p className="text-[8px] uppercase tracking-[0.18em] text-[#A89878]">
                  {claim
                    ? "Ownership Confirmed"
                    : "Awaiting Ownership Registration"}
                </p>
              </div>

              <div className="text-right">
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#C9A84C]">
                  Verified By
                </p>

                <div className="mt-5 border-t border-[#5A4A28] pt-1">
                  <p className="font-serif text-sm text-[#F5F0E8]">E.L.Y.A.S-A.I.</p>
                  <p className="text-[8px] text-[#7A6840]">Certification Authority</p>
                </div>
              </div>
            </div>
          </section>

          <footer className="mt-2 text-center">
            <p className="text-[8px] text-[#7A6840]">Verify this certificate at: {verifyUrl}</p>

            <p className="mt-1 text-[10px] font-bold text-[#C9A84C]">
              This digital passport is your proof of authenticity, ownership and
              certification.
            </p>
          </footer>
        </div>
      </div>

      <div className="no-print mt-5 text-center">
        <PrintCertificateButton />
      </div>
    </main>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[#2A2318] bg-[#0F0F0F] p-3">
      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C9A84C]">
        {title}
      </p>

      <div className="mt-2 space-y-1">{children}</div>
    </div>
  );
}

function Row({
  label,
  value,
  accent,
}: {
  label: string;
  value: string | number;
  accent?: boolean;
}) {
  return (
    <div className="grid grid-cols-[100px_1fr] border-b border-[#1C1810] pb-[2px] text-[10px]">
      <p className="font-semibold text-[#7A6840]">{label}</p>
      <p className={`break-words font-semibold ${accent ? "text-[#6FAE7A]" : "text-[#E8DEC8]"}`}>
        {value}
      </p>
    </div>
  );
}

function ChainStep({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div className="border-r border-[#2A2318] p-2 last:border-r-0">
      <p className="font-bold uppercase tracking-[0.1em] text-[#C9A84C]">
        {title}
      </p>

      <p className="mt-1 font-semibold leading-tight text-[#E8DEC8]">{value}</p>
    </div>
  );
}
