import type { Metadata } from "next"
import { Trophy } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Classement Volleyball - EST",
  description: "Classement complet du championnat de volleyball tunisien",
}

const volleyballStandings = [
  { position: 1, team: "EST", played: 18, won: 16, lost: 2, setsFor: 48, setsAgainst: 12, points: 32 },
  { position: 2, team: "Club Africain", played: 18, won: 14, lost: 4, setsFor: 44, setsAgainst: 18, points: 28 },
  { position: 3, team: "Étoile du Sahel", played: 18, won: 12, lost: 6, setsFor: 38, setsAgainst: 24, points: 24 },
  { position: 4, team: "CS Sfaxien", played: 18, won: 10, lost: 8, setsFor: 34, setsAgainst: 28, points: 20 },
  { position: 5, team: "US Monastir", played: 18, won: 8, lost: 10, setsFor: 28, setsAgainst: 34, points: 16 },
  { position: 6, team: "Stade Tunisien", played: 18, won: 6, lost: 12, setsFor: 22, setsAgainst: 38, points: 12 },
]

export default function VolleyballClassementPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Volleyball", href: "/volleyball" },
            { label: "Classement", href: "/volleyball/classement" },
          ]}
        />

        <div className="space-y-6">
          <div>
            <h1 className="font-heading text-4xl font-bold text-est-rouge">Classement Volleyball</h1>
            <p className="text-muted-foreground mt-2">Championnat de Tunisie - Saison 2024-2025</p>
          </div>

          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-est-rouge/10 to-est-jaune/10">
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-est-rouge" />
                Division Nationale A
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr className="text-left">
                      <th className="p-4 font-semibold">Pos</th>
                      <th className="p-4 font-semibold">Équipe</th>
                      <th className="p-4 font-semibold text-center">J</th>
                      <th className="p-4 font-semibold text-center">G</th>
                      <th className="p-4 font-semibold text-center">P</th>
                      <th className="p-4 font-semibold text-center">Sets +</th>
                      <th className="p-4 font-semibold text-center">Sets -</th>
                      <th className="p-4 font-semibold text-center">Diff</th>
                      <th className="p-4 font-semibold text-center">Pts</th>
                    </tr>
                  </thead>
                  <tbody>
                    {volleyballStandings.map((team, index) => (
                      <tr
                        key={team.team}
                        className={`border-b hover:bg-muted/30 transition-colors ${
                          team.team === "EST" ? "bg-est-rouge/5 border-est-rouge/20" : ""
                        }`}
                      >
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <span className="font-bold">{team.position}</span>
                            {index < 2 && <div className="w-2 h-2 bg-green-500 rounded-full" />}
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={`/abstract-geometric-shapes.png?height=24&width=24&query=${team.team} volleyball logo`}
                              alt={team.team}
                              className="h-6 w-6 rounded-full"
                            />
                            <span className={`font-medium ${team.team === "EST" ? "text-est-rouge font-bold" : ""}`}>
                              {team.team}
                            </span>
                          </div>
                        </td>
                        <td className="p-4 text-center">{team.played}</td>
                        <td className="p-4 text-center">{team.won}</td>
                        <td className="p-4 text-center">{team.lost}</td>
                        <td className="p-4 text-center">{team.setsFor}</td>
                        <td className="p-4 text-center">{team.setsAgainst}</td>
                        <td className="p-4 text-center">
                          <span className="text-green-600">+{team.setsFor - team.setsAgainst}</span>
                        </td>
                        <td className="p-4 text-center">
                          <Badge
                            className={`font-bold ${
                              team.team === "EST" ? "bg-est-rouge text-white" : "bg-muted text-foreground"
                            }`}
                          >
                            {team.points}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
