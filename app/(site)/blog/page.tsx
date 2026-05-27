import { Reveal } from "@/components/motion/reveal";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    slug: "jetpack-compose-migration-strategy",
    title: "A Practical Guide to Migrating XML to Jetpack Compose",
    excerpt: "Step-by-step strategies for migrating large Android codebases to Compose without disrupting development velocity.",
    date: "2024-11-15",
    readTime: "8 min read",
    tags: ["Jetpack Compose", "Migration", "Android"]
  },
  {
    slug: "clean-architecture-android",
    title: "Clean Architecture in Android: A Senior Developer's Perspective",
    excerpt: "How to structure Android apps with clean architecture that scales, remains testable, and reduces technical debt.",
    date: "2024-10-22",
    readTime: "12 min read",
    tags: ["Architecture", "Kotlin", "Best Practices"]
  },
  {
    slug: "compose-performance-optimization",
    title: "Performance Optimization in Jetpack Compose",
    excerpt: "Techniques for optimizing Compose performance: stability, recomposition, and memory management.",
    date: "2024-09-08",
    readTime: "10 min read",
    tags: ["Performance", "Jetpack Compose", "Optimization"]
  },
  {
    slug: "hilt-dependency-injection",
    title: "Mastering Hilt for Dependency Injection in Android",
    excerpt: "Deep dive into Hilt scopes, modules, and best practices for maintainable dependency injection.",
    date: "2024-08-14",
    readTime: "9 min read",
    tags: ["Hilt", "Dependency Injection", "Kotlin"]
  },
  {
    slug: "android-crash-reduction",
    title: "How I Reduced Crash Rate by 42% in Production",
    excerpt: "Practical strategies for crash monitoring, root cause analysis, and systematic crash reduction.",
    date: "2024-07-03",
    readTime: "7 min read",
    tags: ["Performance", "Crash Reduction", "Testing"]
  }
];

export default function BlogPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Blog</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Writing on Android
            </h1>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Technical deep dives, best practices, and lessons from building production Android apps.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-6">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.06}>
              <Link href={`/blog/${post.slug}`}>
                <article className="group rounded-3xl border border-border bg-card p-6 transition hover:border-primary/50">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <h2 className="mt-3 text-xl font-semibold group-hover:text-primary">
                    {post.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/10 px-2.5 py-1 text-xs text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                    Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
