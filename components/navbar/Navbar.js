import React, { useState } from "react";
import Button from "./Button";

import {
  FaCat,
  FaDoorOpen,
  FaFacebookF,
  FaHamburger,
  FaHome,
  FaLinkedinIn,
  FaList,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
const Navbar = ({}) => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  return (
    <>
      <div
        className={`md:w-1/6 w-full p-5 transition fixed z-50 transform ease-in-out duration-500 h-full bg-semiblack ${
          isDisplayed ? "" : "-translate-x-full"
        }`}
      >
        <div className="relative h-full">
          <p className="text-4xl text-teal font-bold text-center">Christian</p>
          <Button
            icon={<FaHome size={30} />}
            text="Inicio"
            action={() => {
              setIsDisplayed(false);
            }}
          />
          <Button
            icon={<FaList size={30} />}
            text="Categorías"
            route="hola"
            action={() => {
              setIsDisplayed(false);
            }}
          />
          <Button
            icon={<FaCat size={30} />}
            text="Contacto"
            route="contact"
            action={() => {
              setIsDisplayed(false);
            }}
          />
          <div className="absolute w-full bottom-0">
            <p className="text-xl text-center">¡Compártelo!</p>
            <div className="bg-bone h-0.5 mb-2 mt-1" />
            <div className="justify-between flex w-full text-black">
              <button className="rounded-full bg-teal shadow-lg p-2">
                <FaFacebookF size={30} />
              </button>
              <button className="rounded-full bg-teal shadow-lg p-2">
                <FaLinkedinIn size={30} />
              </button>
              <button className="rounded-full bg-teal shadow-lg p-2">
                <FaTwitter size={30} />
              </button>
              <button className="rounded-full bg-teal shadow-lg p-2">
                <FaWhatsapp size={30} />
              </button>
            </div>

            <Button
              icon={<FaDoorOpen size={30} />}
              text="Cerrar menú"
              action={() => {
                setIsDisplayed(false);
              }}
            />
          </div>
        </div>
      </div>
      <div className="h-full fixed">
        <button
          className={`absolute bottom-5 left-5 bg-semiblack text-bone transition transform duration-200 rounded-full p-3 ${
            isDisplayed ? "opacity-0 scale-0" : ""
          }`}
          onClick={() => setIsDisplayed(true)}
        >
          <FaHamburger size={40} />
        </button>
      </div>
    </>
  );
};

export default Navbar;
