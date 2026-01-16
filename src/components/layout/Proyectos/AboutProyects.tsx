import React from "react";

const AboutProyect = () => {
  return (
        <section className=" py-20 p-10 text-center flex flex-row  justify-center ">
            
            <div className="max-w-5xl">
                <h2 className="text-4xl  text-black">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto
                </h2>
                <p className="text-[#464646] mt-4">
               Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
                </p>
                <button className="inline-flex items-center gap-2 rounded-full px-8 py-2 mt-6 bg-[#0234B4] text-[#fff] text-sm sm:text-base font-medium shadow-md  hover:bg-[#0040c2] hover:text-white transition-all duration-300">
                <span className="inline-flex items-center justify-center ">
                    <span>Explore our projects</span>
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
                    <path d="M12 5v14" />
                    <path d="M19 12l-7 7-7-7" />
                    </svg>

                </span>
            </button>
            </div>
        </section>

      );
};

export default AboutProyect;