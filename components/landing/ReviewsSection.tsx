"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { restaurantReviews } from "@/data/reviews";
import Image from "next/image";
import { ContinuousCarousel } from "./ContinuousCarousel";

export function ReviewsSection() {
  const { language } = useLanguage();
  const pt = language === "pt";
  return (
    <section className="section reviews" id="reviews" aria-labelledby="reviews-title">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / {pt ? "PALAVRAS À MESA" : "WORDS AT THE TABLE"}</p>
            <h2 id="reviews-title">{pt ? "Quem vem, recomenda." : "Good food. Kind words."}</h2>
          </div>
          <a className="text-link" href={restaurantReviews.sourceUrl} target="_blank" rel="noreferrer">
            {pt ? "Ver avaliações no Google" : "Read reviews on Google"}
          </a>
        </div>
        <div className="review-backdrop">
          <Image src="/restaurant/menu-sharing-feast.webp" alt={pt ? "Uma mesa cheia de sabores de Sichuan para partilhar" : "A table of Sichuan flavours, ready to share"} fill sizes="(min-width: 1500px) 1320px, 100vw" />
          <a className="google-rating" href={restaurantReviews.sourceUrl} target="_blank" rel="noreferrer" aria-label={`${pt ? "Avaliações Google" : "Google reviews"}: ${restaurantReviews.rating} / 5`}>
            <svg className="google-mark" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.39-.18-2.05H12v3.88h5.38a4.6 4.6 0 0 1-2 3.02v2.51h3.24c1.9-1.75 2.98-4.33 2.98-7.36Z" />
              <path fill="#34A853" d="M12 22c2.7 0 4.96-.9 6.62-2.41l-3.24-2.51c-.9.6-2.05.96-3.38.96-2.6 0-4.8-1.76-5.59-4.12H3.07v2.59A10 10 0 0 0 12 22Z" />
              <path fill="#FBBC05" d="M6.41 13.92a6 6 0 0 1 0-3.84V7.49H3.07a10 10 0 0 0 0 9.02l3.34-2.59Z" />
              <path fill="#EA4335" d="M12 5.96c1.47 0 2.79.5 3.82 1.5l2.87-2.87A9.6 9.6 0 0 0 12 2a10 10 0 0 0-8.93 5.49l3.34 2.59C7.2 7.72 9.4 5.96 12 5.96Z" />
            </svg>
            <span><span className="rating-label">{pt ? "Avaliações Google" : "Google reviews"}</span><span className="rating-value">{restaurantReviews.rating} <span className="review-stars" aria-hidden="true">★★★★★</span></span></span>
          </a>
        </div>
      </div>
      <ContinuousCarousel className="review-carousel" label={pt ? "Avaliações de clientes" : "Guest reviews"} speed={22} showControls={false} renderItems={() => (
        <>
          {restaurantReviews.items.map((review) => (
            <figure className="review-card" key={review.name}>
              <span className="review-stars" role="img" aria-label={`${review.rating} / 5`}>★★★★★</span>
              <blockquote lang="en">“{review.quote}”</blockquote>
              <figcaption>
                <span className="review-avatar" aria-hidden="true">{review.initial}</span>
                <span><strong>{review.name}</strong><span className="review-source">Google · {pt ? "Excerto da avaliação" : "Review excerpt"}</span></span>
              </figcaption>
            </figure>
          ))}
        </>
      )} />
    </section>
  );
}
