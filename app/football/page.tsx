import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { SportHeroSection } from "@/components/sport-hero-section"
import { FixturesWidget } from "@/components/fixtures-widget"
import { StandingsWidget } from "@/components/standings-widget"
import { SquadGrid } from "@/components/squad-grid"
import { StaffGrid } from "@/components/staff-grid"
import { SocialMediaPosts } from "@/components/social-media-posts"
import { SportNewsSection } from "@/components/sport-news-section"
import { footballSquad, footballStaff, footballFixtures, allNews } from "@/lib/mock-data"

export default function FootballPage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Football", href: "/football" },
  ]

  const footballNews = allNews.filter((article) => article.category === "football").slice(0, 4)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Breadcrumbs items={breadcrumbItems} />

        <SportHeroSection
          title="Football"
          subtitle="L'âme de l'Espérance Sportive de Tunis"
          description="32 titres de champion, 4 Ligues des Champions CAF, une histoire légendaire qui continue de s'écrire."
          image="/est-victory.png"
          color="est-rouge"
        />

        <div className="container mx-auto px-4 py-12 space-y-16">
          {/* Fixtures and Standings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FixturesWidget fixtures={footballFixtures} sport="Football" />
            <StandingsWidget />
          </div>

          {/* Latest News */}
          <SportNewsSection title="Actualités Football" articles={footballNews} sport="football" />

          {/* Squad */}
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="font-heading text-3xl font-bold">Effectif 2024-2025</h2>
              <p className="text-muted-foreground">L'équipe première de football</p>
            </div>
            <SquadGrid players={footballSquad} />
          </section>


          {/* Staff */}
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="font-heading text-3xl font-bold">Staff Technique</h2>
              <p className="text-muted-foreground">Encadrement de l'équipe première</p>
            </div>
            <StaffGrid staff={footballStaff} />
          </section>


        </div>
        <SocialMediaPosts />

      </main>
      <Footer />
    </div>
  )
}
