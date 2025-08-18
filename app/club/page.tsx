import type { Metadata } from "next"
import ClubClientPage from "./ClubClientPage"

export const metadata: Metadata = {
  title: "Le Club - Espérance Sportive de Tunis",
  description:
    "Découvrez l'histoire, les valeurs et l'identité de l'Espérance Sportive de Tunis, le club le plus titré de Tunisie.",
}

export default function ClubPage() {
  return <ClubClientPage />
}
