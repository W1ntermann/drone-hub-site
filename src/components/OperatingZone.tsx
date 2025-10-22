"use client"

import React from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { getTranslatedOperatingZones } from "@/utils/translations"

const OperatingZone: React.FC = () => {
  const { t } = useLanguage()
  const translatedOperatingZones = getTranslatedOperatingZones(t)
  
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-3 sm:mb-4" style={{ color: '#191e26' }}>
            {t('operating.raybird')}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600">{t('operating.title')}</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {translatedOperatingZones.map((zone, index) => (
            <div 
              key={index}
              className={`text-center p-6 sm:p-8 rounded-lg border-2 transition-all duration-300 ${
                zone.highlighted 
                  ? "border-[#2a6553] hover:shadow-xl" 
                  : "border-gray-200 hover:border-[#2a6553]"
              }`}
            >
              <div className="mb-4 sm:mb-6">
                <Image
                  src={zone.image}
                  alt={`Operating zone ${zone.range}`}
                  width={128}
                  height={128}
                  className="w-24 h-24 sm:w-32 sm:h-32 mx-auto object-contain"
                />
              </div>
              <p className="text-3xl sm:text-4xl md:text-5xl font-light mb-3 sm:mb-4" style={{ color: '#2a6553' }}>
                {zone.range}
              </p>
              <p className="text-sm sm:text-base text-gray-600 whitespace-pre-line">
                {zone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OperatingZone
