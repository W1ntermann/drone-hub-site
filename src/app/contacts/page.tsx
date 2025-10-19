import PageLayout from "@/components/PageLayout"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactsPage() {
  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Headquarters",
      details: ["Kyiv, Ukraine", "Research & Development Center"]
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      details: ["+380 44 XXX XXXX", "24/7 Support Available"]
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: ["info@skyeton.com", "support@skyeton.com"]
    },
    {
      icon: <Clock size={24} />,
      title: "Business Hours",
      details: ["Mon-Fri: 9:00 - 18:00 EET", "Emergency: 24/7"]
    }
  ]

  const offices = [
    {
      city: "Kyiv",
      country: "Ukraine",
      type: "Headquarters",
      address: "Innovation District, Kyiv, Ukraine",
      description: "Main headquarters with R&D facilities and manufacturing"
    },
    {
      city: "Warsaw",
      country: "Poland",
      type: "European Office",
      address: "Business District, Warsaw, Poland",
      description: "European operations and customer support center"
    },
    {
      city: "Washington DC",
      country: "USA",
      type: "North American Office",
      address: "Defense Corridor, Washington DC, USA",
      description: "North American sales and government relations"
    }
  ]

  return (
    <PageLayout 
      title="Contacts" 
      subtitle="Get in touch with our team for inquiries, support, or partnership opportunities"
      backgroundImage="https://images.unsplash.com/photo-1520870121499-7dddb6ccbcde?w=1920&q=80"
    >
      {/* Contact Information */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((contact, index) => (
            <div key={index} className="bg-white rounded-3xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2a6553] to-[#1e4a3a] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                {contact.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{contact.title}</h3>
              <div className="space-y-1">
                {contact.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#2a6553] focus:border-transparent outline-none transition-all duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#2a6553] focus:border-transparent outline-none transition-all duration-200"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#2a6553] focus:border-transparent outline-none transition-all duration-200"
                  placeholder="john.doe@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#2a6553] focus:border-transparent outline-none transition-all duration-200"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#2a6553] focus:border-transparent outline-none transition-all duration-200">
                  <option>General Inquiry</option>
                  <option>Product Information</option>
                  <option>Technical Support</option>
                  <option>Partnership</option>
                  <option>Media Request</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#2a6553] focus:border-transparent outline-none transition-all duration-200 resize-none"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#2a6553] to-[#1e4a3a] text-white py-3 rounded-full font-medium hover:shadow-lg hover:shadow-[#2a6553]/30 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Response</h3>
              <p className="text-gray-600 mb-4">
                We typically respond to inquiries within 24 hours during business days. 
                For urgent matters, please call our support line.
              </p>
              <div className="flex items-center space-x-2 text-[#2a6553]">
                <Clock size={20} />
                <span className="font-medium">Average response: 4 hours</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#2a6553] to-[#1e4a3a] rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Emergency Support</h3>
              <p className="mb-4">
                For critical technical support or emergency situations, our team is available 24/7.
              </p>
              <button className="bg-white text-[#2a6553] px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-200">
                Emergency Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Global Offices */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Global Offices</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{office.city}</h3>
                <span className="text-sm bg-[#2a6553] text-white px-3 py-1 rounded-full">
                  {office.type}
                </span>
              </div>
              <p className="text-gray-600 mb-2">{office.country}</p>
              <p className="text-gray-600 text-sm mb-4">{office.address}</p>
              <p className="text-gray-700 text-sm">{office.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Partnership CTA */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-[#2a6553] to-[#1e4a3a] rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Interested in Partnership?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for strategic partners and distributors worldwide
          </p>
          <button className="bg-white text-[#2a6553] px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200">
            Partnership Inquiry
          </button>
        </div>
      </div>
    </PageLayout>
  )
}
