import React from "react";
import textureBg from "../../../assets/images/strategic-bg.jpg";

const DescriptionProyects = () => {
  return (
        <section className="relative py-40 text-center flex justify-center bg-fixed bg-cover bg-[center_10%] "
            style={{ backgroundImage: `url(${textureBg})` }}>
 
            <div className="absolute inset-0 bg-[#0234B4]/85"></div>


            <div className="relative z-10 max-w-5xl p-8">
                <h4 className="text-sm font-semibold text-white/60 uppercase mb-4">
                We create premium designs and technology
                </h4>

                <h2 className="text-2xl md:text-4xl text-white tracking-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
                </h2>

                <button className="inline-flex items-center gap-2 rounded-full px-8 py-2 mt-6 bg-white text-[#0234B4] text-sm sm:text-base font-medium shadow-md hover:bg-[#0040c2] hover:text-white transition-all duration-300">
                <span className="inline-flex items-center gap-2">
                    Contact us
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                        <path d="M22 6l-10 7L2 6" />
                    </svg>
                </span>
                </button>
            </div>
        </section>

      );
};

export default DescriptionProyects;