import React from "react";
import { BiLayer, BiCodeBlock, BiData } from "react-icons/bi";

const Services = () => {
  return (
    <section id="service">
      <div className="container justify-center flex flex-col   px-6 mx-auto mt-10  space-y-10 md:space-y-0  space-x-0 md:space-x-10 md:flex-row">
        <div className="w-full bg-slate-50 p-8 rounded-xl xl:w-1/3">
          <BiLayer className="text-[96px] text-[#10002B]" />
          <div className="mt-4">
            <h2 className="text-3xl font-bold text-[#10002B] font-roboto">Diseñador</h2>
            <p className="text-base mt-2 text-slate-600 font-inter ">
              Valoro la estructura de contenido simple, los patrones de diseño
              limpios y las interacciones bien pensadas.
            </p>
          </div>
        </div>
        <div className="w-full bg-slate-50 p-8 rounded-xl xl:w-1/3">
          <BiCodeBlock className="text-[96px] text-[#27AE60]" />
          <div className="mt-4">
            <h2 className="text-3xl font-bold text-[#10002B] font-roboto">
              Frontend and Backend Developer
            </h2>
            <p className="text-base mt-2 text-slate-600 font-inter">
              Me gusta codificar cosas desde cero y disfruto trayendo ideas que
              le gustan a los clientes.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 bg-slate-50 p-2 rounded-xl">
          <BiData className="text-[96px] text-[#10002B]" />
          <div className="mt-4">
            <h2 className="text-3xl font-bold text-[#10002B] font-roboto">Base de datos</h2>
            <p className="text-base mt-2 text-slate-600 font-inter">
              Ofrecemos 2 servicios de base de datos, MongoDB y PostgreSQL, son
              dos herramientas que utilizamos para administrar y manipular datos
              por ahora.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
