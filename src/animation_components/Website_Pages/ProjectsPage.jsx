import ProjectHolder from "../global_components/ProjectHolder";
import Projects from "../../data/Projects.json";

const ProjectsPage = () => { 

    return(
        <div className = "Projects">
            {Projects.map((project) => (
                <div className="projectBlock">
                  <ProjectHolder
                    color1={project.color1}
                    color2={project.color2}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    link={project.link}
                    skills={project.skills}
                  />
                </div>
            ))}
        </div>
    );
    
};

export default ProjectsPage;

