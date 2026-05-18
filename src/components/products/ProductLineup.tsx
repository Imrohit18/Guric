import { ProductImage } from "@/components/products/ProductImage";

export function ProductLineup() {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-guric-cream-dark bg-white shadow-md sm:mt-10 sm:rounded-3xl">
      <ProductImage
        src="/images/products-lineup.png"
        alt="Guric jaggery range — powder, chocolate ghee, adrak ghee, ilaichi ghee, and desi ghee jaggery cubes"
        variant="banner"
        priority
      />
      <p className="border-t border-guric-cream-dark bg-guric-cream/60 px-4 py-3 text-center font-display text-xs italic text-guric-brown sm:px-6 sm:py-4 sm:text-sm md:text-base">
        Tradition in Every Bite, Purity in Every Piece
      </p>
    </div>
  );
}
