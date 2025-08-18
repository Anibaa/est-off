"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Star, Award, Handshake } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { sponsors } from "@/lib/mock-data"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const getCategoryInfo = (category: string) => {
  switch (category) {
    case "principal":
      return {
        title: "Partenaire Principal",
        icon: Star,
        color: "text-est-rouge",
        bgColor: "bg-est-rouge/10",
        borderColor: "border-est-rouge/20",
      }
    case "officiel":
      return {
        title: "Partenaire Officiel",
        icon: Award,
        color: "text-est-jaune",
        bgColor: "bg-est-jaune/10",
        borderColor: "border-est-jaune/20",
      }
    default:
      return {
        title: "Partenaire",
        icon: Handshake,
        color: "text-muted-foreground",
        bgColor: "bg-muted/10",
        borderColor: "border-muted/20",
      }
  }
}

export default function PartenairesPageClient() {
  const principalSponsors = sponsors.filter((s) => s.category === "principal")
  const officialSponsors = sponsors.filter((s) => s.category === "officiel")
  const partners = sponsors.filter((s) => s.category === "partenaire")

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-est-rouge to-est-jaune">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Nos Partenaires</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Découvrez les entreprises qui accompagnent l'EST dans sa quête d'excellence et partagent nos valeurs de
              passion et de dépassement.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Le Club", href: "/club" },
            { label: "Nos Partenaires", href: "/club/partenaires" },
          ]}
        />
      </div>

      {/* Principal Partners */}
      {principalSponsors.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-serif font-bold text-center text-foreground mb-12"
              >
                Partenaires Principaux
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {principalSponsors.map((sponsor) => {
                  const categoryInfo = getCategoryInfo(sponsor.category)
                  const Icon = categoryInfo.icon

                  return (
                    <motion.div key={sponsor.id} variants={fadeInUp}>
                      <Card className={`h-full ${categoryInfo.borderColor} border-2`}>
                        <CardContent className="p-8 text-center">
                          <div
                            className={`inline-flex items-center px-3 py-1 rounded-full ${categoryInfo.bgColor} mb-6`}
                          >
                            <Icon className={`h-4 w-4 ${categoryInfo.color} mr-2`} />
                            <span className={`text-sm font-medium ${categoryInfo.color}`}>{categoryInfo.title}</span>
                          </div>

                          <div className="relative h-24 mb-6">
                            <Image
                              src={sponsor.logo || "/placeholder.svg"}
                              alt={sponsor.name}
                              fill
                              className="object-contain"
                            />
                          </div>

                          <h3 className="text-2xl font-semibold mb-4">{sponsor.name}</h3>

                          {sponsor.website && (
                            <Button asChild variant="outline" size="sm">
                              <Link href={sponsor.website} target="_blank" rel="noopener noreferrer">
                                Visiter le site
                                <ExternalLink className="h-4 w-4 ml-2" />
                              </Link>
                            </Button>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Official Partners */}
      {officialSponsors.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-serif font-bold text-center text-foreground mb-12"
              >
                Partenaires Officiels
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {officialSponsors.map((sponsor) => {
                  const categoryInfo = getCategoryInfo(sponsor.category)
                  const Icon = categoryInfo.icon

                  return (
                    <motion.div key={sponsor.id} variants={fadeInUp}>
                      <Card className={`h-full ${categoryInfo.borderColor}`}>
                        <CardContent className="p-6 text-center">
                          <div
                            className={`inline-flex items-center px-2 py-1 rounded-full ${categoryInfo.bgColor} mb-4`}
                          >
                            <Icon className={`h-3 w-3 ${categoryInfo.color} mr-1`} />
                            <span className={`text-xs font-medium ${categoryInfo.color}`}>{categoryInfo.title}</span>
                          </div>

                          <div className="relative h-16 mb-4">
                            <Image
                              src={sponsor.logo || "/placeholder.svg"}
                              alt={sponsor.name}
                              fill
                              className="object-contain"
                            />
                          </div>

                          <h3 className="text-lg font-semibold mb-3">{sponsor.name}</h3>

                          {sponsor.website && (
                            <Button asChild variant="outline" size="sm">
                              <Link href={sponsor.website} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-3 w-3 mr-1" />
                                Site web
                              </Link>
                            </Button>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Partners */}
      {partners.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-serif font-bold text-center text-foreground mb-12"
              >
                Partenaires
              </motion.h2>

              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {partners.map((sponsor) => {
                  const categoryInfo = getCategoryInfo(sponsor.category)

                  return (
                    <motion.div key={sponsor.id} variants={fadeInUp}>
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardContent className="p-6 text-center">
                          <div className="relative h-12 mb-4">
                            <Image
                              src={sponsor.logo || "/placeholder.svg"}
                              alt={sponsor.name}
                              fill
                              className="object-contain"
                            />
                          </div>

                          <h3 className="text-sm font-semibold mb-2">{sponsor.name}</h3>

                          {sponsor.website && (
                            <Button asChild variant="ghost" size="sm">
                              <Link href={sponsor.website} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-3 w-3" />
                              </Link>
                            </Button>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Partnership CTA */}
      <section className="py-16 bg-gradient-to-r from-est-rouge/10 to-est-jaune/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">Devenez Partenaire de l'EST</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Rejoignez les entreprises qui font confiance à l'Espérance Sportive de Tunis et bénéficiez d'une
              visibilité exceptionnelle auprès de millions de supporters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-est-rouge hover:bg-est-rouge/90">
                <Link href="/club/contact">Nous Contacter</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="mailto:partenariats@est.org.tn">partenariats@est.org.tn</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
