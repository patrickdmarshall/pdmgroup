import { Music, Briefcase, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DualPathway() {
  return (
    <section className="py-16 sm:py-20 md:py-32" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For Creatives */}
          <div id="creatives" className="grid-item group">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 flex items-center">
              <Music className="mr-3 h-6 w-6 sm:h-8 sm:w-8" />
              For Creatives
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <div className="border-t pt-4 sm:pt-6">
                <h3 className="text-lg sm:text-xl font-medium mb-2">Artist Management</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Personalized career strategy and hands-on support for emerging and established artists.
                </p>
              </div>
              <div className="border-t pt-4 sm:pt-6">
                <h3 className="text-lg sm:text-xl font-medium mb-2">Campaign Strategy</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Release planning, marketing rollouts, and audience growth across platforms.
                </p>
              </div>
              <div className="border-t pt-4 sm:pt-6">
                <h3 className="text-lg sm:text-xl font-medium mb-2">Creative Resources</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  A network of trusted photographers, designers, and content creators to bring your vision to life.
                </p>
              </div>
              <div className="border-t pt-4 sm:pt-6">
                <h3 className="text-lg sm:text-xl font-medium mb-2">Merch & Brand Building</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  From visual identity to physical product — we help you build a brand that lasts beyond the music.
                </p>
              </div>
              <div className="mt-6 sm:mt-8">
                <Button className="rounded-none w-full sm:w-auto" asChild>
                  <Link href="/artists" className="flex items-center justify-center">
                    View Our Artists <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* For Businesses */}
          <div id="businesses" className="grid-item group">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 flex items-center">
              <Briefcase className="mr-3 h-6 w-6 sm:h-8 sm:w-8" />
              For Businesses
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <div className="border-t pt-4 sm:pt-6">
                <h3 className="text-lg sm:text-xl font-medium mb-2">Tech & Product Consulting</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  From product ideation to launch — we advise on UX, development, and go-to-market.
                </p>
              </div>
              <div className="border-t pt-4 sm:pt-6">
                <h3 className="text-lg sm:text-xl font-medium mb-2">Startup Support</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Fractional strategy and infrastructure for early-stage ventures looking to move fast and scale smart.
                </p>
              </div>
              <div className="border-t pt-4 sm:pt-6">
                <h3 className="text-lg sm:text-xl font-medium mb-2">Data-Driven Tools</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Custom dashboards, reporting flows, and analytics systems for actionable insights.
                </p>
              </div>
              <div className="border-t pt-4 sm:pt-6">
                <h3 className="text-lg sm:text-xl font-medium mb-2">Internal AI Solutions</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Tailored AI workflows and implementations designed to boost team efficiency and ops clarity.
                </p>
              </div>
              <div className="mt-6 sm:mt-8">
                <Button className="rounded-none w-full sm:w-auto" asChild>
                  <Link href="/consulting" className="flex items-center justify-center">
                    Explore Consulting <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
