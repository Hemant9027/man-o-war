import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Fuel,
  Gift,
  Phone,
  UtensilsCrossed,
  Anchor,
} from "lucide-react";
import { PageHero } from "@/components/hero";
import SectionHeading from "@/components/section-heading";
import Amenities from "@/components/amenities";
import Hours from "@/components/hours";
import CtaBand from "@/components/cta-band";
import { ImageReveal, Reveal } from "@/components/motion";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — Dockage, Dining, Fuel & More",
  description:
    "Marina dockage for vessels up to 120 ft, waterfront dining at Dock N' Dine, dockside and roadside fuel, gift shop and guest amenities at Man-O-War Marina Village, Abaco.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Dockage, Dining, Fuel & More | Man-O-War Marina Village",
    description:
      "Marina dockage, waterfront dining, fuel, gift shop and guest amenities on Man-O-War Cay, Abaco, Bahamas.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1800&q=85",
        width: 1920,
        height: 1080,
      },
    ],
  },
};

const rows = [
  {
    icon: Anchor,
    eyebrow: "The Marina",
    title: "Dockage",
    copy: "Twenty-three secure slips at the centre of island life — with assisted docking on VHF 16, 30 & 50 amp power and water at every slip. Vessels up to 120 ft.",
    href: "/services/dockage",
    cta: "Explore Dockage",
    image:
      "https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1800&q=85",
    alt: "Yachts moored in the calm waters of the marina",
  },
  {
    icon: UtensilsCrossed,
    eyebrow: "Waterfront Dining",
    title: "Dock N' Dine",
    copy: "Local and international cuisine steps from your slip. Lunch, ice cream and a harbour-side view — for marina guests, locals and off-island visitors alike.",
    href: "/services/restaurant",
    cta: "Explore Dock N' Dine",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=85",
    alt: "Seafood served beside the water with yachts in the background",
  },
  {
    icon: Fuel,
    eyebrow: "Keep Moving",
    title: "Fuel Services",
    copy: "The island's fueling station. Gasoline and diesel available both dockside and roadside, so boats and vehicles alike are ready for the next adventure.",
    href: "/services/fuel",
    cta: "Fuel Hours & Details",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85",
    alt: "A boat tied alongside the marina fuel dock",
  },
  {
    icon: Gift,
    eyebrow: "Take It Home",
    title: "Office & Gift Shop",
    copy: "Custom T-shirts, local art, souvenirs and marine-grade dive gear — share a space with the marina office, right at the harbour.",
    href: "/services/gift-shop",
    cta: "Visit the Gift Shop",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1800&q=85",
    alt: "Shelves of apparel, art and souvenirs inside the marina gift shop",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1800&q=85"
        alt="Aerial view of a Caribbean harbour with boats at anchor"
        eyebrow="Services"
        title={
          <>
            Everything you need,
            <br />
            right at the <em className="italic text-sand">harbour</em>
          </>
        }
        subtitle="Dock, dine, refuel and provision — all without leaving the marina village."
      >
        <Link
          href="/book"
          className="group inline-flex h-13 items-center gap-3 bg-sand px-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-navy transition-colors duration-300 hover:bg-ivory"
        >
          Reserve Dockage
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </PageHero>

      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-x space-y-24 sm:space-y-32">
          {rows.map((row, i) => (
            <div
              key={row.title}
              className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <ImageReveal className="aspect-[4/3]">
                  <Image
                    src={row.image}
                    alt={row.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="object-cover"
                  />
                </ImageReveal>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <Reveal>
                  <span className="flex size-12 items-center justify-center border border-ocean/25 text-ocean">
                    <row.icon className="size-5" aria-hidden />
                  </span>
                </Reveal>
                <SectionHeading
                  eyebrow={row.eyebrow}
                  title={row.title}
                  copy={row.copy}
                  className="mt-6"
                />
                <Reveal delay={0.2} className="mt-8">
                  <Link
                    href={row.href}
                    className="group inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-navy"
                  >
                    <span className="border-b border-sand pb-1.5 transition-colors duration-300 group-hover:border-ocean group-hover:text-ocean">
                      {row.cta}
                    </span>
                    <ArrowRight className="size-4 text-ocean transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Amenities withImage />

      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-x grid items-start gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading
              eyebrow="Talk to us"
              title="Questions about the village?"
              copy="Call the marina office, send an enquiry, or hail us on VHF Channel 16 as you approach the harbour."
            />
            <Reveal delay={0.15} className="mt-8">
              <a
                href={SITE.marinaPhoneHref}
                className="group inline-flex items-center gap-3 text-navy"
              >
                <span className="flex size-11 items-center justify-center border border-navy/20 transition-colors group-hover:border-ocean group-hover:text-ocean">
                  <Phone className="size-4" aria-hidden />
                </span>
                <span className="font-display text-2xl font-medium">
                  {SITE.marinaPhoneDisplay}
                </span>
              </a>
            </Reveal>
          </div>
          <Hours />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
