import "server-only";

import { createClient } from "@supabase/supabase-js";
import { normalizeLegalLinks, type LegalLinks } from "@/lib/legal-links";
import { unstable_cache } from "next/cache";

const RESTAURANT_ID = "theoldhouse";
const LEGAL_LINKS_REVALIDATE_SECONDS = 300;

const emptyLegalLinks: LegalLinks = {
  privacyPolicyUrl: null,
  termsAndConditionsUrl: null,
};

const fetchLegalLinks = unstable_cache(
  async (): Promise<LegalLinks> => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

    if (!supabaseUrl || !publishableKey) {
      return emptyLegalLinks;
    }

    try {
      const supabase = createClient(supabaseUrl, publishableKey, {
        auth: {
          autoRefreshToken: false,
          detectSessionInUrl: false,
          persistSession: false,
        },
      });

      const { data, error } = await supabase
        .from("restaurants")
        .select("privacy_policy_url,terms_and_conditions_url")
        .eq("id", RESTAURANT_ID)
        .eq("active", true)
        .eq("booking_widget_enabled", true)
        .maybeSingle();

      if (error || !data) {
        return emptyLegalLinks;
      }

      return normalizeLegalLinks(data);
    } catch {
      return emptyLegalLinks;
    }
  },
  ["the-old-house-legal-links"],
  { revalidate: LEGAL_LINKS_REVALIDATE_SECONDS },
);

export async function getLegalLinks(): Promise<LegalLinks> {
  return fetchLegalLinks();
}
