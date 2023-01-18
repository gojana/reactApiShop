const AdminMenuEl = (props) => {
  return (
    <div className={` mr-5`}>
      <div
        className={`btn ${props.colorMenuCard} lg:btn-md md:btn-md sm:btn-wide sm:mt-2`}
      >
        <div className="flex flex-row ">
          {props.img}
          <p className=" text-white text-2xl ml-2">{props.title}</p>
        </div>
      </div>
    </div>
  );
};
export default AdminMenuEl;
