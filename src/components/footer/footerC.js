import LogoFooter from './logoFooter';
import FooterEl from './footerEl';
import FooterMedia from './footerMedia';

import { TwitterIcon } from '../icons/icons';
import { YoutubeIcon } from '../icons/icons';
import { FacebookIcon } from '../icons/icons';
import { ReactIcon } from '../icons/icons';
import { NodeJsIcon } from '../icons/icons';
import { MongoIcon } from '../icons/icons';
import {TailwindIcon} from '../icons/icons';

const FooterC = () => {
  return (
    <footer className="footer p-10 mt-20 bg-neutral lg:justify-between md:justify-between text-white sm:justify-center">
      <LogoFooter />
      <FooterEl title={'Informacion'} />
      <FooterMedia
        title={'Redes Sociales'}
        comp1={<TwitterIcon />}
        comp2={<YoutubeIcon />}
        comp3={<FacebookIcon />}
      />
      <FooterMedia
        title={'Desarrollado con:'}
        comp1={<ReactIcon />}
        comp2={<NodeJsIcon />}
        comp3={<MongoIcon />}
        comp4={<TailwindIcon/>}
      />
    </footer>
  );
};
export default FooterC;
