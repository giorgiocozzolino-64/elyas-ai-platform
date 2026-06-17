// app/verify/[asset_id]/page.tsx — v1.2 — ELYAS dark/gold theme

import Link from "next/link";
import { supabaseAdmin } from "@/lib/supabase/admin";
export const dynamic = "force-dynamic";

type VerifyPageProps = {
  params: Promise<{
    asset_id: string;
  }>;
};

export default async function VerifyPage({ params }: VerifyPageProps) {
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
      <main className="min-h-screen bg-[#080808] text-[#F5F0E8]">
        <div className="mx-auto max-w-4xl px-8 py-20">
          <h1 className="text-5xl font-bold">Asset Not Found</h1>

          <p className="mt-6 text-[#A89878]">
            No certified asset found for: {serial}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#080808] text-[#F5F0E8]">
      <div className="mx-auto max-w-4xl px-8 py-20">
        <div className="rounded-[2rem] border border-[#2A2318] bg-[#0F0F0F] p-12 text-center">
          <div className="mx-auto flex w-full max-w-[320px] flex-col items-center justify-center gap-2 rounded-xl border border-[#2A2318] bg-[#E8DEC8] px-6 py-6">
            <p className="flex items-center gap-2 whitespace-nowrap font-serif text-3xl font-bold leading-none text-[#0F0F0F]">
              <span className="text-[0.5em] text-[#A8842E]">•(((•</span>
              E.L.Y.A.S-A.I.
              <span className="text-[0.5em] text-[#A8842E]">•)))•</span>
            </p>
            <div className="flex w-[78%] items-center gap-2">
              <span className="h-px flex-1 bg-[#A8842E]" />
              <span className="h-1.5 w-1.5 rotate-45 bg-[#A8842E]" />
              <span className="h-px flex-1 bg-[#A8842E]" />
            </div>
            <p className="px-2 text-center text-[11px] font-medium leading-[1.4] text-[#3A3020]">
              Enhanced Living Systems through Acoustic Stimulation — Artisanal Intelligence
            </p>
          </div>

          <p className="mt-6 uppercase tracking-[0.4em] text-[#C9A84C]">
            Digital Certification Authority
          </p>

          <h1 className="mt-6 text-6xl font-bold font-serif">PINKGLOW GIN</h1>

          <p className="mt-4 text-xl text-[#A89878]">Asset Verification</p>

          <div className="mt-10">
            <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-4 border-[#6FAE7A] text-[#6FAE7A]">
              ✓
            </div>

            <h2 className="mt-8 text-4xl font-bold text-[#6FAE7A]">
              AUTHENTIC
            </h2>

            <p className="mt-4 text-[#A89878]">
              This product exists inside the E.L.Y.A.S-A.I. Certification
              Registry.
            </p>
          </div>

          <div className="mt-12 rounded-3xl border border-[#2A2318] bg-[#080808] p-8 text-left">
            <Info label="Asset ID" value={asset.serial} />
            <Info label="Producer" value="Old Tom Gin Company Ltd" />
            <Info label="Product" value={asset.product_name} />
            <Info label="Edition" value={asset.edition_name} />
            <Info
              label="Bottle"
              value={`${asset.bottle_number} / ${asset.total_in_series}`}
            />
            <Info label="Cask / Batch" value={asset.cask_code ?? "-"} />
          </div>

          {claim ? (
            <div className="mt-12">
              <div className="rounded-3xl border border-[#2E4A33] bg-[#6FAE7A]/10 p-8">
                <p className="uppercase tracking-[0.3em] text-[#6FAE7A]">
                  Ownership Verified
                </p>

                <h3 className="mt-4 text-3xl font-bold text-[#F5F0E8]">
                  {claim.owner_name}
                </h3>
              </div>

              <Link
                href={`/certificate/${asset.serial}`}
                className="mt-10 inline-block rounded-2xl bg-[#C9A84C] px-8 py-4 font-bold text-[#080808] hover:bg-[#D5B85A]"
              >
                VIEW DIGITAL CERTIFICATE
              </Link>
            </div>
          ) : (
            <div className="mt-12">
              <div className="rounded-3xl border border-[#4A3F1E] bg-[#C9A84C]/10 p-8">
                <p className="uppercase tracking-[0.3em] text-[#D5B85A]">
                  Awaiting Registration
                </p>

                <p className="mt-4 text-lg text-[#E8DEC8]">
                  This certified asset has not yet been registered to an owner.
                </p>
              </div>

              <Link
                href={`/claim/${asset.serial}`}
                className="mt-10 inline-block rounded-2xl bg-[#C9A84C] px-8 py-4 font-bold text-[#080808] hover:bg-[#D5B85A]"
              >
                CLAIM THIS ASSET
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="mb-4">
      <p className="text-xs uppercase tracking-[0.25em] text-[#7A6840]">
        {label}
      </p>

      <p className="mt-2 text-lg font-semibold text-[#E8DEC8]">{value}</p>
    </div>
  );
}
