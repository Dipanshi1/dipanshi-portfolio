import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
  href?: string;
  external?: boolean;
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      external,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans font-medium select-none transition-all duration-150 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed";

    const variantStyles = {
      primary:
        "bg-text-primary text-canvas rounded-md hover:opacity-90 active:scale-[0.98] shadow-sm",
      secondary:
        "border border-border-subtle bg-surface text-text-primary rounded-md hover:bg-surface-elevated hover:border-text-secondary active:scale-[0.98]",
      outline:
        "border border-border-subtle bg-transparent text-text-primary rounded-md hover:bg-surface-elevated hover:border-border-focus active:scale-[0.98]",
      ghost:
        "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-elevated rounded-md active:scale-[0.98]",
      link:
        "bg-transparent text-accent-primary hover:underline underline-offset-4 p-0 h-auto font-normal",
    };

    const sizeStyles = {
      sm: "h-8 px-3 text-xs gap-1.5",
      md: "h-10 px-4 text-sm gap-2",
      lg: "h-11 px-5 text-sm gap-2.5",
      icon: "h-9 w-9 p-0",
    };

    const combinedClasses = cn(
      baseStyles,
      variantStyles[variant],
      variant !== "link" ? sizeStyles[size] : "",
      className
    );

    if (href) {
      const anchorProps = external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {};
      return (
        <a
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          href={href}
          className={combinedClasses}
          {...anchorProps}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        type={props.type || "button"}
        className={combinedClasses}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
