import { Footer } from "@/components/shared/footer"
import { NavbarShell } from "@/components/shared/navbar-shell"
import { PdfProfileRegisterPageContent } from "@/components/auth/pdf-profile-register-form"

export const REGISTER_PAGE_OVERRIDE_ENABLED = true

export function RegisterPageOverride() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavbarShell />
      <div className="flex flex-1 flex-col">
        <PdfProfileRegisterPageContent />
      </div>
      <Footer />
    </div>
  )
}
