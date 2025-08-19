"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Star, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "@/lib/i18n"
import { recentTrophies } from "@/lib/mock-data"

export function PalmaresPreview() {
  const { t } = useTranslation()
  const achievements = [
    { icon: Trophy, label: t("palmares.achievements.nationalChampionships"), count: 32 },
    { icon: Star, label: t("palmares.achievements.tunisiaCups"), count: 16 },
    { icon: Award, label: t("palmares.achievements.continentalTitles"), count: 4 },
  ]

  return (
    <section className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="font-heading text-3xl font-bold">{t("palmares.title")}</h2>
        <p className="text-muted-foreground">{t("palmares.subtitle")}</p>
      </div>

      {/* Achievement stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <Card key={achievement.label} className="text-center border-est-rouge/20">
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="mx-auto w-12 h-12 bg-est-rouge/10 rounded-full flex items-center justify-center">
                  <achievement.icon className="h-6 w-6 text-est-rouge" />
                </div>
                <div className="text-3xl font-bold text-est-rouge">{achievement.count}</div>
                <div className="text-sm font-medium">{achievement.label}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent trophies */}
      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-est-rouge/10 to-est-jaune/10">
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-est-rouge" />
            {t("palmares.recentTrophies")}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {recentTrophies.map((trophy) => (
              <div key={trophy.id} className="text-center space-y-3">
                <Image
                  src={trophy.image || "/placeholder.svg"}
                  alt={trophy.title}
                  width={80}
                  height={80}
                  className="w-20 h-20 mx-auto object-contain"
                />
                <div>
                  <div className="font-semibold text-est-rouge">{trophy.title}</div>
                  <div className="text-2xl font-bold">{trophy.year}</div>
                  <div className="text-sm text-muted-foreground">{trophy.description}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button
              asChild
              variant="outline"
              className="border-est-rouge text-est-rouge hover:bg-est-rouge hover:text-white bg-transparent"
            >
              <Link href="/palmares/tous">{t("palmares.viewAll")}</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
