import React from "react";
import { TrendingUp, Target, Shield, Calendar } from "lucide-react";

const OurServices: React.FC = () => {
  const services = [
    {
      title: "Portfolio Management",
      icon: <TrendingUp className="w-12 h-12" style={{ color: "#093c73" }} />,
      items: [
        "Brokerage Accounts",
        "Traditional IRA, Roth IRA",
        "401(k), 403(b), 457",
        "SEP IRA, Simple IRA",
        "Annuities",
      ],
    },
    {
      title: "Financial Planning",
      icon: <Target className="w-12 h-12" style={{ color: "#093c73" }} />,
      items: [
        "Retirement Planning",
        "Budgeting & Cash Flow",
        "College Education Funding",
        "Estate & Legacy Planning",
      ],
    },
    {
      title: "Insurance Solutions",
      icon: <Shield className="w-12 h-12" style={{ color: "#093c73" }} />,
      items: [
        "Life Insurance",
        "Long Term Care Insurance",
        "Disability Insurance",
        "Health Insurance Planning",
      ],
    },
    {
      title: "Tax Planning",
      icon: <Calendar className="w-12 h-12" style={{ color: "#093c73" }} />,
      items: [
        "Individual Tax Planning & Preparation",
        "Corporate Tax Planning & Preparation",
        "Small Business Accounting",
        "Income, Gift & Estate Tax Preparation",
      ],
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#093c73" }}
            >
              Our Services
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-8 text-center"
              >
                {/* Icon */}
                <div className="mb-4 sm:mb-6 flex justify-center">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                  {service.title}
                </h3>

                {/* Services List */}
                <ul className="space-y-2 sm:space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-gray-700 text-xs sm:text-sm leading-relaxed flex items-start"
                    >
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
