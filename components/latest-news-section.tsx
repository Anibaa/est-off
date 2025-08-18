import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import { featuredNews } from "@/lib/mock-data"

export function LatestNewsSection() {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "football":
        return "bg-est-rouge text-white"
      case "volleyball":
        return "bg-blue-600 text-white"
      case "handball":
        return "bg-green-600 text-white"
      default:
        return "bg-gray-600 text-white"
    }
  }

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-3xl font-bold">Dernières Actualités</h2>
        <Button
          variant="outline"
          className="border-est-rouge text-est-rouge hover:bg-est-rouge hover:text-white bg-transparent"
        >
          Toutes les actualités
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredNews.map((article) => (
          <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="relative">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <Badge className={`absolute top-3 left-3 ${getCategoryColor(article.category)}`}>
                {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
              </Badge>
            </div>
            <CardContent className="p-4">
              <div className="space-y-3">
                <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-est-rouge transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(article.publishedAt).toLocaleDateString("fr-FR")}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-est-rouge hover:bg-est-rouge/10 p-0">
                    Lire la suite →
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
