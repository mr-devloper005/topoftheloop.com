"use client"

import { useState } from "react"
import Link from "next/link"
import { Headphones, Mail, MessageCircle, Send } from "lucide-react"
import { PdfMarketingShell } from "@/components/pdf-profile/pdf-marketing-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { SITE_CONFIG } from "@/lib/site-config"

const lanes = [
  {
    title: "Product & PDF export",
    body: "Questions about templates, section order, or how to get a clean print file—this is the fastest route.",
    icon: MessageCircle,
  },
  {
    title: "Accounts & access",
    body: "Sign-in hiccups, local session questions, and anything that blocks you from finishing a profile.",
    icon: Headphones,
  },
  {
    title: "Partnerships",
    body: "Licensing, team rollouts, or custom PDF branding at scale—we will point you to the right conversation.",
    icon: Mail,
  },
]

export function PdfProfileContactContent() {
  const { toast } = useToast()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [topic, setTopic] = useState("")
  const [message, setMessage] = useState("")

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({ title: "Add a bit more detail", description: "Name, email, and a message help us respond." })
      return
    }
    toast({
      title: "Message received",
      description: "Thanks for reaching out. In a real deployment this would be sent to your support channel.",
    })
    setName("")
    setEmail("")
    setTopic("")
    setMessage("")
  }

  return (
    <PdfMarketingShell
      title="Contact & plans"
      subtitle="We will meet you where you are in the PDF workflow"
      description="Whether you are solo or rolling this out to a team, share what you are trying to ship. We read every note and respond with a concrete next step."
      eyebrow="Contact"
      actions={
        <Button
          asChild
          className="rounded-full bg-[#b8e060] px-6 font-semibold text-[#0f1f1a] hover:bg-[#a4cc52]"
        >
          <Link href="/help">Read the help center</Link>
        </Button>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-4">
          {lanes.map((lane) => (
            <div
              key={lane.title}
              className="rounded-2xl border border-[#e6dfd2] bg-white p-5 shadow-sm sm:p-6"
            >
              <lane.icon className="h-5 w-5 text-[#1a5c45]" />
              <h2 className="mt-3 text-lg font-semibold text-[#0f2f24]">{lane.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#5c5247]">{lane.body}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-[#e6dfd2] bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-[#0f2f24]">Send a message</h2>
          <p className="mt-1 text-sm text-[#5c5247]">Tell us about your use case and what a great outcome looks like.</p>
          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <div>
              <label className="mb-1 block text-xs font-medium text-[#1a5c45]">Name</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 border-[#c8c2b2] text-slate-900"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-[#1a5c45]">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 border-[#c8c2b2] text-slate-900"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-[#1a5c45]">Topic (optional)</label>
              <Input
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="h-12 border-[#c8c2b2] text-slate-900"
                placeholder="e.g. team rollout, custom template, export quality"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-[#1a5c45]">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[160px] w-full rounded-xl border border-[#c8c2b2] bg-white px-4 py-3 text-sm text-slate-900"
                placeholder="Context, timeline, and what you need from us."
              />
            </div>
            <Button
              type="submit"
              className="h-12 rounded-full bg-[#1a5c45] text-base font-semibold text-white hover:bg-[#144a38]"
            >
              <Send className="mr-2 h-4 w-4" />
              Send message
            </Button>
          </form>
          <p className="mt-4 text-center text-xs text-[#7a7065]">
            You are messaging {SITE_CONFIG.name}. This demo shows the UI only—no email is sent from the browser.
          </p>
        </div>
      </div>
    </PdfMarketingShell>
  )
}
