import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";

interface CaseStudyCardProps {
  slug: string;
  title: string;
  category: string;
  summary: string;
  impact: string;
  technologies: string[];
  variant?: "default" | "featured";
}

export function CaseStudyCard({
  slug,
  title,
  category,
  summary,
  impact,
  technologies,
  variant = "default"
}: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${slug}`}>
      <article
        className={clsx(
          "group flex flex-col rounded-3xl border border-border bg-card p-6 transition",
          variant === "featured" && "hover:border-primary/50"
        )}
      >
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs text-primary">
            {category}
          </span>
          <span>{impact}</span>
        </div>

        <h3 className="mt-4 text-xl font-semibold group-hover:text-primary">{title}</h3>

        <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="rounded-full border border-border bg-background px-2.5 py-1 text-xs">
              {tech}
            </span>
          ))}
        </div>

        {variant === "featured" && (
          <div className="mt-5 flex items-center gap-2 text-sm text-primary">
            View case study <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </div>
        )}
      </article>
    </Link>
  );
}
