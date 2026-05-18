import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { categoryLabels, tierLabels } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-guric-cream-dark bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/products/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-guric-cream">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {product.badge && (
          <span
            className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold text-white shadow"
            style={{ backgroundColor: product.accentColor }}
          >
            {product.badge}
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-2 flex flex-wrap gap-2">
          <span className="rounded-full bg-guric-cream px-2.5 py-0.5 text-xs font-medium text-guric-brown">
            {categoryLabels[product.category]}
          </span>
          <span className="rounded-full bg-guric-green/10 px-2.5 py-0.5 text-xs font-medium text-guric-green">
            {tierLabels[product.tier]}
          </span>
        </div>
        <h3 className="font-display text-xl font-bold text-guric-green">
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
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-guric-green hover:underline"
        >
          View details
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
