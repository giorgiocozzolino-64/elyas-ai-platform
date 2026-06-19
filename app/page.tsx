import Link from "next/link";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#F5F0E8]">
      <header className="border-b border-[#2A2318] px-10 py-5 flex items-center justify-between">
        <div>
          <p className="text-3xl font-serif tracking-widest">E.L.Y.A.S-A.I.</p>
          <p className="text-xs tracking-[0.35em] text-[#C9A84C] uppercase">
            Certified Product Intelligence
          </p>
        </div>

        <nav className="hidden lg:flex gap-9 text-xs uppercase tracking-[0.28em]">
          <Link href="/" className="text-[#C9A84C]">
            Home
          </Link>
          <Link href="/verify">Verify</Link>
          <Link href="/companies">Certified Companies</Link>
          <Link href="#about">About</Link>
          <Link href="#layers">Platform Layers</Link>
        </nav>

        <Link
          href="/login"
          className="border border-[#C9A84C] px-8 py-3 text-xs uppercase tracking-[0.25em] text-[#C9A84C]"
        >
          Login
        </Link>
      </header>

      <section className="grid min-h-[650px] grid-cols-1 lg:grid-cols-2 border-b border-[#2A2318]">
        <div className="px-10 lg:px-20 py-20 flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.55em] text-[#C9A84C]">
            I · Certified Product Intelligence
          </p>

          <h1 className="mt-8 font-serif text-7xl lg:text-8xl leading-none">
            E.L.Y.A.S-
            <br />
            <span className="text-[#C9A84C]">A.I.</span>
          </h1>

          <p className="mt-10 max-w-2xl font-serif text-2xl leading-relaxed text-[#E8DDBE]">
            Certified Product Intelligence for Luxury Food, Beverage, Spirits
            and Premium Craft Products.
          </p>

          <p className="mt-6 max-w-xl text-[#BDB49A]">
            Preserving, verifying and sharing the story behind premium products.
          </p>

          <div className="mt-9 text-3xl font-serif leading-snug">
            <p>We are not a QR code.</p>
            <p className="text-[#C9A84C]">
              We are the digital trust layer between physical products and
              certified identity.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link href="/verify" className="gold-btn">
              Verify a Product →
            </Link>

            <Link href="/companies" className="dark-btn">
              Certified Companies →
            </Link>
          </div>
        </div>

        <div className="px-10 lg:px-20 py-20 flex items-center justify-center">
          <div className="relative w-full max-w-3xl border border-[#C9A84C] p-8">
            <div className="bg-[#E8DEC8] min-h-[420px] flex flex-col items-center justify-center gap-8 px-8 py-6">
              <p className="flex items-center gap-4 whitespace-nowrap font-serif text-4xl lg:text-5xl font-bold text-[#0F0F0F]">
                <span className="text-[0.55em] text-[#A8842E]">•(((•</span>
                E.L.Y.A.S-A.I.
                <span className="text-[0.55em] text-[#A8842E]">•)))•</span>
              </p>

              <div className="flex w-[78%] items-center gap-3">
                <span className="h-px flex-1 bg-[#A8842E]" />
                <span className="h-2 w-2 rotate-45 bg-[#A8842E]" />
                <span className="h-px flex-1 bg-[#A8842E]" />
              </div>

              <p className="max-w-sm text-center text-base leading-relaxed text-[#3A3020]">
                Enhanced Living Systems through Acoustic Stimulation —
                Artisanal Intelligence
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="grid grid-cols-1 md:grid-cols-5 border-b border-[#2A2318]"
      >
        <Feature title="What We Do">
          We certify identity, origin, ownership and story of premium products.
        </Feature>

        <Feature title="How It Works">
          Producer → Product → Asset → Owner → Certificate → Verification.
        </Feature>

        <Feature title="Who It’s For">
          Producers, luxury brands, distilleries, food companies, collectors and
          investors.
        </Feature>

        <Feature title="What We Certify">
          Product classes and certified assets, not static showcase projects.
        </Feature>

        <Feature title="Built For Trust">
          Security, transparency and digital provenance at the core of every
          certificate.
        </Feature>
      </section>

      <section id="layers" className="px-10 lg:px-20 py-16">
        </section>

<section className="px-10 lg:px-20 py-20 border-b border-[#2A2318]">
  <div className="border border-[#C9A84C] py-24 px-10 lg:px-20">
    <div className="max-w-5xl">
      <h2 className="font-serif text-5xl lg:text-6xl leading-tight text-[#F5F0E8]">
        India and China can produce millions of litres.
      </h2>

      <h3 className="mt-4 font-serif italic text-5xl lg:text-6xl text-[#C9A84C]">
        We produce certified trust.
      </h3>

      <p className="mt-12 max-w-3xl text-xl text-[#CFC6AD] leading-relaxed">
        The future challenge for Scotland is not producing more whisky.
        It is proving why Scottish whisky remains worth more.
      </p>
    </div>
  </div>
</section>

<section id="layers" className="px-10 lg:px-20 py-16">
        <div className="flex items-center gap-8">
          <div className="h-px flex-1 bg-[#2A2318]" />
          <p className="text-[#C9A84C] uppercase tracking-[0.5em]">
            Platform Layers
          </p>
          <div className="h-px flex-1 bg-[#2A2318]" />
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <Portal
            href="/companies"
            title="Public Area"
            text="Certified companies, verification, certificates and public trust."
          />

          <Portal
            href="/portal"
            title="Corporate Area"
            text="Producer operations, product registration, assets and ownership records."
          />

          <Portal
            href="/dashboard"
            title="Admin Area"
            text="Platform governance, certification control and ecosystem intelligence."
          />
        </div>

        <p className="mt-14 text-center text-xs uppercase tracking-[0.55em] text-[#D5B85A]">
          Trust · Governance · Intelligence
        </p>
      </section>
    </main>
  );
}

function Feature({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-r border-[#2A2318] px-8 py-12 text-center">
      <p className="text-sm uppercase tracking-[0.25em] font-bold">{title}</p>
      <p className="mt-5 text-[#CFC6AD] leading-relaxed">{children}</p>
    </div>
  );
}

function Portal({
  href,
  title,
  text,
}: {
  href: string;
  title: string;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="group border border-[#2A2318] p-8 flex items-center justify-between hover:border-[#C9A84C] transition"
    >
      <div>
        <p className="text-lg uppercase tracking-[0.2em] font-bold">{title}</p>
        <p className="mt-4 text-[#CFC6AD] leading-relaxed">{text}</p>
      </div>

      <span className="text-3xl text-[#C9A84C] group-hover:translate-x-2 transition">
        →
      </span>
    </Link>
  );
}