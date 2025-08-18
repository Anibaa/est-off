import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
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
    <Carousel className="w-full" opts={{ align: "start", loop: true }}>
      <CarouselContent>
        {players.map((player) => (
          <CarouselItem
            key={player.id}
            className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src={player.photo || "/placeholder.svg"}
                alt={player.name}
                className="w-full aspect-[3/4] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <Badge className="absolute top-3 left-3 bg-est-rouge text-white font-bold text-lg shadow-lg">
                {player.number}
              </Badge>
              <Badge
                className={`absolute top-3 right-3 text-xs shadow-lg ${getPositionColor(player.position)}`}
              >
                {player.position}
              </Badge>
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 text-white transition-transform duration-300 backdrop-blur-sm bg-black/50 group-hover:translate-y-0">
                <h3 className="font-semibold text-lg">{player.name}</h3>
                <p className="text-sm opacity-90">{player.nationality}</p>
                <div className="mt-2 flex justify-between text-xs">
                  <span>
                    <span className="font-medium">Âge:</span> {player.age} ans
                  </span>
                  <span>
                    <span className="font-medium">Arrivé en:</span> {player.joinedYear}
                  </span>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
