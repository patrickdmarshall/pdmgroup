"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BrandsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  // Reordered brands with Moss&Co, Chaser Capital, and All Gas Athletic placed higher
  const brands = [
    {
      name: "Moss & Co",
      logo: "/images/brands/moss-and-co.png",
      link: "https://www.mossnc.com/",
    },
    {
      name: "Chaser Capital",
      logo: "/images/brands/chaser-capital.jpeg",
      link: "https://www.instagram.com/chasercapital/",
    },
    {
      name: "All Gas Athletic",
      logo: "/images/brands/all-gas-athletic.jpeg",
      link: "https://allgasathletic.com",
    },
    {
      name: "United Masters",
      logo: "/images/brands/united-masters-updated.jpeg",
      link: "https://unitedmasters.com/",
    },
    {
      name: "Spotify",
      logo: "/images/brands/spotify-updated.svg",
      link: "https://spotify.com",
    },
    {
      name: "567 Agency",
      logo: "/images/brands/567-agency.png",
      link: "https://www.instagram.com/567agency",
    },
    {
      name: "Golden Goose",
      logo: "/images/brands/golden-goose-updated.png",
      link: "https://www.goldengoose.com/",
    },
    {
      name: "NFL",
      logo: "/images/brands/nfl-updated.png",
      link: "https://www.nfl.com/",
    },
    {
      name: "HWYDK Foundation",
      logo: "/images/brands/hwydk-foundation.png",
      link: "https://hearwhatyoudontknowfdn.org/",
    },
  ]

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollInterval: NodeJS.Timeout
    let direction = "right"
    let isPaused = false

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (isPaused) return

        if (scrollContainer) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollContainer

          // Change direction when reaching the end
          if (scrollLeft >= scrollWidth - clientWidth - 10) {
            direction = "left"
          } else if (scrollLeft <= 10) {
            direction = "right"
          }

          // Scroll in the current direction
          scrollContainer.scrollBy({
            left: direction === "right" ? 1 : -1,
            behavior: "auto",
          })
        }
      }, 30)
    }

    // Start auto-scrolling after a delay
    const initialTimeout = setTimeout(() => {
      startAutoScroll()
    }, 2000)

    // Pause auto-scroll when user interacts
    const handleMouseEnter = () => {
      isPaused = true
    }
    const handleMouseLeave = () => {
      isPaused = false
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)
    scrollContainer.addEventListener("scroll", checkScrollButtons)

    // Initial check
    checkScrollButtons()

    // Check after images might have loaded
    window.addEventListener("load", checkScrollButtons)

    // Check on resize
    window.addEventListener("resize", checkScrollButtons)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(scrollInterval)

      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
        scrollContainer.removeEventListener("scroll", checkScrollButtons)
      }

      window.removeEventListener("load", checkScrollButtons)
      window.removeEventListener("resize", checkScrollButtons)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current
      const scrollAmount = clientWidth * 0.8
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-20 md:py-32" id="brands">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Brands We Work With</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We've collaborated with leading brands across industries to create meaningful partnerships and campaigns.
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide gap-8 py-6 px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {brands.map((brand, index) => (
              <a
                key={index}
                href={brand.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-64 h-40 border border-border flex items-center justify-center bg-white transition-all hover:bg-gray-100 rounded-md overflow-hidden"
              >
                <img
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  className="max-w-[85%] max-h-[85%] object-contain"
                />
              </a>
            ))}
          </div>

          {canScrollLeft && (
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm z-10"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Scroll left</span>
            </Button>
          )}

          {canScrollRight && (
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm z-10"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Scroll right</span>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
