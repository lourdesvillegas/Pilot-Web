import React from "react";
import imghome from "../../assets/images/imagen-pilot.svg";


const AboutSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#EEECEC] to-[#F8F8F8] pt-16 pb-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 items-center gap-8">
          
          {/* Left - Image (5 columns) */}
          <div className="col-span-12 md:col-span-5 ">
            <img src={imghome} alt="Hero" className="" />
          </div>

          {/* Right - Content (7 columns) */}
          <div className="col-span-12 md:col-span-7">
            <div className="rounded-md h-[6px] w-[40px] bg-[#0055FF] my-2"></div>

            <h6 className="text-[#0055FF] uppercase font-semibold tracking-wide mb-3">
              Lorem Ipsum Es Simplemente
            </h6>

            <h2 className="text-black text-4xl font-bold mb-4">
              Grow Your Business More Efficiently
            </h2>

            <p className="text-[#464646] text-base leading-relaxed max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elita floraipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              temporincididunt ut labore et dolore magna aliqua Quis suspendisse
              ultri ces gravida.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
