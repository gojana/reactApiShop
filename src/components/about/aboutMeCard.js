import { GitHubIcon } from '../icons/icons';
import { PhoneIcon } from '../icons/icons';
import { LocationIcon } from '../icons/icons';
import { MailIcon } from '../icons/icons';
import imagenCV from '../../assets/imagenCV.jpeg';

const AboutMe = () => {
  return (
    <div className="card bg-neutral text-white lg:-mt-60 md:-mt-72 md:-mr-2 md:ml-2 sm:mb-5 sm:-ml-5 ">
      <div className="card-body sm:text-sm items-center">
        <div className="avatar">
          <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={imagenCV} alt="" />
          </div>
        </div>
        <p className="mt-3 text-4xl sm:text-3xl">Gonzalo Jaña Silva</p>
        <p className="mt-3 text-xl">Desarrollador MERN stack </p>
        <div className="flex flex-row items-center">
          <GitHubIcon />
          <a
            href="https://github.com/gojana"
            className="ml-2 mr-5 text-white  hover:text-primary"
          >
            https://github.com/gojana
          </a>
        </div>
        <div className="flex flex-row items-center mr-16">
          <PhoneIcon />
          <p className="ml-2 mr-5  text-white  ">
            +56 9 57111524
          </p>
        </div>
        <div className="flex flex-row items-center">
          <MailIcon />
          <p className="ml-2 mr-5  text-white  ">
            gonzalo.jana@hotmail.com
          </p>
        </div>
        <div className="flex flex-row items-center mr-20">
          <LocationIcon />
          <p className="ml-2 mr-5  text-white  ">
            Santiago, Chile
          </p>
        </div>

        <p className="mt-3 text-xl">Acerca de Mi </p>
        <br></br>
        <p className="-mt-2 text-sm text-center">
          soy un desarrollador stack MERN junior en busca de nuevos desafíos
          para seguir enriqueciendo mis conocimientos y obtener herramientas
          para el siempre cambiante entorno informático.<br></br>
          mis fortalezas son: adaptabilidad a los cambios, flexibilidad en el
          uso de lenguajes y la habilidad para comunicarme de forma efectiva con
          profesionales extranjeros de habla inglesa.{' '}
        </p>
      </div>
    </div>
  );
};
export default AboutMe;
