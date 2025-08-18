import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock } from "lucide-react"
import type { Fixture } from "@/lib/mock-data"

interface FixturesWidgetProps {
  fixtures: Fixture[]
  sport: string
}

export function FixturesWidget({ fixtures, sport }: FixturesWidgetProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-600 text-white"
      case "live":
        return "bg-red-600 text-white animate-pulse"
      case "finished":
        return "bg-gray-600 text-white"
      default:
        return "bg-gray-600 text-white"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "upcoming":
        return "À venir"
      case "live":
        return "En direct"
      case "finished":
        return "Terminé"
      default:
        return status
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-est-rouge/10 to-est-rouge/5">
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-est-rouge" />
          Calendrier {sport}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-0">
          {fixtures.slice(0, 5).map((fixture) => (
            <div key={fixture.id} className="p-4 border-b last:border-b-0 hover:bg-muted/30 transition-colors">
              <div className="space-y-3">
                {/* Match header */}
                <div className="flex items-center justify-between">
                  <Badge className={getStatusColor(fixture.status)}>{getStatusText(fixture.status)}</Badge>
                  <div className="text-sm text-muted-foreground">{fixture.round}</div>
                </div>

                {/* Teams */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={fixture.homeTeamLogo || "/placeholder.svg"}
                      alt={fixture.homeTeam}
                      className="h-8 w-8 rounded-full"
                    />
                    <span className="font-medium">{fixture.homeTeam}</span>
                  </div>

                  <div className="text-center">
                    {fixture.status === "finished" ? (
                      <div className="text-lg font-bold">
                        {fixture.homeScore} - {fixture.awayScore}
                      </div>
                    ) : (
                      <div className="text-sm text-muted-foreground">vs</div>
                    )}
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="font-medium">{fixture.awayTeam}</span>
                    <img
                      src={fixture.awayTeamLogo || "/placeholder.svg"}
                      alt={fixture.awayTeam}
                      className="h-8 w-8 rounded-full"
                    />
                  </div>
                </div>

                {/* Match details */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>
                        {fixture.date} - {fixture.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{fixture.venue}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {fixture.competition}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 border-t bg-muted/20">
          <a href={`/${sport.toLowerCase()}/calendrier`} className="text-sm text-est-rouge hover:underline font-medium">
            Voir tout le calendrier →
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
