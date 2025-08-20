import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Play } from "lucide-react"

export const footballAlbums = [
  {
    id: 1,
    type: "image",
    title: "Séance d'entraînement",
    cover: "/football-training-session.png",
    date: "2024-01-15",
    photos: [
      "/football-training-session.png",
      "/football-highlights-screen.png",
      "/est-football-victory.png",
    ],
  },
  {
    id: 2,
    type: "image",
    title: "Photo de groupe",
    cover: "/est-football-victory.png",
    date: "2024-01-20",
    photos: [
      "/est-football-victory.png",
      "/football-training-session.png",
    ],
  },
  {
    id: 3,
    type: "video",
    title: "Résumé du match",
    cover: "/football-highlights-screen.png",
    date: "2024-01-25",
    photos: [
      "/football-highlights-screen.png",
    ],
    duration: "3:45",
  },
]

export function FootballGallery() {
  return (
    <section className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="font-heading text-3xl font-bold">Galerie</h2>
        <p className="text-muted-foreground">Photos et vidéos récentes</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {footballAlbums.map((item) => (
          <Link key={item.id} href={`/football/gallery/${item.id}`}>
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="relative">
                <img
                  src={item.cover || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  {item.type === "video" ? (
                    <Play className="h-12 w-12 text-white" />
                  ) : (
                    <Camera className="h-12 w-12 text-white" />
                  )}
                </div>
                {item.duration && (
                  <Badge className="absolute top-3 right-3 bg-black/70 text-white">
                    {item.duration}
                  </Badge>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold group-hover:text-est-rouge transition-colors">
                  {item.title}
                </h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default FootballGallery

