import type { StructuredData } from "@/lib/structured-data"

interface StructuredDataProps {
  data: StructuredData | StructuredData[]
}

export function StructuredDataScript({ data }: StructuredDataProps) {
  const jsonLd = Array.isArray(data) ? data : [data]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd, null, 2),
      }}
    />
  )
}
