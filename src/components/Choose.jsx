import React from 'react';

const Choose = () => {
  return (
    <div className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-800 mb-12">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="border-2 border-blue-700 rounded-3xl p-8">
            <div className="text-blue-800 w-12 h-12 mb-6 mx-auto">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z"/>
                <path d="M14 9V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3"/>
                <path d="M14 18v-3a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3"/>
                <path d="M20 10a5 5 0 0 0-9 0"/>
                <path d="M4 14a5 5 0 0 0 9 0"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-4">
              Tried, Tested, Trusted
            </h3>
            <p className="text-blue-700 text-sm">
              Built by folks with 40+ years in tech and hiring — we know the game, and we've got your back.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border-2 border-blue-700 rounded-3xl p-8">
            <div className="text-blue-800 w-12 h-12 mb-6 mx-auto">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="7" r="4"/>
                <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <path d="M12 21v-2"/>
                <path d="M12 15h.01"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-4">
              Real People, Real Help
            </h3>
            <p className="text-blue-700 text-sm">
              A hands-on team that actually cares — guiding you through every twist in your career path.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border-2 border-blue-700 rounded-3xl p-8">
            <div className="text-blue-800 w-12 h-12 mb-6 mx-auto">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-4">
              Beat the Line
            </h3>
            <p className="text-blue-700 text-sm">
              We search, shortlist, and apply for you, so your name shows up first — every single day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;