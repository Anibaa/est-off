"use client"
import { motion } from "framer-motion"

export function TimelineHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] overflow-hidden bg-gradient-to-r from-est-rouge/90 to-est-rouge/70">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/est-centenary-celebration.png)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-4xl text-white">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-1 bg-est-jaune"></div>
              <span className="text-est-jaune font-semibold text-lg">1919 - 2024</span>
            </div>

            <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight">
              Un Siècle de
              <span className="block text-est-jaune">Légende</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl">
              105 ans d'histoire, de passion et de gloire. Découvrez les moments qui ont forgé la légende de l'Espérance
              Sportive de Tunis, du quartier de Bab Souika aux sommets du football africain.
            </p>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-est-jaune">32</div>
                <div className="text-sm text-gray-300">Titres nationaux</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-est-jaune">4</div>
                <div className="text-sm text-gray-300">Ligues des Champions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-est-jaune">105</div>
                <div className="text-sm text-gray-300">Années d'existence</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}
