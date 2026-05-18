import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-padding flex min-h-[50vh] flex-col items-center justify-center text-center">
      <h1 className="font-display text-6xl font-bold text-guric-green">404</h1>
      <p className="mt-4 text-lg text-guric-brown/80">Page not found</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-guric-green px-8 py-3 text-sm font-semibold text-white"
      >
        Back to Home
      </Link>
    </div>
  );
}
