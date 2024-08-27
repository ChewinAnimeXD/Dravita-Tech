import React from "react";
import hero from "../assets/hero.png"

const Hero = () => {
  return (
    <>
      <div id="hero" className="relative w-full py-0 mb-0 overflow-hidden">
        <div className="relative isolate px-6 lg:px-8 p-0">
          <div className="mx-auto max-w-2xl sm:py-10 lg:py-0">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
            <div className="text-center">
              <h1 className=" font-serif tracking-tight text-white text-5xl lg:text-6xl mb-5">
                DRAVITA TECH
              </h1>
              <p className="mt-0 text-base leading-8 text-white">
                Transformamos ideas en experiencias digitales.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://wa.me/573219565434? text=¿Puedes darme información acerca de los servicios de Dravita tech?"
                  className="rounded-3xl bg-[#ff9500] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#E68900] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E68900]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contacta a tu asesor gratis
                </a>

                

              </div>
              
            </div>
            <div className="flex items-center justify-center mt-7">
            <img 
                      src={hero}
                      alt=""
                      className="rounded-2xl w-96 h-80 "
                    />
            </div>
           
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Hero;
