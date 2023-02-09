const FormUploadFile = (props) => {
  return (
    <div className="flex flex-col">
      <label className={`text-sm text-white mb-2  font-medium`}>
        {`${props.uploadName}`}
      </label>
      <input
        id="uploadImage"
        type="file"
        className="file-input file-input-sm file-input-primary file-input-bordered max-w-xs w-full "
        onChange={props.action}
      />
    </div>
  );
};
export default FormUploadFile;
