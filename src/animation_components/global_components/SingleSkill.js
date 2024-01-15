import { useRef, useState } from "react";
import Rectangle from "./Rectangle";
import { motion } from "framer-motion"; 


const SingleSkill = ({name, image, color, shadowCol}) => {
    
    const shadowMotionDiv = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    }

    const handleHoverEnd = () => {
        setIsHovered(false);
    }

    return(
        <div className="boxAndShadow">
            <motion.div className="SkillBox" initial={{ scale: 1, opacity:0.7 }} whileHover={{scale:1.05, x:-5, y:-5, opacity:1}} onHoverStart={handleHover} onHoverEnd={handleHoverEnd}>
                <div className="singleSkillContent">
                    <h3 style={{textAlign:"center", margin:"3%"}}>{name}</h3>
                    <img src={image} className="skillImg"/>
                </div>
                <div className="singleSkillBackground">
                    <Rectangle width="80%" height="80%" color={color}/>
                </div> 
            </motion.div>
            {isHovered ? (
                <motion.div className="boxShadow" ref={shadowMotionDiv} initial={{opacity:1}} animate={{opacity:0.4}} transition={{duration:0.2}}>  
                    <Rectangle width="80%" height="80%" color={shadowCol}/>
                </motion.div>
            ) : (
                <div className="boxShadow">  
                    <Rectangle width="80%" height="80%" color={shadowCol}/>
                </div>
            )}
        </div>
    );
};

export default SingleSkill