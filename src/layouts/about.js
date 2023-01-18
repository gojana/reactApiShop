import AboutCard from '../components/about/aboutCard';
import AboutMe from '../components/about/aboutMeCard';

const About = () => {
  return (
    <div className="flex lg:flex-row items-start md:flex-row sm:flex-col mt-12">
      <div className="flex flex-col lg:-mr-9 md:mr-3 md:ml-6 sm:mb-5 sm:mr-2 sm:ml-2">
        <AboutMe />
      </div>
      <div className="flex flex-col ml-8 w-full sm:ml-2 sm:mr-5 ">
        <AboutCard />
      </div>
    </div>
  );
};
export default About;
