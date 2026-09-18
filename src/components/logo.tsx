import { cn } from "@/lib/utils";

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      aria-hidden
      className={cn("size-10 shrink-0", className)}
    >
      <circle cx="22" cy="22" r="20.5" stroke="currentColor" strokeWidth="1.25" />
      {/* sail */}
      <path
        d="M22.8 9.5c4.2 3.6 6.3 8.7 6.6 15.1l-6.6-1.1V9.5Z"
        fill="currentColor"
      />
      <path
        d="M21 12.5c-2.9 3.2-4.4 7.1-4.7 11.1l4.7-.8V12.5Z"
        fill="currentColor"
        opacity="0.55"
      />
      {/* hull */}
      <path
        d="M13.5 26.5h17.2c-.9 2.5-2.6 4.1-4.9 4.1h-7.4c-2.2 0-4-1.6-4.9-4.1Z"
        fill="currentColor"
      />
      {/* wave */}
      <path
        d="M11 34.5c2.2-1.6 4.4-1.6 6.6 0s4.4 1.6 6.6 0 4.4-1.6 6.6 0"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Logo({
  className,
  markClassName,
  compact = false,
}: {
  className?: string;
  markClassName?: string;
  compact?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-3.5", className)}>
      <LogoMark className={markClassName} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display font-medium tracking-[0.08em]",
            compact ? "text-lg" : "text-xl sm:text-[1.35rem]"
          )}
        >
          MAN-O-WAR
        </span>
        <span className="mt-1.5 text-[8.5px] font-semibold uppercase tracking-[0.42em] opacity-75">
          Marina Village · Abaco
        </span>
      </span>
    </span>
  );
}
