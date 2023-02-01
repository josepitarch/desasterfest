import Image from 'next/image';

export default function Gallery({ images }) {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:px-4'>
      {
        images.map((image, index) => {
          return (
            <Image
              key={index}
              src={`/disaster2022/${image}`}
              alt={`Imagen ${index}`}
              width={300}
              height={300}
            />
          )
        })
      }
    </div>
  );
}