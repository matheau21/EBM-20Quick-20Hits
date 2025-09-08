import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE;

if (!SUPABASE_URL) {
  throw new Error("SUPABASE_URL is not set");
}
if (!SUPABASE_SERVICE_ROLE) {
  throw new Error("SUPABASE_SERVICE_ROLE is not set");
}

export const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE, {
  auth: { persistSession: false },
});
