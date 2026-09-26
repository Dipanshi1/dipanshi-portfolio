import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ as: Component = "div", className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Container.displayName = "Container";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  size?: "sm" | "md" | "lg";
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ size = "md", className, children, ...props }, ref) => {
    const sizeClasses = {
      sm: "py-8 sm:py-12",
      md: "py-12 sm:py-16 lg:py-20",
      lg: "py-16 sm:py-24 lg:py-32",
    };

    return (
      <section
        ref={ref}
        className={cn("w-full", sizeClasses[size], className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);
Section.displayName = "Section";
