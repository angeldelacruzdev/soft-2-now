import Link from "next/link";
import React from "react";
import {
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsDiscord,
  BsGithub,
} from "react-icons/bs";
const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-slate-900">
        {/* Flex Container */}
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 xl:flex-row md:space-y-0">
          {/* Logo and Social Links Container */}
          <div className="flex flex-col-reverse items-center justify-between mt-8 space-y-12 md:flex-col md:space-y-0 xl:items-start xl:mt-0">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright © 2022, All Right Reserved
            </div>
            {/* Logo */}
            <div className="flex flex-col items-center xl:items-start">
              <img src="./logo-white.svg" className="h-8 " alt="Logo" />
              <p className="text-white ml-2 text-center xl:text-left">
                Codificamos cosas maravillosamente simples y <br />
                amamos lo que hacemos.
              </p>
            </div>
            {/* Social Links container*/}
            <div className="flex justify-center space-x-4 ml-2 pt-4">
              {/* Link 1 */}
              <Link href="https://www.facebook.com/soft2now">
                <a target="_blank">
                  <BsFacebook className="text-white text-2xl" />
                </a>
              </Link>
              {/* Link 2 */}
              {/* <a href="">
                <BsYoutube className="text-white text-4xl" />
              </a> */}
              {/* Link 3 */}
              <Link href="https://twitter.com/soft2now">
                <a target="_blank">
                  <BsTwitter className="text-white text-2xl " />
                </a>
              </Link>
              {/* Link 4*/}
              <Link href="https://discord.gg/25jKnepzRJ">
                <a target="_blank">
                  <BsDiscord className="text-white text-2xl" />
                </a>
              </Link>

              <Link href="https://github.com/soft2now">
                <a target="_blank">
                  <BsGithub className="text-white text-2xl " />
                </a>
              </Link>

              {/* Link 5 */}
              <Link href="https://www.instagram.com/soft2now">
                <a target="_blank">
                  <BsInstagram className="text-white text-2xl" />
                </a>
              </Link>
            </div>
          </div>
          {/* List container */}
          <div className="flex justify-around space-x-32">
            <div className="flex justify-around space-x-32">
              <div className="flex flex-col space-y-3 text-white">
                <Link href="#about">
                  <a className="hover:text-[#27AE60]">Nosotros</a>
                </Link>
                <Link href="#works">
                  <a className="hover:text-[#27AE60]">Productos</a>
                </Link>
                {/* <a href="" className="hover:text-[#27AE60]">
                  Marketplace
                </a> */}
                <Link href="#pricing">
                  <a className="hover:text-[#27AE60]">Precios</a>
                </Link>
              </div>
              <div className="flex flex-col space-y-3 text-white">
                <Link href="">
                  <a className="hover:text-[#27AE60]">Careers</a>
                </Link>
                <Link href="">
                  <a className="hover:text-[#27AE60]">Community</a>
                </Link>
                <Link href="privacy">
                  <a className="hover:text-[#27AE60]">Privacy policy</a>
                </Link>
              </div>
            </div>
          </div>
          {/* Input Container */}
          <div className="flex flex-col justify-between">
            <form>
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="flex-1 px-4 ring-green-400 placeholder-gray-400 focus:ring-blue-500 rounded-full focus:outline-none"
                  placeholder="Update in your inbox"
                />
                <button className="px-6 py-2 text-white rounded-full bg-[#27AE60] hover:bg-green-700 focus:outline-none">
                  Go
                </button>
              </div>
            </form>
            <div className="hidden text-white md:block text-center mb-4 mt-4">
              Copyright © 2022, All Right Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
