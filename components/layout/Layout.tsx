import { FC } from "react";
import Head from "next/head";
import Navbar from "../ui";
import Footer from "../footer/Footer";

Navbar;

type PropsType = {
  children: JSX.Element | JSX.Element[];
  title?: string;
};

export const Layout: FC<PropsType> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>
          {title ||
            "Soft2now | Codificamos cosas maravillosamente simples y amamos lo que hacemos."}
        </title>
        <meta name="author" content="Ángel De La Cruz" />
        <link rel="manifest" href="/manifest.json" />
        
        <meta
          name="description"
          content="Soft2now es una plataforma freelance dedicada al desarrollo de aplicaciones web y móviles a un bajo costo al mes, diseñamos y codificamos cosas maravillosamente simples y amamos lo que hacemos."
        />
        <meta
          name="keywords"
          content="Soft2now, Diseño web, Desarrollo Web, Aplicaciones, Backend Developer, Frontend Developer."
        />
      </Head>
      {/* Navbar */}
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
