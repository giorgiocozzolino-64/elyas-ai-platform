import Link from "next/link";

export const dynamic = "force-dynamic";

export default function CorporatePortalPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-[#F5F0E8]">
      {/* Ambient backdrop glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(201,168,76,0.07) 0%, rgba(5,5,5,0) 60%)",
        }}
      />

      <header className="relative z-10 flex items-center justify-between border-b border-[#2A2318] px-8 py-5 lg:px-16">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-2xl tracking-[0.12em]">
            E.L.Y.A.S-A.I.
          </span>
          <span className="mt-1.5 text-[10px] uppercase tracking-[0.35em] text-[#C9A84C]">
            Certified Product Intelligence
          </span>
        </Link>

        <Link
          href="/"
          className="text-xs uppercase tracking-[0.25em] text-[#BDB49A] transition hover:text-[#C9A84C]"
        >
          Public Home
        </Link>
      </header>

      <section className="relative z-10 flex min-h-[calc(100vh-89px)] items-center justify-center px-6 py-16 lg:px-12 lg:py-24">
        <div className="relative mx-auto w-full max-w-[1500px] lg:w-[78%]">
          {/* Corner brackets — institutional framing device */}
          <span className="absolute -left-3 -top-3 hidden h-8 w-8 border-l border-t border-[#C9A84C]/50 lg:block" />
          <span className="absolute -right-3 -top-3 hidden h-8 w-8 border-r border-t border-[#C9A84C]/50 lg:block" />
          <span className="absolute -bottom-3 -left-3 hidden h-8 w-8 border-b border-l border-[#C9A84C]/50 lg:block" />
          <span className="absolute -bottom-3 -right-3 hidden h-8 w-8 border-b border-r border-[#C9A84C]/50 lg:block" />

          <div className="border border-[#C9A84C]/35 bg-[#0B0B0B]">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              {/* LEFT — access & credentials */}
              <div className="flex flex-col justify-center px-8 py-16 lg:px-16 lg:py-24">
                <p className="text-xs uppercase tracking-[0.55em] text-[#C9A84C]">
                  Corporate Access
                </p>

                <h1 className="mt-8 font-serif text-5xl leading-[1.05] lg:text-6xl xl:text-7xl">
                  Certified
                  <br />
                  Producer
                  <br />
                  Network
                </h1>

                <div className="mt-6 h-px w-16 bg-[#C9A84C]/50" />

                <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#CFC6AD]">
                  This area is reserved for certified producers, partners and
                  authorised corporate users.
                </p>

                <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#8E835F]">
                  Access is required to manage product records, digital
                  assets, ownership data, certification operations and
                  producer-level verification workflows.
                </p>

                <div className="mt-12 flex flex-wrap items-center gap-4">
                  <Link
                    href="/login"
                    className="bg-[#C9A84C] px-9 py-3.5 text-xs uppercase tracking-[0.25em] text-[#0F0F0F] transition hover:bg-[#B8973F]"
                  >
                    Secure Login →
                  </Link>

                  <Link
                    href="/companies"
                    className="border border-[#C9A84C]/60 px-9 py-3.5 text-xs uppercase tracking-[0.25em] text-[#C9A84C] transition hover:bg-[#C9A84C] hover:text-[#0F0F0F]"
                  >
                    Public Registry
                  </Link>
                </div>

                <p className="mt-12 max-w-md text-[11px] uppercase leading-relaxed tracking-[0.2em] text-[#6F664D]">
                  Access reserved for certified producers, partners and
                  authorised E.L.Y.A.S-A.I. users.
                </p>
              </div>

              {/* RIGHT — certification seal */}
              <div className="relative flex flex-col items-center justify-center border-t border-[#C9A84C]/20 bg-[#080808] px-10 py-16 lg:border-l lg:border-t-0 lg:py-24">
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 45%, rgba(201,168,76,0.08) 0%, rgba(8,8,8,0) 65%)",
                  }}
                />

                <div
                  className="relative"
                  style={{ filter: "drop-shadow(0 0 32px rgba(201,168,76,0.16))" }}
                >
                  {/* faint guilloché backdrop rings for a security-document feel */}
                  <svg
                    viewBox="0 0 420 420"
                    className="pointer-events-none absolute inset-0 h-56 w-56 opacity-40 lg:h-72 lg:w-72 xl:h-80 xl:w-80"
                  >
                    <circle cx="210" cy="210" r="205" fill="none" stroke="#C9A84C" strokeOpacity="0.12" strokeWidth="1" />
                    <circle cx="210" cy="210" r="180" fill="none" stroke="#C9A84C" strokeOpacity="0.08" strokeWidth="1" />
                  </svg>

                  <svg
                    viewBox="0 0 420 420"
                    className="relative h-56 w-56 lg:h-72 lg:w-72 xl:h-80 xl:w-80"
                  >
                    <defs>
                      {/* arc spans only the upper hemisphere — text can never render upside down */}
                      <path id="sealTextPath" d="M 52.43,182.22 A 160,160 0 0,1 367.57,182.22" />
                    </defs>

                    {/* hairline outer ring */}
                    <circle cx="210" cy="210" r="195" fill="none" stroke="#C9A84C" strokeOpacity="0.4" strokeWidth="1" />
                    {/* text-band rings */}
                    <circle cx="210" cy="210" r="172" fill="none" stroke="#C9A84C" strokeOpacity="0.3" strokeWidth="1" />
                    <circle cx="210" cy="210" r="148" fill="none" stroke="#C9A84C" strokeOpacity="0.3" strokeWidth="1" />
                    {/* inner ring framing the monogram */}
                    <circle cx="210" cy="210" r="118" fill="none" stroke="#C9A84C" strokeOpacity="0.55" strokeWidth="1.25" />

                    {/* single upright text band, upper hemisphere only */}
                    <text fill="#C9A84C" fontSize="12.5" letterSpacing="3.2">
                      <textPath href="#sealTextPath" startOffset="50%" textAnchor="middle">
                        E.L.Y.A.S-A.I. · CERTIFICATION AUTHORITY
                      </textPath>
                    </text>

                    {/* orientation mark, 12 o'clock */}
                    <rect x="206" y="6" width="8" height="8" fill="#C9A84C" transform="rotate(45 210 10)" />

                    {/* center lockup */}
                    <line x1="158" y1="195" x2="262" y2="195" stroke="#C9A84C" strokeOpacity="0.4" strokeWidth="1" />
                    <text
                      x="210"
                      y="240"
                      textAnchor="middle"
                      fill="#F5F0E8"
                      fontSize="56"
                      fontFamily="Georgia, serif"
                      letterSpacing="3"
                    >
                      E·A
                    </text>
                    <line x1="158" y1="263" x2="262" y2="263" stroke="#C9A84C" strokeOpacity="0.4" strokeWidth="1" />
                    <text
                      x="210"
                      y="286"
                      textAnchor="middle"
                      fill="#8E835F"
                      fontSize="9.5"
                      letterSpacing="2.6"
                    >
                      AUTHORISED ACCESS ONLY
                    </text>
                  </svg>
                </div>

                <p className="mt-10 text-center text-xs uppercase tracking-[0.4em] text-[#C9A84C]/80">
                  Trust &amp; Provenance
                </p>
                <p className="mt-3 max-w-xs text-center text-[11px] leading-relaxed text-[#6F664D]">
                  Every credential is verified against the E.L.Y.A.S-A.I.
                  corporate registry before access is granted.
                </p>
              </div>
            </div>

            {/* footer strip */}
            <div className="border-t border-[#2A2318] px-8 py-6 text-center lg:px-16">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#6F664D]">
                Authorised users only · E.L.Y.A.S-A.I. Corporate Layer
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
