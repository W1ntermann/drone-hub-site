import React from "react"
import { Shield, Clock, Zap, Package, Award, Timer, LucideIcon } from "lucide-react"
import { features } from "@/data/mock"

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
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.title] || Shield
            return (
              <div
                key={index}
                className="p-8 rounded-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100"
                style={{ backgroundColor: '#f8f9fa' }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: '#2a6553' }}
                >
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#191e26' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
