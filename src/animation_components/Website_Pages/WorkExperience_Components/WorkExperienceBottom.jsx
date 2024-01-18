import { motion } from "framer-motion"; 
import { useState } from "react";
import MediaHolder from "../../global_components/MediaHolder";

const WorkExperienceBottom = ({experience}) => {
    const [selectedMedia, setSelectedMedia] = useState(null);

    return (
        <div className="selected-experience-bottom">

            <motion.div 
                className="selected-experience-media-picker-container"
                initial={{height : "20%"}}
                animate = {{height : "100%", transition: {duration: 1.5}}}
            >
                <motion.div 
                    className="selected-experience-media-picker"
                    initial={{ scale: 1, opacity:0.7 }} 
                    whileHover={{scale:1.02, x:-4, y:-4, opacity:1}}
                >
                    {experience.media.map((media) => {
                        return (
                            <motion.div 
                                className="media-thumbnail-display"
                                whileHover={{scale:1.1}}
                                onClick={() => setSelectedMedia(media)}
                            >
                                <MediaHolder
                                    mediaPath={media.path}
                                />
                                <div className="media-thumbnail-alt">{media.alt}</div>
                            </motion.div>
                        )
                    })}
                </motion.div>
                <div className="box-shadow"/>
            </motion.div>

            <motion.div 
                className="selected-experience-media-display-container"
                initial={{height : "20%"}}
                animate = {{height : "100%", transition: {duration: 1.5}}}
            >
                <motion.div 
                    className="selected-experience-media-display"
                    initial={{ scale: 1, opacity:0.7 }} 
                    whileHover={{scale:1.02, x:-4, y:-4, opacity:1}}
                >
                    <div className="selected-experience-media-container">
                        <MediaHolder
                            playVideo = {true}
                            mediaPath= { selectedMedia? selectedMedia.path : "" }
                            hasOutline = {true}
                        /> 
                        <motion.div className="selected-experience-description-container">
                            {selectedMedia ? selectedMedia.description : "Pick an image/video to preview"}
                        </motion.div>
                    </div> 
                    
                </motion.div>
                <div className="box-shadow"/>
            </motion.div>

        </div>
    )

}
export default WorkExperienceBottom;