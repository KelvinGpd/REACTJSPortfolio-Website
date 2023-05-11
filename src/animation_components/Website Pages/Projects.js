import ProjectHolder from "./ProjectHolder";
import project from "./Projects.Json";
import { useState, useEffect } from "react";

const Projects = () => { 

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(project)
            .then(response => response.json())
            .then(data => setProjects(data));
    }, []);

    return(
        <div className = "Projects">
            {projects.map((project) => (
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

export default Projects;

