import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/hero";
import SectionHeading from "@/components/section-heading";
import Gallery from "@/components/gallery";
import CtaBand from "@/components/cta-band";
import { ImageReveal, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { HOURS, SITE } from "@/lib/site";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dock N' Dine — Waterfront Dining on Man-O-War Cay",
  description:
    "Dock N' Dine is the waterfront restaurant at Man-O-War Marina Village: local and international cuisine, lunch and ice cream with a harbour-side view. Open Monday–Saturday, 11 AM – 3 PM. Call (242) 554-9134.",
  alternates: { canonical: "/services/restaurant" },
  openGraph: {
    title: "Dock N' Dine — Waterfront Dining | Man-O-War Marina Village",
    description:
      "Local and international cuisine with a harbour-side view on Man-O-War Cay, Abaco, Bahamas.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=85",
        width: 1400,
        height: 933,
      },
    ],
  },
};

const foodGallery = [
  {
    src: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=85",
    alt: "Fresh oysters served on ice at Dock N' Dine",
    caption: "Fresh from the sea",
  },
  {
    src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85",
    alt: "A seafood platter with prawns and lemon",
    caption: "Harbour-side plates",
  },
  {
    src: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1800&q=85",
    alt: "A lobster dish served outdoors with a cocktail",
    caption: "Lunch with a view",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85",
    alt: "An ice cream cone held up against the blue sky",
    caption: "Ice cream stops",
  },
  {
    src: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=85",
    alt: "A table set with food overlooking moored yachts",
    caption: "Dine by the water",
  },
  {
    src: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1800&q=85",
    alt: "Guests dining outdoors on a waterfront deck",
    caption: "The deck at Dock N' Dine",
  },
];

const menuNotes = [
  {
    title: "Local Flavours",
    copy: "Bahamian favourites shaped by the day's catch and island tradition.",
  },
  {
    title: "International Classics",
    copy: "Familiar dishes for travelers — prepared with the same care.",
  },
  {
    title: "Ice Cream",
    copy: "The island's sweetest stop on a hot afternoon by the harbour.",
  },
];

export default function RestaurantPage() {
  return (
    <>
      <PageHero
        tall
        image="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=85"
        alt="Guests dining outdoors on a sunny waterfront deck"
        eyebrow="Waterfront Restaurant"
        title={
          <>
            Dock <em className="italic text-sand">N'</em> Dine
          </>
        }
        subtitle="Waterfront dining on Man-O-War Cay."
      >
        <a
          href={SITE.restaurantPhoneHref}
          className="group inline-flex h-13 items-center gap-3 bg-sand px-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-navy transition-colors duration-300 hover:bg-ivory"
        >
          <Phone className="size-4" aria-hidden />
          Call Dock N' Dine
        </a>
        <Link
          href="/services/restaurant/reserve"
          className="group inline-flex h-13 items-center gap-3 border border-ivory/45 px-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-ivory transition-all duration-300 hover:bg-ivory hover:text-navy"
        >
          Send an Enquiry
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </PageHero>

      {/* Intro */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-x grid items-start gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="The Restaurant"
              title="Lunch, the island way"
              copy="Our waterfront restaurant offers local and international cuisine for marina guests, locals and off-island visitors. Enjoy lunch or ice cream with a beautiful harbour-side view — steps from your slip."
            />
            <Stagger className="mt-12 grid gap-px border border-navy/10 bg-navy/10 sm:grid-cols-3">
              {menuNotes.map((m) => (
                <StaggerItem key={m.title} className="bg-ivory">
                  <div className="h-full p-6">
                    <h3 className="font-display text-xl font-medium text-navy">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                      {m.copy}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.2}>
              <p className="mt-8 text-sm italic leading-relaxed text-charcoal/55">
                Menus change with what's fresh — ask the team what's on when you
                call, or check the board when you arrive.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="border border-navy/10 bg-white p-8 sm:p-10">
              <p className="eyebrow text-ocean">Hours & Contact</p>
              <div className="mt-6 space-y-6">
                <div className="flex items-start gap-4">
                  <Clock
                    className="mt-0.5 size-5 shrink-0 text-ocean"
                    aria-hidden
                  />
                  <div>
                    <p className="font-medium text-navy">
                      {HOURS.restaurant.days}
                    </p>
                    <p className="mt-1 text-sm text-charcoal/65">
                      {HOURS.restaurant.lines[0]}
                    </p>
                    <p className="mt-1 text-xs italic text-charcoal/50">
                      Closed Sundays
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone
                    className="mt-0.5 size-5 shrink-0 text-ocean"
                    aria-hidden
                  />
                  <div>
                    <a
                      href={SITE.restaurantPhoneHref}
                      className="font-display text-2xl font-medium text-navy underline-offset-4 hover:underline"
                    >
                      {SITE.restaurantPhoneDisplay}
                    </a>
                    <p className="mt-1 text-sm text-charcoal/65">
                      Call for today's menu and table availability
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin
                    className="mt-0.5 size-5 shrink-0 text-ocean"
                    aria-hidden
                  />
                  <p className="text-sm leading-relaxed text-charcoal/70">
                    At Man-O-War Marina Village, on the harbour —
                    <br />
                    Man-O-War Cay, Abaco, Bahamas
                  </p>
                </div>
              </div>
              <div className="mt-8 border-t border-navy/10 pt-7">
                <Link
                  href="/services/restaurant/reserve"
                  className="group inline-flex h-12 w-full items-center justify-center gap-3 bg-navy text-[11px] font-semibold uppercase tracking-[0.24em] text-ivory transition-colors duration-300 hover:bg-ocean"
                >
                  Send an Enquiry
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <p className="mt-3 text-center text-xs text-charcoal/50">
                  Enquiries are confirmed personally by the restaurant team.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="border-y border-navy/10 bg-white py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="From the Kitchen"
            title="On the table, off the hook"
            className="mb-14"
            align="center"
          />
          <Gallery images={foodGallery} />
        </div>
      </section>

      {/* Arrive by boat */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <ImageReveal className="aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85"
              alt="Palm trees and boats silhouetted against the evening sky at the marina"
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
          </ImageReveal>
          <div>
            <SectionHeading
              eyebrow="Arrive by Boat"
              title="Tie up, walk up, sit down"
              copy="Dock N' Dine sits right at the marina village — come alongside, step off the dock and you're at your table. Need a slip for lunch or a few nights? Our dockage team can help."
            />
            <Reveal delay={0.2} className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/services/dockage"
                className="group inline-flex h-12 items-center gap-3 bg-navy px-7 text-[11px] font-semibold uppercase tracking-[0.24em] text-ivory transition-colors duration-300 hover:bg-ocean"
              >
                Explore Dockage
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={`${SITE.marinaPhoneHref}`}
                className="inline-flex h-12 items-center gap-2.5 border border-navy/25 px-7 text-[11px] font-semibold uppercase tracking-[0.24em] text-navy transition-all duration-300 hover:bg-navy hover:text-ivory"
              >
                <Phone className="size-4" aria-hidden />
                Marina: {SITE.marinaPhoneDisplay}
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Dock N' Dine"
        title="See you on the deck"
        copy="Call ahead for today's menu — or send an enquiry and the team will confirm your table."
        primary={{
          href: "/services/restaurant/reserve",
          label: "Request a Table",
        }}
        secondary={{ href: "/contact", label: "Contact the Village" }}
        image="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=85"
        alt="A seafood platter with fresh oysters and prawns"
      />
    </>
  );
}
