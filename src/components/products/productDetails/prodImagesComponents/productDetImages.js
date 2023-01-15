import { Fragment, useState } from 'react';

import ProdDetImageItem from './prodDetImageItem';

const ProductDetImage = (props) => {
  const [currentImage, setCurrentImage] = useState(props.imgProdCollection[0]);

  const setCurrentImagehandler = (newImg) => {
    setCurrentImage(newImg);
  };

  return (
    <Fragment>
      <div className="md:flex-1 px-4">
        <div className="flex -mx-2 mb-4">
          <div className="flex-1 px-2 ">
            <button className=" bg-cover border-primary w-full rounded-lg h-80  flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ">
              <img
                className="bg-cover rounded-lg h-80 w-full"
                src={`${process.env.REACT_APP_BASE_URL}/api/v1/productResources/${currentImage}`}
                alt=""
              />
            </button>
          </div>
        </div>

        <div className="flex gap-5">
          {props.imgProdCollection.map((img, i) => {
            if (i >= 1)
              return (
                <ProdDetImageItem
                  key={img}
                  imgItem={img}
                  setImage={setCurrentImagehandler}
                  currImg={currentImage}
                />
              );
            return '';
          })}
        </div>
      </div>
    </Fragment>
  );
};
export default ProductDetImage;
