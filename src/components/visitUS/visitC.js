import VisitMapW from './visitMapW';
import VisitMap from './visitMap';
import VisitCardDatos from './visitCardDatos';
import VisitCardHorarios from './visitCardHorarios';
const VisitC = () => {
  return (
    <div className="container relative px-5 py-24 mx-auto flex sm:flex-nowrap lg:flex-row md:flex-row flex-wrap sm:flex-col">
      <VisitMapW>
        <VisitMap />
        <VisitCardDatos />
      </VisitMapW>
      <VisitCardHorarios />
    </div>
  );
};
export default VisitC;
