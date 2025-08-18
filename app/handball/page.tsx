import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { SportHeroSection } from "@/components/sport-hero-section"
import { SquadGrid } from "@/components/squad-grid"
import { TrophiesGrid } from "@/components/trophies-grid"
import { SportNewsSection } from "@/components/sport-news-section"
import { handballSquad, handballTrophies, allNews } from "@/lib/mock-data"

export default function HandballPage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Handball", href: "/handball" },
  ]

  const handballNews = allNews.filter((article) => article.category === "handball").slice(0, 4)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Breadcrumbs items={breadcrumbItems} />

        <SportHeroSection
          title="Handball"
          subtitle="Force et détermination"
          description="Une section féminine de haut niveau qui porte fièrement les couleurs de l'EST sur les parquets."
          image="/est-women-handball-celebration.png"
          color="green-600"
        />

        <div className="container mx-auto px-4 py-12 space-y-16">
          {/* Latest News */}
          <SportNewsSection title="Actualités Handball" articles={handballNews} sport="handball" />

          {/* Squad */}
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="font-heading text-3xl font-bold">Effectif 2024-2025</h2>
              <p className="text-muted-foreground">L'équipe première féminine de handball</p>
            </div>
            <SquadGrid players={handballSquad} />
          </section>

          {/* Trophies */}
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="font-heading text-3xl font-bold">Palmarès Handball</h2>
              <p className="text-muted-foreground">Les succès de la section handball</p>
            </div>
            <TrophiesGrid trophies={handballTrophies} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
