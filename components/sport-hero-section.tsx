interface SportHeroSectionProps {
  title: string
  subtitle: string
  description: string
  image: string
  color: string
}

export function SportHeroSection({ title, subtitle, description, image, color }: SportHeroSectionProps) {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "est-rouge":
        return "from-est-rouge/90 to-est-rouge/70"
      case "blue-600":
        return "from-blue-600/90 to-blue-600/70"
      case "green-600":
        return "from-green-600/90 to-green-600/70"
      default:
        return "from-est-rouge/90 to-est-rouge/70"
    }
  }

  return (
    <section className={`relative h-[50vh] min-h-[400px] overflow-hidden bg-gradient-to-r ${getColorClasses(color)}`}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <h2 className="text-xl md:text-2xl mb-6 text-gray-200">{subtitle}</h2>
          <p className="text-lg text-gray-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  )
}
