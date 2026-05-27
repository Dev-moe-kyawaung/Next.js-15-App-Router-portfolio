"use client";

import { Reveal } from "@/components/motion/reveal";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { submitContact } from "@/lib/actions/contact";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<{ ok?: boolean; message?: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setStatus(null);
    const result = await submitContact(formData);
    setStatus(result);
    setIsSubmitting(false);
  }

  return (
    <main className="bg-background text-foreground">
      <section className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Let's work together
            </h1>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Available for senior Android development roles, consulting, and contract work.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-border bg-card p-8">
              <h2 className="text-lg font-semibold">Get in touch</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                I'm interested in senior Android developer roles, architecture consulting,
                and long-term contract work. Message me about your project.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>moe.kyaw.aung@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+66 XX XXX XXXX</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Bangkok, Thailand (Open to remote)</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-3xl border border-border bg-card p-8">
              <h2 className="text-lg font-semibold">Send a message</h2>

              <form action={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>

                {status && (
                  <p className={`text-sm ${status.ok ? "text-success" : "text-destructive"}`}>
                    {status.message}
                  </p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
