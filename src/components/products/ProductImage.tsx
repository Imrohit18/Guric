import Image from "next/image";

type ProductImageVariant = "card" | "detail" | "banner";

const containerStyles: Record<ProductImageVariant, string> = {
  card: "relative aspect-[4/5] w-full max-w-full min-h-[200px] overflow-hidden bg-gradient-to-b from-guric-cream to-white sm:min-h-[220px]",
  detail:
    "relative mx-auto aspect-[4/5] w-full max-w-full overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg lg:max-w-none lg:aspect-square",
  banner: "relative w-full overflow-hidden bg-guric-cream",
};

const imageStyles =
  "h-full w-full max-w-full object-contain object-center p-2 sm:p-4 md:p-5";

const defaultSizes: Record<ProductImageVariant, string> = {
  card: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  detail: "(max-width: 1024px) 100vw, 50vw",
  banner: "100vw",
};

export function ProductImage({
  src,
  alt,
  variant = "card",
  priority = false,
  sizes,
  className = "",
}: {
  src: string;
  alt: string;
  variant?: ProductImageVariant;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  if (variant === "banner") {
    return (
      <div className={`${containerStyles.banner} ${className}`}>
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={700}
          priority={priority}
          className="h-auto w-full max-w-full object-contain object-center"
          sizes={sizes ?? defaultSizes.banner}
        />
      </div>
    );
  }

  return (
    <div className={`${containerStyles[variant]} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes ?? defaultSizes[variant]}
        className={imageStyles}
      />
    </div>
  );
}
