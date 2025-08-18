import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArticleCard } from "@/components/article-card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Tag, Share2, ArrowLeft } from "lucide-react"
import { getArticleById, getRelatedArticles } from "@/lib/mock-data"
import { generateNewsArticleMetadata, generateNewsArticleStructuredData } from "@/lib/structured-data"
import { StructuredDataScript } from "@/components/structured-data"
import Link from "next/link"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = getArticleById(params.slug)

  if (!article) {
    return {
      title: "Article non trouvé - Espérance Sportive de Tunis",
      description: "L'article demandé n'existe pas.",
    }
  }

  return generateNewsArticleMetadata(article)
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleById(params.slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(article.id, article.category, 3)

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

  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Actualités", href: "/actualites" },
    { label: article.title, href: `/actualites/${article.id}` },
  ]

  return (
    <div className="min-h-screen bg-background">
      <StructuredDataScript data={generateNewsArticleStructuredData(article)} />

      <Header />
      <main className="container mx-auto px-4 py-8" id="main-content">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Back button */}
          <Link href="/actualites">
            <Button variant="ghost" className="gap-2 text-est-rouge hover:bg-est-rouge/10">
              <ArrowLeft className="h-4 w-4" />
              Retour aux actualités
            </Button>
          </Link>

          {/* Article header */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge className={getCategoryColor(article.category)}>
                {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
              </Badge>

              <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight">{article.title}</h1>

              <p className="text-xl text-muted-foreground leading-relaxed">{article.excerpt}</p>
            </div>

            {/* Article meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b pb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={article.publishedAt}>
                  {new Date(article.publishedAt).toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>

              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>

              <Button variant="ghost" size="sm" className="gap-2 text-est-rouge hover:bg-est-rouge/10">
                <Share2 className="h-4 w-4" />
                Partager
              </Button>
            </div>
          </div>

          {/* Featured image */}
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <img
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Article content */}
          <article className="prose prose-lg max-w-none">
            <div
              dangerouslySetInnerHTML={{ __html: article.content }}
              className="space-y-4 text-foreground leading-relaxed"
            />
          </article>

          {/* Tags */}
          {article.tags.length > 0 && (
            <div className="flex items-center gap-3 pt-6 border-t">
              <Tag className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Related articles */}
          {relatedArticles.length > 0 && (
            <section className="space-y-6 pt-12 border-t">
              <h2 className="font-serif text-2xl font-bold">Articles similaires</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <ArticleCard key={relatedArticle.id} article={relatedArticle} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
