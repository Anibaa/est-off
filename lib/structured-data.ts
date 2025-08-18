import { type NewsArticle, type Match, clubInfo, stadiumInfo } from "./mock-data"
import type { Metadata } from "next"

export interface StructuredData {
  "@context": string
  "@type": string
  [key: string]: any
}

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

export function generateDynamicOGImage(config: {
  title: string
  subtitle?: string
  type: "article" | "match" | "general"
  category?: string
  date?: string
  teams?: { home: string; away: string }
}): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://est.org.tn"
  const params = new URLSearchParams()

  params.set("title", config.title)
  if (config.subtitle) params.set("subtitle", config.subtitle)
  params.set("type", config.type)
  if (config.category) params.set("category", config.category)
  if (config.date) params.set("date", config.date)
  if (config.teams) {
    params.set("homeTeam", config.teams.home)
    params.set("awayTeam", config.teams.away)
  }

  return `${baseUrl}/api/og?${params.toString()}`
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
  const dynamicImage = generateDynamicOGImage({
    title: article.title,
    subtitle: article.excerpt,
    type: "article",
    category: article.category,
    date: new Date(article.publishedAt).toLocaleDateString("fr-FR"),
  })

  return generateMetadata({
    title: article.title,
    description: article.excerpt,
    keywords: article.tags,
    image: dynamicImage,
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

  const dynamicImage = generateDynamicOGImage({
    title: `${match.homeTeam} vs ${match.awayTeam}`,
    subtitle: `${match.competition} - ${match.date}`,
    type: "match",
    teams: { home: match.homeTeam, away: match.awayTeam },
  })

  return generateMetadata({
    title,
    description,
    keywords: [match.competition, match.homeTeam, match.awayTeam, "match", "football"],
    image: dynamicImage,
    url: `/matches/${match.id}`,
    type: "article",
  })
}

export function generateSportsTeamStructuredData(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "SportsTeam",
    name: "Espérance Sportive de Tunis",
    alternateName: "EST",
    description: "Club de football tunisien fondé en 1919, le plus titré de Tunisie avec 4 Ligues des Champions CAF.",
    foundingDate: "1919-01-15",
    sport: "Football",
    memberOf: {
      "@type": "SportsOrganization",
      name: "Ligue 1 Tunisienne",
    },
    location: {
      "@type": "Place",
      name: stadiumInfo.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: stadiumInfo.address,
        addressLocality: "Radès",
        addressCountry: "TN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: stadiumInfo.coordinates.lat,
        longitude: stadiumInfo.coordinates.lng,
      },
    },
    url: "https://est.org.tn",
    logo: "https://est.org.tn/generic-initials-logo.png",
    image: "https://est.org.tn/generic-initials-logo.png",
    sameAs: [
      "https://www.facebook.com/ESTunis",
      "https://twitter.com/ESTunis",
      "https://www.instagram.com/estunis",
      "https://www.youtube.com/c/ESTunis",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: clubInfo.phone,
      email: clubInfo.email,
      contactType: "customer service",
    },
  }
}

export function generateSportsEventStructuredData(match: Match): StructuredData {
  const homeTeam = {
    "@type": "SportsTeam",
    name: match.homeTeam,
    logo: match.homeTeamLogo,
  }

  const awayTeam = {
    "@type": "SportsTeam",
    name: match.awayTeam,
    logo: match.awayTeamLogo,
  }

  return {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: `${match.homeTeam} vs ${match.awayTeam}`,
    description: `Match de ${match.competition} entre ${match.homeTeam} et ${match.awayTeam}`,
    startDate: `${match.date}T${match.time}:00+01:00`,
    location: {
      "@type": "Place",
      name: match.venue,
      address: {
        "@type": "PostalAddress",
        addressCountry: "TN",
      },
    },
    competitor: [homeTeam, awayTeam],
    homeTeam: homeTeam,
    awayTeam: awayTeam,
    sport: "Football",
    organizer: {
      "@type": "SportsOrganization",
      name: match.competition,
    },
    ...(match.homeScore !== undefined &&
      match.awayScore !== undefined && {
        result: {
          "@type": "SportsEvent",
          homeTeamScore: match.homeScore,
          awayTeamScore: match.awayScore,
        },
      }),
  }
}

export function generateNewsArticleStructuredData(article: NewsArticle): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Espérance Sportive de Tunis",
      logo: {
        "@type": "ImageObject",
        url: "https://est.org.tn/generic-initials-logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://est.org.tn/actualites/${article.id}`,
    },
    articleSection: article.category,
    keywords: article.tags.join(", "),
    inLanguage: "fr-TN",
  }
}

export function generateBreadcrumbStructuredData(items: Array<{ label: string; href: string }>): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://est.org.tn${item.href}`,
    })),
  }
}

export function generateSportsOrganizationStructuredData(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    name: "Espérance Sportive de Tunis",
    alternateName: ["EST", "Espérance", "Taraji"],
    description:
      "Club omnisports tunisien fondé en 1919, le plus titré de Tunisie avec 4 Ligues des Champions CAF et 32 championnats nationaux.",
    foundingDate: "1919-01-15",
    sport: ["Football", "Volleyball", "Handball"],
    location: {
      "@type": "Place",
      name: stadiumInfo.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: stadiumInfo.address,
        addressLocality: "Radès",
        addressRegion: "Tunis",
        postalCode: "2040",
        addressCountry: "TN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: stadiumInfo.coordinates.lat,
        longitude: stadiumInfo.coordinates.lng,
      },
    },
    url: "https://est.org.tn",
    logo: {
      "@type": "ImageObject",
      url: "https://est.org.tn/generic-initials-logo.png",
      width: 200,
      height: 200,
    },
    image: {
      "@type": "ImageObject",
      url: "https://est.org.tn/generic-initials-logo.png",
      width: 1200,
      height: 630,
    },
    sameAs: [
      "https://www.facebook.com/ESTunis",
      "https://twitter.com/ESTunis",
      "https://www.instagram.com/estunis",
      "https://www.youtube.com/c/ESTunis",
      "https://www.tiktok.com/@estunis",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: clubInfo.phone,
        email: clubInfo.email,
        contactType: "customer service",
        availableLanguage: ["French", "Arabic", "English"],
      },
      {
        "@type": "ContactPoint",
        email: "presse@est.org.tn",
        contactType: "media",
        availableLanguage: ["French", "Arabic", "English"],
      },
    ],
    founder: {
      "@type": "Person",
      name: "Fondateurs de l'EST",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 150,
    },
    award: [
      "4x Ligue des Champions CAF",
      "32x Champion de Tunisie",
      "16x Coupe de Tunisie",
      "8x Supercoupe de Tunisie",
    ],
  }
}

export function generateWebsiteStructuredData(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Espérance Sportive de Tunis",
    alternateName: "EST Official Website",
    url: "https://est.org.tn",
    description: "Site officiel de l'Espérance Sportive de Tunis - Actualités, matchs, classements, histoire du club",
    inLanguage: ["fr-TN", "ar-TN", "en-US"],
    publisher: {
      "@type": "SportsOrganization",
      name: "Espérance Sportive de Tunis",
      logo: "https://est.org.tn/generic-initials-logo.png",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://est.org.tn/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }
}

export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function generateStadiumStructuredData(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "StadiumOrArena",
    name: stadiumInfo.name,
    description: "Stade olympique de 65 000 places, domicile de l'Espérance Sportive de Tunis",
    address: {
      "@type": "PostalAddress",
      streetAddress: stadiumInfo.address,
      addressLocality: "Radès",
      addressRegion: "Tunis",
      postalCode: "2040",
      addressCountry: "TN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: stadiumInfo.coordinates.lat,
      longitude: stadiumInfo.coordinates.lng,
    },
    maximumAttendeeCapacity: stadiumInfo.capacity,
    openingDate: `${stadiumInfo.opened}-01-01`,
    surface: stadiumInfo.surface,
    homeTeam: {
      "@type": "SportsTeam",
      name: "Espérance Sportive de Tunis",
      url: "https://est.org.tn",
    },
    amenityFeature: stadiumInfo.facilities.map((facility) => ({
      "@type": "LocationFeatureSpecification",
      name: facility,
    })),
  }
}
