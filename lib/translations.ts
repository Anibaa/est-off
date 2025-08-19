export type TranslationKey =
  | "nav.home"
  | "nav.news"
  | "nav.football"
  | "nav.volleyball"
  | "nav.handball"
  | "nav.timeline"
  | "nav.club"
  | "nav.contact"
  | "nav.calendar"
  | "nav.standings"
  | "nav.roster"
  | "nav.trophies"
  | "nav.gallery"
  | "nav.tickets"
  | "nav.partners"
  | "nav.faq"
  | "hero.title"
  | "hero.subtitle"
  | "hero.watchHighlights"
  | "hero.latestNews"
  | "nextMatch.title"
  | "nextMatch.vs"
  | "nextMatch.venue"
  | "nextMatch.date"
  | "nextMatch.time"
  | "nextMatch.buyTickets"
  | "nextMatch.countdown.days"
  | "nextMatch.countdown.hours"
  | "nextMatch.countdown.minutes"
  | "nextMatch.countdown.seconds"
  | "standings.title"
  | "standings.position"
  | "standings.team"
  | "standings.played"
  | "standings.won"
  | "standings.drawn"
  | "standings.lost"
  | "standings.goalsFor"
  | "standings.goalsAgainst"
  | "standings.goalDifference"
  | "standings.points"
  | "standings.viewFull"
  | "news.title"
  | "news.readMore"
  | "news.viewAll"
  | "news.category.football"
  | "news.category.volleyball"
  | "news.category.handball"
  | "news.category.club"
  | "news.filters.all"
  | "news.filters.sport"
  | "news.noResults"
  | "palmares.title"
  | "palmares.viewAll"
  | "palmares.national"
  | "palmares.continental"
  | "palmares.international"
  | "palmares.subtitle"
  | "palmares.recentTrophies"
  | "palmares.achievements.nationalChampionships"
  | "palmares.achievements.tunisiaCups"
  | "palmares.achievements.continentalTitles"
  | "roster.title"
  | "roster.season"
  | "roster.position.goalkeeper"
  | "roster.position.defender"
  | "roster.position.midfielder"
  | "roster.position.forward"
  | "roster.number"
  | "roster.name"
  | "roster.position"
  | "roster.age"
  | "roster.nationality"
  | "socialMedia.title"
  | "socialMedia.subtitle"
  | "socialMedia.facebook"
  | "socialMedia.instagram"
  | "socialMedia.twitter"
  | "socialMedia.youtube"
  | "newsletter.title"
  | "newsletter.subtitle"
  | "newsletter.placeholder"
  | "newsletter.subscribe"
  | "newsletter.success"
  | "newsletter.error"
  | "footer.followUs"
  | "footer.rights"
  | "footer.quickLinks"
  | "footer.sports"
  | "footer.club"
  | "footer.legal"
  | "footer.privacy"
  | "footer.terms"
  | "common.loading"
  | "common.error"
  | "common.retry"
  | "common.close"
  | "common.search"
  | "common.filter"
  | "common.reset"
  | "common.viewMore"
  | "common.backToTop"
  | "theme.light"
  | "theme.dark"
  | "theme.system"

export const translations: Record<string, Record<TranslationKey, string>> = {
  fr: {
    "nav.home": "Accueil",
    "nav.news": "Actualités",
    "nav.football": "Football",
    "nav.volleyball": "Volleyball",
    "nav.handball": "Handball",
    "nav.timeline": "Siècle de Légende",
    "nav.club": "Club",
    "nav.contact": "Contact",
    "nav.calendar": "Calendrier",
    "nav.standings": "Classement",
    "nav.roster": "Effectif",
    "nav.trophies": "Trophées",
    "nav.gallery": "Galerie",
    "nav.tickets": "Billetterie",
    "nav.partners": "Partenaires",
    "nav.faq": "FAQ",
    "hero.title": "Espérance Sportive de Tunis",
    "hero.subtitle": "Un siècle de passion, de gloire et de légende",
    "hero.watchHighlights": "Voir les temps forts",
    "hero.latestNews": "Dernières actualités",
    "nextMatch.title": "Prochain Match",
    "nextMatch.vs": "vs",
    "nextMatch.venue": "Stade",
    "nextMatch.date": "Date",
    "nextMatch.time": "Heure",
    "nextMatch.buyTickets": "Acheter des billets",
    "nextMatch.countdown.days": "jours",
    "nextMatch.countdown.hours": "heures",
    "nextMatch.countdown.minutes": "minutes",
    "nextMatch.countdown.seconds": "secondes",
    "standings.title": "Classement",
    "standings.position": "Pos",
    "standings.team": "Équipe",
    "standings.played": "J",
    "standings.won": "G",
    "standings.drawn": "N",
    "standings.lost": "P",
    "standings.goalsFor": "BP",
    "standings.goalsAgainst": "BC",
    "standings.goalDifference": "Diff",
    "standings.points": "Pts",
    "standings.viewFull": "Voir le classement complet",
    "news.title": "Dernières Actualités",
    "news.readMore": "Lire la suite",
    "news.viewAll": "Voir toutes les actualités",
    "news.category.football": "Football",
    "news.category.volleyball": "Volleyball",
    "news.category.handball": "Handball",
    "news.category.club": "Club",
    "news.filters.all": "Tous",
    "news.filters.sport": "Sport",
    "news.noResults": "Aucun article trouvé",
    "palmares.title": "Palmarès",
    "palmares.viewAll": "Voir tous les trophées",
    "palmares.national": "National",
    "palmares.continental": "Continental",
    "palmares.international": "International",
    "palmares.subtitle": "Un siècle de succès et de trophées",
    "palmares.recentTrophies": "Derniers Trophées",
    "palmares.achievements.nationalChampionships": "Championnats nationaux",
    "palmares.achievements.tunisiaCups": "Coupes de Tunisie",
    "palmares.achievements.continentalTitles": "Titres continentaux",
    "roster.title": "Effectif",
    "roster.season": "Saison",
    "roster.position.goalkeeper": "Gardien",
    "roster.position.defender": "Défenseur",
    "roster.position.midfielder": "Milieu",
    "roster.position.forward": "Attaquant",
    "roster.number": "N°",
    "roster.name": "Nom",
    "roster.position": "Poste",
    "roster.age": "Âge",
    "roster.nationality": "Nationalité",
    "socialMedia.title": "Suivez-nous sur les Réseaux Sociaux",
    "socialMedia.subtitle": "Restez connectés avec l'actualité de l'EST en temps réel",
    "socialMedia.facebook": "Facebook",
    "socialMedia.instagram": "Instagram",
    "socialMedia.twitter": "Twitter",
    "socialMedia.youtube": "YouTube",
    "newsletter.title": "Newsletter",
    "newsletter.subtitle": "Restez informé des dernières actualités",
    "newsletter.placeholder": "Votre adresse email",
    "newsletter.subscribe": "S'abonner",
    "newsletter.success": "Inscription réussie !",
    "newsletter.error": "Erreur lors de l'inscription",
    "footer.followUs": "Suivez-nous",
    "footer.rights": "Tous droits réservés",
    "footer.quickLinks": "Liens rapides",
    "footer.sports": "Sports",
    "footer.club": "Club",
    "footer.legal": "Mentions légales",
    "footer.privacy": "Politique de confidentialité",
    "footer.terms": "Conditions d'utilisation",
    "common.loading": "Chargement...",
    "common.error": "Une erreur s'est produite",
    "common.retry": "Réessayer",
    "common.close": "Fermer",
    "common.search": "Rechercher",
    "common.filter": "Filtrer",
    "common.reset": "Réinitialiser",
    "common.viewMore": "Voir plus",
    "common.backToTop": "Retour en haut",
    "theme.light": "Clair",
    "theme.dark": "Sombre",
    "theme.system": "Système",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.news": "الأخبار",
    "nav.football": "كرة القدم",
    "nav.volleyball": "الكرة الطائرة",
    "nav.handball": "كرة اليد",
    "nav.timeline": "قرن من الأمجاد",
    "nav.club": "النادي",
    "nav.contact": "اتصل بنا",
    "nav.calendar": "الروزنامة",
    "nav.standings": "الترتيب",
    "nav.roster": "التشكيلة",
    "nav.trophies": "الألقاب",
    "nav.gallery": "المعرض",
    "nav.tickets": "التذاكر",
    "nav.partners": "الشركاء",
    "nav.faq": "الأسئلة الشائعة",
    "hero.title": "الترجي الرياضي التونسي",
    "hero.subtitle": "قرن من الشغف والمجد والأسطورة",
    "hero.watchHighlights": "شاهد أهم اللحظات",
    "hero.latestNews": "آخر الأخبار",
    "nextMatch.title": "المباراة القادمة",
    "nextMatch.vs": "ضد",
    "nextMatch.venue": "الملعب",
    "nextMatch.date": "التاريخ",
    "nextMatch.time": "الوقت",
    "nextMatch.buyTickets": "شراء التذاكر",
    "nextMatch.countdown.days": "أيام",
    "nextMatch.countdown.hours": "ساعات",
    "nextMatch.countdown.minutes": "دقائق",
    "nextMatch.countdown.seconds": "ثوان",
    "standings.title": "الترتيب",
    "standings.position": "المركز",
    "standings.team": "الفريق",
    "standings.played": "لعب",
    "standings.won": "فوز",
    "standings.drawn": "تعادل",
    "standings.lost": "خسارة",
    "standings.goalsFor": "له",
    "standings.goalsAgainst": "عليه",
    "standings.goalDifference": "الفارق",
    "standings.points": "النقاط",
    "standings.viewFull": "عرض الترتيب الكامل",
    "news.title": "آخر الأخبار",
    "news.readMore": "اقرأ المزيد",
    "news.viewAll": "عرض جميع الأخبار",
    "news.category.football": "كرة القدم",
    "news.category.volleyball": "الكرة الطائرة",
    "news.category.handball": "كرة اليد",
    "news.category.club": "النادي",
    "news.filters.all": "الكل",
    "news.filters.sport": "الرياضة",
    "news.noResults": "لم يتم العثور على مقالات",
    "palmares.title": "الإنجازات",
    "palmares.viewAll": "عرض جميع الألقاب",
    "palmares.national": "محلي",
    "palmares.continental": "قاري",
    "palmares.international": "دولي",
    "palmares.subtitle": "قرن من النجاح والألقاب",
    "palmares.recentTrophies": "آخر الألقاب",
    "palmares.achievements.nationalChampionships": "بطولات الدوري الوطني",
    "palmares.achievements.tunisiaCups": "كؤوس تونس",
    "palmares.achievements.continentalTitles": "ألقاب قارية",
    "roster.title": "التشكيلة",
    "roster.season": "الموسم",
    "roster.position.goalkeeper": "حارس مرمى",
    "roster.position.defender": "مدافع",
    "roster.position.midfielder": "وسط ميدان",
    "roster.position.forward": "مهاجم",
    "roster.number": "الرقم",
    "roster.name": "الاسم",
    "roster.position": "المركز",
    "roster.age": "العمر",
    "roster.nationality": "الجنسية",
    "socialMedia.title": "تابعنا على وسائل التواصل الاجتماعي",
    "socialMedia.subtitle": "ابق على تواصل مع أخبار الترجي في الوقت الفعلي",
    "socialMedia.facebook": "فيسبوك",
    "socialMedia.instagram": "إنستغرام",
    "socialMedia.twitter": "تويتر",
    "socialMedia.youtube": "يوتيوب",
    "newsletter.title": "النشرة الإخبارية",
    "newsletter.subtitle": "ابق على اطلاع بآخر الأخبار",
    "newsletter.placeholder": "عنوان بريدك الإلكتروني",
    "newsletter.subscribe": "اشترك",
    "newsletter.success": "تم الاشتراك بنجاح!",
    "newsletter.error": "خطأ في الاشتراك",
    "footer.followUs": "تابعنا",
    "footer.rights": "جميع الحقوق محفوظة",
    "footer.quickLinks": "روابط سريعة",
    "footer.sports": "الرياضات",
    "footer.club": "النادي",
    "footer.legal": "الإشعارات القانونية",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الاستخدام",
    "common.loading": "جاري التحميل...",
    "common.error": "حدث خطأ",
    "common.retry": "إعادة المحاولة",
    "common.close": "إغلاق",
    "common.search": "بحث",
    "common.filter": "تصفية",
    "common.reset": "إعادة تعيين",
    "common.viewMore": "عرض المزيد",
    "common.backToTop": "العودة إلى الأعلى",
    "theme.light": "فاتح",
    "theme.dark": "داكن",
    "theme.system": "النظام",
  },
  en: {
    "nav.home": "Home",
    "nav.news": "News",
    "nav.football": "Football",
    "nav.volleyball": "Volleyball",
    "nav.handball": "Handball",
    "nav.timeline": "Century of Legend",
    "nav.club": "Club",
    "nav.contact": "Contact",
    "nav.calendar": "Calendar",
    "nav.standings": "Standings",
    "nav.roster": "Squad",
    "nav.trophies": "Trophies",
    "nav.gallery": "Gallery",
    "nav.tickets": "Tickets",
    "nav.partners": "Partners",
    "nav.faq": "FAQ",
    "hero.title": "Espérance Sportive de Tunis",
    "hero.subtitle": "A century of passion, glory and legend",
    "hero.watchHighlights": "Watch highlights",
    "hero.latestNews": "Latest news",
    "nextMatch.title": "Next Match",
    "nextMatch.vs": "vs",
    "nextMatch.venue": "Stadium",
    "nextMatch.date": "Date",
    "nextMatch.time": "Time",
    "nextMatch.buyTickets": "Buy tickets",
    "nextMatch.countdown.days": "days",
    "nextMatch.countdown.hours": "hours",
    "nextMatch.countdown.minutes": "minutes",
    "nextMatch.countdown.seconds": "seconds",
    "standings.title": "Standings",
    "standings.position": "Pos",
    "standings.team": "Team",
    "standings.played": "P",
    "standings.won": "W",
    "standings.drawn": "D",
    "standings.lost": "L",
    "standings.goalsFor": "GF",
    "standings.goalsAgainst": "GA",
    "standings.goalDifference": "GD",
    "standings.points": "Pts",
    "standings.viewFull": "View full standings",
    "news.title": "Latest News",
    "news.readMore": "Read more",
    "news.viewAll": "View all news",
    "news.category.football": "Football",
    "news.category.volleyball": "Volleyball",
    "news.category.handball": "Handball",
    "news.category.club": "Club",
    "news.filters.all": "All",
    "news.filters.sport": "Sport",
    "news.noResults": "No articles found",
    "palmares.title": "Honours",
    "palmares.viewAll": "View all trophies",
    "palmares.national": "National",
    "palmares.continental": "Continental",
    "palmares.international": "International",
    "palmares.subtitle": "A century of success and trophies",
    "palmares.recentTrophies": "Recent Trophies",
    "palmares.achievements.nationalChampionships": "National Championships",
    "palmares.achievements.tunisiaCups": "Tunisian Cups",
    "palmares.achievements.continentalTitles": "Continental Titles",
    "roster.title": "Squad",
    "roster.season": "Season",
    "roster.position.goalkeeper": "Goalkeeper",
    "roster.position.defender": "Defender",
    "roster.position.midfielder": "Midfielder",
    "roster.position.forward": "Forward",
    "roster.number": "No.",
    "roster.name": "Name",
    "roster.position": "Position",
    "roster.age": "Age",
    "roster.nationality": "Nationality",
    "socialMedia.title": "Follow us on Social Media",
    "socialMedia.subtitle": "Stay connected with EST news in real time",
    "socialMedia.facebook": "Facebook",
    "socialMedia.instagram": "Instagram",
    "socialMedia.twitter": "Twitter",
    "socialMedia.youtube": "YouTube",
    "newsletter.title": "Newsletter",
    "newsletter.subtitle": "Stay updated with the latest news",
    "newsletter.placeholder": "Your email address",
    "newsletter.subscribe": "Subscribe",
    "newsletter.success": "Successfully subscribed!",
    "newsletter.error": "Subscription error",
    "footer.followUs": "Follow us",
    "footer.rights": "All rights reserved",
    "footer.quickLinks": "Quick links",
    "footer.sports": "Sports",
    "footer.club": "Club",
    "footer.legal": "Legal notice",
    "footer.privacy": "Privacy policy",
    "footer.terms": "Terms of use",
    "common.loading": "Loading...",
    "common.error": "An error occurred",
    "common.retry": "Retry",
    "common.close": "Close",
    "common.search": "Search",
    "common.filter": "Filter",
    "common.reset": "Reset",
    "common.viewMore": "View more",
    "common.backToTop": "Back to top",
    "theme.light": "Light",
    "theme.dark": "Dark",
    "theme.system": "System",
  },
}

export function getTranslation(locale: string, key: TranslationKey): string {
  return translations[locale]?.[key] || translations.fr[key] || key
}
