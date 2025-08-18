"use client"
import { useState } from "react"
import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubscribed(true)
    setIsLoading(false)
    setEmail("")
  }

  if (isSubscribed) {
    return (
      <Card className="bg-gradient-to-r from-est-rouge to-est-rouge/80 text-white">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-12 w-12 mx-auto mb-4 text-est-jaune" />
          <h3 className="font-heading text-2xl font-bold mb-2">Merci pour votre inscription!</h3>
          <p className="text-white/90">Vous recevrez bientôt nos dernières actualités dans votre boîte mail.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-gradient-to-r from-est-rouge to-est-rouge/80 text-white">
      <CardContent className="p-8">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mail className="h-8 w-8 text-est-jaune" />
            </div>
            <h3 className="font-heading text-2xl font-bold">Newsletter EST</h3>
            <p className="text-white/90">Restez informé des dernières actualités, matchs et événements du club</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70"
              required
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-est-jaune text-black hover:bg-est-jaune/90 font-semibold"
            >
              {isLoading ? "Inscription..." : "S'abonner"}
            </Button>
          </form>

          <p className="text-xs text-white/70">
            En vous inscrivant, vous acceptez de recevoir nos communications par email. Vous pouvez vous désabonner à
            tout moment.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
