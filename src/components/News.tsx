"use client"

import React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { newsItems } from "@/data/mock"
import { useLanguage } from "@/contexts/LanguageContext"

const News: React.FC = () => {
  const { t } = useLanguage()
  
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light" style={{ color: '#191e26' }}>
            {t('news.title')}
          </h2>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-[#2a6553] transition-colors group">
            <span className="font-medium text-sm sm:text-base">{t('news.more')}</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {newsItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group border-0"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded text-xs font-medium">
                  News
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-medium mb-2 line-clamp-2 group-hover:text-[#2a6553] transition-colors" style={{ color: '#191e26' }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{item.date}</span>
                  <span>{item.readTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
