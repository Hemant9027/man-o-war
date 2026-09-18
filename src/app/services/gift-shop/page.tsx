import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock4, Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/hero";
import SectionHeading from "@/components/section-heading";
import CtaBand from "@/components/cta-band";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { HOURS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Office & Gift Shop — Island Art, Apparel & Dive Gear",
  description:
    "Take a piece of Man-O-War home: custom T-shirts, local art, souvenirs and marine-grade dive gear at the Man-O-War Marina Village office & gift shop on the harbour.",
  alternates: { canonical: "/services/gift-shop" },
  openGraph: {
    title: "Office & Gift Shop | Man-O-War Marina Village",
    description:
      "Souvenirs, custom apparel, local art and marine-grade dive gear on Man-O-War Cay, Abaco.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1800&q=85",
        width: 1600,
        height: 900,
      },
    ],
  },
};

const categories = [
  {
    title: "Local Art",
    copy: "Seascapes and island scenes from Abaco artists.",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1800&q=85",
    alt: "Framed watercolour paintings of sailboats and island scenes",
  },
  {
    title: "Souvenirs",
    copy: "Small keepsakes of a slow island week.",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85",
    alt: "Handmade crafts and souvenirs on display",
  },
  {
    title: "Apparel",
    copy: "Custom T-shirts in soft coastal colours.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85",
    alt: "Folded island-style T-shirts on a wooden shelf",
  },
  {
    title: "Dive Gear",
    copy: "Marine-grade dive equipment, right at the dock.",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1800&q=85",
    alt: "Professional diving equipment laid out on a dock",
  },
];

export default function GiftShopPage() {
  return (
    <>
      <PageHero
        tall
        image="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1800&q=85"
        alt="Inside the marina gift shop — apparel, art and souvenirs on whitewashed shelves"
        eyebrow="Office & Gift Shop"
        title={
          <>
            Take a piece of
            <br />
            <em className="italic text-sand">Man-O-War</em> home
          </>
        }
        subtitle="Custom T-shirts, local art, souvenirs and marine-grade dive gear — steps from your slip."
      />

      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-x grid items-start gap-14 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="The Shop"
              title="One stop, in the middle of everything"
              copy="Our office and gift shop share a convenient space on the harbour. Check in at the dock, ask about the island, and browse the shelves in a single stop."
            />
            <Reveal delay={0.2}>
              <div className="mt-10 border border-navy/10 bg-white p-8">
                <p className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-ocean">
                  <Clock4 className="size-4" aria-hidden />
                  Marina Office Hours
                </p>
                <p className="mt-4 font-medium text-navy">
                  {HOURS.marinaOffice.days}
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-charcoal/70">
                  {HOURS.marinaOffice.lines.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
                <div className="mt-6 space-y-3 border-t border-navy/10 pt-6 text-sm">
                  <a
                    href={SITE.marinaPhoneHref}
                    className="flex items-center gap-3 font-medium text-navy underline-offset-4 hover:underline"
                  >
                    <Phone className="size-4 text-ocean" aria-hidden />
                    {SITE.marinaPhoneDisplay}
                  </a>
                  <a
                    href={SITE.emailHref}
                    className="flex items-center gap-3 font-medium text-navy underline-offset-4 hover:underline"
                  >
                    <Mail className="size-4 text-ocean" aria-hidden />
                    {SITE.email}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="eyebrow text-ocean">Browse</p>
              <h3 className="mt-4 font-display text-3xl font-medium text-navy">
                In the shop
              </h3>
            </Reveal>
            <Stagger className="mt-8 grid gap-6 sm:grid-cols-2">
              {categories.map((c) => (
                <StaggerItem key={c.title}>
                  <div className="group border border-navy/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-28px_rgba(11,36,51,0.3)]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={c.image}
                        alt={c.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="font-display text-2xl font-medium text-navy">
                        {c.title}
                      </h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-charcoal/65">
                        {c.copy}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.2}>
              <p className="mt-8 text-sm italic leading-relaxed text-charcoal/55">
                Stock changes with the season — if you're after something
                specific, call the office and we'll let you know what's on the
                shelves.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Passing through the harbour?"
        copy="Stop in for the island news, a gift for home, or gear for the reef — the door by the office is open."
        primary={{ href: "/contact", label: "Contact the Office" }}
        secondary={{ href: "/services", label: "All Services" }}
        image="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85"
        alt="Watercolour seascapes displayed on a shelf in the gift shop"
      />
    </>
  );
}
