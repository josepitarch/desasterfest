export default function News() {
  let classes = 'pointer-events-none bg-black fixed inset-0 -z-50 h-screen w-screen flex justify-center text-white p-6'
  return (
    <div style={{
      backgroundImage: 'url(/stars.png)',
      backgroundRepeat: 'repeat',
      maskRepeat: 'repeat',
    }}
      className={classes}
    >
      <div className='max-w-[70ch]'>
        <h1 className='text-4xl text-center mb-4'>Blog</h1>
        <ul>
          <li className='mb-4'>
            <h2 className='text-2xl mb-2 text-purple-400'>Ayuda a Sofia Llamas</h2>
            <p>Como no podia ser de otra forma, desde el equipo de Desaster Fest queremos seguir con nuestra labor social.
              En esta ocasión, queremos ayudar a Sofia Llamas, TODOS los beneficios de la venta de las pulseras irán
              destinados a financiar la operación que tanta falta le hace. Las pulseras tienen un coste de 3€ y se pueden
              adquirir en los siguientes puntos de venta:
            </p>
            <ul className='list-disc ml-5 mt-5'>
              <li>Ayuntamiento Almenara</li>
              <li>Molí de Arroz</li>
              <li>Papeleria Simeon</li>
              <li>Oficina turismo playa de Almenara</li>
              <li>Cualquier miembro de la organización</li>
            </ul>
            <p className='text-3xl text-center mt-5 text-yellow-400'>¡JUNTOS PODEMOS, SOFIA!</p>
          </li>
          {/* <li className='mb-4'>
            <h2 className='text-2xl mb-2 text-purple-400'>Preguntas frecuentes</h2>
          </li> */}
        </ul>
      </div>
    </div>
  )
}