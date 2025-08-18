"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Users, Building } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { clubInfo } from "@/lib/mock-data"

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

export default function ContactPageClient() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-est-rouge to-est-jaune">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Nous Contacter</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              L'Espérance Sportive de Tunis est à votre écoute. N'hésitez pas à nous contacter pour toute information.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Le Club", href: "/club" },
            { label: "Contact", href: "/club/contact" },
          ]}
        />
      </div>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12"
          >
            {/* Contact Details */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Informations de Contact</h2>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-est-rouge mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Adresse</h3>
                        <p className="text-muted-foreground">{clubInfo.address}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-est-jaune mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Téléphone</h3>
                        <p className="text-muted-foreground">{clubInfo.phone}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-est-rouge mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Email</h3>
                        <p className="text-muted-foreground">{clubInfo.email}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-est-jaune mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Horaires d'ouverture</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p>Lundi - Vendredi: 9h00 - 17h00</p>
                          <p>Samedi: 9h00 - 13h00</p>
                          <p>Dimanche: Fermé</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Envoyez-nous un Message</h2>

              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                          Prénom *
                        </label>
                        <Input id="firstName" placeholder="Votre prénom" required />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                          Nom *
                        </label>
                        <Input id="lastName" placeholder="Votre nom" required />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input id="email" type="email" placeholder="votre@email.com" required />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Téléphone
                      </label>
                      <Input id="phone" type="tel" placeholder="Votre numéro de téléphone" />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Sujet *
                      </label>
                      <Input id="subject" placeholder="Objet de votre message" required />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea id="message" placeholder="Votre message..." rows={6} required />
                    </div>

                    <Button type="submit" className="w-full bg-est-rouge hover:bg-est-rouge/90">
                      Envoyer le Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.h2 variants={fadeInUp} className="text-3xl font-serif font-bold text-center text-foreground mb-12">
              Départements Spécialisés
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp}>
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <Users className="h-12 w-12 text-est-rouge mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Relations Supporters</h3>
                    <p className="text-muted-foreground mb-4">
                      Pour toutes questions relatives aux supporters et aux abonnements.
                    </p>
                    <p className="text-sm font-medium">supporters@est.org.tn</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <Building className="h-12 w-12 text-est-jaune mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Partenariats</h3>
                    <p className="text-muted-foreground mb-4">
                      Opportunités de partenariat et de sponsoring avec le club.
                    </p>
                    <p className="text-sm font-medium">partenariats@est.org.tn</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <Mail className="h-12 w-12 text-est-rouge mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Presse</h3>
                    <p className="text-muted-foreground mb-4">Demandes d'accréditation et relations avec les médias.</p>
                    <p className="text-sm font-medium">presse@est.org.tn</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
