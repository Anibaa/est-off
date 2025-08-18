import type { Metadata } from "next"
import PartenairesPageClient from "./PartenairesPageClient"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Nos Partenaires - Espérance Sportive de Tunis",
  description: "Découvrez les partenaires et sponsors qui soutiennent l'Espérance Sportive de Tunis.",
}

export default function PartenairesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PartenairesPageClient />
      <Footer />
    </div>
  )
}
