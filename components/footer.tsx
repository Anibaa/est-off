import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  const quickLinks = [
    { href: "/actualites", label: "Actualités" },
    { href: "/football", label: "Football" },
    { href: "/volleyball", label: "Volleyball" },
    { href: "/handball", label: "Handball" },
    { href: "/siecle-de-legende", label: "Histoire" },
    { href: "/club", label: "Le Club" },
  ]

  const legalLinks = [
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/politique-confidentialite", label: "Politique de confidentialité" },
    { href: "/conditions-utilisation", label: "Conditions d'utilisation" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Club info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/generic-initials-logo.png" alt="EST Logo" className="h-12 w-12" />
              <div>
                <div className="font-heading text-xl font-bold text-est-rouge">EST</div>
                <div className="text-sm text-gray-400">Depuis 1919</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              L'Espérance Sportive de Tunis, club centenaire et fierté du football tunisien et africain.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-gray-800 rounded-full hover:bg-est-rouge transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-est-jaune transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-est-rouge flex-shrink-0" />
                <span className="text-gray-300">
                  Stade Olympique de Radès
                  <br />
                  2040 Radès, Tunisie
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-est-rouge flex-shrink-0" />
                <span className="text-gray-300">+216 71 123 456</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-est-rouge flex-shrink-0" />
                <span className="text-gray-300">contact@est.tn</span>
              </div>
            </div>
          </div>

          {/* Legal links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Informations</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-est-jaune transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2024 Espérance Sportive de Tunis. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
