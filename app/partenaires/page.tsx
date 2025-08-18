import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Handshake } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Partenaires - EST",
  description: "Nos partenaires et sponsors officiels",
}

const partners = [
  {
    id: 1,
    name: "Tunisie Telecom",
    category: "Sponsor Principal",
    logo: "/tunisie-telecom-logo.png",
    description: "Partenaire officiel des télécommunications",
    website: "https://tunisietelecom.tn",
    tier: "principal",
  },
  {
    id: 2,
    name: "Banque de Tunisie",
    category: "Partenaire Bancaire",
    logo: "/banque-de-tunisie-logo.png",
    description: "Partenaire bancaire officiel",
    website: "https://bt.com.tn",
    tier: "premium",
  },
  {
    id: 3,
    name: "Puma",
    category: "Équipementier",
    logo: "/puma-logo.png",
    description: "Équipementier sportif officiel",
    website: "https://puma.com",
    tier: "premium",
  },
  {
    id: 4,
    name: "Coca-Cola",
    category: "Boisson Officielle",
    logo: "/coca-cola-logo.png",
    description: "Boisson officielle du club",
    website: "https://coca-cola.com",
    tier: "premium",
  },
  {
    id: 5,
    name: "Ooredoo",
    category: "Télécommunications",
    logo: "/ooredoo-logo.png",
    description: "Partenaire télécommunications",
    website: "https://ooredoo.tn",
    tier: "standard",
  },
  {
    id: 6,
    name: "Délice Danone",
    category: "Nutrition",
    logo: "/delice-danone-logo.png",
    description: "Partenaire nutrition et bien-être",
    website: "https://danone.tn",
    tier: "standard",
  },
]

const getTierColor = (tier: string) => {
  switch (tier) {
    case "principal":
      return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white"
    case "premium":
      return "bg-gradient-to-r from-est-rouge to-est-rouge/80 text-white"
    case "standard":
      return "bg-gradient-to-r from-gray-500 to-gray-600 text-white"
    default:
      return "bg-muted text-foreground"
  }
}

export default function PartenairesPage() {
  const principalPartners = partners.filter((p) => p.tier === "principal")
  const premiumPartners = partners.filter((p) => p.tier === "premium")
  const standardPartners = partners.filter((p) => p.tier === "standard")

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Partenaires", href: "/partenaires" },
          ]}
        />

        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="font-heading text-4xl font-bold text-est-rouge">Nos Partenaires</h1>
            <p className="text-muted-foreground text-lg">
              Ils nous accompagnent dans notre quête d'excellence sportive
            </p>
          </div>

          {/* Sponsor Principal */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Handshake className="h-6 w-6 text-est-rouge" />
              <h2 className="text-2xl font-bold">Sponsor Principal</h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {principalPartners.map((partner) => (
                <Card
                  key={partner.id}
                  className="overflow-hidden border-2 border-yellow-200 hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="flex-shrink-0">
                        <img
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name}
                          className="h-24 w-auto object-contain"
                        />
                      </div>
                      <div className="flex-1 text-center md:text-left space-y-4">
                        <div>
                          <h3 className="text-3xl font-bold text-est-rouge">{partner.name}</h3>
                          <Badge className={getTierColor(partner.tier)}>{partner.category}</Badge>
                        </div>
                        <p className="text-muted-foreground text-lg">{partner.description}</p>
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-est-rouge hover:underline font-medium"
                        >
                          Visiter le site web
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Partenaires Premium */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Partenaires Premium</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {premiumPartners.map((partner) => (
                <Card key={partner.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <img
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name}
                          className="h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className={getTierColor(partner.tier)}>{partner.category}</Badge>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold group-hover:text-est-rouge transition-colors">
                          {partner.name}
                        </h3>
                        <p className="text-muted-foreground">{partner.description}</p>
                      </div>
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-est-rouge hover:underline text-sm font-medium"
                      >
                        Visiter le site web
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Partenaires Standard */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Partenaires Officiels</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {standardPartners.map((partner) => (
                <Card key={partner.id} className="overflow-hidden hover:shadow-md transition-all duration-300 group">
                  <CardContent className="p-4">
                    <div className="space-y-3 text-center">
                      <img
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        className="h-12 w-auto object-contain mx-auto group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="space-y-1">
                        <h3 className="font-semibold text-sm group-hover:text-est-rouge transition-colors">
                          {partner.name}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {partner.category}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-est-rouge/10 to-est-jaune/10">
            <CardContent className="p-8 text-center">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-est-rouge">Devenez Partenaire de l'EST</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Rejoignez notre famille de partenaires et associez votre marque à l'excellence sportive tunisienne
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/club/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-est-rouge text-white font-semibold rounded-lg hover:bg-est-rouge/90 transition-colors"
                  >
                    <Handshake className="h-5 w-5 mr-2" />
                    Nous contacter
                  </a>
                  <a
                    href="mailto:partenariats@est.tn"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-est-rouge text-est-rouge font-semibold rounded-lg hover:bg-est-rouge hover:text-white transition-colors"
                  >
                    partenariats@est.tn
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
