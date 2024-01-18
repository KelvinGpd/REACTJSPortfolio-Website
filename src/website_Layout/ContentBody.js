import Rectangle from "../animation_components/global_components/Rectangle.js";
import Skills from "../animation_components/Website_Pages/Skills.jsx";
import AboutMe from "../animation_components/Website_Pages/AboutMe.jsx";
import ProjectsPage from "../animation_components/Website_Pages/ProjectsPage.jsx";
import WorkExperiencePage from "../animation_components/Website_Pages/WorkExperiencePage.jsx";

const ContentBody = ({activeButton}) => {

  const setActivePage = () => {
    switch(activeButton) {
        case 'Projects':
            return <ProjectsPage/>
        case 'Skills':
            return <Skills/>
        case 'About me':
            return <AboutMe/>
        case 'Work experience':
            return <WorkExperiencePage/> 
        default:
            return null;
    };
  };

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