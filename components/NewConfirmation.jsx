
export default function NewConfirmation() {
  return (
    <section id='new-confirmation' className='mt-20 flex flex-col items-center p-4'>
      <h2 className='text-3xl'>Nueva confirmación</h2>
      <div className='bg-white overflow-hidden rounded-lg mt-2'>
        <img
          src='/line-up/raul-ortiz.jpg'
          height='500'
          width='350'
        />
        <div className='p-3'>
          <h4 className='font-bold'>Raúl Ortiz</h4>
          <p className='italic text-gray-500'>13º artista confirmado</p>
        </div>
      </div>
    </section>
  )
}