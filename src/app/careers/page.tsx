import PageLayout from "@/components/PageLayout"
import Image from "next/image"
import { MapPin, Clock, Users, Briefcase } from "lucide-react"

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior UAV Engineer",
      department: "R&D",
      location: "Kyiv, Ukraine",
      type: "Full-time",
      description: "Lead development of next-generation UAV systems and advanced flight control algorithms",
      requirements: ["5+ years UAV experience", "Aerospace Engineering degree", "Flight control systems expertise"]
    },
    {
      title: "Flight Test Pilot",
      department: "Operations",
      location: "Kyiv, Ukraine",
      type: "Full-time",
      description: "Conduct flight testing and validation of new UAV systems and capabilities",
      requirements: ["Commercial pilot license", "UAV operation experience", "Test pilot background preferred"]
    },
    {
      title: "Software Developer",
      department: "Engineering",
      location: "Remote/Kyiv",
      type: "Full-time",
      description: "Develop ground control software and mission planning applications",
      requirements: ["React/TypeScript", "Python/C++", "Real-time systems experience"]
    },
    {
      title: "Sales Engineer",
      department: "Sales",
      location: "Europe",
      type: "Full-time",
      description: "Technical sales support for international defense and civilian markets",
      requirements: ["Engineering background", "Sales experience", "Multiple languages", "Travel availability"]
    }
  ]

  const benefits = [
    {
      icon: <Users size={32} />,
      title: "Team of 500+",
      description: "Join a rapidly growing team of dedicated professionals"
    },
    {
      icon: <Briefcase size={32} />,
      title: "Cutting-edge Projects",
      description: "Work on innovative UAV technology that makes a real difference"
    },
    {
      icon: <MapPin size={32} />,
      title: "Global Impact",
      description: "Your work contributes to defense and civilian applications worldwide"
    },
    {
      icon: <Clock size={32} />,
      title: "Work-Life Balance",
      description: "Flexible working arrangements and comprehensive benefits"
    }
  ]

  return (
    <PageLayout 
      title="Careers" 
      subtitle="Join our mission to develop cutting-edge UAV technology that makes a difference"
      backgroundImage="https://images.unsplash.com/photo-1745390396894-bca7e9c8bd66?w=1920&q=80"
    >
      {/* Company Culture */}
      <div className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Work at Skyeton?</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                At Skyeton, we&apos;re not just building UAVs – we&apos;re creating technology that saves lives 
                and protects freedom. Our team of 500+ professionals works on the cutting edge of 
                aerospace technology, with 100+ engineers in our advanced R&D department.
              </p>
              <p>
                We offer a unique opportunity to work on real-world applications with immediate impact. 
                Our Raybird UAV system has proven itself with 350,000+ combat flight hours, and we&apos;re 
                constantly pushing the boundaries of what&apos;s possible.
              </p>
              <p>
                Join us in our mission to develop innovative solutions for defense, surveillance, 
                and civilian applications that make the world a safer place.
              </p>
            </div>
          </div>
          
          <div className="relative h-80">
            <Image
              src="https://images.unsplash.com/photo-1631021947936-811f7d6aaa9c?w=600&q=80"
              alt="Skyeton team"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Skyeton</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-3xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2a6553] to-[#1e4a3a] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Open Positions</h2>
        <div className="space-y-6">
          {openPositions.map((position, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span className="flex items-center space-x-1">
                      <Briefcase size={16} />
                      <span>{position.department}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>{position.location}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{position.type}</span>
                    </span>
                  </div>
                </div>
                <button className="mt-4 lg:mt-0 bg-[#2a6553] text-white px-6 py-2 rounded-full hover:bg-[#1e4a3a] transition-colors duration-200 font-medium">
                  Apply Now
                </button>
              </div>
              
              <p className="text-gray-700 mb-4">{position.description}</p>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                <ul className="space-y-1">
                  {position.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-[#2a6553] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Process */}
      <div className="mb-16">
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2a6553] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Apply Online</h3>
              <p className="text-gray-600 text-sm">Submit your application and resume through our portal</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2a6553] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Initial Review</h3>
              <p className="text-gray-600 text-sm">Our HR team reviews your qualifications and experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2a6553] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Technical Interview</h3>
              <p className="text-gray-600 text-sm">Technical discussion with our engineering team</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2a6553] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Final Decision</h3>
              <p className="text-gray-600 text-sm">Offer and onboarding for successful candidates</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-[#2a6553] to-[#1e4a3a] rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Mission?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of the team developing next-generation UAV technology that makes a real difference
          </p>
          <button className="bg-white text-[#2a6553] px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200">
            View All Positions
          </button>
        </div>
      </div>
    </PageLayout>
  )
}
