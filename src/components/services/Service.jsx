import "./services.css";
import "aos/dist/aos.css";

const Service = () => {
  return (
    <div className="relative  w-full py-12 bg-black" id="service">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-24 wow zoomIn"
          data-aos="fade-up"
          data-aos-delay="0"
          data-wow-delay="0.1s"
        >
          {/* <p className="text-gray-700 text-lg font-medium">What I do</p> */}
          <h2 className="text-4xl font-semibold text-gray-100">
            Mi enfoque en servicios
          </h2>
        </div>
        <div className="flex flex-col items-center mt-12 space-y-8">
          <div
            className="w-[80%] h-[50vh]  "
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div className="flex flex-col h-full lg:flex-row items-start lg:items-center p-1  transition-transform duration-300 transform group-hover:scale-105 ">
              <div className=" imagen1 flex w-2/5 items-center justify-center w-16 h-[100%]  mb-4 lg:mb-0 lg:mr-6 relative z-10 shadow-md group-hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
              <div className="flex-1 ">
                <h3 className="text-4xl text-gray-300 font-semibold  mb-2 transition-colors duration-500 ease-out group-hover:text-gray-700">
                  Diseño web
                </h3>
                <p className="text-white text-xl transition-colors duration-500 ease-out group-hover:text-gray-500">
                  Servicios de diseño web personalizados para ayudarte a crear
                  una presencia en línea profesional y atractiva. Me interesa
                  diseñar sitios web que no solo sean visualmente agradables,
                  sino también funcionales y optimizados para mejorar la
                  experiencia del usuario.
                </p>
              </div>
            </div>
          </div>
          <div
            className="w-[80%] h-[50vh] mt-24 "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className=" h-full  service-card flex flex-col lg:flex-row items-start lg:items-center  p-1  transition-transform duration-300 transform group-hover:scale-105 ">
              <div className="flex-1">
                <h3 className="text-4xl font-semibold text-gray-300 mb-2 transition-colors text-right pr-10 duration-500 ease-out group-hover:text-gray-700">
                  Web Development
                </h3>
                <p className="text-white transition-colors text-xl text-right pr-10 duration-500 ease-out group-hover:text-gray-500">
                  Me dedico a la creación de sitios web dinámicos y aplicaciones
                  web que sean rápidos, seguros y escalables. Me enfoco en la
                  funcionalidad y el rendimiento para asegurarme de que el sitio
                  web funcione perfectamente.
                </p>
              </div>

              <div className=" imagen2 flex w-2/5 items-center justify-center w-16 h-[100%]  mb-4 lg:mb-0 lg:mr-6 relative z-10 shadow-md group-hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
