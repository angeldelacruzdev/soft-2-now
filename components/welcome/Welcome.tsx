import React from "react";

const Welcome = () => {
  return (
    <section id="welcome">
      <div className="container mx-auto px-6 pb-4 pt-4 bg-white ">
        <div className="xl:w-1/3 -mt-8 ml-4">
          <h2 className="text-[#10002B] text-2xl font-bold">Encantados de conocerte.</h2>
          <p className="mt-2 text-sl text-slate-600">
            Desde que comencé mi viaje como desarrollador independiente hace
            casi 6 años, he realizado trabajos remotos para agencias, asesorado
            para nuevas empresas y colaborado con personas talentosas para crear
            productos digitales para uso comercial y de consumo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
