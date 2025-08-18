"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Share, ExternalLink } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "@/lib/i18n"

const socialPosts = [
  {
    id: 1,
    platform: "Facebook",
    content:
      "🔴🟡 Victoire éclatante de nos Sang et Or ! 3-0 face au Club Africain dans le derby de la capitale. Nos joueurs ont montré un football spectaculaire !",
    image: "/football-training-session.png",
    likes: 2847,
    comments: 156,
    shares: 89,
    timestamp: "Il y a 2 heures",
    url: "https://facebook.com/esperancetunis",
  },
  {
    id: 2,
    platform: "Instagram",
    content: "Training session intense avant le match de demain 💪 Nos guerriers sont prêts ! #EST #SangEtOr",
    image: "/est-women-handball-celebration.png",
    likes: 1923,
    comments: 78,
    shares: 45,
    timestamp: "Il y a 5 heures",
    url: "https://instagram.com/esperancetunis",
  },
  {
    id: 3,
    platform: "Twitter",
    content:
      "🏆 HISTORIQUE ! L'EST remporte sa 32ème Coupe de Tunisie ! Félicitations à nos héros ! 🔴🟡 #EST #CoupeDeTunisie",
    image: "/est-volleyball-team.png",
    likes: 3456,
    comments: 234,
    shares: 167,
    timestamp: "Il y a 1 jour",
    url: "https://twitter.com/esperancetunis",
  },
]

export function SocialMediaPosts() {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold font-heading mb-4 bg-gradient-to-r from-est-rouge to-est-jaune bg-clip-text text-transparent">
            {t("socialMedia.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("socialMedia.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-est-rouge/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt="Social media post"
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-est-rouge text-white" variant="secondary">
                      {post.platform}
                    </Badge>
                  </div>

                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-3">{post.timestamp}</p>
                    <p className="text-foreground mb-4 line-clamp-3">{post.content}</p>

                    <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {post.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          {post.comments}
                        </span>
                        <span className="flex items-center gap-1">
                          <Share className="h-4 w-4" />
                          {post.shares}
                        </span>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-est-rouge group-hover:text-white transition-colors bg-transparent"
                      asChild
                    >
                      <a href={post.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Voir le post
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="hover:bg-[#1877f2] hover:text-white transition-colors bg-transparent"
            >
              <a href="https://facebook.com/esperancetunis" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="hover:bg-[#E4405F] hover:text-white transition-colors bg-transparent"
            >
              <a href="https://instagram.com/esperancetunis" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="hover:bg-[#1DA1F2] hover:text-white transition-colors bg-transparent"
            >
              <a href="https://twitter.com/esperancetunis" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="hover:bg-[#FF0000] hover:text-white transition-colors bg-transparent"
            >
              <a href="https://youtube.com/esperancetunis" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
