"use client"

import React from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const About: React.FC = () => {
  const { t } = useLanguage()
  
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Content - показуємо першим на мобільних */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6" style={{ color: '#191e26' }}>
              {t('about.title')}
              <br />
              <span className="font-normal" style={{ color: '#2a6553' }}>{t('about.subtitle')}</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              {t('about.description2')}
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              {t('about.description3')}
            </p>
            <Button 
              className="text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-medium hover:opacity-90 transition-opacity w-full sm:w-auto"
              style={{ backgroundColor: '#2a6553' }}
            >
              {t('hero.learn_more')}
            </Button>
          </div>

          {/* Image - показуємо другим на мобільних */}
          <div className="relative order-1 md:order-2">
            <Image
              src="https://images.unsplash.com/photo-1731579884331-95c1da04e988?w=800&q=80"
              alt="Raybird UAV"
              width={800}
              height={500}
              className="rounded-lg shadow-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
