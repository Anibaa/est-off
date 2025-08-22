"use client"

import { motion } from "framer-motion"

export function IdentityStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative left-1/2 -translate-x-1/2 w-screen h-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[length:200%_100%] bg-gradient-to-r from-est-rouge via-est-jaune to-est-rouge animate-banner" />
      <p className="relative z-10 h-full flex items-center justify-center text-xs sm:text-sm md:text-base font-heading font-extrabold tracking-widest uppercase text-white drop-shadow">
        Taraji Ya Dawla – <span dir="rtl" className="mx-1">نحن الترجي</span>
      </p>
    </motion.div>
  )
}
