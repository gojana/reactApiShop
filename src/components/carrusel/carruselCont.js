import { Link } from 'react-router-dom';

import carousel1 from '../../assets/carousel1.jpg';
import carousel2 from '../../assets/carousel2.jpg';
import carousel3 from '../../assets/carousel3.jpg';
import carousel4 from '../../assets/carousel4.jpg';
import Carousel from 'nuka-carousel/lib/carousel';

const CarrouselC = () => {
  return (
    <Carousel
      autoplay={true}
      pauseOnHover={true}
      wrapAround={true}
      renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
        <button
          className="btn btn-neutral btn-circle"
          onClick={previousSlide}
          disabled={previousDisabled}
        >
          {'<'}
        </button>
      )}
      renderCenterRightControls={({ nextDisabled, nextSlide }) => (
        <button
          className="btn btn-neutral btn-circle"
          onClick={nextSlide}
          disabled={nextDisabled}
        >
          {'>'}
        </button>
      )}
    >
      <Link to="/products">
        <img className="w-full" src={carousel1} alt="img1" />
      </Link>
      <Link to="/products">
        <img className="w-full" src={carousel2} alt="img1" />
      </Link>
      <Link to="/products">
        <img className="w-full" src={carousel3} alt="img1" />
      </Link>
      <Link to="/products">
        <img className="w-full" src={carousel4} alt="img1" />
      </Link>
    </Carousel>
  );
};
export default CarrouselC;
