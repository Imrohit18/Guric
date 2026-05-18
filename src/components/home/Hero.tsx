import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-guric-cream via-guric-cream to-guric-cream-dark">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <div className="order-2 lg:order-1">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-guric-green/10 px-4 py-1.5 text-sm font-semibold text-guric-green">
            <span className="h-2 w-2 rounded-full bg-guric-leaf" />
            Pure Jaggery from Maharashtra
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-guric-green sm:text-5xl lg:text-6xl">
            Nature&apos;s Sweetness,{" "}
            <span className="text-guric-gold">Chemical Free</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-guric-brown/85">
            Guric brings you premium organic jaggery — powder, handmade cubes, desi ghee cubes,
            chocolate jaggery, and flavoured cubes. From everyday classic to signature premium.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-full bg-guric-green px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-guric-green-dark"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-guric-green px-7 py-3.5 text-sm font-semibold text-guric-green transition hover:bg-guric-green hover:text-white"
            >
              Retail Enquiry
            </Link>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {["100% Natural", "No Added Sugar", "FSSAI Certified"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-guric-brown">
                <svg className="h-5 w-5 shrink-0 text-guric-leaf" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-guric-cream-dark sm:aspect-[4/5]">
            <Image
              src="/images/hero-jaggery-powder.png"
              alt="Guric Organic Jaggery Powder 1kg pack"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 90vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-2xl bg-white p-4 shadow-lg sm:block">
            <p className="text-xs font-semibold uppercase tracking-wider text-guric-leaf">Signature</p>
            <p className="font-display text-lg font-bold text-guric-green">Chocolate Jaggery</p>
          </div>
        </div>
      </div>
    </section>
  );
}
