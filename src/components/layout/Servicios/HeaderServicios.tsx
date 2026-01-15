import React from "react";
import bgImages from "../../../assets/images/services-bg.jpg"; 

const HeaderServiciosSection = () => {
  return (
<section className="py-20 bg-black/50 text-center bg-center flex flex-col  justify-center bg-cover min-h-[400px] relative  " style={{ backgroundImage: `url(${bgImages})` }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-white">
          Servicios
        </h1>
        <p className="text-white mt-4">
          Esta es la página de servicios
        </p>
      </div>
    </section>
      );
};

export default HeaderServiciosSection;