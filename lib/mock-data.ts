export interface Match {
  id: string
  homeTeam: string
  awayTeam: string
  homeTeamLogo: string
  awayTeamLogo: string
  date: string
  time: string
  venue: string
  competition: string
  status: "upcoming" | "live" | "finished"
  homeScore?: number
  awayScore?: number
  round?: string
}

export interface StandingTeam {
  position: number
  team: string
  logo: string
  played: number
  won: number
  drawn: number
  lost: number
  goalsFor: number
  goalsAgainst: number
  goalDifference: number
  points: number
}

export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  author: string
  publishedAt: string
  category: "football" | "volleyball" | "handball" | "general"
  tags: string[]
  featured: boolean
}

export interface Trophy {
  id: string
  title: string
  year: number
  competition: string
  image: string
  description: string
}

export interface TimelineEvent {
  id: string
  year: number
  title: string
  description: string
  image?: string
  category: "foundation" | "trophy" | "milestone" | "legend"
  quote?: string
  quoteAuthor?: string
}

export interface Player {
  id: string
  name: string
  position: string
  number: number
  age: number
  nationality: string
  photo: string
  joinedYear: number
}

export interface Staff {
  id: string
  name: string
  role: string
  photo: string
  experience: string
}

export interface Fixture {
  id: string
  homeTeam: string
  awayTeam: string
  homeTeamLogo: string
  awayTeamLogo: string
  date: string
  time: string
  venue: string
  competition: string
  status: "upcoming" | "live" | "finished"
  homeScore?: number
  awayScore?: number
  round?: string
}

// Club information, stadium details, and sponsors data
export interface ClubInfo {
  founded: number
  colors: string[]
  stadium: string
  capacity: number
  president: string
  coach: string
  website: string
  address: string
  phone: string
  email: string
}

export interface StadiumInfo {
  name: string
  capacity: number
  opened: number
  surface: string
  dimensions: string
  address: string
  coordinates: {
    lat: number
    lng: number
  }
  facilities: string[]
  history: string
}

export interface Sponsor {
  id: string
  name: string
  logo: string
  category: "principal" | "officiel" | "partenaire"
  website?: string
}

export const clubInfo: ClubInfo = {
  founded: 1919,
  colors: ["Rouge", "Jaune"],
  stadium: "Stade Olympique de Radès",
  capacity: 65000,
  president: "Hamdi Meddeb",
  coach: "Radhi Jaïdi",
  website: "www.est.org.tn",
  address: "Avenue Habib Bourguiba, Tunis 1000, Tunisie",
  phone: "+216 71 123 456",
  email: "contact@est.org.tn",
}

export const stadiumInfo: StadiumInfo = {
  name: "Stade Olympique de Radès",
  capacity: 65000,
  opened: 2001,
  surface: "Gazon naturel",
  dimensions: "105m x 68m",
  address: "Route de la Plage, Radès 2040, Tunisie",
  coordinates: {
    lat: 36.7372,
    lng: 10.2834,
  },
  facilities: [
    "Éclairage LED haute performance",
    "Système d'arrosage automatique",
    "Vestiaires modernes",
    "Salle de presse",
    "Loges VIP",
    "Parking 5000 places",
    "Centre médical",
    "Boutique officielle",
  ],
  history: `Inauguré en 2001, le Stade Olympique de Radès est devenu le temple du football tunisien. Conçu par l'architecte Taïeb Lakhdar, ce joyau architectural peut accueillir 65 000 spectateurs dans des conditions optimales. 

Le stade a été le théâtre de nombreux moments historiques, notamment la victoire de l'EST en Ligue des Champions CAF 2018 devant plus de 65 000 supporters en délire. 

Ses installations modernes et son atmosphère unique en font l'un des stades les plus respectés d'Afrique. La pelouse en gazon naturel, entretenue selon les standards internationaux, offre des conditions de jeu exceptionnelles.`,
}

export const sponsors: Sponsor[] = [
  {
    id: "1",
    name: "Tunisie Telecom",
    logo: "/placeholder.svg?height=100&width=200&text=Tunisie+Telecom",
    category: "principal",
    website: "https://www.tunisietelecom.tn",
  },
  {
    id: "2",
    name: "Banque de Tunisie",
    logo: "/placeholder.svg?height=100&width=200&text=Banque+de+Tunisie",
    category: "officiel",
    website: "https://www.bt.com.tn",
  },
  {
    id: "3",
    name: "Poulina Group",
    logo: "/placeholder.svg?height=100&width=200&text=Poulina+Group",
    category: "officiel",
    website: "https://www.poulina.com.tn",
  },
  {
    id: "4",
    name: "Délice Danone",
    logo: "/placeholder.svg?height=100&width=200&text=Délice+Danone",
    category: "partenaire",
  },
  {
    id: "5",
    name: "Ooredoo Tunisie",
    logo: "/placeholder.svg?height=100&width=200&text=Ooredoo",
    category: "partenaire",
    website: "https://www.ooredoo.tn",
  },
  {
    id: "6",
    name: "Société Tunisienne de Banque",
    logo: "/placeholder.svg?height=100&width=200&text=STB",
    category: "partenaire",
    website: "https://www.stb.com.tn",
  },
]

// Mock data
export const nextMatch: Match = {
  id: "1",
  homeTeam: "Espérance ST",
  awayTeam: "Club Africain",
  homeTeamLogo: "/generic-initials-logo.png",
  awayTeamLogo: "/club-africain-logo.png",
  date: "2024-12-15",
  time: "16:00",
  venue: "Stade Olympique de Radès",
  competition: "Ligue 1 Tunisienne",
  status: "upcoming",
}

export const allNews: NewsArticle[] = [
  {
    id: "1",
    title: "L'EST remporte le derby face au Club Africain",
    excerpt: "Une victoire éclatante 3-1 dans le derby de la capitale qui consolide la première place.",
    content: `
      <p>L'Espérance Sportive de Tunis a livré une performance exceptionnelle face au Club Africain lors du derby de la capitale, s'imposant 3-1 au Stade Olympique de Radès devant plus de 60 000 spectateurs.</p>
      
      <p>Dès la 15ème minute, Anice Badri ouvrait le score d'une frappe puissante depuis l'entrée de la surface. Le milieu de terrain tunisien, en grande forme cette saison, confirmait ainsi son statut de leader technique de l'équipe.</p>
      
      <p>Le Club Africain égalisait temporairement à la 35ème minute par l'intermédiaire de leur attaquant vedette, mais l'EST reprenait rapidement l'avantage grâce à un but de Haythem Jouini juste avant la pause.</p>
      
      <p>En seconde période, les Sang et Or ont fait preuve d'une maîtrise tactique remarquable, scellant leur victoire par un troisième but signé Mohamed Ali Ben Romdhane à la 78ème minute.</p>
      
      <p>Cette victoire permet à l'EST de consolider sa première place au classement avec 5 points d'avance sur son dauphin, l'Étoile du Sahel.</p>
    `,
    image: "/est-victory.png",
    author: "Rédaction EST",
    publishedAt: "2024-12-10",
    category: "football",
    tags: ["derby", "victoire", "championnat", "Club Africain"],
    featured: true,
  },
  {
    id: "2",
    title: "Nouveau contrat pour Anice Badri",
    excerpt: "L'attaquant vedette prolonge son contrat jusqu'en 2026.",
    content: `
      <p>L'Espérance Sportive de Tunis et Anice Badri ont trouvé un accord pour la prolongation du contrat du milieu offensif jusqu'en juin 2026.</p>
      
      <p>Arrivé en 2019, Badri s'est imposé comme l'un des joueurs les plus importants de l'effectif esperantiste. Avec 45 buts en 120 matchs toutes compétitions confondues, il représente un atout majeur pour les ambitions du club.</p>
      
      <p>"Je suis très heureux de continuer l'aventure avec l'EST. Ce club représente tout pour moi et j'espère apporter encore de nombreuses joies aux supporters", a déclaré le joueur lors de la signature.</p>
      
      <p>Le président du club s'est également félicité de cet accord : "Anice incarne les valeurs de notre club. Sa prolongation s'inscrit dans notre stratégie de conservation de nos meilleurs éléments."</p>
    `,
    image: "/anice-badri-est-player.png",
    author: "Service Communication",
    publishedAt: "2024-12-08",
    category: "football",
    tags: ["transfert", "contrat", "joueur", "Anice Badri"],
    featured: true,
  },
  {
    id: "3",
    title: "L'équipe de volleyball qualifiée pour les demi-finales",
    excerpt: "Brillante performance de nos volleyeurs en Coupe d'Afrique.",
    content: `
      <p>L'équipe de volleyball de l'EST a décroché sa qualification pour les demi-finales de la Coupe d'Afrique des clubs champions après sa victoire 3-1 face aux Égyptiens d'Al Ahly.</p>
      
      <p>Menés 1 set à 0, les Esperantistes ont su renverser la situation grâce à un collectif remarquable et à l'excellent niveau de leur capitaine Wassim Ben Tara.</p>
      
      <p>Cette qualification historique place l'EST parmi les quatre meilleures équipes du continent et confirme la montée en puissance du volleyball tunisien.</p>
      
      <p>La demi-finale aura lieu samedi prochain face aux Marocains du Raja Casablanca, dans ce qui s'annonce comme un match de très haut niveau.</p>
    `,
    image: "/est-volleyball-celebration.png",
    author: "Rédaction Sport",
    publishedAt: "2024-12-07",
    category: "volleyball",
    tags: ["volleyball", "coupe", "qualification", "Afrique"],
    featured: false,
  },
  {
    id: "4",
    title: "Préparation intensive avant le match de Ligue des Champions",
    excerpt: "L'équipe s'entraîne dur avant le déplacement crucial en Égypte.",
    content: `
      <p>À quelques jours du match retour des quarts de finale de la Ligue des Champions CAF face à Al Ahly, l'équipe de l'EST intensifie sa préparation.</p>
      
      <p>L'entraîneur Radhi Jaïdi a dirigé deux séances d'entraînement quotidiennes cette semaine, mettant l'accent sur la condition physique et la tactique.</p>
      
      <p>Tous les joueurs sont disponibles pour ce déplacement crucial au Caire, à l'exception de Khalil Chammam, toujours blessé à la cheville.</p>
      
      <p>Fort de sa victoire 2-0 à l'aller, l'EST aborde ce match avec confiance mais reste concentré sur l'objectif : décrocher une place en demi-finale.</p>
    `,
    image: "/football-training-session.png",
    author: "Correspondant CAF",
    publishedAt: "2024-12-05",
    category: "football",
    tags: ["Ligue des Champions", "préparation", "Al Ahly", "CAF"],
    featured: false,
  },
  {
    id: "5",
    title: "Victoire éclatante de l'équipe de handball féminine",
    excerpt: "Les handballeuses de l'EST s'imposent 28-22 en championnat.",
    content: `
      <p>L'équipe féminine de handball de l'EST a livré une prestation de haute volée face à l'Étoile du Sahel, s'imposant 28-22 dans un match spectaculaire.</p>
      
      <p>Menées par leur capitaine Sarra Zaouali, auteure de 8 buts, les Esperantistes ont dominé les débats grâce à une défense solide et une attaque efficace.</p>
      
      <p>Cette victoire permet à l'équipe de consolider sa deuxième place au classement et de rester dans la course au titre.</p>
      
      <p>Le prochain match aura lieu à domicile face au leader, le Club Africain, dans ce qui s'annonce comme un choc au sommet.</p>
    `,
    image: "/est-women-handball-celebration.png",
    author: "Rédaction Handball",
    publishedAt: "2024-12-04",
    category: "handball",
    tags: ["handball", "féminin", "victoire", "championnat"],
    featured: false,
  },
  {
    id: "6",
    title: "Nouveau centre de formation inauguré",
    excerpt: "L'EST inaugure ses nouvelles installations dédiées à la formation des jeunes.",
    content: `
      <p>L'Espérance Sportive de Tunis a officiellement inauguré son nouveau centre de formation, un complexe moderne de 5 hectares situé à Radès.</p>
      
      <p>Ce centre, équipé des dernières technologies, accueillera les jeunes talents de 12 à 18 ans dans des conditions optimales pour leur développement.</p>
      
      <p>Avec 4 terrains en gazon naturel, une salle de musculation, un centre médical et des dortoirs, ce complexe place l'EST parmi les clubs les mieux équipés d'Afrique.</p>
      
      <p>"C'est un investissement dans l'avenir du club et du football tunisien", a déclaré le président lors de l'inauguration.</p>
    `,
    image: "/modern-football-training-center-est.png",
    author: "Direction Communication",
    publishedAt: "2024-12-03",
    category: "general",
    tags: ["formation", "jeunes", "infrastructure", "inauguration"],
    featured: false,
  },
  {
    id: "7",
    title: "Retour sur la victoire historique en Ligue des Champions 2018",
    excerpt: "Il y a 6 ans, l'EST remportait sa 4ème Ligue des Champions CAF.",
    content: `
      <p>Le 9 novembre 2018 restera à jamais gravé dans l'histoire de l'Espérance Sportive de Tunis. Ce jour-là, les Sang et Or décrochaient leur 4ème titre continental.</p>
      
      <p>Face aux Égyptiens d'Al Ahly au Stade Olympique de Radès, l'EST s'imposait 1-0 grâce à un but de Anice Badri à la 41ème minute.</p>
      
      <p>Cette victoire, obtenue devant plus de 65 000 spectateurs en délire, couronnait une campagne parfaite en Ligue des Champions.</p>
      
      <p>Six ans plus tard, ce titre reste l'un des plus beaux souvenirs des supporters esperantistes et témoigne de la grandeur du club sur la scène continentale.</p>
    `,
    image: "/caf-champions-league-trophy.png",
    author: "Archives EST",
    publishedAt: "2024-12-02",
    category: "football",
    tags: ["histoire", "Ligue des Champions", "2018", "Al Ahly"],
    featured: false,
  },
  {
    id: "8",
    title: "Stage de préparation en Turquie confirmé",
    excerpt: "L'équipe première effectuera un stage hivernal en Turquie en janvier.",
    content: `
      <p>L'Espérance Sportive de Tunis a confirmé l'organisation d'un stage de préparation en Turquie du 15 au 25 janvier 2025.</p>
      
      <p>Ce stage, qui se déroulera à Antalya, permettra à l'équipe de préparer la reprise du championnat dans des conditions climatiques favorables.</p>
      
      <p>Trois matchs amicaux sont prévus face à des équipes européennes, offrant l'opportunité de tester de nouveaux schémas tactiques.</p>
      
      <p>L'entraîneur Radhi Jaïdi pourra également évaluer les nouvelles recrues dans un contexte de compétition.</p>
    `,
    image: "/placeholder-c71y1.png",
    author: "Service Sportif",
    publishedAt: "2024-12-01",
    category: "football",
    tags: ["stage", "préparation", "Turquie", "amicaux"],
    featured: false,
  },
]

export const featuredNews = allNews.filter((article) => article.featured)

export function getArticlesByCategory(category?: string, page = 1, limit = 6) {
  const filteredArticles =
    category && category !== "all" ? allNews.filter((article) => article.category === category) : allNews

  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit

  return {
    articles: filteredArticles.slice(startIndex, endIndex),
    totalPages: Math.ceil(filteredArticles.length / limit),
    totalArticles: filteredArticles.length,
  }
}

export function getRelatedArticles(currentArticleId: string, category: string, limit = 3) {
  return allNews.filter((article) => article.id !== currentArticleId && article.category === category).slice(0, limit)
}

export function getArticleById(id: string) {
  return allNews.find((article) => article.id === id)
}

// Football squad
export const footballSquad2025: Player[] = [
  // Goalkeepers
  {
    id: "gk1",
    name: "Sameh Derbali",
    position: "Gardien",
    number: 1,
    age: 28,
    nationality: "Tunisie",
    photo: "/placeholder.svg?height=200&width=200",
    joinedYear: 2022,
  },
  {
    id: "gk2",
    name: "Moez Ben Cherifia",
    position: "Gardien",
    number: 30,
    age: 24,
    nationality: "Tunisie",
    photo: "/placeholder.svg?height=200&width=200",
    joinedYear: 2023,
  },
  // Defenders
  {
    id: "def1",
    name: "Rami Bedoui",
    position: "Défenseur central",
    number: 4,
    age: 33,
    nationality: "Tunisie",
    photo: "/placeholder.svg?height=200&width=200",
    joinedYear: 2018,
  },
  {
    id: "def2",
    name: "Abdelkader Bedrane",
    position: "Défenseur central",
    number: 5,
    age: 29,
    nationality: "Tunisie",
    photo: "/placeholder.svg?height=200&width=200",
    joinedYear: 2021,
  },
  {
    id: "def3",
    name: "Mohamed Amine Tougai",
    position: "Arrière droit",
    number: 2,
    age: 26,
    nationality: "Tunisie",
    photo: "/placeholder.svg?height=200&width=200",
    joinedYear: 2022,
  },
  {
    id: "def4",
    name: "Nour Eddine Ouali",
    position: "Arrière gauche",
    number: 3,
    age: 25,
    nationality: "Tunisie",
    photo: "/placeholder.svg?height=200&width=200",
    joinedYear: 2023,
  },
  {
    id: "def5",
    name: "Raed Bouchniba",
    position: "Défenseur central",
    number: 15,
    age: 27,
    nationality: "Tunisie",
    photo: "/placeholder.svg?height=200&width=200",
    joinedYear: 2020,
  },
  // Midfielders
  {
    id: "mid1",
    name: "Mohamed Ali Ben Romdhane",
    position: "Milieu défensif",
    number: 8,
    age: 24,
    nationality: "Tunisie",
    photo: "/placeholder.svg?height=200&width=200",
    joinedYear: 2021,
  },
  {
    id: "mid2",
    name: "Anice Badri",
    position: "Milieu offensif",
    number: 10,
    age: 31,
    nationality: "Tunisie",
    photo: "/anice-badri-est-player.png",
    joinedYear: 2019,
  },
  {
    id: "mid3",
    name: "Ghailene Chaalali",
    position: "Milieu central",
    number: 6,
    age: 30,
    nationality: "Tunisie",
    photo: "/placeholder.svg?height=200&width=200",
    joinedYear: 2019,
  },
  {
    id: "mid4",
    name: "Fousseny Coulibaly",
    position: "Milieu offensif",
    number: 7,
    age: 27,
    nationality: "Mali",
    photo: "/placeholder.svg?height=200&width=200",
    joinedYear: 2023,
  },
  {
    id: "mid5",
    name: "Yan Sasse",
    position: "Ailier droit",
    number: 11,
    age: 25,
    nationality: "Brésil",
    photo: "/placeholder.svg?height=200&width=200",
    joinedYear: 2024,
  },
  {
    id: "mid6",
    name: "Elias Mokwana",
    position: "Ailier gauche",
    number: 20,
    age: 24,
    nationality: "Afrique du Sud",
    photo: "/placeholder.svg?height=200&width=200",
    joinedYear: 2024,
  },
  // Forwards
  {
    id: "att1",
    name: "Haythem Jouini",
    position: "Attaquant",
    number: 9,
    age: 29,
    nationality: "Tunisie",
    photo: "/placeholder.svg?height=200&width=200",
    joinedYear: 2020,
  },
  {
    id: "att2",
    name: "Kingsley Eduwo",
    position: "Attaquant",
    number: 19,
    age: 26,
    nationality: "Nigeria",
    photo: "/placeholder.svg?height=200&width=200",
    joinedYear: 2023,
  },
  {
    id: "att3",
    name: "Rodrigue Kossi",
    position: "Attaquant",
    number: 21,
    age: 23,
    nationality: "Bénin",
    photo: "/placeholder.svg?height=200&width=200",
    joinedYear: 2024,
  },
]

// Volleyball squad
export const volleyballSquad2025: Player[] = [
  {
    id: "v1",
    name: "Wassim Ben Tara",
    position: "Capitaine - Passeur",
    number: 1,
    age: 32,
    nationality: "Tunisie",
    photo: "/placeholder.svg?height=200&width=200",
    joinedYear: 2015,
  },
  {
    id: "v2",
    name: "Ahmed Saafi",
    position: "Attaquant",
    number: 4,
    age: 28,
    nationality: "Tunisie",
    photo: "/placeholder.svg?height=200&width=200",
    joinedYear: 2019,
  },
  {
    id: "v3",
    name: "Moez Cherif",
    position: "Central",
    number: 8,
    age: 26,
    nationality: "Tunisie",
    photo: "/placeholder.svg?height=200&width=200",
    joinedYear: 2021,
  },
  {
    id: "v4",
    name: "Yassine Belkhir",
    position: "Libéro",
    number: 5,
    age: 25,
    nationality: "Tunisie",
    photo: "/placeholder.svg?height=200&width=200",
    joinedYear: 2022,
  },
  {
    id: "v5",
    name: "Hamza Nagga",
    position: "Attaquant",
    number: 7,
    age: 24,
    nationality: "Tunisie",
    photo: "/placeholder.svg?height=200&width=200",
    joinedYear: 2023,
  },
  {
    id: "v6",
    name: "Seif Eddine Buraoui",
    position: "Central",
    number: 9,
    age: 27,
    nationality: "Tunisie",
    photo: "/placeholder.svg?height=200&width=200",
    joinedYear: 2020,
  },
]

// Handball squad
export const handballSquad2025: Player[] = [
  {
    id: "h1",
    name: "Sarra Zaouali",
    position: "Capitaine - Ailière droite",
    number: 7,
    age: 29,
    nationality: "Tunisie",
    photo: "/placeholder.svg?height=200&width=200",
    joinedYear: 2017,
  },
  {
    id: "h2",
    name: "Ines Jellouli",
    position: "Gardienne",
    number: 1,
    age: 25,
    nationality: "Tunisie",
    photo: "/placeholder.svg?height=200&width=200",
    joinedYear: 2020,
  },
  {
    id: "h3",
    name: "Marwa Ferjani",
    position: "Demi-centre",
    number: 9,
    age: 27,
    nationality: "Tunisie",
    photo: "/placeholder.svg?height=200&width=200",
    joinedYear: 2019,
  },
  {
    id: "h4",
    name: "Nesrine Jemaa",
    position: "Ailière gauche",
    number: 11,
    age: 24,
    nationality: "Tunisie",
    photo: "/placeholder.svg?height=200&width=200",
    joinedYear: 2021,
  },
  {
    id: "h5",
    name: "Chaima Toumi",
    position: "Pivot",
    number: 6,
    age: 26,
    nationality: "Tunisie",
    photo: "/placeholder.svg?height=200&width=200",
    joinedYear: 2020,
  },
]

// Comprehensive timeline events for EST history
export const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    year: 1919,
    title: "Fondation de l'Espérance Sportive de Tunis",
    description:
      "Le 15 janvier 1919, l'Espérance Sportive de Tunis voit le jour dans le quartier de Bab Souika à Tunis. Fondé par un groupe de jeunes passionnés, le club adopte immédiatement les couleurs rouge et jaune qui deviendront légendaires.",
    image: "/est-foundation-1919.png",
    category: "foundation",
    quote: "L'Espérance était née d'un rêve, celui de voir la jeunesse tunisienne briller sur les terrains de sport.",
    quoteAuthor: "Archives historiques EST",
  },
  {
    id: "2",
    year: 1942,
    title: "Premier titre de champion de Tunisie",
    description:
      "L'EST remporte son premier championnat de Tunisie, marquant le début d'une longue série de succès nationaux. Cette victoire historique établit les bases de la domination du club sur le football tunisien.",
    image: "/est-first-championship-1942.png",
    category: "trophy",
    quote: "Ce premier titre était le symbole de notre détermination et de notre excellence.",
    quoteAuthor: "Ancien dirigeant EST",
  },
  {
    id: "3",
    year: 1957,
    title: "L'indépendance et l'essor du club",
    description:
      "Avec l'indépendance de la Tunisie, l'EST devient un symbole national. Le club modernise ses structures et attire les meilleurs talents du pays, posant les jalons de son futur rayonnement continental.",
    image: "/est-independence-era.png",
    category: "milestone",
  },
  {
    id: "4",
    year: 1970,
    title: "Construction du Stade El Menzah",
    description:
      "L'EST s'installe dans son nouveau fief, le Stade El Menzah, qui deviendra le théâtre de nombreux exploits. Cette infrastructure moderne permet au club de recevoir dans des conditions optimales.",
    image: "/stade-el-menzah-1970.png",
    category: "milestone",
  },
  {
    id: "5",
    year: 1982,
    title: "Première Coupe d'Afrique des Clubs Champions",
    description:
      "L'EST remporte sa première Coupe d'Afrique des Clubs Champions, devenant le premier club tunisien à soulever ce trophée continental. Une victoire historique qui place la Tunisie sur la carte du football africain.",
    image: "/caf-champions-league-trophy.png",
    category: "trophy",
    quote: "Ce jour-là, nous avons écrit l'histoire du football tunisien et africain.",
    quoteAuthor: "Capitaine de l'équipe 1982",
  },
  {
    id: "6",
    year: 1988,
    title: "L'ère Temime Lahzami",
    description:
      "Temime Lahzami devient président du club et lance une révolution. Sous sa direction, l'EST modernise ses infrastructures, professionnalise sa gestion et attire les meilleurs joueurs africains.",
    image: "/temime-lahzami-president.png",
    category: "legend",
    quote: "Mon rêve était de faire de l'EST le plus grand club d'Afrique.",
    quoteAuthor: "Temime Lahzami",
  },
  {
    id: "7",
    year: 1994,
    title: "Deuxième Ligue des Champions CAF",
    description:
      "L'EST remporte sa deuxième Ligue des Champions CAF, confirmant son statut de géant du football africain. Cette victoire s'accompagne d'une génération dorée de joueurs tunisiens.",
    image: "/caf-champions-league-trophy.png",
    category: "trophy",
  },
  {
    id: "8",
    year: 2000,
    title: "Déménagement au Stade Olympique de Radès",
    description:
      "L'EST fait du Stade Olympique de Radès son nouveau domicile. Cette enceinte moderne de 65 000 places devient rapidement un temple du football, théâtre des plus grands exploits du club.",
    image: "/stade-rades-2000.png",
    category: "milestone",
  },
  {
    id: "9",
    year: 2011,
    title: "Troisième Ligue des Champions CAF",
    description:
      "Après 17 ans d'attente, l'EST retrouve le sommet continental en remportant sa troisième Ligue des Champions CAF. Une victoire qui relance la machine esperantiste.",
    image: "/caf-champions-league-trophy.png",
    category: "trophy",
    quote: "Cette victoire a redonné espoir à toute une génération de supporters.",
    quoteAuthor: "Supporter historique",
  },
  {
    id: "10",
    year: 2018,
    title: "Quatrième Ligue des Champions CAF",
    description:
      "L'EST remporte sa quatrième Ligue des Champions CAF face à Al Ahly au Stade de Radès. Une soirée magique devant 65 000 spectateurs qui restera gravée dans l'histoire du club.",
    image: "/caf-champions-league-trophy.png",
    category: "trophy",
    quote: "Ce soir-là, Radès était le centre du monde du football africain.",
    quoteAuthor: "Journaliste sportif",
  },
  {
    id: "11",
    year: 2019,
    title: "Centenaire de l'EST",
    description:
      "L'Espérance Sportive de Tunis fête ses 100 ans d'existence. Un siècle de passion, de gloire et de légende qui fait du club l'une des institutions les plus respectées du football africain.",
    image: "/est-centenary-celebration.png",
    category: "milestone",
    quote: "Cent ans après, l'Espérance continue de faire rêver et de rassembler.",
    quoteAuthor: "Président du centenaire",
  },
  {
    id: "12",
    year: 2024,
    title: "32ème titre de champion de Tunisie",
    description:
      "L'EST remporte son 32ème titre de champion de Tunisie, consolidant son statut de club le plus titré du pays. Une nouvelle génération de joueurs perpétue la tradition d'excellence.",
    image: "/tunisia-championship-trophy.png",
    category: "trophy",
  },
]

// Comprehensive fixture data for all sports across 2024-25 and 2025-26 seasons
export const footballFixtures: Fixture[] = [
  // 2024-25 Season
  {
    id: "f1",
    homeTeam: "Espérance ST",
    awayTeam: "Club Africain",
    homeTeamLogo: "/generic-initials-logo.png",
    awayTeamLogo: "/club-africain-logo.png",
    date: "2024-12-15",
    time: "16:00",
    venue: "Stade Olympique de Radès",
    competition: "Ligue 1 Tunisienne",
    status: "upcoming",
    round: "Journée 16",
  },
  {
    id: "f2",
    homeTeam: "Al Ahly",
    awayTeam: "Espérance ST",
    homeTeamLogo: "/placeholder.svg?height=50&width=50",
    awayTeamLogo: "/generic-initials-logo.png",
    date: "2024-12-20",
    time: "19:00",
    venue: "Stade International du Caire",
    competition: "Ligue des Champions CAF",
    status: "upcoming",
    round: "Quart de finale retour",
  },
  {
    id: "f3",
    homeTeam: "Espérance ST",
    awayTeam: "Étoile du Sahel",
    homeTeamLogo: "/generic-initials-logo.png",
    awayTeamLogo: "/etoile-sahel-logo.png",
    date: "2024-12-10",
    time: "15:00",
    venue: "Stade Olympique de Radès",
    competition: "Ligue 1 Tunisienne",
    status: "finished",
    homeScore: 2,
    awayScore: 1,
    round: "Journée 15",
  },
  {
    id: "f4",
    homeTeam: "CS Sfaxien",
    awayTeam: "Espérance ST",
    homeTeamLogo: "/cs-sfaxien-logo.png",
    awayTeamLogo: "/generic-initials-logo.png",
    date: "2024-12-22",
    time: "14:30",
    venue: "Stade Taïeb Mhiri",
    competition: "Ligue 1 Tunisienne",
    status: "upcoming",
    round: "Journée 17",
  },
  {
    id: "f5",
    homeTeam: "Espérance ST",
    awayTeam: "US Monastir",
    homeTeamLogo: "/generic-initials-logo.png",
    awayTeamLogo: "/us-monastir-logo.png",
    date: "2025-01-05",
    time: "16:00",
    venue: "Stade Olympique de Radès",
    competition: "Ligue 1 Tunisienne",
    status: "upcoming",
    round: "Journée 18",
  },
  {
    id: "f6",
    homeTeam: "Espérance ST",
    awayTeam: "Wydad Casablanca",
    homeTeamLogo: "/generic-initials-logo.png",
    awayTeamLogo: "/placeholder.svg?height=50&width=50",
    date: "2025-01-12",
    time: "20:00",
    venue: "Stade Olympique de Radès",
    competition: "Ligue des Champions CAF",
    status: "upcoming",
    round: "Demi-finale aller",
  },
  // 2025-26 Season fixtures
  {
    id: "f7",
    homeTeam: "Espérance ST",
    awayTeam: "Club Africain",
    homeTeamLogo: "/generic-initials-logo.png",
    awayTeamLogo: "/club-africain-logo.png",
    date: "2025-09-15",
    time: "16:00",
    venue: "Stade Olympique de Radès",
    competition: "Ligue 1 Tunisienne",
    status: "upcoming",
    round: "Journée 3",
  },
  {
    id: "f8",
    homeTeam: "Étoile du Sahel",
    awayTeam: "Espérance ST",
    homeTeamLogo: "/etoile-sahel-logo.png",
    awayTeamLogo: "/generic-initials-logo.png",
    date: "2025-09-22",
    time: "15:00",
    venue: "Stade Olympique de Sousse",
    competition: "Ligue 1 Tunisienne",
    status: "upcoming",
    round: "Journée 4",
  },
]

export const volleyballFixtures: Fixture[] = [
  // 2024-25 Season
  {
    id: "v1",
    homeTeam: "EST Volleyball",
    awayTeam: "Club Africain",
    homeTeamLogo: "/generic-initials-logo.png",
    awayTeamLogo: "/club-africain-logo.png",
    date: "2024-12-18",
    time: "18:00",
    venue: "Salle Omnisports Radès",
    competition: "Championnat National",
    status: "upcoming",
    round: "Journée 12",
  },
  {
    id: "v2",
    homeTeam: "Étoile du Sahel",
    awayTeam: "EST Volleyball",
    homeTeamLogo: "/etoile-sahel-logo.png",
    awayTeamLogo: "/generic-initials-logo.png",
    date: "2024-12-14",
    time: "19:00",
    venue: "Salle Omnisports Sousse",
    competition: "Championnat National",
    status: "finished",
    homeScore: 1,
    awayScore: 3,
    round: "Journée 11",
  },
  {
    id: "v3",
    homeTeam: "EST Volleyball",
    awayTeam: "Al Ahly Volleyball",
    homeTeamLogo: "/generic-initials-logo.png",
    awayTeamLogo: "/placeholder.svg?height=50&width=50",
    date: "2025-01-08",
    time: "20:00",
    venue: "Salle Omnisports Radès",
    competition: "Coupe d'Afrique",
    status: "upcoming",
    round: "Demi-finale",
  },
  // 2025-26 Season
  {
    id: "v4",
    homeTeam: "EST Volleyball",
    awayTeam: "CS Sfaxien",
    homeTeamLogo: "/generic-initials-logo.png",
    awayTeamLogo: "/cs-sfaxien-logo.png",
    date: "2025-10-05",
    time: "18:30",
    venue: "Salle Omnisports Radès",
    competition: "Championnat National",
    status: "upcoming",
    round: "Journée 2",
  },
]

export const handballFixtures: Fixture[] = [
  // 2024-25 Season
  {
    id: "h1",
    homeTeam: "EST Handball",
    awayTeam: "Club Africain",
    homeTeamLogo: "/generic-initials-logo.png",
    awayTeamLogo: "/club-africain-logo.png",
    date: "2024-12-16",
    time: "17:00",
    venue: "Salle Omnisports Radès",
    competition: "Championnat National",
    status: "upcoming",
    round: "Journée 10",
  },
  {
    id: "h2",
    homeTeam: "EST Handball",
    awayTeam: "Étoile du Sahel",
    homeTeamLogo: "/generic-initials-logo.png",
    awayTeamLogo: "/etoile-sahel-logo.png",
    date: "2024-12-12",
    time: "16:00",
    venue: "Salle Omnisports Radès",
    competition: "Championnat National",
    status: "finished",
    homeScore: 28,
    awayScore: 22,
    round: "Journée 9",
  },
  // 2025-26 Season
  {
    id: "h3",
    homeTeam: "US Monastir",
    awayTeam: "EST Handball",
    homeTeamLogo: "/us-monastir-logo.png",
    awayTeamLogo: "/generic-initials-logo.png",
    date: "2025-09-28",
    time: "17:30",
    venue: "Salle Omnisports Monastir",
    competition: "Championnat National",
    status: "upcoming",
    round: "Journée 3",
  },
]

// Comprehensive standings for all sports across multiple seasons
export const footballStandings2024: StandingTeam[] = [
  {
    position: 1,
    team: "Espérance ST",
    logo: "/generic-initials-logo.png",
    played: 15,
    won: 12,
    drawn: 2,
    lost: 1,
    goalsFor: 35,
    goalsAgainst: 8,
    goalDifference: 27,
    points: 38,
  },
  {
    position: 2,
    team: "Étoile du Sahel",
    logo: "/etoile-sahel-logo.png",
    played: 15,
    won: 10,
    drawn: 3,
    lost: 2,
    goalsFor: 28,
    goalsAgainst: 12,
    goalDifference: 16,
    points: 33,
  },
  {
    position: 3,
    team: "Club Africain",
    logo: "/club-africain-logo.png",
    played: 15,
    won: 9,
    drawn: 4,
    lost: 2,
    goalsFor: 25,
    goalsAgainst: 15,
    goalDifference: 10,
    points: 31,
  },
  {
    position: 4,
    team: "CS Sfaxien",
    logo: "/cs-sfaxien-logo.png",
    played: 15,
    won: 8,
    drawn: 5,
    lost: 2,
    goalsFor: 22,
    goalsAgainst: 14,
    goalDifference: 8,
    points: 29,
  },
  {
    position: 5,
    team: "US Monastir",
    logo: "/us-monastir-logo.png",
    played: 15,
    won: 7,
    drawn: 6,
    lost: 2,
    goalsFor: 20,
    goalsAgainst: 12,
    goalDifference: 8,
    points: 27,
  },
  {
    position: 6,
    team: "Stade Tunisien",
    logo: "/placeholder.svg?height=50&width=50",
    played: 15,
    won: 6,
    drawn: 5,
    lost: 4,
    goalsFor: 18,
    goalsAgainst: 16,
    goalDifference: 2,
    points: 23,
  },
  {
    position: 7,
    team: "CA Bizertin",
    logo: "/placeholder.svg?height=50&width=50",
    played: 15,
    won: 5,
    drawn: 6,
    lost: 4,
    goalsFor: 16,
    goalsAgainst: 18,
    goalDifference: -2,
    points: 21,
  },
  {
    position: 8,
    team: "US Ben Guerdane",
    logo: "/placeholder.svg?height=50&width=50",
    played: 15,
    won: 5,
    drawn: 4,
    lost: 6,
    goalsFor: 15,
    goalsAgainst: 20,
    goalDifference: -5,
    points: 19,
  },
  {
    position: 9,
    team: "AS Soliman",
    logo: "/placeholder.svg?height=50&width=50",
    played: 15,
    won: 4,
    drawn: 5,
    lost: 6,
    goalsFor: 14,
    goalsAgainst: 22,
    goalDifference: -8,
    points: 17,
  },
  {
    position: 10,
    team: "Olympique Béja",
    logo: "/placeholder.svg?height=50&width=50",
    played: 15,
    won: 3,
    drawn: 6,
    lost: 6,
    goalsFor: 12,
    goalsAgainst: 20,
    goalDifference: -8,
    points: 15,
  },
  {
    position: 11,
    team: "ES Métlaoui",
    logo: "/placeholder.svg?height=50&width=50",
    played: 15,
    won: 3,
    drawn: 4,
    lost: 8,
    goalsFor: 11,
    goalsAgainst: 24,
    goalDifference: -13,
    points: 13,
  },
  {
    position: 12,
    team: "JS Kairouan",
    logo: "/placeholder.svg?height=50&width=50",
    played: 15,
    won: 2,
    drawn: 5,
    lost: 8,
    goalsFor: 10,
    goalsAgainst: 26,
    goalDifference: -16,
    points: 11,
  },
]

// Comprehensive trophy data with historical context
export const allTrophies: Trophy[] = [
  // Football National Championships
  {
    id: "t1",
    title: "Championnat de Tunisie",
    year: 2024,
    competition: "Ligue 1 Tunisienne",
    image: "/tunisia-championship-trophy.png",
    description: "32ème titre de champion de Tunisie",
  },
  {
    id: "t2",
    title: "Championnat de Tunisie",
    year: 2023,
    competition: "Ligue 1 Tunisienne",
    image: "/tunisia-championship-trophy.png",
    description: "31ème titre de champion de Tunisie",
  },
  {
    id: "t3",
    title: "Championnat de Tunisie",
    year: 2022,
    competition: "Ligue 1 Tunisienne",
    image: "/tunisia-championship-trophy.png",
    description: "30ème titre de champion de Tunisie",
  },
  // CAF Champions League
  {
    id: "t4",
    title: "Ligue des Champions CAF",
    year: 2018,
    competition: "CAF Champions League",
    image: "/caf-champions-league-trophy.png",
    description: "4ème titre continental face à Al Ahly",
  },
  {
    id: "t5",
    title: "Ligue des Champions CAF",
    year: 2011,
    competition: "CAF Champions League",
    image: "/caf-champions-league-trophy.png",
    description: "3ème titre continental",
  },
  {
    id: "t6",
    title: "Ligue des Champions CAF",
    year: 1994,
    competition: "CAF Champions League",
    image: "/caf-champions-league-trophy.png",
    description: "2ème titre continental",
  },
  {
    id: "t7",
    title: "Coupe d'Afrique des Clubs Champions",
    year: 1982,
    competition: "CAF Champions League",
    image: "/caf-champions-league-trophy.png",
    description: "Premier titre continental historique",
  },
  // Tunisia Cup
  {
    id: "t8",
    title: "Coupe de Tunisie",
    year: 2024,
    competition: "Coupe de Tunisie",
    image: "/placeholder.svg?height=200&width=200",
    description: "17ème Coupe de Tunisie",
  },
  {
    id: "t9",
    title: "Coupe de Tunisie",
    year: 2023,
    competition: "Coupe de Tunisie",
    image: "/placeholder.svg?height=200&width=200",
    description: "16ème Coupe de Tunisie",
  },
  // Volleyball
  {
    id: "t10",
    title: "Championnat de Tunisie Volleyball",
    year: 2024,
    competition: "Championnat National",
    image: "/placeholder.svg?height=200&width=200",
    description: "13ème titre national de volleyball",
  },
  {
    id: "t11",
    title: "Coupe d'Afrique des Clubs Volleyball",
    year: 2023,
    competition: "CAV",
    image: "/placeholder.svg?height=200&width=200",
    description: "3ème titre continental de volleyball",
  },
  // Handball
  {
    id: "t12",
    title: "Championnat de Tunisie Handball Féminin",
    year: 2024,
    competition: "Championnat National",
    image: "/placeholder.svg?height=200&width=200",
    description: "9ème titre national de handball féminin",
  },
  {
    id: "t13",
    title: "Coupe de Tunisie Handball Féminine",
    year: 2024,
    competition: "Coupe Nationale",
    image: "/placeholder.svg?height=200&width=200",
    description: "7ème Coupe nationale de handball",
  },
]

export const standings = footballStandings2024
export const footballSquad = footballSquad2025
export const articles = allNews
export const recentTrophies: Trophy[] = allTrophies.slice(0, 6).sort((a, b) => b.year - a.year)

// Utility functions for data access
export function getFixturesBySport(sport: "football" | "volleyball" | "handball"): Fixture[] {
  switch (sport) {
    case "football":
      return footballFixtures
    case "volleyball":
      return volleyballFixtures
    case "handball":
      return handballFixtures
    default:
      return []
  }
}

export function getSquadBySport(sport: "football" | "volleyball" | "handball"): Player[] {
  switch (sport) {
    case "football":
      return footballSquad2025
    case "volleyball":
      return volleyballSquad2025
    case "handball":
      return handballSquad2025
    default:
      return []
  }
}

export function getTrophiesBySport(sport: "football" | "volleyball" | "handball"): Trophy[] {
  const sportKeywords = {
    football: ["Championnat de Tunisie", "Ligue des Champions", "Coupe de Tunisie", "Champions"],
    volleyball: ["Volleyball"],
    handball: ["Handball"],
  }

  return allTrophies.filter((trophy) =>
    sportKeywords[sport].some((keyword) => trophy.title.includes(keyword) || trophy.competition.includes(keyword)),
  )
}

export function getStandingsBySport(sport: "football" | "volleyball" | "handball", season = "2024-25") {
  // For now, return football standings as base - can be expanded for other sports
  if (sport === "football") {
    return footballStandings2024
  }
  // Return empty array for other sports - can be implemented later
  return []
}
