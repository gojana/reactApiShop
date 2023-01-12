import BlogElem from './blogElem';
import weatherIcon from '../../assets/weatherIcon.png';
import wateringPlant from '../../assets/wateringPlant.png';
import bug from '../../assets/bug.png';
import noob from '../../assets/pollo.png';

const BlogElemC=(props)=> {
  return (
    <div className="flex">
      <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <BlogElem
          img={weatherIcon}
          cardTitle={'Epocas de cultivo'}
          cardBodyText={
            'Aprenda a sacarle el provecho a cada temporada del año con las verduras correctas'
          }
        />
        <BlogElem
          img={wateringPlant}
          cardTitle={'Tecnicas de cultivo'}
          cardBodyText={
            'Algunas verduras requieren formas de cultivos que otras no, aqui profundizamos en ello'
          }
        />
        <BlogElem
          img={bug}
          cardTitle={'Indeseables Pestes'}
          cardBodyText={
            'Aprenda a tratar con los pequeños invitados de piedra de forma organica y segura para sus cultivos'
          }
        />
        <BlogElem
          img={noob}
          cardTitle={'Guia para Principiantes'}
          cardBodyText={
            'es totalmente "verde" en el mundo del cultivo?, no hay problema! aqui consejos y tips para ayudarlo'
          }
        />
      </div>
    </div>
  );
}
export default BlogElemC;
