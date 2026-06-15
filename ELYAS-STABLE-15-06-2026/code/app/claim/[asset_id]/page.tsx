// app/claim/[asset_id]/page.tsx — v1.6 SAFE DEPLOY — 15/06/2026

import Link from "next/link";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type ClaimPageProps = {
  params: Promise<{
    asset_id: string;
  }>;
};

export default async function ClaimPage({ params }: ClaimPageProps) {
  const { asset_id } = await params;
  const serial = decodeURIComponent(asset_id);

  return (
    <main className="min-h-screen bg-black px-8 py-20 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="uppercase tracking-[0.4em] text-pink-400">
          E.L.Y.A.S-A.I. Ownership Registration
        </p>

        <h1 className="mt-6 text-5xl font-bold">Claim Certified Asset</h1>

        <p className="mt-6 text-xl leading-relaxed text-zinc-400">
          Ownership registration for certified asset{" "}
          <span className="font-bold text-white">{serial}</span>.
        </p>

        <section className="mt-12 rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-8">
          <p className="uppercase tracking-[0.3em] text-yellow-400">
            Registration Temporarily Assisted
          </p>

          <p className="mt-6 text-lg leading-relaxed text-zinc-300">
            This asset is part of the E.L.Y.A.S-A.I. launch deployment. During
            the live deployment phase, ownership claims are completed through
            the certified producer administration panel.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-zinc-300">
            The verification and digital certificate systems remain fully
            operational.
          </p>
        </section>

        <section className="mt-8 rounded-3xl border border-pink-300/20 bg-white/5 p-8">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Asset Reference
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Info label="Asset ID" value={serial} />
            <Info label="Product" value="Pinkglow Gin" />
            <Info label="Producer" value="Old Tom Gin Company Ltd" />
            <Info label="Framework" value="E.L.Y.A.S-A.I." />
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href={`/verify/${serial}`}
            className="rounded-2xl bg-pink-600 px-8 py-4 font-bold text-white hover:bg-pink-500"
          >
            Back to Verification
          </Link>

          <Link
            href={`/certificate/${serial}`}
            className="rounded-2xl border border-pink-400/40 px-8 py-4 font-bold text-pink-200 hover:bg-white/5"
          >
            View Certificate
          </Link>
        </div>
      </div>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
        {label}
      </p>

      <p className="mt-2 text-lg font-semibold">{value}</p>
    </div>
  );
}