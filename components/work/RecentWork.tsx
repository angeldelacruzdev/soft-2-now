import React from "react";

const RecentWork = () => {
  return (
    <section id="works" className="mb-4 my-4">
      <div className="container justify-center flex flex-col items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-col">
        <div className="flex flex-col text-center mb-8">
          <h2 className="text-3xl font-bold text-[#10002B]">
            Trabajos reciente
          </h2>
          <p>Aquí hay algunos proyectos recientes. ¿Quieres ver más?</p>
        </div>

        <div className="w-full md:w-2/3 p-4 bg-slate-50 shadow-md rounded-sm  ">
          <div className="grid  grid-rows-1 md:grid-cols-1 gap-4 my-4">
            <p className="text-center">Por ahora no tenemos productos.</p>
            {/* <div className="bg-slate-200 p-4 rounded font-bold text-center hover:bg-slate-300 transition ">Real State House</div>
            <div className="bg-slate-200 p-4 rounded font-bold text-center hover:bg-slate-300 transition">Aphelion X</div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
