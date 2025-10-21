import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const LocationSection: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<"sc" | "fl">("sc");

  const locations = {
    sc: {
      name: "South Carolina Office",
      address: "7921 Broad River Road, Suite 100, Irmo, SC 29063",
      phone: "(803) 407-1040",
      email: "contact@dpowealth.com",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.1234567890!2d-81.1234567!3d34.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a1234567890%3A0x1234567890abcdef!2s7921%20Broad%20River%20Rd%2C%20Irmo%2C%20SC%2029063!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus",
    },
    fl: {
      name: "Florida Office",
      address: "12500 Brantley Commons Ct #3, Fort Myers, FL 33907",
      phone: "(239) 123-4567",
      email: "contact@dpowealth.com",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.1234567890!2d-81.1234567!3d26.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db1234567890%3A0x1234567890abcdef!2s12500%20Brantley%20Commons%20Ct%20%233%2C%20Fort%20Myers%2C%20FL%2033907!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus",
    },
  };

  const currentLocation = locations[activeLocation];

  return (
    <section id="locations" className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Locations
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Location Toggle & Info */}
          <div className="space-y-6">
            {/* Location Toggle */}
            <div className="flex bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setActiveLocation("sc")}
                className={`flex-1 py-3 px-2 sm:px-4 rounded-md font-medium transition-colors text-sm sm:text-base ${
                  activeLocation === "sc"
                    ? "bg-[#093c73] text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Irmo
              </button>
              <button
                onClick={() => setActiveLocation("fl")}
                className={`flex-1 py-3 px-2 sm:px-4 rounded-md font-medium transition-colors text-sm sm:text-base ${
                  activeLocation === "fl"
                    ? "bg-[#093c73] text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Fort Myers
              </button>
            </div>

            {/* Location Details */}
            <div className="bg-white rounded-lg p-4 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                {currentLocation.name}
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {/* Address */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#093c73] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">
                      Address
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {currentLocation.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#093c73] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">
                      Phone
                    </p>
                    <a
                      href={`tel:${currentLocation.phone}`}
                      className="text-[#093c73] hover:underline text-sm sm:text-base"
                    >
                      {currentLocation.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#093c73] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">
                      Email
                    </p>
                    <a
                      href={`mailto:${currentLocation.email}`}
                      className="text-[#093c73] hover:underline text-sm sm:text-base break-all"
                    >
                      {currentLocation.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Directions Button */}
              <div className="mt-6 sm:mt-8">
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(
                    currentLocation.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#093c73] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-[#093c73]/90 transition-colors font-medium text-sm sm:text-base w-full sm:w-auto justify-center"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src={currentLocation.mapUrl}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${currentLocation.name}`}
              className="w-full h-[300px] sm:h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
