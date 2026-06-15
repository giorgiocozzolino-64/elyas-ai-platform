import Link from "next/link";
import { supabaseAdmin } from "@/lib/supabase/admin";
export const dynamic = "force-dynamic";

type OwnerPageProps = {
  params: Promise<{
    email: string;
  }>;
};

export default async function OwnerProfilePage({ params }: OwnerPageProps) {
  const { email } = await params;
  const decodedEmail = decodeURIComponent(email);

  const { data: claims, error } = await supabaseAdmin
    .from("pinkglow_claims")
    .select("*")
    .eq("owner_email", decodedEmail);

  const owner = claims?.[0];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <p className="uppercase tracking-[0.4em] text-pink-400">
          Owner Profile
        </p>

        <h1 className="mt-6 text-6xl font-bold">
          {owner?.owner_name ?? "Unknown Owner"}
        </h1>

        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
          {decodedEmail}
        </p>

        <p className="mt-6 max-w-4xl text-xl leading-relaxed text-zinc-400">
          Certified ownership profile linked to E.L.Y.A.S-A.I. verified asset
          records.
        </p>

        <div className="mt-12 flex gap-4">
          <span className="rounded-full bg-green-900/40 px-4 py-2 text-green-300">
            VERIFIED OWNER
          </span>

          <span className="rounded-full bg-pink-900/40 px-4 py-2 text-pink-300">
            OWNER REGISTRY ACTIVE
          </span>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <Metric title="Assets Owned" value={String(claims?.length ?? 0)} />
          <Metric title="Product Class" value="Pinkglow Gin" />
          <Metric title="Status" value="LIVE" />
        </div>

        {error && (
          <div className="mt-10 rounded-3xl border border-red-500/20 bg-red-500/10 p-6">
            <p className="text-red-300">{error.message}</p>
          </div>
        )}

        <section className="mt-20">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Owned Assets
          </p>

          <div className="mt-8 overflow-hidden rounded-3xl border border-pink-300/20 bg-white/5">
            <table className="w-full">
              <thead className="border-b border-white/10 bg-black/40">
                <tr>
                  <th className="px-6 py-5 text-left text-sm uppercase tracking-widest text-zinc-500">
                    Serial
                  </th>

                  <th className="px-6 py-5 text-left text-sm uppercase tracking-widest text-zinc-500">
                    Product
                  </th>

                  <th className="px-6 py-5 text-left text-sm uppercase tracking-widest text-zinc-500">
                    Message
                  </th>

                  <th className="px-6 py-5 text-left text-sm uppercase tracking-widest text-zinc-500">
                    Verification
                  </th>
                </tr>
              </thead>

              <tbody>
                {claims?.map((claim: any) => (
                  <tr
                    key={claim.serial}
                    className="border-b border-white/10 hover:bg-pink-500/5"
                  >
                    <td className="px-6 py-5 font-semibold">
                      {claim.serial}
                    </td>

                    <td className="px-6 py-5 text-zinc-300">
                      Pinkglow Gin
                    </td>

                    <td className="px-6 py-5 text-zinc-400">
                      {claim.owner_message ?? "-"}
                    </td>

                    <td className="px-6 py-5">
                      <Link
                        href={`/verify/${claim.serial}`}
                        className="text-pink-300 hover:text-pink-200"
                      >
                        Verify →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-12">
          <Link
            href="/owners"
            className="rounded-2xl border border-pink-300/20 px-6 py-3 text-pink-300 hover:border-pink-300/60"
          >
            ← Back to Owner Registry
          </Link>
        </div>
      </div>
    </main>
  );
}

function Metric({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-3xl border border-pink-300/20 bg-white/5 p-6">
      <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
        {title}
      </p>

      <p className="mt-4 text-3xl font-bold text-pink-300">
        {value}
      </p>
    </div>
  );
}