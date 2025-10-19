import PageLayout from "@/components/PageLayout"
import Image from "next/image"
import { Eye, Shield, Target, Clock } from "lucide-react"

export default function ReconnaissancePage() {
  const capabilities = [
    {
      icon: <Eye size={32} />,
      title: "High-Resolution Intelligence",
      description: "Capture detailed imagery and video for comprehensive battlefield awareness"
    },
    {
      icon: <Shield size={32} />,
      title: "Low Detectability",
      description: "Compact form factor minimizes detection by enemy air defense systems"
    },
    {
      icon: <Target size={32} />,
      title: "Deep Penetration",
      description: "Operate far behind enemy lines for strategic intelligence gathering"
    },
    {
      icon: <Clock size={32} />,
      title: "Extended Endurance",
      description: "28+ hour flight time for prolonged surveillance missions"
    }
  ]

  const missionTypes = [
    {
      title: "Strategic Reconnaissance",
      description: "Long-range intelligence gathering behind enemy lines",
      image: "https://images.unsplash.com/photo-1727600950904-85b32343415f?w=600&q=80"
    },
    {
      title: "Tactical Surveillance",
      description: "Real-time battlefield monitoring and threat assessment",
      image: "https://images.unsplash.com/photo-1745390397223-a07a550fb7bb?w=600&q=80"
    },
    {
      title: "Route Clearance",
      description: "Pre-mission area scanning for safe passage planning",
      image: "https://images.unsplash.com/photo-1520870121499-7dddb6ccbcde?w=600&q=80"
    }
  ]

  return (
    <PageLayout 
      title="Deep Reconnaissance" 
      subtitle="Intelligence missions deep behind enemy lines with high-resolution video and low detectability"
      backgroundImage="https://images.unsplash.com/photo-1727600950904-85b32343415f?w=1920&q=80"
    >
      {/* Key Capabilities */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-white rounded-3xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2a6553] to-[#1e4a3a] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                {capability.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{capability.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Types */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mission Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missionTypes.map((mission, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="relative h-48">
                <Image
                  src={mission.image}
                  alt={mission.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{mission.title}</h3>
                <p className="text-gray-600">{mission.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Advantages */}
      <div className="mb-16">
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Advantages</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#2a6553] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Stealth Design</h4>
                    <p className="text-gray-600">Compact form factor and advanced materials reduce radar signature</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#2a6553] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Advanced Sensors</h4>
                    <p className="text-gray-600">High-resolution cameras and multi-spectral imaging capabilities</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#2a6553] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Secure Communications</h4>
                    <p className="text-gray-600">Encrypted data links with anti-jamming capabilities</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#2a6553] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Real-time Intelligence</h4>
                    <p className="text-gray-600">Live video streaming and instant data transmission</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-80">
              <Image
                src="https://images.unsplash.com/photo-1633169420455-97eb1405fc51?w=600&q=80"
                alt="Reconnaissance capabilities"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Performance Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-6 shadow-xl text-center">
            <div className="text-3xl font-bold text-[#2a6553] mb-2">200+km</div>
            <div className="text-gray-600">Operating Range</div>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-xl text-center">
            <div className="text-3xl font-bold text-[#2a6553] mb-2">28+h</div>
            <div className="text-gray-600">Flight Endurance</div>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-xl text-center">
            <div className="text-3xl font-bold text-[#2a6553] mb-2">4K</div>
            <div className="text-gray-600">Video Resolution</div>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-xl text-center">
            <div className="text-3xl font-bold text-[#2a6553] mb-2">90%+</div>
            <div className="text-gray-600">Mission Success</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-[#2a6553] to-[#1e4a3a] rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Deploy Deep Reconnaissance</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get detailed intelligence from behind enemy lines with Raybird's advanced reconnaissance capabilities
          </p>
          <button className="bg-white text-[#2a6553] px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200">
            Request Mission Planning
          </button>
        </div>
      </div>
    </PageLayout>
  )
}
