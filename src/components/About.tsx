import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const About: React.FC = () => {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1731579884331-95c1da04e988?w=800&q=80"
              alt="Raybird UAV"
              width={800}
              height={500}
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ color: '#191e26' }}>
              INNOVATION BORN
              <br />
              <span className="font-normal" style={{ color: '#2a6553' }}>OF WAR</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Skyeton is a Ukrainian-born unmanned aerial systems manufacturer with a 19-year legacy. 
              Since the start of the russian full-scale invasion, we've been building a universal UAV 
              platform — to survive and to win
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We weren't given time for theory. Under fire, we developed Raybird — the best-in-class 
              UAV system with 350,000+ hours of combat missions. We've grown into a team of 500+ people 
              and built one of the most advanced R&D departments in our field, with 100+ engineers onboard
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Raybird is a technological breakthrough — once deemed impossible, now a decisive advantage 
              both on the battlefield and deep behind enemy lines
            </p>
            <Button 
              className="text-white px-8 py-6 text-base font-medium hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#2a6553' }}
            >
              LEARN MORE ABOUT RAYBIRD
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
