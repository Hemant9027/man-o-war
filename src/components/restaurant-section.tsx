import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { HOURS, SITE } from "@/lib/site";
import SectionHeading from "./section-heading";
import { ImageReveal, Reveal } from "./motion";

export default function RestaurantSection() {
  return (
    <section className="overflow-hidden bg-ivory py-24 sm:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Image composition */}
        <div className="relative order-2 lg:order-1">
          <ImageReveal className="aspect-[4/5] max-w-lg">
            <Image
              src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=85"
              alt="Seafood served at a waterfront table with yachts beyond"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </ImageReveal>
          <ImageReveal
            delay={0.2}
            className="absolute -bottom-10 right-0 hidden aspect-square w-52 border-4 border-ivory shadow-[0_20px_60px_-20px_rgba(11,36,51,0.35)] sm:block lg:-right-6 lg:w-64"
          >
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85"
              alt="An ice cream cone held against a blue sky"
              fill
              sizes="260px"
              className="object-cover"
            />
          </ImageReveal>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Waterfront Dining"
            title={
              <>
                Dock <em className="italic text-ocean">N'</em> Dine
              </>
            }
            copy="Our waterfront restaurant offers local and international cuisine for marina guests, locals and off-island visitors. Enjoy lunch or ice cream with a beautiful harbour-side view."
          />
          <Reveal
            delay={0.2}
            className="mt-10 space-y-6 border-t border-navy/10 pt-8"
          >
            <div className="flex items-center justify-between gap-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-charcoal/50">
                  Hours
                </p>
                <p className="mt-1.5 font-medium text-navy">
                  {HOURS.restaurant.days} · {HOURS.restaurant.lines[0]}
                </p>
              </div>
              <a
                href={SITE.restaurantPhoneHref}
                className="flex items-center gap-2.5 text-sm font-semibold text-ocean underline-offset-4 hover:underline"
              >
                <Phone className="size-4" aria-hidden />
                {SITE.restaurantPhoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/services/restaurant"
              className="group inline-flex h-13 items-center gap-3 bg-navy px-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-ivory transition-colors duration-300 hover:bg-ocean"
            >
              Explore Dock N' Dine
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services/restaurant/reserve"
              className="group inline-flex h-13 items-center gap-3 border border-navy/25 px-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-navy transition-all duration-300 hover:bg-navy hover:text-ivory"
            >
              Request a Table
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
