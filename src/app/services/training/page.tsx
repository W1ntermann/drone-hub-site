import PageLayout from "@/components/PageLayout"
import Image from "next/image"
import { GraduationCap, Users, Clock, Award } from "lucide-react"

export default function TrainingPage() {
  const programs = [
    {
      title: "Operator Certification",
      duration: "2 weeks",
      level: "Basic to Advanced",
      description: "Complete UAV operation training from basic controls to advanced mission planning",
      image: "https://images.unsplash.com/photo-1631021947936-811f7d6aaa9c?w=600&q=80"
    },
    {
      title: "Maintenance Training",
      duration: "1 week",
      level: "Technical",
      description: "Comprehensive maintenance procedures and troubleshooting techniques",
      image: "https://images.unsplash.com/photo-1738748140319-b07cd28c41d2?w=600&q=80"
    },
    {
      title: "Mission Planning",
      duration: "3 days",
      level: "Advanced",
      description: "Strategic mission planning and tactical deployment scenarios",
      image: "https://images.unsplash.com/photo-1727600950904-85b32343415f?w=600&q=80"
    }
  ]

  const features = [
    {
      icon: <GraduationCap size={32} />,
      title: "Expert Instructors",
      description: "Learn from experienced operators with 350,000+ combat flight hours"
    },
    {
      icon: <Users size={32} />,
      title: "Hands-on Training",
      description: "Practical experience with real Raybird systems and equipment"
    },
    {
      icon: <Clock size={32} />,
      title: "Flexible Scheduling",
      description: "Training programs adapted to your operational requirements"
    },
    {
      icon: <Award size={32} />,
      title: "Certification",
      description: "Official certification recognized by defense organizations"
    }
  ]

  return (
    <PageLayout 
      title="Training Services" 
      subtitle="Professional UAV training programs by combat-proven experts"
      backgroundImage="https://images.unsplash.com/photo-1633169420455-97eb1405fc51?w=1920&q=80"
    >
      {/* Training Programs */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Training Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="relative h-48">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#2a6553] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {program.duration}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {program.level}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <button className="w-full bg-[#2a6553] text-white py-2 rounded-full hover:bg-[#1e4a3a] transition-colors duration-200 font-medium">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Training Features */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Training</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-3xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2a6553] to-[#1e4a3a] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Curriculum Details */}
      <div className="mb-16">
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Comprehensive Curriculum</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Theoretical Training</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#2a6553] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">UAV Systems Overview</h4>
                    <p className="text-gray-600 text-sm">Complete understanding of Raybird components and capabilities</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#2a6553] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Flight Regulations</h4>
                    <p className="text-gray-600 text-sm">International and local aviation regulations compliance</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#2a6553] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Weather Analysis</h4>
                    <p className="text-gray-600 text-sm">Weather assessment and flight condition evaluation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#2a6553] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Mission Planning</h4>
                    <p className="text-gray-600 text-sm">Strategic planning and tactical deployment scenarios</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Practical Training</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#2a6553] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Flight Operations</h4>
                    <p className="text-gray-600 text-sm">Hands-on flight control and navigation training</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#2a6553] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Payload Operations</h4>
                    <p className="text-gray-600 text-sm">Camera control, sensor operation, and data collection</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#2a6553] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Emergency Procedures</h4>
                    <p className="text-gray-600 text-sm">Crisis management and emergency response protocols</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#2a6553] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Maintenance Tasks</h4>
                    <p className="text-gray-600 text-sm">Routine maintenance and troubleshooting procedures</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-[#2a6553] to-[#1e4a3a] rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Start Your Training Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our comprehensive training programs and become a certified Raybird operator
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#2a6553] px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200">
              Schedule Training
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-[#2a6553] transition-all duration-200">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
