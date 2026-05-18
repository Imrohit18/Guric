import { brandHighlights } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons: Record<string, React.ReactNode> = {
  leaf: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 20c8-8 12-14 17-19M5 20l4-4m13-9l-4 4" />
    </svg>
  ),
  flask: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3v1.5M14.25 3v1.5M6 21h12M8 21V9l-2-3h12l-2 3v12" />
    </svg>
  ),
  sugar: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-1.414 1.414M6.05 17.95l-1.414 1.414M12 3v2M12 19v2M5.636 5.636L7.05 7.05M16.95 16.95l1.414 1.414" />
    </svg>
  ),
  heart: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
};

export function Highlights() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Guric"
          title="Pure Cane Goodness in Every Product"
          description="No bleach. No sulphur. Traditionally processed jaggery from the finest chemical-free farms in Maharashtra."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {brandHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-guric-cream-dark bg-guric-cream/50 p-6 text-center transition hover:border-guric-leaf/40 hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-guric-green/10 text-guric-green">
                {icons[item.icon]}
              </div>
              <h3 className="font-display text-lg font-bold text-guric-green">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-guric-brown/75">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
