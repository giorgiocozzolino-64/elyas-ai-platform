export default function ArbroathPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <p className="uppercase tracking-[0.4em] text-pink-400">
          Certified Company
        </p>

        <h1 className="mt-6 text-6xl font-bold">Arbroath A.D.1320 Ltd</h1>

        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
          ELYAS-CP-0002
        </p>

        <p className="mt-6 max-w-4xl text-xl text-zinc-400">
          Luxury whisky maison and certified maturation programme, including
          Sea Malt and the Arbroath A.D.1320 Maison Collection.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <Badge color="green" text="ACTIVE" />
          <Badge color="pink" text="CERTIFIED COMPANY" />
          <Badge color="blue" text="ORACLE NETSUITE CONNECTED" />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          <Metric title="Certified Products" value="2" />
          <Metric title="Certified Assets" value="250" />
          <Metric title="Registered Owners" value="0" />
          <Metric title="Digital Passports" value="250" />
        </div>

        <section className="mt-20">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Certified Products
          </p>

          <h2 className="mt-4 text-4xl font-bold">Company Product Registry</h2>

          <p className="mt-4 max-w-4xl text-zinc-400">
            Each certified product belongs to Arbroath A.D.1320 Ltd and can
            generate its own certified assets, digital passports, ownership
            records and lifecycle certification events.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <ProductCard
              title="Sea Malt"
              description="Underwater bottle refinement programme with digital provenance, ownership registration, NFC identity and future certified sea maturation records."
              status="IN DEVELOPMENT"
              metric="250 Planned Certified Bottles"
            />

            <ProductCard
              title="Arbroath A.D.1320 Maison Collection"
              description="Cask-to-bottle whisky traceability and luxury maison collection built around provenance, scarcity, certified maturation and verified product identity."
              status="IN DEVELOPMENT"
              metric="Maison Whisky Certification System"
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

function ProductCard({
  title,
  description,
  status,
  metric,
}: {
  title: string;
  description: string;
  status: string;
  metric: string;
}) {
  return (
    <div className="rounded-3xl border border-pink-300/20 bg-white/5 p-8 transition hover:border-pink-300/60 hover:bg-pink-500/10">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-3xl font-bold">{title}</h3>

        <span className="rounded-full bg-pink-500/20 px-3 py-1 text-xs font-bold tracking-widest text-pink-300">
          {status}
        </span>
      </div>

      <p className="mt-4 text-zinc-400">{description}</p>

      <div className="mt-6 text-pink-300">{metric}</div>
    </div>
  );
}