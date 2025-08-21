"use client"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTranslation } from "@/lib/i18n"
import { motion } from "framer-motion"

export function Header() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/actualites", label: t("nav.news") },
    { href: "/football", label: t("nav.football") },
    { href: "/volleyball", label: t("nav.volleyball") },
    { href: "/handball", label: t("nav.handball") },
    { href: "/siecle-de-legende", label: t("nav.timeline") },
    { href: "/club", label: t("nav.club") },
    { href: "/contact", label: t("nav.contact") },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
    >
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-[length:200%_100%] bg-gradient-to-r from-est-rouge via-est-jaune to-est-rouge animate-banner"
        />
        <div className="relative text-white text-center text-xs sm:text-sm font-semibold py-1 drop-shadow-md">
          Taraji Ya Dawla – <span dir="rtl" className="mx-1">نحن الترجي</span>
        </div>
        </div>

      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.img
              src="/generic-initials-logo.png"
              alt="EST Logo"
              className="h-12 w-10 group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 5 }}
            />
            <div className="hidden sm:block">
              <div className="font-heading text-md font-bold text-est-rouge group-hover:text-est-jaune transition-colors">
                ESPERANCE SPORTIVE DE TUNIS
              </div>
              <div className="text-xs text-muted-foreground">Since 1919</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium transition-all duration-300 hover:text-est-rouge hover:scale-105 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-est-rouge transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="hover:bg-est-rouge/10 hover:text-est-rouge transition-colors">
              <Search className="h-4 w-4" />
            </Button>
            <ThemeToggle />
            <LanguageSwitcher />

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:bg-est-rouge/10 hover:text-est-rouge transition-colors"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="text-lg font-medium transition-colors hover:text-est-rouge block py-2 px-4 rounded-lg hover:bg-est-rouge/10"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between px-4 py-2">
                      <span className="text-sm font-medium">Theme</span>
                      <ThemeToggle />
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
