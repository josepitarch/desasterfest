import Image from "next/image";
import LogoAspanion from "../public/aspanion.jpg"

export default function Aspanion() {
  const aspanion = <a href='https://aspanion.es/' target={'_blank'} rel="noreferrer" className='text-blue-400'>Aspanion</a>
  return (
    <section className='p-4 mt-10 flex flex-col'>
      <h2 className='font-bold text-left py-2'>Colaboramos con Aspanion</h2>
      <p>Parte del dinero recaudado con la venta de las entradas va destinado a la asociación {aspanion}
        . Esta asociación se dedica a la investigación y tratamiento del cáncer en niños.
        ¡No te pierdas la oportunidad de colaborar con ellos!
      </p>
      <Image
        id='logo-aspanion'
        src={LogoAspanion}
        alt="Logo de Aspanion"
        className="mt-4 rounded-md self-center"
      />
    </section>
  )
}