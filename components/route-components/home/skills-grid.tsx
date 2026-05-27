import { Reveal } from "@/components/motion/reveal";

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

export function SkillsGrid() {
  return (
    <Reveal delay={0.16}>
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
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
        </div>
      </section>
    </Reveal>
  );
}
