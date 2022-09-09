import React from "react";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="container justify-center flex flex-col px-6 mx-auto mt-10  space-y-10 md:space-y-0  space-x-0 md:space-x-10 md:flex-row">
        <div className="w-2/3 p-8 text-center">
          <h2 className="text-3xl font-bold text-[#10002B]">
            Proyecto
          </h2>
          <p className="text-base mt-4 text-slate-600 font-inter">
            Somos adictos a los productos digitales. A lo largo de los años, hemos
            demostrado y probado cientos de aplicaciones web y móviles en
            diferentes industrias y verticales. Eventualmente, decidimos que sería
            un desafío divertido intentar diseñar y construir uno propio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
