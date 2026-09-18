import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/hero";
import SectionHeading from "@/components/section-heading";
import ContactForm from "@/components/contact-form";
import { HoursCompact } from "@/components/hours";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Talk to the Marina Office",
  description:
    "Reach Man-O-War Marina Village: call (242) 554-9500, email mowmv@hotmail.com, or send an enquiry. Man-O-War Cay, Abaco, Bahamas.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Man-O-War Marina Village",
    description:
      "Call (242) 554-9500 or email mowmv@hotmail.com — dockage, dining, fuel and island questions answered.",
  },
};

const cards = [
  {
    icon: Phone,
    eyebrow: "Marina",
    title: SITE.marinaPhoneDisplay,
    copy: "Mon–Sat, office hours. On the water, hail VHF Channel 16.",
    href: SITE.marinaPhoneHref,
    action: "Call the marina",
  },
  {
    icon: Mail,
    eyebrow: "Email",
    title: SITE.email,
    copy: "For dockage requests, rate sheets and general questions.",
    href: SITE.emailHref,
    action: "Write to us",
  },
  {
    icon: MapPin,
    eyebrow: "Location",
    title: "Man-O-War Cay",
    copy: "Abaco, Bahamas — on the harbour, in the heart of the island.",
    href: SITE.directionsUrl,
    action: "Get directions",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1800&q=85"
        alt="Aerial view of a calm harbour ringed by green hills"
        eyebrow="Contact"
        title={
          <>
            Let's get you <em className="italic text-sand">on your way</em>
          </>
        }
        subtitle="Dockage, dining, fuel or directions — the marina office answers it all."
      />

      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-x">
          <Stagger className="grid gap-6 md:grid-cols-3">
            {cards.map((c) => (
              <StaggerItem key={c.eyebrow}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    c.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex h-full flex-col border border-navy/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-navy/20 hover:shadow-[0_24px_60px_-28px_rgba(11,36,51,0.3)]"
                >
                  <span className="flex size-12 items-center justify-center border border-ocean/25 text-ocean transition-colors duration-300 group-hover:bg-ocean group-hover:text-ivory">
                    <c.icon className="size-5" aria-hidden />
                  </span>
                  <p className="eyebrow mt-6 text-ocean">{c.eyebrow}</p>
                  <h2 className="mt-2 font-display text-[1.65rem] font-medium leading-snug text-navy">
                    {c.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/65">
                    {c.copy}
                  </p>
                  <span className="mt-6 text-[10px] font-semibold uppercase tracking-[0.26em] text-navy underline-offset-8 group-hover:underline">
                    {c.action}
                  </span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-20 grid items-start gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
            <Reveal>
              <ContactForm />
            </Reveal>
            <Reveal delay={0.15} className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Hours"
                title="When to catch us"
                className="mb-8"
              />
              <HoursCompact />
              <p className="mt-6 text-sm italic leading-relaxed text-charcoal/55">
                Outside office hours, leave a message or send an email — we'll
                get back to you the next working day.
              </p>
            </Reveal>
          </div>

          {/* Map */}
          <Reveal className="mt-20">
            <div className="border border-navy/10 bg-white p-2">
              <div className="relative aspect-[16/7] w-full overflow-hidden">
                <iframe
                  title="Map of Man-O-War Cay, Abaco, Bahamas"
                  src={SITE.mapEmbedUrl}
                  className="absolute inset-0 h-full w-full border-0 grayscale-[30%] contrast-[1.02]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="flex items-center justify-between px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-charcoal/45">
                <span>Man-O-War Cay · Abaco · Bahamas</span>
                <span>26.588° N · 77.068° W</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
