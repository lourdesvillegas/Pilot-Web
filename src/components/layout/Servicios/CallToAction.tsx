import React from "react";

const CallToActionSection = () => {
  return (
   <section  className="bg-[#0234B4] py-20">
      <div className="max-w-7xl mx-auto text-center px-6">
        <div className="">

         <h2 className="text-4xl text-white">We would love to hear about start your new project?</h2>
            <button className="inline-flex items-center gap-2 rounded-full px-8 py-2 mt-4 bg-white text-[#0234B4] text-sm sm:text-base font-medium shadow-md border-2 border-transparent hover:border-white hover:bg-[#0040c2] hover:text-white transition-all duration-300">
                <span className="inline-flex items-center justify-center ">
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
    </section>
  );
};

export default CallToActionSection;
