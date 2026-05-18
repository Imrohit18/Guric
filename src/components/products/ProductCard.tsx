import Link from "next/link";
import type { Product } from "@/data/products";
import { categoryLabels, tierLabels } from "@/data/products";
import { ProductImage } from "@/components/products/ProductImage";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-guric-cream-dark bg-white shadow-sm transition hover:shadow-lg sm:hover:-translate-y-1">
      <Link
        href={`/products/${product.slug}`}
        className="relative block w-full max-w-full"
      >
        <ProductImage src={product.image} alt={product.name} variant="card" />
        {product.badge && (
          <span
            className="absolute left-2 top-2 z-10 rounded-full px-2.5 py-1 text-[0.65rem] font-bold text-white shadow sm:left-3 sm:top-3 sm:px-3 sm:text-xs"
            style={{ backgroundColor: product.accentColor }}
          >
            {product.badge}
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
        <div className="mb-2 flex flex-wrap gap-2">
          <span className="rounded-full bg-guric-cream px-2.5 py-0.5 text-xs font-medium text-guric-brown">
            {categoryLabels[product.category]}
          </span>
          <span className="rounded-full bg-guric-green/10 px-2.5 py-0.5 text-xs font-medium text-guric-green">
            {tierLabels[product.tier]}
          </span>
        </div>
        <h3 className="font-display text-lg font-bold leading-snug text-guric-green sm:text-xl">
          <Link href={`/products/${product.slug}`} className="hover:underline">
            {product.name}
          </Link>
        </h3>
        {product.hindiName && (
          <p className="mt-0.5 text-sm text-guric-brown/60">{product.hindiName}</p>
        )}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-guric-brown/75">
          {product.shortDescription}
        </p>
        <Link
          href={`/products/${product.slug}`}
          className="mt-4 inline-flex min-h-[44px] items-center gap-1 text-sm font-semibold text-guric-green hover:underline"
        >
          View details
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
