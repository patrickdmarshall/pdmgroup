import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import DualPathway from "@/components/dual-pathway"
import ArtistsSection from "@/components/artists-section"
import BrandsShowcase from "@/components/brands-showcase"
import ToolsSection from "@/components/tools-section"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <DualPathway />
      <BrandsShowcase />
      <ArtistsSection />
      <ToolsSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
