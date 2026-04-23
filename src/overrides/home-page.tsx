import { SchemaJsonLd } from "@/components/seo/schema-jsonld"
import { Footer } from "@/components/shared/footer"
import { NavbarShell } from "@/components/shared/navbar-shell"
import { SITE_CONFIG } from "@/lib/site-config"
import { PdfProfileLanding } from "@/overrides/pdf-profile-landing"

export const HOME_PAGE_OVERRIDE_ENABLED = true

export function HomePageOverride() {
  const base = SITE_CONFIG.baseUrl.replace(/\/$/, "")
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.baseUrl,
      logo: `${base}${SITE_CONFIG.defaultOgImage}`,
      sameAs: [],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.baseUrl,
      potentialAction: {
        "@type": "SearchAction",
        target: `${base}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-[#0f2f24] text-foreground">
      <NavbarShell />
      <SchemaJsonLd data={schemaData} />
      <PdfProfileLanding />
      <Footer />
    </div>
  )
}
