import React from 'react'
import { Link } from 'react-router-dom'
const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      <div
        className="absolute inset-0 z-0 overflow-hidden opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Shop the Latest Trends
          </h1>
          <p className="text-xl mb-8">
            Discover premium products at unbeatable prices. From electronics to
            fashion, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              Shop Now
            </Link>
            <Link
              to="/products"
              className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-gray-900 transition-colors"
            >
              View Deals
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HeroSection
