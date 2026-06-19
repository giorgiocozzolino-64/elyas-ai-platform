import Link from "next/link";

export const dynamic = "force-dynamic";

const certifiedCompanies = [
  {
    name: "Mc Fratm Ltd",
    href: "/companies/mc-fratm",
  },
  {
    name: "Arbroath A.D.1320 Ltd",
    href: "/companies/arbroath-ad1320",
  },
  {
    name: "Old Tom Gin Company",
    href: "/companies/old-tom-gin-company",
  },
  {
    name: "OF Whisky Atelier",
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

        <Link
          href="/verify"
          className="text-xs uppercase tracking-[0.25em] text-[#C9A84C]"
        >
          Verify Product
        </Link>
      </header>

      <section className="px-8 py-16 lg:px-20 border-b border-[#2A2318]">
        <p className="text-xs uppercase tracking-[0.5em] text-[#C9A84C]">
          Public Registry
        </p>

        <h1 className="mt-6 max-w-4xl font-serif text-5xl lg:text-7xl leading-tight">
          Certified Companies
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#CFC6AD]">
          Verify if a company or product is certified by E.L.Y.A.S-A.I.
        </p>

        <Link href="/verify" className="mt-8 inline-block gold-btn">
          Verify Product Code →
        </Link>
      </section>

      <section className="px-8 py-14 lg:px-20">
        <div className="grid gap-4">
          {certifiedCompanies.map((company) => (
            <Link
              key={company.name}
              href={company.href}
              className="flex items-center justify-between border border-[#2A2318] px-6 py-6 hover:border-[#C9A84C] transition"
            >
              <span className="font-serif text-2xl">{company.name}</span>
              <span className="text-[#C9A84C]">View →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}