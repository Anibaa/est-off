import type { Metadata } from "next"
import StadeClientPage from "./StadeClientPage"

export const metadata: Metadata = {
  title: "Notre Stade - Espérance Sportive de Tunis",
  description:
    "Découvrez le Stade Olympique de Radès, temple du football tunisien et domicile de l'Espérance Sportive de Tunis.",
}

export default function StadePage() {
  return <StadeClientPage />
}
