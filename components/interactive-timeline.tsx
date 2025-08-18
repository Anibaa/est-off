"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Quote, Trophy, Star, Milestone, Users } from "lucide-react"
import type { TimelineEvent } from "@/lib/mock-data"

interface InteractiveTimelineProps {
  events: TimelineEvent[]
}

export function InteractiveTimeline({ events }: InteractiveTimelineProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null)

  const categories = [
    { id: "all", label: "Tous les événements", icon: Star },
    { id: "foundation", label: "Fondation", icon: Users },
    { id: "trophy", label: "Trophées", icon: Trophy },
    { id: "milestone", label: "Jalons", icon: Milestone },
    { id: "legend", label: "Légendes", icon: Quote },
  ]

  const filteredEvents =
    selectedCategory === "all" ? events : events.filter((event) => event.category === selectedCategory)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "foundation":
        return "bg-blue-600 text-white"
      case "trophy":
        return "bg-est-rouge text-white"
      case "milestone":
        return "bg-green-600 text-white"
      case "legend":
        return "bg-est-jaune text-black"
      default:
        return "bg-gray-600 text-white"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "foundation":
        return Users
      case "trophy":
        return Trophy
      case "milestone":
        return Milestone
      case "legend":
        return Quote
      default:
        return Star
    }
  }

  return (
    <div className="space-y-8">
      {/* Category filters */}
      <div className="text-center space-y-6">
        <div>
          <h2 className="font-heading text-3xl font-bold mb-2">Explorez Notre Histoire</h2>
          <p className="text-muted-foreground text-lg">
            Filtrez par catégorie pour découvrir les moments qui ont marqué notre siècle d'existence
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`gap-2 ${
                  selectedCategory === category.id
                    ? "bg-est-rouge hover:bg-est-rouge/90"
                    : "border-est-rouge/20 text-est-rouge hover:bg-est-rouge/10"
                }`}
              >
                <Icon className="h-4 w-4" />
                {category.label}
              </Button>
            )
          })}
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-est-rouge via-est-jaune to-est-rouge"></div>

        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {filteredEvents.map((event, index) => {
              const CategoryIcon = getCategoryIcon(event.category)
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-start gap-8"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-est-rouge rounded-full flex items-center justify-center shadow-lg">
                      <CategoryIcon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-est-jaune text-black px-3 py-1 rounded-full text-sm font-bold">
                      {event.year}
                    </div>
                  </div>

                  {/* Event content */}
                  <Card
                    className="flex-1 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedEvent(event)}
                  >
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-4">
                          <div className="space-y-2">
                            <Badge className={getCategoryColor(event.category)}>
                              {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                            </Badge>
                            <h3 className="font-heading text-xl font-bold text-est-rouge">{event.title}</h3>
                          </div>

                          <p className="text-muted-foreground leading-relaxed">{event.description}</p>

                          {event.quote && (
                            <blockquote className="border-l-4 border-est-jaune pl-4 italic text-foreground">
                              <p>"{event.quote}"</p>
                              {event.quoteAuthor && (
                                <footer className="text-sm text-muted-foreground mt-2">— {event.quoteAuthor}</footer>
                              )}
                            </blockquote>
                          )}
                        </div>

                        {event.image && (
                          <div className="lg:col-span-1">
                            <img
                              src={event.image || "/placeholder.svg"}
                              alt={event.title}
                              className="w-full h-48 object-cover rounded-lg shadow-md"
                            />
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Event detail modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <Badge className={getCategoryColor(selectedEvent.category)}>
                        {selectedEvent.category.charAt(0).toUpperCase() + selectedEvent.category.slice(1)}
                      </Badge>
                      <h2 className="font-heading text-2xl font-bold text-est-rouge">{selectedEvent.title}</h2>
                      <div className="text-est-jaune font-bold text-lg">{selectedEvent.year}</div>
                    </div>
                    <Button variant="ghost" onClick={() => setSelectedEvent(null)}>
                      ✕
                    </Button>
                  </div>

                  {selectedEvent.image && (
                    <img
                      src={selectedEvent.image || "/placeholder.svg"}
                      alt={selectedEvent.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  )}

                  <p className="text-foreground leading-relaxed text-lg">{selectedEvent.description}</p>

                  {selectedEvent.quote && (
                    <blockquote className="border-l-4 border-est-jaune pl-6 py-4 bg-muted/30 rounded-r-lg">
                      <p className="text-lg italic text-foreground">"{selectedEvent.quote}"</p>
                      {selectedEvent.quoteAuthor && (
                        <footer className="text-muted-foreground mt-3">— {selectedEvent.quoteAuthor}</footer>
                      )}
                    </blockquote>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
