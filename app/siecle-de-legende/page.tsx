import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { TimelineHero } from "@/components/timeline-hero"
import { InteractiveTimeline } from "@/components/interactive-timeline"
import { timelineEvents } from "@/lib/mock-data"

export default function SiecleDeLegende() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Siècle de Légende", href: "/siecle-de-legende" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Breadcrumbs items={breadcrumbItems} />
        <TimelineHero />
        <div className="container mx-auto px-4 py-12">
          <InteractiveTimeline events={timelineEvents} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
