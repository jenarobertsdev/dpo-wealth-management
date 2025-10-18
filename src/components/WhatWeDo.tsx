import React from "react";

const WhatWeDo: React.FC = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24 lg:gap-48">
            {/* What We Do */}
            <div className="text-center">
              {/* Icon */}
              <div className="mb-4">
                <svg
                  className="w-12 h-12 mx-auto text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                What We Do
              </h2>

              {/* Content */}
              <p className="text-base text-gray-600 leading-relaxed">
                DPO Wealth Management offers an all-inclusive approach towards
                achieving your goals by integrating financial planning,
                portfolio management, insurance and tax strategies.
              </p>
            </div>

            {/* Our Goal */}
            <div className="text-center">
              {/* Icon */}
              <div className="mb-4">
                <svg
                  className="w-12 h-12 mx-auto text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                Our Goal
              </h2>

              {/* Content */}
              <p className="text-base text-gray-600 leading-relaxed">
                We will keep you focused on where you want to go, advise you on
                how to get there, and consistently aid you in maintaining the
                disciplined approach required to realize your dreams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
