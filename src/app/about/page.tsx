import Link from "next/link"
import { FileText, Heart, Target } from "lucide-react"
import { PdfMarketingShell } from "@/components/pdf-profile/pdf-marketing-shell"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SITE_CONFIG } from "@/lib/site-config"

const values = [
  {
    title: "Clarity over noise",
    description: "We built one workflow around professional PDFs—so you are not hunting through unrelated feeds or legacy directory tools.",
    icon: Target,
  },
  {
    title: "Made for real work",
    description: "Hiring packets, client one-pagers, and credential summaries deserve consistent typography and structure without a design degree.",
    icon: FileText,
  },
  {
    title: "People first",
    description: "Your content stays under your control. Export when you are ready, update when things change, and keep a single source of truth.",
    icon: Heart,
  },
]

export default function AboutPage() {
  return (
    <PdfMarketingShell
      title={`Why ${SITE_CONFIG.name} exists`}
      subtitle="Professional PDF profiles without the product sprawl"
      description={`We focus on one job: help you build and share polished, print-ready PDF profiles. ${SITE_CONFIG.name} is designed for people who outgrew scattered tools but do not need another full design suite.`}
      actions={
        <>
          <Button
            asChild
            className="rounded-full bg-[#b8e060] px-6 font-semibold text-[#0f1f1a] hover:bg-[#a4cc52]"
          >
            <Link href="/pdf">Browse PDF library</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/40 bg-white/5 px-6 text-white hover:bg-white/10"
          >
            <Link href="/contact">Talk to us</Link>
          </Button>
        </>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="overflow-hidden border-[#e6dfd2] bg-white shadow-sm">
          <CardContent className="space-y-5 p-6 sm:p-8">
            <Badge className="border-[#1a5c45]/20 bg-[#1a5c45]/8 text-[#0f2f24]">Our story</Badge>
            <h2 className="text-2xl font-bold tracking-tight text-[#0f2f24] sm:text-3xl">
              One calm surface for a document that represents you
            </h2>
            <p className="text-sm leading-7 text-[#5c5247] sm:text-base">
              We saw teams juggling invoices in one app, CVs in another, and “brand” PDFs in yet another tool. That
              fragmentation is slow and easy to get wrong. {SITE_CONFIG.name} brings structure, templates, and export
              into a single place—so the PDF you hand someone matches the care you put into the content.
            </p>
          </CardContent>
        </Card>
        <div className="space-y-4">
          {values.map((v) => (
            <Card
              key={v.title}
              className="border-[#e6dfd2] bg-white shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <CardContent className="flex gap-4 p-5 sm:p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0f2f24] text-[#b8e060]">
                  <v.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0f2f24]">{v.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5c5247]">{v.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PdfMarketingShell>
  )
}
