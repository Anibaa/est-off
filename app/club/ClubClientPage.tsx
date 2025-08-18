"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, MapPin, Users, Trophy, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { clubInfo, stadiumInfo } from "@/lib/mock-data"

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

export default function ClubClientPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-est-rouge/90 to-est-jaune/90" />
          <Image src="/stade-rades-2000.png" alt="Stade Olympique de Radès" fill className="object-cover" priority />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Le Club</h1>
              <p className="text-xl md:text-2xl font-light leading-relaxed">
                Plus qu'un club, une légende vivante depuis 1919
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Le Club", href: "/club" },
            ]}
          />
        </div>

        {/* Club Identity */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-4xl font-serif font-bold text-foreground mb-6">L'Identité Esperantiste</h2>
                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    Fondée le 15 janvier 1919 dans le quartier populaire de Bab Souika à Tunis, l'Espérance Sportive de
                    Tunis incarne depuis plus d'un siècle les valeurs d'excellence, de passion et de fierté nationale.
                  </p>
                  <p>
                    Avec ses couleurs emblématiques rouge et jaune, l'EST a su conquérir le cœur de millions de
                    supporters à travers l'Afrique et devenir une véritable institution du football continental.
                  </p>
                  <p>
                    Au-delà du football, l'EST développe également d'autres disciplines sportives comme le volleyball et
                    le handball, perpétuant sa tradition d'excellence dans tous les domaines.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <Card className="border-est-rouge/20">
                    <CardContent className="p-6 text-center">
                      <Calendar className="h-8 w-8 text-est-rouge mx-auto mb-3" />
                      <div className="text-2xl font-bold text-foreground">{clubInfo.founded}</div>
                      <div className="text-sm text-muted-foreground">Année de fondation</div>
                    </CardContent>
                  </Card>

                  <Card className="border-est-jaune/20">
                    <CardContent className="p-6 text-center">
                      <Trophy className="h-8 w-8 text-est-jaune mx-auto mb-3" />
                      <div className="text-2xl font-bold text-foreground">32</div>
                      <div className="text-sm text-muted-foreground">Titres nationaux</div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative">
                <div className="relative h-[500px] rounded-2xl overflow-hidden">
                  <Image src="/est-foundation-1919.png" alt="Histoire de l'EST" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-est-rouge text-white p-6 rounded-2xl">
                  <div className="text-3xl font-bold">105</div>
                  <div className="text-sm">Ans d'histoire</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl font-bold text-est-rouge mb-2">4</div>
                <div className="text-sm text-muted-foreground">Ligues des Champions CAF</div>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl font-bold text-est-jaune mb-2">32</div>
                <div className="text-sm text-muted-foreground">Championnats nationaux</div>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl font-bold text-est-rouge mb-2">16</div>
                <div className="text-sm text-muted-foreground">Coupes de Tunisie</div>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl font-bold text-est-jaune mb-2">65K</div>
                <div className="text-sm text-muted-foreground">Capacité du stade</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Club Information */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-serif font-bold text-center text-foreground mb-12"
              >
                Informations du Club
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Users className="h-5 w-5 text-est-rouge mr-2" />
                        Direction
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Président:</span>
                          <span className="font-medium">{clubInfo.president}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Entraîneur:</span>
                          <span className="font-medium">{clubInfo.coach}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Fondation:</span>
                          <span className="font-medium">{clubInfo.founded}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <MapPin className="h-5 w-5 text-est-jaune mr-2" />
                        Stade
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Nom:</span>
                          <span className="font-medium">{clubInfo.stadium}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Capacité:</span>
                          <span className="font-medium">{clubInfo.capacity.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Ouverture:</span>
                          <span className="font-medium">{stadiumInfo.opened}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-serif font-bold text-center text-foreground mb-12"
              >
                Découvrir le Club
              </motion.h2>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div variants={fadeInUp}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <MapPin className="h-12 w-12 text-est-rouge mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Notre Stade</h3>
                      <p className="text-muted-foreground mb-4">
                        Découvrez le Stade Olympique de Radès, temple du football tunisien.
                      </p>
                      <Button asChild variant="outline">
                        <Link href="/club/stade">En savoir plus</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <Users className="h-12 w-12 text-est-jaune mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Nous Contacter</h3>
                      <p className="text-muted-foreground mb-4">
                        Toutes les informations pour entrer en contact avec le club.
                      </p>
                      <Button asChild variant="outline">
                        <Link href="/club/contact">Contactez-nous</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <Star className="h-12 w-12 text-est-rouge mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Nos Partenaires</h3>
                      <p className="text-muted-foreground mb-4">Découvrez les entreprises qui soutiennent l'EST.</p>
                      <Button asChild variant="outline">
                        <Link href="/club/partenaires">Voir les partenaires</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
