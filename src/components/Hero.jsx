import React from 'react';


export default function HeroSection() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-purple-200 via-blue-800 to-black overflow-x-hidden">
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4">
        <div className="flex items-center">
          <img src="/images/group.png" alt="MobiusEngine Logo" className="h-8" />
          
        </div>
        <ul className="flex items-center justify-center space-x-8 list-none max-w-5xl mx-auto">
          <li><a href="#" className="text-white hover:text-gray-300 nav-item">Home</a></li>
          <li><a href="#" className="text-white hover:text-gray-300 nav-item">About Us</a></li>
          <li><a href="#" className="text-white hover:text-gray-300 nav-item">Plans</a></li>
          <li><a href="#" className="text-white hover:text-gray-300 nav-item">Testimonials</a></li>
          <li><a href="#" className="text-white hover:text-gray-300 nav-item">Privacy Policy</a></li>
          <li><a href="#" className="text-white hover:text-gray-300 nav-item">More ▼</a></li>
        </ul>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-200">
          Get Started
        </button>
      </nav>

      {/* Main Content Area */}
      <div className="flex h-full items-center justify-center relative">
        <div className="flex justify-between items-center w-full px-10 max-w-7xl">
          {/* Left Side - Text and Button */}
          <div className="space-y-6 max-w-md">
            <h1 className="text-white text-6xl font-bold leading-tight">
              Land job interviews <br />
              <span className="text-blue-900">10x faster</span>
            </h1>
            <p className="text-gray-300 text-2xl max-w-md">
              Custom-built resumes that match your goals, keywords, and recruiter expectations.
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600">
              Get Started →
            </button>
          </div>
          {/* Right Side - eBook Graphic */}
          <div className="relative w-1/2">
            <img
              src="images/book.png"
              alt="E-book"
              className=" h-auto shadow-lg"
            />
            <a
              href="#"
              className="absolute bottom-8 right-8 text-white text-sm hover:underline"
            >
              Download Free E-Book
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}