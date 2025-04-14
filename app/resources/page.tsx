import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Download, Calendar, Bot, ShoppingCart, Music } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Resources | PDM GROUP",
  description: "Free tools and resources from PDM GROUP to help creative professionals and businesses",
}

const resources = [
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

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
            <p className="text-xl text-muted-foreground">
              Free tools and templates to help streamline your creative and business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="grid-item flex flex-col h-full">
                <div className="mb-4">{resource.icon}</div>
                <h3 className="text-xl font-medium mb-2">{resource.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                <div className="mt-auto flex items-center justify-between">
                  <Badge variant="outline" className="rounded-none">
                    {resource.status}
                  </Badge>
                  <Button variant="ghost" size="sm" className="p-0 h-auto" asChild>
                    <Link href={resource.link}>
                      {resource.locked ? (
                        "Request Access"
                      ) : (
                        <>
                          <Download className="h-4 w-4 mr-2" />
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
      </main>
      <Footer />
    </>
  )
}
