"use client"

import PageLayout from "@/components/PageLayout"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { getTranslatedFeatures, getTranslatedPayloads, getTranslatedOperatingZones } from "@/utils/translations"

export default function REBShelterPage() {
  const { t } = useLanguage()
  const translatedFeatures = getTranslatedFeatures(t)
  const translatedPayloads = getTranslatedPayloads(t)
  const translatedOperatingZones = getTranslatedOperatingZones(t)
  return (
    <PageLayout 
      title={t('raybird.title')} 
      subtitle={t('raybird.subtitle')}
      backgroundImage="https://images.unsplash.com/photo-1738748140319-b07cd28c41d2?w=1920&q=80"
    >
      {/* Key Features */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('raybird.key_features')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {translatedFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2a6553] to-[#1e4a3a] rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('raybird.technical_specs')}</h2>
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2a6553] mb-2">28+</div>
              <div className="text-gray-600">{t('raybird.flight_hours')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2a6553] mb-2">200</div>
              <div className="text-gray-600">{t('raybird.max_flights')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2a6553] mb-2">25</div>
              <div className="text-gray-600">{t('raybird.assembly_time')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2a6553] mb-2">90%+</div>
              <div className="text-gray-600">{t('raybird.mission_success')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Operating Zones */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('raybird.operating_zones')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {translatedOperatingZones.map((zone, index) => (
            <div 
              key={index} 
              className={`rounded-3xl p-8 text-center transition-all duration-300 hover:scale-105 ${
                zone.highlighted 
                  ? 'bg-gradient-to-br from-[#2a6553] to-[#1e4a3a] text-white shadow-2xl' 
                  : 'bg-white shadow-xl hover:shadow-2xl'
              }`}
            >
              <div className="relative h-32 mb-6">
                <Image
                  src={zone.image}
                  alt={`Operating zone ${zone.range}`}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className={`text-4xl font-bold mb-4 ${zone.highlighted ? 'text-white' : 'text-[#2a6553]'}`}>
                {zone.range}
              </div>
              <p className={`leading-relaxed ${zone.highlighted ? 'text-gray-200' : 'text-gray-600'}`}>
                {zone.description.replace('\n', ' ')}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Payload Types */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('raybird.payload_types')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {translatedPayloads.map((payload, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="relative h-64">
                <Image
                  src={payload.image}
                  alt={payload.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#2a6553] text-white px-4 py-2 rounded-full font-bold">
                  {payload.number}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{payload.title}</h3>
                <ul className="space-y-2">
                  {payload.specs.map((spec, specIndex) => (
                    <li key={specIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-[#2a6553] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-[#2a6553] to-[#1e4a3a] rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">{t('raybird.ready_deploy')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('raybird.contact_team')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#2a6553] px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200">
              {t('raybird.request_demo')}
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-[#2a6553] transition-all duration-200">
              {t('raybird.download_specs')}
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
