import { Fragment, useState } from 'react';
import MenuCategorias from '../navProd/navProdR/menuCategorias';
import SearchTool from '../navProd/navProdR/searchTool/searchTool';
import FeaturedProdC from './featuredProdC';
import TxtNavBarL from '../navProd/navProdL/txtNavBarL';

const ProductsComp = (props) => {
  const [filter, setNewFilter] = useState('');

  const filterLiftUp = (e) => {
    setNewFilter(e.target.value);
  };

  return (
    <Fragment>
      <div className="navbar bg-base-100 justify-end mt-5 -mb-5 flex  sm:flex-row">
        <TxtNavBarL text={props.textNavBar}/>
        <MenuCategorias filterEx={filterLiftUp} />
        <SearchTool />
      </div>
      <FeaturedProdC nItems={props.numItems} filter={filter} />
    </Fragment>
  );
};

export default ProductsComp;
