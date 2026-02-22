import Link from "next/link"
import { Sparkles, Github, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[var(--primary)] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-[var(--foreground)]">
                PowerSkills
              </span>
            </Link>
            <p className="text-sm text-[var(--muted-foreground)]">
              Connecting AI Skills with customers, helping developers monetize their expertise.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@powerskills.store"
                className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/skills"
                  className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  Browse Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/developers"
                  className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  Developers
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border)] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--muted-foreground)]">
            © {new Date().getFullYear()} PowerSkills. All rights reserved.
          </p>
          <p className="text-sm text-[var(--muted-foreground)]">
            Made with ❤️ for AI developers
          </p>
        </div>
      </div>
    </footer>
  )
}
