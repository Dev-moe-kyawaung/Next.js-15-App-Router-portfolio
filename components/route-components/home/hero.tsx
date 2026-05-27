"use client";

import { Reveal } from "@/components/motion/reveal";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
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
              Download resume
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
                  <p className="mt-1 text-sm text-muted-foreground">Production apps</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold">8y</p>
                  <p className="mt-1 text-sm text-muted-foreground">Android experience</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold">42%</p>
                  <p className="mt-1 text-sm text-muted-foreground">Crash reduction</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold">35%</p>
                  <p className="mt-1 text-sm text-muted-foreground">Faster flows</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
