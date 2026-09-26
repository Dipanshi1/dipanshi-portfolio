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
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    neutral:
      "bg-surface-elevated text-text-secondary border-border-subtle",
    warning:
      "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  };

  const dotStyles = {
    available: "bg-emerald-500 dark:bg-emerald-400",
    neutral: "bg-text-tertiary",
    warning: "bg-amber-500 dark:bg-amber-400",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono font-medium border select-none transition-colors duration-150",
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
