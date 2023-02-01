import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import CartElements from './cartElements';
import ButtonGeneric from '../buttons/buttonGeneric';
import { EmptyCartIcon } from '../icons/icons';

const CartC = () => {
  const items = useSelector((state) => state.cart.items);
  const nProducts = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Fragment>
      <div className="flex justify-end mb-5">
        <h1 className="mr-10  font-bold">{`Cantidad de productos: ${nProducts}`}</h1>
        <h1 className=" mr-10  font-bold">{`Subtotal: ${totalAmount}`}</h1>
        <ButtonGeneric name={'Ordenar'} css={'lg:-mt-5 '} />
      </div>
      <div className="overflow-x-auto w-full">
        {items.length >= 1 ? (
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Nombre Producto</th>
                <th>precio</th>
                <th>cantidad</th>
                <th>total producto</th>
                <th></th>
              </tr>
            </thead>
            {items.map((item) => (
              <CartElements
                key={item.itemId}
                id={item.itemId}
                image={item.img}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                totalPrice={item.totalPrice}
              />
            ))}
          </table>
        ) : (
          <div className="flex flex-col items-center mt-10">
            <h1 className="font-black mb-5">Tu carro esta vacio!</h1>
            <EmptyCartIcon />
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default CartC;
