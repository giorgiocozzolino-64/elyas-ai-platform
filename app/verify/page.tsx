"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function VerifyPage() {
  const router = useRouter();
  const [assetId, setAssetId] = useState("");

  function handleVerify() {
    const cleanAssetId = assetId.trim();

    if (!cleanAssetId) return;

    router.push(`/verify/${encodeURIComponent(cleanAssetId)}`);
  }

  return (
    <main className="min-h-screen bg-[#050505] text-[#F5F0E8]">
      <header className="border-b border-[#2A2318] px-10 py-5 flex items-center justify-between">
        <div>
          <p className="text-3xl font-serif tracking-widest">E.L.Y.A.S-A.I.</p>
          <p className="text-xs tracking-[0.35em] text-[#C9A84C] uppercase">
            Verification Centre
          </p>
        </div>

        <Link
          href="/"
          className="border border-[#C9A84C] px-6 py-3 text-xs uppercase tracking-[0.25em] text-[#C9A84C]"
        >
          Back Home
        </Link>
      </header>

      <section className="max-w-6xl mx-auto px-10 py-24">
        <p className="text-xs uppercase tracking-[0.55em] text-[#C9A84C]">
          Public Verification
        </p>

        <h1 className="mt-8 font-serif text-6xl lg:text-8xl leading-none">
          Verify a
          <br />
          <span className="text-[#C9A84C]">Certified Product</span>
        </h1>

        <p className="mt-10 max-w-3xl text-xl text-[#CFC6AD] leading-relaxed">
          Enter a Certificate ID, Asset ID, QR Code ID or Product Code to verify
          authenticity, ownership and certification status.
        </p>

        <div className="mt-16 border border-[#C9A84C] p-10 bg-[#0B0B0B]">
          <label className="block text-xs uppercase tracking-[0.35em] text-[#C9A84C]">
            Certificate / Asset ID
          </label>

          <input
            type="text"
            value={assetId}
            onChange={(event) => setAssetId(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleVerify();
              }
            }}
            placeholder="Example: PG-FC26-001"
            className="mt-4 w-full bg-black border border-[#2A2318] px-6 py-5 text-lg text-[#F5F0E8] outline-none focus:border-[#C9A84C]"
          />

          <button
            type="button"
            onClick={handleVerify}
            className="mt-6 border border-[#C9A84C] px-10 py-4 text-[#C9A84C] uppercase tracking-[0.25em] hover:bg-[#C9A84C] hover:text-black transition"
          >
            Verify
          </button>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          <InfoCard
            title="Authenticity"
            text="Verify that the product exists within the E.L.Y.A.S-A.I. certification ecosystem."
          />

          <InfoCard
            title="Ownership"
            text="Confirm current ownership and chain of custody where available."
          />

          <InfoCard
            title="Certification"
            text="Review certification status, issue date and supporting documentation."
          />
        </div>
      </section>
    </main>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="border border-[#2A2318] p-8">
      <h2 className="font-serif text-3xl">{title}</h2>
      <p className="mt-5 text-[#CFC6AD] leading-relaxed">{text}</p>
    </div>
  );
}