import { Hero } from "@/components/home/Hero";
import { Highlights } from "@/components/home/Highlights";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { StorySection } from "@/components/home/StorySection";
import { CTABanner } from "@/components/home/CTABanner";
import { ProductListJsonLd } from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <>
      <ProductListJsonLd />
      <Hero />
      <Highlights />
      <FeaturedProducts />
      <StorySection />
      <CTABanner />
    </>
  );
}
