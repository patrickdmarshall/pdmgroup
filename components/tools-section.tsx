import { Download, Calendar, Bot, ShoppingCart, Music, Lock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ToolsSection() {
  const tools = [
    {
      title: "Tour Budget Template",
      description: "Comprehensive template for planning and tracking tour expenses",
      icon: <Calendar className="h-6 w-6" />,
      status: "Free",
      link: "#",
    },
    {
      title: "Credit Building Guide",
      description: "Step-by-step guide to building and maintaining strong credit for artists and entrepreneurs",
      icon: <Bot className="h-6 w-6" />,
      status: "Free",
      link: "#",
    },
    {
      title: "Ecomm Planning Checklist",
      description: "Step-by-step guide for launching merchandise and digital products",
      icon: <ShoppingCart className="h-6 w-6" />,
      status: "Free",
      link: "#",
    },
    {
      title: "Sync Strategy Guide",
      description: "Framework for placing music in film, TV, and advertising",
      icon: <Music className="h-6 w-6" />,
      status: "Coming Soon",
      link: "#",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-secondary/50" id="resources">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Resources</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Free tools and templates to help streamline your creative and business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="grid-item flex flex-col h-full relative">
              {/* Lock overlay */}
              <div className="absolute inset-0 bg-background/80 flex items-center justify-center z-10">
                <Lock className="h-8 w-8 text-muted-foreground" />
              </div>

              <div className="mb-4">{tool.icon}</div>
              <h3 className="text-xl font-medium mb-2">{tool.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{tool.description}</p>
              <div className="mt-auto flex items-center justify-between">
                <Badge variant={tool.status === "Free" ? "outline" : "secondary"} className="rounded-none">
                  {tool.status}
                </Badge>
                <Button variant="ghost" size="sm" className="p-0 h-auto" disabled={tool.status === "Coming Soon"}>
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
