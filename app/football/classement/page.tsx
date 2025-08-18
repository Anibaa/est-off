import type { Metadata } from "next"
import { Trophy } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { standings } from "@/lib/mock-data"

export const metadata: Metadata = {
  title: "Classement Football - EST",
  description: "Classement complet du championnat de football tunisien",
}

export default function FootballClassementPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Football", href: "/football" },
            { label: "Classement", href: "/football/classement" },
          ]}
        />

        <div className="space-y-6">
          <div>
            <h1 className="font-heading text-4xl font-bold text-est-rouge">Classement Football</h1>
            <p className="text-muted-foreground mt-2">Championnat de Tunisie - Saison 2024-2025</p>
          </div>

          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-est-rouge/10 to-est-jaune/10">
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-est-rouge" />
                Ligue 1 Professionnelle
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
                      <th className="p-4 font-semibold text-center">N</th>
                      <th className="p-4 font-semibold text-center">P</th>
                      <th className="p-4 font-semibold text-center">BP</th>
                      <th className="p-4 font-semibold text-center">BC</th>
                      <th className="p-4 font-semibold text-center">Diff</th>
                      <th className="p-4 font-semibold text-center">Pts</th>
                      <th className="p-4 font-semibold text-center">Forme</th>
                    </tr>
                  </thead>
                  <tbody>
                    {standings.map((team, index) => (
                      <tr
                        key={team.team}
                        className={`border-b hover:bg-muted/30 transition-colors ${
                          team.team === "EST" ? "bg-est-rouge/5 border-est-rouge/20" : ""
                        }`}
                      >
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <span className="font-bold">{team.position}</span>
                            {index < 3 && <div className="w-2 h-2 bg-green-500 rounded-full" />}
                            {index >= standings.length - 3 && <div className="w-2 h-2 bg-red-500 rounded-full" />}
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={team.logo || "/placeholder.svg?height=24&width=24&query=football team logo"}
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
                        <td className="p-4 text-center">{team.drawn}</td>
                        <td className="p-4 text-center">{team.lost}</td>
                        <td className="p-4 text-center">{team.goalsFor}</td>
                        <td className="p-4 text-center">{team.goalsAgainst}</td>
                        <td className="p-4 text-center">
                          <span className={team.goalDifference >= 0 ? "text-green-600" : "text-red-600"}>
                            {team.goalDifference > 0 ? "+" : ""}
                            {team.goalDifference}
                          </span>
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
                        <td className="p-4 text-center">
                          <div className="flex gap-1 justify-center">
                            {["W", "W", "D", "W", "L"].map((result, i) => (
                              <div
                                key={i}
                                className={`w-5 h-5 rounded-full text-xs flex items-center justify-center text-white font-bold ${
                                  result === "W" ? "bg-green-500" : result === "D" ? "bg-yellow-500" : "bg-red-500"
                                }`}
                              >
                                {result}
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span>Qualification Ligue des Champions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <span>Qualification Coupe CAF</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <span>Zone de relégation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
