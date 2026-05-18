import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-guric-cream via-guric-cream to-guric-cream-dark">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="order-2 min-w-0 lg:order-1">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-guric-green/10 px-3 py-1.5 text-xs font-semibold text-guric-green sm:px-4 sm:text-sm">
            <span className="h-2 w-2 shrink-0 rounded-full bg-guric-leaf" />
            Pure Jaggery from Maharashtra
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight text-guric-green sm:text-4xl md:text-5xl lg:text-6xl">
            Nature&apos;s Sweetness,{" "}
            <span className="text-guric-gold">Chemical Free</span>
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-guric-brown/85 sm:mt-5 sm:text-lg">
            Guric brings you premium organic jaggery — powder, handmade cubes, desi ghee cubes,
            chocolate jaggery, and flavoured cubes. From everyday classic to signature premium.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/products"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-guric-green px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-guric-green-dark sm:px-7"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-guric-green px-6 py-3.5 text-sm font-semibold text-guric-green transition hover:bg-guric-green hover:text-white sm:px-7"
            >
              Retail Enquiry
            </Link>
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:mt-10 sm:grid-cols-3 sm:gap-4">
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

        <div className="relative order-1 mx-auto w-full min-w-0 max-w-md lg:order-2 lg:max-w-none">
          <div className="relative aspect-[4/5] w-full max-w-full overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-guric-cream-dark sm:rounded-3xl">
            <Image
              src="/images/hero-jaggery-powder.png"
              alt="Guric Organic Jaggery Powder 1kg pack"
              fill
              className="h-full w-full max-w-full object-contain object-center p-3 sm:p-4"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="mt-4 rounded-2xl bg-white p-3 shadow-lg sm:absolute sm:-bottom-4 sm:-left-4 sm:mt-0 sm:p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-guric-leaf">Signature</p>
            <p className="font-display text-base font-bold text-guric-green sm:text-lg">
              Chocolate Jaggery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
