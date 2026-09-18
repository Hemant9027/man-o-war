import * as React from "react";
import { cn } from "@/lib/utils";

const fieldBase =
  "flex h-12 w-full border border-navy/15 bg-white px-4 text-sm text-charcoal placeholder:text-charcoal/35 transition-colors focus:border-ocean focus:outline-none focus:ring-1 focus:ring-ocean/40 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-red-500/30";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    ref={ref}
    className={cn(fieldBase, className)}
    {...props}
  />
));
Input.displayName = "Input";

export { Input, fieldBase };
