import { redirect } from "next/navigation";
import Link from "next/link";
import { supabaseAdmin } from "@/lib/supabase/admin";

type ClaimPageProps = {
  params: Promise<{
    asset_id: string;
  }>;
};

export default async function ClaimPage({ params }: ClaimPageProps) {
  const { asset_id } = await params;
  const serial = decodeURIComponent(asset_id);

  const [{ data: asset }, { data: existingClaim }] = await Promise.all([
    supabaseAdmin
      .from("pinkglow_bottles")
      .select("*")
      .eq("serial", serial)
      .maybeSingle(),

    supabaseAdmin
      .from("pinkglow_claims")
      .select("*")
      .eq("serial", serial)
      .maybeSingle(),
  ]);

  if (!asset) {
    return (
      <main className="min-h-screen bg-black text-white">
        <div className="mx-auto max-w-4xl px-8 py-20">
          <h1 className="text-5xl font-bold">Asset not found</h1>
          <p className="mt-6 text-zinc-400">
            No certified asset found for {serial}.
          </p>
        </div>
      </main>
    );
  }

  if (existingClaim) {
    redirect(`/certificate/${serial}`);
  }

  async function claimAsset(formData: FormData) {
    "use server";

    const ownerName = String(formData.get("owner_name") ?? "").trim();
    const ownerEmail = String(formData.get("owner_email") ?? "").trim();
    const ownerMessage = String(formData.get("owner_message") ?? "").trim();

    if (!ownerName || !ownerEmail) {
      throw new Error("Owner name and email are required.");
    }

    const { data: bottle } = await supabaseAdmin
      .from("pinkglow_bottles")
      .select("*")
      .eq("serial", serial)
      .maybeSingle();

    if (!bottle) {
      throw new Error("Certified asset not found.");
    }

    const { data: alreadyClaimed } = await supabaseAdmin
      .from("pinkglow_claims")
      .select("*")
      .eq("serial", serial)
      .maybeSingle();

    if (alreadyClaimed) {
      redirect(`/certificate/${serial}`);
    }

    await supabaseAdmin.from("pinkglow_claims").insert({
      serial,
      bottle_id: bottle.id,
      owner_name: ownerName,
      owner_email: ownerEmail,
      owner_message: ownerMessage || null,
    });

    await supabaseAdmin
      .from("pinkglow_bottles")
      .update({
        status: "claimed",
        updated_at: new Date().toISOString(),
      })
      .eq("serial", serial);

    await supabaseAdmin.from("certification_events").insert({
      company_name: "Old Tom Gin Company Ltd",
      product_class: "Pinkglow Gin",
      asset_serial: serial,
      event_type: "OWNER_REGISTERED",
      event_description: `${ownerName} registered ownership of ${serial}.`,
      owner_name: ownerName,
      owner_email: ownerEmail,
      country: "United Kingdom",
      metadata: {
        source: "claim_form",
        asset_serial: serial,
      },
    });

    redirect(`/certificate/${serial}`);
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-8 py-20">
        <p className="uppercase tracking-[0.4em] text-pink-400">
          Claim Certified Asset
        </p>

        <h1 className="mt-6 text-6xl font-bold">{asset.serial}</h1>

        <p className="mt-6 max-w-3xl text-xl text-zinc-400">
          Register your ownership and unlock your official E.L.Y.A.S-A.I.
          Certificate of Authenticity & Ownership.
        </p>

        <div className="mt-12 rounded-3xl border border-pink-300/20 bg-white/5 p-8">
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Certified Asset
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Info label="Product" value={asset.product_name} />
            <Info label="Edition" value={asset.edition_name} />
            <Info label="Bottle" value={`${asset.bottle_number} / ${asset.total_in_series}`} />
            <Info label="Producer" value="Old Tom Gin Company Ltd" />
          </div>
        </div>

        <form
          action={claimAsset}
          className="mt-12 rounded-3xl border border-pink-300/20 bg-white/5 p-8"
        >
          <p className="uppercase tracking-[0.3em] text-pink-400">
            Ownership Registration
          </p>

          <label className="mt-8 block">
            <span className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Owner Name
            </span>
            <input
              name="owner_name"
              required
              className="mt-3 w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none focus:border-pink-400"
              placeholder="Your name"
            />
          </label>

          <label className="mt-6 block">
            <span className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Email
            </span>
            <input
              name="owner_email"
              type="email"
              required
              className="mt-3 w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none focus:border-pink-400"
              placeholder="your@email.com"
            />
          </label>

          <label className="mt-6 block">
            <span className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Message / Company
            </span>
            <textarea
              name="owner_message"
              className="mt-3 w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none focus:border-pink-400"
              placeholder="Optional message"
              rows={4}
            />
          </label>

          <button
            type="submit"
            className="mt-8 rounded-2xl bg-pink-600 px-8 py-4 font-bold text-white hover:bg-pink-500"
          >
            CLAIM THIS ASSET
          </button>
        </form>

        <div className="mt-10">
          <Link href={`/verify/${serial}`} className="text-pink-300">
            ← Back to verification
          </Link>
        </div>
      </div>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
        {label}
      </p>
      <p className="mt-2 text-lg font-semibold">{value}</p>
    </div>
  );
}