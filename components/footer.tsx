"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Globe, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Route to company.pdm@gmail.com
    console.log("Subscribing email to company.pdm@gmail.com:", email)
    alert("Thank you for subscribing! We'll be in touch soon.")
    setEmail("")
  }

  return (
    <footer className="py-12 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/images/pdm-logo-white.png"
              alt="PDM GROUP"
              width={80}
              height={30}
              className="h-8 w-auto mb-4"
            />
            <p className="text-muted-foreground text-sm mt-4">
              Founder-led group for creative culture and operational clarity.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://instagram.com/pdmgrp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/pdmgrp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/artists" className="text-muted-foreground hover:text-foreground">
                  Artists
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-foreground">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/consulting" className="text-muted-foreground hover:text-foreground">
                  Consulting
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-foreground">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#creatives" className="text-muted-foreground hover:text-foreground">
                  For Creatives
                </Link>
              </li>
              <li>
                <Link href="/#businesses" className="text-muted-foreground hover:text-foreground">
                  For Businesses
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 pb-4">
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Subscribe to our newsletter"
              className="rounded-none flex-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="rounded-none">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>

        <div className="pt-6 text-sm text-muted-foreground text-center">
          <p>© {new Date().getFullYear()} PDM GROUP. All rights reserved.</p>
          <p className="mt-1">
            Founded & Developed by{" "}
            <a
              href="https://www.instagram.com/patrickdmar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Patrick Marshall
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
