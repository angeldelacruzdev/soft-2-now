import Image from "next/image";
import Link from "next/link";
import React from "react";

import shopping from "./../../public/shopping.svg";

const HeroSection = () => {
  return (
    <>
      <section id="hero">
        <div className="container justify-center flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 xl:space-y-0 xl:flex-row">
          {/* Left item */}
          <div className="flex flex-col mb-32 space-y-12 text-center mt-8 xl:w-1/3 xl:text-left xl:mt-0">
            <p className=" text-[30px] text-slate-600">
              Una plataforma dedicada al desarrollo de aplicaciones web y
              móviles a bajo costo al mes, diseñamos y codificamos cosas
              maravillosamente simples y amamos lo que hacemos.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link href="https://www.instagram.com/angeldelacruz.dev/">
                <a target="_blank" className="p-3 px-6 pt-2  text-white bg-[#27AE60] rounded-full self-baseline hover:bg-green-700 transition">
                  Contactar
                </a>
              </Link>
            </div>
          </div>
          {/* Image */}
          <div className="md:w-1/2">
            <Image src={shopping} priority />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
