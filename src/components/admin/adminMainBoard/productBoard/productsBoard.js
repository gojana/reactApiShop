import { useEffect, useState } from 'react';
import AddProduct from './addProduct';
import ProductsUpdate from './productsUpdate';
import ProductsList from './productsList';

const ProductsBoard = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showUpdateProduct, setShowUpdateProduct] = useState(false);
  const [productInfo, setProductInfo] = useState({});
  const [updateList, setUpdateList] = useState(false);

  const onClickShowUpdateProduct = (product) => {
    setProductInfo(product);
    setUpdateList(false);
    setShowUpdateProduct(true);
    setShowAddProduct(false);
  };
  const onClickUpdateCancel = () => {
    setShowUpdateProduct(!showUpdateProduct);
  };
  const onClickShowAddProduct = () => {
    setShowAddProduct(true);
    setShowUpdateProduct(false);
  };
  const onClickAddCancel = () => {
    setShowAddProduct(!showAddProduct);
  };
  const triggerUpdateList = () => {
    setUpdateList(true);
  };

  return (
    <div className="flex flex-col gap-5 w-full ">
      <ProductsList
        showUpdate={onClickShowUpdateProduct}
        showAdd={onClickShowAddProduct}
        updatingList={updateList}
        nItems={6}
      />
      {showAddProduct && (
        <AddProduct cancel={onClickAddCancel} update={triggerUpdateList} />
      )}
      {showUpdateProduct && (
        <ProductsUpdate
          cancel={onClickUpdateCancel}
          data={productInfo}
          update={triggerUpdateList}
        />
      )}
    </div>
  );
};

export default ProductsBoard;
