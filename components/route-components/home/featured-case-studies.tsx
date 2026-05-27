import { Reveal } from "@/components/motion/reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Jetpack Compose Finance App",
    summary: "Built a premium finance experience with offline-first sync, animated dashboards, and modular Compose architecture.",
    impact: "35% faster task completion"
  },
  {
    title: "Enterprise Delivery Platform",
    summary: "Led Android delivery workflows, push notifications, and API reliability improvements across multiple product teams.",
    impact: "Reduced crash rate by 42%"
  },
  {
    title: "Portfolio Automation System",
    summary: "Created a content-driven portfolio workflow with reusable sections, case study templates, and deployment automation.",
    impact: "Cut updates from hours to minutes"
  }
];

export function FeaturedCaseStudies() {
  return (
    <Reveal delay={0.12}>
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Featured case studies</p>
            <h2 className="mt-2 text-2xl font-semibold">Impact-focused Android work</h2>
          </div>
          <Link href="/case-studies" className="text-sm text-primary">
            See all
          </Link>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {caseStudies.map((item) => (
            <article key={item.title} className="rounded-2xl border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{item.impact}</p>
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.summary}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 text-right">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm text-primary">
            View all case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Reveal>
  );
}
