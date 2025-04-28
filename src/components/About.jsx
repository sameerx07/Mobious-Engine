// src/components/About.jsx
import React from 'react'
     // your background image
// import ashwinImg from '../assets/ashwin-placeholder.jpg'
// import nicoleImg from '../assets/nicole-placeholder.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function About() {
  return (
    <div
      className="text-white bg-cover bg-center"
      style={{ backgroundImage: `url('images/about.png')` }}
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-16">About Us</h2>
        
        <div className="flex flex-col gap-20">
          {/* Team Member 1 */}
          <div className="flex items-start gap-8">
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200/[0.1]">
                {/* <img
                  src={ashwinImg}
                  alt="Ashwin"
                  className="w-full h-full object-cover"
                /> */}
              </div>
              <a
                href="https://linkedin.com/in/ashwin-placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
              >
                <button className="bg-indigo-600 rounded-full p-2 text-white transition-transform hover:scale-110">
                  <FontAwesomeIcon icon={faLinkedin} />
                </button>
              </a>
            </div>
            <div className="text-lg max-w-2xl">
              <p className="text-gray-300">
                <span className="text-white font-semibold">Ashwin</span> is the founder of mobiusengine.ai. He is an accomplished
                senior executive with over 20 years of experience in cloud
                infrastructure and financial services. With over 2 decades at
                Google and JP Morgan, he’s held various product and GTM roles.
                Ashwin holds an MBA from Yale University.
              </p>
              <p className="mt-4 text-gray-300">
                His vision with Mobius is to give job seekers a significant
                advantage in securing the roles of their dreams.
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="flex items-start gap-8">
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200/[0.1]">
                {/* <img
                  src={nicoleImg}
                  alt="Nicole"
                  className="w-full h-full object-cover"
                /> */}
              </div>
              <a
                href="https://linkedin.com/in/nicole-placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
              >
                <button className="bg-indigo-600 rounded-full p-2 text-white transition-transform hover:scale-110">
                  <FontAwesomeIcon icon={faLinkedin} />
                </button>
              </a>
            </div>
            <div className="text-lg max-w-2xl">
              <p className="text-gray-300">
                <span className="text-white font-semibold">Nicole</span> is an Executive Coach at Mobius, specializing in
                resume builds and career advisory.
              </p>
              <p className="mt-4 text-gray-300">
                With a B.S. in Business Administration from UC Berkeley and seven
                years of AI-driven product strategy experience, she knows how the
                right positioning opens doors. She takes a targeted,
                results-driven approach to help clients confidently stand out
                and land roles that truly match their potential.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 space-y-2">
          <a
            href="#"
            className="text-indigo-300 hover:underline text-xl block"
          >
            Learn more about our Board of Advisors ↗
          </a>
          <a href="#" className="text-indigo-300 hover:underline text-xl block">
            Follow us on our LinkedIn page ↗
          </a>
        </div>
      </div>
    </div>
  )
}
