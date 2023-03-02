import Image from 'next/image'
import { Carousel } from '@mantine/carousel'


export default function Gallery({ images }) {
  return (

    <Carousel className='carousel'  withIndicators withControls style={{width: '100%'}}>
      {
        images.map((image, index) => {
          return <Carousel.Slide key={index}>
            <Image
              key={index}
              src={`/disaster2022/${image}`}
              alt={`Imagen ${index}`}
              fill
            />
          </Carousel.Slide>
        })
      }
    </Carousel>
  )
}