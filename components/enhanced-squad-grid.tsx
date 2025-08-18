"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Search, Filter, Users, Instagram, Twitter } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import type { Player } from "@/lib/mock-data"
import { useTranslation } from "@/lib/i18n"

interface EnhancedSquadGridProps {
  players: Player[]
  season?: string
}

export function EnhancedSquadGrid({ players, season = "2025-2026" }: EnhancedSquadGridProps) {
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState("")
  const [positionFilter, setPositionFilter] = useState("all")
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null)

  const getPositionColor = (position: string) => {
    if (position.toLowerCase().includes("gardien")) return "bg-yellow-500 text-white"
    if (position.toLowerCase().includes("défenseur")) return "bg-blue-500 text-white"
    if (position.toLowerCase().includes("milieu")) return "bg-green-500 text-white"
    if (position.toLowerCase().includes("attaquant")) return "bg-red-500 text-white"
    return "bg-gray-500 text-white"
  }

  const filteredPlayers = players.filter((player) => {
    const matchesSearch =
      player.name.toLowerCase().includes(searchTerm.toLowerCase()) || player.number.toString().includes(searchTerm)
    const matchesPosition =
      positionFilter === "all" || player.position.toLowerCase().includes(positionFilter.toLowerCase())
    return matchesSearch && matchesPosition
  })

  const positions = ["all", "gardien", "défenseur", "milieu", "attaquant"]

  return (
    <div className="space-y-6">
      <div className="sticky top-16 z-10 bg-background/95 backdrop-blur-sm border-b p-4 -mx-4">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-est-rouge" />
            <h2 className="font-heading text-2xl font-bold">
              {t("roster.title")} {season}
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher un joueur..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full sm:w-64"
              />
            </div>

            <Select value={positionFilter} onValueChange={setPositionFilter}>
              <SelectTrigger className="w-full sm:w-40">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Position" />
              </SelectTrigger>
              <SelectContent>
                {positions.map((position) => (
                  <SelectItem key={position} value={position}>
                    {position === "all" ? "Tous les postes" : position.charAt(0).toUpperCase() + position.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {filteredPlayers.map((player, index) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 border-2 hover:border-est-rouge/30">
                    <div className="relative overflow-hidden">
                      <img
                        src={player.photo || "/placeholder.svg?height=240&width=240&query=football player portrait"}
                        alt={player.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Badge className="absolute top-3 left-3 bg-est-rouge text-white font-bold text-lg shadow-lg">
                        {player.number}
                      </Badge>
                      <Badge
                        className={`absolute top-3 right-3 text-xs ${getPositionColor(player.position)} shadow-lg`}
                      >
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
                        <div className="flex justify-between text-sm">
                          <span>
                            <strong>Âge:</strong> {player.age} ans
                          </span>
                          <span>
                            <strong>Depuis:</strong> {player.joinedYear}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-est-rouge">
                      {player.name} #{player.number}
                    </DialogTitle>
                  </DialogHeader>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <img
                        src={player.photo || "/placeholder.svg?height=300&width=300&query=football player portrait"}
                        alt={player.name}
                        className="w-full h-64 object-cover rounded-lg"
                      />

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                          <Instagram className="h-4 w-4 mr-2" />
                          Instagram
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                          <Twitter className="h-4 w-4 mr-2" />
                          Twitter
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-est-rouge">Informations</h4>
                          <div className="space-y-1 text-sm">
                            <p>
                              <strong>Position:</strong> {player.position}
                            </p>
                            <p>
                              <strong>Âge:</strong> {player.age} ans
                            </p>
                            <p>
                              <strong>Nationalité:</strong> {player.nationality}
                            </p>
                            <p>
                              <strong>Arrivé en:</strong> {player.joinedYear}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-est-rouge">Statistiques</h4>
                          <div className="space-y-1 text-sm">
                            <p>
                              <strong>Matchs:</strong> 24
                            </p>
                            <p>
                              <strong>Buts:</strong> 8
                            </p>
                            <p>
                              <strong>Passes D:</strong> 3
                            </p>
                            <p>
                              <strong>Minutes:</strong> 1,890
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-est-rouge">Biographie</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Joueur talentueux formé dans les rangs de l'EST, il a rapidement gravi les échelons pour
                          devenir un élément clé de l'équipe première. Sa technique et sa vision du jeu en font l'un des
                          joueurs les plus prometteurs de sa génération.
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredPlayers.length === 0 && (
        <div className="text-center py-12">
          <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">Aucun joueur trouvé avec ces critères</p>
        </div>
      )}
    </div>
  )
}
