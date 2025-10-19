import PageLayout from "@/components/PageLayout"

export default function AboutPage() {
  return (
    <PageLayout 
      title="About Us" 
      subtitle="Innovation Born of War - Ukrainian-born unmanned aerial systems manufacturer with a 19-year legacy"
      backgroundImage="https://images.unsplash.com/photo-1745390397223-a07a550fb7bb?w=1920&q=80"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Skyeton is a Ukrainian-born unmanned aerial systems manufacturer with a 19-year legacy. 
              Since the start of the russian full-scale invasion, we&apos;ve been building a universal UAV 
              platform — to survive and to win.
            </p>
            <p>
              We weren&apos;t given time for theory. Under fire, we developed Raybird — the best-in-class 
              UAV system with 350,000+ hours of combat missions. We&apos;ve grown into a team of 500+ people 
              and built one of the most advanced R&D departments in our field, with 100+ engineers onboard.
            </p>
            <p>
              Raybird is a technological breakthrough — once deemed impossible, now a decisive advantage 
              both on the battlefield and deep behind enemy lines.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Facts</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#2a6553] rounded-full flex items-center justify-center text-white font-bold">
                19
              </div>
              <div>
                <div className="font-semibold text-gray-900">Years of Experience</div>
                <div className="text-gray-600">Established legacy in UAV technology</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#2a6553] rounded-full flex items-center justify-center text-white font-bold">
                500+
              </div>
              <div>
                <div className="font-semibold text-gray-900">Team Members</div>
                <div className="text-gray-600">Dedicated professionals</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#2a6553] rounded-full flex items-center justify-center text-white font-bold">
                100+
              </div>
              <div>
                <div className="font-semibold text-gray-900">Engineers</div>
                <div className="text-gray-600">Advanced R&D department</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#2a6553] rounded-full flex items-center justify-center text-white font-bold">
                350K+
              </div>
              <div>
                <div className="font-semibold text-gray-900">Combat Flight Hours</div>
                <div className="text-gray-600">Proven in real conditions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Mission</h2>
        <div className="bg-gradient-to-r from-[#2a6553] to-[#1e4a3a] rounded-3xl p-12 text-white text-center">
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            To develop and manufacture cutting-edge unmanned aerial systems that provide decisive 
            advantages in defense, surveillance, and civilian applications. We are committed to 
            innovation, reliability, and supporting those who protect freedom and democracy.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
