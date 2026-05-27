import { Reveal } from "@/components/motion/reveal";
import { Smartphone, Code2, Database, Cloud, Shield, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Core Android",
    icon: Smartphone,
    skills: [
      "Kotlin",
      "Jetpack Compose",
      "Android SDK",
      "Material 3",
      "ViewModel",
      "Lifecycle",
      "Content Providers",
      "Services"
    ]
  },
  {
    title: "Architecture & Patterns",
    icon: Code2,
    skills: [
      "Clean Architecture",
      "MVVM",
      "MVI",
      "Dependency Injection (Hilt)",
      "Modularization",
      "Kotlin Coroutines",
      "Kotlin Flow",
      "Unit Testing"
    ]
  },
  {
    title: "Data & Persistence",
    icon: Database,
    skills: [
      "Room",
      "Retrofit",
      "Ktor",
      "SQLite",
      "DataStore",
      "REST APIs",
      "GraphQL",
      "WebSocket"
    ]
  },
  {
    title: "Infrastructure & Tools",
    icon: Cloud,
    skills: [
      "Firebase",
      "Google Cloud",
      "CI/CD (GitHub Actions)",
      "Fastlane",
      "Gradle",
      "Git",
      "Docker",
      "Kubernetes"
    ]
  },
  {
    title: "Quality & Security",
    icon: Shield,
    skills: [
      "JUnit",
      "Mockk",
      "Espresso",
      "Paparazzi",
      "ProGuard",
      "App Security",
      "Code Review",
      "Static Analysis"
    ]
  },
  {
    title: "Performance",
    icon: Zap,
    skills: [
      "Profiler",
      "LeakCanary",
      "Benchmark",
      "Startup Optimization",
      "Memory Management",
      "Battery Optimization",
      "Network Optimization",
      "APK Size Reduction"
    ]
  }
];

export default function SkillsPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Skills</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Technical stack
            </h1>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Modern Android development across architecture, UI, data, performance, and quality.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.title} delay={index * 0.06}>
                <div className="rounded-3xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-primary/10 p-2">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-lg font-semibold">{category.title}</h2>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border bg-background px-3 py-1.5 text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </main>
  );
}
