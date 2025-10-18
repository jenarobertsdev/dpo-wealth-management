import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Centered Quote */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4 max-w-4xl">
          <blockquote className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            A GOAL WITHOUT A PLAN IS JUST A WISH…
          </blockquote>
          <cite className="block text-white text-lg md:text-xl mt-6 font-medium">
            — Antoine de Saint-Exupéry
          </cite>
        </div>
      </div>
    </section>
  );
};

export default Hero;
