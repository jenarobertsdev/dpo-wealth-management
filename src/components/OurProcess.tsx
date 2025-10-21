import React from "react";
import ProcessFlow from "./ProcessFlow";

const OurProcess: React.FC = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#093c73" }}
            >
              Our Process
            </h2>
          </div>

          {/* Process Flow Component */}
          <ProcessFlow />
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
