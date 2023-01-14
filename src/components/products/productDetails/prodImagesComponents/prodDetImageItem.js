import { Fragment, useState } from 'react';
const ProdDetImageItem = (props) => {
  const [imgItem, setImagItem] = useState(props.imgItem);

  const changeImgHandler = () => {
    props.setImage(imgItem);
    setImagItem(props.currImg);
  };

  return (
    <Fragment>
      <button
        className="border border-primary h-20 w-20 rounded-lg flex items-center justify-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
        onClick={changeImgHandler}
      >
        <img
          className="rounded-lg h-20 w-full "
          src={`${process.env.REACT_APP_BASE_URL}/api/v1/productResources/${imgItem}`}
          alt=""
        />
      </button>
    </Fragment>
  );
};
export default ProdDetImageItem;
