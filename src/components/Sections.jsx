const features = [
    { name: 'Orientacion', description: 'Para acceder al programa "Pencion Contigo" para personas con discapacidad a cargo del Ministerio de Desarrollo e Inclusion Social.' },
    { name: 'Atencion', description: 'A domicilio en Terapias Fisicas y Rehabilitacion' },
    { name: 'Capacitancion', description: 'En Talleres Productivos' },
    { name: 'Ayudas', description: 'Biomecanicas para personas con discapacidad' },
    { name: 'Atencion Social', description: 'Individualizada en situacion de pobreza e incidencia para el cumplimiento de la Ley General de la persona con discapacidad' },
    { name: 'Registro y Orientacion', description: 'En la certificacion para niños,niñas y adultos con discapacidad para acceder a los beneficios  de la ley 29973' },
  ]
  
  export default function Section() {
    return (
      <div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-12 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8 bg-white bg-opacity-85 rounded-b-lg">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-green-700 sm:text-4xl self-center">OMAPED</h2>
            <h3 className="text-green-700 sm:text-sm font-bold">OFICINA MUNICIPAL DE ATENCIÓN A LAS PERSONAS CON DISCAPACIDAD</h3>
            <p className="mt-4 text-green-700 font-semibold">
              La <b>OMAPED</b> - El Tambo, promueve el ejercicio de sus derechos e igualdad de oportunidades, mediante el desarrollo de programas y actividades en la Sociedad 
            </p>
  
            <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2 sm:gap-y-7 lg:gap-x-8">
              {features.map((feature) => (  
                <div key={feature.name} className=" border-t-4 border-l-4 border-green-700 pt-2 hover:bg-green-700 hover:text-yellow-400   p-2 rounded-xl text-green-700">
                  <dt className="font-semibold  ">{feature.name}</dt>
                  <dd className="font-semibold mt-2 text-sm">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8 -space-x-10">
            <img
              src="https://img.bekiapadres.com/articulos/80000/80813/1.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg"
            />
            <div className="flex flex-col align-middle">
              <button className='flex text-green-700 bg-yellow-400 ml-6 p-3 rounded-lg  self-center font-bold hover:bg-green-700 hover:text-yellow-400'>Solicitar Registro</button> 
            </div>  
          </div>
        </div>
      </div>
    )
  }
  