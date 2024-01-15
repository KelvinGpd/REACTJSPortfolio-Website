import RoundedRectangle from "./RoundedRectangle";
import { motion } from "framer-motion";

const ProjectHolder = ({color1, color2, title, description, image, link, skills}) => {

    return(
        <div className="backgroundContainer">
            <div className="smallContainer">
                <motion.div className="smallContainerContent" whileHover={{scale : 1.05}}>
                    <a href={link} target="_blank"><img src={image}/></a>
                </motion.div>
                <RoundedRectangle width="100%" height="100%" color={color1} borderRadius="10px"/>
            </div>

            <div className="bigContainer">
                <div className="bigContainerContent">
                    <h2>{title}</h2>
                    <div className="projectSkills">
                        {skills.map((skill)=> (
                            <li>
                                {skill}
                            </li>
                        ))}
                    </div>
                    <p>{description}</p>
                </div>
                <RoundedRectangle width="100%" height="100%" color={color2} borderRadius="10px"/>
            </div>
        </div>
    );
}; 
export default ProjectHolder;