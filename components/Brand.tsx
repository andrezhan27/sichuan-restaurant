import Link from "next/link";

export function Brand() {
  return (
    <Link
      className="brand"
      href="/"
      aria-label="Sichuan Restaurant — início / home"
    >
      <span className="brand-seal" aria-hidden="true">
        川
      </span>
      <span className="brand-wordmark">
        SICHUAN<span>RESTAURANT · 川渝印象</span>
      </span>
    </Link>
  );
}
