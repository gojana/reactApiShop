import { Fragment, useState } from 'react';

const IncrementerInput = (props) => {
  let [counter, setCounter] = useState(1);

  const incrementHandler = () => {
    if (counter < 10) setCounter((count) => count + 1);
    props.increment();
  };
  const decrementHandler = () => {
    if (counter > 1) setCounter((count) => count - 1);
    props.decrement();
  };

  return (
    <Fragment>
      <div className="custom-number-input h-10 w-32">
        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
          <button
            onClick={decrementHandler}
            className=" bg-neutral text-white hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
          >
            {props.isLoading ? (
              <div className="w-4 h-4 border-2 border-dashed rounded-full border-slate-500 animate-spin"></div>
            ) : (
              <span className="m-auto text-2xl font-thin">-</span>
            )}
          </button>
          <label
            type="number"
            className="focus:outline-none text-center  bg-neutral font-semibold text-md   md:text-basecursor-default flex items-center text-white  outline-none"
            name="custom-input-number"
          >
            {props.show && counter}
          </label>
          <button
            onClick={incrementHandler}
            className=" bg-neutral text-white  hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
          >
            {props.isLoading ? (
              <div className="w-4 h-4 border-2 border-dashed rounded-full border-slate-500 animate-spin"></div>
            ) : (
              <span className="m-auto text-2xl font-thin">+</span>
            )}
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default IncrementerInput;
