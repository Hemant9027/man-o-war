import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Anchor,
  ArrowRight,
  Droplets,
  Mail,
  Phone,
  Radio,
  Zap,
} from "lucide-react";
import { PageHero } from "@/components/hero";
import SectionHeading from "@/components/section-heading";
import BookingFlow from "@/components/booking-flow";
import CtaBand from "@/components/cta-band";
import { ImageReveal, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { MARINA, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dockage — Marina Slips for Vessels up to 120 ft",
  description:
    "Secure marina dockage in the heart of Man-O-War Cay: 23 slips for vessels up to 120 ft, 20 ft beam, 7 ft draft, 30 & 50 amp power, water at each slip, assisted docking on VHF 16.",
  alternates: { canonical: "/services/dockage" },
  openGraph: {
    title: "Dockage — Stay Awhile | Man-O-War Marina Village",
    description:
      "23 secure slips for vessels up to 120 ft in the heart of Man-O-War Cay, Abaco, Bahamas.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1800&q=85",
        width: 1920,
        height: 1280,
      },
    ],
  },
};

const stats = [
  { value: `${MARINA.slips}`, label: "Secure Slips" },
  { value: `${MARINA.maxLengthFt} ft`, label: "Maximum Vessel Length" },
  { value: `${MARINA.maxBeamFt} ft`, label: "Maximum Beam" },
  { value: `${MARINA.maxDraftFt} ft`, label: "Draft Capacity" },
];

const facilities = [
  {
    icon: Anchor,
    title: "Assisted Docking",
    copy: "Our team helps you in and out of your slip — just call ahead.",
  },
  {
    icon: Radio,
    title: `VHF Channel ${MARINA.vhfChannel}`,
    copy: "Hail the marina on channel 16 as you approach the harbour.",
  },
  {
    icon: Zap,
    title: "30 Amp Power",
    copy: "30 amp electrical service available at the dock.",
  },
  {
    icon: Zap,
    title: "50 Amp Power",
    copy: "50 amp service for larger vessels and heavier loads.",
  },
  {
    icon: Droplets,
    title: "Water at Each Slip",
    copy: "Fresh water hookup at every slip in the marina.",
  },
];

const ratesMailto = `${SITE.emailHref}?subject=${encodeURIComponent(
  "Dockage rate sheet request",
)}&body=${encodeURIComponent(
  "Hello Man-O-War Marina Village,\n\nPlease send me your current dockage rate sheet.\n\nVessel length (ft):\nPlanned dates:\n\nThank you.",
)}`;

export default function DockagePage() {
  return (
    <>
      <PageHero
        tall
        image="https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1800&q=85"
        alt="Yachts moored along the marina docks under clear blue skies"
        eyebrow="Marina Dockage"
        title={
          <>
            Stay <em className="italic text-sand">awhile</em>
          </>
        }
        subtitle="Secure marina dockage in the heart of Man-O-War Cay."
      >
        <Link
          href="/book"
          className="group inline-flex h-13 items-center gap-3 bg-sand px-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-navy transition-colors duration-300 hover:bg-ivory"
        >
          Reserve Dockage
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </PageHero>

      {/* Stats */}
      <section className="border-b border-navy/10 bg-white">
        <div className="container-x grid grid-cols-2 gap-px bg-navy/10 py-0 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="bg-white px-6 py-12 text-center sm:py-16"
            >
              <Reveal delay={i * 0.08}>
                <p className="font-display text-5xl font-medium text-navy sm:text-6xl">
                  {s.value}
                </p>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-ocean">
                  {s.label}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Details + facilities */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="The Marina"
              title="Secure, serviced & steps from everything"
              copy={`Our marina offers ${MARINA.slips} secure and reliable slips for vessels up to ${MARINA.maxLengthFt} ft long and with beams up to ${MARINA.maxBeamFt} ft. Even at low tide, our slips can accommodate drafts up to ${MARINA.maxDraftFt} ft. From the dock you're moments from Dock N' Dine, the fuel station, the gift shop and the island beyond.`}
            />
            <Reveal delay={0.15} className="mt-10">
              <ImageReveal className="aspect-[16/10]">
                <Image
                  src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85"
                  alt="Ropes, woodwork and hardware on a classic vessel at the dock"
                  fill
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="object-cover"
                />
              </ImageReveal>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="eyebrow text-ocean">At the dock</p>
              <h3 className="mt-4 font-display text-3xl font-medium text-navy">
                Facilities
              </h3>
            </Reveal>
            <Stagger className="mt-8 divide-y divide-navy/10 border-y border-navy/10">
              {facilities.map((f) => (
                <StaggerItem key={f.title}>
                  <div className="flex items-start gap-5 py-6">
                    <span className="mt-1 flex size-11 shrink-0 items-center justify-center border border-ocean/25 text-ocean">
                      <f.icon className="size-4.5" aria-hidden />
                    </span>
                    <div>
                      <h4 className="font-display text-xl font-medium text-navy">
                        {f.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-charcoal/65">
                        {f.copy}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* Rates */}
      <section className="border-y border-navy/10 bg-sand-100/60 py-24 sm:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Dockage Rates"
              title="Current rates, straight from the office"
              copy="Rates vary by season and vessel, so we share the current rate sheet directly rather than publishing numbers that may change. Contact the marina office and we'll send it over — usually the same day."
            />
          </div>
          <Reveal delay={0.15}>
            <div className="border border-navy/10 bg-white p-8 sm:p-10">
              <p className="eyebrow text-ocean">Request the rate sheet</p>
              <div className="mt-6 space-y-4">
                <a
                  href={ratesMailto}
                  className="group flex h-13 items-center justify-center gap-3 bg-navy text-[11px] font-semibold uppercase tracking-[0.24em] text-ivory transition-colors duration-300 hover:bg-ocean"
                >
                  <Mail className="size-4" aria-hidden />
                  Email for Rates
                </a>
                <a
                  href={SITE.marinaPhoneHref}
                  className="flex h-13 items-center justify-center gap-3 border border-navy/25 text-[11px] font-semibold uppercase tracking-[0.24em] text-navy transition-all duration-300 hover:bg-navy hover:text-ivory"
                >
                  <Phone className="size-4" aria-hidden />
                  {SITE.marinaPhoneDisplay}
                </a>
              </div>
              <p className="mt-5 text-xs leading-relaxed text-charcoal/55">
                Prefer radio? Hail us on VHF Channel {MARINA.vhfChannel} during
                office hours.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Booking flow */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-x">
          <BookingFlow />
          <Reveal delay={0.2} className="mt-14 text-center">
            <Link
              href="/book"
              className="group inline-flex h-13 items-center gap-3 bg-navy px-10 text-[11px] font-semibold uppercase tracking-[0.24em] text-ivory transition-colors duration-300 hover:bg-ocean"
            >
              Start a Dockage Request
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Ready to come alongside?"
        copy={`Slips for vessels up to ${MARINA.maxLengthFt} ft — with power, water and the whole village at your stern.`}
      />
    </>
  );
}
