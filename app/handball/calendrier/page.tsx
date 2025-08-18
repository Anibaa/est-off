import type { Metadata } from "next"
import { Calendar, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EnhancedFixtures } from "@/components/enhanced-fixtures"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { handballFixtures } from "@/lib/mock-data"

export const metadata: Metadata = {
  title: "Calendrier Handball - EST",
  description: "Calendrier complet des matchs de handball de l'Espérance Sportive de Tunis",
}

export default function HandballCalendrierPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Handball", href: "/handball" },
            { label: "Calendrier", href: "/handball/calendrier" },
          ]}
        />

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="font-heading text-4xl font-bold text-est-rouge">Calendrier Handball</h1>
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

          <EnhancedFixtures fixtures={handballFixtures} sport="Handball" />
        </div>
      </div>
    </div>
  )
}
