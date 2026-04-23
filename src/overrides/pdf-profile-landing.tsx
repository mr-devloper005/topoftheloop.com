"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  FileText,
  Search,
  Shield,
  Sparkles,
  Wand2,
} from "lucide-react"
import { ContentImage } from "@/components/shared/content-image"
import { SITE_CONFIG } from "@/lib/site-config"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const heroImage =
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80&auto=format&fit=crop"
const featureLeft =
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format&fit=crop"
const featureRight =
  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80&auto=format&fit=crop"

const partnerNames = ["Cisco", "Adobe", "Slack", "Google", "Spotify"]

const bullets = [
  "Customizable templates",
  "One-click PDF export",
  "Secure data storage",
  "Professional formatting",
]

const mockAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop",
]

export function PdfProfileLanding() {
  const router = useRouter()
  const [q, setQ] = useState("")

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = q.trim()
    if (trimmed) router.push(`/search?q=${encodeURIComponent(trimmed)}`)
    else router.push("/pdf")
  }

  return (
    <main>
      <section className="relative overflow-hidden bg-[#0f2f24] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 20% 20%, rgba(200, 230, 60, 0.12), transparent 50%)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Professional PDF Profiles Created in Minutes
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              Build polished, print-ready PDF profiles and export them when you need them—without wrestling with
              design tools.
            </p>

            <form
              onSubmit={onSearch}
              className="mt-8 flex w-full max-w-xl flex-col gap-2 sm:flex-row sm:items-stretch"
            >
              <div className="relative min-h-[52px] flex-1 rounded-2xl bg-white shadow-sm">
                <Input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search for profile templates"
                  className="h-[52px] rounded-2xl border-0 pr-2 pl-5 text-slate-900 shadow-none focus-visible:ring-0"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-1.5 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-[#1a5c45] text-white hover:bg-[#144a38]"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </form>

            <p className="mt-5 max-w-lg text-sm text-white/70">
              Create at your own pace, anytime, anywhere—share a consistent professional presence with people who
              matter to your work.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {mockAvatars.map((src, i) => (
                  <div
                    key={i}
                    className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-[#0f2f24] ring-2 ring-[#b8e060]/40"
                  >
                    <ContentImage
                      src={src}
                      alt="Community member"
                      fill
                      className="object-cover"
                      sizes="36px"
                    />
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-white/90">+</span>
              <p className="text-sm text-white/80">More than 2,000 professionals joined</p>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-md justify-center lg:max-w-none">
            <div
              className="absolute -right-4 top-8 h-64 w-64 rounded-full bg-[#b8e060]/20 blur-2xl"
              aria-hidden
            />
            <div
              className="absolute -left-6 bottom-0 h-48 w-48 rounded-full border border-[#b8e060]/30"
              aria-hidden
            />
            <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-full border-4 border-[#1a5c45] bg-[#0a221a] shadow-[0_32px_80px_rgba(0,0,0,0.45)]">
              <ContentImage
                src={heroImage}
                alt="Professional working with a laptop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 24rem"
                priority
                intrinsicWidth={800}
                intrinsicHeight={800}
              />
            </div>
            <div className="absolute -right-1 top-12 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[10px] font-bold backdrop-blur">
              PDF
            </div>
            <div className="absolute bottom-20 left-0 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur">
              <FileText className="h-4 w-4" />
            </div>
            <div className="absolute right-2 top-1/3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur">
              <Wand2 className="h-3.5 w-3.5" />
            </div>
            <div className="absolute left-4 top-1/4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f0e8] py-16 text-[#1a1814] sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-lg">
              <ContentImage
                src={featureLeft}
                alt="Template preview and workspace"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 45vw, 320px"
                intrinsicWidth={600}
                intrinsicHeight={800}
              />
            </div>
            <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-3xl shadow-lg sm:mt-12">
              <ContentImage
                src={featureRight}
                alt="PDF document preview"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 45vw, 320px"
                intrinsicWidth={600}
                intrinsicHeight={800}
              />
            </div>
            <div className="col-span-2 -mt-6 flex justify-end sm:-mt-10">
              <div className="rounded-2xl border border-[#d4cbb8] bg-white/90 px-4 py-2 text-right shadow-sm">
                <p className="text-xs text-[#5c5247]">Trusted exports</p>
                <p className="text-lg font-bold text-[#1a5c45]">1.2k+ PDFs this month</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Unlock your potential, anytime, anywhere with{" "}
              <span className="text-[#1a5c45]">{SITE_CONFIG.name}</span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#5c5247] sm:text-base">
              {SITE_CONFIG.name} helps teams and individuals ship consistent PDF profiles: structured sections, crisp
              typography, and a workflow that keeps your content under control.
            </p>
            <ul className="mt-8 space-y-3">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm sm:text-base">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1a5c45]" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="mt-8 rounded-full bg-[#1a5c45] px-8 text-white hover:bg-[#144a38]"
            >
              <Link href="/register">Get started</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-[#e6dfd2] bg-[#f4f0e8] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg font-semibold text-[#1a1814] sm:text-xl">
            We collaborate with <span className="text-[#1a5c45]">350+</span> leading companies and learning partners
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
            {partnerNames.map((name) => (
              <span
                key={name}
                className="text-sm font-bold uppercase tracking-[0.2em] text-[#3d3830]"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0f2f24] py-14 text-center text-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5">
            <Shield className="h-4 w-4" />
          </div>
          <h3 className="text-2xl font-bold">Your profile stays in your control</h3>
          <p className="mt-3 text-sm text-white/70">
            Export a polished PDF, update sections when you need to, and keep a consistent professional story in one
            place.
          </p>
        </div>
      </section>
    </main>
  )
}
