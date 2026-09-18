import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Anchor, Droplets, Radio, Zap } from "lucide-react";
import { MARINA } from "@/lib/site";
import SectionHeading from "./section-heading";
import { ImageReveal, Reveal, Stagger, StaggerItem } from "./motion";

const stats = [
  { value: `${MARINA.slips}`, label: "Secure Slips" },
  { value: `${MARINA.maxLengthFt} ft`, label: "Maximum Length" },
  { value: `${MARINA.maxBeamFt} ft`, label: "Maximum Beam" },
  { value: `${MARINA.maxDraftFt} ft`, label: "Draft Capacity" },
];

const facilities = [
  { icon: Anchor, label: "Assisted docking" },
  { icon: Radio, label: `VHF Channel ${MARINA.vhfChannel}` },
  { icon: Zap, label: "30 & 50 amp power" },
  { icon: Droplets, label: "Water at each slip" },
];

export default function MarinaSection() {
  return (
    <section className="bg-navy py-24 text-ivory sm:py-32">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              dark
              eyebrow="The Marina"
              title={
                <>
                  Stay <em className="italic text-sand">awhile.</em>
                </>
              }
              copy={`Our marina offers ${MARINA.slips} secure and reliable slips for vessels up to ${MARINA.maxLengthFt} ft long and ${MARINA.maxBeamFt} ft beam. Even at low tide, slips accommodate drafts up to ${MARINA.maxDraftFt} ft.`}
            />
            <Reveal delay={0.2} className="mt-10">
              <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {facilities.map((f) => (
                  <li
                    key={f.label}
                    className="flex items-center gap-3.5 text-sm text-ivory/80"
                  >
                    <span className="flex size-9 items-center justify-center border border-sand/35 text-sand">
                      <f.icon className="size-4" aria-hidden />
                    </span>
                    {f.label}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.3} className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/book"
                className="group inline-flex h-13 items-center gap-3 bg-sand px-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-navy transition-colors duration-300 hover:bg-ivory"
              >
                Reserve Dockage
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services/dockage"
                className="group inline-flex h-13 items-center gap-3 border border-ivory/40 px-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-ivory transition-all duration-300 hover:border-ivory hover:bg-ivory hover:text-navy"
              >
                Explore Dockage
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="relative">
            <ImageReveal className="aspect-[4/5] lg:aspect-[5/6]">
              <Image
                src="https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1800&q=85"
                alt="A small boat tied up at a sunny marina dock with nautical equipment"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </ImageReveal>
            <Reveal
              delay={0.35}
              className="absolute -bottom-8 -left-4 hidden border border-sand/25 bg-navy-800/95 p-8 backdrop-blur sm:-left-10 sm:block"
            >
              <p className="font-display text-5xl font-medium leading-none text-sand">
                VHF {MARINA.vhfChannel}
              </p>
              <p className="mt-3 max-w-44 text-xs leading-relaxed text-ivory/65">
                Call ahead on channel {MARINA.vhfChannel} and we will help you
                into your slip.
              </p>
            </Reveal>
          </div>
        </div>

        <Stagger className="mt-24 grid grid-cols-2 gap-px border border-ivory/15 bg-ivory/15 sm:mt-28 lg:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label} className="bg-navy">
              <div className="px-6 py-10 text-center sm:py-12">
                <p className="font-display text-5xl font-medium text-ivory sm:text-6xl">
                  {s.value}
                </p>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-sand">
                  {s.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
