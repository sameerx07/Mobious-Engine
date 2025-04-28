import React from 'react';

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Section title */}
        <h2 className="text-center text-4xl font-medium text-blue-600 tracking-tight leading-[41.6px] mb-16">
          What our clients have to say
        </h2>

        {/* 3-column grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="border-2 border-blue-600 rounded-[32px] overflow-hidden flex flex-col"
            >
              {/* Top white video-thumb area */}
              <div className="bg-white w-full h-64 flex items-center justify-center">
                <button className="bg-blue-600 rounded-full p-3 text-white">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.759 14.241l-3 3c-.535.535-1.414.535-1.949 0l-3-3A2.997 2.997 0 013 12V9c0-.77.385-1.437 1.053-1.894l3-3c.535-.535 1.414-.535 1.949 0L10 4.105l3 3c.535.535.535 1.414 0 1.949l-3 3c-.535.535-1.414.535-1.949 0M18 12a6 6 0 10-12 0 6 6 0 0012 0z"
                    />
                  </svg>
                </button>
              </div>

              {/* Bottom blue text area */}
              <div className="bg-blue-600 flex-1 p-8 relative">
                <p className="text-white text-left">
                  Holly is a{' '}
                  <strong className="font-bold">senior executive</strong> who got over{' '}
                  <strong className="font-bold">10 job interviews</strong> and an offer she
                  accepted
                </p>

                {/* arrow button */}
                <button className="absolute bottom-6 right-6 bg-white rounded-full p-3 text-blue-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA buttons */}
        <div className="flex justify-center gap-8 mt-16">
          <button className="border-2 border-blue-600 text-blue-600 bg-white rounded-full px-8 py-3 font-medium flex items-center gap-2">
            More customer testimonials ↗
          </button>
          <button className="bg-blue-600 text-white rounded-full px-8 py-3 font-medium flex items-center gap-2">
            Get Started →
          </button>
        </div>
      </div>
    </div>
  );
}