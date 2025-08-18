import type { Metadata } from "next"
import { Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArticleCard } from "@/components/article-card"
import { NewsFilters } from "@/components/news-filters"
import { NewsPagination } from "@/components/news-pagination"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { articles } from "@/lib/mock-data"

export const metadata: Metadata = {
  title: "Toutes les Actualités - EST",
  description: "Toutes les actualités de l'Espérance Sportive de Tunis",
}

export default function ToutesActualitesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Actualités", href: "/actualites" },
            { label: "Toutes", href: "/actualites/toutes" },
          ]}
        />

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="font-heading text-4xl font-bold text-est-rouge">Toutes les Actualités</h1>
              <p className="text-muted-foreground mt-2">Retrouvez toute l'actualité de l'EST</p>
            </div>

            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Rechercher un article..." className="pl-10 w-64" />
              </div>
              <Button
                variant="outline"
                className="border-est-rouge text-est-rouge hover:bg-est-rouge hover:text-white bg-transparent"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filtres
              </Button>
            </div>
          </div>

          <NewsFilters />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          <NewsPagination currentPage={1} totalPages={5} />
        </div>
      </div>
    </div>
  )
}
