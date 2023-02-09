import { useState } from 'react';
import AddProduct from './addProduct';
import ProductsUpdate from './productsUpdate';
import ProductsList from './productsList';

const ProductsBoard = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showUpdateProduct, setShowUpdateProduct] = useState(false);
  const [productInfo, setProductInfo] = useState({});
  const [updateList, setUpdateList] = useState(false);

  const onClickShowProductUpdate = (product) => {
    setProductInfo(product);
    setUpdateList(false);
    setShowUpdateProduct(true);
  };
  const onClickShowAddProduct = () => {
    setShowAddProduct(true);
    setUpdateList(false);
  };
  const onClickUpdateCancel = () => {
    setShowUpdateProduct(!showUpdateProduct);
  };
  const onClickAddCancel = () => {
    setShowAddProduct(!showAddProduct);
  };
  return (
    <div className="flex flex-col gap-5 w-full ">
      <ProductsList
        update={onClickShowProductUpdate}
        add={onClickShowAddProduct}
      />
      {showAddProduct && <AddProduct cancel={onClickAddCancel} />}
      {showUpdateProduct && (
        <ProductsUpdate cancel={onClickUpdateCancel} data={productInfo} />
      )}
    </div>
  );
};

export default ProductsBoard;
