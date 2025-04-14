import type React from "react";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Artists | PDM GROUP",
  description:
    "Explore the artists managed by PDM GROUP including RMR, Oke Junior, and Tay Da Prince.",
  openGraph: {
    title: "Artists | PDM GROUP",
    description:
      "Explore the artists managed by PDM GROUP including RMR, Oke Junior, and Tay Da Prince.",
  },
  twitter: {
    title: "Artists | PDM GROUP",
    description:
      "Explore the artists managed by PDM GROUP including RMR, Oke Junior, and Tay Da Prince.",
  },
};

export default function ArtistsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={spaceGrotesk.variable}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
