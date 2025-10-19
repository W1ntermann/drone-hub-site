import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Drone Hub - Small Tactical Unmanned Aerial Systems",
  description: "War-hardened UAV systems with 28+ hours endurance and 350,000+ combat flight hours. Advantage forged in fire.",
  keywords: "UAV, drone, tactical, unmanned aerial systems, Raybird, military, surveillance",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
