import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
}

export function Container({ className, size = "lg", children, ...props }: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto px-6",
        {
          sm: "max-w-4xl",
          md: "max-w-5xl",
          lg: "max-w-7xl",
          xl: "max-w-8xl"
        }[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
