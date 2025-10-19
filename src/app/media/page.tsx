import PageLayout from "@/components/PageLayout"
import Image from "next/image"
import { Download, Image as ImageIcon, Video, FileText } from "lucide-react"

export default function MediaPage() {
  const mediaAssets = [
    {
      type: "logo",
      title: "Skyeton Logo Pack",
      description: "High-resolution logos in various formats",
      preview: "https://images.unsplash.com/photo-1633169420455-97eb1405fc51?w=400&q=80",
      formats: ["PNG", "SVG", "EPS"],
      size: "2.3 MB"
    },
    {
      type: "video",
      title: "Raybird UAV in Action",
      description: "Demonstration video of Raybird capabilities",
      preview: "https://images.unsplash.com/photo-1727600950904-85b32343415f?w=400&q=80",
      formats: ["MP4", "MOV"],
      size: "45.2 MB"
    },
    {
      type: "image",
      title: "Product Photography",
      description: "High-quality images of Raybird UAV system",
      preview: "https://images.unsplash.com/photo-1738748140319-b07cd28c41d2?w=400&q=80",
      formats: ["JPG", "PNG", "RAW"],
      size: "12.8 MB"
    },
    {
      type: "document",
      title: "Technical Specifications",
      description: "Detailed technical documentation and specs",
      preview: "https://images.unsplash.com/photo-1631021947936-811f7d6aaa9c?w=400&q=80",
      formats: ["PDF", "DOC"],
      size: "5.1 MB"
    },
    {
      type: "video",
      title: "Company Overview",
      description: "Corporate presentation and company story",
      preview: "https://images.unsplash.com/photo-1745390396894-bca7e9c8bd66?w=400&q=80",
      formats: ["MP4", "AVI"],
      size: "28.7 MB"
    },
    {
      type: "image",
      title: "Mission Gallery",
      description: "Photos from various UAV missions and operations",
      preview: "https://images.unsplash.com/photo-1727600950946-3d7831c96b71?w=400&q=80",
      formats: ["JPG", "PNG"],
      size: "18.4 MB"
    }
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video size={24} />
      case "image":
        return <ImageIcon size={24} />
      case "document":
        return <FileText size={24} />
      default:
        return <ImageIcon size={24} />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "video":
        return "bg-red-100 text-red-700"
      case "image":
        return "bg-blue-100 text-blue-700"
      case "document":
        return "bg-green-100 text-green-700"
      default:
        return "bg-purple-100 text-purple-700"
    }
  }

  return (
    <PageLayout 
      title="Media Assets" 
      subtitle="Download high-quality media assets, logos, and documentation"
      backgroundImage="https://images.unsplash.com/photo-1520870121499-7dddb6ccbcde?w=1920&q=80"
    >
      <div className="mb-12">
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Usage Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Editorial Use</h3>
              <p className="text-gray-600 text-sm">Free to use for news, articles, and editorial content</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚠</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Commercial Use</h3>
              <p className="text-gray-600 text-sm">Contact us for commercial licensing agreements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✗</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Prohibited</h3>
              <p className="text-gray-600 text-sm">No modifications or misrepresentation allowed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mediaAssets.map((asset, index) => (
          <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="relative h-48">
              <Image
                src={asset.preview}
                alt={asset.title}
                fill
                className="object-cover"
              />
              <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(asset.type)}`}>
                <div className="flex items-center space-x-1">
                  {getIcon(asset.type)}
                  <span className="capitalize">{asset.type}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{asset.title}</h3>
              <p className="text-gray-600 mb-4">{asset.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  {asset.formats.map((format, formatIndex) => (
                    <span key={formatIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {format}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-gray-500">{asset.size}</span>
              </div>
              
              <button className="w-full bg-[#2a6553] text-white py-3 rounded-full hover:bg-[#1e4a3a] transition-colors duration-200 font-medium flex items-center justify-center space-x-2">
                <Download size={18} />
                <span>Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-[#2a6553] to-[#1e4a3a] rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Need Custom Assets?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our media team for custom photography, video content, or specialized materials
          </p>
          <button className="bg-white text-[#2a6553] px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200">
            Contact Media Team
          </button>
        </div>
      </div>
    </PageLayout>
  )
}
