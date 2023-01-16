import AboutCard from '../components/about/aboutCard';
import AboutMe from '../components/about/aboutMeCard';

const About = () => {
  return (
    <div className="flex lg:flex-row  md:flex-row sm:flex-col sm:items-center mt-8">
      <div className="flex flex-col ml-6 lg:-mr-9 md:-mr-9 sm:mr-0">
       <AboutMe/> 
       
      </div>
      <div className="flex flex-col ml-8 w-full mr-5">
        <AboutCard/>
      </div>
    </div>
  );
};
export default About;
