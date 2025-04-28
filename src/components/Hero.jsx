import React from 'react';

export default function HeroSection() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-purple-200 via-blue-800 to-black overflow-x-hidden">
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 sm:px-16 lg:px-24">
        <div className="flex items-center">
          <img src="/images/group.png" alt="MobiusEngine Logo" className="h-8 sm:h-10" />
        </div>
        <ul className="flex items-center space-x-5 sm:space-x-8 list-none">
          <li><a href="#" className="text-white hover:text-gray-300 nav-item text-sm sm:text-base">Home</a></li>
          <li><a href="#" className="text-white hover:text-gray-300 nav-item text-sm sm:text-base">About Us</a></li>
          <li><a href="#" className="text-white hover:text-gray-300 nav-item text-sm sm:text-base">Plans</a></li>
          <li><a href="#" className="text-white hover:text-gray-300 nav-item text-sm sm:text-base">Testimonials</a></li>
          <li><a href="#" className="text-white hover:text-gray-300 nav-item text-sm sm:text-base">Privacy Policy</a></li>
          <li><a href="#" className="text-white hover:text-gray-300 nav-item text-sm sm:text-base">More ▼</a></li>
        </ul>
        <button className="bg-white text-blue-600 px-3 py-2 rounded-full font-semibold hover:bg-gray-200 text-sm sm:px-4 sm:py-2.5 sm:text-base">
          Get Started
        </button>
      </nav>

      {/* Main Content Area */}
      <div className="flex h-full items-center justify-center relative pt-32 sm:pt-24 lg:pt-0">
        <div className="w-full px-6 sm:px-8 lg:px-16 max-w-7xl">
          {/* Mobile Layout */}
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-10 sm:space-y-0 sm:space-x-10 lg:space-x-20">
            {/* Left Side - Text and Button */}
            <div className="text-center sm:text-left max-w-full sm:max-w-md space-y-6">
              <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                Land job interviews <br />
                <span className="text-blue-900">10x faster</span>
              </h1>
              <p className="text-gray-300 text-base sm:text-xl lg:text-2xl max-w-full sm:max-w-md">
                Custom-built resumes that match your goals, keywords, and recruiter expectations.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2.5 rounded-full font-semibold hover:bg-blue-600 w-full sm:w-auto">
                Get Started →
              </button>
            </div>
            {/* Right Side - eBook Graphic */}
            <div className="relative w-full sm:w-1/2 lg:w-1/3">
              <img
                src="images/book.png"
                alt="E-book"
                className="w-full h-auto shadow-lg max-w-md mx-auto sm:max-w-none"
              />
              <a
                href="#"
                className="absolute bottom-4 right-4 text-white text-sm hover:underline sm:bottom-8 sm:right-8"
              >
                Download Free E-Book
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}