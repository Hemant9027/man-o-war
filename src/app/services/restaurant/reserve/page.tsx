import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Phone } from "lucide-react";
import { PageHero } from "@/components/hero";
import RestaurantForm from "@/components/restaurant-form";
import { Reveal, ImageReveal } from "@/components/motion";
import { HOURS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Table — Dock N' Dine",
  description:
    "Send a table enquiry to Dock N' Dine, the waterfront restaurant at Man-O-War Marina Village. Open Monday–Saturday 11 AM – 3 PM, or call (242) 554-9134.",
  alternates: { canonical: "/services/restaurant/reserve" },
};

export default function ReservePage() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=85"
        alt="A harbour-side table set with seafood and drinks"
        eyebrow="Dock N' Dine"
        title={
          <>
            Request a <em className="italic text-sand">table</em>
          </>
        }
        subtitle="Send an enquiry and the restaurant team will confirm your table personally."
      />

      <section className="bg-ivory py-20 sm:py-28">
        <div className="container-x grid items-start gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <aside className="space-y-8 lg:sticky lg:top-28">
            <Reveal>
              <ImageReveal className="aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=85"
                  alt="A lobster lunch served outdoors with a cocktail"
                  fill
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  className="object-cover"
                />
              </ImageReveal>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="border border-navy/10 bg-white p-8">
                <p className="eyebrow text-ocean">Before you send</p>
                <ul className="mt-5 space-y-4 text-sm leading-relaxed text-charcoal/70">
                  <li className="flex items-start gap-3">
                    <Clock
                      className="mt-0.5 size-4 shrink-0 text-ocean"
                      aria-hidden
                    />
                    <span>
                      {HOURS.restaurant.days}
                      <br />
                      {HOURS.restaurant.lines[0]}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone
                      className="mt-0.5 size-4 shrink-0 text-ocean"
                      aria-hidden
                    />
                    <span>
                      For same-day tables, call{" "}
                      <a
                        href={SITE.restaurantPhoneHref}
                        className="font-semibold text-navy underline-offset-4 hover:underline"
                      >
                        {SITE.restaurantPhoneDisplay}
                      </a>
                    </span>
                  </li>
                </ul>
                <p className="mt-6 border-t border-navy/10 pt-5 text-xs italic leading-relaxed text-charcoal/50">
                  Submitting this form sends an enquiry — it is not a confirmed
                  reservation. The restaurant team will confirm with you
                  directly.
                </p>
              </div>
            </Reveal>
          </aside>

          <Reveal delay={0.05}>
            <RestaurantForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
