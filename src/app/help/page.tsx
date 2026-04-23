import Link from "next/link"
import { BookOpen, Download, HelpCircle, Shield, Sparkles } from "lucide-react"
import { PdfMarketingShell } from "@/components/pdf-profile/pdf-marketing-shell"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { mockFaqs } from "@/data/mock-data"

const guides = [
  {
    title: "Get started in minutes",
    description: "Create an account, pick a template, and fill in your sections. We save your work in the browser so you can return and export anytime.",
    icon: Sparkles,
  },
  {
    title: "PDF export & printing",
    description: "When your content looks right, export a print-ready PDF. We optimize margins and heading hierarchy for standard paper sizes.",
    icon: Download,
  },
  {
    title: "Privacy & your data",
    description: "Sessions are kept local to this device for the demo experience. For production, align exports with your own retention and compliance policies.",
    icon: Shield,
  },
  {
    title: "Troubleshooting",
    description: "If something does not look right, try a hard refresh, clear the session and sign in again, or message us with the page you are on.",
    icon: HelpCircle,
  },
]

const quickLinks = [
  { label: "PDF library", href: "/pdf" },
  { label: "Create a PDF profile", href: "/create/pdf" },
  { label: "Account & login", href: "/login" },
  { label: "Contact the team", href: "/contact" },
]

export default function HelpPage() {
  return (
    <PdfMarketingShell
      title="Help & documentation"
      subtitle="Everything you need to ship a professional PDF profile"
      description="Practical answers about templates, export, and account access—framed for the way this site is built, not a generic help desk."
      eyebrow="Support"
      actions={
        <Button
          asChild
          className="rounded-full bg-[#b8e060] px-6 font-semibold text-[#0f1f1a] hover:bg-[#a4cc52]"
        >
          <Link href="/contact">Contact support</Link>
        </Button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {guides.map((g) => (
          <Card
            key={g.title}
            className="border-[#e6dfd2] bg-white shadow-sm transition-transform hover:-translate-y-0.5"
          >
            <CardContent className="p-6 sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0f2f24] text-[#b8e060]">
                <g.icon className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-[#0f2f24]">{g.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#5c5247]">{g.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="border-[#d4cbb8] bg-gradient-to-b from-white to-[#f4f0e8] shadow-sm">
          <CardContent className="p-6 sm:p-8">
            <div className="flex items-center gap-2 text-[#0f2f24]">
              <BookOpen className="h-5 w-5" />
              <h3 className="text-lg font-semibold">Quick links</h3>
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-medium text-[#1a5c45] hover:underline">
                    {l.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-[#e6dfd2] bg-white shadow-sm">
          <CardContent className="p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-[#0f2f24]">Frequently asked questions</h3>
            <p className="mt-1 text-sm text-[#5c5247]">Select a question to read the full answer.</p>
            <Accordion type="single" collapsible className="mt-4 w-full">
              {mockFaqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border-[#e6dfd2] data-[state=open]:border-b"
                >
                  <AccordionTrigger className="text-left text-[#0f2f24] hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-6 text-[#5c5247]">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </PdfMarketingShell>
  )
}
