import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo Section */}
        <div className="py-8">
          <div className="flex items-center">
            <div className="w-16 h-16 mr-2">
              {/* Logo Placeholder */}
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="48" fill="#0052CC" />
                <path d="M30,50 Q50,30 70,50 T30,50" fill="white" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-blue-600">MobuisEngine</h2>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-gray-200 my-8"></div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Address */}
          <div>
            <h3 className="text-blue-600 font-medium mb-2">Address</h3>
            <p className="text-blue-600">
              1875 Mission St Ste 103 #450<br />
              San Francisco, CA 94103
            </p>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-blue-600 font-medium mb-2">Email</h3>
            <p className="text-blue-600">
              <a href="mailto:finance@mobiusengine.ai">finance@mobiusengine.ai</a>
            </p>
          </div>

          {/* Telephone */}
          <div>
            <h3 className="text-blue-600 font-medium mb-2">Telephone</h3>
            <p className="text-blue-600">
              <a href="tel:6508896026">650-889-6026</a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-blue-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <p>© 2023 Mobius Services LLC</p>
            <p>Terms</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;