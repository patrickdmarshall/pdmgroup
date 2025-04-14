"use client"

import type React from "react"

import { ThemeProvider } from "next-themes"
import { useEffect } from "react"

interface StrictThemeProviderProps {
  children: React.ReactNode
}

export function StrictThemeProvider({ children }: StrictThemeProviderProps) {
  // Force dark mode on mount and prevent changes
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark")

    // Set CSS variables for strict black/white theme
    document.documentElement.style.setProperty("--background", "0 0% 0%") // Pure black
    document.documentElement.style.setProperty("--card", "0 0% 3.9%")
    document.documentElement.style.setProperty("--secondary", "0 0% 14.9%")
    document.documentElement.style.setProperty("--muted-foreground", "0 0% 63.9%")
    document.documentElement.style.setProperty("--border", "0 0% 14.9%")
    document.documentElement.style.setProperty("--foreground", "0 0% 100%") // Pure white

    // Override any attempts to change theme
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class" &&
          !document.documentElement.classList.contains("dark")
        ) {
          document.documentElement.classList.add("dark")
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      forcedTheme="dark"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
