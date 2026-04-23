import { Footer } from "@/components/shared/footer"
import { NavbarShell } from "@/components/shared/navbar-shell"
import { PdfProfileLoginPageContent } from "@/overrides/pdf-profile-login-form"

export const LOGIN_PAGE_OVERRIDE_ENABLED = true

export function LoginPageOverride() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavbarShell />
      <div className="flex flex-1 flex-col">
        <PdfProfileLoginPageContent />
      </div>
      <Footer />
    </div>
  )
}
