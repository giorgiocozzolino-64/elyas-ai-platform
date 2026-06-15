// app/companies/old-tom-gin-company/fife-negroni/page.tsx — v1.0 — 15/06/2026

import Link from "next/link";

export default function FifeNegroniProductPage() {
  return (
    <main className="min-h-screen bg-black px-8 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="uppercase tracking-[0.4em] text-pink-400">
          Old Tom Gin Company Ltd
        </p>

        <h1 className="mt-6 text-6xl font-bold">Fife Negroni 2026</h1>

        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-zinc-400">
          Event archive collection and ownership registry for the Fife Negroni
          2026 limited release, connected to the E.L.Y.A.S-A.I. certification
          framework.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Badge>Archive Collection</Badge>
          <Badge>Limited Edition</Badge>
          <Badge>Ownership Registry</Badge>
          <Badge>E.L.Y.A.S-A.I. Certified</Badge>
        </div>

        <section className="mt-16 grid gap-6 md:grid-cols-4">
          <Card title="Certified Assets" value="60" />
          <Card title="Product Class" value="Negroni" />
          <Card title="Status" value="Archive" />
          <Card title="Registry" value="Active" />
        </section>

        <section className="mt-16 rounded-3xl border border-pink-300/20 bg-white/5 p-8">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Product Identity
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Info label="Producer" value="Old Tom Gin Company Ltd" />
            <Info label="Product" value="Fife Negroni 2026" />
            <Info label="Category" value="Cask Aged Negroni" />
            <Info label="Edition" value="Fife Chamber 2026 Event Edition" />
            <Info label="Bottle Format" value="100 ml Event Miniature" />
            <Info label="Certification Layer" value="E.L.Y.A.S-A.I." />
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-pink-300/20 bg-white/5 p-8">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Certified Story
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-zinc-300">
            Fife Negroni 2026 represents an archived event collection designed
            to demonstrate certified ownership, limited release tracking and
            digital product identity through the E.L.Y.A.S-A.I. framework.
          </p>
        </section>

        <section className="mt-16 rounded-3xl border border-pink-300/20 bg-white/5 p-8">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Registry Functions
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <FunctionCard title="Asset Certification" />
            <FunctionCard title="Ownership Records" />
            <FunctionCard title="Event Archive" />
          </div>
        </section>

        <div className="mt-16 flex flex-wrap gap-4">
          <Link
            href="/portal/old-tom-gin-company"
            className="inline-block rounded-2xl bg-pink-600 px-8 py-4 font-bold text-white hover:bg-pink-500"
          >
            Back to Old Tom Portal
          </Link>

          <Link
            href="/dashboard"
            className="inline-block rounded-2xl border border-pink-400/40 px-8 py-4 font-bold text-pink-200 hover:bg-white/5"
          >
            E.L.Y.A.S-A.I. Dashboard
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

function FunctionCard({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
      <h3 className="text-xl font-bold">{title}</h3>

      <p className="mt-4 text-sm text-zinc-400">
        Registered inside the E.L.Y.A.S-A.I. certification framework.
      </p>
    </div>
  );
}