import * as React from "react";
import { cn } from "@/lib/utils";
import { fieldBase } from "./input";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(fieldBase, "min-h-32 py-3 leading-relaxed", className)}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Textarea };
