import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { type MenuImage, menuImages } from "@/data/menu";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Menu | The Old House",
  description: "Explore The Old House menu through a gallery of signature Sichuan dishes and restaurant specialties.",
};

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-24">
        <section className="mx-auto max-w-container-max px-margin-mobile py-10 md:px-margin-desktop md:py-16">
          <div className="max-w-5xl">
            <h1 className="font-display-lg text-[72px] font-normal leading-none tracking-normal text-on-surface sm:text-[96px] md:text-[112px]">
              Menu
            </h1>

            <p className="mt-8 max-w-2xl font-body-lg text-lg leading-8 text-on-surface-variant">
              A generous Sichuan menu from The Old House, moving from handmade dim sum and
              slow-built soups to wok-fired vegetables, seafood, hot dishes, and house signatures.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-outline-variant bg-surface px-6 font-label-sm text-sm font-bold text-on-surface transition-colors duration-200 hover:border-primary hover:text-primary"
                href="/#home"
              >
                <ArrowLeft size={18} strokeWidth={2.2} />
                Back to home
              </Link>
              <Link
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-on-surface px-7 font-label-sm text-sm font-bold text-inverse-on-surface transition-colors duration-200 hover:bg-primary"
                href="/menu/the-old-house-menu-2025.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                View Full Menu
                <ExternalLink size={18} strokeWidth={2.2} />
              </Link>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="mb-6 font-display-lg text-[42px] font-normal leading-tight tracking-normal text-on-surface md:text-[56px]">
              Menu Highlights
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {menuImages.map((image, index) => (
                <MenuDishCard image={image} key={image.src} priority={index < 3} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function MenuDishCard({ image, priority }: { image: MenuImage; priority?: boolean }) {
  return (
    <article className="lantern-shadow group relative aspect-[1.6] overflow-hidden rounded-lg bg-surface-container lg:aspect-[1.45]">
      <Image
        alt={image.alt}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        fill
        priority={priority}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        src={image.src}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex min-h-28 flex-col justify-end p-5 md:p-6">
        <div>
          {image.category ? (
            <p className="mb-1 font-label-sm text-[11px] font-bold uppercase tracking-[0.16em] text-secondary-fixed">
              {image.category}
            </p>
          ) : null}
          <h3 className="font-title-md text-lg font-bold leading-6 text-white md:text-xl">
            {image.title}
          </h3>
          {image.price ? (
            <p className="mt-2 font-label-sm text-sm font-bold text-white/90">{image.price}</p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
