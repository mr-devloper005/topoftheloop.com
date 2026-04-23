"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileText, LogOut, Menu, Search, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/lib/auth-context"
import { SITE_CONFIG } from "@/lib/site-config"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/pdf", label: "Templates" },
  { href: "/about", label: "Why PDF Profile" },
  { href: "/help", label: "Help" },
  { href: "/contact", label: "Plans & pricing" },
]

function PdfProfileUserMenu() {
  const { user, logout } = useAuth()
  if (!user) return null
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          className="h-9 gap-1 rounded-full border border-white/30 px-1.5 text-white hover:bg-white/10"
        >
          <Avatar className="h-7 w-7 border border-white/20">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="bg-white/20 text-white">{user.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="hidden max-w-[7rem] truncate pr-1 text-sm sm:inline">{user.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 border-slate-200">
        <DropdownMenuItem asChild>
          <Link href="/create/pdf" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            New PDF profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/dashboard" className="flex items-center gap-2">
            Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={logout}
          className="text-destructive focus:text-destructive"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function PdfProfileNavbar() {
  const pathname = usePathname()
  const { isAuthenticated } = useAuth()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0f2f24]/95 text-white backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/5 p-1">
            <img src="/favico.png?v=20260422" alt="" className="h-8 w-8 object-contain" width="32" height="32" />
          </div>
          <span className="text-lg font-bold tracking-tight sm:text-xl">{SITE_CONFIG.name}</span>
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-6 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm font-medium transition-colors",
                pathname.startsWith(l.href) && l.href !== "/"
                  ? "text-[#b8e060]"
                  : "text-white/85 hover:text-white"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Button variant="ghost" size="icon" asChild className="text-white/90 hover:bg-white/10">
            <Link href="/search" aria-label="Search">
              <Search className="h-5 w-5" />
            </Link>
          </Button>

          {isAuthenticated ? (
            <div className="pl-1">
              <PdfProfileUserMenu />
            </div>
          ) : (
            <Button
              asChild
              variant="outline"
              className="h-9 gap-1.5 rounded-full border-white/30 bg-white/5 px-3 text-sm font-medium text-white hover:bg-white/10"
            >
              <Link href="/login">
                <User className="h-4 w-4" />
                Login
              </Link>
            </Button>
          )}

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-[#0a2218] px-4 py-4 lg:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/90"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
