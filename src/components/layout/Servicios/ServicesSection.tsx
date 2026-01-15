import React from "react";
import icono1 from "../../../assets/images/icono1.svg";
import icono2 from "../../../assets/images/icono2.svg";
import icono3 from "../../../assets/images/icono3.svg";

const ServicesSection = () => {
  return (
    <section className="bg-white pt-16 pb-16 ">
      
      {/* CONTENEDOR FLOTANTE */}
      <div className="max-w-7xl mx-auto px-6  ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card */}
          <div className=" p-5 bg-white">
            <div className="flex items-center gap-4 mb-4">
                <img src={icono1} alt="Icono 1" className="shrink-0 w-16 h-16" />
                <h3 className="text-[#0234B4] font-semibold text-lg max-w-[70%]">
                    Consectetur adipiscing
                </h3>
            </div>

            <p className="text-[#464646] text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elita floraipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Card */}
          <div className=" p-5 bg-white">
            <div className="flex items-center gap-4 mb-4">
                <img src={icono2} alt="Icono 2"  className="shrink-0 w-16 h-16" />
                <h3 className="text-[#0234B4] font-semibold text-lg max-w-[70%]">
                    Consectetur adipiscing
                </h3>
              
            </div>

            <p className="text-[#464646] text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elita floraipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Card */}
          <div className=" p-5 bg-white">
            <div className="flex items-center gap-4 mb-4">
                <img src={icono3} alt="Icono 3"  className="shrink-0 w-16 h-16" />
                <h3 className="text-[#0234B4] font-semibold text-lg max-w-[70%]">
                    Consectetur adipiscing
                </h3>
              
            </div>

            <p className="text-[#464646] text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elita floraipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Card */}
          <div className=" p-5 bg-white">
            <div className="flex items-center gap-4 mb-4">
                <img src={icono3} alt="Icono 3"  className="shrink-0 w-16 h-16" />
                <h3 className="text-[#0234B4] font-semibold text-lg max-w-[70%]">
                    Consectetur adipiscing
                </h3>
              
            </div>

            <p className="text-[#464646] text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elita floraipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          {/* Card */}
          <div className=" p-5 bg-white">
            <div className="flex items-center gap-4 mb-4">
                <img src={icono3} alt="Icono 3"  className="shrink-0 w-16 h-16" />
                <h3 className="text-[#0234B4] font-semibold text-lg max-w-[70%]">
                    Consectetur adipiscing
                </h3>
              
            </div>

            <p className="text-[#464646] text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elita floraipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          {/* Card */}
          <div className=" p-5 bg-white">
            <div className="flex items-center gap-4 mb-4">
                <img src={icono3} alt="Icono 3"  className="shrink-0 w-16 h-16" />
                <h3 className="text-[#0234B4] font-semibold text-lg max-w-[70%]">
                    Consectetur adipiscing
                </h3>
              
            </div>

            <p className="text-[#464646] text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elita floraipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
