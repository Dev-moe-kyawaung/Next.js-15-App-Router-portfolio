import { Reveal } from "@/components/motion/reveal";
import { Smartphone, Code2, Zap, Shield, Users, Rocket } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Smartphone,
    title: "Android App Development",
    description: "Full-cycle Android app development from concept to production, using Jetpack Compose, clean architecture, and modern best practices.",
    features: [
      "Feature development with Jetpack Compose",
      "Offline-first architecture",
      "Material 3 design implementation",
      "Performance optimization"
    ]
  },
  {
    icon: Code2,
    title: "Architecture & Migration",
    description: "Modernize legacy Android apps with architectural improvements, code quality upgrades, and migration to Compose.",
    features: [
      "XML to Compose migration",
      "Clean Architecture implementation",
      "Modularization strategy",
      "Dependency injection with Hilt"
    ]
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Profile and optimize Android apps for faster startup, lower memory usage, better battery life, and improved stability.",
    features: [
      "Startup time optimization",
      "Memory leak detection",
      "Battery optimization",
      "Crash rate reduction"
    ]
  },
  {
    icon: Shield,
    title: "Quality & Testing",
    description: "Establish testing strategies, CI/CD pipelines, and quality standards to ensure reliable, maintainable apps.",
    features: [
      "Unit and integration testing",
      "UI testing with Espresso",
      "CI/CD pipeline setup",
      "Code review standards"
    ]
  },
  {
    icon: Users,
    title: "Technical Leadership",
    description: "Mentor developers, establish engineering practices, and lead Android teams to deliver high-quality products.",
    features: [
      "Team mentoring",
      "Code review processes",
      "Engineering best practices",
      "Technical strategy"
    ]
  },
  {
    icon: Rocket,
    title: "Consulting",
    description: "Expert advice on Android architecture, technology choices, and product strategy for startups and enterprises.",
    features: [
      "Architecture reviews",
      "Technology selection",
      "Product strategy",
      "Technical audits"
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Services</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              How I can help
            </h1>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              From full app development to architecture consulting, I help teams build better Android products.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.06}>
                <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6">
                  <div className="rounded-xl bg-primary/10 p-3 w-fit">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="mt-5 text-lg font-semibold">{service.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="mt-1 h-1 w-1 min-w-[4px] rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.36}>
          <div className="mt-12 flex gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Get in touch
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition hover:bg-card"
            >
              View case studies
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
