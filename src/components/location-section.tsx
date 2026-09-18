import { Mail, MapPin, Phone } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";
import SectionHeading from "./section-heading";
import { Reveal, Parallax } from "./motion";

export default function LocationSection() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Location"
            title="Find Us on Man-O-War Cay"
            copy="The marina village sits on the harbour at the heart of Man-O-War Cay, in the Abaco Islands of the northern Bahamas."
          />
          <Reveal delay={0.15} className="mt-10 space-y-5">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 size-5 shrink-0 text-ocean" aria-hidden />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-charcoal/50">
                  Address
                </p>
                <p className="mt-1.5 text-[15px] font-medium text-navy">
                  Man-O-War Cay
                  <br />
                  Abaco, Bahamas
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="mt-1 size-5 shrink-0 text-ocean" aria-hidden />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-charcoal/50">
                  Marina Office
                </p>
                <a
                  href={SITE.marinaPhoneHref}
                  className="mt-1.5 block text-[15px] font-medium text-navy underline-offset-4 hover:underline"
                >
                  {SITE.marinaPhoneDisplay}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="mt-1 size-5 shrink-0 text-ocean" aria-hidden />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-charcoal/50">
                  Email
                </p>
                <a
                  href={SITE.emailHref}
                  className="mt-1.5 block text-[15px] font-medium text-navy underline-offset-4 hover:underline"
                >
                  {SITE.email}
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.25} className="mt-10 flex flex-wrap gap-4">
            <a
              href={SITE.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center gap-2.5 bg-navy px-7 text-[11px] font-semibold uppercase tracking-[0.24em] text-ivory transition-colors duration-300 hover:bg-ocean"
            >
              Get Directions
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="/contact"
              className="inline-flex h-12 items-center gap-2.5 border border-navy/25 px-7 text-[11px] font-semibold uppercase tracking-[0.24em] text-navy transition-all duration-300 hover:bg-navy hover:text-ivory"
            >
              Contact Marina
            </a>
          </Reveal>
        </div>

        <Parallax amount={26}>
          <Reveal delay={0.1}>
            <div className="relative border border-navy/10 bg-white p-2 shadow-[0_30px_80px_-40px_rgba(11,36,51,0.35)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <iframe
                  title="Map of Man-O-War Cay, Abaco, Bahamas"
                  src={SITE.mapEmbedUrl}
                  className="absolute inset-0 h-full w-full border-0 grayscale-[30%] contrast-[1.02]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="flex items-center justify-between px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-charcoal/45">
                <span>Man-O-War Cay · Abaco</span>
                <span>26.588° N · 77.068° W</span>
              </p>
            </div>
          </Reveal>
        </Parallax>
      </div>
    </section>
  );
}
