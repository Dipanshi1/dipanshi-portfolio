import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "brass" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
  href?: string;
  external?: boolean;
  download?: string;
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
      download,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-mono font-medium select-none transition-all duration-150 ease-out-expo focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-amber/70 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed";

    const variantStyles = {
      primary:
        "bg-accent-primary text-[#FDFBF7] visited:text-[#FDFBF7] border border-accent-primary/80 rounded-sm hover:bg-accent-primary/90 active:scale-[0.98] shadow-2xs font-mono",
      secondary:
        "border border-[#3D342C] bg-[#241E1A] text-text-primary visited:text-text-primary rounded-sm hover:bg-[#2D2621] hover:border-[#5A4532] active:scale-[0.98] shadow-2xs font-mono",
      brass:
        "border border-[#A8763E]/60 bg-[#A8763E]/15 text-[#E0A35C] visited:text-[#E0A35C] rounded-sm hover:bg-[#A8763E]/25 hover:border-[#D89B52] active:scale-[0.98] shadow-2xs font-mono",
      outline:
        "border border-border-subtle bg-transparent text-text-primary visited:text-text-primary rounded-sm hover:bg-surface-elevated hover:border-text-secondary active:scale-[0.98] font-mono",
      ghost:
        "bg-transparent text-text-secondary visited:text-text-secondary hover:text-text-primary hover:bg-surface-elevated/70 rounded-sm active:scale-[0.98] font-mono",
      link:
        "bg-transparent text-text-secondary visited:text-text-secondary hover:text-text-primary hover:underline underline-offset-4 p-0 h-auto font-mono",
    };

    const sizeStyles = {
      sm: "h-7 sm:h-8 px-2.5 sm:px-3 text-xs gap-1.5",
      md: "h-9 sm:h-10 px-3.5 sm:px-4 text-xs sm:text-sm gap-2",
      lg: "h-10 sm:h-11 px-4 sm:px-5 text-sm gap-2.5",
      icon: "h-8 w-8 sm:h-9 sm:w-9 p-0",
    };

    const combinedClasses = cn(
      baseStyles,
      variantStyles[variant],
      variant !== "link" ? sizeStyles[size] : "",
      className
    );

    if (href) {
      const anchorProps = {
        ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}),
        ...(download ? { download } : {}),
      };
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
