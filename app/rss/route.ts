import { NextResponse } from "next/server"
import { allNews } from "@/lib/mock-data"

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://est.org.tn"

  const rssItems = allNews
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 20)
    .map((article) => {
      return `
        <item>
          <title><![CDATA[${article.title}]]></title>
          <description><![CDATA[${article.excerpt}]]></description>
          <link>${baseUrl}/actualites/${article.id}</link>
          <guid isPermaLink="true">${baseUrl}/actualites/${article.id}</guid>
          <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
          <category>${article.category}</category>
          <author>${article.author}</author>
          ${article.image ? `<enclosure url="${baseUrl}${article.image}" type="image/jpeg" />` : ""}
        </item>
      `
    })
    .join("")

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>Espérance Sportive de Tunis - Actualités</title>
        <description>Les dernières actualités de l'Espérance Sportive de Tunis</description>
        <link>${baseUrl}</link>
        <language>fr-TN</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="${baseUrl}/rss" rel="self" type="application/rss+xml" />
        <image>
          <url>${baseUrl}/generic-initials-logo.png</url>
          <title>Espérance Sportive de Tunis</title>
          <link>${baseUrl}</link>
        </image>
        ${rssItems}
      </channel>
    </rss>`

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}
