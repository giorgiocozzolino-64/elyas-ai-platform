import Link from "next/link";
import { supabaseAdmin } from "@/lib/supabase/admin";
export const dynamic = "force-dynamic";

export default async function OwnersPage() {
  const { data: claims, error } = await supabaseAdmin
    .from("pinkglow_claims")
    .select("*");

  const ownerMap = new Map();

  claims?.forEach((claim: any) => {
    const key = claim.owner_email || claim.email || "unknown";

    if (!ownerMap.has(key)) {
      ownerMap.set(key, {
        name: claim.owner_name || claim.full_name || "Unknown Owner",
        email: claim.owner_email || claim.email || "-",
        assets: 0,
      });
    }

    ownerMap.get(key).assets += 1;
  });

  const owners = Array.from(ownerMap.values());

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <p className="uppercase tracking-[0.4em] text-pink-400">
          E.L.Y.A.S-A.I.
        </p>

        <h1 className="mt-6 text-6xl font-bold">Owner Registry</h1>

        <p className="mt-6 max-w-4xl text-xl leading-relaxed text-zinc-400">
          Registry of verified owners linked to certified assets.
        </p>

        <div className="mt-12 rounded-3xl border border-pink-300/20 bg-white/5 p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="uppercase tracking-[0.3em] text-pink-400">
                Registry Status
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                {owners.length} Registered Owners
              </h2>
            </div>

            <Link
              href="/dashboard"
              className="rounded-2xl border border-pink-300/20 px-6 py-3 text-pink-300"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>

        {error && (
          <div className="mt-10 rounded-3xl border border-red-500/20 bg-red-500/10 p-6">
            <p>{error.message}</p>
          </div>
        )}

        <div className="mt-12 overflow-hidden rounded-3xl border border-pink-300/20 bg-white/5">
          <table className="w-full">
            <thead className="border-b border-white/10 bg-black/40">
              <tr>
                <th className="px-6 py-5 text-left text-zinc-500">Owner</th>

                <th className="px-6 py-5 text-left text-zinc-500">Email</th>

                <th className="px-6 py-5 text-left text-zinc-500">
                  Assets Owned
                </th>

                <th className="px-6 py-5 text-left text-zinc-500">Status</th>

                <th className="px-6 py-5 text-left text-zinc-500">Profile</th>
              </tr>
            </thead>

            <tbody>
              {owners.map((owner: any) => (
                <tr key={owner.email} className="border-b border-white/10">
                  <td className="px-6 py-5 font-semibold">
                    <Link
                      href={`/owners/${encodeURIComponent(owner.email)}`}
                      className="text-white hover:text-pink-300"
                    >
                      {owner.name}
                    </Link>
                  </td>

                  <td className="px-6 py-5 text-zinc-400">{owner.email}</td>

                  <td className="px-6 py-5 text-pink-300">{owner.assets}</td>

                  <td className="px-6 py-5">
                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">
                      VERIFIED
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <Link
                      href={`/owners/${encodeURIComponent(owner.email)}`}
                      className="text-pink-300 hover:text-pink-200"
                    >
                      Open →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <MetricCard title="Registered Owners" value={String(owners.length)} />

          <MetricCard
            title="Assets Claimed"
            value={String(claims?.length ?? 0)}
          />

          <MetricCard title="Registry Status" value="LIVE" />
        </div>
      </div>
    </main>
  );
}

function MetricCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
      <p className="text-sm uppercase tracking-widest text-zinc-500">{title}</p>

      <p className="mt-4 text-3xl font-bold text-pink-300">{value}</p>
    </div>
  );
}