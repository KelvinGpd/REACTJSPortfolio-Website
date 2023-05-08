import { motion } from "framer-motion";
import RoundedRectangle from "./basic shapes/RoundedRectangle";
import AddReactionIcon from '@mui/icons-material/AddReaction';
import TerminalIcon from '@mui/icons-material/Terminal';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { Edit } from "@mui/icons-material";
import { useState, useEffect } from "react";

const SidebarButton = ({text, svgIcon, color1, color2, switchColor, currentActive, onClick}) => {

    const [textSvgColors, setColor] = useState(switchColor);
    const [backgroundColor, setBackgroundColor] = useState(currentActive ? color2 : color1);

    useEffect(() => {
        setBackgroundColor(currentActive ? color2 : color1);
        setColor(currentActive ? color1 : switchColor);
    }, [currentActive, color1, color2, switchColor]);

    const handleClick = () => {
        onClick(text);
      };

    const chooseIcon = () => {
        switch(svgIcon) {
            case "1":
                return <AddReactionIcon color="secondary" style={{ color: textSvgColors }}>
                        <Edit />
                        </AddReactionIcon>
            case "2":
                return <TerminalIcon color="secondary" style={{ color: textSvgColors }}> <Edit/> </TerminalIcon>

            case "3":
                return <EqualizerIcon color="#D3BBAF" style={{ color: textSvgColors }} ><Edit/> </EqualizerIcon>
            default:
                return null;
        }
    }

    return( 
        <motion.div className="buttonContainer" onClick={handleClick}
        whileHover={{scale :0.95}}
        >
            <p className="buttonText" style={{color: textSvgColors}}>{text}</p>
            <div className="buttonIcon">
                {chooseIcon()}
            </div>
            <RoundedRectangle className="buttonRect" width="100%" height="100%" borderRadius="4px" color= {backgroundColor}/>
        </motion.div>
    );
};

export default SidebarButton;