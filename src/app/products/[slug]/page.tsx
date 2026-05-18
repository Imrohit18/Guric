import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductImage } from "@/components/products/ProductImage";
import { ProductJsonLd } from "@/components/seo/JsonLd";
import { getProductBySlug, products, tierLabels } from "@/data/products";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return createMetadata({
    title: product.name,
    description: product.shortDescription,
    path: `/products/${product.slug}`,
    image: product.image,
    keywords: [product.name, product.tagline, product.category],
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
  <>
    <ProductJsonLd
      name={product.name}
      description={product.description}
      slug={product.slug}
      image={product.image}
    />
    <article>
      <section
        className="border-b border-guric-cream-dark py-12 sm:py-16"
        style={{ background: `linear-gradient(135deg, ${product.accentColor}12, var(--guric-cream))` }}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <ProductImage
            src={product.image}
            alt={product.name}
            variant="detail"
            priority
          />
          <div className="min-w-0">
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white"
              style={{ backgroundColor: product.accentColor }}
            >
              {tierLabels[product.tier]}
            </span>
            <h1 className="mt-3 font-display text-2xl font-bold text-guric-green sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>
            {product.hindiName && (
              <p className="mt-1 text-lg text-guric-brown/60">{product.hindiName}</p>
            )}
            <p className="mt-2 font-display text-xl text-guric-gold">{product.tagline}</p>
            <p className="mt-5 leading-relaxed text-guric-brown/85">{product.description}</p>
            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-guric-green px-6 py-3.5 text-sm font-semibold text-white shadow transition hover:bg-guric-green-dark sm:px-8"
            >
              Enquire for Retail / Bulk
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-3 lg:gap-16 lg:px-8">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="font-display text-2xl font-bold text-guric-green">Uses</h2>
              <ul className="mt-4 space-y-2">
                {product.uses.map((use) => (
                  <li key={use} className="flex gap-3 text-guric-brown/85">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-guric-leaf" />
                    {use}
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-lg bg-amber-50 border border-amber-200 px-4 py-3 text-sm text-amber-900">
                <strong>Tip:</strong> Do not boil milk &amp; jaggery together to avoid curdling of milk.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-guric-green">Key Highlights</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {product.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-guric-brown/85">
                    <svg className="h-5 w-5 shrink-0 text-guric-leaf" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-guric-cream-dark bg-white p-6 shadow-sm">
              <h2 className="font-display text-xl font-bold text-guric-green">Ingredients</h2>
              <ul className="mt-3 space-y-1 text-guric-brown/85">
                {product.ingredients.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-guric-cream-dark bg-white p-6 shadow-sm">
              <h2 className="font-display text-xl font-bold text-guric-green">Nutrition</h2>
              <p className="mt-1 text-xs text-guric-brown/60">{product.nutrition.servingSize}</p>
              <table className="mt-4 w-full text-sm">
                <tbody>
                  {product.nutrition.items.map((row) => (
                    <tr key={row.label} className="border-b border-guric-cream-dark last:border-0">
                      <td className="py-2 text-guric-brown/75">{row.label}</td>
                      <td className="py-2 text-right font-medium text-guric-brown">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="rounded-2xl border border-guric-cream-dark bg-guric-cream/50 p-6">
              <h2 className="font-display text-lg font-bold text-guric-green">Storage</h2>
              <p className="mt-2 text-sm text-guric-brown/80">{product.storage}</p>
            </div>
          </aside>
        </div>
      </section>
    </article>
  </>
  );
}
