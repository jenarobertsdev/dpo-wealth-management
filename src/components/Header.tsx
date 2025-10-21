import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="w-full">
      {/* Main Navigation */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/dpo-header.png"
                alt="DPO Wealth Management"
                className="h-24 w-auto"
              />
            </div>

            {/* Navigation Links - Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-blue-900 font-medium border-b-2 border-blue-900 pb-1 text-xl"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-blue-900 font-medium hover:border-b-2 hover:border-blue-900 pb-1 transition-colors text-xl"
              >
                About Us
              </a>
              <a
                href="#process"
                className="text-blue-900 font-medium hover:border-b-2 hover:border-blue-900 pb-1 transition-colors text-xl"
              >
                Process
              </a>
              <a
                href="#services"
                className="text-blue-900 font-medium hover:border-b-2 hover:border-blue-900 pb-1 transition-colors text-xl"
              >
                Services
              </a>
              <a
                href="#locations"
                className="text-blue-900 font-medium hover:border-b-2 hover:border-blue-900 pb-1 transition-colors text-xl"
              >
                Locations
              </a>
              <a
                href="https://www.mystreetscape.com/auth/access/login"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded flex items-center gap-2 text-sm font-medium transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Account Login
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-blue-900 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
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
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3 pt-4">
                <a
                  href="#home"
                  className="text-blue-900 font-medium border-b-2 border-blue-900 pb-1 w-fit text-xl"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-blue-900 font-medium hover:border-b-2 hover:border-blue-900 pb-1 w-fit transition-colors text-xl"
                >
                  About Us
                </a>
                <a
                  href="#process"
                  className="text-blue-900 font-medium hover:border-b-2 hover:border-blue-900 pb-1 w-fit transition-colors text-xl"
                >
                  Process
                </a>
                <a
                  href="#services"
                  className="text-blue-900 font-medium hover:border-b-2 hover:border-blue-900 pb-1 w-fit transition-colors text-xl"
                >
                  Services
                </a>
                <a
                  href="#locations"
                  className="text-blue-900 font-medium hover:border-b-2 hover:border-blue-900 pb-1 w-fit transition-colors text-xl"
                >
                  Locations
                </a>
                <a
                  href="https://www.mystreetscape.com/auth/access/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded flex items-center gap-2 text-sm font-medium transition-colors w-fit"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Client Login
                </a>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
