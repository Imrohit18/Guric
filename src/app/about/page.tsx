import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { jaggeryFacts, siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about Guric — pure chemical-free jaggery from Maharashtra by Shri Balaji Gul Udyog, Pune. ISO certified, FSSAI licensed.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div>
      <section className="section-padding border-b border-guric-cream-dark bg-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="About Guric"
            title="Healthy, Nutri-Rich & Pure"
            description="Guric is a pure jaggery brand rooted in Maharashtra's sugarcane heritage — bringing traditional goodness to modern kitchens."
            align="left"
          />
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-5 text-guric-brown/85 leading-relaxed">
              <p>
                {siteConfig.manufacturer} crafts Guric jaggery using time-honoured methods — herbally
                purified, without bleach, sulphur, or synthetic additives. Every batch reflects the
                unique original traditional jaggery taste and colour.
              </p>
              <p>
                From our signature chocolate jaggery cubes to everyday powder and premium desi ghee
                cubes, we offer a complete range from classic to premium for households and retail
                partners across India.
              </p>
              <ul className="grid gap-2 sm:grid-cols-2">
                <li className="rounded-lg bg-guric-cream px-4 py-3 text-sm font-medium">
                  {siteConfig.iso}
                </li>
                <li className="rounded-lg bg-guric-cream px-4 py-3 text-sm font-medium">
                  FSSAI: {siteConfig.fssai}
                </li>
              </ul>
            </div>
            <div className="relative aspect-video w-full max-w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/label-jaggery-powder.png"
                alt="Guric pure jaggery brand"
                fill
                className="h-full w-full max-w-full object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-guric-green sm:text-3xl">
            Facts About Jaggery
          </h2>
          <ul className="mt-6 space-y-3">
            {jaggeryFacts.map((fact) => (
              <li key={fact} className="flex gap-3 text-guric-brown/85">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-guric-gold" />
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
