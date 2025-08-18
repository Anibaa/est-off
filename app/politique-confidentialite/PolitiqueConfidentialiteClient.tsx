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

export default function PolitiqueConfidentialiteClient() {
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
                  { label: "Politique de Confidentialité", href: "/politique-confidentialite" },
                ]}
              />

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-8"
              >
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
                  Politique de Confidentialité
                </h1>

                <div className="prose prose-lg max-w-none">
                  <motion.section variants={fadeInUp} className="mb-8">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      L'Espérance Sportive de Tunis s'engage à protéger la confidentialité de vos données personnelles.
                      Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
                    </p>
                  </motion.section>

                  <motion.section variants={fadeInUp} className="mb-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">1. Collecte des données</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Nous collectons les données personnelles que vous nous fournissez volontairement lorsque vous :
                    </p>
                    <ul className="text-muted-foreground mt-4 space-y-2">
                      <li>• Vous inscrivez à notre newsletter</li>
                      <li>• Nous contactez via le formulaire de contact</li>
                      <li>• Créez un compte sur notre site</li>
                      <li>• Participez à nos concours ou événements</li>
                    </ul>
                  </motion.section>

                  <motion.section variants={fadeInUp} className="mb-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">2. Types de données collectées</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Les données que nous pouvons collecter incluent :
                    </p>
                    <ul className="text-muted-foreground mt-4 space-y-2">
                      <li>• Nom et prénom</li>
                      <li>• Adresse email</li>
                      <li>• Numéro de téléphone</li>
                      <li>• Adresse postale</li>
                      <li>• Préférences et centres d'intérêt</li>
                      <li>• Données de navigation (cookies, adresse IP)</li>
                    </ul>
                  </motion.section>

                  <motion.section variants={fadeInUp} className="mb-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">3. Utilisation des données</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Nous utilisons vos données personnelles pour :
                    </p>
                    <ul className="text-muted-foreground mt-4 space-y-2">
                      <li>• Vous envoyer notre newsletter et nos actualités</li>
                      <li>• Répondre à vos demandes et questions</li>
                      <li>• Améliorer nos services et notre site web</li>
                      <li>• Vous informer de nos événements et activités</li>
                      <li>• Respecter nos obligations légales</li>
                    </ul>
                  </motion.section>

                  <motion.section variants={fadeInUp} className="mb-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">4. Partage des données</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers, sauf dans les
                      cas suivants :
                    </p>
                    <ul className="text-muted-foreground mt-4 space-y-2">
                      <li>• Avec votre consentement explicite</li>
                      <li>• Pour respecter une obligation légale</li>
                      <li>• Avec nos prestataires de services (sous contrat de confidentialité)</li>
                      <li>• En cas de fusion ou acquisition du club</li>
                    </ul>
                  </motion.section>

                  <motion.section variants={fadeInUp} className="mb-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">5. Sécurité des données</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos
                      données personnelles contre :
                    </p>
                    <ul className="text-muted-foreground mt-4 space-y-2">
                      <li>• L'accès non autorisé</li>
                      <li>• La modification non autorisée</li>
                      <li>• La divulgation non autorisée</li>
                      <li>• La destruction accidentelle</li>
                    </ul>
                  </motion.section>

                  <motion.section variants={fadeInUp} className="mb-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">6. Vos droits</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Conformément à la législation en vigueur, vous disposez des droits suivants :
                    </p>
                    <ul className="text-muted-foreground mt-4 space-y-2">
                      <li>• Droit d'accès à vos données</li>
                      <li>• Droit de rectification</li>
                      <li>• Droit d'effacement</li>
                      <li>• Droit à la portabilité</li>
                      <li>• Droit d'opposition</li>
                      <li>• Droit de limitation du traitement</li>
                    </ul>
                    <p className="text-muted-foreground mt-4">
                      Pour exercer ces droits, contactez-nous à : contact@est.org.tn
                    </p>
                  </motion.section>

                  <motion.section variants={fadeInUp} className="mb-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookies</h2>
                    <p className="text-muted-foreground leading-relaxed">Notre site utilise des cookies pour :</p>
                    <ul className="text-muted-foreground mt-4 space-y-2">
                      <li>• Améliorer votre expérience de navigation</li>
                      <li>• Analyser le trafic du site</li>
                      <li>• Personnaliser le contenu</li>
                      <li>• Mémoriser vos préférences</li>
                    </ul>
                    <p className="text-muted-foreground mt-4">
                      Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.
                    </p>
                  </motion.section>

                  <motion.section variants={fadeInUp} className="mb-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">8. Conservation des données</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités pour
                      lesquelles elles ont été collectées, ou selon les exigences légales applicables.
                    </p>
                  </motion.section>

                  <motion.section variants={fadeInUp} className="mb-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">9. Modifications</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Cette politique de confidentialité peut être modifiée à tout moment. Les modifications seront
                      publiées sur cette page avec la date de mise à jour.
                    </p>
                  </motion.section>

                  <motion.section variants={fadeInUp}>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Pour toute question concernant cette politique de confidentialité :
                    </p>
                    <ul className="text-muted-foreground mt-4 space-y-2">
                      <li>Email : contact@est.org.tn</li>
                      <li>Téléphone : +216 71 123 456</li>
                      <li>Adresse : Avenue Habib Bourguiba, Tunis 1000, Tunisie</li>
                    </ul>
                    <p className="text-muted-foreground mt-4 text-sm">Dernière mise à jour : Décembre 2024</p>
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
