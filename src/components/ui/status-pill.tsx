import * as React from "react";
import { cn } from "@/lib/utils";

export interface StatusPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  pulse?: boolean;
  variant?: "available" | "neutral" | "warning";
}

export function StatusPill({
  pulse = true,
  variant = "available",
  className,
  children = "Available for Internships",
  ...props
}: StatusPillProps) {
  const variantStyles = {
    available:
      "bg-accent-success/10 text-accent-success border-accent-success/30",
    neutral:
      "bg-surface-elevated text-text-secondary border-border-subtle",
    warning:
      "bg-accent-warning/10 text-accent-warning border-accent-warning/30",
  };

  const dotStyles = {
    available: "bg-accent-success",
    neutral: "bg-text-tertiary",
    warning: "bg-accent-warning",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-2.5 py-1 rounded-sm text-xs font-mono font-medium border select-none transition-colors duration-150 shadow-2xs",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "w-1.5 h-1.5 rounded-full shrink-0",
          dotStyles[variant],
          pulse && "animate-pulse"
        )}
        aria-hidden="true"
      />
      <span>{children}</span>
    </span>
  );
}
