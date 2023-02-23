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
      <Script src="/background.js" />
      <Script src="/navigation.js" />
      <Head>
        <title>Desaster Fest</title>
        <meta name="description" content="Página oficial de Desaster Fest" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Background />

      <div className='pt-4 xl:pt-24 flex flex-col xl:flex-row m-auto xl:gap-x-24 xl:w-[1400px]'>
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

            <div className='text-center mt-6 italic -rotate-[10deg]'>
              <h3 className='animate-fadeIn animate-delay-300 text-white/80 text-2xl mt-3'>
                Recinto ferial Almenara
              </h3>
            </div>
            <div className='mt-8 animate-fadeIn animate-delay-500 -rotate-[10deg] flex flex-col items-center'>
              <h2 className='mb-4 animate-fadeIn animate-delay-200 font-extrabold text-[40px] lg:text-6xl text-white'>9 de septiembre</h2>
              <DynamicComponent />
            </div>

            <Link href='/buy_ticket' className='text-3xl font-medium text-center text-primary w-80 lg:w-96 mt-20 p-4 bg-gradient-to-r from-violet-400 to-violet-800 rounded-md'>
              Comprar entradas
            </Link>
          </header>

          <NewConfirmation />

          <LineUp />

          <Aspanion />

          <section className='p-4 mb-20'>
            <h2>Desaster Fest 2022</h2>
            <p className='mb-8'>Os dejamos algunas imágenes de lo que fue la primera edición de este gran evento.
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
