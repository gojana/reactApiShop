const TextArea = (props) => {
  return (
    <div>
      <label className="text-sm block mb-1 text-white font-medium">
        {`${props.textAreaName} `}
      </label>
      <textarea
        placeholder={`aqui van las caracteristicas: ${1}`}
        className="textarea textarea-bordered textarea-md w-full max-w-xs"
      ></textarea>
    </div>
  );
};

export default TextArea;
