import { Reveal } from "@/components/motion/reveal";
import { ArrowLeft, ExternalLink, Github, Smartphone } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const caseStudies: Record<string, {
  title: string;
  category: string;
  overview: string;
  challenge: string;
  solution: string[];
  results: string[];
  technologies: string[];
  timeline: string;
  role: string;
}> = {
  "jetpack-compose-finance-app": {
    title: "Jetpack Compose Finance App",
    category: "Consumer App",
    overview: "A premium finance management app with offline-first architecture, animated dashboards, and modular Compose design.",
    challenge: "The legacy XML-based UI was slow to iterate, hard to maintain, and caused 15% longer development cycles. The app also suffered from frequent crashes during data sync operations.",
    solution: [
      "Migrated entire UI layer to Jetpack Compose, reducing UI code by 50%",
      "Implemented MVI architecture with Kotlin Flow for reactive state management",
      "Built offline-first sync with Room and WorkManager for reliable data persistence",
      "Added Hilt for dependency injection, improving testability and modularity",
      "Created custom Compose animations for smooth dashboards and transitions"
    ],
    results: [
      "35% faster task completion for users",
      "42% reduction in crash rate (94% → 99.2% crash-free)",
      "50% reduction in UI code volume",
      "40% faster feature development cycles"
    ],
    technologies: ["Jetpack Compose", "Kotlin", "Hilt", "Room", "Kotlin Flow", "WorkManager", "Material 3"],
    timeline: "6 months",
    role: "Lead Android Developer"
  },
  "enterprise-delivery-platform": {
    title: "Enterprise Delivery Platform",
    category: "Enterprise",
    overview: "Android app for 50K+ daily drivers managing delivery workflows, real-time tracking, and push notifications.",
    challenge: "The app had high crash rates during peak hours, poor offline handling, and delayed push notifications causing driver frustration and dropped deliveries.",
    solution: [
      "Implemented robust offline-first architecture with Room database",
      "Optimized push notification delivery with Firebase Cloud Messaging",
      "Added background sync with WorkManager for reliable data updates",
      "Profiling and optimizing app startup time by 35%",
      "Established crash monitoring and automated alerting"
    ],
    results: [
      "42% reduction in crash rate",
      "99.2% crash-free sessions",
      "18% reduction in user churn",
      "35% faster app startup time"
    ],
    technologies: ["Kotlin", "Firebase", "WorkManager", "Retrofit", "Room", "Push Notifications"],
    timeline: "9 months",
    role: "Senior Android Developer"
  },
  "portfolio-automation-system": {
    title: "Portfolio Automation System",
    category: "Tooling",
    overview: "Content-driven portfolio workflow with reusable sections, case study templates, and fully automated deployment.",
    challenge: "Manual portfolio updates were time-consuming and error-prone, taking hours to update case studies, skills, and resume content.",
    solution: [
      "Built Next.js 15 App Router architecture with server components",
      "Created reusable React components for sections and case studies",
      "Implemented content management with TypeScript and JSON data",
      "Set up CI/CD with GitHub Actions for automated deployment",
      "Added Framer Motion for smooth page transitions and animations"
    ],
    results: [
      "90% faster content updates (hours → minutes)",
      "Fully reusable component system",
      "Zero-downtime automated deployments",
      "Consistent design system across all pages"
    ],
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel", "GitHub Actions"],
    timeline: "3 weeks",
    role: "Full Stack Developer"
  },
  "healthcare-tracking-app": {
    title: "Healthcare Patient Tracking",
    category: "Healthcare",
    overview: "HIPAA-compliant patient tracking app with secure data encryption and real-time sync for healthcare providers.",
    challenge: "Healthcare apps require strict data security and compliance. The app needed end-to-end encryption, secure authentication, and real-time data sync without compromising performance.",
    solution: [
      "Implemented AES-256 encryption for all sensitive patient data",
      "Built secure authentication with OAuth 2.0 and biometric support",
      "Created real-time sync with WebSocket and conflict resolution",
      "Ensured HIPAA compliance through audit logging and access controls",
      "Optimized for low-bandwidth environments common in healthcare settings"
    ],
    results: [
      "HIPAA compliant certification achieved",
      "99.9% uptime across all healthcare providers",
      "Real-time sync with <500ms latency",
      "Used by 200+ healthcare providers"
    ],
    technologies: ["Kotlin", "AES-256", "WebSocket", "Firebase", "OAuth 2.0", "Biometric Auth"],
    timeline: "8 months",
    role: "Lead Android Developer"
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) {
    notFound();
  }

  return (
    <main className="bg-background text-foreground">
      <section className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        <Reveal>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to case studies
          </Link>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-6">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
              {study.category}
            </span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              {study.title}
            </h1>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              {study.overview}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Smartphone className="h-4 w-4" />
                {study.role}
              </div>
              <div>{study.timeline}</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 grid gap-6 md:grid-cols-[1fr_1.2fr]">
            <div className="rounded-3xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold">Challenge</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {study.challenge}
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold">Results</h2>
              <ul className="mt-3 space-y-2">
                {study.results.map((result) => (
                  <li key={result} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-1 h-1.5 w-1.5 min-w-[6px] rounded-full bg-success" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-8 rounded-3xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">Solution</h2>
            <ul className="mt-4 space-y-3">
              {study.solution.map((step) => (
                <li key={step} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                  <span className="mt-1 h-1.5 w-1.5 min-w-[6px] rounded-full bg-primary" />
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-8">
            <h2 className="text-lg font-semibold">Technologies</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {study.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Work with me
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition hover:bg-card"
            >
              View all case studies
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}
