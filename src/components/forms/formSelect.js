const FormSelect = (props) => {
  return (
    <div>
      <label className="text-sm text-white block mb-1 font-medium">{`${props.selectName}`}</label>
      <select
        className="select select-primary w-full max-w-xs"
        ref={props.refInput}
      >
        <option value={props.selectedValue}>{`opcion actual: ${
          props.selectedValue ? props.selectedValue : 'no tiene parametro '
        }`}</option>
        {props.items.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};
export default FormSelect;
