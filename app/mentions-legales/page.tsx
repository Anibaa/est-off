import type { Metadata } from "next"
import MentionsLegalesClient from "./MentionsLegalesClient"

export const metadata: Metadata = {
  title: "Mentions Légales - Espérance Sportive de Tunis",
  description: "Mentions légales du site officiel de l'Espérance Sportive de Tunis.",
}

export default function MentionsLegalesPage() {
  return <MentionsLegalesClient />
}
