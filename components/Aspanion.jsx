import Image from "next/image";

export default function Aspanion() {
  const aspanion = <a href='https://aspanion.es/' target={'_blank'} rel="noreferrer" className='text-blue-400'>Aspanion</a>
  return (
    <section>
      <h2 className='font-bold text-3xl text-white text-center py-2'>Colaboramos con Aspanion</h2>
      <p className='text-white'>Parte del dinero recaudado con la venta de las entradas va destinado a la asociación { aspanion }
        . Esta asociación se dedica a la investigación y tratamiento del cáncer en niños.
      </p>
      <div className='w-full flex justify-center'>
        <Image
          src="/aspanion.jpg"
          alt="Logo de Aspanion"
          width={150}
          height={150}
          className="mx-auto"
        />
      </div>
    </section>
  )
}