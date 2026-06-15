// app/assets/page.tsx — v1.6 CLEAN — 15/06/2026

import Link from "next/link";

export default function AssetsPage() {
  return (
    <main className="min-h-screen bg-black px-8 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="uppercase tracking-[0.4em] text-pink-400">
          E.L.Y.A.S-A.I. Asset Registry
        </p>

        <h1 className="mt-6 text-6xl font-bold">Certified Assets</h1>

        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-zinc-400">
          Live asset registry for certified Pinkglow Gin bottles issued inside
          the E.L.Y.A.S-A.I. certification framework.
        </p>

        <section className="mt-12 grid gap-6 md:grid-cols-4">
          <Metric title="Total Assets" value="250" />
          <Metric title="Product Class" value="Pinkglow Gin" />
          <Metric title="Verification" value="LIVE" />
          <Metric title="Registry" value="ACTIVE" />
        </section>

        <section className="mt-16 rounded-3xl border border-pink-300/20 bg-white/5 p-8">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Certified Asset
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            <Info label="Asset ID" value="PG-FC26-001" />
            <Info label="Product" value="Pinkglow Gin" />
            <Info label="Owner" value="Giorgio Cozzolino" />
            <Info label="Status" value="Certified" />
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/verify/PG-FC26-001"
              className="rounded-2xl bg-pink-600 px-8 py-4 font-bold text-white hover:bg-pink-500"
            >
              Verify Asset
            </Link>

            <Link
              href="/certificate/PG-FC26-001"
              className="rounded-2xl border border-pink-400/40 px-8 py-4 font-bold text-pink-200 hover:bg-white/5"
            >
              View Certificate
            </Link>
          </div>
        </section>

        <div className="mt-16">
          <Link
            href="/dashboard"
            className="inline-block rounded-2xl bg-pink-600 px-8 py-4 font-bold text-white hover:bg-pink-500"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}

function Metric({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-3xl border border-pink-300/20 bg-white/5 p-8">
      <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
        {title}
      </p>

      <p className="mt-4 text-3xl font-bold text-pink-300">{value}</p>
    </div>
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