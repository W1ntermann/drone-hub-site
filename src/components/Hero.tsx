import React from "react"
import Image from "next/image"

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1517586275874-7536fa583a82?w=1920&q=80"
          alt="UAV System"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#191e26]/80 to-[#191e26]/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-wider">
              ADVANTAGE
              <br />
              <span className="font-normal">FORGED IN FIRE</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide">
              Small Tactical Unmanned Aerial Systems
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}

export default Hero
