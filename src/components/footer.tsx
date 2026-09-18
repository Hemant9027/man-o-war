import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import Logo from "./logo";

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/mow-life", label: "MOW Life" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services/dockage", label: "Dockage" },
  { href: "/services/restaurant", label: "Dock N' Dine" },
  { href: "/services/fuel", label: "Fuel" },
  { href: "/services/gift-shop", label: "Gift Shop" },
  { href: "/services#amenities", label: "Amenities" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-ivory">
      <div className="container-x">
        {/* CTA row */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-ivory/12 py-16 lg:flex-row lg:items-center">
          <div>
            <p className="eyebrow text-sand">Ready when you are</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-medium leading-[1.08] sm:text-5xl">
              The harbour is waiting.
            </h2>
          </div>
          <Link
            href="/book"
            className="group inline-flex h-13 items-center gap-3 bg-sand px-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-navy transition-colors duration-300 hover:bg-ivory"
          >
            Plan Your Visit
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Columns */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="max-w-sm">
            <Logo markClassName="size-9" />
            <p className="mt-6 text-sm leading-relaxed text-ivory/65">
              Marina services, dining, fuel, shopping and island amenities in
              the heart of Man-O-War Cay, Abaco, Bahamas.
            </p>
          </div>

          <nav aria-label="Explore">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sand">
              Explore
            </h3>
            <ul className="mt-6 space-y-3.5 text-sm text-ivory/70">
              {exploreLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="transition-colors hover:text-ivory"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sand">
              Services
            </h3>
            <ul className="mt-6 space-y-3.5 text-sm text-ivory/70">
              {serviceLinks.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className="transition-colors hover:text-ivory"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sand">
              Contact
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-ivory/70">
              <li>
                <a
                  href={SITE.marinaPhoneHref}
                  className="flex items-center gap-3 transition-colors hover:text-ivory"
                >
                  <Phone className="size-4 shrink-0 text-sand" />
                  {SITE.marinaPhoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={SITE.emailHref}
                  className="flex items-center gap-3 break-all transition-colors hover:text-ivory"
                >
                  <Mail className="size-4 shrink-0 text-sand" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-sand" />
                <span>
                  Man-O-War Cay
                  <br />
                  Abaco, Bahamas
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-ivory/12 py-8 text-[11px] uppercase tracking-[0.22em] text-ivory/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Man-O-War Marina Village</p>
          <p>Man-O-War Cay · Abaco · Bahamas</p>
        </div>
      </div>
    </footer>
  );
}
