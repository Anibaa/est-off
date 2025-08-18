"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Search, Users, CreditCard, Ticket, Trophy, HelpCircle } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

const faqData = [
  {
    id: 1,
    category: "Billetterie",
    icon: Ticket,
    questions: [
      {
        question: "Comment acheter des billets pour les matchs ?",
        answer:
          "Vous pouvez acheter vos billets directement sur notre site web dans la section Billetterie, ou aux guichets du stade le jour du match (sous réserve de disponibilité).",
      },
      {
        question: "Puis-je annuler ou échanger mon billet ?",
        answer:
          "Les billets ne sont ni échangeables ni remboursables, sauf en cas d'annulation officielle du match par le club.",
      },
      {
        question: "Y a-t-il des tarifs réduits ?",
        answer:
          "Oui, nous proposons des tarifs réduits pour les enfants de moins de 12 ans, les étudiants et les personnes âgées de plus de 65 ans sur présentation d'un justificatif.",
      },
    ],
  },
  {
    id: 2,
    category: "Supporters Club",
    icon: Users,
    questions: [
      {
        question: "Comment adhérer au Supporters Club ?",
        answer:
          "L'adhésion se fait en ligne via notre formulaire d'inscription ou directement au siège du club. La cotisation annuelle est de 50 DT.",
      },
      {
        question: "Quels sont les avantages du Supporters Club ?",
        answer:
          "Les membres bénéficient de réductions sur les billets, d'un accès prioritaire aux événements, de produits dérivés exclusifs et d'une newsletter mensuelle.",
      },
      {
        question: "Puis-je offrir une adhésion ?",
        answer:
          "Oui, vous pouvez offrir une adhésion en contactant notre service membres. Nous proposons des cartes cadeaux d'adhésion.",
      },
    ],
  },
  {
    id: 3,
    category: "Matchs & Compétitions",
    icon: Trophy,
    questions: [
      {
        question: "Où puis-je consulter le calendrier des matchs ?",
        answer:
          "Le calendrier complet est disponible dans les sections Football, Volleyball et Handball de notre site web, ainsi que sur nos réseaux sociaux.",
      },
      {
        question: "Comment être informé des changements d'horaires ?",
        answer:
          "Abonnez-vous à notre newsletter et suivez-nous sur les réseaux sociaux. Les changements sont également affichés sur le site web.",
      },
      {
        question: "Puis-je assister aux entraînements ?",
        answer:
          "Les entraînements ne sont généralement pas ouverts au public, sauf lors de séances spéciales annoncées à l'avance.",
      },
    ],
  },
  {
    id: 4,
    category: "Général",
    icon: HelpCircle,
    questions: [
      {
        question: "Comment contacter le club ?",
        answer:
          "Vous pouvez nous contacter via le formulaire de contact sur le site, par email à contact@est.tn, ou par téléphone au +216 71 XXX XXX.",
      },
      {
        question: "Où acheter les produits dérivés ?",
        answer:
          "Les produits officiels sont disponibles à la boutique du stade, en ligne sur notre site partenaire, et dans les magasins agréés.",
      },
      {
        question: "Comment proposer un partenariat ?",
        answer: "Contactez notre service commercial à partenariats@est.tn avec votre proposition détaillée.",
      },
    ],
  },
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const filteredFAQ = faqData
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "FAQ", href: "/faq" },
          ]}
        />

        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="font-heading text-4xl font-bold text-est-rouge">Questions Fréquentes</h1>
            <p className="text-muted-foreground text-lg">Trouvez rapidement les réponses à vos questions</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher une question..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="grid gap-8">
            {filteredFAQ.map((category) => (
              <Card key={category.id} className="overflow-hidden">
                <div className="bg-gradient-to-r from-est-rouge/10 to-est-jaune/10 p-6">
                  <div className="flex items-center gap-3">
                    <category.icon className="h-6 w-6 text-est-rouge" />
                    <h2 className="text-2xl font-bold">{category.category}</h2>
                  </div>
                </div>
                <CardContent className="p-0">
                  <div className="space-y-0">
                    {category.questions.map((item, index) => (
                      <Collapsible
                        key={index}
                        open={openItems.includes(`${category.id}-${index}`)}
                        onOpenChange={() => toggleItem(`${category.id}-${index}`)}
                      >
                        <CollapsibleTrigger className="w-full p-6 text-left hover:bg-muted/30 transition-colors border-b last:border-b-0">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-lg pr-4">{item.question}</h3>
                            <ChevronDown
                              className={`h-5 w-5 text-est-rouge transition-transform ${
                                openItems.includes(`${category.id}-${index}`) ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-6 pb-6">
                          <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Supporters Club Section */}
          <Card className="bg-gradient-to-r from-est-rouge/5 to-est-jaune/5">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-est-rouge mb-4">Rejoignez le Supporters Club</h2>
                    <p className="text-muted-foreground text-lg">
                      Devenez membre officiel de la famille EST et profitez d'avantages exclusifs
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-est-rouge rounded-full mt-2" />
                      <div>
                        <h3 className="font-semibold">Réductions exclusives</h3>
                        <p className="text-sm text-muted-foreground">
                          Jusqu'à 20% de réduction sur les billets et produits dérivés
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-est-rouge rounded-full mt-2" />
                      <div>
                        <h3 className="font-semibold">Accès prioritaire</h3>
                        <p className="text-sm text-muted-foreground">
                          Réservation prioritaire pour les matchs importants
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-est-rouge rounded-full mt-2" />
                      <div>
                        <h3 className="font-semibold">Contenu exclusif</h3>
                        <p className="text-sm text-muted-foreground">
                          Newsletter mensuelle et contenus réservés aux membres
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-est-rouge mb-2">50 DT/an</div>
                    <Button size="lg" className="bg-est-rouge hover:bg-est-rouge/90">
                      <Users className="h-5 w-5 mr-2" />
                      Adhérer maintenant
                    </Button>
                  </div>
                </div>

                <Card className="bg-background">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Formulaire d'adhésion</h3>
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <Input placeholder="Prénom" />
                        <Input placeholder="Nom" />
                      </div>
                      <Input placeholder="Email" type="email" />
                      <Input placeholder="Téléphone" />
                      <Textarea placeholder="Message (optionnel)" rows={3} />
                      <Button className="w-full bg-est-rouge hover:bg-est-rouge/90">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Procéder au paiement
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
