import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn inline-flex items-center justify-center gap-3 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.24em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-1",
  {
    variants: {
      variant: {
        primary: "bg-navy text-ivory hover:bg-ocean",
        accent: "bg-sand text-navy hover:bg-ivory",
        outline:
          "border border-ivory/50 text-ivory hover:border-ivory hover:bg-ivory hover:text-navy",
        outlineDark:
          "border border-navy/25 text-navy hover:border-navy hover:bg-navy hover:text-ivory",
        ghost: "text-navy underline-offset-8 hover:underline",
      },
      size: {
        default: "h-13 px-8 py-4",
        sm: "h-10 px-6",
        lg: "h-14 px-10",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
);
Button.displayName = "Button";

export interface ButtonLinkProps
  extends React.ComponentProps<typeof Link>,
    VariantProps<typeof buttonVariants> {}

function ButtonLink({ className, variant, size, ...props }: ButtonLinkProps) {
  return (
    <Link
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, ButtonLink, buttonVariants };
