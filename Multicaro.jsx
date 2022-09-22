import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from './images/tshirt.jpg';
import image2 from './images/surya.jpg';
import image3 from './images/smi.jpg';
import image4 from './images/bnw.jpg';
import image5 from './images/ins5.png';
import image6 from './images/ins6.png';
import image7 from './images/ins7.png';
import image8 from './images/ins8.png';
import image9 from './images/ins9.png';
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
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
function Multicaro() {
  return (
    <div>
 <Carousel responsive={responsive}>
 {images.map((image, i) => (
    <div
        className={i == 0 ? 'img_wrap active' : 'img_wrap '}
        key={i}>
        <img src={image} alt="" />
    </div>
))}
</Carousel>;

    </div>
  )
}

export default Multicaro;