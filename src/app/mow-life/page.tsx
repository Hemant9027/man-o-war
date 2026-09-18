import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/hero";
import SectionHeading from "@/components/section-heading";
import Gallery from "@/components/gallery";
import CtaBand from "@/components/cta-band";
import { ImageReveal, Reveal, Parallax } from "@/components/motion";

export const metadata: Metadata = {
  title: "MOW Life — Island Life on Man-O-War Cay",
  description:
    "Slow lanes, warm water and a harbour that sets the rhythm of the day. Discover island life on Man-O-War Cay in the Abaco Islands, Bahamas.",
  alternates: { canonical: "/mow-life" },
  openGraph: {
    title: "MOW Life — Life Moves Differently Here | Man-O-War Marina Village",
    description:
      "Discover island life on Man-O-War Cay in the Abaco Islands, Bahamas.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1800&q=85",
        width: 1920,
        height: 1280,
      },
    ],
  },
};

const chapters = [
  {
    number: "01",
    eyebrow: "The Island",
    title: "A cay with its own clock",
    copy: "Man-O-War Cay is a narrow ribbon of land in the Abaco Islands, where the harbour is the main street and the day begins with the tide. Everything is close, everything is unhurried, and nearly every road seems to end at the water.",
    image:
      "https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1800&q=85",
    alt: "A lighthouse and quiet boat on a calm Bahamas shoreline",
  },
  {
    number: "02",
    eyebrow: "On the Water",
    title: "Where the week is measured in crossings",
    copy: "Mornings mean lines off and bowsprits pointed at blue water — a hop to a nearby cay, an anchorage over a sand flat, a drift above the reef. The Abaco chain is made for exploring under power or sail, and the marina village is its natural base camp.",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85",
    alt: "Lazing on the deck of a sailboat crossing calm clear water",
  },
  {
    number: "03",
    eyebrow: "Around the Village",
    title: "Everything a harbour town should be",
    copy: "From the dock, the whole village unfolds on foot: the restaurant on the water, the fuel pumps, the gift shop, and quiet lanes beyond. It's the kind of place where errands turn into conversations and nobody is in a rush.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85",
    alt: "A palm-lined island lane with golf carts in the distance",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85",
    alt: "A pristine white sand beach meeting clear turquoise water",
    caption: "North end beaches",
  },
  {
    src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85",
    alt: "Aerial view of turquoise water wrapping around a green shoreline",
    caption: "The Abaco blues",
  },
  {
    src: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1800&q=85",
    alt: "Hands at the helm of a sailboat on open water",
    caption: "Out for the day",
  },
  {
    src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1800&q=85",
    alt: "Palm trees lining a quiet island lane",
    caption: "Village lanes",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85",
    alt: "A small lighthouse standing above clear water",
    caption: "Abaco landmarks",
  },
  {
    src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85",
    alt: "Driftwood resting on pale sand beside turquoise water",
    caption: "Shoreline finds",
  },
];

export default function MowLifePage() {
  return (
    <>
      <PageHero
        tall
        image="https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1800&q=85"
        alt="Aerial view of vivid turquoise water beside a green tropical shoreline"
        eyebrow="MOW Life"
        title={
          <>
            Life moves <em className="italic text-sand">differently</em> here
          </>
        }
        subtitle="An introduction to Man-O-War Cay — beyond the dock."
      />

      {/* Chapters */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-x space-y-28 sm:space-y-36">
          {chapters.map((c, i) => (
            <div
              key={c.number}
              className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <Parallax amount={34}>
                  <ImageReveal className="aspect-[4/3]">
                    <Image
                      src={c.image}
                      alt={c.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 46vw"
                      className="object-cover"
                    />
                  </ImageReveal>
                </Parallax>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <Reveal>
                  <p className="font-display text-6xl font-medium text-sand">
                    {c.number}
                  </p>
                </Reveal>
                <SectionHeading
                  eyebrow={c.eyebrow}
                  title={c.title}
                  copy={c.copy}
                  className="mt-4"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Slow down — emotional full-bleed */}
      <section className="relative overflow-hidden bg-navy text-ivory">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85"
            alt="Pristine beach with calm turquoise water under a clear sky"
            fill
            sizes="100vw"
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/35 to-navy/75" />
        </div>
        <div className="container-x relative flex min-h-[80svh] flex-col items-center justify-center py-28 text-center">
          <Reveal>
            <p className="eyebrow text-sand">Slow Down</p>
          </Reveal>
          <Reveal delay={0.12}>
            <h2 className="mt-6 max-w-4xl font-display text-4xl font-medium leading-[1.12] sm:text-6xl lg:text-[4.2rem]">
              The island doesn't ask what you're
              <br className="hidden sm:block" /> doing next.{" "}
              <em className="italic text-sand">Neither do we.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mx-auto mt-8 max-w-xl leading-relaxed text-ivory/80">
              Take the long way around the harbour. Stay for one more lunch. Let
              the weather decide the schedule for a while.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="The Island in Frames"
            title="Scenes from MOW life"
            align="center"
            className="mb-14"
          />
          <Gallery images={galleryImages} />
        </div>
      </section>

      <CtaBand
        eyebrow="Make the trip"
        title="Experience it from the dock"
        copy="The best seat for MOW life is a slip in the middle of the harbour. We'll keep one ready."
        primary={{ href: "/book", label: "Reserve Dockage" }}
        secondary={{ href: "/services", label: "Explore Services" }}
      />
    </>
  );
}
