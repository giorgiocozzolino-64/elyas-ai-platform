// app/dashboard/page.tsx — v1.5 SAFE DEPLOY — 15/06/2026

import Link from "next/link";

export const dynamic = "force-dynamic";

const integrations = [
  { name: "Oracle NetSuite", status: "CONNECTED" },
  { name: "Supabase", status: "CONNECTED" },
  { name: "Vercel", status: "LIVE" },
  { name: "SAP", status: "PLANNED" },
  { name: "Microsoft Dynamics", status: "PLANNED" },
];

const companyModules = [
  {
    name: "Old Tom Gin Company Ltd",
    href: "/companies/old-tom-gin-company",
    description: "Premium spirits producer and live digital passport operator.",
    status: "ACTIVE",
  },
  {
    name: "Arbroath A.D.1320 Ltd",
    href: "/companies/arbroath-ad1320",
    description: "Luxury whisky maison and certified maturation framework.",
    status: "IN DEVELOPMENT",
  },
  {
    name: "OF Whisky Atelier Ltd",
    href: "/companies/of-whisky-atelier",
    description: "Luxury whisky atelier and bespoke collection development.",
    status: "REGISTERED",
  },
  {
    name: "Mc Fratm Ltd",
    href: "/companies/mc-fratm",
    description: "Premium food, hospitality and lifestyle product producer.",
    status: "REGISTERED",
  },
];

const productClasses = [
  {
    name: "Pinkglow Gin",
    href: "/portal/old-tom-gin-company/pinkglow-gin",
    producer: "Old Tom Gin Company Ltd",
    assets: "250",
    status: "LIVE",
  },
  {
    name: "Fife Negroni 2026",
    href: "/companies/old-tom-gin-company/fife-negroni",
    producer: "Old Tom Gin Company Ltd",
    assets: "60",
    status: "ARCHIVE",
  },
  {
    name: "Sea Malt On Primeur",
    href: "/products",
    producer: "Arbroath A.D.1320 Ltd",
    assets: "250 planned",
    status: "IN DEVELOPMENT",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black px-8 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="uppercase tracking-[0.4em] text-pink-400">
          E.L.Y.A.S-A.I. Certification Authority
        </p>

        <h1 className="mt-6 text-6xl font-bold">
          Certification Dashboard
        </h1>

        <p className="mt-6 max-w-4xl text-xl leading-relaxed text-zinc-400">
          Executive control layer for certified product identity, ownership,
          verification and producer ecosystems.
        </p>

        <section className="mt-12 grid gap-6 md:grid-cols-4">
          <Metric title="Certified Projects" value="5" />
          <Metric title="Certified Assets" value="310+" />
          <Metric title="Registered Owners" value="LIVE" />
          <Metric title="Certification Status" value="ACTIVE" />
        </section>

        <section className="mt-16 rounded-3xl border border-pink-300/20 bg-white/5 p-8">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Platform Integrations
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="rounded-2xl border border-white/10 bg-black/30 p-5"
              >
                <p className="font-bold">{integration.name}</p>

                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-pink-400">
                  {integration.status}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Certified Producers
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {companyModules.map((company) => (
              <Link
                key={company.name}
                href={company.href}
                className="rounded-3xl border border-pink-300/20 bg-white/5 p-8 transition hover:border-pink-400/60 hover:bg-white/10"
              >
                <div className="flex items-start justify-between gap-6">
                  <h2 className="text-3xl font-bold">{company.name}</h2>

                  <span className="rounded-full border border-pink-400/30 bg-pink-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-pink-200">
                    {company.status}
                  </span>
                </div>

                <p className="mt-6 text-zinc-400">{company.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Product Classes
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {productClasses.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="rounded-3xl border border-pink-300/20 bg-white/5 p-8 transition hover:border-pink-400/60 hover:bg-white/10"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                  {product.producer}
                </p>

                <h2 className="mt-4 text-3xl font-bold">{product.name}</h2>

                <p className="mt-6 text-pink-300">
                  {product.assets} Certified Assets
                </p>

                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-pink-400">
                  {product.status}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-pink-300/20 bg-white/5 p-8">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Quick Access
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <QuickLink href="/assets" label="Asset Registry" />
            <QuickLink href="/owners" label="Owner Registry" />
            <QuickLink href="/products" label="Product Registry" />
            <QuickLink href="/verify/PG-FC26-001" label="Verify Demo Asset" />
            <QuickLink
              href="/certificate/PG-FC26-001"
              label="Demo Certificate"
            />
          </div>
        </section>
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

function QuickLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="rounded-2xl border border-pink-400/40 px-6 py-4 font-bold text-pink-200 hover:bg-white/5"
    >
      {label} →
    </Link>
  );
}