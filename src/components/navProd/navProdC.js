import TxtNavBarL from './navProdL/txtNavBarL';
import MenuCategorias from './navProdR/menuCategorias';
import SearchTool from './navProdR/searchTool';
const NavProdC=()=> {
  return (
    <div className="navbar bg-base-100 justify-end mt-5 -mb-10 flex  sm:flex-row">
      <TxtNavBarL />
      <MenuCategorias />
      <SearchTool />
    </div>
  );
}

export default NavProdC;
