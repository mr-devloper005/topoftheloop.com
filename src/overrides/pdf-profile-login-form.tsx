"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FileText, Loader2, Lock, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/lib/auth-context"
import { useToast } from "@/components/ui/use-toast"

export function PdfProfileLoginForm() {
  const { login, isLoading } = useAuth()
  const { toast } = useToast()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !password) {
      toast({ title: "Missing fields", description: "Please enter your email and password." })
      return
    }
    await login(email.trim(), password)
    toast({ title: "Welcome back", description: "You are signed in. Your session is saved on this device." })
    router.push("/pdf")
    router.refresh()
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4">
      <div>
        <label className="mb-1.5 block text-xs font-medium text-[#1a5c45]">Email</label>
        <div className="relative">
          <Mail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 border-[#c8c2b2] pl-9 text-slate-900"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 border-[#c8c2b2] pl-9 text-slate-900"
            placeholder="Your password"
            autoComplete="current-password"
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
            Signing in…
          </>
        ) : (
          "Sign in"
        )}
      </Button>
    </form>
  )
}

export function PdfProfileLoginPageContent() {
  return (
    <div className="w-full flex-1 bg-[#f4f0e8] text-[#1a1814]">
      <div className="grid min-h-[min(100dvh,880px)] lg:min-h-[600px] lg:grid-cols-2">
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
            <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">Sign in to your PDF workspace</h1>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
              Manage templates, exports, and your saved PDF profiles. Your sign-in is stored in this browser so you can
              pick up where you left off.
            </p>
            <ul className="mt-8 space-y-2 text-sm text-white/80">
              <li>· Export and download in one place</li>
              <li>· Secure session on this device (local storage)</li>
              <li>· Same look and feel as the public site</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 py-14 sm:px-6">
          <div className="w-full max-w-md rounded-3xl border border-[#e6dfd2] bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a5c45]">Welcome back</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">Log in</h2>
            <p className="mt-1 text-sm text-slate-600">Use your account to access PDF Profile tools.</p>
            <PdfProfileLoginForm />
            <div className="mt-6 flex items-center justify-between text-sm text-slate-600">
              <Link href="/forgot-password" className="text-[#1a5c45] hover:underline">
                Forgot password?
              </Link>
              <Link href="/register" className="font-medium text-[#1a5c45] hover:underline">
                Create account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
