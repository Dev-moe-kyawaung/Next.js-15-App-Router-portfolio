import { Reveal } from "@/components/motion/reveal";

const stats = [
  { value: "10+", label: "Production apps shipped" },
  { value: "8y", label: "Android experience" },
  { value: "42%", label: "Crash reduction achieved" },
  { value: "35%", label: "Faster user flows" }
];

export function Stats() {
  return (
    <Reveal delay={0.2}>
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-semibold">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
