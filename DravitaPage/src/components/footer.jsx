import React from 'react';
import { FaTwitter, FaYoutube, FaFacebookF } from 'react-icons/fa';


const Footer = () => {
  return (

    <footer className="bg-[#3E2449] py-5 px-4 md:px-6">
              
      <div className="container mx-auto flex flex-col items-center space-y-6">
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6" aria-label="Footer navigation">
          <a href="#about" className="text-white hover:text-gray-900 transition-colors duration-200">
            Sobre nosotros
          </a>
          <a href="#pricing" className="text-white hover:text-gray-900 transition-colors duration-200">
            Servicios
          </a>
          <a href="#testimonials" className="text-white hover:text-gray-900 transition-colors duration-200">
            Clientes
          </a>
          <a href="#faqs" className="text-white hover:text-gray-900 transition-colors duration-200">
            Preguntas Frecuentes
          </a>
        </nav>
        <div className="flex space-x-4" aria-label="Redes sociales">
          <a href="#" aria-label="Twitter" className="text-white hover:text-gray-900 transition-colors duration-200">
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href="#" aria-label="YouTube" className="text-white hover:text-gray-900 transition-colors duration-200">
            <FaYoutube className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Facebook" className="text-white hover:text-gray-900 transition-colors duration-200">
            <FaFacebookF className="h-6 w-6" />
          </a>
        </div>
        <p className="text-sm text-white text-center">
          Copyright © {new Date().getFullYear()} - Todos los derechos reservados por Dravita Tech
        </p>
      </div>
    </footer>
  );
};

export default Footer;