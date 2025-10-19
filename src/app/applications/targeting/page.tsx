import PageLayout from "@/components/PageLayout"
import Image from "next/image"
import { Crosshair, MapPin, Radio, CheckCircle } from "lucide-react"

export default function TargetingPage() {
  const capabilities = [
    {
      icon: <Crosshair size={32} />,
      title: "Precision Coordinates",
      description: "Accurate target coordinates for artillery systems like Caesar and Krab"
    },
    {
      icon: <MapPin size={32} />,
      title: "Fire Mission Adjustment",
      description: "Real-time fire correction and impact assessment"
    },
    {
      icon: <Radio size={32} />,
      title: "HIMARS Integration",
      description: "Compatible with long-range precision strike systems"
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Target Confirmation",
      description: "Post-strike damage assessment and target elimination verification"
    }
  ]

  return (
    <PageLayout 
      title="Targeting & Precision Fire Control" 
      subtitle="Accurate coordinates for artillery systems and precision strike platforms"
      backgroundImage="https://images.unsplash.com/photo-1745390397223-a07a550fb7bb?w=1920&q=80"
    >
      {/* Key Capabilities */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Fire Control Capabilities</h2>
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

      {/* Compatible Systems */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Compatible Artillery Systems</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-blue-600">C</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Caesar Artillery</h3>
            <p className="text-gray-600">155mm self-propelled howitzer with precision targeting integration</p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-green-600">K</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Krab Artillery</h3>
            <p className="text-gray-600">Self-propelled artillery system with advanced fire control</p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-red-600">H</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">HIMARS</h3>
            <p className="text-gray-600">High Mobility Artillery Rocket System for long-range precision strikes</p>
          </div>
        </div>
      </div>

      {/* Mission Workflow */}
      <div className="mb-16">
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mission Workflow</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#2a6553] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Target Acquisition</h4>
                  <p className="text-gray-600">UAV identifies and locks onto target using advanced sensors</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#2a6553] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Coordinate Transmission</h4>
                  <p className="text-gray-600">Precise GPS coordinates sent to artillery command center</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#2a6553] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Fire Mission</h4>
                  <p className="text-gray-600">Artillery system engages target with precision munitions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#2a6553] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Battle Damage Assessment</h4>
                  <p className="text-gray-600">UAV confirms target elimination and assesses damage</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-80">
              <Image
                src="https://images.unsplash.com/photo-1520870121499-7dddb6ccbcde?w=600&q=80"
                alt="Targeting workflow"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Precision Metrics */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Precision Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-6 shadow-xl text-center">
            <div className="text-3xl font-bold text-[#2a6553] mb-2">±1m</div>
            <div className="text-gray-600">Target Accuracy</div>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-xl text-center">
            <div className="text-3xl font-bold text-[#2a6553] mb-2">&lt;30s</div>
            <div className="text-gray-600">Response Time</div>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-xl text-center">
            <div className="text-3xl font-bold text-[#2a6553] mb-2">95%+</div>
            <div className="text-gray-600">Hit Probability</div>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-xl text-center">
            <div className="text-3xl font-bold text-[#2a6553] mb-2">24/7</div>
            <div className="text-gray-600">Availability</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-[#2a6553] to-[#1e4a3a] rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Enhance Fire Control Precision</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Integrate Raybird with your artillery systems for unmatched targeting accuracy
          </p>
          <button className="bg-white text-[#2a6553] px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200">
            Request Integration Guide
          </button>
        </div>
      </div>
    </PageLayout>
  )
}
