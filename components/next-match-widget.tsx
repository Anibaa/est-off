"use client"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock } from "lucide-react"
import { nextMatch } from "@/lib/mock-data"

export function NextMatchWidget() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const matchDate = new Date(`${nextMatch.date}T${nextMatch.time}:00`)
      const now = new Date()
      const difference = matchDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Card className="overflow-hidden border-est-rouge/20">
      <CardHeader className="bg-gradient-to-r from-est-rouge to-est-rouge/80 text-white">
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Prochain Match
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Teams */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={nextMatch.homeTeamLogo || "/placeholder.svg"}
                alt={nextMatch.homeTeam}
                className="h-12 w-12 rounded-full"
              />
              <div>
                <div className="font-semibold">{nextMatch.homeTeam}</div>
                <div className="text-sm text-muted-foreground">Domicile</div>
              </div>
            </div>

            <div className="text-2xl font-bold text-est-rouge">VS</div>

            <div className="flex items-center space-x-3">
              <div className="text-right">
                <div className="font-semibold">{nextMatch.awayTeam}</div>
                <div className="text-sm text-muted-foreground">Extérieur</div>
              </div>
              <img
                src={nextMatch.awayTeamLogo || "/placeholder.svg"}
                alt={nextMatch.awayTeam}
                className="h-12 w-12 rounded-full"
              />
            </div>
          </div>

          {/* Match details */}
          <div className="space-y-2 pt-4 border-t">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-est-rouge" />
              <span>
                {nextMatch.date} à {nextMatch.time}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-est-rouge" />
              <span>{nextMatch.venue}</span>
            </div>
            <Badge variant="secondary" className="w-fit">
              {nextMatch.competition}
            </Badge>
          </div>

          {/* Countdown */}
          <div className="pt-4 border-t">
            <div className="text-sm text-muted-foreground mb-2">Temps restant:</div>
            <div className="grid grid-cols-4 gap-2">
              {[
                { label: "Jours", value: timeLeft.days },
                { label: "Heures", value: timeLeft.hours },
                { label: "Min", value: timeLeft.minutes },
                { label: "Sec", value: timeLeft.seconds },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="bg-est-rouge text-white rounded-lg p-2 font-bold text-lg">
                    {item.value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
