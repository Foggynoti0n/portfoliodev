import { useEffect } from "react";
import "./portfolio.css";
import ALK from "../../assets/ALK.jpeg";
import wearfashion from "../../assets/landingW.jpeg";
import hHeader from "../../assets/habitaHeader.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duración de la animación en milisegundos
      once: false, // Si quieres que la animación solo ocurra una vez
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll(".portfolio-item");

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
        ) {
          item.classList.add("animate");
        } else {
          item.classList.remove("animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className="portfolio h-auto py-20 px-8"
      id="portfolio"
      data-aos="fade-up"
    >
      <div className="container mx-auto text-center">
        <div className="section-header mb-16">
          <p className="text-xl text-gray-400 mb-2">Mi Portfolio</p>
          <h2 className="text-5xl font-bold text-white">Últimos proyectos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="portfolio-item relative overflow-hidden rounded-lg transition-transform transform bg-gray-900 hover:bg-gray-800">
            <img
              className="w-full h-64 object-cover transition-transform transform hover:scale-110"
              src={wearfashion}
              alt="Project 1"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-60">
              <a
                className="text-white text-lg font-bold px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 transition-colors"
                href="https://wearfashion.vercel.app/"
                data-lightbox="portfolio"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="portfolio-item relative overflow-hidden rounded-lg transition-transform transform bg-gray-900 hover:bg-gray-800">
            <img
              className="w-full h-64 object-cover transition-transform transform hover:scale-110"
              src={ALK}
              alt="Project 2"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-60">
              <a
                className="text-white text-lg font-bold px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 transition-colors"
                href="https://alk-software.vercel.app/"
                data-lightbox="portfolio"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="portfolio-item relative overflow-hidden rounded-lg transition-transform transform bg-gray-900 hover:bg-gray-800">
            <img
              className="w-full h-64 object-cover transition-transform transform hover:scale-110"
              src={hHeader}
              alt="Project 3"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-60">
              <a
                className="text-white text-lg font-bold px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 transition-colors"
                href="https://github.com/Foggynoti0n/Habita"
                data-lightbox="portfolio"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
