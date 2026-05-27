import { forwardRef } from "react";
import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "success" | "muted";
  size?: "sm" | "md";
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", size = "sm", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={clsx(
          "inline-flex items-center rounded-full font-medium",
          {
            default: "bg-card text-foreground border border-border",
            primary: "bg-primary/10 text-primary border border-primary/20",
            success: "bg-success/10 text-success border border-success/20",
            muted: "bg-muted text-muted-foreground border border-border"
          }[variant],
          {
            sm: "px-2.5 py-1 text-xs",
            md: "px-3 py-1.5 text-sm"
          }[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
