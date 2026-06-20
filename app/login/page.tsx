"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { supabaseClient } from "@/lib/supabase/client";

type UserProfile = {
  role: string;
  company_slug: string;
  is_active: boolean;
};

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Email address and password are required.");
      return;
    }

    setIsSubmitting(true);

    const { data: loginData, error: loginError } =
      await supabaseClient.auth.signInWithPassword({
        email,
        password,
      });

    if (loginError || !loginData.user) {
      setError("Invalid email or password.");
      setIsSubmitting(false);
      return;
    }

    const { data: profile, error: profileError } = await supabaseClient
      .from("user_profiles")
      .select("role, company_slug, is_active")
      .eq("user_id", loginData.user.id)
      .single<UserProfile>();

    if (profileError || !profile) {
      await supabaseClient.auth.signOut();
      setError("No authorised company profile found for this user.");
      setIsSubmitting(false);
      return;
    }

    if (!profile.is_active) {
      await supabaseClient.auth.signOut();
      setError("This user profile is not active.");
      setIsSubmitting(false);
      return;
    }

    if (profile.role === "admin") {
      router.push("/dashboard");
      router.refresh();
      return;
    }

    if (profile.role === "producer") {
      router.push(`/portal/${profile.company_slug}`);
      router.refresh();
      return;
    }

    await supabaseClient.auth.signOut();
    setError("This user role is not authorised.");
    setIsSubmitting(false);
  }

  return (
    <main className="min-h-screen bg-[#050505] text-[#F5F0E8]">
      <header className="flex items-center justify-between border-b border-[#2A2318] px-8 py-5 lg:px-16">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-2xl tracking-[0.12em]">
            E.L.Y.A.S-A.I.
          </span>
          <span className="mt-1.5 text-[10px] uppercase tracking-[0.35em] text-[#C9A84C]">
            Certified Product Intelligence
          </span>
        </Link>

        <Link
          href="/companies"
          className="text-xs uppercase tracking-[0.25em] text-[#BDB49A] hover:text-[#C9A84C]"
        >
          Public Registry
        </Link>
      </header>

      <section className="flex min-h-[calc(100vh-89px)] items-center justify-center px-6 py-16">
        <div className="w-full max-w-5xl border border-[#C9A84C]/35 bg-[#0B0B0B]">
          <div className="grid lg:grid-cols-2">
            <div className="px-8 py-16 lg:px-16 lg:py-24">
              <p className="text-xs uppercase tracking-[0.55em] text-[#C9A84C]">
                Corporate Access
              </p>

              <h1 className="mt-8 font-serif text-4xl leading-tight lg:text-5xl">
                Secure Access Portal
              </h1>

              <p className="mt-8 max-w-md text-sm leading-relaxed text-[#CFC6AD]">
                Access reserved for certified producers, partners and authorised
                E.L.Y.A.S-A.I. users.
              </p>

              <form onSubmit={handleSubmit} className="mt-10 max-w-md">
                <label className="block text-[11px] uppercase tracking-[0.25em] text-[#8E835F]">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="mt-3 w-full border border-[#2A2318] bg-[#050505] px-4 py-3.5 text-sm text-[#F5F0E8] outline-none focus:border-[#C9A84C]"
                />

                <label className="mt-6 block text-[11px] uppercase tracking-[0.25em] text-[#8E835F]">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="mt-3 w-full border border-[#2A2318] bg-[#050505] px-4 py-3.5 text-sm text-[#F5F0E8] outline-none focus:border-[#C9A84C]"
                />

                {error && (
                  <p className="mt-5 text-xs text-[#D98A6B]">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-9 w-full bg-[#C9A84C] px-8 py-3.5 text-xs uppercase tracking-[0.25em] text-[#0F0F0F] hover:bg-[#B8973F] disabled:opacity-60"
                >
                  {isSubmitting ? "Signing In…" : "Sign In →"}
                </button>

                <div className="mt-7 flex justify-between gap-4 text-xs">
                  <Link href="/forgot-password" className="text-[#BDB49A]">
                    Forgot Password?
                  </Link>
                  <Link href="/companies" className="text-[#8E835F]">
                    Back to Public Registry
                  </Link>
                </div>
              </form>
            </div>

            <div className="hidden items-center justify-center border-l border-[#C9A84C]/20 bg-[#080808] lg:flex">
              <CertificationSeal />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function CertificationSeal() {
  return (
    <div className="h-64 w-64">
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
          fill="#F5F0E8"
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
          fill="#C9A84C"
        >
          CERTIFIED
        </text>
      </svg>
    </div>
  );
}