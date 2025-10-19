"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { payloads } from "@/data/mock"

const PayloadTypes: React.FC = () => {
  const [activeTab, setActiveTab] = useState("gimbal")

  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16" style={{ color: '#191e26' }}>
          Payload Types
        </h2>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 mb-12 bg-white p-2 rounded-lg">
            {payloads.map((payload) => (
              <TabsTrigger
                key={payload.id}
                value={payload.id}
                className="px-4 py-4 text-sm md:text-base text-gray-600 rounded transition-all data-[state=active]:text-white"
                style={{
                  backgroundColor: activeTab === payload.id ? '#2a6553' : 'transparent',
                }}
              >
                {payload.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {payloads.map((payload) => (
            <TabsContent key={payload.id} value={payload.id} className="mt-8 animate-fadeIn">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <p className="text-8xl font-light mb-4" style={{ color: '#2a6553', opacity: 0.2 }}>
                    {payload.number}
                  </p>
                  <Image
                    src={payload.image}
                    alt={payload.title}
                    width={400}
                    height={400}
                    className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-light mb-8" style={{ color: '#191e26' }}>
                    {payload.title}
                  </h3>
                  <ul className="space-y-4">
                    {payload.specs.map((spec, index) => (
                      <li key={index} className="flex items-start">
                        <span
                          className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                          style={{ backgroundColor: '#2a6553' }}
                        />
                        <span className="text-gray-700 leading-relaxed">{spec}</span>
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
