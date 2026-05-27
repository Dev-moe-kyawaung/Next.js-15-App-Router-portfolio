import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

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

const skills = [
  "Kotlin",
  "Jetpack Compose",
  "Android SDK",
  "Clean Architecture",
  "Hilt",
  "Coroutines",
  "Flow",
  "Room",
  "Retrofit",
  "Material 3",
  "Firebase",
  "CI/CD"
];

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              Senior Android Developer • Moe-Kyaw-Aung
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Building fast, polished Android products with clean architecture and product-minded engineering.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              I design and ship Android apps with Jetpack Compose, scalable state management, and a focus on performance, clarity, and premium UX.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                View case studies <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition hover:bg-card"
              >
                <Download className="h-4 w-4" />
                Download resume
              </Link>
            </div>

            <div className="mt-8 flex gap-4 text-muted-foreground">
              <Link href="https://github.com" className="transition hover:text-foreground">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="transition hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-glow">
              <div className="rounded-2xl border border-border bg-background p-5">
                <p className="text-sm text-muted-foreground">Selected metrics</p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-3xl font-semibold">10+</p>
                    <p className="mt-1 text-sm text-muted-foreground">Production apps shipped</p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold">8y</p>
                    <p className="mt-1 text-sm text-muted-foreground">Android experience</p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold">42%</p>
                    <p className="mt-1 text-sm text-muted-foreground">Crash reduction achieved</p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold">35%</p>
                    <p className="mt-1 text-sm text-muted-foreground">Faster user flows</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <section className="mt-16">
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
          </section>
        </Reveal>

        <Reveal delay={0.16}>
          <section className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Core skills</p>
              <h2 className="mt-2 text-2xl font-semibold">Modern Android stack</h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                I work across architecture, UI systems, performance optimization, and release quality to help teams ship maintainable apps.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-border bg-card px-4 py-2 text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </Reveal>
      </section>
    </main>
  );
}
