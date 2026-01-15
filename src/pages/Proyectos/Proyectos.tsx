import React from "react";
import HeaderProyectosSection from  "../../components/layout/Proyectos/HeaderProyectos";
import AboutProyect from "../../components/layout/Proyectos/AboutProyects";
import SectionCarruselProyects from "../../components/layout/Proyectos/SectionCarruselProyects";
import DescriptionProyects from "../../components/layout/Proyectos/DescriptionProyects";

const Proyectos = () => {
  return (
    <>
      <HeaderProyectosSection/>
      <AboutProyect/>
      <SectionCarruselProyects/>
      <DescriptionProyects/>
     
    </>
   
  );
};

export default Proyectos;