
const URL_MEGAENTRADAS = 'https://megaentradas.com/evento/desaster-cicling-fest'

export default function NewConfirmation() {
  return (
    <section id='new-confirmation' className='mt-20 flex flex-col items-center p-4'>
      <h2 className='text-3xl text-center mb-2'>Master class ciclo indoor</h2>
      {/* <iframe width={'80%'}
        className='h-[400px] lg:h-[500px]'
        src="https://www.youtube.com/embed/WomH3uMIbPU"
        title="Video presentación Desaster Fest"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen>
      </iframe> */}
      <p>
        Ahora por la mañana master class de ciclo indoor. Tres horas disfrutando de la música de Monica X con nuestras reputadas
        monitoras <strong>Vero Almero</strong>, <strong>Tania Melendo</strong> y <strong>Noelia Fenollosa</strong>. Habrán
        descansos de 15 minutos entre cada sesión donde ofreceremos refrescos. ¡Apúntate ya! Y no olvides adquirir tu entrada
        para el evento de la tarde.
      </p>
      <a
        href={URL_MEGAENTRADAS}
        target="_blank"
        className='bg-primary p-4 mt-10 w-72 lg:w-96 rounded-xl text-white text-center text-2xl font-bold'
      >
        Comprar entradas ciclo indoor
      </a>
      <img className='mt-2' src='/indoor.jpg' alt='Poster master class ciclo indoor' />
    </section>
  )
}