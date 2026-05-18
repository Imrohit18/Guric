import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brandHighlights, jaggeryFacts } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Why Jaggery",
  description:
    "Discover why Guric jaggery is a healthier natural sweetener — chemical-free, rich in iron & calcium, supports immunity and digestion.",
  path: "/why-jaggery",
  keywords: ["health benefits of jaggery", "natural sweetener", "jaggery vs sugar"],
});

export default function WhyJaggeryPage() {
  return (
    <div className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Health & Wellness"
          title="Why Switch to Guric Jaggery?"
          description="A nutrient-rich traditional food — nature's answer to refined sugar."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-guric-green p-8 text-guric-cream sm:p-10">
            <h2 className="font-display text-2xl font-bold">Health Benefits</h2>
            <ul className="mt-6 space-y-3">
              {jaggeryFacts.map((fact) => (
                <li key={fact} className="flex gap-3 text-sm leading-relaxed sm:text-base">
                  <span className="text-guric-gold">✦</span>
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-guric-green">What Makes Guric Different</h2>
            {brandHighlights.map((item) => (
              <div key={item.title} className="rounded-xl border border-guric-cream-dark bg-white p-5">
                <h3 className="font-semibold text-guric-green">{item.title}</h3>
                <p className="mt-1 text-sm text-guric-brown/75">{item.description}</p>
              </div>
            ))}
            <Link
              href="/products"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-guric-green px-6 py-3 text-sm font-semibold text-white"
            >
              Shop Our Range
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
