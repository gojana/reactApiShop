import upsetMole from '../../assets/upsetMole.svg';
import sitMole from '../../assets/sitMole.webp';
const ErrorCard = (props) => {
  let imgType;
  if (props.img === 'work') imgType = sitMole;
  if (props.img === 'error') imgType = upsetMole;

  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content flex-col justify-center lg:flex-row">
        <img src={imgType} alt="" />
        <div className="flex flex-col ">
          <h1 className="text-5xl font-bold">{props.message}</h1>
          <p className="py-6">{props.messageDetail}</p>
        </div>
      </div>
    </div>
  );
};
export default ErrorCard;
