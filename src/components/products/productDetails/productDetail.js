import { Fragment, useState, useEffect} from 'react';
import { useParams, useLocation } from 'react-router-dom';
import requestAPI from '../../../helpers/requestCalls';

import SearchTool from '../../navProd/navProdR/searchTool/searchTool';
import ProductDetailText from './prodDetailTextComponent/productDetailText';
import ProductDetImage from './prodImagesComponents/productDetImages';
import ErrorCard from '../../utilitaryCards/errorCard';
import LoadingCard from '../../utilitaryCards/loadingCard';

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [requestError, setRequestError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  let location = useLocation();
  const productId = params.productId;

  const getProduct = async () => {
    try {
      setIsLoading(true);
      const response = await requestAPI(`products/id/${productId}`, 'GET');
      if (response.status === 'fail') {
        setIsLoading(false);
        throw new Error(response.message);
      }
      if (response === 'error') {
        setIsLoading(false);
        throw new Error('algo salio muy mal!');
      }
      setProduct(response.data.doc);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setRequestError(true);
    }
  };

  useEffect(() => {
    getProduct();
  }, [location]);

  return (
    <Fragment>
      <div className="navbar bg-base-100 justify-start xl:ml-36 lg:ml-44 md:ml-40 sm:ml-40  mt-5 -mb-10 flex  sm:flex-row">
        <SearchTool />
      </div>

      <div className="max-w-7xl ml-40 sm:x-auto px-4 sm:px-6 lg:px-8 xl:p-2 mt-20">
      {isLoading && <div className="flex items-center ">
          <LoadingCard css={"mb-80"} />
        </div>}
        <div className="flex flex-col md:flex-row -mx-4 mr-10">
      

          {!isLoading && !requestError && (
            <Fragment>
              <ProductDetImage imgProdCollection={product.images} />

              <ProductDetailText
                id={product._id}
                img={`http://127.0.0.1:4000/api/v1/productResources/${product.images[0]}`}
                productName={product.name}
                price={product.price}
                dsct={'25%'}
                type={product.type}
                description={product.description}
                specs={product.characteristics}
                stock={product.stock}
              />
            </Fragment>
          )}
          {requestError && <ErrorCard />}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetail;
