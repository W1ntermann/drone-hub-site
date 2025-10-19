import About from "@/components/About";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import News from "@/components/News";
import OperatingZone from "@/components/OperatingZone";
import PayloadTypes from "@/components/PayloadTypes";
import UseCases from "@/components/UseCases";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <UseCases />
      <PayloadTypes />
      <OperatingZone />
      <News />
      <Footer />
    </div>
  )
}