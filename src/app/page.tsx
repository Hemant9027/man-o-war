import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HomeHero } from "@/components/hero";
import SectionHeading from "@/components/section-heading";
import ServiceCard from "@/components/service-card";
import MarinaSection from "@/components/marina-section";
import RestaurantSection from "@/components/restaurant-section";
import LocationSection from "@/components/location-section";
import CtaBand from "@/components/cta-band";
import { ImageReveal, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SERVICES, SITE, HOURS } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

function IntroSection() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <ImageReveal className="aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85"
              alt="Relaxing aboard a sailboat on calm, clear water near Man-O-War Cay"
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
          </ImageReveal>
          <Reveal
            delay={0.3}
            className="absolute -bottom-8 left-6 border border-navy/10 bg-white px-7 py-6 shadow-[0_24px_60px_-30px_rgba(11,36,51,0.4)] sm:left-10"
          >
            <p className="eyebrow text-ocean">Man-O-War Cay</p>
            <p className="mt-1.5 font-display text-2xl font-medium text-navy">
              Abaco, Bahamas
            </p>
          </Reveal>
        </div>

        <div className="lg:pl-4">
          <SectionHeading
            eyebrow="The Marina Village"
            title={
              <>
                Welcome to <em className="italic text-ocean">Man-O-War</em>{" "}
                Marina Village
              </>
            }
          />
          <Reveal delay={0.15}>
            <p className="mt-7 text-base leading-relaxed text-charcoal/70 sm:text-lg">
              Located in the heart of Man-O-War Cay in the Abaco Islands,
              Man-O-War Marina Village provides essential marina services
              alongside dining, fuel, shopping and convenient amenities for
              visitors exploring the island.
            </p>
          </Reveal>
          <Reveal delay={0.25} className="mt-10">
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-navy"
            >
              <span className="border-b border-sand pb-1.5 transition-colors duration-300 group-hover:border-ocean group-hover:text-ocean">
                Explore the Village
              </span>
              <ArrowRight className="size-4 text-ocean transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServicesOverview() {
  return (
    <section className="border-y border-navy/10 bg-white py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Services"
            title="Everything You Need, Right at the Harbour"
          />
          <Reveal delay={0.2}>
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-navy"
            >
              <span className="border-b border-sand pb-1.5 transition-colors duration-300 group-hover:border-ocean group-hover:text-ocean">
                View all services
              </span>
              <ArrowRight className="size-4 text-ocean transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <StaggerItem key={service.title}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function MowLifeTeaser() {
  return (
    <section className="relative overflow-hidden bg-navy text-ivory">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85"
          alt="Driftwood on a white sand beach beside clear turquoise water"
          fill
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/35 to-navy/50" />
      </div>
      <div className="container-x relative flex min-h-[75svh] flex-col items-center justify-center py-28 text-center">
        <Reveal>
          <p className="eyebrow text-sand">MOW Life</p>
        </Reveal>
        <Reveal delay={0.12}>
          <h2 className="mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.05] sm:text-6xl lg:text-7xl">
            Life moves <em className="italic text-sand">differently</em> here
          </h2>
        </Reveal>
        <Reveal delay={0.22}>
          <p className="mx-auto mt-7 max-w-xl leading-relaxed text-ivory/80">
            Slow lanes, warm water and a harbour that sets the rhythm of the
            day. Discover the island beyond the dock.
          </p>
        </Reveal>
        <Reveal delay={0.32}>
          <Link
            href="/mow-life"
            className="group mt-10 inline-flex h-13 items-center gap-3 bg-sand px-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-navy transition-colors duration-300 hover:bg-ivory"
          >
            Discover MOW Life
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Marina",
      "@id": `${SITE.url}/#marina`,
      name: SITE.name,
      description: SITE.description,
      url: SITE.url,
      telephone: "+1-242-554-9500",
      email: SITE.email,
      image:
        "https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1800&q=85",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Man-O-War Cay",
        addressRegion: "Abaco",
        addressCountry: "BS",
      },
    },
    {
      "@type": "Restaurant",
      "@id": `${SITE.url}/#restaurant`,
      name: "Dock N' Dine",
      description:
        "Waterfront restaurant offering local and international cuisine with a harbour-side view at Man-O-War Marina Village.",
      url: `${SITE.url}/services/restaurant`,
      telephone: "+1-242-554-9134",
      servesCuisine: ["Local Bahamian", "International"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Man-O-War Cay",
        addressRegion: "Abaco",
        addressCountry: "BS",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "11:00",
          closes: "15:00",
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeHero />
      <IntroSection />
      <ServicesOverview />
      <MarinaSection />
      <RestaurantSection />
      <MowLifeTeaser />
      <LocationSection />
      <CtaBand />
      {/* invisible a11y reference for hours; visible Hours live on services/contact */}
      <span className="sr-only">
        Marina office hours: {HOURS.marinaOffice.days},{" "}
        {HOURS.marinaOffice.lines.join(" and ")}
      </span>
    </>
  );
}
