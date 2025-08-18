"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function MentionsLegalesClient() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Breadcrumbs
                items={[
                  { label: "Accueil", href: "/" },
                  { label: "Mentions Légales", href: "/mentions-legales" },
                ]}
              />

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-8"
              >
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">Mentions Légales</h1>

                <div className="prose prose-lg max-w-none">
                  <motion.section variants={fadeInUp} className="mb-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">1. Informations légales</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Le présent site web est édité par l'Espérance Sportive de Tunis, association sportive tunisienne
                      fondée en 1919, dont le siège social est situé Avenue Habib Bourguiba, Tunis 1000, Tunisie.
                    </p>
                    <ul className="text-muted-foreground mt-4 space-y-2">
                      <li>
                        <strong>Président :</strong> Hamdi Meddeb
                      </li>
                      <li>
                        <strong>Téléphone :</strong> +216 71 123 456
                      </li>
                      <li>
                        <strong>Email :</strong> contact@est.org.tn
                      </li>
                      <li>
                        <strong>Site web :</strong> www.est.org.tn
                      </li>
                    </ul>
                  </motion.section>

                  <motion.section variants={fadeInUp} className="mb-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">2. Hébergement</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Le site est hébergé par Vercel Inc., dont le siège social est situé à San Francisco, Californie,
                      États-Unis.
                    </p>
                  </motion.section>

                  <motion.section variants={fadeInUp} className="mb-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">3. Propriété intellectuelle</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      L'ensemble des contenus présents sur ce site (textes, images, vidéos, logos, etc.) sont la
                      propriété exclusive de l'Espérance Sportive de Tunis ou font l'objet d'une autorisation
                      d'utilisation. Toute reproduction, représentation, modification, publication, adaptation de tout
                      ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf
                      autorisation écrite préalable.
                    </p>
                  </motion.section>

                  <motion.section variants={fadeInUp} className="mb-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">4. Responsabilité</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      L'Espérance Sportive de Tunis s'efforce de fournir sur le site des informations aussi précises que
                      possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des
                      carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui
                      fournissent ces informations.
                    </p>
                  </motion.section>

                  <motion.section variants={fadeInUp} className="mb-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">5. Liens hypertextes</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Le site peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet.
                      L'Espérance Sportive de Tunis ne saurait être responsable du contenu de ces sites externes.
                    </p>
                  </motion.section>

                  <motion.section variants={fadeInUp} className="mb-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">6. Données personnelles</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Conformément à la loi tunisienne relative à la protection des données personnelles, vous disposez
                      d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour exercer
                      ce droit, contactez-nous à l'adresse : contact@est.org.tn
                    </p>
                  </motion.section>

                  <motion.section variants={fadeInUp} className="mb-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookies</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Le site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. En
                      continuant à naviguer sur le site, vous acceptez l'utilisation de ces cookies.
                    </p>
                  </motion.section>

                  <motion.section variants={fadeInUp} className="mb-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">8. Droit applicable</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Les présentes mentions légales sont régies par le droit tunisien. En cas de litige, les tribunaux
                      tunisiens seront seuls compétents.
                    </p>
                  </motion.section>

                  <motion.section variants={fadeInUp}>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
                    </p>
                    <ul className="text-muted-foreground mt-4 space-y-2">
                      <li>Par email : contact@est.org.tn</li>
                      <li>Par téléphone : +216 71 123 456</li>
                      <li>Par courrier : Avenue Habib Bourguiba, Tunis 1000, Tunisie</li>
                    </ul>
                  </motion.section>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
