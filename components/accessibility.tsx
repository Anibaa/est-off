"use client"

import { useEffect } from "react"

export function AccessibilityEnhancements() {
  useEffect(() => {
    // Skip to main content functionality
    const skipLink = document.createElement("a")
    skipLink.href = "#main-content"
    skipLink.textContent = "Aller au contenu principal"
    skipLink.className =
      "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-est-rouge focus:text-white focus:rounded"
    document.body.insertBefore(skipLink, document.body.firstChild)

    // Focus management for keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key to close modals/dropdowns
      if (e.key === "Escape") {
        const activeElement = document.activeElement as HTMLElement
        if (activeElement && activeElement.blur) {
          activeElement.blur()
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink)
      }
    }
  }, [])

  return null
}
