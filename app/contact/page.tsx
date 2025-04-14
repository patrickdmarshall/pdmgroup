"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    // In a real implementation, this would send the form data to company.pdm@gmail.com
    setTimeout(() => {
      alert("Thank you for your submission! We'll be in touch soon.")
      setSubmitting(false)
      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1000)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact PDM GROUP</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Reach out to discuss how PDM GROUP can help your creative project or business venture.
            </p>

            <Tabs defaultValue="submissions" className="mb-12">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="submissions">Artist Submissions</TabsTrigger>
                <TabsTrigger value="business">Business Inquiries</TabsTrigger>
                <TabsTrigger value="general">General Contact</TabsTrigger>
              </TabsList>

              <TabsContent value="submissions">
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" className="rounded-none" required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your@email.com" className="rounded-none" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="social-links" className="text-sm font-medium">
                      Social Media Links
                    </label>
                    <Input id="social-links" placeholder="Instagram, Spotify, YouTube, etc." className="rounded-none" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="music-links" className="text-sm font-medium">
                      Music Links
                    </label>
                    <Input
                      id="music-links"
                      placeholder="SoundCloud, Spotify, Apple Music, etc."
                      className="rounded-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Tell Us About Your Music
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Share your story, influences, and goals"
                      className="rounded-none min-h-[200px]"
                    />
                  </div>

                  <Button type="submit" className="rounded-none px-8 py-6 h-auto text-lg" disabled={submitting}>
                    {submitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="business">
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" className="rounded-none" required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your@email.com" className="rounded-none" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company
                    </label>
                    <Input id="company" placeholder="Your company name" className="rounded-none" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="inquiry-type" className="text-sm font-medium">
                      Inquiry Type
                    </label>
                    <Select>
                      <SelectTrigger className="rounded-none">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consulting">Consulting Services</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="products">Product Inquiry</SelectItem>
                        <SelectItem value="artist-marketing">Artist Marketing Collaboration</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project or inquiry"
                      className="rounded-none min-h-[200px]"
                    />
                  </div>

                  <Button type="submit" className="rounded-none px-8 py-6 h-auto text-lg" disabled={submitting}>
                    {submitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="general">
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" className="rounded-none" required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your@email.com" className="rounded-none" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Subject of your message" className="rounded-none" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message" className="rounded-none min-h-[200px]" required />
                  </div>

                  <Button type="submit" className="rounded-none px-8 py-6 h-auto text-lg" disabled={submitting}>
                    {submitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
