import React from "react";

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Dianne Odom",
      title: "CPA, PFS, Investment Advisor",
      bio: "Dianne offers an all-inclusive approach to financial management, integrating investment and tax strategies to create comprehensive financial plans. With more than 25 years of experience in tax preparation and as an Investment Advisor with J.W. Cole Financial, LLC, she holds Series 7, 63, and 65 securities licenses and is registered with the AICPA as a Personal Financial Specialist (PFS). A native of Irmo, South Carolina, Dianne earned her Bachelor of Science in Business Administration with an emphasis in Accounting from the University of South Carolina.",
      image: "/dianna.png",
    },
    {
      name: "Karen K. Roberts",
      title: "CLU®, ChFC® — Wealth Planning Specialist",
      bio: "With more than 30 years of experience, Karen is dedicated to empowering women to take control of their financial futures. She has shared her expertise as a keynote speaker at industry conferences and on national programs, and had the honor of ringing the New York Stock Exchange Opening Bell. Karen holds a degree in Economics from California State University, Northridge, and has earned both the CLU® and ChFC® designations from The American College of Financial Services.",
      image: "/karen.png",
    },
    {
      name: "Beatrice Polak",
      title: "Executive Portfolio Manager",
      bio: "Beatrice joined DPO Wealth Management in 2014 and oversees investment operations, research, and asset allocation strategy. She graduated magna cum laude from the University of Nebraska Omaha with a B.S. in Business Administration (Finance) and gained valuable experience in equity trading and wealth management through roles at TD Ameritrade and an independent Registered Investment Advisor. She holds FINRA Series 7, 63, and 65 licenses.",
      image: "/beatrice.png",
    },
    {
      name: "Janie Ammerman",
      title: "Administrative Assistant",
      bio: "Janie joined DPO Wealth in 2025 as our Administrative Assistant, bringing years of experience in bookkeeping, tax, and office administration. A veteran of the USAF, she honed her organizational skills and gained valuable experience working for various credit unions, financial loan companies, and CPA firms in California and Washington state.",
      image: "/janie.jpg",
    },
    {
      name: "Karrie Holloway",
      title: "Client Service Associate",
      bio: "With over 25 years of experience in the financial industry, Karrie is dedicated to providing exceptional service and building lasting relationships with clients. Her attention to detail and commitment to helping clients achieve their financial goals make her a valued member of the DPO Wealth Management team.",
      image: "/karrie.jpg",
    },
    {
      name: "Stephanie Magee",
      title: "FL Office Manager",
      bio: "Stephanie began her career in the financial industry in 2016 and has since developed a strong foundation in client service, office administration, and operational support. As Office Manager, she oversees the firm's daily workflow, coordinates client scheduling, and ensures that every interaction is handled with efficiency and care.",
      image: "/stephanie.png",
    },
  ];

  return (
    <section id="team" className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Headshot */}
              <div className="w-full h-64 bg-gray-200 relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#093c73] to-[#0a4a8a]">
                          <span class="text-white text-4xl font-bold">${member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}</span>
                        </div>
                      `;
                    }
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-[#093c73] mb-4">
                  {member.title}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
