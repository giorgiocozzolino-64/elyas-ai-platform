import Link from "next/link";

export const dynamic = "force-dynamic";

export default function CorporatePortalPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#F5F0E8]">
      <header className="border-b border-[#2A2318] px-8 py-5 lg:px-12 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl tracking-widest">
          E.L.Y.A.S-A.I.
        </Link>

        <Link
          href="/"
          className="text-xs uppercase tracking-[0.25em] text-[#BDB49A] transition hover:text-[#C9A84C]"
        >
          Public Home
        </Link>
      </header>

      <section className="flex min-h-[calc(100vh-73px)] items-center justify-center px-8 py-20">
        <div className="w-full max-w-3xl border border-[#C9A84C]/35 bg-[#0B0B0B] px-8 py-14 text-center lg:px-16 lg:py-20">
          <p className="text-xs uppercase tracking-[0.55em] text-[#C9A84C]">
            Corporate Access
          </p>

          <h1 className="mt-8 font-serif text-5xl leading-tight lg:text-7xl">
            Producer
            <br />
            Certification Portal
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#CFC6AD]">
            This area is reserved for certified producers, partners and
            authorised corporate users.
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#8E835F]">
            Access is required to manage product records, digital assets,
            ownership data, certification operations and producer-level
            verification workflows.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/login"
              className="bg-[#C9A84C] px-8 py-3 text-xs uppercase tracking-[0.25em] text-[#0F0F0F] transition hover:bg-[#B8973F]"
            >
              Secure Login →
            </Link>

            <Link
              href="/companies"
              className="border border-[#C9A84C]/60 px-8 py-3 text-xs uppercase tracking-[0.25em] text-[#C9A84C] transition hover:bg-[#C9A84C] hover:text-[#0F0F0F]"
            >
              Public Registry
            </Link>
          </div>

          <div className="mt-12 border-t border-[#2A2318] pt-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#6F664D]">
              Authorised users only · E.L.Y.A.S-A.I. Corporate Layer
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}