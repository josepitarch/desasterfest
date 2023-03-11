import Head from 'next/head'
import Aspanion from '../components/Aspanion'
import Gallery from '../components/Gallery'
import dynamic from 'next/dynamic'

import fs from 'node:fs/promises'
import path from 'node:path'
import Background from '../components/Background'
import Script from 'next/script'
import Navigation from '../components/Navigation'
import LineUp from '../components/LineUp'
import Link from 'next/link'
import NewConfirmation from '../components/NewConfirmation'

export default function Home({ images }) {
  const DynamicComponent = dynamic(() =>
    import('../components/Countdown'), { ssr: false }
  )

  return (
    <>
      <Head>
        <title>Desaster Fest</title>
        <meta name="description" content="Página oficial de Desaster Fest" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Script src="/background.js" />
      <Script src="/navigation.js" />
      <Background />


      <div className='pt-4 xl:pt-24 flex flex-col xl:flex-row m-auto xl:gap-x-24 xl:w-[1300px]'>
        <div className='w-full xl:w-52'>
          <Navigation />
        </div>
        <main className='w-full'>
          <header id='top' className='xl:min-h-screen flex flex-col items-center'>
            <h1 className='text-primary text-xl xl:text-[54px] leading-none text-center font-black uppercase italic -rotate-[10deg]'>
              <span className='text-7xl lg:text-8xl xl:text-9xl block'>Festival</span>
              <span className='text-[26px] max-w-[38rem] m-auto'>de música remember</span>
              <span className='text-2xl max-w-[38rem] m-auto block'>II Edición</span>
            </h1>

            <div className='text-center mt-6 italic'>
              <h3 className='animate-fadeIn animate-delay-300 text-white/80 text-2xl mt-3'>
                Recinto ferial Almenara
              </h3>
            </div>
            <div className='mt-8 animate-fadeIn animate-delay-500 flex flex-col items-center'>
              <h2 className='mb-4 animate-fadeIn animate-delay-200 font-extrabold text-[40px] lg:text-6xl text-white'>9 de septiembre</h2>
              <DynamicComponent />
            </div>

            {/* <Link href='/buy_ticket' className='text-3xl font-medium text-center text-primary w-80 lg:w-96 mt-20 p-4 bg-gradient-to-r from-violet-400 to-violet-800 rounded-md'>
              Comprar entradas
            </Link> */}
            <p className='text-3xl text-primary mt-20'>¡Entradas próximamente a la venta!</p>
          </header>

          <NewConfirmation />

          <LineUp />

          <Aspanion />

          <section id='first-edition' className='p-4 mb-20'>
            <h2>Desaster Fest 2022</h2>
            <p className='mb-8'>Os dejamos algunas imágenes de lo que fue la primera edición de este gran evento.
              No hace falta decir que estamos trabajando muy duro para conseguir en esta segunda edición contar con
              los mejores artistas que hagan que este evento sea inolvidable.
            </p>
            <Gallery images={images} />
          </section>
          <section id='localization' className='max-w-full p-4 mb-20'>
            <h2 className='mb-6'>Cómo llegar</h2>
            <div className='flex flex-col md:flex-row h-96'>
              <h3 className='md:pr-4 text-white self-center'>
                El evento se celebra en el recinto ferial de la localidad
                de Almenara, en la provincia de Castellón.
              </h3>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d911.9346204543267!2d-0.22883838207516277!3d39.753795557218716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60139429729bed%3A0x8b96a21383dcdaa6!2sDesasterfest!5e0!3m2!1ses!2ses!4v1677185641352!5m2!1ses!2ses"
                style={{ "border": "0", "width": "100%", "height": '100%' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  const jsonDirectory = path.join(process.cwd(), '/public/disaster2022')
  const images = await fs.readdir(jsonDirectory, 'utf8')
  return {
    props: {
      images
    }
  }
}
