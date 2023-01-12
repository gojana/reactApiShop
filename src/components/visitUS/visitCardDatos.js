import { WhatsAppIcon } from '../icons/icons';

const VisitDatos = () => {
  return (
    <div className="bg-neutral relative flex flex-wrap py-6 rounded shadow-md">
      <div className="lg:w-1/2 px-6">
        <h2 className="title-font font-semibold text-white tracking-widest text-xs">
          Direccion
        </h2>
        <p className="mt-1 text-primary">Calle imaginaria #406</p>
      </div>
      <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
        <h2 className="title-font font-semibold text-white tracking-widest text-xs">
          EMAIL
        </h2>
        <button className="text-green-500 leading-relaxed">
          elviejo@email.com
        </button>
        <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4 mr-5">
          Telefono
        </h2>
        <div className="flex">
          <WhatsAppIcon />
          <p className="leading-relaxed text-primary">123-456-7890</p>
        </div>
      </div>
    </div>
  );
};
export default VisitDatos;
