import React from "react";
import Image from "next/image";

import logo from "./../../public/logo.svg";
import Link from "next/link";

const Navbar = () => {
  const [MenuMobile, setMenuMobile] = React.useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <Link href="/">
              <a>
                <Image src={logo} alt="Logo de soft2now" />
              </a>
            </Link>
          </div>
          <div className="hidden space-x-6 md:flex">
            <Link href="#about">
              <a className="text-[#10002B] hover:text-[#27AE60]">Nosotros</a>
            </Link>
            <Link href="#works">
              <a className="text-[#10002B] hover:text-[#27AE60]">Productos</a>
            </Link>
            {/* <Link href="">
              <a className="text-[#10002B] hover:text-[#27AE60]">Marketplace</a>
            </Link> */}
            <Link href="#pricing">
              <a className="text-[#10002B] hover:text-[#27AE60]">Precios</a>
            </Link>
          </div>

          <Link href="register">
            <a className="hidden p-3 px-6 pt-2 text-white bg-[#27AE60] rounded-full self-baseline transition hover:bg-green-700 md:block">
              Empezar
            </a>
          </Link>

          {/* Hamburger icon */}
          <button
            id="menu-btn"
            className={`${
              MenuMobile ? "open" : undefined
            }  block hamburger md:hidden focus:outline-none mt-4`}
            onClick={() => setMenuMobile(!MenuMobile)}
          >
            <span className={`hamburger-top`} />
            <span className="hamburger-middle" />
            <span className="hamburger-bottom" />
          </button>
          {/* Mobile Menu */}
        </div>
        <div className="md:hidden">
          <div
            id="menu"
            className={`${
              MenuMobile ? "flex" : "hidden"
            } absolute  flex-col items-center z-30  self-end py-8 mt-10 space-y-6 font-bold bg-[#10002B] sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
          >
            <Link href="#about">
              <a className="text-white hover:text-[#27AE60]">Nosotros</a>
            </Link>
            <Link href="#works">
              <a className="text-white hover:text-[#27AE60]">Productos</a>
            </Link>
            {/* <a href="" className="text-white hover:text-[#27AE60]">
              Marketplace
            </a> */}
            <a href="" className="text-white hover:text-[#27AE60]">
              Precios
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
