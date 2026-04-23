import Link from "next/link"
import { FileText, Github, Linkedin, Twitter } from "lucide-react"
import { SITE_CONFIG } from "@/lib/site-config"

export const FOOTER_OVERRIDE_ENABLED = true

const resources = [
  { name: "PDF templates", href: "/pdf" },
  { name: "Help center", href: "/help" },
  { name: "Contact", href: "/contact" },
  { name: "Status", href: "/status" },
]

const company = [
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Developers", href: "/developers" },
]

const legal = [
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
  { name: "Cookies", href: "/cookies" },
]

const social = [
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
]

export function FooterOverride() {
  return (
    <footer className="border-t border-[#e6dfd2] bg-[#f4f0e8] text-[#1a1814]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#d4cbb8] bg-white p-1">
                <img src="/favicon.png?v=20260422" alt="" className="h-8 w-8 object-contain" width="32" height="32" />
              </div>
              <span className="text-lg font-bold">{SITE_CONFIG.name}</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[#5c5247]">{SITE_CONFIG.description}</p>
            <div className="mt-4 flex gap-2">
              {social.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d4cbb8] bg-white text-[#1a5c45] transition-colors hover:bg-[#eef4e0]"
                >
                  <s.icon className="h-4 w-4" />
                  <span className="sr-only">{s.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5c5247]">Product</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {resources.map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-[#1a1814] hover:text-[#1a5c45]">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5c5247]">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {company.map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-[#1a1814] hover:text-[#1a5c45]">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5c5247]">Legal</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {legal.map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-[#1a1814] hover:text-[#1a5c45]">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-center gap-1.5 text-sm font-medium text-[#1a5c45]">
              <FileText className="h-4 w-4" />
              PDF Profile platform
            </p>
          </div>
        </div>
        <p className="mt-10 border-t border-[#e6dfd2] pt-8 text-center text-xs text-[#7a7065]">
          © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
