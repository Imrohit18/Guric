import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Guric for retail enquiries, bulk orders, and distribution. Call +91 9890323186 or email guricbusiness@gmail.com",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Retail & Bulk Enquiries"
          description="We welcome partnerships with retailers, distributors, and premium food stores across India."
        />

        <div className="mt-10 grid grid-cols-1 gap-8 lg:mt-12 lg:grid-cols-2">
          <div className="space-y-6 rounded-2xl border border-guric-cream-dark bg-white p-8 shadow-sm">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-guric-leaf">Phone</h2>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="mt-1 block text-xl font-semibold text-guric-green hover:underline"
              >
                {siteConfig.phone}
              </a>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-guric-leaf">Email</h2>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-1 block text-xl font-semibold text-guric-green hover:underline"
              >
                {siteConfig.email}
              </a>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-guric-leaf">Address</h2>
              <p className="mt-1 leading-relaxed text-guric-brown/85">
                <strong>{siteConfig.manufacturer}</strong>
                <br />
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}, {siteConfig.address.state} — {siteConfig.address.postalCode}
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-guric-leaf">
                Social
              </h2>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-guric-green hover:underline"
              >
                Follow us on Facebook
              </a>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="rounded-full bg-guric-cream px-3 py-1 text-xs font-medium">
                FSSAI {siteConfig.fssai}
              </span>
              <span className="rounded-full bg-guric-cream px-3 py-1 text-xs font-medium">
                {siteConfig.iso}
              </span>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
