"use client"
import { useInView } from "react-intersection-observer"

export default function BrandsShowcase() {
  // Use intersection observer to trigger animation when component is in view
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Reordered brands with Moss&Co, Chaser Capital, and All Gas Athletic placed higher
  const brands = [
    {
      name: "Moss & Co",
      logo: "/images/brands/moss-and-co-white.png", // Using the white logo
      link: "https://www.mossnc.com/",
      size: "large", // Larger size for featured brands
      needsBackground: false, // No white background
    },
    {
      name: "Chaser Capital",
      logo: "/images/brands/chaser-capital.jpeg",
      link: "https://www.instagram.com/chasercapital/",
      size: "large",
    },
    {
      name: "All Gas Athletic",
      logo: "/images/brands/all-gas-athletic.jpeg",
      link: "https://allgasathletic.com",
      size: "large",
    },
    {
      name: "United Masters",
      logo: "/images/brands/united-masters-updated.jpeg",
      link: "https://unitedmasters.com/",
      size: "medium",
    },
    {
      name: "Spotify",
      logo: "/images/brands/spotify-updated.svg",
      link: "https://spotify.com",
      size: "medium",
    },
    {
      name: "567 Agency",
      logo: "/images/brands/567-agency.png",
      link: "https://www.instagram.com/567agency",
      size: "large", // Enlarged 567 image
    },
    {
      name: "Golden Goose",
      logo: "/images/brands/golden-goose-updated.png",
      link: "https://www.goldengoose.com/",
      size: "medium",
    },
    {
      name: "NFL",
      logo: "/images/brands/nfl-updated.png",
      link: "https://www.nfl.com/",
      size: "medium",
    },
    {
      name: "HWYDK Foundation",
      logo: "/images/brands/hwydk-foundation.png",
      link: "https://hearwhatyoudontknowfdn.org/",
      size: "medium",
      needsBackground: true, // Added white background back for visibility
      subtleBackground: true, // Flag for a more subtle background
    },
  ]

  // Function to determine size class based on brand size property
  const getSizeClass = (size: string) => {
    switch (size) {
      case "large":
        return "w-48 h-48 md:w-56 md:h-56"
      case "medium":
        return "w-40 h-40 md:w-48 md:h-48"
      case "small":
        return "w-32 h-32 md:w-40 md:h-40"
      default:
        return "w-40 h-40 md:w-48 md:h-48"
    }
  }

  // Function to get animation delay based on index
  const getAnimationDelay = (index: number) => {
    return `${index * 0.1}s`
  }

  // Function to get image dimensions based on size
  const getImageDimensions = (size: string) => {
    switch (size) {
      case "large":
        return { width: 224, height: 224 }
      case "medium":
        return { width: 192, height: 192 }
      case "small":
        return { width: 160, height: 160 }
      default:
        return { width: 192, height: 192 }
    }
  }

  return (
    <section className="py-20 md:py-32" id="brands" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Brands We Work With</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We've collaborated with leading brands across industries to create meaningful partnerships and campaigns.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {brands.map((brand, index) => {
            const dimensions = getImageDimensions(brand.size)
            return (
              <a
                key={index}
                href={brand.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  ${getSizeClass(brand.size)}
                  flex items-center justify-center
                  ${
                    brand.needsBackground
                      ? brand.subtleBackground
                        ? "bg-gray-100/90" // Subtle white background for HWYDK
                        : "bg-white"
                      : "bg-secondary/30 backdrop-blur-sm"
                  } 
                  border border-secondary/50
                  rounded-lg
                  transform transition-all duration-500
                  hover:scale-105 ${brand.needsBackground ? "hover:bg-gray-200" : "hover:bg-secondary/50"}
                  ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                `}
                style={{
                  transitionDelay: getAnimationDelay(index),
                  animationDelay: getAnimationDelay(index),
                }}
              >
                <div className="relative w-full h-full p-6 flex items-center justify-center overflow-hidden">
                  <img
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    className="max-w-[85%] max-h-[85%] object-contain"
                    loading="lazy"
                    width={dimensions.width}
                    height={dimensions.height}
                  />

                  {/* Hover overlay with brand name */}
                  <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <span className="text-white font-medium text-center px-4">{brand.name}</span>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
