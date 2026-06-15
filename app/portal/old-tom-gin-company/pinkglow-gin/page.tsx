import Link from "next/link";
import { supabaseAdmin } from "@/lib/supabase/admin";

async function getCount(table: string) {
  const { count } = await supabaseAdmin
    .from(table)
    .select("*", { count: "exact", head: true });

  return count ?? 0;
}

async function getCountries() {
  const { data } = await supabaseAdmin
    .from("pinkglow_page_views")
    .select("country");

  return data ?? [];
}

async function getLatestEvents() {
  const { data } = await supabaseAdmin
    .from("pinkglow_page_views")
    .select("serial, country, region, city, created_at")
    .order("created_at", { ascending: false })
    .limit(6);

  return data ?? [];
}

export default async function PinkglowPortalPage() {
  const [assets, owners, scans, claims, countries, latestEvents] =
    await Promise.all([
      getCount("pinkglow_bottles"),
      getCount("pinkglow_claims"),
      getCount("pinkglow_page_views"),
      getCount("pinkglow_claims"),
      getCountries(),
      getLatestEvents(),
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
  const geolocatedScans = countries.filter((event) => event.country).length;

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <p className="uppercase tracking-[0.4em] text-pink-400">
          Product Intelligence
        </p>

        <h1 className="mt-6 text-6xl font-bold">Pinkglow Gin</h1>

        <p className="mt-6 max-w-4xl text-xl text-zinc-400">
          Product class intelligence dashboard for Pinkglow Gin certified assets,
          owner activity, scan behaviour and geographic reach.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <Badge text="LIVE" />
          <Badge text="CERTIFIED PRODUCT CLASS" />
          <Badge text="DIGITAL PASSPORT ACTIVE" />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          <Metric title="Assets" value={String(assets)} />
          <Metric title="Owners" value={String(owners)} />
          <Metric title="Claims" value={String(claims)} />
          <Metric title="Scans" value={String(scans)} />
        </div>

        <section className="mt-20 rounded-3xl border border-pink-300/20 bg-white/5 p-8">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Product Intelligence
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Live product activity and geographic reach.
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <MetricSmall title="Geolocated Scans" value={String(geolocatedScans)} />
            <MetricSmall title="United Kingdom" value={String(ukCount)} />
            <MetricSmall title="Germany" value={String(germanyCount)} />
          </div>
        </section>

        <section className="mt-20 rounded-3xl border border-pink-300/20 bg-white/5 p-8">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Latest Scan Activity
          </p>

          <div className="mt-8 space-y-5">
            {latestEvents.map((event: any) => (
              <div
                key={`${event.serial}-${event.created_at}`}
                className="flex items-center justify-between border-b border-white/10 pb-4"
              >
                <div>
                  <p className="font-semibold">{event.serial}</p>
                  <p className="text-sm text-zinc-500">
                    {event.city ?? "Unknown city"} ·{" "}
                    {event.country ?? "Unknown country"}
                  </p>
                </div>

                <p className="text-sm text-pink-300">
                  {new Date(event.created_at).toLocaleString("en-GB")}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Registry Access
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            <Link
              href="/assets"
              className="rounded-3xl border border-pink-300/20 bg-white/5 p-6 hover:bg-pink-500/10"
            >
              Asset Registry →
            </Link>

            <Link
              href="/owners"
              className="rounded-3xl border border-pink-300/20 bg-white/5 p-6 hover:bg-pink-500/10"
            >
              Owner Registry →
            </Link>

            <Link
              href="/dashboard"
              className="rounded-3xl border border-pink-300/20 bg-white/5 p-6 hover:bg-pink-500/10"
            >
              ELYAS Dashboard →
            </Link>

            <Link
              href="/portal/old-tom-gin-company"
              className="rounded-3xl border border-pink-300/20 bg-white/5 p-6 hover:bg-pink-500/10"
            >
              Company Portal →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <span className="rounded-full bg-pink-900/40 px-4 py-2 text-pink-300">
      {text}
    </span>
  );
}

function Metric({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-3xl border border-pink-300/20 bg-white/5 p-6">
      <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
        {title}
      </p>
      <p className="mt-4 text-5xl font-bold text-pink-300">{value}</p>
    </div>
  );
}

function MetricSmall({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
      <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
        {title}
      </p>
      <p className="mt-4 text-4xl font-bold text-pink-300">{value}</p>
    </div>
  );
}