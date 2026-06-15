import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <p className="uppercase tracking-[0.4em] text-pink-400">
          Digital Certification Authority
        </p>

        <h1 className="mt-6 text-7xl font-bold">E.L.Y.A.S-A.I.</h1>

        <p className="mt-8 max-w-4xl text-2xl text-zinc-300">
          Certified Product Intelligence for Luxury Food, Beverage, Spirits and
          Premium Craft Products.
        </p>

        <p className="mt-6 max-w-4xl text-lg text-zinc-500">
          We do not replace trust. We certify it.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-5">
          <Metric title="Certified Companies" value="4" />
          <Metric title="Certified Products" value="5" />
          <Metric title="Certified Assets" value="310" />
          <Metric title="Registered Owners" value="8" />
          <Metric title="ERP Integrations" value="1" />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          <Link
            href="/companies"
            className="rounded-3xl border border-pink-300/20 bg-white/5 p-8 transition-all duration-300 hover:border-pink-300 hover:bg-pink-500/10 hover:scale-[1.02]"
          >
            <h2 className="text-2xl font-bold">Companies</h2>

            <p className="mt-3 text-zinc-400">
              Certified producers and partner companies.
            </p>
          </Link>

          <Link
            href="/products"
            className="rounded-3xl border border-pink-300/20 bg-white/5 p-8 transition-all duration-300 hover:border-pink-300 hover:bg-pink-500/10 hover:scale-[1.02]"
          >
            <h2 className="text-2xl font-bold">Products</h2>

            <p className="mt-3 text-zinc-400">
              Certified products and digital passports.
            </p>
          </Link>

          <Link
            href="/assets"
            className="rounded-3xl border border-pink-300/20 bg-white/5 p-8 transition-all duration-300 hover:border-pink-300 hover:bg-pink-500/10 hover:scale-[1.02]"
          >
            <h2 className="text-2xl font-bold">Assets</h2>

            <p className="mt-3 text-zinc-400">
              Bottles, casks and certified collections.
            </p>
          </Link>

          <Link
            href="/owners"
            className="rounded-3xl border border-pink-300/20 bg-white/5 p-8 transition-all duration-300 hover:border-pink-300 hover:bg-pink-500/10 hover:scale-[1.02]"
          >
            <h2 className="text-2xl font-bold">Owners</h2>

            <p className="mt-3 text-zinc-400">
              Registered ownership and transfer history.
            </p>
          </Link>
        </div>

       <div className="mt-20 rounded-3xl border border-pink-300/20 bg-pink-500/10 p-10">
  <p className="uppercase tracking-[0.4em] text-pink-300">
    E.L.Y.A.S-A.I. Manifesto
  </p>

  <h2 className="mt-6 text-3xl font-bold">
    Every certified product has a story.
  </h2>

  <p className="mt-6 max-w-5xl text-lg leading-relaxed text-zinc-300">
    Every bottle, every cask, every ingredient, every journey leaves a trace.
    Our mission is to preserve, verify and share that story through certified
    digital identities, provenance intelligence and ownership verification.
  </p>

  <p className="mt-6 text-zinc-400">
    The QR code is only the key. The story begins when the door opens.
  </p>
</div>
      </div>
    </main>
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