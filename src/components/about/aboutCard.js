import ItemsCardCollapse from './itemsCard';

import { ReactIcon } from '../icons/icons';
import { NodeJsIcon } from '../icons/icons';
import { MongoIcon } from '../icons/icons';
import { TailwindIcon } from '../icons/icons';
import { DockerIcon } from '../icons/icons';
import { HerokuIcon } from '../icons/icons';

import { ReactCardText } from './ItemsCardText';
import { NodeCardText } from './ItemsCardText';
import { TailwindCardText } from './ItemsCardText';
import { MongoCardText } from './ItemsCardText';
import { DockerCardText } from './ItemsCardText';
import { HerokuCardText } from './ItemsCardText';

const AboutCard = () => {
  return (
    <div className="card bg-neutral text-white lg:ml-10 md:lg-10 sm:-ml-5 ">
      <div className="card-body sm:text-sm">
        <h2 className="card-title ">Sobre la pagina</h2>
        <br></br>
        <p>
          Bienvenidos! esta pagina de e-shop simple es parte de mi portafolio
          para mostrar mis habilidades a reclutadores o potenciales empleadores.{' '}
          <br></br>
          <br></br>Los lenguajes y herramientas involucradas en la creacion de
          esta app son las listadas a continuacion:{' '}
        </p>

        <br></br>
        <h2 className="card-title">Tecnologias y Herramientas</h2>
        <br></br>
        <div className="flex flex-col gap-5 ">
          <ItemsCardCollapse
            icon={<ReactIcon />}
            title={'React'}
            text={<ReactCardText />}
          />
          <ItemsCardCollapse
            icon={<NodeJsIcon />}
            title={'NodeJS'}
            text={<NodeCardText />}
          />
          <ItemsCardCollapse
            icon={<MongoIcon />}
            title={'MongoDB'}
            text={<MongoCardText />}
          />
          <ItemsCardCollapse
            icon={<TailwindIcon />}
            title={'Tailwind CSS'}
            text={<TailwindCardText />}
          />
          <h2 className="card-title ">Contenedores y Deploy</h2>
          <ItemsCardCollapse
            icon={<DockerIcon />}
            title={'Docker'}
            text={<DockerCardText />}
          />
          <ItemsCardCollapse
            icon={<HerokuIcon />}
            title={'Heroku'}
            text={<HerokuCardText />}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
