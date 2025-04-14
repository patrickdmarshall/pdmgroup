"use client"

import type React from "react"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { Instagram, Youtube, Globe, Music, ExternalLink, Mail, AlertCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Helper function to extract YouTube video ID and get thumbnail URL
function getYouTubeThumbnail(url: string): string {
  try {
    // Extract video ID from various YouTube URL formats
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)

    if (match && match[2].length === 11) {
      // Return high quality thumbnail URL
      return `https://img.youtube.com/vi/${match[2]}/hqdefault.jpg`
    }

    // Return placeholder if no match
    return "/placeholder.svg?height=720&width=1280"
  } catch (error) {
    return "/placeholder.svg?height=720&width=1280"
  }
}

// This would typically come from a database or API
const artists = [
  {
    name: "RMR",
    slug: "rmr",
    description: "Genre-bending artist known for blending country and hip-hop elements",
    fullBio:
      "RMR is a genre-defying artist who burst onto the scene with his viral hit 'Rascal,' a reimagining of Rascal Flatts' 'Bless the Broken Road.' His unique blend of country and hip-hop elements, combined with his distinctive masked appearance, has made him one of the most intriguing new voices in music. With a soulful voice and honest lyrics, RMR continues to push boundaries and challenge genre conventions.",
    image: "/images/artist-rmr.png",
    brands: [
      { name: "PGA", logo: "/images/brands/pga.png", needsBackground: false },
      { name: "Comcast", logo: "/images/brands/comcast.png", needsBackground: false },
      { name: "Kid Super", logo: "/images/brands/kidsuper.png", needsBackground: true, zoom: true },
      { name: "Diesel", logo: "/images/brands/diesel.png", needsBackground: false },
      { name: "Golden Goose", logo: "/images/brands/golden-goose.png", needsBackground: true },
      { name: "Reese Cooper", logo: "/images/brands/reese-cooper.png", needsBackground: false },
      { name: "Luc Belaire", logo: "/images/brands/luc-belaire.png", needsBackground: true },
      { name: "Liquid Death", logo: "/images/brands/liquid-death.png", needsBackground: true },
    ],
    socials: {
      spotify: "https://open.spotify.com/artist/0j1Pwmd6nuk0BXD1RqoHDw",
      youtube: "https://www.youtube.com/@WhatRMR",
      website: "https://whatrmr.co",
      instagram: "https://www.instagram.com/whatrmr/",
    },
    upcomingDates: [],
    upcomingMessage: "Tour dates coming soon. Sign up for updates to be the first to know about upcoming shows.",
    latestVideos: [
      {
        title: "RMR - You Won't See My Face",
        link: "https://www.youtube.com/watch?v=UatsCYREQZI",
      },
      {
        title: "RMR - Sweet Divorce",
        link: "https://www.youtube.com/watch?v=iThr4xto7GU",
      },
      {
        title: "RMR - MR.",
        link: "https://www.youtube.com/watch?v=b3vtctVs5cQ",
      },
    ],
    latestReleases: [
      {
        title: "Chocolate Chip Life",
        type: "Single",
        cover: "/images/releases/chocolate-chip-life-rmr.jpeg",
        releaseDate: "2023",
        link: "https://open.spotify.com/album/67CtIbn94TOyst35qqvfa9",
      },
      {
        title: "Tribune",
        type: "Album",
        cover: "/images/releases/tribune-rmr.jpeg",
        releaseDate: "2024",
        link: "https://open.spotify.com/album/2IMo9GhZ5bhD2FRX2tctZm",
      },
      {
        title: "DRUG DEALING IS A LOST ART",
        type: "EP",
        cover: "/images/releases/drugdealingisalostart-rmr.jpeg",
        releaseDate: "2020",
        link: "https://open.spotify.com/album/2wFBXSq8EyQNEtqXg8Xej2",
      },
    ],
  },
  {
    name: "Oke Junior",
    slug: "okejunior",
    description: "Rising star with a unique sound and compelling storytelling",
    fullBio:
      "Oke Junior is a rising star in the music industry, known for his unique sound and compelling storytelling. With influences ranging from classic hip-hop to contemporary R&B, Oke Junior creates music that resonates with listeners on a deep emotional level. His authentic approach to songwriting and performance has earned him a growing fanbase and critical acclaim.",
    image: "/images/artist-oke-junior.png",
    brands: [
      { name: "United Masters", logo: "/images/brands/united-masters.jpeg", needsBackground: false },
      { name: "Spotify", logo: "/images/brands/spotify.svg", needsBackground: true },
      { name: "OTE", logo: "/images/brands/ote.png", needsBackground: false },
      { name: "NASCAR", logo: "/images/brands/nascar-updated.png", needsBackground: false },
      { name: "ESPN", logo: "/images/brands/espn.png", needsBackground: true },
      { name: "NFL", logo: "/images/brands/nfl.png", needsBackground: true },
      { name: "Wingstop", logo: "/images/brands/wingstop.png", needsBackground: true },
      { name: "HBO Max", logo: "/images/brands/hbo-max.jpeg", needsBackground: false },
      { name: "Bulleit", logo: "/images/brands/bulleit.jpeg", needsBackground: true },
      { name: "Club Shay Shay", logo: "/images/brands/club-shay-shay.jpeg", needsBackground: false },
      { name: "AT&T", logo: "/images/brands/att.png", needsBackground: false },
      { name: "Ally Financial", logo: "/images/brands/ally-financial.png", needsBackground: true },
    ],
    socials: {
      spotify: "https://open.spotify.com/artist/5vjAO8SJCky5YKbuJXxP9g",
      youtube: "https://www.youtube.com/@okejunior510",
      website: "https://okejunior.com",
      instagram: "https://www.instagram.com/okejunior/",
    },
    upcomingDates: [
      {
        date: "April 25, 2025",
        venue: "RichesArt Gallery",
        location: "Austin, TX",
        ticketLink: "#",
        ticketStatus: "coming-soon",
      },
      {
        date: "May 4-5, 2025",
        venue: "Good Luck Lounge",
        location: "Sacramento, CA",
        ticketLink: "#",
        ticketStatus: "coming-soon",
      },
      {
        date: "May 9, 2025",
        venue: "KTVU 2 Fox News Interview",
        location: "Oakland, CA",
        ticketLink: "#",
        ticketStatus: "livestream",
        livestreamInfo: "Livestream link will be available on the day of the segment. Check back for details.",
      },
      {
        date: "May 17, 2025",
        venue: "Mr. Tempo",
        location: "San Diego, CA",
        ticketLink: "#",
        ticketStatus: "coming-soon",
      },
      {
        date: "May 24, 2025",
        venue: "BottleRock After Party @ Zuniga Optical",
        location: "Napa, CA",
        ticketLink: "#",
        ticketStatus: "coming-soon",
      },
      {
        date: "May 25, 2025",
        venue: "Napa BottleRock Festival",
        location: "Napa, CA",
        time: "12:00 PM",
        ticketLink: "https://www.bottlerocknapavalley.com/tickets/",
        ticketStatus: "available",
      },
    ],
    latestVideos: [
      {
        title: "Oke Junior - Fade Away",
        link: "https://www.youtube.com/watch?v=UAfeARWDcBA",
      },
      {
        title: "Oke Junior - Note to Self",
        link: "https://www.youtube.com/watch?v=71TqxGLQKFE",
      },
      {
        title: "Oke Junior - No Filter",
        link: "https://www.youtube.com/watch?v=OfoY-KOjYQA",
      },
    ],
    latestReleases: [
      {
        title: "The Revamp",
        type: "Album",
        cover: "/images/releases/revamp-okejunior.png",
        releaseDate: "2023",
        link: "https://open.spotify.com/album/3cIqwkl6sHvzETJy9dcX3o",
      },
      {
        title: "I Don't Follow I Lead",
        type: "Album",
        cover: "/images/releases/idontfollowilead.jpg",
        releaseDate: "2022",
        link: "https://open.spotify.com/album/4rn5SEjvqXEJwG7GuyOroB",
      },
      {
        title: "Different World",
        type: "Single",
        cover: "/images/releases/different-world-okejunior.jpeg",
        releaseDate: "2022",
        link: "https://open.spotify.com/album/6alsdWqKY9Hw59CYxRGCiB",
      },
    ],
  },
  {
    name: "Tay Da Prince",
    slug: "taydaprince",
    description: "Innovative artist pushing boundaries in R&B music. Singer, songwriter, and producer.",
    fullBio:
      "Tay Da Prince is an innovative artist pushing boundaries in R&B music. As a singer, songwriter, and producer, he brings a multifaceted approach to his craft, creating music that blends traditional R&B elements with contemporary production and forward-thinking songwriting. His smooth vocals and introspective lyrics have established him as a distinctive voice in the modern music landscape.",
    image: "/images/artist-tay-da-prince.png",
    brands: [],
    socials: {
      spotify: "https://open.spotify.com/artist/6JWjdA0zarMqnqs78F9lbT",
      youtube: "https://www.youtube.com/@TayDaPrince",
      website: "https://taydaprince.xyz",
      instagram: "https://www.instagram.com/taydaprince_",
    },
    upcomingDates: [],
    upcomingMessage: "Tour dates coming soon. Sign up for updates to be the first to know about upcoming shows.",
    latestVideos: [
      {
        title: "Tay Da Prince - Photo",
        link: "https://www.youtube.com/watch?v=DUdydy67Rxw",
      },
      {
        title: "Tay Da Prince - F2F",
        link: "https://www.youtube.com/watch?v=fC7s6QlKCfc",
      },
    ],
    latestReleases: [
      {
        title: "Photo",
        type: "Single",
        cover: "/images/releases/photo-tdp.jpg",
        releaseDate: "2023",
        link: "https://open.spotify.com/album/1G9rn4Q19FLnbKRfdDzBhB",
      },
      {
        title: "F2F",
        type: "Single",
        cover: "/images/releases/f2f.jpeg",
        releaseDate: "2023",
        link: "https://open.spotify.com/album/3i8Orc0l8ZOVWLhSmhtb5z",
      },
      {
        title: "HBCU",
        type: "Single",
        cover: "/images/releases/hbcu.jpeg",
        releaseDate: "2022",
        link: "https://open.spotify.com/album/3KmPKQ2qk2lJeSJxLKYdlB",
      },
    ],
  },
]

type Props = {
  params: { slug: string }
}

export default function ArtistPageClient({ params }: Props) {
  const artist = artists.find((a) => a.slug === params.slug)

  if (!artist) {
    notFound()
  }

  // Email notification form handler (would connect to backend in production)
  const handleEmailNotification = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // This would typically send the email to a backend service
    alert("Thank you! We'll notify you when tickets become available.")
  }

  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 md:px-6">
        <Link href="/artists">
          <Button variant="ghost" className="mb-8 pl-0">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Artists
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="relative aspect-square bg-muted overflow-hidden">
            <img src={artist.image || "/placeholder.svg"} alt={artist.name} className="object-cover w-full h-full" />
          </div>

          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{artist.name}</h1>
            <p className="text-xl text-muted-foreground mb-4">{artist.fullBio}</p>

            {/* Social Media - Now directly below bio */}
            <div className="flex space-x-4 mb-8">
              <a
                href={artist.socials.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-border hover:bg-secondary transition-colors"
                aria-label="Spotify"
              >
                <Music className="h-5 w-5" />
              </a>
              <a
                href={artist.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-border hover:bg-secondary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href={artist.socials.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-border hover:bg-secondary transition-colors"
                aria-label="Website"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href={artist.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-border hover:bg-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            {/* Brands & Collaborations - Show for RMR and Oke Junior */}
            {(artist.slug === "rmr" || artist.slug === "okejunior") && artist.brands && artist.brands.length > 0 && (
              <div className="mb-8">
                <h2 className="text-lg font-medium mb-4">Brands & Collaborations</h2>
                {artist.slug === "rmr" ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {artist.brands.map((brand, index) => (
                      <div
                        key={index}
                        className={`border border-border p-3 flex items-center justify-center h-24 ${
                          brand.needsBackground ? "bg-secondary/20" : "bg-transparent"
                        }`}
                      >
                        <img
                          src={brand.logo || "/placeholder.svg"}
                          alt={brand.name}
                          className={`max-h-full max-w-full object-contain ${brand.zoom ? "scale-150" : ""}`}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {artist.brands.map((brand, index) => (
                      <div
                        key={index}
                        className={`border border-border p-3 flex items-center justify-center h-24 ${
                          brand.needsBackground ? "bg-secondary/20" : "bg-transparent"
                        }`}
                      >
                        <img
                          src={brand.logo || "/placeholder.svg"}
                          alt={brand.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Upcoming Dates */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Upcoming Dates</h2>
          {artist.upcomingDates && artist.upcomingDates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {artist.upcomingDates.map((event, index) => (
                <div
                  key={index}
                  className="border border-border p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                >
                  <div>
                    <p className="font-bold">{event.date}</p>
                    <p className="text-muted-foreground">{event.venue}</p>
                    <p className="text-sm">{event.location}</p>
                    {event.time && <p className="text-sm text-muted-foreground">{event.time}</p>}
                  </div>

                  {/* Different ticket status handling */}
                  {event.ticketStatus === "available" && (
                    <a
                      href={event.ticketLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium flex items-center hover:underline"
                    >
                      Tickets <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  )}

                  {event.ticketStatus === "coming-soon" && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="text-sm">
                          <Mail className="mr-1 h-3 w-3" /> Notify Me
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Get Ticket Notifications</DialogTitle>
                          <DialogDescription>
                            Enter your email to be notified when tickets for {event.venue} on {event.date} become
                            available.
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleEmailNotification} className="space-y-4 mt-4">
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                              Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              required
                              className="w-full p-2 border border-border bg-background text-foreground"
                              placeholder="your@email.com"
                            />
                          </div>
                          <Button type="submit" className="w-full">
                            Subscribe for Updates
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  )}

                  {event.ticketStatus === "livestream" && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="sm" className="text-sm" disabled>
                            <AlertCircle className="mr-1 h-3 w-3" /> Livestream
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">{event.livestreamInfo}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">{artist.upcomingMessage || "No upcoming dates at this time."}</p>
          )}
        </section>

        {/* Latest Videos */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Latest Videos</h2>
          {artist.latestVideos && artist.latestVideos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {artist.latestVideos.map((video, index) => (
                <a key={index} href={video.link} target="_blank" rel="noopener noreferrer" className="group">
                  <div className="relative aspect-video bg-muted overflow-hidden mb-2">
                    <img
                      src={getYouTubeThumbnail(video.link) || "/placeholder.svg"}
                      alt={video.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Youtube className="h-12 w-12" />
                    </div>
                  </div>
                  <h3 className="font-medium group-hover:underline">{video.title}</h3>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">Videos coming soon.</p>
          )}
        </section>

        {/* Latest Releases */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Latest Releases</h2>
          {artist.latestReleases && artist.latestReleases.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {artist.latestReleases.map((release, index) => (
                <a key={index} href={release.link} target="_blank" rel="noopener noreferrer" className="group">
                  <div className="relative aspect-square bg-muted overflow-hidden mb-3">
                    <img
                      src={release.cover || "/placeholder.svg"}
                      alt={release.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium group-hover:underline">{release.title}</h3>
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>{release.type}</span>
                    <span>{release.releaseDate}</span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">Releases coming soon.</p>
          )}
        </section>
      </div>
    </main>
  )
}
