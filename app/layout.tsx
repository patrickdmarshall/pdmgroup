import type React from "react";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PDM GROUP | Creative Culture Meets Operational Clarity",
  description:
    "PDM GROUP is a venture-led group building tools, managing artists, and advising creative businesses.",
  generator: "v0.dev",
  icons: {
    icon: "/images/pdm-logo-white.png",
    apple: "/images/pdm-logo-white.png",
  },
  openGraph: {
    images: ["/images/pdm-logo-white.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/pdm-logo-white.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
      style={{ backgroundColor: "#000000" }}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function() {
            document.documentElement.classList.add('dark');
            document.documentElement.style.backgroundColor = '#000000';
            localStorage.setItem('theme', 'dark');
          })()
        `,
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} font-sans antialiased`}
        style={{ backgroundColor: "#000000", color: "#FFFFFF" }}
      >
        <div className="fixed inset-0 bg-black -z-10" />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
          themes={["dark"]}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
