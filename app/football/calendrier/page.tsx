import type { Metadata } from "next"
import { Calendar, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EnhancedFixtures } from "@/components/enhanced-fixtures"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { footballFixtures } from "@/lib/mock-data"

export const metadata: Metadata = {
  title: "Calendrier Football - EST",
  description: "Calendrier complet des matchs de football de l'Espérance Sportive de Tunis",
}

export default function FootballCalendrierPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Football", href: "/football" },
            { label: "Calendrier", href: "/football/calendrier" },
          ]}
        />

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="font-heading text-4xl font-bold text-est-rouge">Calendrier Football</h1>
              <p className="text-muted-foreground mt-2">Tous les matchs de la saison 2024-2025</p>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="border-est-rouge text-est-rouge hover:bg-est-rouge hover:text-white bg-transparent"
              >
                <Download className="h-4 w-4 mr-2" />
                Exporter
              </Button>
              <Button className="bg-est-rouge hover:bg-est-rouge/90">
                <Calendar className="h-4 w-4 mr-2" />
                S'abonner au calendrier
              </Button>
            </div>
          </div>

          <EnhancedFixtures fixtures={footballFixtures} sport="Football" />
        </div>
      </div>
    </div>
  )
}
