import { motion } from "framer-motion"; 

const WorkExperienceTop = ({experience, setSelectedExperience}) => {
    
    return (
        <motion.div 
            className="selected-experience-top-container"
            initial={{width : 0}}
            animate = {{width : "100%", transition: {duration: 1.5}}}
        >
            <motion.div 
                className="selected-experience-top"
                initial={{ scale: 1, opacity:0.7 }} 
                whileHover={{scale:1.02, x:-4, y:-4, opacity:1}}
            >
                <img src={experience.icon}/>
                <div className="selected-experience-top-text">
                    <div className="selected-experience-header"> 
                        {experience.company.toUpperCase() + " • " + experience.title.toUpperCase()}  
                    </div>
                    <div className="selected-experience-description">
                        <div>{experience.duration}</div>
                        <div>{experience.description}</div>
                    </div>
                </div>
                <motion.div 
                    className="close-icon-container"
                    initial={{ scale: 1, opacity:0.7 }} 
                    whileHover={{scale:1.1}}
                >
                    <img src="./assets/close_icon.svg" onClick={() => setSelectedExperience(null)} />
                </motion.div>
            </motion.div>
            <div className="box-shadow"/>
        </motion.div>
    )

}
export default WorkExperienceTop;
