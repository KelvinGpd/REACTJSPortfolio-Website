import RoundedRectangle from "../basic shapes/RoundedRectangle";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { motion } from "framer-motion";



const ProjectHolder = ({color1, color2, title, description, image, link}) => {

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
                    <p>{description}</p>
                </div>
                <RoundedRectangle width="100%" height="100%" color={color2} borderRadius="10px"/>
            </div>
        </div>
    );
}; 
export default ProjectHolder