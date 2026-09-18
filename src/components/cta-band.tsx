import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./motion";
import { cn } from "@/lib/utils";

export default function CtaBand({
  eyebrow = "Man-O-War Cay, Abaco",
  title = "Plan your visit",
  copy = "Secure your slip at the marina, then settle into island time.",
  primary = { href: "/book", label: "Reserve Dockage" },
  secondary = { href: "/contact", label: "Contact Marina" },
  image = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85",
  alt = "Palm trees and boats silhouetted against a sunset over the marina",
}: {
  eyebrow?: string;
  title?: string;
  copy?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  image?: string;
  alt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-ivory">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={image}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/40" />
      </div>
      <div className="container-x relative py-24 sm:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-sand">{eyebrow}</p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-[1.06] sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-ivory/75">{copy}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={primary.href}
              className={cn(
                "group inline-flex h-13 items-center gap-3 bg-sand px-8",
                "text-[11px] font-semibold uppercase tracking-[0.24em] text-navy transition-colors duration-300 hover:bg-ivory",
              )}
            >
              {primary.label}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href={secondary.href}
              className="group inline-flex h-13 items-center gap-3 border border-ivory/45 px-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-ivory transition-all duration-300 hover:border-ivory hover:bg-ivory hover:text-navy"
            >
              {secondary.label}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
