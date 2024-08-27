import React from "react";
import { useInView } from 'react-intersection-observer';

const Pricing = () => {
  return (
    <section className=" bg-[#2d1239] relative z-10 overflow-hidde pb-12 pt-4 dark:bg-dark lg:pb-[40px] lg:pt-[40px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[40px] max-w-[510px] text-center text-white">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Planes de servicios
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark text-white sm:text-4xl md:text-[40px]">
                Nuestros Servicios
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Accede a nuetsros servicios para el desarrollo de tus sitios web.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center pl-20 pr-20">
          <div className="-mx-4 flex flex-wrap">
            <PricingCard
              type="Tienda Online"
              price="$1'250.000"
              subscription="COP"
              description="Creamos por ti tu tienda online, utilizando los servicios de shopify"
              buttonText="Contacta tu asesor"
            >
              <List>Diseño basado en plantillas</List>
              <List>Capacitación básica</List>
              <List>1 usuario administrador</List>
              <List>Administras tus propios productos</List>
            </PricingCard>
            <PricingCard
              type="Páginas Personalizadas"
              price="$800.000"
              subscription="COP"
              description="Creamos tu sitio web desde $800.000/COP en adelante"
              buttonText="Contacta tu asesor"
              active
            >
              <List>Diseño 100% personalizado</List>
              <List>Atención personalizada</List>
              <List>Capacitación del manejo de la web</List>
              <List>Soporte técnico gratuito 30 dias posteriores a la entrega</List>
            </PricingCard>
            <PricingCard
              type="Páginas Estáticas"
              price="$600.000"
              subscription="COP"
              description="Creamos tu sitio web utilizando los servicios de wix."
              buttonText="Contacta tu asesor"
            >
              <List>Diseño basado en plantillas</List>
              <List>Capacitación básica</List>
              <List>1 usuario administrador</List>
              <List>Fácil personalización</List>
            </PricingCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

const PricingCard = ({
  children,
  description,
  price,
  type,
  subscription,
  buttonText,
  active,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación se ejecutará solo una vez
    threshold: 0.1, // Cambia esto según tus necesidades
  });
  return (
    <>
      <div
      ref={ref}
      className={`transition-opacity duration-500 ${inView ? 'animate-fade-up' : 'opacity-0'} w-full px-4 md:w-1/2 lg:w-1/3`}>
        <div className="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke px-8 py-10 bg-white shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]">
          <span className="mb-3 block text-lg font-semibold text-primary">
            {type}
          </span>
          <h2 className="mb-5 text-[42px] font-bold text-dark text-gray-800">
            {price}
            <span className="text-base font-medium text-body-color dark:text-dark-6">
              / {subscription}
            </span>
          </h2>
          <p className="mb-8 border-b border-stroke pb-8 text-base text-body-color dark:border-dark-3 dark:text-dark-6">
            {description}
          </p>
          <div className="mb-9 flex flex-col gap-[14px]">{children}</div>
          <a
            href="https://wa.me/573219565434? text=¿Puedes darme información acerca de los servicios de Dravita tech?"
            target="_blank"
            className={` ${
              active
                ? "block w-full rounded-3xl border border-primary bg-[#ff9500] p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
                : "block w-full rounded-3xl border border-primary bg-[#FFA521] p-3 text-center text-base font-medium text-white transition hover:border-primary hover:bg-[#ff9500] hover:text-white dark:border-dark-3"
            } `}
          >
            {buttonText}
          </a>
          <div>
            <span className="absolute right-0 top-7 z-[-1]">
              <svg
                width={77}
                height={172}
                viewBox="0 0 77 172"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={86} cy={86} r={86} fill="url(#paint0_linear)" />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1={86}
                    y1={0}
                    x2={86}
                    y2={172}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3056D3" stopOpacity="0.09" />
                    <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="absolute right-4 top-4 z-[-1]">
              <svg
                width={41}
                height={89}
                viewBox="0 0 41 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="38.9138"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 38.9138 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 38.9138 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 38.9138 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 38.9138 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 38.9138 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 38.9138 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 38.9138 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="1.42021"
                  r="1.42021"
                  transform="rotate(180 38.9138 1.42021)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 26.4157 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 26.4157 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 26.4157 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 26.4157 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 26.4157 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 26.4157 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 26.4157 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="1.4202"
                  r="1.42021"
                  transform="rotate(180 26.4157 1.4202)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 13.9177 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 13.9177 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 13.9177 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 13.9177 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 13.9177 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 13.9177 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 13.9177 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="1.42019"
                  r="1.42021"
                  transform="rotate(180 13.9177 1.42019)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 1.41963 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 1.41963 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 1.41963 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 1.41963 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 1.41963 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 1.41963 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 1.41963 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="1.4202"
                  r="1.42021"
                  transform="rotate(180 1.41963 1.4202)"
                  fill="#3056D3"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const List = ({ children }) => {
  return (
    <p className="text-base text-body-color dark:text-dark-6">{children}</p>
  );
};
