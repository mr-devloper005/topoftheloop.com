"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FileText, Loader2, Lock, Mail, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/lib/auth-context"
import { useToast } from "@/components/ui/use-toast"

export function PdfProfileRegisterForm() {
  const { signup, isLoading } = useAuth()
  const { toast } = useToast()
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !password) {
      toast({ title: "Missing fields", description: "Please fill in name, email, and password." })
      return
    }
    await signup(name.trim(), email.trim(), password)
    toast({ title: "Account created", description: "You are signed in. Your session is saved on this device." })
    router.push("/pdf")
    router.refresh()
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4">
      <div>
        <label className="mb-1.5 block text-xs font-medium text-[#1a5c45]">Full name</label>
        <div className="relative">
          <User className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            className="h-12 border-[#c8c2b2] pl-9 text-slate-900"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoComplete="name"
          />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-medium text-[#1a5c45]">Email</label>
        <div className="relative">
          <Mail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            type="email"
            className="h-12 border-[#c8c2b2] pl-9 text-slate-900"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-medium text-[#1a5c45]">Password</label>
        <div className="relative">
          <Lock className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            type="password"
            className="h-12 border-[#c8c2b2] pl-9 text-slate-900"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            autoComplete="new-password"
          />
        </div>
      </div>
      <Button
        type="submit"
        disabled={isLoading}
        className="h-12 rounded-full bg-[#1a5c45] text-base font-semibold text-white hover:bg-[#144a38]"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating…
          </>
        ) : (
          "Create account"
        )}
      </Button>
    </form>
  )
}

export function PdfProfileRegisterPageContent() {
  return (
    <div className="w-full flex-1 bg-[#f4f0e8] text-[#1a1814]">
      <div className="grid min-h-[min(100dvh,880px)] lg:min-h-[560px] lg:grid-cols-2">
        <div className="relative flex flex-col justify-center bg-[#0f2f24] px-6 py-14 text-white sm:px-10 lg:px-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse 60% 40% at 20% 30%, rgba(200, 230, 60, 0.2), transparent 50%)",
            }}
          />
          <div className="relative z-10">
            <FileText className="h-10 w-10 text-[#b8e060]" />
            <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">Create your PDF workspace</h1>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
              One account to manage templates, build professional PDF profiles, and export with consistent formatting.
              Your session is stored in this browser after sign-up.
            </p>
            <ul className="mt-8 space-y-2 text-sm text-white/80">
              <li>· Template-driven layouts, ready to customize</li>
              <li>· Export to polished PDFs when you are done</li>
              <li>· Same look as the public site: calm and focused</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 py-14 sm:px-6">
          <div className="w-full max-w-md rounded-3xl border border-[#e6dfd2] bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a5c45]">Get started</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">Register</h2>
            <p className="mt-1 text-sm text-slate-600">Create an account to save and manage your PDF profiles.</p>
            <PdfProfileRegisterForm />
            <p className="mt-6 text-sm text-slate-600">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-[#1a5c45] hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
