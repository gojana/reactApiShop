const VisitMap = (props) => {
  return (
    <div className="lg:w-2/3 md:w-1/2  rounded-lg overflow-hidden sm:mr-10 p-4 lg:pr-20 lg:-ml-5 md:pr-20 md:ml-10  flex items-end justify-center ">
      {props.children}
    </div>
  );
};
export default VisitMap;
