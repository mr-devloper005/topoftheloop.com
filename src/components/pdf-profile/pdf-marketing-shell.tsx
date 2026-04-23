import type { ReactNode } from "react"
import { NavbarShell } from "@/components/shared/navbar-shell"
import { Footer } from "@/components/shared/footer"

export function PdfMarketingShell({
  title,
  subtitle,
  description,
  actions,
  children,
  eyebrow = "PDF Profile",
}: {
  title: string
  subtitle?: string
  description?: string
  actions?: ReactNode
  children: ReactNode
  eyebrow?: string
}) {
  return (
    <div className="min-h-screen bg-[#f4f0e8] text-[#1a1814]">
      <NavbarShell />
      <div className="relative overflow-hidden bg-[#0f2f24] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 15% 20%, rgba(184, 224, 96, 0.12), transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b8e060]">{eyebrow}</p>
          ) : null}
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
          {subtitle ? <p className="mt-2 text-lg text-white/85 sm:text-xl">{subtitle}</p> : null}
          {description ? (
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">{description}</p>
          ) : null}
          {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">{children}</div>
      <Footer />
    </div>
  )
}
