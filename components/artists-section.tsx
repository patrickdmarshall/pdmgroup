import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ArtistsSection() {
  const artists = [
    {
      name: "RMR",
      slug: "rmr",
      description: "Genre-bending artist known for blending country and hip-hop elements",
      image: "/images/artist-rmr.png",
      category: "Artist",
    },
    {
      name: "Oke Junior",
      slug: "okejunior",
      description: "Rising star with a unique sound and compelling storytelling",
      image: "/images/artist-oke-junior.png",
      category: "Artist",
    },
    {
      name: "Tay Da Prince",
      slug: "taydaprince",
      description: "Innovative artist pushing boundaries in R&B music. Singer, songwriter, and producer.",
      image: "/images/artist-tay-da-prince.png",
      category: "Artist",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-secondary/50" id="artists">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Artists</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {artists.map((artist, index) => (
            <Link href={`/artists/${artist.slug}`} key={index}>
              <div className="grid-item group cursor-pointer h-full">
                <div className="relative aspect-square bg-muted mb-4 overflow-hidden">
                  <img
                    src={artist.image || "/placeholder.svg"}
                    alt={artist.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge variant="secondary" className="absolute top-3 left-3 rounded-none">
                    {artist.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-medium mb-2 group-hover:underline">{artist.name}</h3>
                <p className="text-muted-foreground text-sm">{artist.description}</p>
                <div className="mt-4 flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  View Artist <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
