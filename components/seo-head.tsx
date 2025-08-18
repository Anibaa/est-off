import Head from "next/head"
import type { StructuredData } from "@/lib/structured-data"

interface SEOHeadProps {
  title?: string
  description?: string
  image?: string
  url?: string
  structuredData?: StructuredData | StructuredData[]
  noIndex?: boolean
}

export function SEOHead({ title, description, image, url, structuredData, noIndex = false }: SEOHeadProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://est.org.tn"
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${baseUrl}${image}`
    : `${baseUrl}/generic-initials-logo.png`

  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Hreflang */}
      <link rel="alternate" hrefLang="fr" href={fullUrl} />
      <link rel="alternate" hrefLang="ar" href={`${fullUrl}?lang=ar`} />
      <link rel="alternate" hrefLang="en" href={`${fullUrl}?lang=en`} />
      <link rel="alternate" hrefLang="x-default" href={fullUrl} />

      {/* Open Graph */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Espérance Sportive de Tunis" />
      <meta property="og:locale" content="fr_TN" />
      <meta property="og:locale:alternate" content="ar_TN" />
      <meta property="og:locale:alternate" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ESTunis" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(Array.isArray(structuredData) ? structuredData : [structuredData], null, 2),
          }}
        />
      )}
    </Head>
  )
}
