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
      <div className="navbar bg-base-100 justify-end lg:flex-row md:flex-row mt-5 -mb-5 flex sm:flex-col">
        <TxtNavBarL text={props.textNavBar}/>
        <SearchTool />
        <MenuCategorias filterEx={filterLiftUp} />
        
      </div>
      <FeaturedProdC nItems={props.numItems} filter={filter} />
    </Fragment>
  );
};

export default ProductsComp;
