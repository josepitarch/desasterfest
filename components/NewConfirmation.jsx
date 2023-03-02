
export default function NewConfirmation() {
  return (
    <section id='new-confirmation' className='mt-20 flex flex-col items-center p-4'>
      <h2 className='text-3xl'>Nueva confirmación</h2>
      <div className='bg-white overflow-hidden rounded-lg mt-2'>
        <img
          src='/line-up/monica.jpg'
          height='600'
          width='400'
        />
        <div className='p-3'>
          <h4 className='font-bold'>Monica X</h4>
          <p className='italic text-gray-500'>3º artista confirmado</p>
        </div>
      </div>
    </section>
  )
}