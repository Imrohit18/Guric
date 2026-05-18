import Link from "next/link";

export function CTABanner() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-guric-green to-guric-green-dark px-5 py-10 text-center text-white shadow-xl sm:rounded-3xl sm:px-8 sm:py-12 md:px-12 md:py-16">
        <h2 className="font-display text-2xl font-bold sm:text-3xl md:text-4xl">
          Ready to Stock Guric?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-guric-cream/90">
          Partner with us for retail distribution, bulk orders, and premium jaggery ranges across India.
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <Link
            href="/contact"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-guric-green shadow transition hover:bg-guric-cream"
          >
            Contact Us
          </Link>
          <a
            href="tel:+919890323186"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-white/80 px-8 py-3.5 text-sm font-semibold transition hover:bg-white/10"
          >
            Call +91 9890323186
          </a>
        </div>
      </div>
    </section>
  );
}
