import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Ticket, Calendar, MapPin, Users, CreditCard, Clock } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Billetterie - EST",
  description: "Achetez vos billets pour les matchs de l'Espérance Sportive de Tunis",
}

const upcomingMatches = [
  {
    id: 1,
    homeTeam: "EST",
    awayTeam: "Club Africain",
    date: "2024-02-15",
    time: "16:00",
    venue: "Stade Olympique de Radès",
    competition: "Ligue 1",
    prices: { tribune: 15, populaire: 8, vip: 50 },
    available: true,
  },
  {
    id: 2,
    homeTeam: "EST",
    awayTeam: "Al Ahly",
    date: "2024-02-22",
    time: "20:00",
    venue: "Stade Olympique de Radès",
    competition: "Ligue des Champions",
    prices: { tribune: 25, populaire: 12, vip: 80 },
    available: true,
  },
  {
    id: 3,
    homeTeam: "EST",
    awayTeam: "Étoile du Sahel",
    date: "2024-03-01",
    time: "15:00",
    venue: "Stade Olympique de Radès",
    competition: "Coupe de Tunisie",
    prices: { tribune: 20, populaire: 10, vip: 60 },
    available: false,
  },
]

export default function BilletteriePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Billetterie", href: "/billetterie" },
          ]}
        />

        <div className="space-y-6">
          <div className="text-center space-y-4">
            <h1 className="font-heading text-4xl font-bold text-est-rouge">Billetterie</h1>
            <p className="text-muted-foreground text-lg">
              Réservez vos places pour encourager l'EST au Stade Olympique de Radès
            </p>
          </div>

          <div className="grid gap-6">
            {upcomingMatches.map((match) => (
              <Card key={match.id} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-est-rouge/10 to-est-jaune/10">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl">
                        {match.homeTeam} vs {match.awayTeam}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {new Date(match.date).toLocaleDateString("fr-FR", {
                              weekday: "long",
                              day: "numeric",
                              month: "long",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{match.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{match.venue}</span>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-est-rouge text-white">{match.competition}</Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="border-2 hover:border-est-rouge/30 transition-colors">
                      <CardContent className="p-4 text-center">
                        <div className="space-y-3">
                          <Users className="h-8 w-8 mx-auto text-blue-600" />
                          <div>
                            <h3 className="font-semibold">Tribune Populaire</h3>
                            <p className="text-2xl font-bold text-est-rouge">{match.prices.populaire} DT</p>
                          </div>
                          <Button className="w-full bg-est-rouge hover:bg-est-rouge/90" disabled={!match.available}>
                            <Ticket className="h-4 w-4 mr-2" />
                            {match.available ? "Réserver" : "Épuisé"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 hover:border-est-rouge/30 transition-colors">
                      <CardContent className="p-4 text-center">
                        <div className="space-y-3">
                          <Users className="h-8 w-8 mx-auto text-green-600" />
                          <div>
                            <h3 className="font-semibold">Tribune Officielle</h3>
                            <p className="text-2xl font-bold text-est-rouge">{match.prices.tribune} DT</p>
                          </div>
                          <Button className="w-full bg-est-rouge hover:bg-est-rouge/90" disabled={!match.available}>
                            <Ticket className="h-4 w-4 mr-2" />
                            {match.available ? "Réserver" : "Épuisé"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 hover:border-est-rouge/30 transition-colors">
                      <CardContent className="p-4 text-center">
                        <div className="space-y-3">
                          <Users className="h-8 w-8 mx-auto text-yellow-600" />
                          <div>
                            <h3 className="font-semibold">Loge VIP</h3>
                            <p className="text-2xl font-bold text-est-rouge">{match.prices.vip} DT</p>
                          </div>
                          <Button className="w-full bg-est-rouge hover:bg-est-rouge/90" disabled={!match.available}>
                            <Ticket className="h-4 w-4 mr-2" />
                            {match.available ? "Réserver" : "Épuisé"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CreditCard className="h-4 w-4" />
                      <span>Paiement sécurisé par carte bancaire ou Flouci</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-est-rouge/5 to-est-jaune/5">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-est-rouge">Abonnement Saison</h2>
                <p className="text-muted-foreground">
                  Profitez de tous les matchs à domicile avec un abonnement annuel
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-est-rouge">250 DT</div>
                    <div className="text-sm text-muted-foreground">Tribune Populaire</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-est-rouge">450 DT</div>
                    <div className="text-sm text-muted-foreground">Tribune Officielle</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-est-rouge">1200 DT</div>
                    <div className="text-sm text-muted-foreground">Loge VIP</div>
                  </div>
                </div>
                <Button size="lg" className="bg-est-rouge hover:bg-est-rouge/90">
                  Souscrire un abonnement
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
