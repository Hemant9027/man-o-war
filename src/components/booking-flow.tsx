import { CheckCircle2, CreditCard, FileCheck, Mail, Ship } from "lucide-react";
import SectionHeading from "./section-heading";
import { Stagger, StaggerItem, Reveal } from "./motion";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    icon: Ship,
    title: "Dockage Request",
    copy: "Tell us your dates and vessel details. No payment is taken.",
  },
  {
    icon: Mail,
    title: "Availability Confirmation",
    copy: "Our team checks the dock and confirms availability by email or phone.",
  },
  {
    icon: FileCheck,
    title: "Reservation Confirmation",
    copy: "Once availability is confirmed, we hold your slip and send your reservation details.",
  },
  {
    icon: CreditCard,
    title: "Deposit Payment",
    copy: "Secure the reservation with a deposit, arranged directly with the marina office.",
  },
  {
    icon: CheckCircle2,
    title: "Booking Confirmed",
    copy: "Your slip is confirmed. Call on VHF 16 as you approach the harbour.",
  },
];

export default function BookingFlow({ dark = false }: { dark?: boolean }) {
  return (
    <div>
      <SectionHeading
        dark={dark}
        eyebrow="How it works"
        title="From request to reserved"
        copy="A reservation is only confirmed once our marina team has verified availability — nothing is booked automatically."
        align="center"
        className="mb-14"
      />
      <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {STEPS.map((s, i) => (
          <StaggerItem key={s.title}>
            <div className="relative">
              <div className="flex items-center gap-4 lg:block">
                <span
                  className={cn(
                    "flex size-13 items-center justify-center border font-display text-lg",
                    i === 0
                      ? "border-sand bg-sand text-navy"
                      : dark
                        ? "border-ivory/25 text-ivory"
                        : "border-navy/20 text-navy"
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <s.icon
                  className={cn(
                    "size-5 lg:mt-5",
                    dark ? "text-sand" : "text-ocean"
                  )}
                  aria-hidden
                />
              </div>
              <h3
                className={cn(
                  "mt-5 font-display text-xl font-medium leading-snug",
                  dark ? "text-ivory" : "text-navy"
                )}
              >
                {s.title}
              </h3>
              <p
                className={cn(
                  "mt-2.5 text-sm leading-relaxed",
                  dark ? "text-ivory/65" : "text-charcoal/65"
                )}
              >
                {s.copy}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal delay={0.2}>
        <p
          className={cn(
            "mx-auto mt-14 max-w-2xl text-center text-sm italic leading-relaxed",
            dark ? "text-ivory/55" : "text-charcoal/55"
          )}
        >
          Payments are not processed on this website. When online deposits
          become available, this flow will connect to a secure payment provider
          and issue receipts automatically.
        </p>
      </Reveal>
    </div>
  );
}
