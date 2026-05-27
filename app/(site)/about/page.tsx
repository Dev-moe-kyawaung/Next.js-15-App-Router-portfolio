import { Reveal } from "@/components/motion/reveal";
import { ArrowRight, Code2, Rocket, User2 } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">About</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Moe-Kyaw-Aung
            </h1>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Senior Android Developer with 8+ years of experience building production-grade apps.
              I specialize in Jetpack Compose, clean architecture, and performance-focused engineering
              that delivers measurable business impact.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-border bg-card p-8">
              <h2 className="text-2xl font-semibold">My philosophy</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                I believe Android apps should be fast, stable, and maintainable. Every feature I ship
                balances user experience with architectural clarity. I work closely with product teams
                to translate requirements into modular, testable code that scales with the product.
              </p>
              <p className="mt-4 leading-7 text-muted-foreground">
                My approach combines modern tooling like Jetpack Compose and Kotlin Coroutines with
                disciplined practices like code reviews, automated testing, and CI/CD pipelines.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-3xl border border-border bg-card p-8">
              <h2 className="text-2xl font-semibold">What I bring to teams</h2>
              <ul className="mt-4 space-y-4">
                <li className="flex gap-3">
                  <Code2 className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Senior-level code quality</p>
                    <p className="text-sm text-muted-foreground">
                      Clean architecture, modular design, and maintainable patterns that reduce technical debt.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <User2 className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Product-minded engineering</p>
                    <p className="text-sm text-muted-foreground">
                      I understand business goals and design solutions that balance UX, performance, and speed.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Rocket className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Impact-focused delivery</p>
                    <p className="text-sm text-muted-foreground">
                      Measurable outcomes: crash reduction, faster user flows, and improved stability metrics.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="mt-12 flex gap-4">
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              View experience <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition hover:bg-card"
            >
              See case studies
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
