import type { NavigationItem, Feature, UseCase, PayloadSpec, NewsItem, OperatingZone } from "@/types"

// Mock data for Skyeton website clone
// This file contains all the static data used in the frontend
// In a full-stack implementation, this data would come from the backend API

export const navigationItems: NavigationItem[] = [
  { 
    label: "Company", 
    hasDropdown: true,
    dropdownItems: [
      { label: "About Us", href: "/about" },
      { label: "News", href: "/news" },
      { label: "Media Assets", href: "/media" }
    ]
  },
  { 
    label: "Raybird UAS", 
    hasDropdown: false,
    href: "/reb-shelter"
  },
  { 
    label: "Applications", 
    hasDropdown: true,
    dropdownItems: [
      { label: "Deep Reconnaissance", href: "/applications/reconnaissance" },
      { label: "Targeting and Precision Fire Control", href: "/applications/targeting" },
      { label: "Radio Frequency Intelligence", href: "/applications/rf-intelligence" },
      { label: "Data Link Extension", href: "/applications/data-link" },
      { label: "Border Control", href: "/applications/border-control" },
      { label: "Maritime Surveillance", href: "/applications/maritime" },
      { label: "Power Line Inspection", href: "/applications/power-lines" },
      { label: "Pipeline Monitoring", href: "/applications/pipelines" },
      { label: "Road Inspection", href: "/applications/roads" },
      { label: "Wildfire Prevention", href: "/applications/wildfire" }
    ]
  },
  { 
    label: "Services", 
    hasDropdown: true,
    dropdownItems: [
      { label: "Training", href: "/services/training" },
      { label: "Support", href: "/services/support" },
      { label: "Rent", href: "/services/rent" }
    ]
  },
  { 
    label: "Careers", 
    hasDropdown: false,
    href: "/careers"
  },
  { 
    label: "Contacts", 
    hasDropdown: false,
    href: "/contacts"
  },
]

export const features: Feature[] = [
  {
    title: "War-Hardened",
    description: "Flies in any weather, resists EW, works without GPS, and survives 90%+ of missions",
  },
  {
    title: "Endurance",
    description: "Flies 28+ hours for deep recon, long surveillance, and target tracking; it has 350,000+ combat flight hours",
  },
  {
    title: "Efficiency",
    description: "A small tactical system delivering performance on par with medium+ class platforms",
  },
  {
    title: "Versatile Platform",
    description: "Swaps payloads in under a minute — video, photo, SAR, and more in one platform",
  },
  {
    title: "Best-in-Class Resilience",
    description: "Works in extremes and lasts up to 200 flights, cutting cost per mission",
  },
  {
    title: "Speed & Ease of Use",
    description: "Assembles in 25 min, with fully automated takeoff and landing, tool-free",
  },
]

export const useCases: UseCase[] = [
  {
    number: "01",
    title: "Deep Reconnaissance",
    description: "Intelligence missions deep behind enemy lines. High-resolution video. Compact form = low detectability by air defense systems",
    image: "https://images.unsplash.com/photo-1727600950904-85b32343415f?w=1920&q=80",
  },
  {
    number: "02",
    title: "Target Acquisition and Precision Fire Control",
    description: "Provides accurate coordinates for artillery systems (Caesar, Krab), adjusts fire missions, and confirms target elimination. Interacts with HIMARS and other long-range systems",
    image: "https://images.unsplash.com/photo-1745390397223-a07a550fb7bb?w=1920&q=80",
  },
  {
    number: "03",
    title: "Radio Frequency Reconnaissance",
    description: "Raybird uses radio frequency payloads to detect and identify enemy systems",
    image: "https://images.unsplash.com/photo-1520870121499-7dddb6ccbcde?w=1920&q=80",
  },
  {
    number: "04",
    title: "Extend Data Transmission",
    description: "Data Link Extension by 50–80 km",
    image: "https://images.pexels.com/photos/739410/pexels-photo-739410.jpeg?w=1920&q=80",
  },
  {
    number: "05",
    title: "Border Control",
    description: "24/7 Border Patrol. Target Detection and Tracking",
    image: "https://images.unsplash.com/photo-1633169420455-97eb1405fc51?w=1920&q=80",
  },
  {
    number: "06",
    title: "Maritime Surveillance",
    description: "Round-the-clock aerial support for maritime operations. Detection of illegal activities such as drug trafficking and unauthorized fishing. Identification and monitoring of pollution",
    image: "https://images.unsplash.com/photo-1727600950946-3d7831c96b71?w=1920&q=80",
  },
  {
    number: "07",
    title: "Power Line Inspection",
    description: "Performing large-scale aerial video of power line routes. Detection of insulator damage on poles. Measurement of wire and cable attachment heights on transmission towers",
    image: "https://images.pexels.com/photos/13456575/pexels-photo-13456575.jpeg?w=1920&q=80",
  },
  {
    number: "08",
    title: "Pipeline Monitoring",
    description: "High-resolution video of pipelines, auxiliary equipment, and surrounding infrastructure. Infrared imaging to detect pipeline damage and potential oil or gas leak areas",
    image: "https://images.unsplash.com/photo-1697122235975-8cb2d056aed8?w=1920&q=80",
  },
  {
    number: "09",
    title: "Road Inspection",
    description: "Rapid road surface diagnostics and traffic flow monitoring. Accurate detection of road surface damage type and severity. Monitoring of bridges and other civil engineering structures",
    image: "https://images.unsplash.com/photo-1745390396894-bca7e9c8bd66?w=1920&q=80",
  },
  {
    number: "10",
    title: "Wildfire Prevention and Response",
    description: "Aerial reconnaissance for wildfire prevention and illegal logging detection. Coordination of firefighting and deforestation response operations",
    image: "https://images.pexels.com/photos/10843104/pexels-photo-10843104.jpeg?w=1920&q=80",
  },
]

export const payloads: PayloadSpec[] = [
  {
    id: "gimbal",
    title: "Gyro-Stabilized Multisensor Gіmbals",
    number: "01",
    image: "https://images.unsplash.com/photo-1738748140319-b07cd28c41d2?w=400&q=80",
    specs: [
      "Medium-Wave Infrared (MWIR) and Electro-Optical (EO) imaging",
      "4-axis stabilization",
      "Dual simultaneous H.265 video streams provide situational awareness and detailed target view",
      "Built-in video processing, including image stabilization and target tracking",
      "Half the weight and power consumption compared to industry standard",
    ],
  },
  {
    id: "camera",
    title: "Aerial Photo Cameras",
    number: "02",
    image: "https://images.unsplash.com/photo-1631021947936-811f7d6aaa9c?w=400&q=80",
    specs: [
      "Resolution: up to 11,664 × 8,750 pixels",
      "Pixel Size: up to 5.3 µm",
      "Frame Rate: up to 3 fps",
      "Operating Temperature Range: -10°C to +40°C",
    ],
  },
  {
    id: "sar",
    title: "Synthetic Aperture Radar (SAR)",
    number: "03",
    image: "https://images.unsplash.com/photo-1633169420455-97eb1405fc51?w=400&q=80",
    specs: [
      "Resolution: from 0.3 to 10 meters",
      "Maximum Imaging Range: up to 20 km",
      "Moving Target Detection: up to 15 km",
      "Operating Altitude: up to 5,000 meters",
      "Weight: 4 kg",
    ],
  },
  {
    id: "rf",
    title: "Radio Frequency Locator",
    number: "04",
    image: "https://images.pexels.com/photos/739410/pexels-photo-739410.jpeg?w=400&q=80",
    specs: [
      "Effective triangulation of enemy electronic systems at distances over 25 km",
    ],
  },
]

export const newsItems: NewsItem[] = [
  {
    title: "Skyeton Supports the 5th All-Ukrainian Engineering Hackathon SmaRTF",
    excerpt: "On October 17, the All-Ukrainian Engineering...",
    date: "17.10.2025",
    readTime: "1 min",
    image: "https://images.unsplash.com/photo-1745390397223-a07a550fb7bb?w=600&q=80",
  },
  {
    title: "Skyeton at the 4th Advanced Air Mobility Forum in Gilching",
    excerpt: "Skyeton took part in the 4th...",
    date: "16.10.2025",
    readTime: "1 min",
    image: "https://images.unsplash.com/photo-1727600950904-85b32343415f?w=600&q=80",
  },
  {
    title: "Skyeton Supports the Wild Drones — Honouring Those Who Fly and Those Who Make Them Stronger",
    excerpt: "Skyeton was honoured to join as...",
    date: "14.10.2025",
    readTime: "1 min",
    image: "https://images.unsplash.com/photo-1727600950946-3d7831c96b71?w=600&q=80",
  },
  {
    title: "Skyeton and Bertel O. Steen Defence & Security AS at Army Technology Days 2025",
    excerpt: "Skyeton, together with Bertel O. Steen...",
    date: "13.10.2025",
    readTime: "1 min",
    image: "https://images.pexels.com/photos/10843104/pexels-photo-10843104.jpeg?w=600&q=80",
  },
]

export const operatingZones: OperatingZone[] = [
  {
    range: "120 km",
    description: "Typical Flight Range for Small\nUAVs (up to 25 kg)",
    image: "https://images.unsplash.com/photo-1631021947936-811f7d6aaa9c?w=300&q=80",
    highlighted: false,
  },
  {
    range: "200+ km",
    description: "Direct Online Link in\nRaybird",
    image: "https://images.unsplash.com/photo-1738748140319-b07cd28c41d2?w=300&q=80",
    highlighted: true,
  },
  {
    range: "2,500 km",
    description: "Total Flight Range of\nRaybird",
    image: "https://images.unsplash.com/photo-1738748140319-b07cd28c41d2?w=300&q=80",
    highlighted: false,
  },
]
