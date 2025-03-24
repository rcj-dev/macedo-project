import React, { useState } from "react";
import Logo from "../assets/logos/Logo-Navbar.svg";
import ButtonNavbar from "./Buttons/ButtonNavbar";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="quicksand font-navbar flex items-center justify-between px-5 md:px-7 py-5 relative">
      {/* Logo */}
      <img src={Logo} alt="Logo Macedo Clínicas" className="w-32 md:w-35" />

      {/* Menu Mobile - Ícone Hamburguer */}
      <div className="md:hidden">
        {isOpen ? (
          <X className="w-8 h-8 cursor-pointer" onClick={() => setIsOpen(false)} />
        ) : (
          <Menu className="w-8 h-8 cursor-pointer" onClick={() => setIsOpen(true)} />
        )}
      </div>

      {/* Links do menu */}
      <ul
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent flex flex-col md:flex-row md:items-center gap-5 md:gap-10 p-5 md:p-0 transition-all duration-300 ${
          isOpen ? "block justify-center items-center" : "hidden md:flex"
        }`}
      >
        <li><a href="">Início</a></li>
        <li><a href="">Quem Somos</a></li>
        <li><a href="">Tratamentos</a></li>
        <li><a href="">Consultório</a></li>
      </ul>

      {/* Botão */}
      <div className="hidden md:block">
        <ButtonNavbar />
      </div>
    </nav>
  );
};

export default Navbar;
