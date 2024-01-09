import Rectangle from "./basic shapes/Rectangle";
import Projects from "./Website Pages/Projects";
import Skills from "./Website Pages/Skills";
import AboutMe from "./Website Pages/AboutMe";
import WorkExperience from "./Website Pages/WorkExperience";

const ContentBody = ({activeButton}) => {

  const setActivePage = () => {
    console.log(activeButton)
    switch(activeButton) {
        case 'Projects':
            return <Projects/>
        case 'Skills':
            return <Skills/>
        case 'About me':
            return <AboutMe/>
        case 'Work experience':
            return <WorkExperience/> 
        default:
            return null;
    }
}
    return (
      <div className="contentBody">
        <div className="initial"> 
          <div className="currentPageContent">
              {setActivePage()}
          </div>
          <Rectangle width="100%" height="100%" color="#fae7e0" />
        </div>
      </div>
    );
  };
  
  export default ContentBody;