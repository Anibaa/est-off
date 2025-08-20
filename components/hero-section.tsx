"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const heroSlides = [
  {
    id: 1,
    image: "/est-victory.png",
    title: "Espérance Sportive de Tunis",
    subtitle: "Un siècle de passion, de gloire et de légende",
    cta: "Découvrir notre histoire",
    ctaLink: "/siecle-de-legende",
  },
  {
    id: 2,
    image: "/caf-champions-league-trophy.png",
    title: "Champions d'Afrique",
    subtitle: "4 fois vainqueurs de la Ligue des Champions CAF",
    cta: "Voir le palmarès",
    ctaLink: "/club/palmares",
  },
  {
    id: 3,
    image: "/tunisia-championship-trophy.png",
    title: "Rois de Tunisie",
    subtitle: "32 titres de champion national",
    cta: "Actualités football",
    ctaLink: "/football",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden bg-gradient-to-r from-est-rouge/90 to-est-rouge/70">
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 bg-est-rouge text-est-jaune px-4 py-1 rounded-full text-sm font-bold shadow">
        Taraji Ya Dawla • <span dir="rtl" className="mx-1">نحن الترجي</span>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroSlides[currentSlide].image})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-heading text-4xl md:text-6xl font-bold mb-4"
          >
            {heroSlides[currentSlide].title}
          </motion.h1>
          <motion.p
            key={`subtitle-${currentSlide}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            {heroSlides[currentSlide].subtitle}
          </motion.p>
          <motion.div
            key={`cta-${currentSlide}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button size="lg" className="bg-est-jaune text-black hover:bg-est-jaune/90 font-semibold">
              <Play className="mr-2 h-4 w-4" />
              {heroSlides[currentSlide].cta}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-est-jaune" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
