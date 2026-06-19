import Link from "next/link";

export const dynamic = "force-dynamic";

const certification = [
  { label: "Company", value: "Arbroath A.D.1320 Ltd" },
  { label: "Role", value: "Certified Maison" },
  { label: "Sector", value: "Luxury Whisky & Premium Spirits" },
  { label: "Status", value: "Active" },
  { label: "Registry", value: "E.L.Y.A.S-A.I." },
  { label: "Verification", value: "Public record" },
];

const areas = [
  "Single Malt Whisky",
  "Private Casks",
  "Luxury Bottlings",
  "Sea Malt Projects",
  "Digital Product Passports",
];

export default function ArbroathCertifiedCompanyPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#14110A]">
      <header className="border-b border-[#2A2318] bg-[#050505]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 sm:px-10">
          <Link
            href="/"
            className="font-serif text-lg tracking-[0.15em] text-[#F5F0E8]"
          >
            E.L.Y.A.S-A.I.
          </Link>

          <Link
            href="/companies"
            className="text-[11px] uppercase tracking-[0.2em] text-[#BDB49A] transition hover:text-[#C9A84C]"
          >
            ← Certified Companies
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="grid items-center gap-14 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8A6B22]">
              Certified Maison
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-tight text-[#14110A] sm:text-6xl">
              Arbroath A.D.1320 Ltd
            </h1>

            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[#5C5240]">
              Arbroath A.D.1320 Ltd is a certified maison within the
              E.L.Y.A.S-A.I. registry for luxury whisky, limited cask projects,
              bespoke maturation and premium spirits certification.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 border border-[#D8CDA8] bg-white/50 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#3A3020]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5E8A52]" />
                Active
              </span>
              <span className="inline-flex items-center border border-[#C9A84C] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#3A3020]">
                E.L.Y.A.S-A.I. Registered
              </span>
            </div>
          </div>

          <CertificationSeal />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 sm:px-10">
        <div className="border-t border-[#E4D9B8]">
          {certification.map((row) => (
            <div
              key={row.label}
              className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#E4D9B8] py-4"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-[#8A7A52]">
                {row.label}
              </span>
              <span className="font-serif text-base text-[#14110A]">
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-[#8A7A52]">
          Certified Product Areas
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="border border-[#D8CDA8] px-5 py-2 text-sm text-[#3A3020]"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      <section className="border-t border-[#E4D9B8] bg-[#F1EAD9]">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 px-6 py-16 text-center sm:px-10">
          <p className="font-serif text-2xl text-[#14110A]">
            Verify a product from Arbroath A.D.1320 Ltd
          </p>
          <p className="max-w-md text-sm text-[#5C5240]">
            Every certified product carries a unique code. Enter it to view its
            digital passport and provenance record.
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/verify"
              className="bg-[#C9A84C] px-8 py-3 text-xs uppercase tracking-[0.2em] text-[#0F0F0F] transition hover:bg-[#B8973F]"
            >
              Verify Product Code →
            </Link>
            <Link
              href="/companies"
              className="border border-[#3A3020] px-8 py-3 text-xs uppercase tracking-[0.2em] text-[#3A3020] transition hover:border-[#C9A84C] hover:text-[#8A6B22]"
            >
              ← Back to Certified Companies
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#E4D9B8] bg-[#FAF7F0]">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#8A7A52]">
            © 2026 Arbroath A.D.1320 Ltd · All Rights Reserved
          </span>
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#8A7A52]">
            E.L.Y.A.S-A.I.™
          </span>
        </div>
      </footer>
    </main>
  );
}

function CertificationSeal() {
  return (
    <div className="mx-auto h-32 w-32 sm:h-36 sm:w-36">
      <svg viewBox="0 0 160 160" className="h-full w-full">
        <circle
          cx="80"
          cy="80"
          r="76"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="2"
        />
        <circle
          cx="80"
          cy="80"
          r="64"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="1"
        />
        <text
          x="80"
          y="74"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="28"
          fontWeight="700"
          fill="#14110A"
        >
          E·A·I
        </text>
        <text
          x="80"
          y="97"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="9"
          letterSpacing="2"
          fill="#8A6B22"
        >
          CERTIFIED
        </text>
        <circle cx="80" cy="8" r="3" fill="#C9A84C" />
        <circle cx="80" cy="152" r="3" fill="#C9A84C" />
        <circle cx="8" cy="80" r="3" fill="#C9A84C" />
        <circle cx="152" cy="80" r="3" fill="#C9A84C" />
      </svg>
    </div>
  );
}