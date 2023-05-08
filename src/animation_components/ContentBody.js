import Rectangle from "./basic shapes/Rectangle";
import Projects from "./Website Pages/Projects";
import Skills from "./Website Pages/Skills";
import AboutMe from "./Website Pages/AboutMe";

const ContentBody = ({activeButton}) => {

  const setActivePage = () => {
    switch(activeButton) {
        case "projects":
            return <Projects/>

        case "skills":
            return <Skills/>

        case "aboutMe":
            return <AboutMe/>
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