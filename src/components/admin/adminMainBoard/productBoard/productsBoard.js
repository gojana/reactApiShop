import { useState } from 'react';
import AddProduct from './addProduct';
import ProductsUpdate from './productsUpdate';
import ProductsList from './productsList';

const ProductsBoard = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showUpdateProduct, setShowUpdateProduct] = useState(false);

  return (
    <div className="flex flex-col w-full ">
      <ProductsList />
      {showAddProduct && <AddProduct />}
      {showUpdateProduct && <ProductsUpdate />}
    </div>
  );
};

export default ProductsBoard;
