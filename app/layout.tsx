import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import { StructuredDataScript } from "@/components/structured-data"
import { generateSportsTeamStructuredData } from "@/lib/structured-data"
import { ThemeProvider } from "next-themes"
import { TranslationProvider } from "@/lib/i18n"

// Use the locally bundled Geist Sans font to avoid network requests during
// build. This ensures the application can compile in environments without
// external font access.

export const metadata: Metadata = {
  title: "Espérance Sportive de Tunis - Site Officiel",
  description:
    "Site officiel de l'Espérance Sportive de Tunis - Club centenaire, actualités, matchs, palmarès et histoire du club.",
  generator: "Next.js",
  keywords: "EST, Espérance Sportive de Tunis, football, sport, Tunisie, club",
  authors: [{ name: "Espérance Sportive de Tunis" }],
  creator: "Espérance Sportive de Tunis",
  publisher: "Espérance Sportive de Tunis",
  robots: "index, follow",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://est.org.tn",
    languages: {
      fr: process.env.NEXT_PUBLIC_SITE_URL || "https://est.org.tn",
      ar: `${process.env.NEXT_PUBLIC_SITE_URL || "https://est.org.tn"}?lang=ar`,
      en: `${process.env.NEXT_PUBLIC_SITE_URL || "https://est.org.tn"}?lang=en`,
    },
    types: {
      "application/rss+xml": "/rss",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_TN",
    alternateLocale: ["ar_TN", "en_US"],
    siteName: "Espérance Sportive de Tunis",
    title: "Espérance Sportive de Tunis - Site Officiel",
    description:
      "Site officiel de l'Espérance Sportive de Tunis - Club centenaire, actualités, matchs, palmarès et histoire du club.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://est.org.tn",
    images: [
      {
        url: "/generic-initials-logo.png",
        width: 1200,
        height: 630,
        alt: "Espérance Sportive de Tunis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ESTunis",
    creator: "@ESTunis",
    title: "Espérance Sportive de Tunis - Site Officiel",
    description:
      "Site officiel de l'Espérance Sportive de Tunis - Club centenaire, actualités, matchs, palmarès et histoire du club.",
    images: ["/generic-initials-logo.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "msapplication-TileColor": "#E31E24",
    "theme-color": "#E31E24",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={GeistSans.variable} suppressHydrationWarning>
      <head>
        <StructuredDataScript data={generateSportsTeamStructuredData()} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <TranslationProvider>{children}</TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
