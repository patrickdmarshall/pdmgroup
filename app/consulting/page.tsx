import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowRight, Briefcase, Lightbulb, Code, TrendingUp, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Consulting | PDM GROUP",
  description: "Business and creative strategy consulting services from PDM GROUP",
}

const services = [
  {
    title: "Business Strategy",
    description: "Strategic planning, market analysis, and growth frameworks for creative businesses and startups",
    icon: <Briefcase className="h-8 w-8" />,
  },
  {
    title: "Creative Direction",
    description: "Brand identity development, campaign conceptualization, and creative asset production",
    icon: <Lightbulb className="h-8 w-8" />,
  },
  {
    title: "Product Development",
    description:
      "End-to-end product development from concept to launch, with a focus on user experience and market fit",
    icon: <Code className="h-8 w-8" />,
  },
  {
    title: "Growth & Marketing",
    description: "Data-driven marketing strategies, audience development, and conversion optimization",
    icon: <TrendingUp className="h-8 w-8" />,
  },
]

const pastProducts = [
  {
    title: "Arkade",
    description: "Gaming platform connecting players with their favorite artists through interactive experiences",
    image: "/images/products/arkade.png",
    link: "https://www.arkade.fun",
  },
  {
    title: "The Wage Gap Calculator",
    description:
      "Interactive tool helping organizations identify and address pay disparities across demographics. Due to privacy concerns, this tool is available through direct consultation only.",
    image: "/images/products/wage-gap-calculator.png",
    link: "#",
  },
  {
    title: "Level Play",
    description:
      "Platform connecting artists with venues to create more performance opportunities and streamline booking",
    image: "/images/products/levelplay.png",
    bgColor: "bg-black", // Adding black background for the white logo
    link: "https://levelplay.co",
  },
]

export default function ConsultingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Consulting</h1>
            <p className="text-xl text-muted-foreground mb-8">
              PDM GROUP provides strategic consulting services for brands, startups, and creative businesses looking to
              innovate and grow.
            </p>
            <Button className="rounded-none" asChild>
              <a href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="border border-border p-6">
                <div className="mb-4">{service.icon}</div>
                <h2 className="text-xl font-bold mb-2">{service.title}</h2>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="border border-border p-8 bg-secondary/20 mb-16">
            <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
            <p className="mb-6">
              We take a founder-led approach to consulting, combining cultural intuition with operational expertise. Our
              team has experience across multiple industries and disciplines, allowing us to provide comprehensive
              solutions tailored to your specific needs.
            </p>
            <p className="mb-6">
              Whether you're a startup looking to refine your product strategy or an established brand seeking creative
              direction, we work closely with you to develop actionable insights and implementable solutions.
            </p>
            <Button variant="outline" className="rounded-none" asChild>
              <a href="/contact">
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Recent Products Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 border-b pb-2">Recent Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastProducts.map((product, index) => (
                <div key={index} className="border border-border group">
                  <div className={`relative aspect-video overflow-hidden ${product.bgColor || "bg-muted"}`}>
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    {product.title === "The Wage Gap Calculator" ? (
                      <Button variant="outline" className="rounded-none w-full" asChild>
                        <a href="/contact" className="flex items-center justify-center">
                          Request Information <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    ) : (
                      <Button variant="outline" className="rounded-none w-full" asChild>
                        <a
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
