import Image from "next/image";
import { Bath, Flame, ShowerHead, Waves, WashingMachine } from "lucide-react";
import SectionHeading from "./section-heading";
import { ImageReveal, Stagger, StaggerItem } from "./motion";
import { cn } from "@/lib/utils";

const AMENITIES = [
  {
    icon: Bath,
    title: "Restrooms",
    copy: "Clean facilities for marina guests.",
  },
  {
    icon: ShowerHead,
    title: "Showers",
    copy: "Spacious showers for guests.",
  },
  {
    icon: WashingMachine,
    title: "Laundry",
    copy: "Laundry facilities available to marina guests.",
  },
  {
    icon: Flame,
    title: "Grill Area",
    copy: "A convenient area for guests.",
  },
  {
    icon: Waves,
    title: "Swimming Pool",
    copy: "A relaxing pool for marina guests.",
  },
];

export default function Amenities({
  dark = false,
  withImage = true,
}: {
  dark?: boolean;
  withImage?: boolean;
}) {
  return (
    <section
      id="amenities"
      className={cn(
        "scroll-mt-24 py-24 sm:py-32",
        dark ? "bg-navy text-ivory" : "bg-sand-100/60",
      )}
    >
      <div
        className={cn(
          "container-x grid gap-14 lg:gap-20",
          withImage && "lg:grid-cols-[1.1fr_1fr] lg:items-center",
        )}
      >
        <div>
          <SectionHeading
            dark={dark}
            eyebrow="Guest Amenities"
            title="Everything ashore, taken care of"
            copy="Step off the boat and into comfort. Marina guests enjoy the essentials that make life at the dock feel effortless."
          />
          <Stagger className="mt-12 grid gap-px border border-navy/10 bg-navy/10 sm:grid-cols-2">
            {AMENITIES.map((a) => (
              <StaggerItem
                key={a.title}
                className={cn(dark ? "bg-navy" : "bg-ivory")}
              >
                <div className="flex h-full items-start gap-4 p-6 sm:p-7">
                  <span
                    className={cn(
                      "flex size-10 shrink-0 items-center justify-center border",
                      dark
                        ? "border-sand/35 text-sand"
                        : "border-ocean/25 text-ocean",
                    )}
                  >
                    <a.icon className="size-4.5" aria-hidden />
                  </span>
                  <div>
                    <h3
                      className={cn(
                        "font-display text-xl font-medium",
                        dark ? "text-ivory" : "text-navy",
                      )}
                    >
                      {a.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-1.5 text-sm leading-relaxed",
                        dark ? "text-ivory/65" : "text-charcoal/65",
                      )}
                    >
                      {a.copy}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
            <StaggerItem className={cn(dark ? "bg-navy" : "bg-ivory")}>
              <div className="flex h-full items-center p-6 sm:p-7">
                <p
                  className={cn(
                    "text-sm italic leading-relaxed",
                    dark ? "text-ivory/60" : "text-charcoal/60",
                  )}
                >
                  Amenities are reserved for guests of the marina — ask the
                  office for access on arrival.
                </p>
              </div>
            </StaggerItem>
          </Stagger>
        </div>

        {withImage && (
          <div className="relative">
            <ImageReveal className="aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1800&q=85"
                alt="A quiet swimming pool framed by palms and lounge chairs"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </ImageReveal>
            <div
              className={cn(
                "absolute -bottom-6 left-6 px-6 py-5",
                dark ? "bg-navy-800 text-ivory" : "bg-white text-navy",
                "border border-navy/10 shadow-[0_20px_50px_-24px_rgba(11,36,51,0.4)]",
              )}
            >
              <p className="eyebrow text-ocean">After the water</p>
              <p className="mt-1.5 font-display text-2xl font-medium">
                The Pool Deck
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
