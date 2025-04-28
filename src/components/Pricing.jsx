import React from 'react';

const Pricing = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mr-4">
            Job Application Service Plans
          </h2>
          <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm">
            Anonymous
          </span>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* April Promo Plan */}
          <div className="border-2 border-blue-500 rounded-2xl p-8 bg-f8faf0">
            <h3 className="text-2xl font-bold text-blue-800 mb-2">April Promo</h3>
            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-bold text-blue-800">$35</span>
              <span className="text-lg text-blue-600">/week</span>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Curated jobs from 1M+ listings, refreshed each 48 hours</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Up to 20 human-verified roles per week (no fluff - just real company sites)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Need more? Add extra apps for only $8 each</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Your own dedicated application analyst</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Personalized with up to 10 filters & 5 job titles</span>
              </li>
            </ul>

            <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center justify-center">
              Get Started →
            </button>
          </div>

          {/* Starter Plan */}
          <div className="border-2 border-blue-500 rounded-2xl p-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-blue-800">Starter</h3>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">Popular</span>
            </div>
            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-bold text-blue-800">$50</span>
              <span className="text-lg text-blue-600">/week</span>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>All the perks of the Promo Plan, plus:</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Resume review & story-focused feedback</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Dedicated search specialist</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Up to 50 job apps/week</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Extra apps at $5 each</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Analytics support within 6 hours (SLA/PSA hours)</span>
              </li>
            </ul>

            <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center justify-center">
              Get Started →
            </button>
          </div>

          {/* Plus Plan */}
          <div className="border-2 border-blue-500 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-2">Plus</h3>
            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-bold text-blue-800">$100</span>
              <span className="text-lg text-blue-600">/week</span>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Everything in Starter, with more muscle:</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Up to 75 apps/week</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Apply to 15 job titles</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Analytics + full application team on-demand access</span>
              </li>
            </ul>

            <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center justify-center">
              Get Started →
            </button>
          </div>
        </div>

        {/* Advance Plan */}
        <div className="mt-16">
          <div className="border-2 border-blue-500 rounded-2xl p-8 bg-blue-500 text-white">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Advance</h3>
                <p>Top-tier support for serious job hunters:</p>
              </div>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">$150</span>
                <span className="text-lg">/week</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <ul className="space-y-4 w-1/2">
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Everything in Plus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>20 fully customized applications/week</span>
                </li>
              </ul>
              <ul className="space-y-4 w-1/2">
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Custom Resumes & Cover Letters</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Help with complex job searches</span>
                </li>
              </ul>
            </div>

            <button className="bg-white text-blue-600 px-6 py-2 rounded-full text-sm font-medium flex items-center justify-center">
              Get Started →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;