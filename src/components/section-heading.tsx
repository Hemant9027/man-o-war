import { cn } from "@/lib/utils";
import { Reveal } from "./motion";

export default function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  dark = false,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className={cn("eyebrow", dark ? "text-sand" : "text-ocean")}>
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-5 font-display text-4xl font-medium leading-[1.06] sm:text-5xl lg:text-[3.4rem]",
          dark ? "text-ivory" : "text-navy"
        )}
      >
        {title}
      </h2>
      {copy && (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed sm:text-lg",
            dark ? "text-ivory/70" : "text-charcoal/65"
          )}
        >
          {copy}
        </p>
      )}
    </Reveal>
  );
}
