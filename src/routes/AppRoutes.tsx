import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
//import Servicios from "../pages/Servicios/Servicios";
import Servicios from "../pages/Servicios/Servicios";
import Proyectos from "../pages/Proyectos/Proyectos";
import Contacto from "../pages/Contacto/Contacto";
import NotFound from "../pages/NotFound";


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/proyectos" element={<Proyectos />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};