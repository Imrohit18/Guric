import Image from "next/image";
import Link from "next/link";

export function StorySection() {
  return (
    <section className="section-padding bg-guric-green text-guric-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-guric-gold">Our Story</p>
          <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl md:text-4xl">
            Sourced from Maharashtra, Crafted with Tradition
          </h2>
          <p className="mt-5 leading-relaxed text-guric-cream/90">
            Guric Jaggery is sourced from the finest chemical-free farms in Maharashtra, crushed
            and powdered traditionally to keep nutrients in and nasties out. No bleach. No sulphur.
            Just pure cane goodness.
          </p>
          <p className="mt-4 leading-relaxed text-guric-cream/80">
            Manufactured by Shri Balaji Gul Udyog, Pune — an ISO 9001:2015 certified company with
            decades of expertise in pure jaggery.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex min-h-[44px] items-center gap-2 font-semibold text-guric-gold hover:underline"
          >
            Learn more about Guric
            <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="relative aspect-[4/3] w-full max-w-full overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="/images/pack-jaggery-powder-back.png"
            alt="Guric jaggery powder packaging - our story"
            fill
            className="h-full w-full max-w-full object-contain object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
