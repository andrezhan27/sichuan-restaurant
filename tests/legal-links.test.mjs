import assert from "node:assert/strict";
import test from "node:test";
import { normalizeLegalLinks } from "../lib/legal-links.ts";

test("normalizes valid HTTP and HTTPS legal links", () => {
  assert.deepEqual(
    normalizeLegalLinks({
      privacy_policy_url: "https://example.com/privacy",
      terms_and_conditions_url: "http://example.com/terms",
    }),
    {
      privacyPolicyUrl: "https://example.com/privacy",
      termsAndConditionsUrl: "http://example.com/terms",
    },
  );
});

test("handles each nullable legal link independently", () => {
  assert.deepEqual(
    normalizeLegalLinks({
      privacy_policy_url: null,
      terms_and_conditions_url: "https://example.com/terms",
    }),
    {
      privacyPolicyUrl: null,
      termsAndConditionsUrl: "https://example.com/terms",
    },
  );

  assert.deepEqual(
    normalizeLegalLinks({
      privacy_policy_url: "https://example.com/privacy",
      terms_and_conditions_url: null,
    }),
    {
      privacyPolicyUrl: "https://example.com/privacy",
      termsAndConditionsUrl: null,
    },
  );
});

test("rejects empty, malformed, and non-HTTP legal links", () => {
  assert.deepEqual(
    normalizeLegalLinks({
      privacy_policy_url: "javascript:alert(1)",
      terms_and_conditions_url: "not a URL",
    }),
    {
      privacyPolicyUrl: null,
      termsAndConditionsUrl: null,
    },
  );

  assert.deepEqual(
    normalizeLegalLinks({
      privacy_policy_url: "",
      terms_and_conditions_url: "   ",
    }),
    {
      privacyPolicyUrl: null,
      termsAndConditionsUrl: null,
    },
  );
});
