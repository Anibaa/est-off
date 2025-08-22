"use client"

import { motion } from "framer-motion"

/**
 * IdentityStrip renders a thin animated banner used to separate content blocks.
 *
 * Use `variant="primary"` for the classic red-yellow-red gradient and `variant="secondary"`
 * for the alternate yellow-red-yellow look. Both variants scroll horizontally and display
 * the club motto in the center.
 */
export function IdentityStrip({
  variant = "primary",
}: {
  /**
   * Visual style of the strip. "primary" uses red-yellow-red gradient and taller height,
   * while "secondary" swaps the colors and reduces the height for subtle separation.
   */
  variant?: "primary" | "secondary"
}) {
  const variants = {
    primary: {
      wrapper: "h-8",
      gradient: "bg-gradient-to-r from-est-rouge via-est-jaune to-est-rouge",
    },
    secondary: {
      wrapper: "h-6",
      gradient: "bg-gradient-to-r from-est-jaune via-est-rouge to-est-jaune",
    },
  }

  const { wrapper, gradient } = variants[variant]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative left-1/2 -translate-x-1/2 w-screen overflow-hidden ${wrapper}`}
    >
      <div
        className={`absolute inset-0 bg-[length:200%_100%] ${gradient} animate-banner`}
      />
      <p className="relative z-10 h-full flex items-center justify-center text-xs sm:text-sm md:text-base font-heading font-extrabold tracking-widest uppercase text-white drop-shadow">
        Taraji Ya Dawla – <span dir="rtl" className="mx-1">نحن الترجي</span>
      </p>
    </motion.div>
  )
}
