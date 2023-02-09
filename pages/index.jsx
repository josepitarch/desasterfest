import Head from 'next/head'
import Aspanion from '../components/Aspanion'
import Gallery from '../components/Gallery'
import dynamic from 'next/dynamic'

import fs from 'node:fs/promises'
import path from 'node:path'
import Background from '../components/Background'
import Script from 'next/script'
import Navigation from '../components/Navigation'

export default function Home({ images }) {
  const DynamicComponent = dynamic(() =>
    import('../components/Countdown'), { ssr: false }
  )

  return (
    <>
      <Script src="/background.js" />
      <Script src="/navigation.js" />
      <Head>
        <title>Desaster Fest</title>
        <meta name="description" content="Página oficial de Desaster Fest" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Background />

      <div className='pt-4 xl:pt-24 flex flex-col xl:flex-row  m-auto xl:gap-x-24 xl:w-[1200px]'>
        <div className='w-full xl:w-52'>
          <Navigation />
        </div>
        <main>
          <header id='top' className='xl:min-h-screen flex flex-col items-center'>
            <h1 className='text-primary text-xl xl:text-[54px] leading-none text-center font-black uppercase italic -rotate-[10deg]'>
              <span className='text-7xl lg:text-8xl xl:text-9xl block'>Evento</span>
              <span className='text-[26px] max-w-[38rem] m-auto'>de música electrónica</span>
              <span className='text-2xl max-w-[38rem] m-auto block'>II Edición</span>
            </h1>

            <div className='text-center mt-10'>
              <h2 className='animate-fadeIn animate-delay-200 italic font-extrabold text-5xl lg:text-6xl text-white -rotate-[10deg]'>9 de septiembre</h2>
              <h3 className='animate-fadeIn animate-delay-200 italic text-white/80 text-lg -rotate-[10deg] mt-3'>A partir de las 16:00 horas
                <span className='xl:px-1'> · </span>Recinto ferial Almenara
              </h3>
            </div>
            <div className='mt-8 animate-fadeIn animate-delay-500'>
              <DynamicComponent />
            </div>
            <button className='text-3xl font-medium text-primary w-80 lg:w-96 mt-20 p-4 bg-gradient-to-r from-violet-400 to-violet-800 rounded-md'>Comprar entradas</button>
          </header>

          <Aspanion />

          <section className='p-4 mb-20'>
            <h2 className='font-bold'>Desaster Fest 2022</h2>
            <p className='py-2'>Os dejamos algunas imágenes de lo que fue la primera edición de este gran evento.
              No hace falta decir que estamos muy duro para conseguir que en esta edición tener junto a nosotros
              a los mejores artistas del panorama nacional e internacional.
            </p>
            <Gallery images={images} />
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
