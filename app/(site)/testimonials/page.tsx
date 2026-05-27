import { Reveal } from "@/components/motion/reveal";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Engineering Manager, TechCorp International",
    company: "TechCorp",
    image: "/images/testimonials/sarah-chen.jpg",
    content: "Moe-Kyaw is one of the most impactful Android developers I've worked with. He architected our Jetpack Compose migration, reduced our crash rate by over 40%, and mentored our junior team members. His code quality and product thinking are exceptional.",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "CTO, Digital Solutions Ltd",
    company: "Digital Solutions",
    image: "/images/testimonials/david-thompson.jpg",
    content: "We hired Moe-Kyaw to lead our delivery platform Android development. He delivered a robust offline-first architecture that handled 50K+ daily drivers reliably. His ability to balance technical excellence with business impact is rare.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, StartupHub",
    company: "StartupHub",
    image: "/images/testimonials/emily-rodriguez.jpg",
    content: "Moe-Kyaw shipped 3 production Android apps from scratch in under 2 years. He worked closely with our design team to create smooth animations and intuitive UX. His communication and reliability made him a core part of our team.",
    rating: 5
  },
  {
    name: "Michael Park",
    role: "Senior Engineering Manager, FinanceCo",
    company: "FinanceCo",
    image: "/images/testimonials/michael-park.jpg",
    content: "Working with Moe-Kyaw on our finance app was transformative. He modernized our architecture, improved performance significantly, and established code review standards that elevated our entire team. I'd hire him again without hesitation.",
    rating: 5
  }
];

export default function TestimonialsPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Testimonials</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              What people say
            </h1>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Feedback from engineering managers, CTOs, and product leaders I've worked with.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08}>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-8">
                <Quote className="h-8 w-8 text-primary/30" />
                <p className="mt-6 text-base leading-7 text-muted-foreground">
                  {testimonial.content}
                </p>

                <div className="mt-6 flex items-center gap-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10" />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
