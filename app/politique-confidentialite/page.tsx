import type { Metadata } from "next"
import PolitiqueConfidentialiteClient from "./PolitiqueConfidentialiteClient"

export const metadata: Metadata = {
  title: "Politique de Confidentialité - Espérance Sportive de Tunis",
  description: "Politique de confidentialité du site officiel de l'Espérance Sportive de Tunis.",
}

export default function PolitiqueConfidentialitePage() {
  return <PolitiqueConfidentialiteClient />
}
