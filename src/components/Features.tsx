"use client"

import React from "react"
import { Shield, Clock, Zap, Package, Award, Timer, LucideIcon } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { getTranslatedFeatures } from "@/utils/translations"

interface FeatureIconMap {
  [key: string]: LucideIcon
}

const iconMap: FeatureIconMap = {
  "War-Hardened": Shield,
  "Endurance": Clock,
  "Efficiency": Zap,
  "Versatile Platform": Package,
  "Best-in-Class Resilience": Award,
  "Speed & Ease of Use": Timer,
}

const Features: React.FC = () => {
  const { t } = useLanguage()
  const translatedFeatures = getTranslatedFeatures(t)
  
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {translatedFeatures.map((feature, index) => {
            // Use index to get the correct icon since titles are now translated
            const iconKeys = ["War-Hardened", "Endurance", "Efficiency", "Versatile Platform", "Best-in-Class Resilience", "Speed & Ease of Use"]
            const Icon = iconMap[iconKeys[index]] || Shield
            return (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100"
                style={{ backgroundColor: '#f8f9fa' }}
              >
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: '#2a6553' }}
                >
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3" style={{ color: '#191e26' }}>
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
