import React from 'react';

const Resume = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">Resume Building & Coaching</h2>
          <p className="text-blue-600">
            Let's talk about where you're headed — and how your resume can get you there. Schedule a call to get started.
          </p>
        </div>

        {/* Cards Container */}
        <div className="border-2 border-blue-500 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Resume Rebuild Card */}
            <div className="border-r-2 border-b-2 border-blue-500 pr-8 pb-8 md:pr-0 md:border-r-0 md:border-b-0 md:pb-0">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Resume Rebuild</h3>
              <p className="text-blue-600 mb-6">
                Crafted for senior to VP-level professionals ready for their next big leap.
              </p>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-blue-600">$100</span>
                <span className="text-lg text-blue-600">one time</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>3+ 30-min coaching sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Focused on storytelling, not just formatting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Analyst + full application team on Pacific hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Tailored to your target industry, company, or role</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Direct work with our co-founder (ex-Google, JP Morgan)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Founded by a UC Berkeley alum with 10+ yrs of experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Resume Rebuild portfolio available upon request</span>
                </li>
              </ul>

              <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center justify-center">
                Get Started →
              </button>
            </div>

            {/* Interview Prep Card */}
            <div className="border-l-2 border-b-2 border-blue-500 pl-8 pb-8 md:border-l-0 md:border-l-2 md:pl-8 md:border-b-0 md:pb-0">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Interview Prep</h3>
              <p className="text-blue-600 mb-6">
                Two sessions to sharpen your story, confidence, and clarity — fast.
              </p>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-blue-600">$500</span>
                <span className="text-lg text-blue-600">one time</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>2+ 45-min live coaching with our co-founder</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Real-time, practical feedback</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Build clarity, empathy & executive presence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>For senior and leadership roles — technical & non-technical</span>
                </li>
              </ul>

              <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center justify-center">
                Get Started →
              </button>
            </div>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="mt-16">
          <div className="bg-blue-600 text-white rounded-2xl p-8 flex items-center justify-between">
            <div>
              <p className="text-lg font-medium">STILL HAVE DOUBTS?</p>
              <h3 className="text-3xl font-bold">Contact us</h3>
            </div>
            <button className="bg-white text-blue-600 rounded-full p-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;