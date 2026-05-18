import Image from "next/image";

export function ProductLineup() {
  return (
    <div className="mt-10 overflow-hidden rounded-3xl border border-guric-cream-dark bg-white shadow-md">
      <Image
        src="/images/products-lineup.png"
        alt="Guric jaggery range — powder, chocolate ghee, adrak ghee, ilaichi ghee, and desi ghee jaggery cubes"
        width={1400}
        height={700}
        className="h-auto w-full object-cover"
        priority
        sizes="(max-width: 1280px) 100vw, 1280px"
      />
      <p className="border-t border-guric-cream-dark bg-guric-cream/60 px-6 py-4 text-center font-display text-sm italic text-guric-brown sm:text-base">
        Tradition in Every Bite, Purity in Every Piece
      </p>
    </div>
  );
}
