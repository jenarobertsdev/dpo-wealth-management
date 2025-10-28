import React from "react";

const BrokerCheck: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="https://brokercheck.finra.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-32 h-8 sm:w-40 sm:h-10 md:w-48 md:h-12 flex items-center justify-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
        style={{ backgroundColor: "#d3d9e0" }}
      >
        <img
          src="/broker-check.png"
          alt="Broker Check"
          className="w-28 h-6 sm:w-36 sm:h-8 md:w-40 md:h-10 object-contain"
        />
      </a>
    </div>
  );
};

export default BrokerCheck;
