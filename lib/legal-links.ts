export type LegalLinks = {
  privacyPolicyUrl: string | null;
  termsAndConditionsUrl: string | null;
};

export function normalizeLegalLinks(row: {
  privacy_policy_url: unknown;
  terms_and_conditions_url: unknown;
}): LegalLinks {
  return {
    privacyPolicyUrl: validateExternalUrl(row.privacy_policy_url),
    termsAndConditionsUrl: validateExternalUrl(row.terms_and_conditions_url),
  };
}

function validateExternalUrl(value: unknown): string | null {
  if (typeof value !== "string" || value.trim() === "") {
    return null;
  }

  try {
    const url = new URL(value.trim());

    return url.protocol === "http:" || url.protocol === "https:" ? url.toString() : null;
  } catch {
    return null;
  }
}
