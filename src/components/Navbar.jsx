import React, { useState, useRef, useEffect } from "react";
import Logo from "../assets/logos/Logo-Navbar.svg";
import ButtonNavbar from "./Buttons/ButtonNavbar";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Referência para detectar clique fora

  // Fecha o menu ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav ref={menuRef} className="md:h-auto quicksand font-navbar flex items-center justify-between px-5 md:px-7 py-5 w-full fixed top-0 left-0 z-50 bg-[#F2F8FF] bg-opacity-30 backdrop-blur-sm">
      {/* Logo */}
      <img src={Logo} alt="Logo Macedo Clínicas" className="w-32 md:w-35" />

      {/* Menu Mobile - Ícone Hamburguer */}
      <div className="md:hidden text-[#1F3457]">
        {isOpen ? (
          <X className="w-8 h-8 cursor-pointer" onClick={() => setIsOpen(false)} />
        ) : (
          <Menu className="w-8 h-8 cursor-pointer" onClick={() => setIsOpen(true)} />
        )}
      </div>

      {/* Links do menu */}
      <ul
        ref={menuRef}
        className={`text-[20px] md:text-[16px] md:flex flex flex-col md:flex-row md:items-center gap-5 md:gap-10 ${isOpen ? "block" : "hidden"}`}
      >
        <li><a href="#" className="transition-all duration-600 text-[#1F3457]">Início</a></li>
        <li><a href="#" className="transition-all duration-600 hover:text-[#1F3457]">Quem Somos</a></li>
        <li><a href="#" className="transition-all duration-600 hover:text-[#1F3457]">Tratamentos</a></li>
        <li><a href="#" className="transition-all duration-600 hover:text-[#1F3457]">Consultório</a></li>
      </ul>

      {/* Botão */}
      <div className="hidden md:block">
        <ButtonNavbar />
      </div>
    </nav>
  );
};

export default Navbar;
