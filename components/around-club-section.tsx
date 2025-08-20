import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ClubItem {
  title: string
  description: string
  image: string
  url: string
}

const clubItems: ClubItem[] = [
  {
    title: "Taraji Store",
    description: "Boutique officielle du club",
    image: "/placeholder.svg",
    url: "#",
  },
  {
    title: "Taraji Mobile",
    description: "L'application mobile de l'EST",
    image: "/placeholder.svg",
    url: "#",
  },
  {
    title: "Taraji TV",
    description: "Web TV des Sang et Or",
    image: "/placeholder.svg",
    url: "#",
  },
]

export function AroundClubSection() {
  return (
    <section className="space-y-6">
      <h2 className="font-heading text-3xl font-bold">Autour du Club</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {clubItems.map((item) => (
          <Card key={item.title} className="overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-4 space-y-3">
              <h3 className="font-semibold text-lg group-hover:text-est-rouge transition-colors">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              <Button
                variant="outline"
                className="w-full border-est-rouge text-est-rouge hover:bg-est-rouge hover:text-white bg-transparent"
                asChild
              >
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  Découvrir
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default AroundClubSection
