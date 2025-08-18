import type { Metadata } from "next"
import { EnhancedPalmares } from "@/components/enhanced-palmares"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Tous les Trophées - EST",
  description: "Palmarès complet de l'Espérance Sportive de Tunis",
}

export default function TousLesTropheesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Palmarès", href: "/palmares/tous" },
          ]}
        />

        <div className="space-y-6">
          <div className="text-center space-y-4">
            <h1 className="font-heading text-4xl font-bold bg-gradient-to-r from-est-rouge to-est-jaune bg-clip-text text-transparent">
              Palmarès Complet
            </h1>
            <p className="text-muted-foreground text-lg">
              Plus d'un siècle de succès et de trophées remportés par l'EST
            </p>
          </div>

          <EnhancedPalmares />
        </div>
      </div>
    </div>
  )
}
