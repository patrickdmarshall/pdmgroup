import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

// This would typically come from a database or API
const artists = [
  {
    name: "RMR",
    slug: "rmr",
    description: "Genre-bending artist known for blending country and hip-hop elements",
    image: "/images/artist-rmr.png",
  },
  {
    name: "Oke Junior",
    slug: "okejunior",
    description: "Rising star with a unique sound and compelling storytelling",
    image: "/images/artist-oke-junior.png",
  },
  {
    name: "Tay Da Prince",
    slug: "taydaprince",
    description: "Innovative artist pushing boundaries in R&B music. Singer, songwriter, and producer.",
    image: "/images/artist-tay-da-prince.png",
  },
]

export default function ArtistPage({ params }: { params: { slug: string } }) {
  const artist = artists.find((a) => a.slug === params.slug)

  if (!artist) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <Link href="/#artists">
          <Button variant="ghost" className="mb-8 pl-0">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Artists
          </Button>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative aspect-square bg-muted overflow-hidden">
            <img src={artist.image || "/placeholder.svg"} alt={artist.name} className="object-cover w-full h-full" />
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{artist.name}</h1>
            <p className="text-xl text-muted-foreground mb-8">{artist.description}</p>

            <div className="border-t pt-8 mt-8">
              <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
              <p className="text-muted-foreground">
                More information about {artist.name} will be available soon. Check back later for updates on releases,
                tours, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
