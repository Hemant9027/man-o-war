import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock4, Info, Phone, Ship, CarFront } from "lucide-react";
import { PageHero } from "@/components/hero";
import SectionHeading from "@/components/section-heading";
import CtaBand from "@/components/cta-band";
import { Reveal, ImageReveal, Stagger, StaggerItem } from "@/components/motion";
import { HOURS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fuel Services — Gasoline & Diesel, Dockside & Roadside",
  description:
    "Man-O-War Marina Village is the island's fueling station. Gasoline and diesel dockside (8 AM–12 PM, 1–4 PM) and roadside (9 AM–12 PM, 2–4 PM). Prices may fluctuate.",
  alternates: { canonical: "/services/fuel" },
  openGraph: {
    title: "Fuel Services | Man-O-War Marina Village",
    description:
      "Gasoline and diesel, dockside and roadside, on Man-O-War Cay, Abaco, Bahamas.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1800&q=85",
        width: 1600,
        height: 900,
      },
    ],
  },
};

const fuelBlocks = [
  {
    icon: CarFront,
    title: "Roadside",
    audience: "For vehicles on the island",
    lines: HOURS.fuelRoadside.lines,
    days: HOURS.fuelRoadside.days,
  },
  {
    icon: Ship,
    title: "Dockside",
    audience: "For boats at the marina",
    lines: HOURS.fuelDockside.lines,
    days: HOURS.fuelDockside.days,
  },
];

export default function FuelPage() {
  return (
    <>
      <PageHero
        tall
        image="https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1800&q=85"
        alt="A boat alongside the fuel dock at Man-O-War Marina Village"
        eyebrow="Fuel Services"
        title={
          <>
            Fuel up before your
            <br />
            next <em className="italic text-sand">adventure</em>
          </>
        }
        subtitle="Gasoline and diesel for boaters and drivers — right at the marina village."
      >
        <a
          href={SITE.marinaPhoneHref}
          className="group inline-flex h-13 items-center gap-3 bg-sand px-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-navy transition-colors duration-300 hover:bg-ivory"
        >
          <Phone className="size-4" aria-hidden />
          Contact Marina
        </a>
      </PageHero>

      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-x">
          <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
            <SectionHeading
              eyebrow="The Island's Fueling Station"
              title="Gasoline & diesel, by land and by sea"
              copy="Man-O-War Marina Village serves as the island's fueling station, providing gasoline and diesel for boaters and drivers. Fuel up dockside before your crossing, or stop by the roadside pumps before exploring the island."
            />
            <Stagger className="grid gap-6 sm:grid-cols-2">
              {fuelBlocks.map((b) => (
                <StaggerItem key={b.title}>
                  <div className="flex h-full flex-col border border-navy/10 bg-white p-8 sm:p-10">
                    <span className="flex size-12 items-center justify-center border border-ocean/25 text-ocean">
                      <b.icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="mt-6 font-display text-3xl font-medium text-navy">
                      {b.title}
                    </h3>
                    <p className="mt-1 text-sm text-charcoal/60">
                      {b.audience}
                    </p>
                    <div className="mt-6 border-t border-navy/10 pt-6">
                      <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-charcoal/50">
                        <Clock4 className="size-3.5" aria-hidden />
                        {b.days}
                      </p>
                      <ul className="mt-3 space-y-2">
                        {b.lines.map((line) => (
                          <li
                            key={line}
                            className="font-display text-2xl font-medium text-navy"
                          >
                            {line}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal delay={0.15} className="mt-10">
            <p className="flex max-w-2xl items-start gap-3 border border-sand bg-sand-100/70 px-5 py-4 text-sm leading-relaxed text-charcoal/75">
              <Info className="mt-0.5 size-4 shrink-0 text-ocean" aria-hidden />
              Gasoline and diesel prices may fluctuate. For the current price,
              call the marina office or stop by the pumps.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Photo band */}
      <section className="border-y border-navy/10 bg-white py-24 sm:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <ImageReveal className="aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85"
              alt="Motorboats moored alongside a busy marina"
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
          </ImageReveal>
          <div>
            <SectionHeading
              eyebrow="Coming in for Fuel?"
              title="Hail us on the way in"
              copy="Approaching by boat? Call the marina on VHF Channel 16 and we'll guide you to the fuel dock. Roadside fueling follows the island's posted hours — both are easy stops between the harbour and the north end."
            />
            <Reveal delay={0.2} className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex h-12 items-center gap-3 bg-navy px-7 text-[11px] font-semibold uppercase tracking-[0.24em] text-ivory transition-colors duration-300 hover:bg-ocean"
              >
                Contact Marina
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={SITE.marinaPhoneHref}
                className="inline-flex h-12 items-center gap-2.5 border border-navy/25 px-7 text-[11px] font-semibold uppercase tracking-[0.24em] text-navy transition-all duration-300 hover:bg-navy hover:text-ivory"
              >
                <Phone className="size-4" aria-hidden />
                {SITE.marinaPhoneDisplay}
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Tanks full, course set"
        copy="Fuel at the marina village, provision at the gift shop, and the whole Abaco chain ahead of you."
        primary={{ href: "/services/dockage", label: "Explore Dockage" }}
        secondary={{ href: "/contact", label: "Contact Marina" }}
      />
    </>
  );
}
