import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Moe-Kyaw-Aung</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Senior Android Developer building fast, polished Android products with clean architecture and product-minded engineering.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/case-studies" className="text-sm text-muted-foreground hover:text-foreground">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-sm text-muted-foreground hover:text-foreground">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-sm text-muted-foreground hover:text-foreground">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">Connect</h4>
            <div className="mt-4 flex gap-4">
              <Link href="https://github.com/moe-kyaw-aung" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com/in/moe-kyaw-aung" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com/moekyaw" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="mailto:moe.kyaw.aung@example.com" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Moe-Kyaw-Aung. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
