"use client"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArticleCard } from "@/components/article-card"
import { NewsFilters } from "@/components/news-filters"
import { NewsPagination } from "@/components/news-pagination"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { getArticlesByCategory } from "@/lib/mock-data"

export default function ActualitesPage() {
  const [currentCategory, setCurrentCategory] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(1)

  const { articles, totalPages, totalArticles } = getArticlesByCategory(currentCategory, currentPage, 6)

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category)
    setCurrentPage(1) // Reset to first page when changing category
  }

  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Actualités", href: "/actualites" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="space-y-8">
          {/* Page header */}
          <div className="text-center space-y-4">
            <h1 className="font-heading text-4xl font-bold">Actualités</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Suivez toute l'actualité de l'Espérance Sportive de Tunis : football, volleyball, handball et vie du club
            </p>
          </div>

          {/* Filters */}
          <NewsFilters
            currentCategory={currentCategory}
            onCategoryChange={handleCategoryChange}
            totalArticles={totalArticles}
          />

          {/* Articles grid */}
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">Aucun article trouvé pour cette catégorie.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <NewsPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
