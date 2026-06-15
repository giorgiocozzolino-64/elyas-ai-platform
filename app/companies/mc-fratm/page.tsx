// app/companies/mc-fratm/page.tsx — v1.0 — 15/06/2026

import Link from "next/link";

export default function McFratmCompanyPage() {
  return (
    <main className="min-h-screen bg-black px-8 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="uppercase tracking-[0.4em] text-pink-400">
          E.L.Y.A.S-A.I. Certified Producer
        </p>

        <h1 className="mt-6 text-6xl font-bold">Mc Fratm Ltd</h1>

        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-zinc-400">
          Certified producer profile for Mc Fratm Ltd, a premium food,
          hospitality and lifestyle project connected to Neapolitan culture,
          certified product identity and future E.L.Y.A.S-A.I. traceability.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Badge>Certified Producer</Badge>
          <Badge>Food & Beverage</Badge>
          <Badge>Digital Traceability Ready</Badge>
          <Badge>E.L.Y.A.S-A.I. Registered</Badge>
        </div>

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          <Card title="Company Status" value="ACTIVE" />
          <Card title="Certification Role" value="Producer" />
          <Card title="Framework" value="E.L.Y.A.S-A.I." />
        </section>

        <section className="mt-16 rounded-3xl border border-pink-300/20 bg-white/5 p-8">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Producer Identity
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Info label="Company" value="Mc Fratm Ltd" />
            <Info label="Role" value="Certified Producer" />
            <Info label="Sector" value="Premium Food & Beverage" />
            <Info label="Status" value="Registered" />
            <Info label="Certification Layer" value="E.L.Y.A.S-A.I." />
            <Info label="Product Scope" value="Food, hospitality and lifestyle products" />
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-pink-300/20 bg-white/5 p-8">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Future Product Classes
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Product name="Premium Salmon" status="Planned" />
            <Product name="Baccalà" status="Planned" />
            <Product name="Neapolitan Food Products" status="Planned" />
          </div>
        </section>

        <div className="mt-16">
          <Link
            href="/dashboard"
            className="inline-block rounded-2xl bg-pink-600 px-8 py-4 font-bold text-white hover:bg-pink-500"
          >
            Back to E.L.Y.A.S-A.I. Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-pink-400/30 bg-pink-500/10 px-4 py-2 text-sm font-semibold text-pink-200">
      {children}
    </span>
  );
}

function Card({ title, value }: { title: string; value: string }) {
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

function Product({ name, status }: { name: string; status: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
      <h3 className="text-xl font-bold">{name}</h3>

      <p className="mt-4 text-sm uppercase tracking-[0.25em] text-pink-400">
        {status}
      </p>
    </div>
  );
}