import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy } from "lucide-react"
import { standings } from "@/lib/mock-data"

export function StandingsWidget() {
  return (
    <Card className="overflow-hidden border-est-jaune/20">
      <CardHeader className="bg-gradient-to-r from-est-jaune to-est-jaune/80">
        <CardTitle className="flex items-center gap-2 text-black">
          <Trophy className="h-5 w-5" />
          Classement Ligue 1
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr className="text-left">
                <th className="p-3 text-sm font-medium">Pos</th>
                <th className="p-3 text-sm font-medium">Équipe</th>
                <th className="p-3 text-sm font-medium text-center">J</th>
                <th className="p-3 text-sm font-medium text-center">V</th>
                <th className="p-3 text-sm font-medium text-center">N</th>
                <th className="p-3 text-sm font-medium text-center">D</th>
                <th className="p-3 text-sm font-medium text-center">Pts</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((team, index) => (
                <tr
                  key={team.team}
                  className={`border-b hover:bg-muted/30 transition-colors ${
                    team.team === "Espérance ST" ? "bg-est-rouge/5" : ""
                  }`}
                >
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{team.position}</span>
                      {index === 0 && (
                        <Badge variant="secondary" className="bg-est-jaune text-black text-xs">
                          1er
                        </Badge>
                      )}
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <img src={team.logo || "/placeholder.svg"} alt={team.team} className="h-6 w-6 rounded-full" />
                      <span
                        className={`font-medium ${team.team === "Espérance ST" ? "text-est-rouge font-semibold" : ""}`}
                      >
                        {team.team}
                      </span>
                    </div>
                  </td>
                  <td className="p-3 text-center text-sm">{team.played}</td>
                  <td className="p-3 text-center text-sm">{team.won}</td>
                  <td className="p-3 text-center text-sm">{team.drawn}</td>
                  <td className="p-3 text-center text-sm">{team.lost}</td>
                  <td className="p-3 text-center font-semibold">{team.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-3 border-t bg-muted/20">
          <a href="/football/classement" className="text-sm text-est-rouge hover:underline font-medium">
            Voir le classement complet →
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
