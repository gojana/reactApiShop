const TextArea = (props) => {
  return (
    <div>
      <label className="text-sm block mb-1 text-white font-medium">
        {`${props.textAreaName} `}
      </label>
      <textarea
        placeholder={`Caracteristicas adicionales :${props.characteristics}`}
        className="textarea textarea-bordered textarea-md w-full max-w-xs"
        ref={props.refInput}
      ></textarea>
    </div>
  );
};

export default TextArea;
