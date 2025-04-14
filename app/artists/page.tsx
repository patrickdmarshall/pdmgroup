import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Artists | PDM GROUP",
  description: "Explore the artists managed by PDM GROUP including RMR, Oke Junior, and Tay Da Prince.",
}

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

export default function ArtistsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        {/* Artist Overview Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Artists</h1>
              <p className="text-xl text-muted-foreground mb-8">
                We work closely with a small roster of artists we believe in — not just for their music, but for their
                vision.
              </p>
              <p className="text-muted-foreground mb-8">
                Each artist we manage receives a personalized approach that blends creative development, strategic
                planning, and long-term brand growth — both inside and outside of music.
              </p>
              <p className="text-muted-foreground">
                Tap into any artist to explore their story, projects, and partnerships.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Active artists */}
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
      </main>
      <Footer />
    </>
  )
}
