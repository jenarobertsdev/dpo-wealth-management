import React from "react";

const OurProcess: React.FC = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Process
            </h2>
          </div>

          {/* Process Image */}
          <div className="flex justify-center">
            <img
              src="/ourprocess.png"
              alt="Our Process - Initial Meeting, Analyze Information, Implementation, Ongoing Review"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
