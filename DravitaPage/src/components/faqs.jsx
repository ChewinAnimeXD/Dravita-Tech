import React from "react";
import { Typography } from "@material-tailwind/react";
import BgFooter from "../assets/bgFooter.png";

const faqs = [
  {
    title: "¿Cómo contrato un servicio?",
    desc: "Puedes contratar un servicio comunicándote con los asesores, quienes te indicarán los pasos a seguir."
  },
  {
    title: "¿Cuáles son los métodos de pago?",
    desc: "Puedes realizar tu pago por medio de plataformas como Daviplata, Nequi, Bancolombia a la mano o cuentas Davivienda. El pago se realiza con un 50% al iniciar el proyecto y un 50% al finalizar.",
  },
];

export function Faqs() {
  return (
    <section id="faqs"
      className="px-8 py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${BgFooter})` }}
    >
      <div className="container mx-auto">
        <div className="mb-14 text-center ">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 text-3xl font-bold !leading-snug"
          >
            Preguntas Frecuentes
          </Typography>
          <Typography className="mx-auto font-normal text-[18px] !text-gray-500 lg:max-w-3xl">
            {/* Texto adicional aquí si es necesario */}
          </Typography>
        </div>
        <div className="max-w-3xl mx-auto grid gap-10">
          {faqs.map(({ title, desc }) => (
            <div key={title}>
              <Typography
                color="blue-gray"
                className="pb-6 text-[20px] font-bold"
              >
                {title}
              </Typography>
              <div className="border-t border-gray-200 pt-4">
                <Typography className="font-normal !text-gray-500">
                  {desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>
        <br></br>
        <div className="flex items-center justify-center lg:text-gray-800 text-white font-bold pt-5">
          <h1>¿Necesitas información adicional?</h1>
        </div>
        <div className="mt-2 flex items-center justify-center gap-x-6">
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
    </section>
  );
}

export default Faqs;
