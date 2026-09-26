import * as React from "react";
import { cn } from "@/lib/utils";

export interface TechTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  interactive?: boolean;
  dot?: boolean;
  active?: boolean;
}

export function TechTag({
  interactive = false,
  dot = false,
  active = false,
  className,
  children,
  ...props
}: TechTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 rounded border transition-colors duration-150 select-none",
        active
          ? "border-accent-primary/40 bg-accent-primary/10 text-accent-primary"
          : "border-border-subtle bg-surface-elevated text-text-secondary",
        interactive &&
          "cursor-pointer hover:border-border-focus hover:text-text-primary",
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            "w-1 h-1 rounded-full",
            active ? "bg-accent-primary" : "bg-text-tertiary"
          )}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
}
