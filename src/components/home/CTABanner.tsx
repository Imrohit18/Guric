import Link from "next/link";

export function CTABanner() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-guric-green to-guric-green-dark px-8 py-12 text-center text-white shadow-xl sm:px-12 sm:py-16">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Ready to Stock Guric?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-guric-cream/90">
          Partner with us for retail distribution, bulk orders, and premium jaggery ranges across India.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-guric-green shadow transition hover:bg-guric-cream"
          >
            Contact Us
          </Link>
          <a
            href="tel:+919890323186"
            className="rounded-full border-2 border-white/80 px-8 py-3.5 text-sm font-semibold transition hover:bg-white/10"
          >
            Call +91 9890323186
          </a>
        </div>
      </div>
    </section>
  );
}
