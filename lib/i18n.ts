"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"
import { translations, type TranslationKey } from "./translations"

export const locales = ["fr", "ar", "en"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "fr"

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  ar: "العربية",
  en: "English",
}

export const localeDirections: Record<Locale, "ltr" | "rtl"> = {
  fr: "ltr",
  ar: "rtl",
  en: "ltr",
}

interface TranslationContextValue {
  locale: Locale
  changeLocale: (locale: Locale) => void
  t: (key: TranslationKey, fallback?: string) => string
  direction: "ltr" | "rtl"
  isRTL: boolean
}

const TranslationContext = createContext<TranslationContextValue | undefined>(undefined)

function getInitialLocale(): Locale {
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search)
    const langParam = urlParams.get("lang")
    if (langParam && locales.includes(langParam as Locale)) {
      return langParam as Locale
    }
    const stored = localStorage.getItem("est-locale")
    if (stored && locales.includes(stored as Locale)) {
      return stored as Locale
    }
  }
  return defaultLocale
}

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [currentLocale, setCurrentLocale] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = currentLocale
      document.documentElement.dir = localeDirections[currentLocale]
    }
  }, [currentLocale])

  const changeLocale = useCallback((newLocale: Locale) => {
    setCurrentLocale(newLocale)
    if (typeof window !== "undefined") {
      localStorage.setItem("est-locale", newLocale)
      const url = new URL(window.location.href)
      url.searchParams.set("lang", newLocale)
      window.history.replaceState({}, "", url.toString())
    }
  }, [])

  const t = useCallback(
    (key: TranslationKey, fallback?: string) => {
      return translations[currentLocale]?.[key] || fallback || key
    },
    [currentLocale],
  )

  return (
    <TranslationContext.Provider
      value={{
        locale: currentLocale,
        changeLocale,
        t,
        direction: localeDirections[currentLocale],
        isRTL: localeDirections[currentLocale] === "rtl",
      }}
    >
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider")
  }
  return context
}

