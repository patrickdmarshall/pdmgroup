import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { StrictThemeProvider } from "@/components/strict-theme-provider"
import Script from "next/script"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "PDM GROUP | Creative Culture Meets Operational Clarity",
    template: "%s | PDM GROUP",
  },
  description:
    "PDM GROUP is a venture-led group building tools, managing artists, and advising creative businesses. We blend music management, AI tools, and strategic consulting.",
  keywords: [
    "PDM GROUP",
    "artist management",
    "music management",
    "creative consulting",
    "business strategy",
    "AI tools",
    "strategic consulting",
    "RMR",
    "Oke Junior",
    "Tay Da Prince",
  ],
  authors: [{ name: "PDM GROUP" }],
  creator: "PDM GROUP",
  publisher: "PDM GROUP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://pdmgroup.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pdmgroup.com",
    title: "PDM GROUP | Creative Culture Meets Operational Clarity",
    description: "PDM GROUP is a venture-led group building tools, managing artists, and advising creative businesses.",
    siteName: "PDM GROUP",
    images: [
      {
        url: "/shareimg.png", // Updated to use the new share image
        width: 1200,
        height: 630,
        alt: "PDM GROUP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PDM GROUP | Creative Culture Meets Operational Clarity",
    description: "PDM GROUP is a venture-led group building tools, managing artists, and advising creative businesses.",
    images: ["/shareimg.png"], // Updated to use the new share image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
              })()
            `,
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} font-sans antialiased bg-black text-white`}>
        <StrictThemeProvider>{children}</StrictThemeProvider>

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-LH5Q8C8CWR" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LH5Q8C8CWR');
          `}
        </Script>
      </body>
    </html>
  )
}


import './globals.css'