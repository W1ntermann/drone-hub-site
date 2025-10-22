import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="flex items-center justify-center min-h-screen pt-20">
        <div className="text-center px-6">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-700 mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link 
            href="/"
            className="inline-block bg-[#2a6553] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1e4a3a] transition-colors duration-200"
          >
            Go Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
