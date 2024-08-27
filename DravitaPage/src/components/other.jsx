import { AcademicCapIcon, PresentationChartLineIcon, ChatBubbleLeftRightIcon, InboxArrowDownIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Moodle',
    description:
      'Hacemos la instalación, configuración y personalización de sistemas de aprendizaje moodle.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Campañas publicitarias para redes sociales',
    description:
      'Hacemos tu campaña publicitaria para redes sociales como Facebook e Instagram.',
    icon: PresentationChartLineIcon,
  },
  {
    name: 'Chatbots',
    description:
      'Creación e implementación de chatbots para mejorar la atención al cliente y automatizar tareas repetitivas.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Sistemas de control de inventario',
    description:
      'Creación de soluciones para la gestión automatizada del inventario.',
    icon: InboxArrowDownIcon,
  },
]

export default function Other() {
  return (
    <div className="lg:py-5 sm:py-32 bg-white">
      <div className="pt-0 mt-0 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center ">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Servicios Adicionales
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600"> 
            También puedes adquirir servicios adicionales como lo siguientes:
          </p><br></br>
        </div>
        <div className="mx-auto  max-w-2xl sm:mt-20 lg:mt-6 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#9755f1]">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
