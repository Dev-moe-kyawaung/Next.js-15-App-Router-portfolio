import { Reveal } from "@/components/motion/reveal";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const caseStudies = [
  {
    slug: "jetpack-compose-finance-app",
    title: "Jetpack Compose Finance App",
    category: "Consumer App",
    summary: "Built a premium finance experience with offline-first sync, animated dashboards, and modular Compose architecture.",
    impact: "35% faster task completion",
    metrics: ["42% crash reduction", "50% UI code reduction", "35% faster flows"],
    technologies: ["Jetpack Compose", "Hilt", "Room", "Kotlin Flow"],
    image: "/images/case-studies/finance-app.jpg"
  },
  {
    slug: "enterprise-delivery-platform",
    title: "Enterprise Delivery Platform",
    category: "Enterprise",
    summary: "Led Android delivery workflows, push notifications, and API reliability improvements across multiple product teams.",
    impact: "Reduced crash rate by 42%",
    metrics: ["99.2% crash-free", "18% churn reduction", "35% faster startup"],
    technologies: ["Kotlin", "WorkManager", "Firebase", "Retrofit"],
    image: "/images/case-studies/delivery-app.jpg"
  },
  {
    slug: "portfolio-automation-system",
    title: "Portfolio Automation System",
    category: "Tooling",
    summary: "Created a content-driven portfolio workflow with reusable sections, case study templates, and deployment automation.",
    impact: "Cut updates from hours to minutes",
    metrics: ["90% faster updates", "Reusable components", "CI/CD automation"],
    technologies: ["Next.js", "TypeScript", "Vercel", "GitHub Actions"],
    image: "/images/case-studies/portfolio.jpg"
  },
  {
    slug: "healthcare-tracking-app",
    title: "Healthcare Patient Tracking",
    category: "Healthcare",
    summary: "Developed HIPAA-compliant patient tracking app with secure data encryption and real-time sync.",
    impact: "Used by 200+ healthcare providers",
    metrics: ["HIPAA compliant", "99.9% uptime", "Real-time sync"],
    technologies: ["Kotlin", "Encryption", "WebSocket", "Firebase"],
    image: "/images/case-studies/healthcare.jpg"
  }
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Case Studies</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Impact-focused Android work
            </h1>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Deep dives into production apps showing technical decisions, metrics, and business impact.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={index * 0.08}>
              <Link href={`/case-studies/${study.slug}`}>
                <article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition hover:border-primary/50">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs text-primary">
                      {study.category}
                    </span>
                    <span>{study.impact}</span>
                  </div>

                  <h2 className="mt-4 text-xl font-semibold group-hover:text-primary">
                    {study.title}
                  </h2>

                  <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                    {study.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {study.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-background px-2.5 py-1 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-sm text-primary">
                    View case study <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
