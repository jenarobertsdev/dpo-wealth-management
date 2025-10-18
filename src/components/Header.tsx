import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full">
      {/* Top Contact Bar */}
      <div className="bg-gray-600 border-t-2 border-pink-700">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-white text-sm">
              <a
                href="https://www.google.com/maps/search/7921+Broad+River+Road,+Suite+100,+Irmo,+SC+29063"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-200 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>7921 Broad River Road, Suite 100, Irmo, SC 29063</span>
              </a>
              <a
                href="tel:+18034071040"
                className="flex items-center gap-2 hover:text-gray-200 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>(803) 407-1040</span>
              </a>
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=contact@dpowealth.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-200 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>contact@dpowealth.com</span>
              </a>
            </div>

            {/* Account Login Button */}
            <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded flex items-center gap-2 text-sm font-medium transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              Account Login
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/dpo-header.png"
                alt="DPO Wealth Management"
                className="h-16 w-auto"
              />
            </div>

            {/* Navigation Links - Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-blue-900 font-medium border-b-2 border-blue-900 pb-1"
              >
                Home
              </a>
              <a
                href="#"
                className="text-blue-900 font-medium hover:border-b-2 hover:border-blue-900 pb-1 transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-blue-900 font-medium hover:border-b-2 hover:border-blue-900 pb-1 transition-colors"
              >
                Client Login
              </a>
              <a
                href="#"
                className="text-blue-900 font-medium hover:border-b-2 hover:border-blue-900 pb-1 transition-colors"
              >
                Resource Center
              </a>
              <a
                href="#"
                className="text-blue-900 font-medium hover:border-b-2 hover:border-blue-900 pb-1 transition-colors"
              >
                Tools
              </a>
              <a
                href="#"
                className="text-blue-900 font-medium hover:border-b-2 hover:border-blue-900 pb-1 transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-blue-900 p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <a
                href="#"
                className="text-blue-900 font-medium border-b-2 border-blue-900 pb-1 w-fit"
              >
                Home
              </a>
              <a
                href="#"
                className="text-blue-900 font-medium hover:border-b-2 hover:border-blue-900 pb-1 w-fit transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-blue-900 font-medium hover:border-b-2 hover:border-blue-900 pb-1 w-fit transition-colors"
              >
                Client Login
              </a>
              <a
                href="#"
                className="text-blue-900 font-medium hover:border-b-2 hover:border-blue-900 pb-1 w-fit transition-colors"
              >
                Resource Center
              </a>
              <a
                href="#"
                className="text-blue-900 font-medium hover:border-b-2 hover:border-blue-900 pb-1 w-fit transition-colors"
              >
                Tools
              </a>
              <a
                href="#"
                className="text-blue-900 font-medium hover:border-b-2 hover:border-blue-900 pb-1 w-fit transition-colors"
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
