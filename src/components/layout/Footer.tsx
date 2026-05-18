import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { navLinks, regionalNames, siteConfig } from "@/data/site";
import { products } from "@/data/products";

export function Footer() {
  return (
    <footer className="border-t border-guric-cream-dark bg-guric-brown text-guric-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo className="[&_span]:text-guric-cream [&_span:last-child]:text-guric-cream/70" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-guric-cream/80">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full border border-guric-cream/30 px-3 py-1">
                FSSAI {siteConfig.fssai}
              </span>
              <span className="rounded-full border border-guric-cream/30 px-3 py-1">
                {siteConfig.iso}
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-guric-gold">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-guric-cream/80 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-guric-gold">
              Our Products
            </h3>
            <ul className="mt-4 space-y-2">
              {products.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-sm text-guric-cream/80 transition hover:text-white"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-guric-gold">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-guric-cream/80">
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                {siteConfig.manufacturer}
                <br />
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}, {siteConfig.address.state}{" "}
                {siteConfig.address.postalCode}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-guric-cream/20 pt-8">
          <p className="mb-4 text-center text-xs font-medium uppercase tracking-widest text-guric-gold">
            Jaggery across India
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {regionalNames.map((r) => (
              <span
                key={r.lang}
                className="rounded-md bg-guric-cream/10 px-3 py-1.5 text-xs text-guric-cream/90"
                title={r.lang}
              >
                {r.name}
              </span>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-guric-cream/50">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved. ·{" "}
            <a href="https://guric.in" className="hover:text-guric-cream/80">
              guric.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
