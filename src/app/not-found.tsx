import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 py-24 text-center">
      <h1 className="font-display text-4xl font-bold tracking-tight">
        Page not found
      </h1>
      <p className="mt-3 text-muted">That URL is not in this site.</p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-full bg-ink px-4 py-2 text-sm font-medium text-white"
      >
        Home
      </Link>
    </div>
  );
}
