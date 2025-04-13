"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-sm border-b" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <Image src="/images/pdm-logo-white.png" alt="PDM GROUP" width={80} height={30} className="h-8 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/#creatives" className="text-sm uppercase tracking-wider hover:text-primary/80">
            For Creatives
          </Link>
          <Link href="/#businesses" className="text-sm uppercase tracking-wider hover:text-primary/80">
            For Businesses
          </Link>
          <Link href="/#resources" className="text-sm uppercase tracking-wider hover:text-primary/80">
            Resources
          </Link>
          <Link href="/#about" className="text-sm uppercase tracking-wider hover:text-primary/80">
            About
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="rounded-none text-sm uppercase tracking-wider">
              Contact
            </Button>
          </Link>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-l">
            <nav className="flex flex-col space-y-6 mt-10">
              <Link href="/#creatives" className="text-lg uppercase tracking-wider">
                For Creatives
              </Link>
              <Link href="/#businesses" className="text-lg uppercase tracking-wider">
                For Businesses
              </Link>
              <Link href="/#resources" className="text-lg uppercase tracking-wider">
                Resources
              </Link>
              <Link href="/#about" className="text-lg uppercase tracking-wider">
                About
              </Link>
              <Link href="/contact" className="text-lg uppercase tracking-wider">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
