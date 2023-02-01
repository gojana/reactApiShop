const ButtonCommon = (props) => {
  return (
    <button
      className={`${props.css} btn btn-primary  text-white`}
      onClick={props.action}
      type="button"
    >
      {props.name}
    </button>
  );
};

export default ButtonCommon;
