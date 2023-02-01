import { useEffect, useState, useCallback, useMemo, Fragment } from 'react';

import FeaturedProdItem from './featuredProdItem';
import Pagination from '../buttons/paginationButtons';
import requestAPI from '../../helpers/requestCalls';
import { useDispatch } from 'react-redux';
import { autoCompleteActions } from '../../redux/slices/autoComp-slice';
import { notificationActions } from '../../redux/slices/notification-slice';
import LoadingCard from '../utilitaryCards/loadingCard';
import ErrorCard from '../utilitaryCards/errorCard';

const FeaturedProdC = (props) => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  let pageSize = props.nItems;

  const getFeaturedProducts = useCallback(async () => {
    try {
      const response = await requestAPI('products', 'GET');

      if (response.status === 'fail') {
        setIsLoading(false);
        throw new Error(response.message);
      }
      if (response === 'error') {
        setIsLoading(false);
        throw new Error('algo salio muy mal!');
      }

      setFeaturedProducts(response.data.doc);
      dispatch(autoCompleteActions.autoCompleteClear());
      dispatch(autoCompleteActions.autoCompleteFiller(response.data.doc));
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      dispatch(
        notificationActions.showNotification({
          message: `${err}`,
          type: 'alert-error',
        })
      );
    }
  }, []);

  useEffect(() => {
    getFeaturedProducts();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [props.filter]);

  const filteredProd = featuredProducts.filter((product) => {
    if (props.filter === '') {
      return product;
    } else {
      return product.type.includes(props.filter);
    }
  });

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return filteredProd.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredProd, pageSize]);

  //componente auxiliar para renderear productos o tarjeta de error
  const RenderItems = () => {
    if (currentTableData.length > 0) {
      return (
        <div className="grid grid-cols-4 gap-9 pt-10 ml-5 mr-5 mx-auto sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-4 ">
          {currentTableData.map((item) => (
            <FeaturedProdItem
              key={item._id}
              id={item._id}
              imgProd={`${process.env.REACT_APP_BASE_URL}/api/v1/productResources/${item.images[0]}`}
              nameProd={item.name}
              price={item.price}
            />
          ))}
        </div>
      );
    } else {
      return <ErrorCard />;
    }
  };

  return (
    <Fragment>
      {isLoading ? (
        <div className="flex items-center">
          <LoadingCard />
        </div>
      ) : (
        <RenderItems />
      )}
      <div className="flex flex-col items-center">
        <Pagination
          currentPage={currentPage}
          totalCount={filteredProd.length}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        ></Pagination>
      </div>
    </Fragment>
  );
};
export default FeaturedProdC;
