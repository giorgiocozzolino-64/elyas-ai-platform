import Link from "next/link";

export default function CorporatePortalPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#F5F0E8]">
      <header className="border-b border-[#2A2318] px-10 py-5 flex items-center justify-between">
        <div>
          <p className="text-3xl font-serif tracking-widest">E.L.Y.A.S-A.I.</p>
          <p className="text-xs tracking-[0.35em] text-[#C9A84C] uppercase">
            Corporate Certification Portal
          </p>
        </div>

        <nav className="hidden lg:flex gap-8 text-xs uppercase tracking-[0.25em]">
          <Link href="/">Public Home</Link>
          <Link href="/products">Public Registry</Link>
          <Link href="/dashboard">Admin Dashboard</Link>
        </nav>

        <Link
          href="/login"
          className="border border-[#C9A84C] px-8 py-3 text-xs uppercase tracking-[0.25em] text-[#C9A84C]"
        >
          Secure Login
        </Link>
      </header>

      <section className="px-10 lg:px-20 py-20 border-b border-[#2A2318]">
        <p className="text-xs uppercase tracking-[0.55em] text-[#C9A84C]">
          I · Corporate Layer
        </p>

        <h1 className="mt-8 font-serif text-6xl lg:text-8xl leading-none">
          Producer
          <br />
          <span className="text-[#C9A84C]">Certification Portal</span>
        </h1>

        <p className="mt-10 max-w-3xl font-serif text-2xl leading-relaxed text-[#E8DDBE]">
          Manage certified companies, product classes, digital assets, ownership
          records and certificate operations from one institutional control layer.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 border-b border-[#2A2318]">
        <PortalCard
          href="/companies"
          title="Companies Registry"
          index="01"
          text="Manage certified producers, company profiles, certification status and onboarding records."
        />
        <PortalCard
          href="/products"
          title="Product Registry"
          index="02"
          text="Manage certified product classes, public product pages and certification metadata."
        />
        <PortalCard
          href="/portal/assets"
          title="Asset Registry"
          index="03"
          text="Control bottle, cask, batch, ingredient and unit-level certified digital assets."
        />
        <PortalCard
          href="/owners"
          title="Owner Registry"
          index="04"
          text="View ownership records, claims, transfers and verified owner profiles."
        />
        <PortalCard
          href="/portal/certificates"
          title="Certificate Centre"
          index="05"
          text="Generate, verify and manage certificates linked to product and asset identities."
        />
        <PortalCard
          href="/portal/analytics"
          title="Scan Analytics"
          index="06"
          text="Analyse QR/NFC scans, geographic reach, engagement and verification behaviour."
        />
      </section>

      <section className="px-10 lg:px-20 py-16">
        <div className="border border-[#C9A84C] p-10">
          <p className="text-xs uppercase tracking-[0.55em] text-[#C9A84C]">
            II · Separation of Layers
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <Layer title="Public Area">
              Verification, product discovery, certificates and public trust.
            </Layer>
            <Layer title="Corporate Area">
              Producer operations, product registration, assets and ownership
              records.
            </Layer>
            <Layer title="Admin Area">
              Platform governance, certification control and ecosystem
              intelligence.
            </Layer>
          </div>
        </div>
      </section>
    </main>
  );
}

function PortalCard({
  href,
  title,
  index,
  text,
}: {
  href: string;
  title: string;
  index: string;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="group min-h-[260px] border-r border-b border-[#2A2318] p-10 hover:bg-[#0D0B07] transition"
    >
      <p className="text-[#C9A84C] tracking-[0.35em] text-xs">{index}</p>
      <h2 className="mt-8 font-serif text-3xl text-[#F5F0E8]">{title}</h2>
      <p className="mt-6 leading-relaxed text-[#BDB49A]">{text}</p>
      <p className="mt-8 text-[#C9A84C]">Open →</p>
    </Link>
  );
}

function Layer({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-serif text-3xl text-[#F5F0E8]">{title}</p>
      <p className="mt-5 leading-relaxed text-[#BDB49A]">{children}</p>
    </div>
  );
}