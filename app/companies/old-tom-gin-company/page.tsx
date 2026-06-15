import Link from "next/link";

export default function OldTomGinCompanyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <p className="uppercase tracking-[0.4em] text-pink-400">
          Certified Company
        </p>

        <h1 className="mt-6 text-6xl font-bold">Old Tom Gin Company Ltd</h1>

        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
          ELYAS-CP-0001
        </p>

        <p className="mt-6 max-w-4xl text-xl text-zinc-400">
          Certified producer of premium spirits and creator of the Pinkglow Gin
          and Fife Negroni digital certification programmes.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <Badge color="green" text="ACTIVE" />
          <Badge color="pink" text="CERTIFIED COMPANY" />
          <Badge color="blue" text="ORACLE NETSUITE CONNECTED" />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          <Metric title="Certified Products" value="2" />
          <Metric title="Certified Assets" value="310" />
          <Metric title="Registered Owners" value="8" />
          <Metric title="Digital Passports" value="310" />
        </div>

        <section className="mt-20">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Certified Products
          </p>

          <h2 className="mt-4 text-4xl font-bold">Company Product Registry</h2>

          <p className="mt-4 max-w-4xl text-zinc-400">
            Each certified product belongs to Old Tom Gin Company Ltd and can
            generate certified assets, digital passports, ownership records and
            lifecycle certification events.
          </p>

          <div className="mt-10 rounded-3xl border border-pink-300/20 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              E.L.Y.A.S-A.I. Certification Hierarchy
            </p>

            <div className="mt-6 grid gap-4 text-center md:grid-cols-5">
              <HierarchyStep title="Company" />
              <HierarchyStep title="Product" />
              <HierarchyStep title="Asset" />
              <HierarchyStep title="Owner" />
              <HierarchyStep title="Certification" />
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <ProductCard
              href="/companies/old-tom-gin-company/pinkglow-gin"
              code="ELYAS-PR-0001"
              title="Pinkglow Gin"
              description="Certified digital passport ecosystem with ownership registry, QR identity, scan intelligence, transfer history and certificate generation."
              status="LIVE"
              statusColor="green"
              metric="250 Certified Bottles"
            />

            <ProductCard
              href="/companies/old-tom-gin-company/fife-negroni"
              code="ELYAS-PR-0002"
              title="Fife Negroni 2026"
              description="Limited edition event release with ownership certification, digital identity, event archive integration and verified collector history."
              status="ARCHIVE"
              statusColor="yellow"
              metric="60 Certified Bottles"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function Badge({
  color,
  text,
}: {
  color: "green" | "pink" | "blue";
  text: string;
}) {
  const styles = {
    green: "bg-green-900/40 text-green-300",
    pink: "bg-pink-900/40 text-pink-300",
    blue: "bg-blue-900/40 text-blue-300",
  };

  return (
    <span className={`rounded-full px-4 py-2 ${styles[color]}`}>
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

function HierarchyStep({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
      <p className="text-sm uppercase tracking-[0.25em] text-pink-300">
        {title}
      </p>
    </div>
  );
}

function ProductCard({
  href,
  code,
  title,
  description,
  status,
  statusColor,
  metric,
}: {
  href: string;
  code: string;
  title: string;
  description: string;
  status: string;
  statusColor: "green" | "yellow" | "pink";
  metric: string;
}) {
  const statusStyles = {
    green: "bg-green-500/20 text-green-300",
    yellow: "bg-yellow-500/20 text-yellow-300",
    pink: "bg-pink-500/20 text-pink-300",
  };

  return (
    <Link
      href={href}
      className="rounded-3xl border border-pink-300/20 bg-white/5 p-8 transition-all duration-300 hover:scale-[1.02] hover:border-pink-300/60 hover:bg-pink-500/10"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-3xl font-bold">{title}</h3>

          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-zinc-500">
            {code}
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-bold tracking-widest ${statusStyles[statusColor]}`}
        >
          {status}
        </span>
      </div>

      <p className="mt-4 text-zinc-400">{description}</p>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-pink-300">{metric}</span>
        <span className="text-zinc-500">Open →</span>
      </div>
    </Link>
  );
}