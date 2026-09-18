import type { Metadata } from "next";
import { ArrowRight, Radio } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/hero";
import BookingForm from "@/components/booking-form";
import BookingFlow from "@/components/booking-flow";
import { HoursCompact } from "@/components/hours";
import SectionHeading from "@/components/section-heading";
import { Reveal } from "@/components/motion";
import { MARINA, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reserve Dockage — Request Your Slip",
  description:
    "Request dockage at Man-O-War Marina Village: slips for vessels up to 120 ft with 30/50 amp power and water. Our team confirms availability personally before any reservation is final.",
  alternates: { canonical: "/book" },
  openGraph: {
    title: "Reserve Dockage | Man-O-War Marina Village",
    description:
      "Request a slip for your vessel — availability confirmed personally by the marina team.",
  },
};

export default function BookPage() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1800&q=85"
        alt="A boat secured at a sunny dock with lines and cleats"
        eyebrow="Reserve Dockage"
        title={
          <>
            Request your <em className="italic text-sand">slip</em>
          </>
        }
        subtitle={`${MARINA.slips} slips for vessels up to ${MARINA.maxLengthFt} ft — availability confirmed personally by our marina team.`}
      />

      <section className="bg-ivory py-20 sm:py-28">
        <div className="container-x grid items-start gap-14 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
          <aside className="space-y-8 lg:sticky lg:top-28">
            <Reveal>
              <SectionHeading
                eyebrow="How booking works"
                title="A request, not a charge"
                copy="This form sends a dockage request to the marina office. No payment is taken online — we check the dock, confirm availability with you directly, and only then is your reservation held."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="border border-navy/10 bg-white p-7">
                <p className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-ocean">
                  <Radio className="size-4" aria-hidden />
                  Approaching by sea?
                </p>
                <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
                  Hail us on{" "}
                  <span className="font-semibold text-navy">
                    VHF Channel {MARINA.vhfChannel}
                  </span>{" "}
                  and we'll help you into your slip. For everything else, the
                  office is at{" "}
                  <a
                    href={SITE.marinaPhoneHref}
                    className="font-semibold text-navy underline-offset-4 hover:underline"
                  >
                    {SITE.marinaPhoneDisplay}
                  </a>
                  .
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <HoursCompact />
            </Reveal>
          </aside>

          <Reveal delay={0.05}>
            <BookingForm />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-sand-100/60 py-24 sm:py-32">
        <div className="container-x">
          <BookingFlow />
          <Reveal delay={0.15} className="mt-14 text-center">
            <p className="text-sm leading-relaxed text-charcoal/65">
              Need the current rate sheet first?{" "}
              <Link
                href="/services/dockage"
                className="group inline-flex items-center gap-2 font-semibold text-navy"
              >
                <span className="border-b border-sand pb-0.5 transition-colors group-hover:border-ocean group-hover:text-ocean">
                  See dockage details & rates
                </span>
                <ArrowRight className="size-3.5 text-ocean transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
