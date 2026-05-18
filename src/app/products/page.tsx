import { ProductCard } from "@/components/products/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { products } from "@/data/products";
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
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
