import { Reveal } from "@/components/motion/reveal";
import { Download, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ResumeCta() {
  return (
    <Reveal delay={0.24}>
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold">Want to see my full experience?</h2>
              <p className="mt-3 text-muted-foreground">
                Download my resume to see my complete work history, skills, and certifications.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                <Download className="h-4 w-4" />
                Download resume
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition hover:bg-background"
              >
                Get in touch <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
