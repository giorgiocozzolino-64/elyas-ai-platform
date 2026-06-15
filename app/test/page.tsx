import { supabaseAdmin } from "@/lib/supabase/admin";

export default async function TestPage() {
  const { count, error } = await supabaseAdmin
    .from("pinkglow_bottles")
    .select("*", {
      count: "exact",
      head: true,
    });

  if (error) {
    return (
      <main className="min-h-screen bg-black text-red-500 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Supabase Error</h1>
          <p className="mt-4">{error.message}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="rounded-3xl border border-pink-300/20 bg-white/5 p-10 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-pink-400">
          E.L.Y.A.S-A.I. Connection Test
        </p>

        <h1 className="mt-6 text-5xl font-bold text-pink-300">
          {count}
        </h1>

        <p className="mt-4 text-zinc-400">
          Records found in pinkglow_bottles
        </p>
      </div>
    </main>
  );
}