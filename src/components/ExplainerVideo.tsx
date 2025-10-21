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
              {/* Placeholder for explainer video - replace with actual video file */}
              <video
                className="w-full h-full object-cover"
                controls
                poster="/explainer/7812f3d0-bcf8-4076-a8be-79c08f9a2f71.png"
              >
                <source src="/explainer-video.mp4" type="video/mp4" />
                <source src="/explainer-video.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>

              {/* Fallback content if video doesn't load */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                <div className="text-center text-white">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 5v10l8-5-8-5z" />
                  </svg>
                  <p className="text-lg">Explainer Video Coming Soon</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Please add your explainer video file as
                    "explainer-video.mp4" in the public folder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExplainerVideo;
