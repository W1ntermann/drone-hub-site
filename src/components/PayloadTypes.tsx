"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/contexts/LanguageContext"
import { getTranslatedPayloads } from "@/utils/translations"

const PayloadTypes: React.FC = () => {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState("gimbal")
  const translatedPayloads = getTranslatedPayloads(t)

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-center mb-12 sm:mb-16" style={{ color: '#191e26' }}>
          {t('payload.title')}
        </h2>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 mb-8 sm:mb-12 bg-white p-1 sm:p-2 rounded-lg">
            {translatedPayloads.map((payload) => (
              <TabsTrigger
                key={payload.id}
                value={payload.id}
                className="px-2 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm md:text-base text-gray-600 rounded transition-all data-[state=active]:text-white"
                style={{
                  backgroundColor: activeTab === payload.id ? '#2a6553' : 'transparent',
                }}
              >
                {payload.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {translatedPayloads.map((payload) => (
            <TabsContent key={payload.id} value={payload.id} className="mt-6 sm:mt-8 animate-fadeIn">
              <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="relative order-2 md:order-1">
                  <p className="text-6xl sm:text-7xl md:text-8xl font-light mb-3 sm:mb-4" style={{ color: '#2a6553', opacity: 0.2 }}>
                    {payload.number}
                  </p>
                  <Image
                    src={payload.image}
                    alt={payload.title}
                    width={400}
                    height={400}
                    className="rounded-lg shadow-xl w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8" style={{ color: '#191e26' }}>
                    {payload.title}
                  </h3>
                  <ul className="space-y-3 sm:space-y-4">
                    {payload.specs.map((spec, index) => (
                      <li key={index} className="flex items-start">
                        <span
                          className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                          style={{ backgroundColor: '#2a6553' }}
                        />
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

export default PayloadTypes
