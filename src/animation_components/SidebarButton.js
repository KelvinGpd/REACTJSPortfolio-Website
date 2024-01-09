import { motion } from "framer-motion";
import RoundedRectangle from "./basic shapes/RoundedRectangle";

const SidebarButton = ({text, svgIcon, currentActive, onClick}) => {

    const handleClick = () => {
        onClick(text);
    };

    return( 
        <motion.div className="buttonContainer" onClick={handleClick}
            whileHover={{scale : 0.95}}
        >
            <div className="buttonIcon" style={currentActive? { color: "#D3BBAF" } : { color: "#fae7e0" }}>
                {svgIcon}
            </div>
            <p className="buttonText">{text}</p>
            <RoundedRectangle className="buttonRect" width="100%" height="100%" borderRadius="4px" 
                color = {currentActive ? "#fae7e0" : "#D3BBAF"}
            />
        </motion.div>
    );
};

export default SidebarButton;