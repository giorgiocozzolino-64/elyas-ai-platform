"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

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

    try {
      // TODO: wire to the real authentication endpoint (e.g. Supabase auth).
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials. Please try again.");
      }

      router.push("/dashboard");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to sign in. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-[#F5F0E8]">
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
          href="/companies"
          className="text-xs uppercase tracking-[0.25em] text-[#BDB49A] transition hover:text-[#C9A84C]"
        >
          Public Registry
        </Link>
      </header>

      <section className="relative z-10 flex min-h-[calc(100vh-89px)] items-center justify-center px-6 py-16 lg:px-12 lg:py-24">
        <div className="relative mx-auto w-full max-w-[1500px] lg:w-[78%]">
          <span className="absolute -left-3 -top-3 hidden h-8 w-8 border-l border-t border-[#C9A84C]/50 lg:block" />
          <span className="absolute -right-3 -top-3 hidden h-8 w-8 border-r border-t border-[#C9A84C]/50 lg:block" />
          <span className="absolute -bottom-3 -left-3 hidden h-8 w-8 border-b border-l border-[#C9A84C]/50 lg:block" />
          <span className="absolute -bottom-3 -right-3 hidden h-8 w-8 border-b border-r border-[#C9A84C]/50 lg:block" />

          <div className="border border-[#C9A84C]/35 bg-[#0B0B0B]">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              {/* LEFT — sign-in form */}
              <div className="flex flex-col justify-center px-8 py-16 lg:px-16 lg:py-24">
                <p className="text-xs uppercase tracking-[0.55em] text-[#C9A84C]">
                  Corporate Access
                </p>

                <h1 className="mt-8 font-serif text-4xl leading-tight lg:text-5xl">
                  Secure Access Portal
                </h1>

                <div className="mt-6 h-px w-16 bg-[#C9A84C]/50" />

                <p className="mt-8 max-w-md text-[15px] leading-relaxed text-[#CFC6AD]">
                  Access reserved for certified producers, partners and
                  authorised E.L.Y.A.S-A.I. users.
                </p>

                <form onSubmit={handleSubmit} className="mt-12 max-w-md">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[11px] uppercase tracking-[0.25em] text-[#8E835F]"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="name@company.com"
                      className="mt-3 w-full border border-[#2A2318] bg-[#050505] px-4 py-3.5 text-sm text-[#F5F0E8] placeholder:text-[#5A523B] outline-none transition focus:border-[#C9A84C]/70"
                    />
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="password"
                      className="block text-[11px] uppercase tracking-[0.25em] text-[#8E835F]"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="••••••••"
                      className="mt-3 w-full border border-[#2A2318] bg-[#050505] px-4 py-3.5 text-sm text-[#F5F0E8] placeholder:text-[#5A523B] outline-none transition focus:border-[#C9A84C]/70"
                    />
                  </div>

                  {error && (
                    <p className="mt-5 text-xs leading-relaxed text-[#D98A6B]">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-9 w-full bg-[#C9A84C] px-8 py-3.5 text-xs uppercase tracking-[0.25em] text-[#0F0F0F] transition hover:bg-[#B8973F] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Signing In…" : "Sign In →"}
                  </button>

                  <div className="mt-7 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <Link
                      href="/forgot-password"
                      className="text-[#BDB49A] transition hover:text-[#C9A84C]"
                    >
                      Forgot Password?
                    </Link>
                    <Link
                      href="/companies"
                      className="uppercase tracking-[0.2em] text-[#8E835F] transition hover:text-[#C9A84C]"
                    >
                      Back to Public Registry
                    </Link>
                  </div>
                </form>

                <p className="mt-12 max-w-md text-[11px] uppercase leading-relaxed tracking-[0.2em] text-[#6F664D]">
                  Authorised users only · E.L.Y.A.S-A.I. Corporate Layer
                </p>
              </div>

              {/* RIGHT — certification seal */}
              <div className="relative hidden flex-col items-center justify-center border-l border-[#C9A84C]/20 bg-[#080808] px-10 py-16 lg:flex lg:py-24">
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
                      <path id="loginSealTextPath" d="M 52.43,182.22 A 160,160 0 0,1 367.57,182.22" />
                    </defs>

                    <circle cx="210" cy="210" r="195" fill="none" stroke="#C9A84C" strokeOpacity="0.4" strokeWidth="1" />
                    <circle cx="210" cy="210" r="172" fill="none" stroke="#C9A84C" strokeOpacity="0.3" strokeWidth="1" />
                    <circle cx="210" cy="210" r="148" fill="none" stroke="#C9A84C" strokeOpacity="0.3" strokeWidth="1" />
                    <circle cx="210" cy="210" r="118" fill="none" stroke="#C9A84C" strokeOpacity="0.55" strokeWidth="1.25" />

                    <text fill="#C9A84C" fontSize="12.5" letterSpacing="3.2">
                      <textPath href="#loginSealTextPath" startOffset="50%" textAnchor="middle">
                        E.L.Y.A.S-A.I. · CERTIFICATION AUTHORITY
                      </textPath>
                    </text>

                    <rect x="206" y="6" width="8" height="8" fill="#C9A84C" transform="rotate(45 210 10)" />

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

            <div className="border-t border-[#2A2318] px-8 py-6 text-center lg:px-16">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#6F664D]">
                Mc Fratm Ltd · Scotland — E.L.Y.A.S-A.I. Secure Access
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
