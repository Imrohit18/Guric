import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group inline-flex flex-col ${className}`}>
      <span className="font-display text-2xl font-bold tracking-tight text-guric-green sm:text-3xl">
        G<span className="text-guric-leaf">u</span>ric
      </span>
      <span className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-guric-brown/80 sm:text-[0.65rem]">
        Pure Jaggery
      </span>
    </Link>
  );
}
