
export default function NewConfirmation() {
  return (
    <section id='new-confirmation' className='mt-20 flex flex-col items-center p-4'>
      <h2 className='text-3xl text-center mb-2'>¡Ya disponible el video presentación!</h2>
      <iframe width={'80%'}
        className='h-[400px] lg:h-[500px]'
        src="https://www.youtube.com/embed/WomH3uMIbPU"
        title="Video presentación Desaster Fest"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen>
      </iframe>
    </section>
  )
}