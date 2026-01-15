// src/components/layout/StrategicSection.tsx
import React from "react";
import bgImage from "../../assets/images/strategic-bg.jpg"; 

const StrategicSection = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">

        {/* Left content */}
        <div className="bg-[#f7f7f7] flex items-center">
          <div className="max-w-7xl px-8 py-16 md:px-32 text-left">
            <h4 className="text-sm font-semibold text-[#0234B4] uppercase mb-4">
              We create premium designs and technology
            </h4>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              We design brand, digital experience that engage the right customers.
            </h2>

            <p className="text-[#464646] mb-8 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry’s standard dummy text ever since.
              Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of
              the printing and industry. Lorem Ipsum has been the industry’s standard
              dummy text ever since. Lorem Ipsum has been the industry.
            </p>

            <button className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 bg-[#0055FF] text-white text-sm sm:text-base font-medium shadow-md hover:bg-[#0040c2] transition-colors">
                
               
                <span className="inline-flex items-center justify-center">
                    <span>Reed more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </span>
              </button>
          </div>
        </div>

        {/* Right image */}
        <div
          className="bg-cover bg-center flex items-center justify-center min-h-[400px]"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
         
        </div>

      </div>
    </section>
  );
};

export default StrategicSection;
