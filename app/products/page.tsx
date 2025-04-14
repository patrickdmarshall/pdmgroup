import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ExternalLink, Briefcase, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Products | PDM GROUP",
  description: "Explore the innovative products developed by PDM GROUP",
}

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Products</h1>
            <p className="text-xl text-muted-foreground">
              Innovative tools and platforms developed by PDM GROUP to empower artists and creative businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Product */}
            <div className="border border-border group relative">
              <div className="relative aspect-square bg-black overflow-hidden">
                <img
                  src="/images/products/tour-van.png"
                  alt="Tour planning and management tool"
                  className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={500}
                  height={500}
                />
                <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm px-3 py-1 text-xs font-medium">
                  Launching Soon
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 relative">
                  <span className="blur-sm">Sprintier</span>
                  <span className="absolute inset-0 flex items-center justify-center text-transparent">••••••••</span>
                </h2>
                <p className="text-muted-foreground mb-4">Tour planning and management tool for artists and managers</p>
                <Button variant="outline" className="rounded-none w-full" disabled>
                  <span className="flex items-center justify-center">
                    Coming Soon <ExternalLink className="ml-2 h-4 w-4" />
                  </span>
                </Button>
              </div>
            </div>

            {/* Enterprise Opportunities */}
            <div className="border border-border bg-secondary/20">
              <div className="p-6">
                <Briefcase className="h-10 w-10 mb-4" />
                <h2 className="text-2xl font-bold mb-4">Enterprise Opportunities</h2>
                <p className="mb-4">
                  PDM GROUP offers unique marketing opportunities for enterprise and business clients through our artist
                  network.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Users className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Access to our roster of artists for brand partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Custom campaign development with creative talent</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Exclusive content creation opportunities</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contact" className="rounded-none w-full">
                    <span className="flex items-center justify-center">
                      Inquire About Opportunities <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
