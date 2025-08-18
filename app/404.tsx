import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4 text-center space-y-8">
        <div className="space-y-4">
          <div className="text-9xl font-bold text-est-rouge/20">404</div>
          <h1 className="text-4xl font-bold text-est-rouge">Page non trouvée</h1>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-est-rouge hover:bg-est-rouge/90">
            <Link href="/">
              <Home className="h-5 w-5 mr-2" />
              Retour à l'accueil
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-est-rouge text-est-rouge hover:bg-est-rouge hover:text-white bg-transparent"
          >
            <Link href="/actualites">
              <Search className="h-5 w-5 mr-2" />
              Voir les actualités
            </Link>
          </Button>
        </div>

        <div className="pt-8">
          <p className="text-sm text-muted-foreground">
            Vous pouvez également utiliser la navigation ci-dessus pour trouver ce que vous cherchez.
          </p>
        </div>
      </div>
    </div>
  )
}
