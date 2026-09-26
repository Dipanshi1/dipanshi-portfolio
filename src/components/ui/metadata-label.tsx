import * as React from "react";
import { cn } from "@/lib/utils";

export interface MetadataLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: React.ReactNode;
  inline?: boolean;
}

export function MetadataLabel({
  label,
  value,
  inline = false,
  className,
  ...props
}: MetadataLabelProps) {
  if (inline) {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-1.5 font-mono text-xs",
          className
        )}
        {...props}
      >
        <span className="text-text-tertiary uppercase tracking-wider">{label}:</span>
        <span className="text-text-primary font-medium">{value}</span>
      </div>
    );
  }

  return (
    <div className={cn("space-y-1 font-mono text-xs", className)} {...props}>
      <span className="block text-text-tertiary uppercase tracking-wider">
        {label}
      </span>
      <span className="block text-text-primary font-medium">{value}</span>
    </div>
  );
}

export interface MetricStatProps extends React.HTMLAttributes<HTMLDivElement> {
  stat: string;
  label: string;
  context?: string;
}

export function MetricStat({
  stat,
  label,
  context,
  className,
  ...props
}: MetricStatProps) {
  return (
    <div
      className={cn(
        "p-4 rounded-md border border-border-subtle bg-surface space-y-1.5",
        className
      )}
      {...props}
    >
      <div className="font-mono text-2xl font-semibold tracking-tight text-text-primary">
        {stat}
      </div>
      <div className="font-sans text-xs font-medium text-text-secondary">
        {label}
      </div>
      {context && (
        <div className="font-mono text-[11px] text-text-tertiary">
          {context}
        </div>
      )}
    </div>
  );
}
