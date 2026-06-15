// app/products/page.tsx — v1.0 — 15/06/2026

import Link from "next/link";

const products = [
  {
    name: "Pinkglow Gin",
    href: "/portal/old-tom-gin-company/pinkglow-gin",
    producer: "Old Tom Gin Company Ltd",
    status: "LIVE",
    assets: "250 Certified Assets",
    description:
      "Digital passport ecosystem with ownership, geolocation and certification intelligence.",
  },
  {
    name: "Fife Negroni 2026",
    href: "/companies/old-tom-gin-company/fife-negroni",
    producer: "Old Tom Gin Company Ltd",
    status: "ARCHIVE",
    assets: "60 Certified Assets",
    description:
      "Event archive collection and ownership registry connected to E.L.Y.A.S-A.I.",
  },
  {
    name: "Sea Malt On Primeur",
    href: "/products",
    producer: "Arbroath A.D.1320 Ltd",
    status: "IN DEVELOPMENT",
    assets: "250 Planned Assets",
    description:
      "Future subsea maturation and certified digital ownership programme.",
  },
  {
    name: "Quadriga Cask",
    href: "/companies/of-whisky-atelier",
    producer: "OF Whisky Atelier Ltd",
    status: "CONCEPT",
    assets: "Limited Release Planned",
    description:
      "Luxury whisky atelier cask concept prepared for future certification.",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-black px-8 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="uppercase tracking-[0.4em] text-pink-400">
          E.L.Y.A.S-A.I. Product Registry
        </p>

        <h1 className="mt-6 text-6xl font-bold">Certified Products</h1>

        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-zinc-400">
          Registry of certified product classes, digital passports and future
          product certification programmes managed through the E.L.Y.A.S-A.I.
          framework.
        </p>

        <section className="mt-16 grid gap-6 md:grid-cols-4">
          <Metric title="Product Classes" value="4" />
          <Metric title="Live Products" value="1" />
          <Metric title="Certified Assets" value="310" />
          <Metric title="Framework" value="ACTIVE" />
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="rounded-3xl border border-pink-300/20 bg-white/5 p-8 transition hover:border-pink-400/60 hover:bg-white/10"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h2 className="text-3xl font-bold">{product.name}</h2>

                  <p className="mt-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
                    {product.producer}
                  </p>
                </div>

                <span className="rounded-full border border-pink-400/30 bg-pink-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-pink-200">
                  {product.status}
                </span>
              </div>

              <p className="mt-6 text-zinc-400">{product.description}</p>

              <p className="mt-6 font-bold text-pink-300">
                {product.assets}
              </p>
            </Link>
          ))}
        </section>

        <div className="mt-16 flex flex-wrap gap-4">
          <Link
            href="/dashboard"
            className="inline-block rounded-2xl bg-pink-600 px-8 py-4 font-bold text-white hover:bg-pink-500"
          >
            Back to Dashboard
          </Link>

          <Link
            href="/assets"
            className="inline-block rounded-2xl border border-pink-400/40 px-8 py-4 font-bold text-pink-200 hover:bg-white/5"
          >
            View Asset Registry
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