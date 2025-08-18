"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface NewsFiltersProps {
  currentCategory: string
  onCategoryChange: (category: string) => void
  totalArticles: number
}

const categories = [
  { id: "all", label: "Tous les sports", icon: "🏆" },
  { id: "football", label: "Football", icon: "⚽" },
  { id: "volleyball", label: "Volleyball", icon: "🏐" },
  { id: "handball", label: "Handball", icon: "🤾" },
  { id: "general", label: "Vie du club", icon: "🏛️" },
]

export function NewsFilters({ currentCategory, onCategoryChange, totalArticles }: NewsFiltersProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-lg">Filtrer par sport</h2>
        <Badge variant="secondary" className="text-sm">
          {totalArticles} article{totalArticles > 1 ? "s" : ""}
        </Badge>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={currentCategory === category.id ? "default" : "outline"}
            onClick={() => onCategoryChange(category.id)}
            className={`gap-2 ${
              currentCategory === category.id
                ? "bg-est-rouge hover:bg-est-rouge/90"
                : "border-est-rouge/20 text-est-rouge hover:bg-est-rouge/10"
            }`}
          >
            <span>{category.icon}</span>
            {category.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
