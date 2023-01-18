import LogoFooter from './logoFooter';
import FooterEl from './footerEl';
import FooterMedia from './footerMedia';

import { TwitterIcon } from '../icons/icons';
import { YoutubeIcon } from '../icons/icons';
import { FacebookIcon } from '../icons/icons';
import { ReactIcon } from '../icons/icons';
import { NodeJsIcon } from '../icons/icons';
import { MongoIcon } from '../icons/icons';
import { TailwindIcon } from '../icons/icons';

const FooterC = () => {
  return (
    <footer className="footer p-10 mt-20 bg-neutral lg:justify-between md:justify-between text-white sm:justify-center">
      <LogoFooter />
      <FooterEl title={'Informacion'} />
      <FooterMedia
        title={'Redes Sociales'}
        comp1={<TwitterIcon />}
        linkTo1={'https://twitter.com/'}
        comp2={<YoutubeIcon />}
        linkTo2={'http://youtube.com'}
        comp3={<FacebookIcon />}
        linkTo3={'http://facebook.com'}
      />
      <FooterMedia
        title={'Desarrollado con:'}
        comp1={<ReactIcon />}
        linkTo1={'http://reactjs.com'}
        comp2={<NodeJsIcon />}
        linkTo2={'https://nodejs.org/en/'}
        comp3={<MongoIcon />}
        linkTo3={'https://www.mongodb.com/'}
        comp4={<TailwindIcon />}
        linkTo4={'https://tailwindcss.com/'}
      />
    </footer>
  );
};
export default FooterC;
