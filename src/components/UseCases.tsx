"use client"

import React, { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCases } from "@/data/mock"

const UseCases: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % useCases.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + useCases.length) % useCases.length)
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={useCases[currentSlide].image}
          alt={useCases[currentSlide].title}
          fill
          className="object-cover transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#191e26]/90 to-[#191e26]/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-2xl">
            <p className="text-4xl sm:text-5xl md:text-6xl font-light text-white/40 mb-3 sm:mb-4">
              {useCases[currentSlide].number}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 sm:mb-6 leading-tight">
              {useCases[currentSlide].title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
              {useCases[currentSlide].description}
            </p>
            <Button
              className="text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-medium hover:opacity-90 transition-opacity w-full sm:w-auto"
              style={{ backgroundColor: '#2a6553' }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-all"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-all"
      >
        <ChevronRight size={20} />
      </button>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#191e26]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-6">
          <div className="flex overflow-x-auto space-x-2 sm:space-x-4 scrollbar-hide">
            {useCases.map((useCase, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`flex-shrink-0 text-left px-2 sm:px-4 py-2 transition-all ${
                  currentSlide === index
                    ? "text-white border-b-2"
                    : "text-gray-400 hover:text-gray-200"
                }`}
                style={{ borderColor: currentSlide === index ? '#2a6553' : 'transparent' }}
              >
                <span className="text-xs">{useCase.number}</span>
                <p className="text-xs sm:text-sm font-medium whitespace-nowrap">
                  {useCase.title}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default UseCases
