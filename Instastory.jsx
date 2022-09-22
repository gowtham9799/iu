// <-------------mobile and tablet size only working------------------->
import React from 'react';
import image1 from './images/ins1.png';
import image2 from './images/ins2.png';
import image3 from './images/ins3.png';
import image4 from './images/ins4.png';
import image5 from './images/ins5.png';
import image6 from './images/ins6.png';
import image7 from './images/ins7.png';
import image8 from './images/ins8.png';
import image9 from './images/ins9.png';
import { useWindowScrollPositions } from './use';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];

function Instastory() {

    const { scrollX } = useWindowScrollPositions()
  return (
    <div className='flex w-full lg:hidden'>
   <div className={scrollX <= 1 ? 'w-[50rem] grow flex scrollbar overflow-y-auto mt-3  px-1':'no-scrollbar'}>
           {images.map((image, i) => (
    <div
        className={i == 0 ? 'img_wrap active' : 'img_wrap '}
        key={i}>
        <img src={image} alt="" />
    </div>
))}
   </div>
   </div>
  )
}
export default Instastory;