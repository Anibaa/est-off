import { Card, CardContent } from "@/components/ui/card"
import type { Trophy } from "@/lib/mock-data"

interface TrophiesGridProps {
  trophies: Trophy[]
}

export function TrophiesGrid({ trophies }: TrophiesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {trophies.map((trophy) => (
        <Card key={trophy.id} className="text-center hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="space-y-4">
              <img
                src={trophy.image || "/placeholder.svg"}
                alt={trophy.title}
                className="w-20 h-20 mx-auto object-contain"
              />
              <div>
                <div className="font-semibold text-est-rouge">{trophy.title}</div>
                <div className="text-2xl font-bold">{trophy.year}</div>
                <div className="text-sm text-muted-foreground">{trophy.competition}</div>
                <div className="text-sm text-muted-foreground mt-2">{trophy.description}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
