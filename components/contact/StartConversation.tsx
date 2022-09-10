import Link from "next/link";

const StartConversation = () => {
  return (
    <section id="conversation">
      <div className="container justify-center items-center flex flex-row px-6 mx-auto mt-16 mb-16 space-y-10 md:space-y-0  space-x-0 md:space-x-10 md:flex-col">
        <div className="p-10 w-2/3 flex items-center flex-col border-2 border-dotted rounded-lg border-[#27AE60]">
          <h2 className="text-3xl text-center font-bold text-[#10002B] mb-8">
            ¿Interesad
            <span
              className="text-red-600 font-roboto font-thin"
              title="No importa el sexo"
            >
              x
            </span>{" "}
            en colaborar o invertir tiempo?
          </h2>
          <p className="text-center mb-8 font-titan font-inter">
            Siempre estamos abiertos a discutir el diseño de productos o las
            oportunidades de asociación.
          </p>
          <Link href="https://api.whatsapp.com/send?phone=18092107878">
            <a
              target="_blank"
              className="m-w-48 pt-4 pb-4 bg-[#27AE60] text-center pr-2 pl-2 rounded text-white font-bol"
            >
              Iniciar una conversación
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StartConversation;
