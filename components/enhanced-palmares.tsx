"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Trophy, Star, Award, Filter, Calendar, Medal } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { recentTrophies } from "@/lib/mock-data"
import { useTranslation } from "@/lib/i18n"

export function EnhancedPalmares() {
  const { t } = useTranslation()
  const [filterType, setFilterType] = useState("all")
  const [filterSeason, setFilterSeason] = useState("all")

  const achievements = [
    { icon: Trophy, label: "Championnats nationaux", count: 32, color: "text-yellow-600" },
    { icon: Star, label: "Coupes de Tunisie", count: 16, color: "text-blue-600" },
    { icon: Award, label: "Titres continentaux", count: 4, color: "text-green-600" },
    { icon: Medal, label: "Titres internationaux", count: 2, color: "text-purple-600" },
  ]

  const trophyCategories = [
    { value: "all", label: "Tous les trophées" },
    { value: "national", label: "National" },
    { value: "continental", label: "Continental" },
    { value: "international", label: "International" },
  ]

  const seasons = [
    { value: "all", label: "Toutes les saisons" },
    { value: "2020s", label: "2020-2029" },
    { value: "2010s", label: "2010-2019" },
    { value: "2000s", label: "2000-2009" },
    { value: "1990s", label: "1990-1999" },
  ]

  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <motion.h2
          className="font-heading text-4xl font-bold bg-gradient-to-r from-est-rouge to-est-jaune bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("palmares.title")}
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Un siècle de succès et de trophées
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            <Card className="text-center border-2 hover:border-est-rouge/30 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-est-rouge/10 to-est-jaune/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                  </div>
                  <div className="text-4xl font-bold text-est-rouge group-hover:scale-110 transition-transform duration-300">
                    {achievement.count}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">{achievement.label}</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-est-rouge/10 via-est-jaune/10 to-est-rouge/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-6 w-6 text-est-rouge" />
              Derniers Trophées
            </CardTitle>

            <div className="flex gap-3">
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {trophyCategories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filterSeason} onValueChange={setFilterSeason}>
                <SelectTrigger className="w-48">
                  <Calendar className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {seasons.map((season) => (
                    <SelectItem key={season.value} value={season.value}>
                      {season.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {recentTrophies.map((trophy, index) => (
                  <motion.div
                    key={trophy.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group"
                  >
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-est-jaune/50">
                      <div className="relative">
                        <img
                          src={trophy.image || "/placeholder.svg?height=200&width=300&query=trophy celebration"}
                          alt={trophy.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Badge className="absolute top-3 right-3 bg-est-rouge text-white font-bold">
                          {trophy.year}
                        </Badge>
                      </div>

                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div>
                            <h3 className="font-bold text-lg text-est-rouge group-hover:text-est-jaune transition-colors">
                              {trophy.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">{trophy.description}</p>
                          </div>

                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="text-xs">
                              {trophy.competition || "Compétition"}
                            </Badge>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              <span>{trophy.date || `${trophy.year}`}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="text-center mt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-est-rouge to-est-jaune hover:from-est-rouge/90 hover:to-est-jaune/90 text-white font-semibold px-8"
            >
              <Trophy className="h-5 w-5 mr-2" />
              {t("palmares.viewAll")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
