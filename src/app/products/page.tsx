import { ProductCard } from "@/components/products/ProductCard";
import { ProductLineup } from "@/components/products/ProductLineup";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { productLineupSlugs, products } from "@/data/products";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Products",
  description:
    "Browse Guric jaggery products — organic powder, handmade cubes, desi ghee cubes, chocolate jaggery, adhark & ilaychi flavoured cubes.",
  path: "/products",
  keywords: [
    "jaggery powder online",
    "jaggery cubes",
    "chocolate jaggery",
    "desi ghee jaggery",
    "ginger jaggery",
    "cardamom jaggery",
  ],
});

export default function ProductsPage() {
  return (
    <div className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Full Catalogue"
          title="Our Jaggery Products"
          description="Classic everyday jaggery to signature premium ranges — chemical-free, naturally sweet."
        />
        <ProductLineup />
        <div className="mt-14">
          <h2 className="font-display text-2xl font-bold text-guric-green sm:text-3xl">
            Shop by Product
          </h2>
          <p className="mt-2 text-guric-brown/75">
            Each jar is enriched with real buffalo ghee — 100% natural, chemical-free, no added sugar.
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {productLineupSlugs.map((slug) => {
            const product = products.find((p) => p.slug === slug);
            return product ? <ProductCard key={product.slug} product={product} /> : null;
          })}
        </div>
        <div className="mt-14">
          <h2 className="font-display text-xl font-bold text-guric-green">More from Guric</h2>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products
            .filter((p) => !productLineupSlugs.includes(p.slug as (typeof productLineupSlugs)[number]))
            .map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
}
