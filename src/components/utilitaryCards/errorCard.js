import upsetMole from '../../assets/upsetMole.svg';

const ErrorCard = () => {
  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content flex-col justify-center lg:flex-row">
        <img src={upsetMole} alt="" />
        <div className="flex flex-col ">
          <h1 className="text-5xl font-bold">OOPS! algo salio muy Mal!</h1>
          <p className="py-6">sip, aqui va el error 404</p>
        </div>
      </div>
    </div>
  );
};
export default ErrorCard;
