import Image from 'next/image';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}

export default function Gallery({ images }) {
  return (
    <div className="slide-container max-w-[720px] m-auto">
      <Slide>
        {images.map((image, index) => (
          <div key={index}>
            <div style={{ ...divStyle }}>
              <Image
                key={index}
                src={`/disaster2022/${image}`}
                alt={`Imagen ${index}`}
                height={700}
                width={700}
              />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}