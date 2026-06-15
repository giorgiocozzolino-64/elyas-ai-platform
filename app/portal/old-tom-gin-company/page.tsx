import Link from "next/link";
import { supabaseAdmin } from "@/lib/supabase/admin";

async function getCount(table: string) {
  const { count } = await supabaseAdmin
    .from(table)
    .select("*", { count: "exact", head: true });

  return count ?? 0;
}

async function getLatestScan() {
  const { data } = await supabaseAdmin
    .from("pinkglow_page_views")
    .select("serial, country, region, city, created_at")
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  return data;
}

async function getLatestClaim() {
  const { data } = await supabaseAdmin
    .from("pinkglow_claims")
    .select("serial, owner_name, owner_email, claimed_at")
    .order("claimed_at", { ascending: false })
    .limit(1)
    .single();

  return data;
}

async function getGeoEvents() {
  const { data } = await supabaseAdmin
    .from("pinkglow_page_views")
    .select("country");

  return data ?? [];
}

export default async function OldTomPortalPage() {
  const [assets, owners, scans, claims, latestScan, latestClaim, geoEvents] =
    await Promise.all([
      getCount("pinkglow_bottles"),
      getCount("pinkglow_claims"),
      getCount("pinkglow_page_views"),
      getCount("pinkglow_claims"),
      getLatestScan(),
      getLatestClaim(),
      getGeoEvents(),
    ]);

  const geolocatedScans = geoEvents.filter((event) => event.country).length;

  const ukScans = geoEvents.filter((event) =>
    String(event.country ?? "").toLowerCase().includes("united kingdom")
  ).length;

  const germanyScans = geoEvents.filter((event) => {
    const country = String(event.country ?? "").toLowerCase();
    return country.includes("germany") || country.includes("deutschland");
  }).length;

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <p className="uppercase tracking-[0.4em] text-pink-400">
          Company Portal
        </p>

        <h1 className="mt-6 text-6xl font-bold">Old Tom Gin Company Ltd</h1>

        <p className="mt-6 max-w-4xl text-xl text-zinc-400">
          Certified Producer Portal powered by E.L.Y.A.S-A.I.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <Badge text="ACTIVE" />
          <Badge text="CERTIFIED PRODUCER" />
          <Badge text="SUPABASE LIVE" />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          <Metric title="Assets" value={String(assets)} />
          <Metric title="Owners" value={String(owners)} />
          <Metric title="Claims" value={String(claims)} />
          <Metric title="Scans" value={String(scans)} />
        </div>

        <section className="mt-20 rounded-3xl border border-pink-300/20 bg-white/5 p-8">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Live Company Intelligence
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            What is happening inside this certified company?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <IntelligenceCard
              title="Geolocated Scans"
              value={String(geolocatedScans)}
            />

            <IntelligenceCard title="United Kingdom" value={String(ukScans)} />

            <IntelligenceCard title="Germany" value={String(germanyScans)} />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <ActivityCard
              title="Latest Scan"
              primary={latestScan?.serial ?? "No scan found"}
              secondary={
                latestScan
                  ? `${latestScan.city ?? "Unknown city"} · ${
                      latestScan.country ?? "Unknown country"
                    }`
                  : "No scan activity yet"
              }
              date={latestScan?.created_at}
            />

            <ActivityCard
              title="Latest Owner Registration"
              primary={latestClaim?.owner_name ?? "No owner found"}
              secondary={latestClaim?.serial ?? "No claimed asset"}
              date={latestClaim?.claimed_at}
            />
          </div>
        </section>

        <section className="mt-20">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Product Classes
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Link
              href="/assets"
              className="rounded-3xl border border-pink-300/20 bg-white/5 p-8 hover:bg-pink-500/10"
            >
              <h2 className="text-3xl font-bold">Pinkglow Gin</h2>

              <p className="mt-4 text-zinc-400">
                Digital passport ecosystem with ownership, geolocation and
                certification intelligence.
              </p>

              <div className="mt-6 text-pink-300">
                {assets} Certified Assets
              </div>
            </Link>

            <div className="rounded-3xl border border-pink-300/20 bg-white/5 p-8">
              <h2 className="text-3xl font-bold">Fife Negroni 2026</h2>

              <p className="mt-4 text-zinc-400">
                Event archive collection and ownership registry.
              </p>

              <div className="mt-6 text-pink-300">60 Certified Assets</div>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Quick Access
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            <Link
              href="/assets"
              className="rounded-3xl border border-pink-300/20 bg-white/5 p-6"
            >
              Assets →
            </Link>

            <Link
              href="/owners"
              className="rounded-3xl border border-pink-300/20 bg-white/5 p-6"
            >
              Owners →
            </Link>

            <Link
              href="/dashboard"
              className="rounded-3xl border border-pink-300/20 bg-white/5 p-6"
            >
              Intelligence →
            </Link>

            <Link
              href="/verify/PG-FC26-001"
              className="rounded-3xl border border-pink-300/20 bg-white/5 p-6"
            >
              Verify Asset →
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

function IntelligenceCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
      <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
        {title}
      </p>

      <p className="mt-4 text-4xl font-bold text-pink-300">{value}</p>
    </div>
  );
}

function ActivityCard({
  title,
  primary,
  secondary,
  date,
}: {
  title: string;
  primary: string;
  secondary: string;
  date?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
      <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
        {title}
      </p>

      <h3 className="mt-4 text-2xl font-bold text-white">{primary}</h3>

      <p className="mt-2 text-zinc-400">{secondary}</p>

      {date && (
        <p className="mt-4 text-sm text-zinc-500">
          {new Date(date).toLocaleString("en-GB")}
        </p>
      )}
    </div>
  );
}