import Link from "next/link";

const metrics = [
  { title: "Certified Companies", value: "4" },
  { title: "Certified Products", value: "5" },
  { title: "Certified Assets", value: "310" },
  { title: "Registered Owners", value: "8" },
  { title: "ERP Integrations", value: "1" },
  { title: "Certification Status", value: "ACTIVE" },
];

const modules = [
  {
    title: "Certified Companies",
    description:
      "Verified producers, maisons, ateliers and technology companies.",
    href: "/companies",
  },
  {
    title: "Certified Products",
    description:
      "Digital passports for spirits, whisky, food and luxury products.",
    href: "/products",
  },
  {
    title: "Certified Assets",
    description:
      "Bottles, casks, collections and registered premium assets.",
    href: "/assets",
  },
  {
    title: "Registered Owners",
    description:
      "Ownership registry, transfers, certificates and collector records.",
    href: "/owners",
  },
];

const integrations = [
  { name: "Oracle NetSuite", status: "CONNECTED" },
  { name: "SAP", status: "PLANNED" },
  { name: "Microsoft Dynamics", status: "PLANNED" },
  { name: "Shopify", status: "PLANNED" },
  { name: "Zucchetti", status: "PLANNED" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <p className="uppercase tracking-[0.4em] text-pink-400">
          Digital Certification Authority
        </p>

        <h1 className="mt-6 max-w-5xl text-6xl font-bold leading-tight">
          E.L.Y.A.S-A.I. 2.0
        </h1>

        <p className="mt-6 max-w-4xl text-xl leading-relaxed text-zinc-400">
          The digital trust layer for premium food, beverage, spirits and luxury
          products. Certifying provenance, ownership, maturation, authenticity
          and product intelligence.
        </p>

        <div className="mt-10 rounded-3xl border border-pink-300/20 bg-white/5 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Core Manifesto
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Every certified product has a story.
          </h2>

          <p className="mt-4 max-w-5xl text-zinc-400">
            Every bottle, every cask, every ingredient and every journey leaves a
            trace. E.L.Y.A.S-A.I. preserves, verifies and shares that story.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                {metric.title}
              </p>

              <p className="mt-4 text-4xl font-bold text-pink-300">
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <p className="uppercase tracking-[0.35em] text-pink-400">
            Platform Modules
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {modules.map((module) => (
              <Link
                key={module.href}
                href={module.href}
                className="rounded-3xl border border-pink-300/20 bg-white/5 p-8 transition hover:border-pink-300/60 hover:bg-pink-500/10"
              >
                <h2 className="text-3xl font-bold">{module.title}</h2>

                <p className="mt-4 text-zinc-400">{module.description}</p>

                <p className="mt-8 text-pink-300">Open Module →</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="uppercase tracking-[0.3em] text-pink-400">
              ERP Integrations
            </p>

            <div className="mt-8 space-y-4">
              {integrations.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between border-b border-white/10 pb-4"
                >
                  <span className="text-zinc-300">{item.name}</span>

                  <span
                    className={
                      item.status === "CONNECTED"
                        ? "text-green-400"
                        : "text-zinc-500"
                    }
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="uppercase tracking-[0.3em] text-pink-400">
              Global Intelligence
            </p>

            <h2 className="mt-6 text-3xl font-bold">
              Scan, ownership and certification data.
            </h2>

            <p className="mt-4 text-zinc-400">
              Future dashboard layer for global scans, country intelligence,
              owner activity, product lifecycle events and premium market
              insights.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-zinc-400">
              <span>United Kingdom</span>
              <span>Italy</span>
              <span>Germany</span>
              <span>Poland</span>
              <span>Netherlands</span>
              <span>Global</span>
            </div>
          </section>
        </div>

        <div className="mt-20 rounded-3xl border border-pink-300/20 bg-pink-500/10 p-8">
          <h2 className="text-3xl font-bold">
            India and China can produce millions of litres. We produce certified
            trust.
          </h2>

          <p className="mt-4 text-zinc-300">
            The future challenge for Scotland is not producing more whisky. It
            is proving why Scottish whisky remains worth more.
          </p>
        </div>
      </div>
    </main>
  );
}