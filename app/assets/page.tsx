import Link from "next/link";
import { supabaseAdmin } from "@/lib/supabase/admin";

export default async function AssetsPage() {
  const [{ data: assets, error: assetsError }, { data: claims }] =
    await Promise.all([
      supabaseAdmin
        .from("pinkglow_bottles")
        .select("*")
        .order("bottle_number", { ascending: true }),

      supabaseAdmin
        .from("pinkglow_claims")
        .select("serial, owner_name, owner_email"),
    ]);

  const claimMap = new Map(
    claims?.map((claim) => [
      claim.serial,
      {
        ownerName: claim.owner_name,
        ownerEmail: claim.owner_email,
      },
    ])
  );

  const claimedCount =
    assets?.filter((asset) => claimMap.has(asset.serial)).length ?? 0;

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <p className="uppercase tracking-[0.4em] text-pink-400">
          E.L.Y.A.S-A.I.
        </p>

        <h1 className="mt-6 text-6xl font-bold">
          Certified Asset Registry
        </h1>

        <p className="mt-6 max-w-4xl text-xl leading-relaxed text-zinc-400">
          Live registry of certified bottles, casks and digital assets managed
          by E.L.Y.A.S-A.I.
        </p>

        <div className="mt-12 rounded-3xl border border-pink-300/20 bg-white/5 p-8">
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="uppercase tracking-[0.3em] text-pink-400">
                Registry Status
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                {assets?.length ?? 0} Certified Assets
              </h2>

              <p className="mt-3 text-zinc-400">
                {claimedCount} assets currently linked to registered owners.
              </p>
            </div>

            <Link
              href="/dashboard"
              className="rounded-2xl border border-pink-300/20 px-6 py-3 text-pink-300 hover:border-pink-300/60"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>

        {assetsError && (
          <div className="mt-10 rounded-3xl border border-red-500/20 bg-red-500/10 p-6">
            <p className="text-red-300">
              Supabase Error: {assetsError.message}
            </p>
          </div>
        )}

        <div className="mt-12 overflow-hidden rounded-3xl border border-pink-300/20 bg-white/5">
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
                  Cask
                </th>

                <th className="px-6 py-5 text-left text-sm uppercase tracking-widest text-zinc-500">
                  Bottle
                </th>

                <th className="px-6 py-5 text-left text-sm uppercase tracking-widest text-zinc-500">
                  Owner
                </th>

                <th className="px-6 py-5 text-left text-sm uppercase tracking-widest text-zinc-500">
                  Claimed
                </th>

                <th className="px-6 py-5 text-left text-sm uppercase tracking-widest text-zinc-500">
                  Verification
                </th>
              </tr>
            </thead>

            <tbody>
              {assets?.map((asset: any) => {
                const claim = claimMap.get(asset.serial);

                return (
                  <tr
                    key={asset.serial}
                    className="border-b border-white/10 hover:bg-pink-500/5"
                  >
                    <td className="px-6 py-5 font-semibold">
                      {asset.serial}
                    </td>

                    <td className="px-6 py-5 text-zinc-300">
                      Pinkglow Gin
                    </td>

                    <td className="px-6 py-5 text-zinc-400">
                      {asset.cask_code ?? "-"}
                    </td>

                    <td className="px-6 py-5 text-zinc-400">
                      {asset.bottle_number ?? "-"} /{" "}
                      {asset.total_in_series ?? "-"}
                    </td>

                    <td className="px-6 py-5 text-zinc-400">
                      {claim?.ownerName ?? "-"}
                    </td>

                    <td className="px-6 py-5">
                      {claim ? (
                        <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-300">
                          YES
                        </span>
                      ) : (
                        <span className="rounded-full bg-zinc-500/20 px-3 py-1 text-xs text-zinc-400">
                          NO
                        </span>
                      )}
                    </td>

                    <td className="px-6 py-5">
                      <Link
                        href={`/verify/${asset.serial}`}
                        className="text-pink-300 hover:text-pink-200"
                      >
                        Verify →
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-12 rounded-3xl border border-pink-300/20 bg-white/5 p-8">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Asset Intelligence
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            <MetricCard
              title="Total Assets"
              value={String(assets?.length ?? 0)}
            />

            <MetricCard
              title="Claimed Assets"
              value={String(claimedCount)}
            />

            <MetricCard
              title="Unclaimed Assets"
              value={String((assets?.length ?? 0) - claimedCount)}
            />

            <MetricCard title="Verification" value="LIVE" />
          </div>
        </div>
      </div>
    </main>
  );
}

function MetricCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
      <p className="text-sm uppercase tracking-widest text-zinc-500">
        {title}
      </p>

      <p className="mt-4 text-3xl font-bold text-pink-300">
        {value}
      </p>
    </div>
  );
}