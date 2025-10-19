import React from "react"
import Image from "next/image"
import { operatingZones } from "@/data/mock"

const OperatingZone: React.FC = () => {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ color: '#191e26' }}>
            Raybird
          </h2>
          <p className="text-2xl text-gray-600">Operating Zone</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {operatingZones.map((zone, index) => (
            <div 
              key={index}
              className={`text-center p-8 rounded-lg border-2 transition-all duration-300 ${
                zone.highlighted 
                  ? "border-[#2a6553] hover:shadow-xl" 
                  : "border-gray-200 hover:border-[#2a6553]"
              }`}
            >
              <div className="mb-6">
                <Image
                  src={zone.image}
                  alt={`Operating zone ${zone.range}`}
                  width={128}
                  height={128}
                  className="w-32 h-32 mx-auto object-contain"
                />
              </div>
              <p className="text-5xl font-light mb-4" style={{ color: '#2a6553' }}>
                {zone.range}
              </p>
              <p className="text-gray-600 whitespace-pre-line">
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
