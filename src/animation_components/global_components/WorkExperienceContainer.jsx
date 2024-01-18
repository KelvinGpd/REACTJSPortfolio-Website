import { motion } from "framer-motion"; 
import { useState } from "react";

const WorkExperienceContainer = ({experience, setSelectedExperience, selectedExperience}) => {

    const handleClick = () => {
        setSelectedExperience(experience);
    }

    return (
        selectedExperience ? null :
        <motion.div 
            className="work-experience-container"
            initial = {{height : 0}}
            animate = {{height: "100%", transition : {duration : 1.3} }}
        >
            <motion.div 
                className="work-experience-content" 
                initial={{ scale: 1, opacity:0.7 }} 
                whileHover={{scale:1.02, x:-5, y:-5, opacity:1}}
                onClick={handleClick}
            >
                <img src={experience.icon} width={"100%"}/>
                <div className="work-experience-text-container">
                    <div className="work-experience-title">
                        {experience.company.toUpperCase()} <br/>
                        {experience.title.toUpperCase()}
                    </div>
                    <div className="work-experience-duration">
                        {experience.duration}
                    </div>
                </div>
            </motion.div>
            <div className="box-shadow"/>
        </motion.div>
    )

}
export default WorkExperienceContainer;
