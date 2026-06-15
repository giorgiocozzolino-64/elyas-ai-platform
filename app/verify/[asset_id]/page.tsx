// app/verify/[asset_id]/page.tsx — v1.1 — 15/06/2026

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
      <main className="min-h-screen bg-black text-white">
        <div className="mx-auto max-w-4xl px-8 py-20">
          <h1 className="text-5xl font-bold">Asset Not Found</h1>

          <p className="mt-6 text-zinc-400">
            No certified asset found for: {serial}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-8 py-20">
        <div className="rounded-[2rem] border border-pink-500/30 bg-white/5 p-12 text-center">
          <img
            src="/elyas-logo.png"
            alt="E.L.Y.A.S-A.I."
            className="mx-auto h-24 w-auto object-contain"
          />

          <p className="mt-6 uppercase tracking-[0.4em] text-pink-400">
            Digital Certification Authority
          </p>

          <h1 className="mt-6 text-6xl font-bold">PINKGLOW GIN</h1>

          <p className="mt-4 text-xl text-zinc-400">Asset Verification</p>

          <div className="mt-10">
            <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-4 border-green-500 text-green-400">
              ✓
            </div>

            <h2 className="mt-8 text-4xl font-bold text-green-400">
              AUTHENTIC
            </h2>

            <p className="mt-4 text-zinc-400">
              This product exists inside the E.L.Y.A.S-A.I. Certification
              Registry.
            </p>
          </div>

          <div className="mt-12 rounded-3xl border border-white/10 bg-black/30 p-8 text-left">
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
              <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
                <p className="uppercase tracking-[0.3em] text-green-400">
                  Ownership Verified
                </p>

                <h3 className="mt-4 text-3xl font-bold">
                  {claim.owner_name}
                </h3>
              </div>

              <Link
                href={`/certificate/${asset.serial}`}
                className="mt-10 inline-block rounded-2xl bg-pink-600 px-8 py-4 font-bold text-white hover:bg-pink-500"
              >
                VIEW DIGITAL CERTIFICATE
              </Link>
            </div>
          ) : (
            <div className="mt-12">
              <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-8">
                <p className="uppercase tracking-[0.3em] text-yellow-400">
                  Awaiting Registration
                </p>

                <p className="mt-4 text-lg">
                  This certified asset has not yet been registered to an owner.
                </p>
              </div>

              <Link
                href={`/claim/${asset.serial}`}
                className="mt-10 inline-block rounded-2xl bg-pink-600 px-8 py-4 font-bold text-white hover:bg-pink-500"
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
      <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
        {label}
      </p>

      <p className="mt-2 text-lg font-semibold">{value}</p>
    </div>
  );
}