"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"

const Footer: React.FC = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      toast({
        title: "Request Sent",
        description: "We will send you the presentation shortly.",
      })
      setEmail("")
    }
  }

  return (
    <footer className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/32274653/pexels-photo-32274653.jpeg?w=1920&q=80"
          alt="Footer Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#191e26]/95 to-[#191e26]/85" />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 sm:mb-6">
          Request Presentation
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 px-4">
          Get detailed information about our UAV systems
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl mx-auto mb-12 sm:mb-16 px-4">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 sm:px-6 py-4 sm:py-6 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white text-sm sm:text-base"
            required
          />
          <Button
            type="submit"
            className="px-6 sm:px-8 py-4 sm:py-6 text-white font-medium hover:opacity-90 transition-opacity whitespace-nowrap text-sm sm:text-base"
            style={{ backgroundColor: '#2a6553' }}
          >
            Request
          </Button>
        </form>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Drone Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
