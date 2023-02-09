const FormInput = (props) => {
  return (
    <div>
      <label className="text-sm block mb-1 text-white font-medium">
        {`${props.inputName}`}
      </label>
      <input
        type="text"
        id="name"
        className="input bg-base-100 border rounded py-1 px-3 block w-full"
        placeholder={`${props.placeHolder}`}
        ref={props.refInput}
      />
    </div>
  );
};
export default FormInput;
