import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="font-display text-3xl font-semibold text-pbc-blue-dark">
        Thanks for registering your interest!
      </h1>
      <p className="mt-4 max-w-md text-foreground/70">
        We&apos;ve received your details and will be in touch about next steps for the
        The Handoff mentorship program.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-pbc-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pbc-orange-dark"
      >
        Back to home
      </Link>
    </div>
  );
}
