import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | PDM GROUP",
  description: "Get in touch with PDM GROUP for artist management and business consulting",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact PDM GROUP</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Reach out to discuss how PDM GROUP can help your creative project or business venture.
            </p>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" className="rounded-none" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" className="rounded-none" />
                </div>
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
                    <SelectItem value="business">Business Inquiry</SelectItem>
                    <SelectItem value="artist">Artist Submission</SelectItem>
                    <SelectItem value="press">Press Inquiry</SelectItem>
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
                  placeholder="Tell us about your project"
                  className="rounded-none min-h-[200px]"
                />
              </div>

              <Button type="submit" className="rounded-none px-8 py-6 h-auto text-lg">
                Send Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
