"use client"

import React from "react"
import Navigation from "./Navigation"
import Footer from "./Footer"

interface PageLayoutProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  backgroundImage?: string
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  title, 
  subtitle, 
  children, 
  backgroundImage = "https://images.unsplash.com/photo-1727600950904-85b32343415f?w=1920&q=80" 
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {/* Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center bg-no-repeat mt-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl font-bold mb-4">{title}</h1>
            {subtitle && (
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">{subtitle}</p>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {children}
      </div>
      
      <Footer />
    </div>
  )
}

export default PageLayout
