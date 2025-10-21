import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#093c73] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-6">
          {/* FINRA BrokerCheck Link */}
          <div>
            <p className="text-sm leading-relaxed">
              Check the background of your financial professional on FINRA's{" "}
              <a
                href="https://brokercheck.finra.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 underline hover:text-blue-200 transition-colors"
              >
                BrokerCheck.
              </a>
            </p>
          </div>

          {/* General Disclaimer */}
          <div>
            <p className="text-sm leading-relaxed">
              The content is developed from sources believed to be providing
              accurate information. The information in this material is not
              intended as tax or legal advice. Please consult legal or tax
              professionals for specific information regarding your individual
              situation. Some of this material was developed and produced by FMG
              Suite to provide information on a topic that may be of interest.
              FMG Suite is not affiliated with the named representative, broker
              - dealer, state - or SEC - registered investment advisory firm.
              The opinions expressed and material provided are for general
              information, and should not be considered a solicitation for the
              purchase or sale of any security.
            </p>
          </div>

          {/* Privacy Policy */}
          <div>
            <p className="text-sm leading-relaxed">
              We take protecting your data and privacy very seriously. As of
              January 1, 2020 the{" "}
              <a
                href="#"
                className="text-blue-300 underline hover:text-blue-200 transition-colors"
              >
                California Consumer Privacy Act (CCPA)
              </a>{" "}
              suggests the following link as an extra measure to safeguard your
              data:{" "}
              <a
                href="#"
                className="text-blue-300 underline hover:text-blue-200 transition-colors"
              >
                Do not sell my personal information.
              </a>
            </p>
          </div>

          {/* Copyright */}
          <div>
            <p className="text-sm">Copyright 2025 FMG Suite.</p>
          </div>

          {/* Securities and Advisory Services */}
          <div>
            <p className="text-sm leading-relaxed">
              Securities offered through J.W. Cole Financial, Inc. (JWC) Member{" "}
              <a
                href="https://www.finra.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 underline hover:text-blue-200 transition-colors"
              >
                FINRA/SIPC.
              </a>{" "}
              Advisory services offered through J.W. Cole Advisors, Inc. (JWCA).
              DPO Wealth Management and JWC/JWCA are unaffiliated entities.
            </p>
          </div>

          {/* Form CRS Links */}
          <div>
            <p className="text-sm leading-relaxed">
              For a copy of{" "}
              <a
                href="#"
                className="text-blue-300 underline hover:text-blue-200 transition-colors"
              >
                JWCF's Form CRS,
              </a>{" "}
              <a
                href="#"
                className="text-blue-300 underline hover:text-blue-200 transition-colors"
              >
                JWCA's Form CRS,
              </a>{" "}
              or{" "}
              <a
                href="#"
                className="text-blue-300 underline hover:text-blue-200 transition-colors"
              >
                JWC's Disclosure Supplement please click here.
              </a>{" "}
              By following the link, you consent to receipt of the Form CRS
              electronically.
            </p>
          </div>

          {/* Advisor Registration Disclaimer */}
          <div>
            <p className="text-sm leading-relaxed">
              Advisors must be properly registered in the state where you live
              in order to conduct securities related business with you. A
              response to your request for information might be delayed in order
              to assure our compliance with this regulation. No information
              provided on this site is intended as a solicitation to buy or sell
              any security. The investments and services mentioned may not be
              available in every state. No security will be offered or sold to
              any person, in any state in which such offer, solicitation,
              purchase, or sale would be unlawful under securities laws of such
              jurisdictions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
