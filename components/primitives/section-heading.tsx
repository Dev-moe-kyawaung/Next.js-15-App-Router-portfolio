import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={clsx("max-w-3xl", align === "center" && "mx-auto text-center", className)}
      {...props}
    >
      {eyebrow && (
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-lg leading-8 text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
