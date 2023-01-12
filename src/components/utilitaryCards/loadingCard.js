const LoadingCard = (props) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <button className={`btn btn-primary loading ${props.css}`}>Cargando</button>
      </div>
    </div>
  );
};

export default LoadingCard;
