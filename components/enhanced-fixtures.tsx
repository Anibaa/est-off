"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Filter, Home, Plane, Trophy, Users } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import type { Fixture } from "@/lib/mock-data"
import { useTranslation } from "@/lib/i18n"

interface EnhancedFixturesProps {
  fixtures: Fixture[]
  sport: string
}

export function EnhancedFixtures({ fixtures, sport }: EnhancedFixturesProps) {
  const { t } = useTranslation()
  const [statusFilter, setStatusFilter] = useState("all")
  const [competitionFilter, setCompetitionFilter] = useState("all")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-500 text-white"
      case "live":
        return "bg-red-500 text-white animate-pulse"
      case "finished":
        return "bg-gray-500 text-white"
      default:
        return "bg-gray-500 text-white"
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

  const getVenueIcon = (venue: string, homeTeam: string) => {
    return venue.includes("Radès") || homeTeam === "EST" ? (
      <Home className="h-3 w-3 text-green-600" />
    ) : (
      <Plane className="h-3 w-3 text-orange-600" />
    )
  }

  const filteredFixtures = fixtures.filter((fixture) => {
    const matchesStatus = statusFilter === "all" || fixture.status === statusFilter
    const matchesCompetition = competitionFilter === "all" || fixture.competition === competitionFilter
    return matchesStatus && matchesCompetition
  })

  const competitions = [...new Set(fixtures.map((f) => f.competition))]
  const statuses = ["all", "upcoming", "live", "finished"]

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-est-rouge/10 to-est-rouge/5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-est-rouge" />
            Calendrier {sport}
          </CardTitle>

          <div className="flex gap-3">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-32">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                {statuses.slice(1).map((status) => (
                  <SelectItem key={status} value={status}>
                    {getStatusText(status)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={competitionFilter} onValueChange={setCompetitionFilter}>
              <SelectTrigger className="w-40">
                <Trophy className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes</SelectItem>
                {competitions.map((competition) => (
                  <SelectItem key={competition} value={competition}>
                    {competition}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <AnimatePresence mode="wait">
          <motion.div
            className="space-y-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredFixtures.slice(0, 8).map((fixture, index) => (
              <motion.div
                key={fixture.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <div className="p-4 border-b last:border-b-0 hover:bg-gradient-to-r hover:from-est-rouge/5 hover:to-est-jaune/5 transition-all duration-300 cursor-pointer">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Badge className={`${getStatusColor(fixture.status)} shadow-sm`}>
                          {getStatusText(fixture.status)}
                        </Badge>
                        <Badge variant="outline" className="text-xs border-est-rouge/30">
                          <Trophy className="h-3 w-3 mr-1" />
                          {fixture.competition}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">{fixture.round}</div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 flex-1">
                        <img
                          src={fixture.homeTeamLogo || "/placeholder.svg?height=32&width=32&query=football team logo"}
                          alt={fixture.homeTeam}
                          className="h-10 w-10 rounded-full border-2 border-white shadow-sm"
                        />
                        <div className="flex-1">
                          <span className="font-semibold text-lg group-hover:text-est-rouge transition-colors">
                            {fixture.homeTeam}
                          </span>
                          {fixture.homeTeam === "EST" && (
                            <Badge variant="secondary" className="ml-2 text-xs">
                              <Home className="h-3 w-3 mr-1" />
                              Domicile
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="text-center px-6">
                        {fixture.status === "finished" ? (
                          <div className="text-2xl font-bold text-est-rouge">
                            {fixture.homeScore} - {fixture.awayScore}
                          </div>
                        ) : fixture.status === "live" ? (
                          <div className="text-lg font-bold text-red-500 animate-pulse">
                            {fixture.homeScore || 0} - {fixture.awayScore || 0}
                          </div>
                        ) : (
                          <div className="text-lg text-muted-foreground font-medium">vs</div>
                        )}
                      </div>

                      <div className="flex items-center space-x-3 flex-1 justify-end">
                        <div className="flex-1 text-right">
                          <span className="font-semibold text-lg group-hover:text-est-rouge transition-colors">
                            {fixture.awayTeam}
                          </span>
                          {fixture.awayTeam === "EST" && (
                            <Badge variant="secondary" className="ml-2 text-xs">
                              <Plane className="h-3 w-3 mr-1" />
                              Extérieur
                            </Badge>
                          )}
                        </div>
                        <img
                          src={fixture.awayTeamLogo || "/placeholder.svg?height=32&width=32&query=football team logo"}
                          alt={fixture.awayTeam}
                          className="h-10 w-10 rounded-full border-2 border-white shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-full">
                          <Clock className="h-4 w-4 text-est-rouge" />
                          <span className="font-medium">
                            {new Date(fixture.date).toLocaleDateString("fr-FR", {
                              weekday: "short",
                              day: "numeric",
                              month: "short",
                            })}{" "}
                            - {fixture.time}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-full">
                          {getVenueIcon(fixture.venue, fixture.homeTeam)}
                          <span className="font-medium">{fixture.venue}</span>
                        </div>
                      </div>

                      {fixture.status === "upcoming" && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-est-rouge text-est-rouge hover:bg-est-rouge hover:text-white bg-transparent"
                        >
                          <Users className="h-3 w-3 mr-1" />
                          Billets
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="p-4 border-t bg-gradient-to-r from-muted/30 to-muted/10">
          <Button variant="ghost" className="w-full text-est-rouge hover:bg-est-rouge hover:text-white font-semibold">
            <Calendar className="h-4 w-4 mr-2" />
            Voir tout le calendrier →
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
