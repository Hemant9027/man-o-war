import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Logo from "@/components/logo";

export default function NotFound() {
  return (
    <section className="flex min-h-svh flex-col items-center justify-center bg-navy px-6 py-32 text-center text-ivory">
      <Logo compact markClassName="size-9" />
      <p className="eyebrow mt-14 text-sand">404 — Off the chart</p>
      <h1 className="mt-6 max-w-xl font-display text-5xl font-medium leading-[1.05] sm:text-6xl">
        This page drifted out of the harbour
      </h1>
      <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/70">
        The page you're looking for isn't here — but the marina village is
        easy to find.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="group inline-flex h-13 items-center gap-3 bg-sand px-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-navy transition-colors duration-300 hover:bg-ivory"
        >
          Back to Home
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex h-13 items-center gap-3 border border-ivory/45 px-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-ivory transition-all duration-300 hover:bg-ivory hover:text-navy"
        >
          Contact Marina
        </Link>
      </div>
    </section>
  );
}
