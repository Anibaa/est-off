import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Player } from "@/lib/mock-data"

interface SquadGridProps {
  players: Player[]
}

export function SquadGrid({ players }: SquadGridProps) {
  const getPositionColor = (position: string) => {
    if (position.toLowerCase().includes("gardien")) return "bg-yellow-600 text-white"
    if (position.toLowerCase().includes("défenseur")) return "bg-blue-600 text-white"
    if (position.toLowerCase().includes("milieu")) return "bg-green-600 text-white"
    if (position.toLowerCase().includes("attaquant")) return "bg-red-600 text-white"
    return "bg-gray-600 text-white"
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {players.map((player) => (
        <Card
          key={player.id}
          className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="relative overflow-hidden">
            <img
              src={player.photo || "/placeholder.svg"}
              alt={player.name}
              className="w-full aspect-[3/4] object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Badge className="absolute top-3 left-3 bg-est-rouge text-white font-bold text-lg shadow-lg">
              {player.number}
            </Badge>
            <Badge className={`absolute top-3 right-3 text-xs shadow-lg ${getPositionColor(player.position)}`}>
              {player.position}
            </Badge>
          </div>
          <CardContent className="p-4">
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-lg group-hover:text-est-rouge transition-colors">
                  {player.name}
                </h3>
                <p className="text-sm text-muted-foreground">{player.nationality}</p>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>
                  <span className="font-medium">Âge:</span> {player.age} ans
                </span>
                <span>
                  <span className="font-medium">Arrivé en:</span> {player.joinedYear}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
