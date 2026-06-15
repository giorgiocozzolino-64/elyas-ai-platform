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

export default async function PinkglowPassportPage() {
  const [assets, owners, scans, countries] = await Promise.all([
    getCount("pinkglow_bottles"),
    getCount("pinkglow_claims"),
    getCount("pinkglow_page_views"),
    getCountries(),
  ]);

  const countriesReached = new Set(
    countries
      .map((item: any) => item.country)
      .filter(Boolean)
  ).size;

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-8 py-20">

        <p className="uppercase tracking-[0.4em] text-pink-400">
          Digital Product Passport
        </p>

        <h1 className="mt-6 text-7xl font-bold">
          Pinkglow Gin
        </h1>

        <p className="mt-6 max-w-4xl text-2xl text-zinc-300">
          Certified Product Passport powered by E.L.Y.A.S-A.I.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <Badge text="ACTIVE" />
          <Badge text="CERTIFIED PRODUCT" />
          <Badge text="DIGITAL PASSPORT LIVE" />
        </div>

        {/* Product Metrics */}

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          <Metric title="Certified Assets" value={String(assets)} />
          <Metric title="Registered Owners" value={String(owners)} />
          <Metric title="Scans" value={String(scans)} />
          <Metric title="Countries Reached" value={String(countriesReached)} />
        </div>

        {/* Product Identity */}

        <section className="mt-20 rounded-3xl border border-pink-300/20 bg-white/5 p-8">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Product Identity
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <Info label="Product Class">
              Pinkglow Gin
            </Info>

            <Info label="Category">
              Premium Scottish Gin
            </Info>

            <Info label="Edition">
              Fife Business Awards 2026
            </Info>

            <Info label="Certification Status">
              ACTIVE
            </Info>

          </div>
        </section>

        {/* Product Story */}

        <section className="mt-20 rounded-3xl border border-pink-300/20 bg-white/5 p-8">

          <p className="uppercase tracking-[0.3em] text-pink-400">
            Product Story
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Every certified product has a story.
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-zinc-300">

            <p>
              Pinkglow Gin is an experimental single-cask gin inspired by the
              historic Royal Navy Pink Gin tradition.
            </p>

            <p>
              The project was created by Old Tom Gin Company Ltd and certified
              through the E.L.Y.A.S-A.I. Digital Certification Framework.
            </p>

            <p>
              Each bottle receives a unique digital identity, ownership
              registration capability and traceable certification history.
            </p>

          </div>
        </section>

        {/* Producer */}

        <section className="mt-20 rounded-3xl border border-pink-300/20 bg-white/5 p-8">

          <p className="uppercase tracking-[0.3em] text-pink-400">
            Certified Producer
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Old Tom Gin Company Ltd
          </h2>

          <p className="mt-6 text-zinc-400">
            Certified producer of premium spirits and creator of the Pinkglow
            Gin digital certification programme.
          </p>

          <Link
            href="/companies/old-tom-gin-company"
            className="mt-8 inline-block rounded-2xl border border-pink-300/20 px-6 py-3 text-pink-300 hover:border-pink-300/60"
          >
            Open Company Profile →
          </Link>

        </section>

        {/* Certification */}

        <section className="mt-20 rounded-3xl border border-pink-300/20 bg-pink-500/10 p-8">

          <p className="uppercase tracking-[0.3em] text-pink-300">
            Certification Framework
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Certified by E.L.Y.A.S-A.I.
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            <MetricSmall
              title="Verification Status"
              value="VALID"
            />

            <MetricSmall
              title="Digital Passport"
              value="LIVE"
            />

            <MetricSmall
              title="Certification Authority"
              value="ACTIVE"
            />

          </div>

        </section>

        {/* Product Journey */}

        <section className="mt-20 rounded-3xl border border-pink-300/20 bg-white/5 p-8">

          <p className="uppercase tracking-[0.3em] text-pink-400">
            Product Journey
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-5 text-center">

            <JourneyStep title="Concept" />
            <JourneyStep title="Released" />
            <JourneyStep title="Assets Issued" />
            <JourneyStep title="Owners Registered" />
            <JourneyStep title="Global Intelligence" />

          </div>

        </section>

        {/* Access */}

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
              href="/portal/old-tom-gin-company"
              className="rounded-3xl border border-pink-300/20 bg-white/5 p-6 hover:bg-pink-500/10"
            >
              Company Portal →
            </Link>

            <Link
              href="/verify/PG-FC26-001"
              className="rounded-3xl border border-pink-300/20 bg-white/5 p-6 hover:bg-pink-500/10"
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

function Metric({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-pink-300/20 bg-white/5 p-6">
      <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
        {title}
      </p>

      <p className="mt-4 text-5xl font-bold text-pink-300">
        {value}
      </p>
    </div>
  );
}

function MetricSmall({
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

      <p className="mt-4 text-2xl font-bold text-pink-300">
        {value}
      </p>
    </div>
  );
}

function Info({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
        {label}
      </p>

      <p className="mt-2 text-2xl font-semibold">
        {children}
      </p>
    </div>
  );
}

function JourneyStep({
  title,
}: {
  title: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
      <p className="text-sm uppercase tracking-[0.25em] text-pink-300">
        {title}
      </p>
    </div>
  );
}