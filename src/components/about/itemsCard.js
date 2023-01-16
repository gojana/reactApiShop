import useComponentVisible from '../../hooks/useComponentVisible';

export const ItemsCardCollapse = (props) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const onClickHandler = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  return (
    <div
      tabIndex={0}
      className={`collapse collapse-arrow border border-primary bg-neutral rounded-box  ${
        isComponentVisible ? 'collapse-open' : 'collapse-close'
      }`}
      ref={ref}
      onClick={onClickHandler}
    >
      <div className="flex flex-row collapse-title text-xl font-medium">
        <figure className="-mt-2">{props.icon}</figure>
        <h2 className="card-title -mt-3 ml-9 ">{props.title}</h2>
      </div>
      <div className={`collapse-content`}>{props.text}</div>
    </div>
  );
};

export default ItemsCardCollapse;
