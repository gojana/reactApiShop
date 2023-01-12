import { Link } from 'react-router-dom';
const BlogElem = (props) => {
  return (
    <div className="flex flex-col justify-between p-5 border border-primary bg-neutral rounded shadow-sm">
      <div className="flex justify-center">
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full  bg-indigo-50 ">
          <img src={props.img} alt="" className="w-12 h-12 rounded-full " />
        </div>
      </div>
      <h6 className="mb-2 font-semibold leading-5 text-primary ">
        {props.cardTitle}
      </h6>
      <p className="mb-3 text-sm text-white">{props.cardBodyText}</p>
      <Link
        to='/welcome'
        className="inline-flex items-center font-semibold transition-colors duration-200 text-primary hover:text-white"
      >
        Aprenda mas
      </Link>
    </div>
  );
};
export default BlogElem;
