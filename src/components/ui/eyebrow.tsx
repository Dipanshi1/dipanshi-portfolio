import * as React from "react";
import { cn } from "@/lib/utils";

export interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: React.ElementType;
}

export function Eyebrow({
  as: Component = "p",
  className,
  children,
  ...props
}: EyebrowProps) {
  return (
    <Component
      className={cn(
        "font-mono text-xs uppercase tracking-wider text-accent-primary select-none",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
