import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import DualPathway from "@/components/dual-pathway";
import ArtistsSection from "@/components/artists-section";
import ToolsSection from "@/components/tools-section";
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DualPathway />
      <ArtistsSection />
      <ToolsSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
