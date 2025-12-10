import React from "react";

const ExplainerVideo: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#093c73] mb-4">
              What We Do
            </h2>
          </div>

          {/* Video Container */}
          <div className="relative w-full bg-black rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/explainer/7812f3d0-bcf8-4076-a8be-79c08f9a2f71.png"
              >
                <source src="/explainer-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExplainerVideo;
