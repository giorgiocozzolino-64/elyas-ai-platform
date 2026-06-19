import Link from "next/link";

export const dynamic = "force-dynamic";

const certifiedCompanies = [
  {
    name: "Mc Fratm Ltd",
    location: "Scotland",
    status: "Certified Producer",
    description:
      "Premium food, beverage and lifestyle products connected to Italian and Scottish provenance.",
    href: "/companies/mc-fratm",
  },
  {
    name: "Arbroath A.D.1320 Ltd",
    location: "Scotland",
    status: "Certified Maison",
    description:
      "Luxury whisky, maturation projects and certified premium product collections.",
    href: "/companies/arbroath-ad1320",
  },
  {
    name: "Old Tom Gin Company",
    location: "St Andrews, Scotland",
    status: "Certified Producer",
    description:
      "Certified gin products, limited releases and digital product passports.",
    href: "/companies/old-tom-gin-company",
  },
  {
    name: "OF Whisky Atelier",
    location: "Scotland",
    status: "Certified Atelier",
    description:
      "Independent whisky atelier for limited cask projects and premium certified assets.",
    href: "/companies/of-whisky-atelier",
  },
];

export default function CompaniesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#F5F0E8]">
      <header className="border-b border-[#2A2318] px-8 py-5 lg:px-12 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl tracking-widest">
          E.L.Y.A.S-A.I.
        </Link>

        <nav className="hidden md:flex gap-8 text-xs uppercase tracking-[0.25em]">
          <Link href="/">Home</Link>
          <Link href="/verify" className="text-[#C9A84C]">
            Verify
          </Link>
          <Link href="/companies" className="text-[#C9A84C]">
            Companies
          </Link>
        </nav>
      </header>

      <section className="px-8 py-20 lg:px-20 border-b border-[#2A2318]">
        <p className="text-xs uppercase tracking-[0.5em] text-[#C9A84C]">
          Public Registry
        </p>

        <h1 className="mt-8 max-w-5xl font-serif text-5xl lg:text-7xl leading-tight">
          Certified Companies Registry
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[#CFC6AD]">
          This public area allows consumers, partners and collectors to verify
          whether a company is certified by E.L.Y.A.S-A.I. and whether a product
          certificate exists.
        </p>

        <div className="mt-10 flex flex-wrap gap-5">
          <Link href="/verify" className="gold-btn">
            Verify Product Code →
          </Link>

          <a href="#registry" className="dark-btn">
            View Certified Companies
          </a>
        </div>
      </section>

      <section className="px-8 py-16 lg:px-20 border-b border-[#2A2318]">
        <div className="border border-[#C9A84C]/35 bg-[#0B0B0B] p-8 lg:p-12">
          <p className="text-xs uppercase tracking-[0.45em] text-[#C9A84C]">
            Product Verification
          </p>

          <h2 className="mt-6 font-serif text-3xl lg:text-5xl">
            Have a product code?
          </h2>

          <p className="mt-6 max-w-2xl text-[#CFC6AD] leading-relaxed">
            Enter the verification centre to check if a bottle, cask, batch or
            certified asset exists in the E.L.Y.A.S-A.I. registry and view its
            public certificate.
          </p>

          <Link href="/verify" className="mt-8 inline-block gold-btn">
            Open Verification Centre →
          </Link>
        </div>
      </section>

      <section id="registry" className="px-8 py-20 lg:px-20">
        <div className="flex items-center gap-8">
          <div className="h-px flex-1 bg-[#2A2318]" />
          <p className="text-xs uppercase tracking-[0.5em] text-[#C9A84C]">
            Certified Companies
          </p>
          <div className="h-px flex-1 bg-[#2A2318]" />
        </div>

        <div className="mt-12 grid gap-6">
          {certifiedCompanies.map((company) => (
            <article
              key={company.name}
              className="border border-[#2A2318] bg-[#090909] p-8 lg:p-10"
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#C9A84C]">
                    {company.status}
                  </p>

                  <h2 className="mt-4 font-serif text-3xl lg:text-4xl">
                    {company.name}
                  </h2>

                  <p className="mt-3 text-sm uppercase tracking-[0.25em] text-[#8E835F]">
                    {company.location}
                  </p>

                  <p className="mt-6 max-w-3xl text-[#CFC6AD] leading-relaxed">
                    {company.description}
                  </p>
                </div>

                <Link href={company.href} className="gold-btn whitespace-nowrap">
                  View Company →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#2A2318] px-8 py-8 lg:px-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-xs uppercase tracking-[0.3em] text-[#8E835F]">
          © 2026 MC FRATM LTD · E.L.Y.A.S-A.I.
        </p>

        <Link
          href="/verify"
          className="text-xs uppercase tracking-[0.25em] text-[#C9A84C]"
        >
          Verify Certificate →
        </Link>
      </footer>
    </main>
  );
}