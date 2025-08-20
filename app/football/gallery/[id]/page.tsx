import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { footballAlbums } from "@/components/football-gallery"
import { notFound } from "next/navigation"

export default function FootballAlbumPage({ params }: { params: { id: string } }) {
  const album = footballAlbums.find((a) => a.id.toString() === params.id)
  if (!album) notFound()

  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Football", href: "/football" },
    { label: album.title, href: `/football/gallery/${params.id}` },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Breadcrumbs items={breadcrumbItems} />
        <div className="container mx-auto px-4 py-12 space-y-6">
          <h1 className="font-heading text-3xl font-bold">{album.title}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {album.photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`${album.title} ${index + 1}`}
                className="w-full h-48 object-cover rounded-md"
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
