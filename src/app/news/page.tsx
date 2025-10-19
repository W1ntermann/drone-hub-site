import PageLayout from "@/components/PageLayout"
import { newsItems } from "@/data/mock"
import Image from "next/image"

export default function NewsPage() {
  return (
    <PageLayout 
      title="News" 
      subtitle="Latest updates, announcements and insights from Skyeton"
      backgroundImage="https://images.unsplash.com/photo-1727600950946-3d7831c96b71?w=1920&q=80"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item, index) => (
          <article key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="relative h-48">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                <span>{item.date}</span>
                <span>{item.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {item.excerpt}
              </p>
              <button className="bg-[#2a6553] text-white px-6 py-2 rounded-full hover:bg-[#1e4a3a] transition-colors duration-200 font-medium">
                Read More
              </button>
            </div>
          </article>
        ))}
      </div>
      
      {/* Featured News */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured News</h2>
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 lg:h-80">
              <Image
                src="https://images.unsplash.com/photo-1745390397223-a07a550fb7bb?w=800&q=80"
                alt="Featured news"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-2">Featured • 17.10.2025</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Skyeton Supports the 5th All-Ukrainian Engineering Hackathon SmaRTF
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                On October 17, the All-Ukrainian Engineering Hackathon SmaRTF took place, bringing together 
                the brightest minds in engineering and technology. Skyeton was proud to support this initiative, 
                fostering innovation and collaboration in the Ukrainian tech community.
              </p>
              <button className="bg-gradient-to-r from-[#2a6553] to-[#1e4a3a] text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-[#2a6553]/30 transition-all duration-200 font-medium">
                Read Full Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
