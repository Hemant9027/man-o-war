import { Clock } from "lucide-react";
import { HOURS } from "@/lib/site";
import { cn } from "@/lib/utils";
import SectionHeading from "./section-heading";
import { Stagger, StaggerItem } from "./motion";

function HourCard({
  title,
  days,
  lines,
}: {
  title: string;
  days: string;
  lines: string[];
}) {
  return (
    <div className="flex h-full flex-col border border-navy/10 bg-white p-7">
      <div className="flex items-center gap-3">
        <Clock className="size-4 text-ocean" aria-hidden />
        <h3 className="font-display text-xl font-medium text-navy">{title}</h3>
      </div>
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-charcoal/50">
        {days}
      </p>
      <ul className="mt-2 space-y-1.5 text-sm text-charcoal/75">
        {lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Hours({
  dark = false,
  className,
}: {
  dark?: boolean;
  className?: string;
}) {
  const blocks = [
    HOURS.marinaOffice,
    HOURS.fuelRoadside,
    HOURS.fuelDockside,
    HOURS.restaurant,
  ];
  return (
    <div className={className}>
      <SectionHeading
        eyebrow="Hours"
        title="When to find us"
        dark={dark}
        className="mb-12"
      />
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {blocks.map((b) => (
          <StaggerItem key={b.title}>
            <HourCard {...b} />
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

export function HoursCompact() {
  const blocks = [
    HOURS.marinaOffice,
    HOURS.fuelRoadside,
    HOURS.fuelDockside,
    HOURS.restaurant,
  ];
  return (
    <ul className="divide-y divide-navy/10 border border-navy/10 bg-white">
      {blocks.map((b) => (
        <li key={b.title} className="p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ocean">
            {b.title}
          </p>
          <p className="mt-2 text-sm font-medium text-navy">{b.days}</p>
          <p className="text-sm text-charcoal/65">{b.lines.join("  ·  ")}</p>
        </li>
      ))}
    </ul>
  );
}
