// lib/supabase/admin.ts — v1.1 SAFE BUILD — 15/06/2026

import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.SUPABASE_URL ||
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://placeholder.supabase.co";

const supabaseServiceRoleKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.SUPABASE_SERVICE_KEY ||
  process.env.SUPABASE_SERVICE_ROLE ||
  "placeholder-service-role-key";

if (
  supabaseUrl === "https://placeholder.supabase.co" ||
  supabaseServiceRoleKey === "placeholder-service-role-key"
) {
  console.warn(
    "Supabase admin environment variables are missing. Build will continue, but live database queries require SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY."
  );
}

export const supabaseAdmin = createClient(
  supabaseUrl,
  supabaseServiceRoleKey,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);