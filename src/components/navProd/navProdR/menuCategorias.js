import useComponentVisible from '../../../hooks/useComponentVisible';

const MenuCategorias = (props) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const onClickHandler = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  return (
    <div className="dropdown dropdown-hover pr-15" ref={ref}>
      <label
        tabIndex="0"
        className="btn m-1 btn-primary text-white"
        onClick={onClickHandler}
      >
        Categorias
      </label>
      <ul
        tabIndex="0"
        className={`dropdown-content menu p-2  text-white shadow bg-neutral  rounded-box w-52 ${
          isComponentVisible ? 'visible' : 'hidden'
        }`}
      >
        <li>
          <button value="" onClick={props.filterEx}>
            Todos los Productos
          </button>
        </li>
        <li>
          <button value="barbecho" onClick={props.filterEx}>
            Barbechos
          </button>
        </li>
        <li>
          <button value="semilla" onClick={props.filterEx}>
            Semillas
          </button>
        </li>
        <li>
          <button value="almacigo" onClick={props.filterEx}>
            Almacigos
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MenuCategorias;
