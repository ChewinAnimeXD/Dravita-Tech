import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logoDravita.png";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Función para cerrar el menú móvil
  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-[#351C42]">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">DravitaTech</span>
            <img alt="DravitaTech logo" src={logo} className="h-8 w-auto" />
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        <PopoverGroup className="text-white hidden lg:flex lg:gap-x-14 flex-grow justify-center">
          <a href="#about" className="text-sm font-semibold leading-6">
            Nosotros
          </a>
          <a href="#pricing" className="text-sm font-semibold leading-6">
            Servicios
          </a>
          <a href="#testimonials" className="text-sm font-semibold leading-6">
            Clientes
          </a>
          <a href="#faqs" className="text-sm font-semibold leading-6">
            Preguntas Frecuentes
          </a>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden text-white"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#2d1239] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Dravita Tech</span>
              <img alt="DravitaTech logo" src={logo} className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#about"
                  onClick={handleMenuItemClick}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white"
                >
                  Nosotros
                </a>
                <a
                  href="#pricing"
                  onClick={handleMenuItemClick}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white"
                >
                  Servicios
                </a>
                <a
                  href="#testimonials"
                  onClick={handleMenuItemClick}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white"
                >
                  Clientes
                </a>
                <a
                  href="#faqs"
                  onClick={handleMenuItemClick}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white"
                >
                  Preguntas Frecuentes
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}