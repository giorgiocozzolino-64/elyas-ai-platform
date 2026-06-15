    export const dynamic = "force-dynamic";
export default function PinkglowGinPage() {
  return (

    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <p className="uppercase tracking-[0.4em] text-pink-400">
          Certified Product
        </p>

        <h1 className="mt-6 text-6xl font-bold">
          Pinkglow Gin
        </h1>

        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
          ELYAS-PR-0001
        </p>

        <p className="mt-6 max-w-4xl text-xl text-zinc-400">
          Premium cask matured gin certified through the E.L.Y.A.S-A.I.
          Product Intelligence platform with digital identity, ownership
          verification and provenance certification.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <Badge color="green" text="LIVE" />
          <Badge color="pink" text="CERTIFIED PRODUCT" />
          <Badge color="blue" text="DIGITAL PASSPORT ACTIVE" />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          <Metric title="Certified Assets" value="250" />
          <Metric title="Registered Owners" value="8" />
          <Metric title="Digital Passports" value="250" />
          <Metric title="Certification Events" value="LIVE" />
        </div>

        <section className="mt-20">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Product Identity
          </p>

          <div className="mt-8 rounded-3xl border border-pink-300/20 bg-white/5 p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <Info label="Producer">
                Old Tom Gin Company Ltd
              </Info>

              <Info label="Product Category">
                Premium Spirits
              </Info>

              <Info label="Certification Status">
                Active
              </Info>

              <Info label="Certification Code">
                ELYAS-PR-0001
              </Info>

              <Info label="Certified Assets">
                250 Bottles
              </Info>

              <Info label="Digital Passport">
                Active
              </Info>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            E.L.Y.A.S-A.I. Structure
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-5">
            <Step title="Company" value="Old Tom Gin" />
            <Step title="Product" value="Pinkglow Gin" />
            <Step title="Assets" value="250" />
            <Step title="Owners" value="8" />
            <Step title="Certification" value="ACTIVE" />
          </div>
        </section>

        <section className="mt-20">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Future Modules
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <FutureCard
              title="Asset Registry"
              description="Browse all certified bottles."
            />

            <FutureCard
              title="Owner Registry"
              description="Verify ownership and transfer history."
            />

            <FutureCard
              title="Scan Intelligence"
              description="Global QR scan analytics."
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

      <p className="mt-2 text-xl font-semibold">
        {children}
      </p>
    </div>
  );
}

function Step({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-pink-300/20 bg-white/5 p-6 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
        {title}
      </p>

      <p className="mt-4 text-lg font-bold text-pink-300">
        {value}
      </p>
    </div>
  );
}

function FutureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-pink-300/20 bg-white/5 p-8">
      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-zinc-400">
        {description}
      </p>
    </div>
  );
}