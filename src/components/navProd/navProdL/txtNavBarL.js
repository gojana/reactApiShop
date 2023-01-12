const TxtNavBarL = (props) => {
  return (
    <div className="flex-1">
      <p className="font-black visible lg:visible md:visible md:-ml-6 lg:text-3xl lg:p-10 xl:text-3xl md:text-2xl md:pl-9 sm:invisible ">
        {props.text}
      </p>
    </div>
  );
};

export default TxtNavBarL;
