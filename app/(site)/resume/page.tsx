import { Reveal } from "@/components/motion/reveal";
import { Download, FileText, Mail, Phone, MapPin, Linkedin, Github, Calendar } from "lucide-react";
import Link from "next/link";

const experience = [
  {
    company: "TechCorp International",
    role: "Senior Android Developer",
    period: "2022 — Present",
    location: "London, UK (Remote)",
    accomplishments: [
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
    accomplishments: [
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
    accomplishments: [
      "Shipped 3 production Android apps from scratch",
      "Implemented Material Design guidelines across multiple products",
      "Set up CI/CD pipelines with Fastlane and GitHub Actions",
      "Collaborated with designers to create smooth animations and micro-interactions"
    ]
  }
];

const education = [
  {
    institution: "Bangkok University",
    degree: "BSc in Computer Science",
    period: "2013 — 2017"
  }
];

const certifications = [
  "Google Associate Android Developer",
  "Kotlin for Android Developers (Google)",
  "Jetpack Compose Course (Android Developers)"
];

export default function ResumePage() {
  return (
    <main className="bg-background text-foreground">
      <section className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Resume</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                Moe-Kyaw-Aung
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                Senior Android Developer
              </p>
            </div>

            <Link
              href="/resume/moe-kyaw-aung-resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>moe.kyaw.aung@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+66 XX XXX XXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Bangkok, Thailand</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" />
              <span>linkedin.com/in/moe-kyaw-aung</span>
            </div>
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              <span>github.com/moe-kyaw-aung</span>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <Reveal delay={0.12}>
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold">Experience</h2>
              <div className="mt-6 space-y-6">
                {experience.map((exp, index) => (
                  <div key={exp.company} className="rounded-2xl border border-border bg-card p-6">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="font-semibold">{exp.company}</h3>
                        <p className="text-sm text-primary">{exp.role}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{exp.location}</p>
                    <ul className="mt-4 space-y-2">
                      {exp.accomplishments.map((acc) => (
                        <li key={acc} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="mt-1 h-1.5 w-1.5 min-w-[6px] rounded-full bg-primary" />
                          {acc}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold">Education</h2>
                <div className="mt-4 space-y-4">
                  {education.map((edu) => (
                    <div key={edu.institution} className="rounded-2xl border border-border bg-card p-5">
                      <h3 className="font-semibold">{edu.institution}</h3>
                      <p className="text-sm text-primary">{edu.degree}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold">Certifications</h2>
                <ul className="mt-4 space-y-3">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex gap-2 text-sm text-muted-foreground">
                      <FileText className="mt-0.5 h-4 w-4 text-primary" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
