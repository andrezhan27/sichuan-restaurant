import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { AmbienceMarquee } from "@/components/landing/AmbienceMarquee";
import { CulinarySignatures } from "@/components/landing/CulinarySignatures";
import { ReservationSection } from "@/components/landing/ReservationSection";
import { ReviewsSection } from "@/components/landing/ReviewsSection";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CulinarySignatures />
        <AmbienceMarquee />
        <ReservationSection />
        <ReviewsSection />
      </main>
      <Footer />
    </>
  );
}
