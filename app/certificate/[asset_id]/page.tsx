// app/certificate/[asset_id]/page.tsx — v1.4 — 15/06/2026

import QRCode from "qrcode";
import { supabaseAdmin } from "@/lib/supabase/admin";
import PrintCertificateButton from "@/app/components/PrintCertificateButton";

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
      <main className="min-h-screen bg-black px-6 py-12 text-white">
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
      dark: "#000000",
      light: "#ffffff",
    },
  });

  return (
    <main className="min-h-screen bg-black px-4 py-6 text-black print:bg-white print:p-0">
      <style>{`
        @page {
          size: A4 portrait;
          margin: 6mm;
        }

        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
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

      <div className="certificate relative mx-auto max-w-[880px] overflow-hidden rounded-2xl border-[3px] border-pink-500 bg-[#fffaf3] p-4 shadow-2xl">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.035]">
          <img
            src="/elyas-logo.png"
            alt="E.L.Y.A.S-A.I. Watermark"
            className="w-[640px] rotate-[-12deg]"
          />
        </div>

        <div className="relative z-10">
          <header className="grid grid-cols-[115px_1fr_115px] items-start gap-3">
            <div className="text-center">
              <img
                src="/elyas-logo.png"
                alt="E.L.Y.A.S-A.I."
                className="mx-auto h-20 w-auto object-contain"
              />

              <p className="mt-1 text-[7px] font-bold uppercase tracking-[0.2em] text-pink-600">
                Certification Authority
              </p>
            </div>

            <div className="text-center">
              <p className="font-serif text-3xl font-bold tracking-[0.12em]">
                PINKGLOW GIN
              </p>

              <p className="mt-1 text-xs font-bold uppercase tracking-[0.24em] text-pink-600">
                Digital Product Passport
              </p>

              <p className="mt-1 text-[10px]">
                Certified by E.L.Y.A.S-A.I. | Digital Certification Framework
              </p>

              <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-pink-600">
                Certificate No.
              </p>

              <p className="text-[10px] font-bold">{certificateId}</p>
            </div>

            <div className="text-center">
              <div className="rounded-lg border border-pink-300 bg-white p-2">
                <img
                  src={qrDataUrl}
                  alt={`Verification QR for ${asset.serial}`}
                  className="mx-auto h-18 w-18"
                />
              </div>

              <p className="mt-1 text-[7px] font-bold uppercase tracking-[0.22em] text-pink-600">
                Scan To Verify
              </p>

              <p className="mt-1 text-[7px] font-bold uppercase tracking-[0.2em] text-pink-600">
                Asset ID
              </p>

              <p className="text-[9px] font-bold">{asset.serial}</p>
            </div>
          </header>

          <section className="mt-3 grid grid-cols-2 gap-3 rounded-xl border border-pink-200 bg-white/70 p-3">
            <div>
              <h1 className="font-serif text-lg font-bold leading-tight">
                Certificate of Authenticity & Ownership
              </h1>

              <p className="mt-2 text-[11px] leading-relaxed">
                This document certifies that this asset is an original{" "}
                <strong>{asset.product_name}</strong>, produced by{" "}
                <strong>Old Tom Gin Company Ltd</strong> and verified inside the{" "}
                <strong>E.L.Y.A.S-A.I. Digital Certification Framework</strong>.
              </p>

              <div className="mt-2 rounded-lg bg-pink-50 p-2">
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-pink-600">
                  Authenticity Confirmed
                </p>

                <p className="mt-1 text-sm font-bold text-green-700">
                  100% Original
                </p>
              </div>
            </div>

            <div className="border-l border-pink-200 pl-4">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-pink-600">
                Certified Owner
              </p>

              <h2 className="mt-3 font-serif text-3xl uppercase leading-tight">
                {ownerName}
              </h2>

              <p className="mt-3 text-[11px] leading-relaxed">
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
              <Row label="Status" value="ACTIVE" />
              <Row label="Verified By" value="E.L.Y.A.S-A.I." />
              <Row label="Certificate ID" value={certificateId} />
              <Row label="Integrity" value="PASSED" />
              <Row label="Passport" value="LIVE" />
            </Card>
          </section>

          <section className="mt-2 rounded-xl border border-pink-200 bg-white/70 p-3">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-pink-600">
              Certified Supply Chain
            </p>

            <div className="mt-2 grid grid-cols-6 overflow-hidden rounded-lg border border-pink-100 text-center text-[9px]">
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

          <section className="mt-2 rounded-xl border border-pink-200 bg-white/70 p-3 text-center">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-pink-600">
              E.L.Y.A.S-A.I. Verification Seal
            </p>

            <div className="mt-2 grid grid-cols-[1fr_90px_1fr] items-end gap-4">
              <div className="text-left">
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-pink-600">
                  Certified Producer
                </p>

                <div className="mt-5 border-t border-black pt-1">
                  <p className="font-serif text-sm">Old Tom Gin Company Ltd</p>
                  <p className="text-[8px]">Producer Signature</p>
                </div>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-pink-500 text-center text-pink-600">
                  <div>
                    <div className="text-[8px] font-bold">E.L.Y.A.S-A.I.</div>
                    <div className="mt-1 text-[6px] uppercase tracking-[0.16em]">
                      Verified
                    </div>
                  </div>
                </div>

                <p className="mt-2 text-xl font-bold text-green-700">
                  AUTHENTIC
                </p>

                <p className="text-[8px] uppercase tracking-[0.18em]">
                  {claim
                    ? "Ownership Confirmed"
                    : "Awaiting Ownership Registration"}
                </p>
              </div>

              <div className="text-right">
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-pink-600">
                  Verified By
                </p>

                <div className="mt-5 border-t border-black pt-1">
                  <p className="font-serif text-sm">E.L.Y.A.S-A.I.</p>
                  <p className="text-[8px]">Certification Authority</p>
                </div>
              </div>
            </div>
          </section>

          <footer className="mt-2 text-center">
            <p className="text-[8px]">Verify this certificate at: {verifyUrl}</p>

            <p className="mt-1 text-[10px] font-bold text-pink-600">
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
    <div className="rounded-xl border border-pink-200 bg-white/70 p-3">
      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-pink-600">
        {title}
      </p>

      <div className="mt-2 space-y-1">{children}</div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="grid grid-cols-[100px_1fr] border-b border-pink-100 pb-[2px] text-[10px]">
      <p className="font-semibold">{label}</p>
      <p className="break-words">{value}</p>
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
    <div className="border-r border-pink-100 p-2 last:border-r-0">
      <p className="font-bold uppercase tracking-[0.1em] text-pink-600">
        {title}
      </p>

      <p className="mt-1 font-semibold leading-tight">{value}</p>
    </div>
  );
}