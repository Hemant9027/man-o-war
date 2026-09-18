import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { fieldBase } from "./input";

const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <div className="relative">
    <select
      ref={ref}
      className={cn(fieldBase, "appearance-none pr-10", className)}
      {...props}
    >
      {children}
    </select>
    <ChevronDown
      className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-charcoal/40"
      aria-hidden
    />
  </div>
));
Select.displayName = "Select";

export { Select };
