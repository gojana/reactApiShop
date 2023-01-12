import MenuItems from './menuItems';

const MenuItemsC=() =>{
  return (
    <ul className="menu menu-horizontal p-0 text-white ">
      <MenuItems name="Productos" route={'/products'} />
      <MenuItems name="Blog" />
      <MenuItems name="About" />
    </ul>
  );
}
export default MenuItemsC;
