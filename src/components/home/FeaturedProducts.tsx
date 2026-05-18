import Link from "next/link";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductLineup } from "@/components/products/ProductLineup";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedProducts } from "@/data/products";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Range"
          title="Our Jaggery Products"
          description="Nature's sweetness, pure & wholesome — powder, chocolate ghee, adrak ghee, ilaichi ghee, and desi ghee cubes."
        />
        <ProductLineup />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex rounded-full border-2 border-guric-green px-8 py-3 text-sm font-semibold text-guric-green transition hover:bg-guric-green hover:text-white"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
