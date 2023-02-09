import { useState, useCallback, useEffect, Fragment } from 'react';
import { notificationActions } from '../../../../redux/slices/notification-slice';
import requestAPI from '../../../../helpers/requestCalls';
import { useDispatch } from 'react-redux';
import ButtonCommon from '../../../buttons/buttonCommon';

const ProductsList = (props) => {
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const requestProducts = useCallback(async () => {
    try {
      const response = await requestAPI('products', 'GET');

      if (response.status === 'fail') {
        setIsLoading(false);
        throw new Error(response.message);
      }
      if (response === 'error') {
        setIsLoading(false);
        throw new Error(`algo salio muy mal!`);
      }

      setProductsList(response.data.doc);
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

  const deleteProduct = async (idProd) => {
    try {
      const response = await requestAPI(`products/id/${idProd}`, 'DELETE');

      if (response.status === 'fail') {
        setIsLoading(false);
        throw new Error(response.message);
      }
      if (response === 'error') {
        setIsLoading(false);
        throw new Error(`algo salio muy mal! ${response.message}`);
      }

      setIsLoading(false);
      dispatch(
        notificationActions.showNotification({
          message: `producto borrado!`,
          type: 'alert-success',
        })
      );
    } catch (err) {
      setIsLoading(false);
      dispatch(
        notificationActions.showNotification({
          message: `${err}`,
          type: 'alert-error',
        })
      );
    }
  };

  useEffect(() => {
    requestProducts();
  }, []);

  return (
    <div className="overflow-x-auto ">
      <table className="table w-full  mb-5">
        <thead>
          <tr>
            <th></th>
            <th>nombre Producto</th>
            <th>Tipo</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>
              <div className="flex justify-center">
                <ButtonCommon name="Añadir Producto" css={'btn btn-primary'} />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {productsList.map((prod) => {
            return (
              <Fragment key={prod._id}>
                <tr className="hover">
                  <td></td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={`${process.env.REACT_APP_BASE_URL}/api/v1/productResources/${prod.images[0]}`}
                            alt="img"
                          />
                        </div>
                      </div>

                      <div className="font-bold">{prod.name}</div>
                    </div>
                  </td>
                  <td>
                    <div>{`${prod.type}`}</div>
                  </td>
                  <td>
                    <div>{`${prod.price}`}</div>
                  </td>
                  <td>
                    <div>{`${prod.stock}`}</div>
                  </td>

                  <th>
                    <div className="flex justify-center ">
                      <ButtonCommon
                        name="borrar"
                        css={'mr-5'}
                        action={() => deleteProduct(prod._id)}
                      />

                      <ButtonCommon
                        name="modificar"
                        css={'btn btn-primary'}
                        action={() => props.update(prod)}
                      />
                    </div>
                  </th>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ProductsList;
