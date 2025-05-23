"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const { clientX, clientY } = e
      const { width, height, left, top } = heroRef.current.getBoundingClientRect()

      const x = (clientX - left) / width
      const y = (clientY - top) / height

      heroRef.current.style.setProperty("--mouse-x", `${x}`)
      heroRef.current.style.setProperty("--mouse-y", `${y}`)
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center relative noise-bg scanline"
      style={{
        backgroundImage:
          "radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(100, 100, 100, 0.1), transparent 30%)",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 pt-20">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Creative Business, Done Right.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl">
            PDM Group supports artists and companies through product, strategy, and execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#creatives">
              <Button className="rounded-none text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto w-full sm:w-auto">
                Build With Us
              </Button>
            </Link>
            <Link href="#businesses">
              <Button
                variant="outline"
                className="rounded-none text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto w-full sm:w-auto"
              >
                Create With Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
