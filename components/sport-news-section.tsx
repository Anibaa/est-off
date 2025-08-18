import { ArticleCard } from "@/components/article-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { NewsArticle } from "@/lib/mock-data"

interface SportNewsSectionProps {
  title: string
  articles: NewsArticle[]
  sport: string
}

export function SportNewsSection({ title, articles, sport }: SportNewsSectionProps) {
  if (articles.length === 0) {
    return (
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-3xl font-bold">{title}</h2>
        </div>
        <div className="text-center py-8">
          <p className="text-muted-foreground">Aucune actualité disponible pour le moment.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-3xl font-bold">{title}</h2>
        <Button
          variant="outline"
          className="border-est-rouge text-est-rouge hover:bg-est-rouge hover:text-white bg-transparent"
        >
          Toutes les actualités {sport}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  )
}
