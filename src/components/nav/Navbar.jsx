import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Para usar los iconos de menú y cerrar

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar si el menú está abierto

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        sticky
          ? "bg-black/70 py-2 shadow-md"
          : "bg-transparent border-b border-gray-500 py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="text-white lg:hidden text-2xl font-bold">LM</div>

        {/* Menu hamburguesa en móviles */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none mr-5"
          >
            {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* Enlaces en pantallas grandes */}
        <div className="hidden lg:flex lg:items-center  gap-10 mx-auto text-white">
          <a
            href="#home"
            className="nav-link text-white transition-colors duration-300 hover:text-[#EF233C]"
          >
            Inicio
          </a>
          <a
            href="#about"
            className="nav-link text-white transition-colors duration-300 hover:text-[#EF233C]"
          >
            Sobre mí
          </a>
          <a
            href="#portfolio"
            className="nav-link text-white transition-colors duration-300 hover:text-[#EF233C]"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="nav-link text-white transition-colors duration-300 hover:text-[#EF233C]"
          >
            Contact
          </a>
          <a
            href="#footer"
            className="nav-link text-white transition-colors duration-300 hover:text-[#EF233C]"
          >
            Social Media
          </a>
        </div>

        {/* Menú desplegable en móviles */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col items-center h-screen lg:hidden absolute top-16 left-0 w-full bg-black  py-4`}
        >
          <a
            href="#home"
            className="nav-link text-white text-xl py-3 transition-colors duration-300 hover:text-[#EF233C]"
            onClick={() => setMenuOpen(false)}
          >
            Inicio
          </a>
          <a
            href="#about"
            className="nav-link text-white  text-xl py-3 transition-colors duration-300 hover:text-[#EF233C]"
            onClick={() => setMenuOpen(false)}
          >
            Sobre mí
          </a>
          <a
            href="#portfolio"
            className="nav-link text-white  text-xl py-3 transition-colors duration-300 hover:text-[#EF233C]"
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="nav-link text-white  text-xl py-3 transition-colors duration-300 hover:text-[#EF233C]"
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </a>
          <a
            href="#footer"
            className="nav-link text-white  text-xl py-3 transition-colors duration-300 hover:text-[#EF233C]"
            onClick={() => setMenuOpen(false)}
          >
            Redes sociales
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
