import { ArrowRight, Music, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DualPathway() {
  return (
    <section className="py-20 md:py-32" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For Creatives */}
          <div id="creatives" className="grid-item group">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center">
              <Music className="mr-3 h-8 w-8" />
              For Creatives
            </h2>
            <div className="space-y-6">
              <div className="border-t pt-6">
                <h3 className="text-xl font-medium mb-2">Artist Management</h3>
                <p className="text-muted-foreground">
                  Strategic career development and representation for emerging and established artists.
                </p>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-xl font-medium mb-2">Campaign Strategy</h3>
                <p className="text-muted-foreground">
                  Comprehensive release planning and marketing campaigns that connect with audiences.
                </p>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-xl font-medium mb-2">Creative Resources</h3>
                <p className="text-muted-foreground">
                  Access to our network of photographers, designers, and content creators.
                </p>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-xl font-medium mb-2">Merch & Brand Building</h3>
                <p className="text-muted-foreground">End-to-end merchandise development and brand identity creation.</p>
              </div>
            </div>
            <div className="mt-10">
              <Button
                variant="outline"
                className="rounded-none group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
              >
                Explore Artist Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* For Businesses */}
          <div id="businesses" className="grid-item group">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center">
              <Briefcase className="mr-3 h-8 w-8" />
              For Businesses
            </h2>
            <div className="space-y-6">
              <div className="border-t pt-6">
                <h3 className="text-xl font-medium mb-2">Tech & Product Consulting</h3>
                <p className="text-muted-foreground">
                  Strategic guidance on product development, UX, and technical implementation.
                </p>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-xl font-medium mb-2">Startup Support</h3>
                <p className="text-muted-foreground">
                  Operational frameworks and growth strategies for early-stage ventures.
                </p>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-xl font-medium mb-2">Data-Driven Tools</h3>
                <p className="text-muted-foreground">
                  Custom analytics solutions and dashboards for informed decision-making.
                </p>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-xl font-medium mb-2">Internal AI Solutions</h3>
                <p className="text-muted-foreground">
                  Tailored AI implementations to streamline operations and enhance productivity.
                </p>
              </div>
            </div>
            <div className="mt-10">
              <Button
                variant="outline"
                className="rounded-none group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
              >
                View Client Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
