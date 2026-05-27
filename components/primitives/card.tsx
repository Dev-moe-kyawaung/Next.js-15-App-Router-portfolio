import { forwardRef } from "react";
import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "elevated";
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "rounded-2xl",
          {
            default: "bg-card",
            bordered: "bg-card border border-border",
            elevated: "bg-card shadow-lg"
          }[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
