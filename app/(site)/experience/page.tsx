import { Reveal } from "@/components/motion/reveal";
import { Calendar, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    company: "TechCorp International",
    role: "Senior Android Developer",
    period: "2022 — Present",
    location: "London, UK (Remote)",
    achievements: [
      "Led Android development for enterprise finance app with 500K+ active users",
      "Architected Jetpack Compose migration reducing UI code by 40%",
      "Mentored 4 junior developers and established code review standards",
      "Reduced crash-free sessions from 94% to 99.2%"
    ]
  },
  {
    company: "Digital Solutions Ltd",
    role: "Android Developer",
    period: "2019 — 2022",
    location: "Bangkok, Thailand",
    achievements: [
      "Built delivery platform Android app used by 50K+ drivers daily",
      "Implemented offline-first architecture with Room and WorkManager",
      "Integrated push notifications reducing user churn by 18%",
      "Improved app startup time by 35% through profiling and optimization"
    ]
  },
  {
    company: "StartupHub",
    role: "Mobile Developer",
    period: "2017 — 2019",
    location: "Yangon, Myanmar",
    achievements: [
      "Shipped 3 production Android apps from scratch",
      "Implemented Material Design guidelines across multiple products",
      "Set up CI/CD pipelines with Fastlane and GitHub Actions",
      "Collaborated with designers to create smooth animations and micro-interactions"
    ]
  }
];

export default function ExperiencePage() {
  return (
    <main className="bg-background text-foreground">
      <section className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Experience</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Professional journey
            </h1>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              8+ years building Android apps across startups, enterprises, and remote teams.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <Reveal key={exp.company} delay={index * 0.08}>
              <article className="rounded-3xl border border-border bg-card p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-primary" />
                      <h2 className="text-xl font-semibold">{exp.company}</h2>
                    </div>
                    <p className="mt-1 text-primary">{exp.role}</p>
                  </div>
                  <div className="flex flex-col items-start gap-2 text-sm text-muted-foreground sm:items-end">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {exp.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                      <span className="mt-1 h-1.5 w-1.5 min-w-[6px] rounded-full bg-primary" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.32}>
          <div className="mt-12">
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition hover:bg-card"
            >
              Download full resume
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
