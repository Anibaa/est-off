"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Camera, Video, Filter, Play, Download, Share2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Breadcrumbs } from "@/components/breadcrumbs"

const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "Victoire en Ligue des Champions",
    category: "football",
    date: "2024-01-15",
    url: "/est-football-victory.png",
    thumbnail: "/est-football-victory.png",
  },
  {
    id: 2,
    type: "video",
    title: "Résumé du match EST vs CA",
    category: "football",
    date: "2024-01-10",
    url: "/football-highlights-screen.png",
    thumbnail: "/football-highlights-screen.png",
    duration: "3:45",
  },
  {
    id: 3,
    type: "image",
    title: "Entraînement Volleyball",
    category: "volleyball",
    date: "2024-01-08",
    url: "/volleyball-training.png",
    thumbnail: "/volleyball-training.png",
  },
  {
    id: 4,
    type: "image",
    title: "Célébration Handball",
    category: "handball",
    date: "2024-01-05",
    url: "/handball-team-celebration.png",
    thumbnail: "/handball-team-celebration.png",
  },
  {
    id: 5,
    type: "video",
    title: "Interview du Président",
    category: "club",
    date: "2024-01-03",
    url: "/club-president-interview.png",
    thumbnail: "/club-president-interview.png",
    duration: "8:20",
  },
  {
    id: 6,
    type: "image",
    title: "Nouveau Stade Radès",
    category: "club",
    date: "2024-01-01",
    url: "/modern-football-stadium.png",
    thumbnail: "/modern-football-stadium.png",
  },
]

export default function GaleriePage() {
  const [filter, setFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [selectedMedia, setSelectedMedia] = useState<any>(null)

  const filteredMedia = mediaItems.filter((item) => {
    const matchesCategory = filter === "all" || item.category === filter
    const matchesType = typeFilter === "all" || item.type === typeFilter
    return matchesCategory && matchesType
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Galerie", href: "/galerie" },
          ]}
        />

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="font-heading text-4xl font-bold text-est-rouge">Galerie Médias</h1>
              <p className="text-muted-foreground mt-2">Photos et vidéos de l'EST</p>
            </div>

            <div className="flex gap-3">
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-40">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes catégories</SelectItem>
                  <SelectItem value="football">Football</SelectItem>
                  <SelectItem value="volleyball">Volleyball</SelectItem>
                  <SelectItem value="handball">Handball</SelectItem>
                  <SelectItem value="club">Club</SelectItem>
                </SelectContent>
              </Select>

              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous</SelectItem>
                  <SelectItem value="image">Photos</SelectItem>
                  <SelectItem value="video">Vidéos</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredMedia.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                        <div className="relative">
                          <img
                            src={item.thumbnail || "/placeholder.svg"}
                            alt={item.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            {item.type === "video" ? (
                              <Play className="h-12 w-12 text-white" />
                            ) : (
                              <Camera className="h-12 w-12 text-white" />
                            )}
                          </div>
                          <Badge className="absolute top-3 left-3 bg-est-rouge text-white">
                            {item.type === "video" ? (
                              <Video className="h-3 w-3 mr-1" />
                            ) : (
                              <Camera className="h-3 w-3 mr-1" />
                            )}
                            {item.type === "video" ? "Vidéo" : "Photo"}
                          </Badge>
                          {item.duration && (
                            <Badge className="absolute top-3 right-3 bg-black/70 text-white">{item.duration}</Badge>
                          )}
                        </div>
                        <CardContent className="p-4">
                          <div className="space-y-2">
                            <h3 className="font-semibold text-lg group-hover:text-est-rouge transition-colors">
                              {item.title}
                            </h3>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <Badge variant="outline" className="capitalize">
                                {item.category}
                              </Badge>
                              <span>{new Date(item.date).toLocaleDateString("fr-FR")}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>

                    <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                      <div className="relative">
                        <img
                          src={item.url || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-auto max-h-[70vh] object-contain"
                        />
                        <div className="absolute top-4 right-4 flex gap-2">
                          <Button size="sm" variant="secondary" className="bg-black/50 hover:bg-black/70">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="secondary" className="bg-black/50 hover:bg-black/70">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="p-6">
                        <h2 className="text-2xl font-bold text-est-rouge mb-2">{item.title}</h2>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <Badge variant="outline" className="capitalize">
                            {item.category}
                          </Badge>
                          <span>{new Date(item.date).toLocaleDateString("fr-FR")}</span>
                          {item.duration && <span>Durée: {item.duration}</span>}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
