import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./hero.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duración de la animación en milisegundos
      once: false, // Si quieres que la animación solo ocurra una vez
    });
  }, []);

  const handleDownload = () => {
    // El archivo debe estar en la carpeta public
    const link = document.createElement("a");
    link.href = "../../../public/cv_ludmila_miranda_developer.pdf"; // Ruta al archivo en la carpeta public
    link.download = "cv_ludmila_miranda_developer.pdf"; // Nombre con el que se descargará
    link.click();
  };

  return (
    <div
      className="relative w-90% h-screen flex flex-col items-center justify-center bg-cover overflow-hidden"
      id="home"
    >
      <div className="mt-12 md:mt-24 px-4 md:px-0" data-aos="fade-up">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-gray-300 text-2xl mb-5 md:text-3xl font-semibold">
            Soy
          </p>
          <h1 className="text-gray-200 text-5xl font-semibold md:text-9xl tracking-wide mb-4">
            LUDMILA MIRANDA
          </h1>
          <h2 className="text-gray-300 text-xl md:text-3xl font-semibold mb-4">
            Front-end Developer
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start mt-8">
            {/* Botón de descarga del CV */}
            <button
              onClick={handleDownload}
              className="btn bg-white text-red-600 border border-transparent py-2 px-4 rounded shadow-md hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 mb-4 md:mb-0"
            >
              Descarga mi CV
            </button>
            <a
              className="btn bg-white text-red-600 border border-transparent py-2 px-4 rounded shadow-md hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 md:ml-4"
              href="#footer"
            >
              Contáctame
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
