import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { SportHeroSection } from "@/components/sport-hero-section"
import { SquadGrid } from "@/components/squad-grid"
import { TrophiesGrid } from "@/components/trophies-grid"
import { SportNewsSection } from "@/components/sport-news-section"
import { volleyballSquad, volleyballTrophies, allNews } from "@/lib/mock-data"

export default function VolleyballPage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Volleyball", href: "/volleyball" },
  ]

  const volleyballNews = allNews.filter((article) => article.category === "volleyball").slice(0, 4)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Breadcrumbs items={breadcrumbItems} />

        <SportHeroSection
          title="Volleyball"
          subtitle="Excellence et passion au filet"
          description="Une section en pleine ascension avec des ambitions continentales et des joueurs de talent."
          image="/est-volleyball-celebration.png"
          color="blue-600"
        />

        <div className="container mx-auto px-4 py-12 space-y-16">
          {/* Latest News */}
          <SportNewsSection title="Actualités Volleyball" articles={volleyballNews} sport="volleyball" />

          {/* Squad */}
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="font-heading text-3xl font-bold">Effectif 2024-2025</h2>
              <p className="text-muted-foreground">L'équipe première de volleyball</p>
            </div>
            <SquadGrid players={volleyballSquad} />
          </section>

          {/* Trophies */}
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="font-heading text-3xl font-bold">Palmarès Volleyball</h2>
              <p className="text-muted-foreground">Les succès de la section volleyball</p>
            </div>
            <TrophiesGrid trophies={volleyballTrophies} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
