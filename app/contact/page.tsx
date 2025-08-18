import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact - Espérance Sportive de Tunis",
  description: "Contactez l'Espérance Sportive de Tunis. Toutes les informations pour nous joindre.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ContactPageClient />
      <Footer />
    </div>
  )
}
