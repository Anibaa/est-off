"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin, Users, Calendar, Ruler, GrapeIcon as Grass, Car, Shield, ShoppingBag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { stadiumInfo } from "@/lib/mock-data"

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

export default function StadeClientPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
          <Image src="/stade-rades-2000.png" alt="Stade Olympique de Radès" fill className="object-cover" priority />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">{stadiumInfo.name}</h1>
              <p className="text-xl md:text-2xl font-light leading-relaxed">
                Le temple du football tunisien depuis {stadiumInfo.opened}
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Le Club", href: "/club" },
              { label: "Notre Stade", href: "/club/stade" },
            ]}
          />
        </div>

        {/* Stadium Stats */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            >
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl font-bold text-est-rouge mb-2">{stadiumInfo.capacity.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Places</div>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl font-bold text-est-jaune mb-2">{stadiumInfo.opened}</div>
                <div className="text-sm text-muted-foreground">Inauguration</div>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl font-bold text-est-rouge mb-2">105m</div>
                <div className="text-sm text-muted-foreground">Longueur</div>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl font-bold text-est-jaune mb-2">68m</div>
                <div className="text-sm text-muted-foreground">Largeur</div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-4xl font-serif font-bold text-foreground mb-6">Histoire du Stade</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  {stadiumInfo.history.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-6 flex items-center">
                      <MapPin className="h-6 w-6 text-est-rouge mr-2" />
                      Informations Techniques
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Users className="h-5 w-5 text-muted-foreground mr-2" />
                          <span>Capacité</span>
                        </div>
                        <Badge variant="secondary">{stadiumInfo.capacity.toLocaleString()} places</Badge>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-muted-foreground mr-2" />
                          <span>Inauguration</span>
                        </div>
                        <Badge variant="secondary">{stadiumInfo.opened}</Badge>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Grass className="h-5 w-5 text-muted-foreground mr-2" />
                          <span>Surface</span>
                        </div>
                        <Badge variant="secondary">{stadiumInfo.surface}</Badge>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Ruler className="h-5 w-5 text-muted-foreground mr-2" />
                          <span>Dimensions</span>
                        </div>
                        <Badge variant="secondary">{stadiumInfo.dimensions}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-serif font-bold text-center text-foreground mb-12"
              >
                Équipements et Services
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stadiumInfo.facilities.map((facility, index) => {
                  const getIcon = (facility: string) => {
                    if (facility.includes("Parking")) return Car
                    if (facility.includes("VIP")) return Shield
                    if (facility.includes("Boutique")) return ShoppingBag
                    return Users
                  }

                  const Icon = getIcon(facility)

                  return (
                    <motion.div key={index} variants={fadeInUp}>
                      <Card className="h-full">
                        <CardContent className="p-6 text-center">
                          <Icon className="h-8 w-8 text-est-rouge mx-auto mb-3" />
                          <p className="text-sm font-medium">{facility}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Location */}
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
                Localisation
              </motion.h2>

              <motion.div variants={fadeInUp}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-est-rouge mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Adresse</h3>
                        <p className="text-muted-foreground mb-4">{stadiumInfo.address}</p>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            <strong>Accès en transport public:</strong> Métro ligne 6, station Radès
                          </p>
                          <p className="text-sm text-muted-foreground mt-2">
                            <strong>Parking:</strong> 5000 places disponibles autour du stade
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
