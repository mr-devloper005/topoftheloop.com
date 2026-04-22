import { PdfProfileContactContent } from "@/overrides/pdf-profile-contact-content"

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

export function ContactPageOverride() {
  return <PdfProfileContactContent />
}
