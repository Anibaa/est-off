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
        <Card key={player.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative">
            <img src={player.photo || "/placeholder.svg"} alt={player.name} className="w-full h-48 object-cover" />
            <Badge className="absolute top-3 left-3 bg-est-rouge text-white font-bold text-lg">{player.number}</Badge>
          </div>
          <CardContent className="p-4">
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-lg">{player.name}</h3>
                <Badge className={`text-xs ${getPositionColor(player.position)}`}>{player.position}</Badge>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                <div>
                  <span className="font-medium">Âge:</span> {player.age} ans
                </div>
                <div>
                  <span className="font-medium">Nationalité:</span> {player.nationality}
                </div>
                <div className="col-span-2">
                  <span className="font-medium">Arrivé en:</span> {player.joinedYear}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
