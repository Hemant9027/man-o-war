import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { PageHero } from "@/components/hero";
import SectionHeading from "@/components/section-heading";
import FaqAccordion from "@/components/faq";
import CtaBand from "@/components/cta-band";
import { Reveal } from "@/components/motion";
import { FAQS } from "@/lib/faq";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ — Dockage, Fuel, Dining & Amenities",
  description:
    "Answers about slips, vessel size, draft, power, water, VHF channel, office hours, fuel types, Dock N' Dine hours and marina amenities at Man-O-War Marina Village.",
  alternates: { canonical: "/faq" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        image="https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1800&q=85"
        alt="Sailboats resting on still water as the sun sets over the marina"
        eyebrow="Good to Know"
        title={
          <>
            Questions, <em className="italic text-sand">answered</em>
          </>
        }
        subtitle="The essentials for planning your stay at the marina village."
      />

      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-x grid items-start gap-16 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="FAQ"
              title="Before you arrive"
              copy="Slips, draft, power, fuel, dining and guest amenities — everything captains usually ask before calling in."
            />
            <Reveal
              delay={0.15}
              className="mt-10 border border-navy/10 bg-white p-8"
            >
              <p className="eyebrow text-ocean">Still curious?</p>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
                Call the marina office during office hours, or hail us on VHF
                Channel 16 as you approach.
              </p>
              <a
                href={SITE.marinaPhoneHref}
                className="group mt-6 inline-flex h-12 items-center gap-3 bg-navy px-7 text-[11px] font-semibold uppercase tracking-[0.24em] text-ivory transition-colors duration-300 hover:bg-ocean"
              >
                <Phone className="size-4" aria-hidden />
                {SITE.marinaPhoneDisplay}
              </a>
              <Link
                href="/contact"
                className="group mt-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-navy"
              >
                <span className="border-b border-sand pb-1.5 transition-colors duration-300 group-hover:border-ocean group-hover:text-ocean">
                  Send an enquiry
                </span>
                <ArrowRight className="size-4 text-ocean transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </Reveal>
          </div>

          <FaqAccordion faqs={FAQS} />
        </div>
      </section>

      <CtaBand
        title="Ready to plan your stay?"
        copy="Tell us your dates and vessel — we'll confirm availability personally."
      />
    </>
  );
}
