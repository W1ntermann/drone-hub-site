import React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { newsItems } from "@/data/mock"
import { useLanguage } from "@/contexts/LanguageContext"

const News: React.FC = () => {
  const { t } = useLanguage()
  
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-light" style={{ color: '#191e26' }}>
            {t('news.title')}
          </h2>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-[#2a6553] transition-colors group">
            <span className="font-medium">{t('news.more')}</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group border-0"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded text-xs font-medium">
                  News
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-2 line-clamp-2 group-hover:text-[#2a6553] transition-colors" style={{ color: '#191e26' }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
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
