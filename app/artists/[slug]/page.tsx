import type { Metadata, ResolvingMetadata } from "next"
import { notFound } from "next/navigation"
import ArtistPageClient from "./ArtistPageClient"

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

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const artist = artists.find((a) => a.slug === params.slug)

  if (!artist) {
    return {
      title: "Artist Not Found | PDM GROUP",
      description: "The requested artist could not be found.",
    }
  }

  return {
    title: `${artist.name} | PDM GROUP`,
    description: artist.description,
    openGraph: {
      title: `${artist.name} | PDM GROUP`,
      description: artist.description,
      images: [
        {
          url: artist.image,
          width: 800,
          height: 800,
          alt: artist.name,
        },
      ],
    },
    twitter: {
      title: `${artist.name} | PDM GROUP`,
      description: artist.description,
      images: [artist.image],
    },
  }
}

export default function ArtistPage({ params }: Props) {
  const artist = artists.find((a) => a.slug === params.slug)

  if (!artist) {
    notFound()
  }

  return <ArtistPageClient params={params} />
}
