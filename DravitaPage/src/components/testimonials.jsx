import React from "react";
import Horizons from "../assets/horizons.png";
import Javier from "../assets/javier.jpg";
import Stream from "../assets/stream.svg";
import { useInView } from "react-intersection-observer";

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación se ejecutará solo una vez
    threshold: 0.1, // Cambia esto según tus necesidades
  });
  return (
    <section className="bg-gray-50">
      <div className="mx-auto  text-center md:max-w-xl lg:max-w-6xl p-8">
        <h3 className="mb-6 text-3xl font-bold">Nuestros Clientes</h3>
        <p className="mb-6 pb-2 text-neutral-600  md:mb-12 md:pb-0">
          En Dravita Tech la satisfacción de nuestros clientes es nuestra
          principal motivación.
        </p>

        <div
          ref={ref}
          className={`transition-transform duration-500 ${
            inView ? "animate-fade-up" : "opacity-0 transform translate-y-10"
          } grid gap-6 text-center md:grid-cols-3 lg:gap-12`}
        >
          {/* Testimonial 1 */}
          <div className="animate-fade-left mb-12 md:mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src={Horizons}
                className="w-32 rounded-full shadow-lg dark:shadow-black/30"
                alt="Maria Smantha"
              />
            </div>
            <h5 className="mb-4 text-xl font-semibold">
              Horizons Educative Corporation
            </h5>
            <h6 className="mb-4 font-semibold text-primary dark:text-primary-400">
              Instituto de Idiomas
            </h6>
            <p className="mb-4 text-neutral-600">
              <span className="inline-block pe-2 [&>svg]:w-5">
                {/* Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                </svg>
              </span>
              Gracias al sitio web que desarrollaron, mi instituto ahora tiene
              más presencia en línea resaltando los servicios que ofrecemos, ¡un
              gran trabajo!.
            </p>
            <ul className="mb-0 flex items-center justify-center">
              {/* Stars */}
              {[...Array(5)].map((_, index) => (
                <li key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonial 2 */}
          <div className="animate-fade-left mb-12 md:mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src={Javier}
                className="w-32 rounded-full shadow-lg dark:shadow-black/30"
                alt="Lisa Cudrow"
              />
            </div>
            <h5 className="mb-4 text-xl font-semibold">Javier Cepeda</h5>
            <h6 className="mb-4 font-semibold text-primary dark:text-primary-400">
              Músico Profesional
            </h6>
            <p className="mb-4 text-neutral-600">
              <span className="inline-block pe-2 [&>svg]:w-5">
                {/* Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                </svg>
              </span>
              Trabajar con ellos fue un placer absoluto. Me entregaron un sitio
              web personalizado, atractivo y que se acomodaba a lo que yo estaba
              buscando, 100% recomendados.
            </p>
            <ul className="mb-0 flex items-center justify-center">
              {/* Stars */}
              {[...Array(5)].map((_, index) => (
                <li key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonial 3 */}
          <div className="animate-fade-left mb-12 md:mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src={Stream}
                className="w-32 rounded-full shadow-lg dark:shadow-black/30"
                alt="Lisa Cudrow"
              />
            </div>
            <h5 className="mb-4 text-xl font-semibold">Stream Family</h5>
            <h6 className="mb-4 font-semibold text-primary dark:text-primary-400">
              Proveedora de Servicios
            </h6>
            <p className="mb-4 text-neutral-600">
              <span className="inline-block pe-2 [&>svg]:w-5">
                {/* Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                </svg>
              </span>
              Pude optimizar los procesos de mi negocio gracias al aplicativo
              web que desarrollaron, además, destaco la velocidad y la atención
              que prestaron a mis necesidades.
            </p>
            <ul className="mb-0 flex items-center justify-center">
              {/* Stars */}
              {[...Array(5)].map((_, index) => (
                <li key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
              ))}
            </ul>
          </div>

          {/* Add more testimonials as needed */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
