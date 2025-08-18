"use client"

import { useState, useCallback } from "react"

export const locales = ["fr", "ar", "en"] as const
export type Locale = (typeof locales)[number]

export type TranslationKey = string

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

export function getDirection(locale: Locale): "ltr" | "rtl" {
  return localeDirections[locale]
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

function getTranslation(locale: Locale, key: TranslationKey): string | undefined {
  const translations: Record<TranslationKey, Record<Locale, string>> = {
    "socialMedia.title": {
      fr: "Suivez-nous sur les Réseaux Sociaux",
      ar: "تابعونا على وسائل التواصل الاجتماعي",
      en: "Follow us on Social Media",
    },
    "socialMedia.subtitle": {
      fr: "Restez connectés avec l'actualité de l'EST en temps réel",
      ar: "ابقى متصلاً مع أحدث أخبار EST بالوقت الحقيقي",
      en: "Stay connected with EST's latest news in real-time",
    },
    "nav.home": {
      fr: "Accueil",
      ar: "الصفحة الرئيسية",
      en: "Home",
    },
    "nav.news": {
      fr: "Actualités",
      ar: "الأخبار",
      en: "News",
    },
    "nav.football": {
      fr: "Football",
      ar: "الكرة القدم",
      en: "Football",
    },
    "nav.volleyball": {
      fr: "Volleyball",
      ar: "الكرة الطائرة",
      en: "Volleyball",
    },
    "nav.handball": {
      fr: "Handball",
      ar: "الكرة اليدوية",
      en: "Handball",
    },
    "nav.timeline": {
      fr: "Histoire",
      ar: "الجدول الزمني",
      en: "Timeline",
    },
    "nav.club": {
      fr: "Club",
      ar: "الклاب",
      en: "Club",
    },
    "nav.contact": {
      fr: "Contact",
      ar: "اتصال",
      en: "Contact",
    },
  }

  return translations[key]?.[locale]
}

export function useTranslation() {
  const [currentLocale, setCurrentLocale] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search)
      const langParam = urlParams.get("lang")
      if (langParam && isValidLocale(langParam)) {
        return langParam
      }
      const stored = localStorage.getItem("est-locale")
      if (stored && isValidLocale(stored)) {
        return stored
      }
    }
    return defaultLocale
  })

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
      return getTranslation(currentLocale, key) || fallback || key
    },
    [currentLocale],
  )

  return {
    t,
    locale: currentLocale,
    changeLocale,
    direction: getDirection(currentLocale),
    isRTL: getDirection(currentLocale) === "rtl",
  }
}
