import { FooterClient } from "@/components/FooterClient";
import { getLegalLinks } from "@/lib/supabase/legal-links";

export async function Footer() {
  const legalLinks = await getLegalLinks();

  return <FooterClient legalLinks={legalLinks} />;
}
