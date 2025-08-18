import type { Metadata } from "next"
import type { NewsArticle, Match } from "./mock-data"

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: "website" | "article" | "profile"
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
}

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    image = "/generic-initials-logo.png",
    url,
    type = "website",
    publishedTime,
    modifiedTime,
    author,
    section,
  } = config

  const fullTitle = title.includes("EST") ? title : `${title} - Espérance Sportive de Tunis`
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://est.org.tn"
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  const imageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`

  return {
    title: fullTitle,
    description,
    keywords: [...keywords, "EST", "Espérance Sportive de Tunis", "football", "Tunisie"].join(", "),
    authors: [{ name: author || "Espérance Sportive de Tunis" }],
    creator: "Espérance Sportive de Tunis",
    publisher: "Espérance Sportive de Tunis",
    robots: "index, follow",
    alternates: {
      canonical: fullUrl,
      languages: {
        fr: fullUrl,
        ar: `${fullUrl}?lang=ar`,
        en: `${fullUrl}?lang=en`,
      },
    },
    openGraph: {
      type,
      locale: "fr_TN",
      alternateLocale: ["ar_TN", "en_US"],
      siteName: "Espérance Sportive de Tunis",
      title: fullTitle,
      description,
      url: fullUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
      ...(section && { section }),
    },
    twitter: {
      card: "summary_large_image",
      site: "@ESTunis",
      creator: "@ESTunis",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    other: {
      "article:publisher": "https://www.facebook.com/ESTunis",
      "article:author": author || "Espérance Sportive de Tunis",
    },
  }
}

export function generateNewsArticleMetadata(article: NewsArticle): Metadata {
  return generateMetadata({
    title: article.title,
    description: article.excerpt,
    keywords: article.tags,
    image: article.image,
    url: `/actualites/${article.id}`,
    type: "article",
    publishedTime: article.publishedAt,
    author: article.author,
    section: article.category,
  })
}

export function generateMatchMetadata(match: Match): Metadata {
  const title = `${match.homeTeam} vs ${match.awayTeam}`
  const description = `Match ${match.competition} - ${match.date} à ${match.time} au ${match.venue}`

  return generateMetadata({
    title,
    description,
    keywords: [match.competition, match.homeTeam, match.awayTeam, "match", "football"],
    url: `/matches/${match.id}`,
    type: "article",
  })
}
