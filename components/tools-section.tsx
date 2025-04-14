import { Download, Calendar, Bot, ShoppingCart, Music } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ToolsSection() {
  const tools = [
    {
      title: "Credit Building Guide",
      description: "Step-by-step guide to building and maintaining strong credit for artists and entrepreneurs",
      icon: <Bot className="h-6 w-6" />,
      status: "Free",
      link: "/resources/credit-guide",
      locked: false,
    },
    {
      title: "Business Credit Guide",
      description: "Comprehensive guide for establishing and building business credit for creative ventures",
      icon: <Calendar className="h-6 w-6" />,
      status: "Free", // Changed to Free
      link: "/contact",
      locked: true,
    },
    {
      title: "Bundling Music and Merch for Record Sales",
      description: "Strategies for combining digital and physical products to maximize revenue",
      icon: <ShoppingCart className="h-6 w-6" />,
      status: "Free", // Changed to Free
      link: "/contact",
      locked: true,
    },
    {
      title: "Sync Placement Guides & Contacts",
      description: "Industry contacts and frameworks for placing music in film, TV, and advertising",
      icon: <Music className="h-6 w-6" />,
      status: "Free", // Changed to Free
      link: "/contact",
      locked: true,
    },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-32 bg-secondary/50" id="resources">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Resources</h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 max-w-2xl text-sm sm:text-base">
            Free tools and templates to help streamline your creative and business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="grid-item flex flex-col h-full">
              <div className="mb-4">{tool.icon}</div>
              <h3 className="text-lg sm:text-xl font-medium mb-2">{tool.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm mb-4">{tool.description}</p>
              <div className="mt-auto flex items-center justify-between">
                <Badge variant="outline" className="rounded-none text-xs">
                  {tool.status}
                </Badge>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-xs sm:text-sm" asChild>
                  <Link href={tool.link}>
                    {tool.locked ? (
                      "Request Access"
                    ) : (
                      <>
                        <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        Access Guide
                      </>
                    )}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
