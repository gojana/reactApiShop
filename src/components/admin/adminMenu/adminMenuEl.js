const AdminMenuEl = (props) => {
  return (
    <div className={`mr-4 items-center`}>
      <div
        className={`btn ${props.colorMenuCard} lg:btn-md lg:w-full md:w-5/6 md:btn-wide-sm sm:btn-wide sm:mt-2`}
        onClick={props.action}
      >
        <div className="flex flex-row ">
          {props.img}
          <p className=" text-white  ml-2 lg:text-2xl md:text-sm  mt-2">
            {props.title}
          </p>
        </div>
      </div>
    </div>
  );
};
export default AdminMenuEl;
