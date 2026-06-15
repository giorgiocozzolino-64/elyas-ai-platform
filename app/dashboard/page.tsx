import Link from "next/link";
import { supabaseAdmin } from "@/lib/supabase/admin";

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
    description: "Food, beverage, technology and certification innovation group.",
    status: "ACTIVE",
  },
];

const registryEvents = [
  {
    entity: "Old Tom Gin Company Ltd",
    event: "Certified Company Active",
    status: "ACTIVE",
  },
  {
    entity: "Mc Fratm Ltd",
    event: "Certified Producer & Technology Layer Active",
    status: "ACTIVE",
  },
  {
    entity: "Arbroath A.D.1320 Ltd",
    event: "Maison Certification Framework Active",
    status: "ACTIVE",
  },
  {
    entity: "OF Whisky Atelier Ltd",
    event: "Whisky Atelier Certification Framework Registered",
    status: "REGISTERED",
  },
];

async function getCount(table: string) {
  const { count, error } = await supabaseAdmin
    .from(table)
    .select("*", { count: "exact", head: true });

  if (error) {
    console.error(`Error reading ${table}:`, error.message);
    return 0;
  }

  return count ?? 0;
}

async function getCountries() {
  const { data, error } = await supabaseAdmin
    .from("pinkglow_page_views")
    .select("country");

  if (error) {
    console.error("Error reading countries:", error.message);
    return [];
  }

  return data ?? [];
}

async function getCertificationEvents() {
  const { data, error } = await supabaseAdmin
    .from("certification_events")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(8);

  if (error) {
    console.error("Error reading certification events:", error.message);
    return [];
  }

  return data ?? [];
}

export default async function DashboardPage() {
  const [assets, owners, scans, ownershipRecords, countries, timelineEvents] =
    await Promise.all([
      getCount("pinkglow_bottles"),
      getCount("pinkglow_claims"),
      getCount("pinkglow_page_views"),
      getCount("pinkglow_ownership_history"),
      getCountries(),
      getCertificationEvents(),
    ]);

  const countryCount = (country: string) =>
    countries.filter((item) => {
      const value = String(item.country ?? "").toLowerCase();

      if (country === "Germany") {
        return value.includes("germany") || value.includes("deutschland");
      }

      if (country === "United Kingdom") {
        return (
          value.includes("united kingdom") ||
          value.includes("uk") ||
          value.includes("great britain")
        );
      }

      return value.includes(country.toLowerCase());
    }).length;

  const ukCount = countryCount("United Kingdom");
  const germanyCount = countryCount("Germany");
  const italyCount = countryCount("Italy");
  const polandCount = countryCount("Poland");
  const netherlandsCount = countryCount("Netherlands");

  const metrics = [
    { title: "Certified Companies", value: "4" },
    { title: "Certified Product Classes", value: "5" },
    { title: "Certified Assets", value: String(assets + 60) },
    { title: "Registered Owners", value: String(owners) },
    { title: "Scan Events", value: String(scans) },
    { title: "Certification Events", value: String(timelineEvents.length) },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <p className="uppercase tracking-[0.4em] text-pink-400">
          E.L.Y.A.S-A.I. 2.0
        </p>

        <h1 className="mt-6 text-6xl font-bold">
          Certification Authority Control Centre
        </h1>

        <p className="mt-6 max-w-5xl text-xl leading-relaxed text-zinc-400">
          Live operational dashboard connected to Supabase for certified assets,
          ownership records, scan intelligence and certification activity.
        </p>

        <div className="mt-12 rounded-3xl border border-pink-300/20 bg-white/5 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            E.L.Y.A.S-A.I. Data Hierarchy
          </p>

          <div className="mt-6 grid gap-4 text-center md:grid-cols-5">
            <HierarchyStep title="Company" />
            <HierarchyStep title="Product Class" />
            <HierarchyStep title="Asset" />
            <HierarchyStep title="Owner" />
            <HierarchyStep title="Certification Event" />
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
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

        <section className="mt-16">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Certified Company Modules
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Products are managed inside each certified company.
          </h2>

          <p className="mt-4 max-w-5xl text-zinc-400">
            E.L.Y.A.S-A.I. does not operate as a generic product catalogue. Each
            product class belongs to a certified company and can generate
            thousands of certified assets, owner records, transfer history and
            certification events.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {companyModules.map((company) => (
              <Link
                key={company.name}
                href={company.href}
                className="rounded-3xl border border-pink-300/20 bg-white/5 p-8 transition-all duration-300 hover:scale-[1.02] hover:border-pink-300/60 hover:bg-pink-500/10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-3xl font-bold">{company.name}</h3>

                    <p className="mt-4 text-zinc-400">
                      {company.description}
                    </p>
                  </div>

                  <span className="rounded-full bg-pink-500/20 px-3 py-1 text-xs font-bold tracking-widest text-pink-300">
                    {company.status}
                  </span>
                </div>

                <p className="mt-6 text-pink-300">Open Company Registry →</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-pink-300/20 bg-white/5 p-8">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Live Certification Timeline
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Every certified product has a story.
          </h2>

          <div className="mt-8 space-y-6">
            {timelineEvents.map((event: any) => (
              <div
                key={event.id}
                className="border-l border-pink-300/40 pl-6"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  {new Date(event.created_at).toLocaleString("en-GB")}
                </p>

                <h3 className="mt-2 text-xl font-bold text-pink-300">
                  {event.event_type}
                </h3>

                <p className="mt-2 text-zinc-300">
                  {event.event_description}
                </p>

                <p className="mt-2 text-sm text-zinc-500">
                  {event.company_name}
                  {event.product_class ? ` · ${event.product_class}` : ""}
                  {event.asset_serial ? ` · ${event.asset_serial}` : ""}
                  {event.country ? ` · ${event.country}` : ""}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-pink-300/20 bg-white/5 p-8">
            <p className="uppercase tracking-[0.3em] text-pink-400">
              Certified Company Registry
            </p>

            <p className="mt-4 text-zinc-400">
              Active certified organisations and certification frameworks.
            </p>

            <div className="mt-8 space-y-5">
              {registryEvents.map((item) => (
                <div
                  key={`${item.entity}-${item.event}`}
                  className="flex items-center justify-between border-b border-white/10 pb-4"
                >
                  <div>
                    <p className="font-semibold">{item.entity}</p>
                    <p className="text-sm text-zinc-500">{item.event}</p>
                  </div>

                  <span className="text-sm text-pink-300">{item.status}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-pink-300/20 bg-white/5 p-8">
            <p className="uppercase tracking-[0.3em] text-pink-400">
              ERP & System Status
            </p>

            <div className="mt-8 space-y-5">
              {integrations.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between border-b border-white/10 pb-4"
                >
                  <span>{item.name}</span>

                  <span
                    className={
                      item.status === "CONNECTED" || item.status === "LIVE"
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
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          <Link
            href="/companies"
            className="rounded-3xl border border-pink-300/20 bg-pink-500/10 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-pink-300/60"
          >
            <h2 className="text-2xl font-bold">Companies</h2>
            <p className="mt-3 text-zinc-400">
              Certified producers and maisons.
            </p>
          </Link>

          <Link
            href="/assets"
            className="rounded-3xl border border-pink-300/20 bg-pink-500/10 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-pink-300/60"
          >
            <h2 className="text-2xl font-bold">Asset Registry</h2>
            <p className="mt-3 text-zinc-400">
              Bottles, casks and certified collections.
            </p>
          </Link>

          <Link
            href="/owners"
            className="rounded-3xl border border-pink-300/20 bg-pink-500/10 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-pink-300/60"
          >
            <h2 className="text-2xl font-bold">Owner Registry</h2>
            <p className="mt-3 text-zinc-400">
              Registry and ownership history.
            </p>
          </Link>

          <Link
            href="/verify/PG-FC26-001"
            className="rounded-3xl border border-pink-300/20 bg-pink-500/10 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-pink-300/60"
          >
            <h2 className="text-2xl font-bold">Verify</h2>
            <p className="mt-3 text-zinc-400">
              Public certified asset verification.
            </p>
          </Link>
        </div>

        <section className="mt-16 rounded-3xl border border-pink-300/20 bg-white/5 p-8">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Global Intelligence
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Scan intelligence, ownership activity and product lifecycle data.
          </h2>

          <p className="mt-4 text-zinc-400">
            Geolocation was activated after the first scan events. Older scans
            may not include country, city or GPS-level metadata.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-6">
            <CountryCard label="United Kingdom" value={ukCount} />
            <CountryCard label="Italy" value={italyCount} />
            <CountryCard label="Germany" value={germanyCount} />
            <CountryCard label="Poland" value={polandCount} />
            <CountryCard label="Netherlands" value={netherlandsCount} />
            <CountryCard label="Global Scans" value={scans} />
          </div>
        </section>
      </div>
    </main>
  );
}

function HierarchyStep({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
      <p className="text-sm uppercase tracking-[0.25em] text-pink-300">
        {title}
      </p>
    </div>
  );
}

function CountryCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </p>

      <p className="mt-3 text-2xl font-bold text-pink-300">{value}</p>
    </div>
  );
}