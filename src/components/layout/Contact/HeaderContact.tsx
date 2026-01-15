import React from "react";
import bgProyecto from "../../../assets/images/contact-bg.jpg"; 

const HeaderContactSection = () => {
  return (
<section className="py-20 bg-black/50 text-center bg-center flex flex-col  justify-center bg-cover min-h-[400px] relative bg-[center_10%] " style={{ backgroundImage: `url(${bgProyecto})` }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-white">
          Contacto
        </h1>
        <p className="text-white mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.
        </p>
      </div>
    </section>
      );
};

export default HeaderContactSection;