"use client"

import React, { useState, useEffect, useRef } from "react"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { navigationItems } from "@/data/mock"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

const Navigation: React.FC = () => {
  const { language, setLanguage, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({})
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current)
      }
    }
  }, [])

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [label]: !prev[label]
    }))
  }

  const getNavTranslation = (label: string) => {
    const key = `nav.${label.toLowerCase().replace(/\s+/g, '').replace('&', '')}`
    return t(key) !== key ? t(key) : label
  }

  const getDropdownTranslation = (label: string) => {
    const cleanLabel = label.toLowerCase()
      .replace(/\s+/g, '')
      .replace('&', '')
      .replace('precision', '')
      .replace('fire', '')
      .replace('control', '')
    
    const keyMap: Record<string, string> = {
      'aboutus': 'nav.company.about',
      'news': 'nav.company.news', 
      'mediaassets': 'nav.company.media',
      'deepreconnaissance': 'nav.applications.reconnaissance',
      'targetingandprecisionfirecontrol': 'nav.applications.targeting',
      'radiofrequencyintelligence': 'nav.applications.rf',
      'datalinkextension': 'nav.applications.datalink',
      'bordercontrol': 'nav.applications.border',
      'maritimesurveillance': 'nav.applications.maritime',
      'powerlineinspection': 'nav.applications.powerlines',
      'pipelinemonitoring': 'nav.applications.pipelines',
      'roadinspection': 'nav.applications.roads',
      'wildfireprevention': 'nav.applications.wildfire',
      'training': 'nav.services.training',
      'support': 'nav.services.support',
      'rent': 'nav.services.rent'
    }
    
    return keyMap[cleanLabel] ? t(keyMap[cleanLabel]) : label
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-2 sm:p-4">
      <div 
        className={`max-w-7xl mx-auto transition-all duration-500 ease-out ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-2xl shadow-black/10 border border-white/20"
            : "bg-white/70 backdrop-blur-lg shadow-xl shadow-black/5 border border-white/30"
        } rounded-full px-4 sm:px-8 py-3 sm:py-4`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-lg shadow-[#2a6553]/30 ring-2 ring-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden">
          <Image 
          src="/assets/logo-site-drone.png"
          alt="Logo"
          width={100}
          height={100}
          className="object-cover w-full h-full"
          priority
        />
          </div>
        </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div 
                key={index} 
                className="relative group"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.hasDropdown ? (
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-[#2a6553] transition-all duration-300 font-medium py-2 px-4 rounded-full hover:bg-[#2a6553]/5 hover:shadow-md hover:shadow-[#2a6553]/10 group">
                    <span className="group-hover:scale-105 transition-transform duration-200">{getNavTranslation(item.label)}</span>
                    <ChevronDown 
                      size={16} 
                      className={`transition-all duration-300 group-hover:text-[#2a6553] ${
                        activeDropdown === item.label ? 'rotate-180 text-[#2a6553]' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <Link 
                    href={item.href || '#'} 
                    className="text-gray-700 hover:text-[#2a6553] transition-all duration-300 font-medium py-2 px-4 rounded-full hover:bg-[#2a6553]/5 hover:shadow-md hover:shadow-[#2a6553]/10 hover:scale-105"
                  >
                    {getNavTranslation(item.label)}
                  </Link>
                )}
                
                {/* Dropdown Menu */}
                {item.hasDropdown && item.dropdownItems && (
                  <div 
                    className={`absolute top-full left-0 mt-3 w-72 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/10 border border-white/20 py-4 transition-all duration-300 ${
                      activeDropdown === item.label 
                        ? 'opacity-100 visible translate-y-0 scale-100' 
                        : 'opacity-0 invisible translate-y-4 scale-95'
                    }`}
                  >
                    <div className="absolute -top-2 left-6 w-4 h-4 bg-white/95 backdrop-blur-xl border-l border-t border-white/20 rotate-45"></div>
                    {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                      <Link
                        key={dropdownIndex}
                        href={dropdownItem.href}
                        className="block px-6 py-3 text-sm text-gray-700 hover:text-[#2a6553] hover:bg-[#2a6553]/5 transition-all duration-200 hover:translate-x-1 hover:shadow-md hover:shadow-[#2a6553]/10 mx-3 rounded-full group"
                      >
                        <span className="group-hover:font-medium transition-all duration-200">{getDropdownTranslation(dropdownItem.label)}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="hidden lg:flex items-center bg-gray-100/50 rounded-full p-1 backdrop-blur-sm">
            <button 
              onClick={() => setLanguage('ua')}
              className={`px-4 py-2 text-sm transition-all duration-200 rounded-full ${
                language === 'ua' 
                  ? 'font-medium text-white bg-gradient-to-r from-[#2a6553] to-[#1e4a3a] shadow-lg shadow-[#2a6553]/30 hover:shadow-xl hover:shadow-[#2a6553]/40 hover:scale-105' 
                  : 'text-gray-500 hover:text-[#2a6553] hover:bg-white/70 hover:shadow-sm'
              }`}
            >
              UA
            </button>
            <button 
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 text-sm transition-all duration-200 rounded-full ${
                language === 'en' 
                  ? 'font-medium text-white bg-gradient-to-r from-[#2a6553] to-[#1e4a3a] shadow-lg shadow-[#2a6553]/30 hover:shadow-xl hover:shadow-[#2a6553]/40 hover:scale-105' 
                  : 'text-gray-500 hover:text-[#2a6553] hover:bg-white/70 hover:shadow-sm'
              }`}
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-full bg-gray-100/50 hover:bg-[#2a6553]/10 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#2a6553]/20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-gray-700 hover:text-[#2a6553] transition-colors duration-200" />
            ) : (
              <Menu size={24} className="text-gray-700 hover:text-[#2a6553] transition-colors duration-200" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 sm:mt-6 pb-4 space-y-2 border-t border-gray-200/50 pt-4 max-h-[70vh] overflow-y-auto">
            {navigationItems.map((item, index) => (
              <div key={index} className="space-y-2">
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown(item.label)}
                      className="flex items-center justify-between w-full text-left px-5 py-3 text-gray-700 hover:text-[#2a6553] hover:bg-[#2a6553]/5 rounded-full transition-all duration-200 font-medium hover:shadow-md hover:shadow-[#2a6553]/10 group"
                    >
                      <span className="group-hover:scale-105 transition-transform duration-200">{getNavTranslation(item.label)}</span>
                      <ChevronRight 
                        size={16} 
                        className={`transition-all duration-300 group-hover:text-[#2a6553] ${
                          mobileDropdowns[item.label] ? 'rotate-90 text-[#2a6553]' : ''
                        }`}
                      />
                    </button>
                    {mobileDropdowns[item.label] && item.dropdownItems && (
                      <div className="ml-4 space-y-1 bg-gray-50/50 rounded-3xl p-3 backdrop-blur-sm">
                        {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-[#2a6553] hover:bg-white/70 rounded-full transition-all duration-200 hover:translate-x-1 hover:shadow-sm"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {getDropdownTranslation(dropdownItem.label)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="block w-full text-left px-5 py-3 text-gray-700 hover:text-[#2a6553] hover:bg-[#2a6553]/5 rounded-full transition-all duration-200 font-medium hover:shadow-md hover:shadow-[#2a6553]/10 hover:scale-105"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {getNavTranslation(item.label)}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-center mt-6 pt-4 border-t border-gray-200/50">
              <div className="flex items-center bg-gray-100/50 rounded-full p-1 backdrop-blur-sm">
                <button 
                  onClick={() => setLanguage('ua')}
                  className={`px-4 py-2 text-sm transition-all duration-200 rounded-full ${
                    language === 'ua' 
                      ? 'font-medium text-white bg-gradient-to-r from-[#2a6553] to-[#1e4a3a] shadow-lg shadow-[#2a6553]/30' 
                      : 'text-gray-500 hover:text-[#2a6553] hover:bg-white/70'
                  }`}
                >
                  UA
                </button>
                <button 
                  onClick={() => setLanguage('en')}
                  className={`px-4 py-2 text-sm transition-all duration-200 rounded-full ${
                    language === 'en' 
                      ? 'font-medium text-white bg-gradient-to-r from-[#2a6553] to-[#1e4a3a] shadow-lg shadow-[#2a6553]/30' 
                      : 'text-gray-500 hover:text-[#2a6553] hover:bg-white/70'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
