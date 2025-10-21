import React from "react";
import { Users, BarChart3, Settings, TrendingUp } from "lucide-react";

interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const ProcessFlow: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      stepNumber: "STEP 01",
      title: "INITIAL MEETING",
      description:
        "We identify your goals, understand your situation, and collect all necessary information to begin building your personalized wealth management strategy.",
      icon: <Users className="w-12 h-12" style={{ color: "#073d73" }} />,
      color: "from-[#286141] to-[#3a6b5f]",
    },
    {
      stepNumber: "STEP 02",
      title: "ANALYZE INFORMATION",
      description:
        "We analyze your cash flows, clarify your goals, and review your taxes, investment portfolios, and insurance coverage to develop comprehensive recommendations.",
      icon: <BarChart3 className="w-12 h-12" style={{ color: "#073d73" }} />,
      color: "from-[#3a6b5f] to-[#4c7579]",
    },
    {
      stepNumber: "STEP 03",
      title: "IMPLEMENTATION",
      description:
        "We make final changes, complete our review, and finalize your comprehensive financial plan with all strategies ready for execution.",
      icon: <Settings className="w-12 h-12" style={{ color: "#073d73" }} />,
      color: "from-[#4c7579] to-[#5e7f93]",
    },
    {
      stepNumber: "STEP 04",
      title: "ONGOING REVIEW",
      description:
        "We continuously monitor your plan and make adjustments as needed to ensure you stay on track to achieve your financial goals.",
      icon: <TrendingUp className="w-12 h-12" style={{ color: "#073d73" }} />,
      color: "from-[#5e7f93] to-[#073d73]",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="relative flex items-start gap-4 justify-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex-shrink-0"
              style={{
                zIndex: steps.length - index,
              }}
            >
              {/* Arrow Banner */}
              <div className="relative">
                <div
                  className={`bg-gradient-to-r ${step.color} text-white px-8 py-4 text-lg font-bold relative flex items-center`}
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%)",
                    zIndex: 50,
                  }}
                >
                  <div className="relative z-50 block">{step.stepNumber}</div>
                </div>
              </div>

              {/* Content Box */}
              <div
                className="bg-white border border-gray-300 p-6 h-[280px] w-80 relative flex flex-col items-center text-center"
                style={{ zIndex: 30 }}
              >
                {/* Icon */}
                <div
                  className="mb-4 flex justify-center"
                  style={{ zIndex: 40 }}
                >
                  {step.icon}
                </div>

                {/* Title */}
                <div
                  className="font-bold text-gray-800 text-lg mb-4"
                  style={{ zIndex: 40 }}
                >
                  {step.title}
                </div>

                {/* Description */}
                <div
                  className="text-sm text-gray-600 leading-relaxed"
                  style={{ zIndex: 40 }}
                >
                  {step.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="absolute -left-2 -top-2 w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold z-10 shadow-lg">
                {index + 1}
              </div>

              {/* Arrow Banner */}
              <div
                className={`bg-gradient-to-r ${step.color} text-white px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-lg font-bold rounded-t-lg ml-6 shadow-md`}
              >
                {step.stepNumber}
              </div>

              {/* Content Box */}
              <div className="bg-white border border-gray-300 p-4 sm:p-6 rounded-b-lg ml-6 shadow-md text-center">
                {/* Icon */}
                <div className="mb-3 sm:mb-4 flex justify-center">
                  {step.icon}
                </div>

                {/* Title */}
                <div className="font-bold text-gray-800 text-base sm:text-lg mb-3 sm:mb-4">
                  {step.title}
                </div>

                {/* Description */}
                <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </div>
              </div>

              {/* Connecting Arrow */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-6">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-6 bg-gray-300"></div>
                    <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-gray-300"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessFlow;
