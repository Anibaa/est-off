import { HeroSection } from "@/components/hero-section"
import { NextMatchWidget } from "@/components/next-match-widget"
import { MiniStandingsWidget } from "@/components/mini-standings-widget"
import { LatestNewsSection } from "@/components/latest-news-section"
import { SocialMediaPosts } from "@/components/social-media-posts"
import { PalmaresPreview } from "@/components/palmares-preview"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <div className="container mx-auto px-4 py-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <NextMatchWidget />
            <MiniStandingsWidget />
          </div>
          <LatestNewsSection />
          <SocialMediaPosts />
          <PalmaresPreview />
          <NewsletterSignup />
        </div>
      </main>
      <Footer />
    </div>
  )
}
